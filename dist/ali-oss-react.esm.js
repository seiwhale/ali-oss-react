import 'antd/lib/upload/style';
import _Upload from 'antd/lib/upload';
import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import 'antd/lib/message/style';
import _message from 'antd/lib/message';
import 'core-js/modules/es6.function.name';
import 'regenerator-runtime/runtime';
import 'core-js/modules/es6.promise';
import 'core-js/modules/es6.object.to-string';
import { createElement, Component } from 'react';
import 'antd/dist/antd.css';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var OSS = require("ali-oss");

var AliOssReact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AliOssReact, _React$Component);

  function AliOssReact() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, AliOssReact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AliOssReact)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.DEFAULT_PROPS = {
      action: '/',
      multiple: false,
      beforeUpload: function beforeUpload(file, fileList) {
        return new Promise(function _callee(resolve, reject) {
          var _this$props, name, beforeUpload, file_name, result;

          return regeneratorRuntime.async(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this$props = _this.props, name = _this$props.name, beforeUpload = _this$props.beforeUpload;
                  file_name = name || file.name;

                  if (!beforeUpload) {
                    _this.upload(file_name, file);

                    resolve();
                  } else {
                    result = beforeUpload(file, fileList);

                    if (result && result.then) {
                      _this.upload(file_name, file);

                      resolve();
                    }
                  }

                  reject();

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          });
        });
      }
    }, _this.upload = function _callee2(object, file) {
      var _this$props2, onSuccess, onError, put_res, get_res;

      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$props2 = _this.props, onSuccess = _this$props2.onSuccess, onError = _this$props2.onError;
              _context2.prev = 1;
              _context2.next = 4;
              return regeneratorRuntime.awrap(_this.client.put(object, file));

            case 4:
              put_res = _context2.sent;
              console.log('put success: %j', put_res);

              _message.success("上传成功");

              _context2.next = 9;
              return regeneratorRuntime.awrap(_this.client.get(object));

            case 9:
              get_res = _context2.sent;
              console.log('get success: %j', get_res);
              onSuccess && onSuccess(put_res, get_res);
              _context2.next = 19;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](1);
              console.error('error: %j', _context2.t0);

              _message.error("上传失败");

              onError && onError(_context2.t0);

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 14]]);
    }, _temp));
  }

  _createClass(AliOssReact, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          region = _this$props3.region,
          accessKeyId = _this$props3.accessKeyId,
          accessKeySecret = _this$props3.accessKeySecret,
          bucket = _this$props3.bucket;
      this.client = new OSS({
        region: region,
        accessKeyId: accessKeyId,
        accessKeySecret: accessKeySecret,
        bucket: bucket
      });
    }
    /**
     * 上传文件
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          region = _this$props4.region,
          accessKeyId = _this$props4.accessKeyId,
          accessKeySecret = _this$props4.accessKeySecret,
          bucket = _this$props4.bucket,
          rest = _objectWithoutProperties(_this$props4, ["region", "accessKeyId", "accessKeySecret", "bucket"]);

      return createElement(_Upload, _extends({}, this.DEFAULT_PROPS, rest), createElement(_Button, null, createElement(_Icon, {
        type: "upload"
      }), "\u4E0A\u4F20"));
    }
  }]);

  return AliOssReact;
}(Component);

export default AliOssReact;
