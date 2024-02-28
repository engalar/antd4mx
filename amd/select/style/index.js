define(["exports", "antd4mx/style", "antd4mx/style/compact-item", "antd4mx/theme/internal", "antd4mx/select/style/dropdown", "antd4mx/select/style/multiple", "antd4mx/select/style/single", "antd4mx/select/style/token", "antd4mx/select/style/variants"], function (_exports, _style, _compactItem, _internal, _dropdown, _multiple, _single, _token, _variants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // ============================= Selector =============================
  var genSelectorStyle = function genSelectorStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty(_defineProperty({
      position: 'relative',
      transition: "all ".concat(token.motionDurationMid, " ").concat(token.motionEaseInOut),
      input: {
        cursor: 'pointer'
      }
    }, "".concat(componentCls, "-show-search&"), {
      cursor: 'text',
      input: {
        cursor: 'auto',
        color: 'inherit',
        height: '100%'
      }
    }), "".concat(componentCls, "-disabled&"), {
      cursor: 'not-allowed',
      input: {
        cursor: 'not-allowed'
      }
    });
  };
  // ============================== Styles ==============================
  // /* Reset search input style */
  var getSearchInputWithoutBorderStyle = function getSearchInputWithoutBorderStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, "".concat(componentCls, "-selection-search-input"), {
      margin: 0,
      padding: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      appearance: 'none',
      fontFamily: 'inherit',
      '&::-webkit-search-cancel-button': {
        display: 'none',
        '-webkit-appearance': 'none'
      }
    });
  };
  // =============================== Base ===============================
  var genBaseStyle = function genBaseStyle(token) {
    var antCls = token.antCls,
      componentCls = token.componentCls,
      inputPaddingHorizontalBase = token.inputPaddingHorizontalBase,
      iconCls = token.iconCls;
    return _defineProperty(_defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer'
    }, "&:not(".concat(componentCls, "-customize-input) ").concat(componentCls, "-selector"), Object.assign(Object.assign({}, genSelectorStyle(token)), getSearchInputWithoutBorderStyle(token))), "".concat(componentCls, "-selection-item"), Object.assign(Object.assign({
      flex: 1,
      fontWeight: 'normal',
      position: 'relative',
      userSelect: 'none'
    }, _style.textEllipsis), _defineProperty({}, "> ".concat(antCls, "-typography"), {
      display: 'inline'
    }))), "".concat(componentCls, "-selection-placeholder"), Object.assign(Object.assign({}, _style.textEllipsis), {
      flex: 1,
      color: token.colorTextPlaceholder,
      pointerEvents: 'none'
    })), "".concat(componentCls, "-arrow"), Object.assign(Object.assign({}, (0, _style.resetIcon)()), _defineProperty(_defineProperty(_defineProperty({
      position: 'absolute',
      top: '50%',
      insetInlineStart: 'auto',
      insetInlineEnd: inputPaddingHorizontalBase,
      height: token.fontSizeIcon,
      marginTop: token.calc(token.fontSizeIcon).mul(-1).div(2).equal(),
      color: token.colorTextQuaternary,
      fontSize: token.fontSizeIcon,
      lineHeight: 1,
      textAlign: 'center',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      transition: "opacity ".concat(token.motionDurationSlow, " ease")
    }, iconCls, _defineProperty({
      verticalAlign: 'top',
      transition: "transform ".concat(token.motionDurationSlow),
      '> svg': {
        verticalAlign: 'top'
      }
    }, "&:not(".concat(componentCls, "-suffix)"), {
      pointerEvents: 'auto'
    })), "".concat(componentCls, "-disabled &"), {
      cursor: 'not-allowed'
    }), '> *:not(:last-child)', {
      marginInlineEnd: 8 // FIXME: magic
    }))), "".concat(componentCls, "-clear"), {
      position: 'absolute',
      top: '50%',
      insetInlineStart: 'auto',
      insetInlineEnd: inputPaddingHorizontalBase,
      zIndex: 1,
      display: 'inline-block',
      width: token.fontSizeIcon,
      height: token.fontSizeIcon,
      marginTop: token.calc(token.fontSizeIcon).mul(-1).div(2).equal(),
      color: token.colorTextQuaternary,
      fontSize: token.fontSizeIcon,
      fontStyle: 'normal',
      lineHeight: 1,
      textAlign: 'center',
      textTransform: 'none',
      cursor: 'pointer',
      opacity: 0,
      transition: "color ".concat(token.motionDurationMid, " ease, opacity ").concat(token.motionDurationSlow, " ease"),
      textRendering: 'auto',
      '&:before': {
        display: 'block'
      },
      '&:hover': {
        color: token.colorTextTertiary
      }
    }), '&:hover', _defineProperty(_defineProperty({}, "".concat(componentCls, "-clear"), {
      opacity: 1
    }), "".concat(componentCls, "-arrow:not(:last-child)"), {
      opacity: 0
    })))), "".concat(componentCls, "-has-feedback"), _defineProperty({}, "".concat(componentCls, "-clear"), {
      insetInlineEnd: token.calc(inputPaddingHorizontalBase).add(token.fontSize).add(token.paddingXS).equal()
    }));
  };
  // ============================== Styles ==============================
  var genSelectStyle = function genSelectStyle(token) {
    var componentCls = token.componentCls;
    return [_defineProperty({}, componentCls, _defineProperty({}, "&".concat(componentCls, "-in-form-item"), {
      width: '100%'
    })),
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    genBaseStyle(token),
    // Single
    (0, _single["default"])(token),
    // Multiple
    (0, _multiple["default"])(token),
    // Dropdown
    (0, _dropdown["default"])(token), // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    _defineProperty({}, "".concat(componentCls, "-rtl"), {
      direction: 'rtl'
    }),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    (0, _compactItem.genCompactItemStyle)(token, {
      borderElCls: "".concat(componentCls, "-selector"),
      focusElCls: "".concat(componentCls, "-focused")
    })];
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Select', function (token, _ref) {
    var rootPrefixCls = _ref.rootPrefixCls;
    var selectToken = (0, _internal.mergeToken)(token, {
      rootPrefixCls: rootPrefixCls,
      inputPaddingHorizontalBase: token.calc(token.paddingSM).sub(1).equal(),
      multipleSelectItemHeight: token.multipleItemHeight,
      selectHeight: token.controlHeight
    });
    return [genSelectStyle(selectToken), (0, _variants["default"])(selectToken)];
  }, _token.prepareComponentToken, {
    unitless: {
      optionLineHeight: true,
      optionSelectedFontWeight: true
    }
  });
});