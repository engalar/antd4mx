define(["exports", "@ant-design/cssinjs", "antd4mx/input/style/index", "antd4mx/input/style/variants", "antd4mx/style/index", "antd4mx/style/compact-item", "antd4mx/theme/internal", "antd4mx/input-number/style/token"], function (_exports, _cssinjs, _index, _variants, _index2, _compactItem, _internal, _token) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.genRadiusStyle = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genRadiusStyle = _exports.genRadiusStyle = function genRadiusStyle(_ref, size) {
    var componentCls = _ref.componentCls,
      borderRadiusSM = _ref.borderRadiusSM,
      borderRadiusLG = _ref.borderRadiusLG;
    var borderRadius = size === 'lg' ? borderRadiusLG : borderRadiusSM;
    return _defineProperty({}, "&-".concat(size), _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-handler-wrap"), {
      borderStartEndRadius: borderRadius,
      borderEndEndRadius: borderRadius
    }), "".concat(componentCls, "-handler-up"), {
      borderStartEndRadius: borderRadius
    }), "".concat(componentCls, "-handler-down"), {
      borderEndEndRadius: borderRadius
    }));
  };
  var genInputNumberStyles = function genInputNumberStyles(token) {
    var componentCls = token.componentCls,
      lineWidth = token.lineWidth,
      lineType = token.lineType,
      borderRadius = token.borderRadius,
      fontSizeLG = token.fontSizeLG,
      controlHeightLG = token.controlHeightLG,
      controlHeightSM = token.controlHeightSM,
      colorError = token.colorError,
      paddingInlineSM = token.paddingInlineSM,
      paddingBlockSM = token.paddingBlockSM,
      paddingBlockLG = token.paddingBlockLG,
      paddingInlineLG = token.paddingInlineLG,
      colorTextDescription = token.colorTextDescription,
      motionDurationMid = token.motionDurationMid,
      handleHoverColor = token.handleHoverColor,
      paddingInline = token.paddingInline,
      paddingBlock = token.paddingBlock,
      handleBg = token.handleBg,
      handleActiveBg = token.handleActiveBg,
      colorTextDisabled = token.colorTextDisabled,
      borderRadiusSM = token.borderRadiusSM,
      borderRadiusLG = token.borderRadiusLG,
      controlWidth = token.controlWidth,
      handleOpacity = token.handleOpacity,
      handleBorderColor = token.handleBorderColor,
      filledHandleBg = token.filledHandleBg,
      lineHeightLG = token.lineHeightLG,
      calc = token.calc;
    return [_defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _index2.resetComponent)(token)), (0, _index.genBasicInputStyle)(token)), {
      display: 'inline-block',
      width: controlWidth,
      margin: 0,
      padding: 0,
      borderRadius: borderRadius
    }), (0, _variants.genOutlinedStyle)(token, _defineProperty({}, "".concat(componentCls, "-handler-wrap"), _defineProperty({
      background: handleBg
    }, "".concat(componentCls, "-handler-down"), {
      borderBlockStart: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(handleBorderColor)
    })))), (0, _variants.genFilledStyle)(token, _defineProperty(_defineProperty({}, "".concat(componentCls, "-handler-wrap"), _defineProperty({
      background: filledHandleBg
    }, "".concat(componentCls, "-handler-down"), {
      borderBlockStart: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(handleBorderColor)
    })), '&:focus-within', _defineProperty({}, "".concat(componentCls, "-handler-wrap"), {
      background: handleBg
    })))), (0, _variants.genBorderlessStyle)(token)), _defineProperty(_defineProperty({
      '&-rtl': _defineProperty({
        direction: 'rtl'
      }, "".concat(componentCls, "-input"), {
        direction: 'rtl'
      }),
      '&-lg': _defineProperty({
        padding: 0,
        fontSize: fontSizeLG,
        lineHeight: lineHeightLG,
        borderRadius: borderRadiusLG
      }, "input".concat(componentCls, "-input"), {
        height: calc(controlHeightLG).sub(calc(lineWidth).mul(2)).equal(),
        padding: "".concat((0, _cssinjs.unit)(paddingBlockLG), " ").concat((0, _cssinjs.unit)(paddingInlineLG))
      }),
      '&-sm': _defineProperty({
        padding: 0,
        borderRadius: borderRadiusSM
      }, "input".concat(componentCls, "-input"), {
        height: calc(controlHeightSM).sub(calc(lineWidth).mul(2)).equal(),
        padding: "".concat((0, _cssinjs.unit)(paddingBlockSM), " ").concat((0, _cssinjs.unit)(paddingInlineSM))
      }),
      // ===================== Out Of Range =====================
      '&-out-of-range': _defineProperty({}, "".concat(componentCls, "-input-wrap"), {
        input: {
          color: colorError
        }
      }),
      // Style for input-group: input with label, with button or dropdown...
      '&-group': Object.assign(Object.assign(Object.assign({}, (0, _index2.resetComponent)(token)), (0, _index.genInputGroupStyle)(token)), {
        '&-wrapper': Object.assign(Object.assign(Object.assign(_defineProperty(_defineProperty(_defineProperty({
          display: 'inline-block',
          textAlign: 'start',
          verticalAlign: 'top'
        }, "".concat(componentCls, "-affix-wrapper"), {
          width: '100%'
        }), '&-lg', _defineProperty({}, "".concat(componentCls, "-group-addon"), {
          borderRadius: borderRadiusLG,
          fontSize: token.fontSizeLG
        })), '&-sm', _defineProperty({}, "".concat(componentCls, "-group-addon"), {
          borderRadius: borderRadiusSM
        })), (0, _variants.genOutlinedGroupStyle)(token)), (0, _variants.genFilledGroupStyle)(token)), _defineProperty(_defineProperty(_defineProperty({}, "&:not(".concat(componentCls, "-compact-first-item):not(").concat(componentCls, "-compact-last-item)").concat(componentCls, "-compact-item"), _defineProperty({}, "".concat(componentCls, ", ").concat(componentCls, "-group-addon"), {
          borderRadius: 0
        })), "&:not(".concat(componentCls, "-compact-last-item)").concat(componentCls, "-compact-first-item"), _defineProperty({}, "".concat(componentCls, ", ").concat(componentCls, "-group-addon"), {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0
        })), "&:not(".concat(componentCls, "-compact-first-item)").concat(componentCls, "-compact-last-item"), _defineProperty({}, "".concat(componentCls, ", ").concat(componentCls, "-group-addon"), {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        })))
      })
    }, "&-disabled ".concat(componentCls, "-input"), {
      cursor: 'not-allowed'
    }), componentCls, {
      '&-input': Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _index2.resetComponent)(token)), {
        width: '100%',
        padding: "".concat((0, _cssinjs.unit)(paddingBlock), " ").concat((0, _cssinjs.unit)(paddingInline)),
        textAlign: 'start',
        backgroundColor: 'transparent',
        border: 0,
        borderRadius: borderRadius,
        outline: 0,
        transition: "all ".concat(motionDurationMid, " linear"),
        appearance: 'textfield',
        fontSize: 'inherit'
      }), (0, _index.genPlaceholderStyle)(token.colorTextPlaceholder)), {
        '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button': {
          margin: 0,
          /* stylelint-disable-next-line property-no-vendor-prefix */
          webkitAppearance: 'none',
          appearance: 'none'
        }
      })
    }))), // Handler
    _defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "&:hover ".concat(componentCls, "-handler-wrap, &-focused ").concat(componentCls, "-handler-wrap"), {
      opacity: 1
    }), "".concat(componentCls, "-handler-wrap"), _defineProperty({
      position: 'absolute',
      insetBlockStart: 0,
      insetInlineEnd: 0,
      width: token.handleWidth,
      height: '100%',
      borderStartStartRadius: 0,
      borderStartEndRadius: borderRadius,
      borderEndEndRadius: borderRadius,
      borderEndStartRadius: 0,
      opacity: handleOpacity,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      transition: "opacity ".concat(motionDurationMid, " linear ").concat(motionDurationMid)
    }, "".concat(componentCls, "-handler"), _defineProperty({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'auto',
      height: '40%'
    }, "\n              ".concat(componentCls, "-handler-up-inner,\n              ").concat(componentCls, "-handler-down-inner\n            "), {
      marginInlineEnd: 0,
      fontSize: token.handleFontSize
    }))), "".concat(componentCls, "-handler"), {
      height: '50%',
      overflow: 'hidden',
      color: colorTextDescription,
      fontWeight: 'bold',
      lineHeight: 0,
      textAlign: 'center',
      cursor: 'pointer',
      borderInlineStart: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(handleBorderColor),
      transition: "all ".concat(motionDurationMid, " linear"),
      '&:active': {
        background: handleActiveBg
      },
      // Hover
      '&:hover': _defineProperty({
        height: "60%"
      }, "\n              ".concat(componentCls, "-handler-up-inner,\n              ").concat(componentCls, "-handler-down-inner\n            "), {
        color: handleHoverColor
      }),
      '&-up-inner, &-down-inner': Object.assign(Object.assign({}, (0, _index2.resetIcon)()), {
        color: colorTextDescription,
        transition: "all ".concat(motionDurationMid, " linear"),
        userSelect: 'none'
      })
    }), "".concat(componentCls, "-handler-up"), {
      borderStartEndRadius: borderRadius
    }), "".concat(componentCls, "-handler-down"), {
      borderEndEndRadius: borderRadius
    }), genRadiusStyle(token, 'lg')), genRadiusStyle(token, 'sm')), _defineProperty(_defineProperty({
      // Disabled
      '&-disabled, &-readonly': _defineProperty(_defineProperty({}, "".concat(componentCls, "-handler-wrap"), {
        display: 'none'
      }), "".concat(componentCls, "-input"), {
        color: 'inherit'
      })
    }, "\n          ".concat(componentCls, "-handler-up-disabled,\n          ").concat(componentCls, "-handler-down-disabled\n        "), {
      cursor: 'not-allowed'
    }), "\n          ".concat(componentCls, "-handler-up-disabled:hover &-handler-up-inner,\n          ").concat(componentCls, "-handler-down-disabled:hover &-handler-down-inner\n        "), {
      color: colorTextDisabled
    })))];
  };
  var genAffixWrapperStyles = function genAffixWrapperStyles(token) {
    var componentCls = token.componentCls,
      paddingBlock = token.paddingBlock,
      paddingInline = token.paddingInline,
      inputAffixPadding = token.inputAffixPadding,
      controlWidth = token.controlWidth,
      borderRadiusLG = token.borderRadiusLG,
      borderRadiusSM = token.borderRadiusSM,
      paddingInlineLG = token.paddingInlineLG,
      paddingInlineSM = token.paddingInlineSM,
      paddingBlockLG = token.paddingBlockLG,
      paddingBlockSM = token.paddingBlockSM;
    return _defineProperty({}, "".concat(componentCls, "-affix-wrapper"), Object.assign(Object.assign(_defineProperty({}, "input".concat(componentCls, "-input"), {
      padding: "".concat((0, _cssinjs.unit)(paddingBlock), " 0")
    }), (0, _index.genBasicInputStyle)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      // or number handler will cover form status
      position: 'relative',
      display: 'inline-flex',
      width: controlWidth,
      padding: 0,
      paddingInlineStart: paddingInline,
      '&-lg': _defineProperty({
        borderRadius: borderRadiusLG,
        paddingInlineStart: paddingInlineLG
      }, "input".concat(componentCls, "-input"), {
        padding: "".concat((0, _cssinjs.unit)(paddingBlockLG), " 0")
      }),
      '&-sm': _defineProperty({
        borderRadius: borderRadiusSM,
        paddingInlineStart: paddingInlineSM
      }, "input".concat(componentCls, "-input"), {
        padding: "".concat((0, _cssinjs.unit)(paddingBlockSM), " 0")
      })
    }, "&:not(".concat(componentCls, "-disabled):hover"), {
      zIndex: 1
    }), '&-focused, &:focus', {
      zIndex: 1
    }), "&-disabled > ".concat(componentCls, "-disabled"), {
      background: 'transparent'
    }), "> div".concat(componentCls), _defineProperty({
      width: '100%',
      border: 'none',
      outline: 'none'
    }, "&".concat(componentCls, "-focused"), {
      boxShadow: 'none !important'
    })), '&::before', {
      display: 'inline-block',
      width: 0,
      visibility: 'hidden',
      content: '"\\a0"'
    }), "".concat(componentCls, "-handler-wrap"), {
      zIndex: 2
    }), componentCls, {
      color: 'inherit',
      '&-prefix, &-suffix': {
        display: 'flex',
        flex: 'none',
        alignItems: 'center',
        pointerEvents: 'none'
      },
      '&-prefix': {
        marginInlineEnd: inputAffixPadding
      },
      '&-suffix': {
        position: 'absolute',
        insetBlockStart: 0,
        insetInlineEnd: 0,
        zIndex: 1,
        height: '100%',
        marginInlineEnd: paddingInline,
        marginInlineStart: inputAffixPadding
      }
    })));
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('InputNumber', function (token) {
    var inputNumberToken = (0, _internal.mergeToken)(token, (0, _index.initInputToken)(token));
    return [genInputNumberStyles(inputNumberToken), genAffixWrapperStyles(inputNumberToken),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    (0, _compactItem.genCompactItemStyle)(inputNumberToken)];
  }, _token.prepareComponentToken, {
    unitless: {
      handleOpacity: true
    }
  });
});