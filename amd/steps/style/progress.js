define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genStepsProgressStyle = function genStepsProgressStyle(token) {
    var antCls = token.antCls,
      componentCls = token.componentCls;
    return _defineProperty({}, "&".concat(componentCls, "-with-progress"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-item"), _defineProperty({
      paddingTop: token.paddingXXS
    }, "&-process ".concat(componentCls, "-item-container ").concat(componentCls, "-item-icon ").concat(componentCls, "-icon"), {
      color: token.processIconColor
    })), "&".concat(componentCls, "-vertical > ").concat(componentCls, "-item "), _defineProperty({
      paddingInlineStart: token.paddingXXS
    }, "> ".concat(componentCls, "-item-container > ").concat(componentCls, "-item-tail"), {
      top: token.marginXXS,
      insetInlineStart: token.calc(token.iconSize).div(2).sub(token.lineWidth).add(token.paddingXXS).equal()
    })), "&, &".concat(componentCls, "-small"), _defineProperty({}, "&".concat(componentCls, "-horizontal ").concat(componentCls, "-item:first-child"), {
      paddingBottom: token.paddingXXS,
      paddingInlineStart: token.paddingXXS
    })), "&".concat(componentCls, "-small").concat(componentCls, "-vertical > ").concat(componentCls, "-item > ").concat(componentCls, "-item-container > ").concat(componentCls, "-item-tail"), {
      insetInlineStart: token.calc(token.iconSizeSM).div(2).sub(token.lineWidth).add(token.paddingXXS).equal()
    }), "&".concat(componentCls, "-label-vertical"), _defineProperty({}, "".concat(componentCls, "-item ").concat(componentCls, "-item-tail"), {
      top: token.calc(token.margin).sub(token.calc(token.lineWidth).mul(2).equal()).equal()
    })), "".concat(componentCls, "-item-icon"), _defineProperty({
      position: 'relative'
    }, "".concat(antCls, "-progress"), {
      position: 'absolute',
      insetBlockStart: token.calc(token.calc(token.iconSize).sub(token.stepsProgressSize).sub(token.calc(token.lineWidth).mul(2).equal()).equal()).div(2).equal(),
      insetInlineStart: token.calc(token.calc(token.iconSize).sub(token.stepsProgressSize).sub(token.calc(token.lineWidth).mul(2).equal()).equal()).div(2).equal()
    })));
  };
  var _default = _exports["default"] = genStepsProgressStyle;
});