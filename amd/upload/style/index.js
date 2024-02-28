define(["exports", "antd4mx/style/index", "antd4mx/style/motion/index", "antd4mx/theme/internal", "antd4mx/upload/style/dragger", "antd4mx/upload/style/list", "antd4mx/upload/style/motion", "antd4mx/upload/style/picture", "antd4mx/upload/style/rtl"], function (_exports, _index, _index2, _internal, _dragger, _list, _motion, _picture, _rtl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genBaseStyle = function genBaseStyle(token) {
    var componentCls = token.componentCls,
      colorTextDisabled = token.colorTextDisabled;
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty({}, componentCls, {
      outline: 0,
      "input[type='file']": {
        cursor: 'pointer'
      }
    }), "".concat(componentCls, "-select"), {
      display: 'inline-block'
    }), "".concat(componentCls, "-disabled"), {
      color: colorTextDisabled,
      cursor: 'not-allowed'
    })));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      actionsColor: token.colorTextDescription
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Upload', function (token) {
    var fontSizeHeading3 = token.fontSizeHeading3,
      fontHeight = token.fontHeight,
      lineWidth = token.lineWidth,
      controlHeightLG = token.controlHeightLG,
      calc = token.calc;
    var uploadToken = (0, _internal.mergeToken)(token, {
      uploadThumbnailSize: calc(fontSizeHeading3).mul(2).equal(),
      uploadProgressOffset: calc(calc(fontHeight).div(2)).add(lineWidth).equal(),
      uploadPicCardSize: calc(controlHeightLG).mul(2.55).equal()
    });
    return [genBaseStyle(uploadToken), (0, _dragger["default"])(uploadToken), (0, _picture.genPictureStyle)(uploadToken), (0, _picture.genPictureCardStyle)(uploadToken), (0, _list["default"])(uploadToken), (0, _motion["default"])(uploadToken), (0, _rtl["default"])(uploadToken), (0, _index2.genCollapseMotion)(uploadToken)];
  }, prepareComponentToken);
});