import * as React from 'react';
import { Upload, Button, Icon, message } from 'antd';
import { UploadProps, RcFile } from 'antd/es/upload';
import 'antd/dist/antd.css'

const OSS = require("ali-oss")

type OmitProps = 'beforeUpload';

/**
 * AliOssProps
 */
export interface AliOssProps extends Omit<UploadProps, OmitProps> {
  /** oss region */
  region: string;
  /** Your accessKeyId */
  accessKeyId: string;
  /** Your accessKeySecret */
  accessKeySecret: string;
  /** Your bucket name */
  bucket: string;
  /** file name */
  name?: string;
  /** beforeUpload callback */
  beforeUpload?: (file: RcFile, FileList: RcFile[]) => boolean | PromiseLike<void>;
  /** onSuccess callback */
  onSuccess?: (res: any, file: any) => void;
  /** onError callback */
  onError?: (err: Error) => void;
}

/**
 * AliOssState
 */
export interface AliOssState {
  
} 

class AliOssReact extends React.Component<AliOssProps, AliOssState> {

  client: any;
  DEFAULT_PROPS: UploadProps = {
    action: '/',
    multiple: false,
    beforeUpload: (file: RcFile, fileList: RcFile[]) => {
      return new Promise(async (resolve, reject) => {
        const { name, beforeUpload } = this.props;
        const file_name = name || file.name;

        if (!beforeUpload) {
          this.upload(file_name, file);
          resolve();
        } else {
          const result = beforeUpload(file, fileList);
          if (result && (result as PromiseLike<any>).then) {
            this.upload(file_name, file);
            resolve();
          }
        }
        reject();
      })
    },
  };

  componentDidMount() {
    const { region, accessKeyId, accessKeySecret, bucket } = this.props;
    this.client = new OSS({
      region, accessKeyId, accessKeySecret, bucket
    });
  }

  /**
   * 上传文件
   */
  upload = async (object: string, file: RcFile) => {
    const { onSuccess, onError } = this.props;
    try {
      let put_res = await this.client.put(object, file); 
      console.log('put success: %j', put_res);
      message.success("上传成功");
      let get_res = await this.client.get(object);
      console.log('get success: %j', get_res);
      onSuccess && onSuccess(put_res, get_res)
    } catch(err) {
      console.error('error: %j', err);
      message.error("上传失败");
      onError && onError(err);
    }
  }

  render() {
    const { region, accessKeyId, accessKeySecret, bucket, ...rest } = this.props;

    return (
      <Upload
        {...this.DEFAULT_PROPS}
        {...rest}
      >
        <Button>
          <Icon type="upload" />上传
        </Button>
      </Upload>
    )
  }
}

export default AliOssReact