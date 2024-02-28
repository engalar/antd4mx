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
  var genStepsCustomIconStyle = function genStepsCustomIconStyle(token) {
    var componentCls = token.componentCls,
      customIconTop = token.customIconTop,
      customIconSize = token.customIconSize,
      customIconFontSize = token.customIconFontSize;
    return _defineProperty(_defineProperty({}, "".concat(componentCls, "-item-custom"), _defineProperty({}, "> ".concat(componentCls, "-item-container > ").concat(componentCls, "-item-icon"), _defineProperty({
      height: 'auto',
      background: 'none',
      border: 0
    }, "> ".concat(componentCls, "-icon"), {
      top: customIconTop,
      width: customIconSize,
      height: customIconSize,
      fontSize: customIconFontSize,
      lineHeight: "".concat((0, _cssinjs.unit)(customIconFontSize))
    }))), "&:not(".concat(componentCls, "-vertical)"), _defineProperty({}, "".concat(componentCls, "-item-custom"), _defineProperty({}, "".concat(componentCls, "-item-icon"), {
      width: 'auto',
      background: 'none'
    })));
  };
  var _default = _exports["default"] = genStepsCustomIconStyle;
});