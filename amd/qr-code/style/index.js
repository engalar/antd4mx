define(["exports", "@ant-design/cssinjs", "@ctrl/tinycolor", "antd4mx/style", "antd4mx/theme/internal"], function (_exports, _cssinjs, _tinycolor, _style, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genQRCodeStyle = function genQRCodeStyle(token) {
    var componentCls = token.componentCls,
      lineWidth = token.lineWidth,
      lineType = token.lineType,
      colorSplit = token.colorSplit;
    return _defineProperty(_defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: token.paddingSM,
      backgroundColor: token.colorWhite,
      borderRadius: token.borderRadiusLG,
      border: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorSplit),
      position: 'relative',
      overflow: 'hidden'
    }, "& > ".concat(componentCls, "-mask"), _defineProperty({
      position: 'absolute',
      insetBlockStart: 0,
      insetInlineStart: 0,
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      color: token.colorText,
      lineHeight: token.lineHeight,
      background: token.QRCodeMaskBackgroundColor,
      textAlign: 'center'
    }, "& > ".concat(componentCls, "-expired, & > ").concat(componentCls, "-scanned"), {
      color: token.QRCodeTextColor
    })), '> canvas', {
      alignSelf: 'stretch',
      flex: 'auto',
      minWidth: 0
    }), '&-icon', {
      marginBlockEnd: token.marginXS,
      fontSize: token.controlHeight
    }))), "".concat(componentCls, "-borderless"), {
      borderColor: 'transparent'
    });
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      QRCodeMaskBackgroundColor: new _tinycolor.TinyColor(token.colorBgContainer).setAlpha(0.96).toRgbString()
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('QRCode', function (token) {
    var mergedToken = (0, _internal.mergeToken)(token, {
      QRCodeTextColor: token.colorText
    });
    return genQRCodeStyle(mergedToken);
  }, prepareComponentToken);
});