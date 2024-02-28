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
  var genStepsRTLStyle = function genStepsRTLStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, "&".concat(componentCls, "-rtl"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      direction: 'rtl'
    }, "".concat(componentCls, "-item"), {
      '&-subtitle': {
        "float": 'left'
      }
    }), "&".concat(componentCls, "-navigation"), _defineProperty({}, "".concat(componentCls, "-item::after"), {
      transform: 'rotate(-45deg)'
    })), "&".concat(componentCls, "-vertical"), _defineProperty({}, "> ".concat(componentCls, "-item"), _defineProperty({
      '&::after': {
        transform: 'rotate(225deg)'
      }
    }, "".concat(componentCls, "-item-icon"), {
      "float": 'right'
    }))), "&".concat(componentCls, "-dot"), _defineProperty({}, "".concat(componentCls, "-item-icon ").concat(componentCls, "-icon-dot, &").concat(componentCls, "-small ").concat(componentCls, "-item-icon ").concat(componentCls, "-icon-dot"), {
      "float": 'right'
    })));
  };
  var _default = _exports["default"] = genStepsRTLStyle;
});