define(["exports", "antd4mx/style/compact-item", "antd4mx/theme/internal", "antd4mx/cascader/style/columns"], function (_exports, _compactItem, _internal, _columns) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // =============================== Base ===============================
  var genBaseStyle = function genBaseStyle(token) {
    var componentCls = token.componentCls,
      antCls = token.antCls;
    return [// =====================================================
    // ==                     Control                     ==
    // =====================================================
    _defineProperty({}, componentCls, {
      width: token.controlWidth
    }), // =====================================================
    // ==                      Popup                      ==
    // =====================================================
    _defineProperty({}, "".concat(componentCls, "-dropdown"), [_defineProperty({}, "&".concat(antCls, "-select-dropdown"), {
      padding: 0
    }), (0, _columns["default"])(token)]), // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    _defineProperty({}, "".concat(componentCls, "-dropdown-rtl"), {
      direction: 'rtl'
    }),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    (0, _compactItem.genCompactItemStyle)(token)];
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var itemPaddingVertical = Math.round((token.controlHeight - token.fontSize * token.lineHeight) / 2);
    return {
      controlWidth: 184,
      controlItemWidth: 111,
      dropdownHeight: 180,
      optionSelectedBg: token.controlItemBgActive,
      optionSelectedFontWeight: token.fontWeightStrong,
      optionPadding: "".concat(itemPaddingVertical, "px ").concat(token.paddingSM, "px"),
      menuPadding: token.paddingXXS
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Cascader', function (token) {
    return [genBaseStyle(token)];
  }, prepareComponentToken);
});