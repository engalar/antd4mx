define(["exports", "antd4mx/form/style", "antd4mx/theme/internal"], function (_exports, _style, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * Fallback of IE.
 * Safe to remove.
 */ // Style as inline component
  // ============================= Fallback =============================
  var genFallbackStyle = function genFallbackStyle(token) {
    var formItemCls = token.formItemCls;
    return {
      '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)': _defineProperty({}, "".concat(formItemCls, "-control"), {
        display: 'flex'
      })
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genSubStyleComponent)(['Form', 'item-item'], function (token, _ref) {
    var rootPrefixCls = _ref.rootPrefixCls;
    var formToken = (0, _style.prepareToken)(token, rootPrefixCls);
    return [genFallbackStyle(formToken)];
  });
});