define(["exports", "antd4mx/theme/internal"], function (_exports, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // ============================== Shared ==============================
  var genSharedEmptyStyle = function genSharedEmptyStyle(token) {
    var componentCls = token.componentCls,
      margin = token.margin,
      marginXS = token.marginXS,
      marginXL = token.marginXL,
      fontSize = token.fontSize,
      lineHeight = token.lineHeight;
    return _defineProperty({}, componentCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      marginInline: marginXS,
      fontSize: fontSize,
      lineHeight: lineHeight,
      textAlign: 'center'
    }, "".concat(componentCls, "-image"), {
      height: token.emptyImgHeight,
      marginBottom: marginXS,
      opacity: token.opacityImage,
      img: {
        height: '100%'
      },
      svg: {
        maxWidth: '100%',
        height: '100%',
        margin: 'auto'
      }
    }), "".concat(componentCls, "-description"), {
      color: token.colorText
    }), "".concat(componentCls, "-footer"), {
      marginTop: margin
    }), '&-normal', _defineProperty(_defineProperty({
      marginBlock: marginXL,
      color: token.colorTextDisabled
    }, "".concat(componentCls, "-description"), {
      color: token.colorTextDisabled
    }), "".concat(componentCls, "-image"), {
      height: token.emptyImgHeightMD
    })), '&-small', _defineProperty({
      marginBlock: marginXS,
      color: token.colorTextDisabled
    }, "".concat(componentCls, "-image"), {
      height: token.emptyImgHeightSM
    })));
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Empty', function (token) {
    var componentCls = token.componentCls,
      controlHeightLG = token.controlHeightLG,
      calc = token.calc;
    var emptyToken = (0, _internal.mergeToken)(token, {
      emptyImgCls: "".concat(componentCls, "-img"),
      emptyImgHeight: calc(controlHeightLG).mul(2.5).equal(),
      emptyImgHeightMD: controlHeightLG,
      emptyImgHeightSM: calc(controlHeightLG).mul(0.875).equal()
    });
    return [genSharedEmptyStyle(emptyToken)];
  });
});