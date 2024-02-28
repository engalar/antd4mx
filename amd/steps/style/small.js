define(["exports", "@ant-design/cssinjs"], function (_exports, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genStepsSmallStyle = function genStepsSmallStyle(token) {
    var componentCls = token.componentCls,
      iconSizeSM = token.iconSizeSM,
      fontSizeSM = token.fontSizeSM,
      fontSize = token.fontSize,
      colorTextDescription = token.colorTextDescription;
    return _defineProperty({}, "&".concat(componentCls, "-small"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "&".concat(componentCls, "-horizontal:not(").concat(componentCls, "-label-vertical) ").concat(componentCls, "-item"), {
      paddingInlineStart: token.paddingSM,
      '&:first-child': {
        paddingInlineStart: 0
      }
    }), "".concat(componentCls, "-item-icon"), {
      width: iconSizeSM,
      height: iconSizeSM,
      // margin: stepsSmallIconMargin,
      marginTop: 0,
      marginBottom: 0,
      marginInline: "0 ".concat((0, _cssinjs.unit)(token.marginXS)),
      fontSize: fontSizeSM,
      lineHeight: "".concat((0, _cssinjs.unit)(iconSizeSM)),
      textAlign: 'center',
      borderRadius: iconSizeSM
    }), "".concat(componentCls, "-item-title"), {
      paddingInlineEnd: token.paddingSM,
      fontSize: fontSize,
      lineHeight: "".concat((0, _cssinjs.unit)(iconSizeSM)),
      '&::after': {
        top: token.calc(iconSizeSM).div(2).equal()
      }
    }), "".concat(componentCls, "-item-description"), {
      color: colorTextDescription,
      fontSize: fontSize
    }), "".concat(componentCls, "-item-tail"), {
      top: token.calc(iconSizeSM).div(2).sub(token.paddingXXS).equal()
    }), "".concat(componentCls, "-item-custom ").concat(componentCls, "-item-icon"), _defineProperty({
      width: 'inherit',
      height: 'inherit',
      lineHeight: 'inherit',
      background: 'none',
      border: 0,
      borderRadius: 0
    }, "> ".concat(componentCls, "-icon"), {
      fontSize: iconSizeSM,
      lineHeight: "".concat((0, _cssinjs.unit)(iconSizeSM)),
      transform: 'none'
    })));
  };
  var _default = _exports["default"] = genStepsSmallStyle;
});