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
  var getRTLStyle = function getRTLStyle(_ref) {
    var componentCls = _ref.componentCls,
      menuArrowOffset = _ref.menuArrowOffset,
      calc = _ref.calc;
    return _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-rtl"), {
      direction: 'rtl'
    }), "".concat(componentCls, "-submenu-rtl"), {
      transformOrigin: '100% 0'
    }), "".concat(componentCls, "-rtl").concat(componentCls, "-vertical,\n    ").concat(componentCls, "-submenu-rtl ").concat(componentCls, "-vertical"), _defineProperty({}, "".concat(componentCls, "-submenu-arrow"), {
      '&::before': {
        transform: "rotate(-45deg) translateY(".concat((0, _cssinjs.unit)(calc(menuArrowOffset).mul(-1).equal()), ")")
      },
      '&::after': {
        transform: "rotate(45deg) translateY(".concat((0, _cssinjs.unit)(menuArrowOffset), ")")
      }
    }));
  };
  var _default = _exports["default"] = getRTLStyle;
});