define(["exports", "classnames", "antd4mx/_util/colors"], function (_exports, _classnames, _colors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.parseColor = parseColor;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable import/prefer-default-export */
  function parseColor(prefixCls, color) {
    var isInternalColor = (0, _colors.isPresetColor)(color);
    var className = (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-").concat(color), color && isInternalColor));
    var overlayStyle = {};
    var arrowStyle = {};
    if (color && !isInternalColor) {
      overlayStyle.background = color;
      // @ts-ignore
      arrowStyle['--antd-arrow-background-color'] = color;
    }
    return {
      className: className,
      overlayStyle: overlayStyle,
      arrowStyle: arrowStyle
    };
  }
});