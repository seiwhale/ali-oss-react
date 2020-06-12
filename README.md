<h1 align="center">Welcome to ali-oss-react 👋</h1>

[![Build Status](https://travis-ci.org/seiwhale/ali-oss-react.svg?branch=master)](https://travis-ci.org/seiwhale/ali-oss-react)
[![NPM Download](https://badgen.net/npm/dm/ali-oss-react)](https://www.npmjs.com/package/ali-oss-react)
[![NPM Version](https://badgen.net/npm/v/ali-oss-react)](https://www.npmjs.com/package/ali-oss-react)
[![NPM License](https://badgen.net/npm/license/ali-oss-react)](https://github.com/seiwhale/ali-oss-react/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/seiwhale/ali-oss-react/pulls)

React componet for ali-oss 📦

## Install

```sh
yarn install ali-oss-react
```

## Usage

[Check Demo](https://seiwhale.github.io/ali-oss-react)

### Props
| Prop	| Type	| Required	| Description | 
| -- | -- | -- | -- |
| accessKeyId	| string	| true	| Your accessKeyId | 
| accessKeySecret	| string	| true| Your accessKeySecret | 
| bucket	| string	| true | Your bucket name | 
| region	| string	| true	| oss region | 
| beforeUpload	| (file: RcFile, FileList: RcFile[]) => boolean &#124; PromiseLike<void> | false	| beforeUpload callback | 
| name	| string| false	| file name | 
| onError	| (err: Error) => void| false	| onError callback | 
| onSuccess	| (res: any, file: any) => void| false | onSuccess callback | 


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

* Website: https://seiwhale.github.com/
* Github: [@seiwhale](https://github.com/seiwhale)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
