<h1 align="center">Welcome to ali-oss-react 👋</h1>

[![NPM Download](https://badgen.net/npm/dm/@crv/ali-oss-react)](https://www.npmjs.com/package/@crv/ali-oss-react)
[![NPM Version](https://badgen.net/npm/v/@crv/ali-oss-react)](https://www.npmjs.com/package/@crv/ali-oss-react)
[![NPM License](https://badgen.net/npm/license/@crv/ali-oss-react)](https://github.com/seiwhale/ali-oss-react/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/seiwhale/ali-oss-react/pulls)

React componet for ali-oss 📦

## Install

```sh
yarn install ali-oss-react
```

## Usage

[Check Demo](https://seiwhale.github.io/ali-oss-react)

### Props
| Prop	| Type	| Required	| Description| 
| -- | -- | -- | -- | -- |
| accessKeyId	| string	| true	| Your accessKeyId| 
| accessKeySecret	| string	| true| Your accessKeySecret| 
| bucket	| string	| true | Your bucket name| 
| region	| string	| true	| oss region| 
| beforeUpload	| (file: RcFile, FileList: RcFile[]) => boolean \| PromiseLike<void>	| false	| | beforeUpload callback| 
| name	| string| false	| file name| 
| onError	| (err: Error) => void| false	| onError callback| 
| onSuccess	| (res: any, file: any) => void| false | onSuccess callback| 


### How

```jsx
import AliOssReact from "./index.tsx";

<AliOssReact
  region="xxxx"
  accessKeyId="xxxx"
  accessKeySecret="xxxx"
  bucket="xxxx"
/>
```

## Author

👤 **seiwhale**

* Website: https://lisj.ml/
* Github: [@seiwhale](https://github.com/seiwhale)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_