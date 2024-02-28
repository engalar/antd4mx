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
  var genStepsVerticalStyle = function genStepsVerticalStyle(token) {
    var componentCls = token.componentCls,
      iconSizeSM = token.iconSizeSM,
      iconSize = token.iconSize;
    return _defineProperty({}, "&".concat(componentCls, "-vertical"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      display: 'flex',
      flexDirection: 'column'
    }, "> ".concat(componentCls, "-item"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      display: 'block',
      flex: '1 0 auto',
      paddingInlineStart: 0,
      overflow: 'visible'
    }, "".concat(componentCls, "-item-icon"), {
      "float": 'left',
      marginInlineEnd: token.margin
    }), "".concat(componentCls, "-item-content"), {
      display: 'block',
      minHeight: token.calc(token.controlHeight).mul(1.5).equal(),
      overflow: 'hidden'
    }), "".concat(componentCls, "-item-title"), {
      lineHeight: "".concat((0, _cssinjs.unit)(iconSize))
    }), "".concat(componentCls, "-item-description"), {
      paddingBottom: token.paddingSM
    })), "> ".concat(componentCls, "-item > ").concat(componentCls, "-item-container > ").concat(componentCls, "-item-tail"), {
      position: 'absolute',
      top: 0,
      insetInlineStart: token.calc(iconSize).div(2).sub(token.lineWidth).equal(),
      width: token.lineWidth,
      height: '100%',
      padding: "".concat((0, _cssinjs.unit)(token.calc(token.marginXXS).mul(1.5).add(iconSize).equal()), " 0 ").concat((0, _cssinjs.unit)(token.calc(token.marginXXS).mul(1.5).equal())),
      '&::after': {
        width: token.lineWidth,
        height: '100%'
      }
    }), "> ".concat(componentCls, "-item:not(:last-child) > ").concat(componentCls, "-item-container > ").concat(componentCls, "-item-tail"), {
      display: 'block'
    }), " > ".concat(componentCls, "-item > ").concat(componentCls, "-item-container > ").concat(componentCls, "-item-content > ").concat(componentCls, "-item-title"), {
      '&::after': {
        display: 'none'
      }
    }), "&".concat(componentCls, "-small ").concat(componentCls, "-item-container"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-item-tail"), {
      position: 'absolute',
      top: 0,
      insetInlineStart: token.calc(iconSizeSM).div(2).sub(token.lineWidth).equal(),
      padding: "".concat((0, _cssinjs.unit)(token.calc(token.marginXXS).mul(1.5).add(iconSizeSM).equal()), " 0 ").concat((0, _cssinjs.unit)(token.calc(token.marginXXS).mul(1.5).equal()))
    }), "".concat(componentCls, "-item-title"), {
      lineHeight: "".concat((0, _cssinjs.unit)(iconSizeSM))
    })));
  };
  var _default = _exports["default"] = genStepsVerticalStyle;
});