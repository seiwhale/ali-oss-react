import * as React from 'react';
import { Upload, Button, Icon } from 'antd';
import 'antd/dist/antd.css'

class AliOssReact extends React.Component {
  render() {
    return (
      <Upload>
        <Button>
          <Icon type="upload" />上传
        </Button>
      </Upload>
    )
  }
}

export default AliOssReact