define(["exports", "@ant-design/cssinjs", "antd4mx/style", "antd4mx/theme/internal"], function (_exports, _cssinjs, _style, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // ============================== Shared ==============================
  var genSharedBackTopStyle = function genSharedBackTopStyle(token) {
    var componentCls = token.componentCls,
      backTopFontSize = token.backTopFontSize,
      backTopSize = token.backTopSize,
      zIndexPopup = token.zIndexPopup;
    return _defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty(_defineProperty({
      position: 'fixed',
      insetInlineEnd: token.backTopInlineEnd,
      insetBlockEnd: token.backTopBlockEnd,
      zIndex: zIndexPopup,
      width: 40,
      height: 40,
      cursor: 'pointer',
      '&:empty': {
        display: 'none'
      }
    }, "".concat(componentCls, "-content"), {
      width: backTopSize,
      height: backTopSize,
      overflow: 'hidden',
      color: token.backTopColor,
      textAlign: 'center',
      backgroundColor: token.backTopBackground,
      borderRadius: backTopSize,
      transition: "all ".concat(token.motionDurationMid),
      '&:hover': {
        backgroundColor: token.backTopHoverBackground,
        transition: "all ".concat(token.motionDurationMid)
      }
    }), "".concat(componentCls, "-icon"), {
      fontSize: backTopFontSize,
      lineHeight: (0, _cssinjs.unit)(backTopSize)
    })));
  };
  var genMediaBackTopStyle = function genMediaBackTopStyle(token) {
    var componentCls = token.componentCls,
      screenMD = token.screenMD,
      screenXS = token.screenXS,
      backTopInlineEndMD = token.backTopInlineEndMD,
      backTopInlineEndXS = token.backTopInlineEndXS;
    return _defineProperty(_defineProperty({}, "@media (max-width: ".concat((0, _cssinjs.unit)(screenMD), ")"), _defineProperty({}, componentCls, {
      insetInlineEnd: backTopInlineEndMD
    })), "@media (max-width: ".concat((0, _cssinjs.unit)(screenXS), ")"), _defineProperty({}, componentCls, {
      insetInlineEnd: backTopInlineEndXS
    }));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      zIndexPopup: token.zIndexBase + 10
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('BackTop', function (token) {
    var fontSizeHeading3 = token.fontSizeHeading3,
      colorTextDescription = token.colorTextDescription,
      colorTextLightSolid = token.colorTextLightSolid,
      colorText = token.colorText,
      controlHeightLG = token.controlHeightLG,
      calc = token.calc;
    var backTopToken = (0, _internal.mergeToken)(token, {
      backTopBackground: colorTextDescription,
      backTopColor: colorTextLightSolid,
      backTopHoverBackground: colorText,
      backTopFontSize: fontSizeHeading3,
      backTopSize: controlHeightLG,
      backTopBlockEnd: calc(controlHeightLG).mul(1.25).equal(),
      backTopInlineEnd: calc(controlHeightLG).mul(2.5).equal(),
      backTopInlineEndMD: calc(controlHeightLG).mul(1.5).equal(),
      backTopInlineEndXS: calc(controlHeightLG).mul(0.5).equal()
    });
    return [genSharedBackTopStyle(backTopToken), genMediaBackTopStyle(backTopToken)];
  }, prepareComponentToken);
});