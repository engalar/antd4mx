define(["exports", "@ant-design/cssinjs"], function (_exports, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getTransBg = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  /**
   * @private Internal usage only
   */
  var getTransBg = _exports.getTransBg = function getTransBg(size, colorFill) {
    return {
      backgroundImage: "conic-gradient(".concat(colorFill, " 0 25%, transparent 0 50%, ").concat(colorFill, " 0 75%, transparent 0)"),
      backgroundSize: "".concat(size, " ").concat(size)
    };
  };
  var genColorBlockStyle = function genColorBlockStyle(token, size) {
    var componentCls = token.componentCls,
      borderRadiusSM = token.borderRadiusSM,
      colorPickerInsetShadow = token.colorPickerInsetShadow,
      lineWidth = token.lineWidth,
      colorFillSecondary = token.colorFillSecondary;
    return _defineProperty({}, "".concat(componentCls, "-color-block"), Object.assign(Object.assign({
      position: 'relative',
      borderRadius: borderRadiusSM,
      width: size,
      height: size,
      boxShadow: colorPickerInsetShadow
    }, getTransBg('50%', token.colorFillSecondary)), _defineProperty({}, "".concat(componentCls, "-color-block-inner"), {
      width: '100%',
      height: '100%',
      border: "".concat((0, _cssinjs.unit)(lineWidth), " solid ").concat(colorFillSecondary),
      borderRadius: 'inherit'
    })));
  };
  var _default = _exports["default"] = genColorBlockStyle;
});