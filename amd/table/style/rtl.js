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
  var genStyle = function genStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, "".concat(componentCls, "-wrapper-rtl"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      direction: 'rtl',
      table: {
        direction: 'rtl'
      }
    }, "".concat(componentCls, "-pagination-left"), {
      justifyContent: 'flex-end'
    }), "".concat(componentCls, "-pagination-right"), {
      justifyContent: 'flex-start'
    }), "".concat(componentCls, "-row-expand-icon"), {
      "float": 'right',
      '&::after': {
        transform: 'rotate(-90deg)'
      },
      '&-collapsed::before': {
        transform: 'rotate(180deg)'
      },
      '&-collapsed::after': {
        transform: 'rotate(0deg)'
      }
    }), "".concat(componentCls, "-container"), _defineProperty({
      '&::before': {
        insetInlineStart: 'unset',
        insetInlineEnd: 0
      },
      '&::after': {
        insetInlineStart: 0,
        insetInlineEnd: 'unset'
      }
    }, "".concat(componentCls, "-row-indent"), {
      "float": 'right'
    })));
  };
  var _default = _exports["default"] = genStyle;
});