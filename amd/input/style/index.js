define(["exports", "@ant-design/cssinjs", "antd4mx/style/index", "antd4mx/style/compact-item", "antd4mx/theme/internal", "antd4mx/input/style/token", "antd4mx/input/style/variants"], function (_exports, _cssinjs, _index, _compactItem, _internal, _token, _variants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.genPlaceholderStyle = _exports.genInputSmallStyle = _exports.genInputGroupStyle = _exports.genBasicInputStyle = _exports.genActiveStyle = _exports["default"] = void 0;
  Object.defineProperty(_exports, "initComponentToken", {
    enumerable: true,
    get: function get() {
      return _token.initComponentToken;
    }
  });
  Object.defineProperty(_exports, "initInputToken", {
    enumerable: true,
    get: function get() {
      return _token.initInputToken;
    }
  });
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genPlaceholderStyle = _exports.genPlaceholderStyle = function genPlaceholderStyle(color) {
    return {
      // Firefox
      '&::-moz-placeholder': {
        opacity: 1
      },
      '&::placeholder': {
        color: color,
        userSelect: 'none' // https://github.com/ant-design/ant-design/pull/32639
      },
      '&:placeholder-shown': {
        textOverflow: 'ellipsis'
      }
    };
  };
  var genActiveStyle = _exports.genActiveStyle = function genActiveStyle(token) {
    return {
      borderColor: token.activeBorderColor,
      boxShadow: token.activeShadow,
      outline: 0,
      backgroundColor: token.activeBg
    };
  };
  var genInputLargeStyle = function genInputLargeStyle(token) {
    var paddingBlockLG = token.paddingBlockLG,
      lineHeightLG = token.lineHeightLG,
      borderRadiusLG = token.borderRadiusLG,
      paddingInlineLG = token.paddingInlineLG;
    return {
      padding: "".concat((0, _cssinjs.unit)(paddingBlockLG), " ").concat((0, _cssinjs.unit)(paddingInlineLG)),
      fontSize: token.inputFontSizeLG,
      lineHeight: lineHeightLG,
      borderRadius: borderRadiusLG
    };
  };
  var genInputSmallStyle = _exports.genInputSmallStyle = function genInputSmallStyle(token) {
    return {
      padding: "".concat((0, _cssinjs.unit)(token.paddingBlockSM), " ").concat((0, _cssinjs.unit)(token.paddingInlineSM)),
      fontSize: token.inputFontSizeSM,
      borderRadius: token.borderRadiusSM
    };
  };
  var genBasicInputStyle = _exports.genBasicInputStyle = function genBasicInputStyle(token) {
    return Object.assign(Object.assign({
      position: 'relative',
      display: 'inline-block',
      width: '100%',
      minWidth: 0,
      padding: "".concat((0, _cssinjs.unit)(token.paddingBlock), " ").concat((0, _cssinjs.unit)(token.paddingInline)),
      color: token.colorText,
      fontSize: token.inputFontSize,
      lineHeight: token.lineHeight,
      borderRadius: token.borderRadius,
      transition: "all ".concat(token.motionDurationMid)
    }, genPlaceholderStyle(token.colorTextPlaceholder)), {
      // Reset height for `textarea`s
      'textarea&': {
        maxWidth: '100%',
        // prevent textarea resize from coming out of its container
        height: 'auto',
        minHeight: token.controlHeight,
        lineHeight: token.lineHeight,
        verticalAlign: 'bottom',
        transition: "all ".concat(token.motionDurationSlow, ", height 0s"),
        resize: 'vertical'
      },
      // Size
      '&-lg': Object.assign({}, genInputLargeStyle(token)),
      '&-sm': Object.assign({}, genInputSmallStyle(token)),
      // RTL
      '&-rtl': {
        direction: 'rtl'
      },
      '&-textarea-rtl': {
        direction: 'rtl'
      }
    });
  };
  var genInputGroupStyle = _exports.genInputGroupStyle = function genInputGroupStyle(token) {
    var _Object$assign, _ref;
    var componentCls = token.componentCls,
      antCls = token.antCls;
    return _ref = {
      position: 'relative',
      display: 'table',
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "&[class*='col-']", {
      paddingInlineEnd: token.paddingXS,
      '&:last-child': {
        paddingInlineEnd: 0
      }
    }), "&-lg ".concat(componentCls, ", &-lg > ").concat(componentCls, "-group-addon"), Object.assign({}, genInputLargeStyle(token))), "&-sm ".concat(componentCls, ", &-sm > ").concat(componentCls, "-group-addon"), Object.assign({}, genInputSmallStyle(token))), "&-lg ".concat(antCls, "-select-single ").concat(antCls, "-select-selector"), {
      height: token.controlHeightLG
    }), "&-sm ".concat(antCls, "-select-single ").concat(antCls, "-select-selector"), {
      height: token.controlHeightSM
    }), "> ".concat(componentCls), {
      display: 'table-cell',
      '&:not(:first-child):not(:last-child)': {
        borderRadius: 0
      }
    }), "".concat(componentCls, "-group"), _defineProperty(_defineProperty(_defineProperty({}, "&-addon, &-wrap", {
      display: 'table-cell',
      width: 1,
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      '&:not(:first-child):not(:last-child)': {
        borderRadius: 0
      }
    }), '&-wrap > *', {
      display: 'block !important'
    }), '&-addon', _defineProperty(_defineProperty({
      position: 'relative',
      padding: "0 ".concat((0, _cssinjs.unit)(token.paddingInline)),
      color: token.colorText,
      fontWeight: 'normal',
      fontSize: token.inputFontSize,
      textAlign: 'center',
      borderRadius: token.borderRadius,
      transition: "all ".concat(token.motionDurationSlow),
      lineHeight: 1
    }, "".concat(antCls, "-select"), _defineProperty(_defineProperty({
      margin: "".concat((0, _cssinjs.unit)(token.calc(token.paddingBlock).add(1).mul(-1).equal()), " ").concat((0, _cssinjs.unit)(token.calc(token.paddingInline).mul(-1).equal()))
    }, "&".concat(antCls, "-select-single:not(").concat(antCls, "-select-customize-input):not(").concat(antCls, "-pagination-size-changer)"), _defineProperty({}, "".concat(antCls, "-select-selector"), {
      backgroundColor: 'inherit',
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " transparent"),
      boxShadow: 'none'
    })), '&-open, &-focused', _defineProperty({}, "".concat(antCls, "-select-selector"), {
      color: token.colorPrimary
    }))), "".concat(antCls, "-cascader-picker"), _defineProperty({
      margin: "-9px ".concat((0, _cssinjs.unit)(token.calc(token.paddingInline).mul(-1).equal())),
      backgroundColor: 'transparent'
    }, "".concat(antCls, "-cascader-input"), {
      textAlign: 'start',
      border: 0,
      boxShadow: 'none'
    })))), "".concat(componentCls), {
      width: '100%',
      marginBottom: 0,
      textAlign: 'inherit',
      '&:focus': {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      '&:hover': _defineProperty({
        zIndex: 1,
        borderInlineEndWidth: 1
      }, "".concat(componentCls, "-search-with-button &"), {
        zIndex: 0
      })
    }), "> ".concat(componentCls, ":first-child, ").concat(componentCls, "-group-addon:first-child"), _defineProperty({
      borderStartEndRadius: 0,
      borderEndEndRadius: 0
    }, "".concat(antCls, "-select ").concat(antCls, "-select-selector"), {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0
    })), "> ".concat(componentCls, "-affix-wrapper"), _defineProperty(_defineProperty({}, "&:not(:first-child) ".concat(componentCls), {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0
    }), "&:not(:last-child) ".concat(componentCls), {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0
    })), _defineProperty(_defineProperty(_defineProperty(_ref, "> ".concat(componentCls, ":last-child, ").concat(componentCls, "-group-addon:last-child"), _defineProperty({
      borderStartStartRadius: 0,
      borderEndStartRadius: 0
    }, "".concat(antCls, "-select ").concat(antCls, "-select-selector"), {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0
    })), "".concat(componentCls, "-affix-wrapper"), _defineProperty({
      '&:not(:last-child)': _defineProperty({
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }, "".concat(componentCls, "-search &"), {
        borderStartStartRadius: token.borderRadius,
        borderEndStartRadius: token.borderRadius
      })
    }, "&:not(:first-child), ".concat(componentCls, "-search &:not(:first-child)"), {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0
    })), "&".concat(componentCls, "-group-compact"), Object.assign(Object.assign({
      display: 'block'
    }, (0, _index.clearFix)()), (_Object$assign = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$assign, "".concat(componentCls, "-group-addon, ").concat(componentCls, "-group-wrap, > ").concat(componentCls), {
      '&:not(:first-child):not(:last-child)': {
        borderInlineEndWidth: token.lineWidth,
        '&:hover': {
          zIndex: 1
        },
        '&:focus': {
          zIndex: 1
        }
      }
    }), '& > *', {
      display: 'inline-block',
      "float": 'none',
      verticalAlign: 'top',
      // https://github.com/ant-design/ant-design-pro/issues/139
      borderRadius: 0
    }), "\n        & > ".concat(componentCls, "-affix-wrapper,\n        & > ").concat(componentCls, "-number-affix-wrapper,\n        & > ").concat(antCls, "-picker-range\n      "), {
      display: 'inline-flex'
    }), '& > *:not(:last-child)', {
      marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal(),
      borderInlineEndWidth: token.lineWidth
    }), "".concat(componentCls), {
      "float": 'none'
    }), "& > ".concat(antCls, "-select > ").concat(antCls, "-select-selector,\n      & > ").concat(antCls, "-select-auto-complete ").concat(componentCls, ",\n      & > ").concat(antCls, "-cascader-picker ").concat(componentCls, ",\n      & > ").concat(componentCls, "-group-wrapper ").concat(componentCls), {
      borderInlineEndWidth: token.lineWidth,
      borderRadius: 0,
      '&:hover': {
        zIndex: 1
      },
      '&:focus': {
        zIndex: 1
      }
    }), "& > ".concat(antCls, "-select-focused"), {
      zIndex: 1
    }), "& > ".concat(antCls, "-select > ").concat(antCls, "-select-arrow"), {
      zIndex: 1 // https://github.com/ant-design/ant-design/issues/20371
    }), "& > *:first-child,\n      & > ".concat(antCls, "-select:first-child > ").concat(antCls, "-select-selector,\n      & > ").concat(antCls, "-select-auto-complete:first-child ").concat(componentCls, ",\n      & > ").concat(antCls, "-cascader-picker:first-child ").concat(componentCls), {
      borderStartStartRadius: token.borderRadius,
      borderEndStartRadius: token.borderRadius
    }), "& > *:last-child,\n      & > ".concat(antCls, "-select:last-child > ").concat(antCls, "-select-selector,\n      & > ").concat(antCls, "-cascader-picker:last-child ").concat(componentCls, ",\n      & > ").concat(antCls, "-cascader-picker-focused:last-child ").concat(componentCls), {
      borderInlineEndWidth: token.lineWidth,
      borderStartEndRadius: token.borderRadius,
      borderEndEndRadius: token.borderRadius
    }), _defineProperty(_defineProperty(_defineProperty(_Object$assign, "& > ".concat(antCls, "-select-auto-complete ").concat(componentCls), {
      verticalAlign: 'top'
    }), "".concat(componentCls, "-group-wrapper + ").concat(componentCls, "-group-wrapper"), _defineProperty({
      marginInlineStart: token.calc(token.lineWidth).mul(-1).equal()
    }, "".concat(componentCls, "-affix-wrapper"), {
      borderRadius: 0
    })), "".concat(componentCls, "-group-wrapper:not(:last-child)"), _defineProperty({}, "&".concat(componentCls, "-search > ").concat(componentCls, "-group"), _defineProperty(_defineProperty({}, "& > ".concat(componentCls, "-group-addon > ").concat(componentCls, "-search-button"), {
      borderRadius: 0
    }), "& > ".concat(componentCls), {
      borderStartStartRadius: token.borderRadius,
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      borderEndStartRadius: token.borderRadius
    }))))));
  };
  var genInputStyle = function genInputStyle(token) {
    var componentCls = token.componentCls,
      controlHeightSM = token.controlHeightSM,
      lineWidth = token.lineWidth,
      calc = token.calc;
    var FIXED_CHROME_COLOR_HEIGHT = 16;
    var colorSmallPadding = calc(controlHeightSM).sub(calc(lineWidth).mul(2)).sub(FIXED_CHROME_COLOR_HEIGHT).div(2).equal();
    return _defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), genBasicInputStyle(token)), (0, _variants.genOutlinedStyle)(token)), (0, _variants.genFilledStyle)(token)), (0, _variants.genBorderlessStyle)(token)), {
      '&[type="color"]': _defineProperty(_defineProperty({
        height: token.controlHeight
      }, "&".concat(componentCls, "-lg"), {
        height: token.controlHeightLG
      }), "&".concat(componentCls, "-sm"), {
        height: controlHeightSM,
        paddingTop: colorSmallPadding,
        paddingBottom: colorSmallPadding
      }),
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        '-webkit-appearance': 'none'
      }
    }));
  };
  var genAllowClearStyle = function genAllowClearStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, "".concat(componentCls, "-clear-icon"), {
      margin: 0,
      color: token.colorTextQuaternary,
      fontSize: token.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: 'pointer',
      transition: "color ".concat(token.motionDurationSlow),
      '&:hover': {
        color: token.colorTextTertiary
      },
      '&:active': {
        color: token.colorText
      },
      '&-hidden': {
        visibility: 'hidden'
      },
      '&-has-suffix': {
        margin: "0 ".concat((0, _cssinjs.unit)(token.inputAffixPadding))
      }
    });
  };
  var genAffixStyle = function genAffixStyle(token) {
    var componentCls = token.componentCls,
      inputAffixPadding = token.inputAffixPadding,
      colorTextDescription = token.colorTextDescription,
      motionDurationSlow = token.motionDurationSlow,
      colorIcon = token.colorIcon,
      colorIconHover = token.colorIconHover,
      iconCls = token.iconCls;
    var affixCls = "".concat(componentCls, "-affix-wrapper");
    return _defineProperty({}, affixCls, Object.assign(Object.assign(Object.assign(Object.assign({}, genBasicInputStyle(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      display: 'inline-flex'
    }, "&:not(".concat(componentCls, "-disabled):hover"), _defineProperty({
      zIndex: 1
    }, "".concat(componentCls, "-search-with-button &"), {
      zIndex: 0
    })), '&-focused, &:focus', {
      zIndex: 1
    }), "> input".concat(componentCls), {
      padding: 0,
      fontSize: 'inherit',
      border: 'none',
      borderRadius: 0,
      outline: 'none',
      background: 'transparent',
      color: 'inherit',
      '&::-ms-reveal': {
        display: 'none'
      },
      '&:focus': {
        boxShadow: 'none !important'
      }
    }), '&::before', {
      display: 'inline-block',
      width: 0,
      visibility: 'hidden',
      content: '"\\a0"'
    }), "".concat(componentCls), {
      '&-prefix, &-suffix': {
        display: 'flex',
        flex: 'none',
        alignItems: 'center',
        '> *:not(:last-child)': {
          marginInlineEnd: token.paddingXS
        }
      },
      '&-show-count-suffix': {
        color: colorTextDescription
      },
      '&-show-count-has-suffix': {
        marginInlineEnd: token.paddingXXS
      },
      '&-prefix': {
        marginInlineEnd: inputAffixPadding
      },
      '&-suffix': {
        marginInlineStart: inputAffixPadding
      }
    })), genAllowClearStyle(token)), _defineProperty({}, "".concat(iconCls).concat(componentCls, "-password-icon"), {
      color: colorIcon,
      cursor: 'pointer',
      transition: "all ".concat(motionDurationSlow),
      '&:hover': {
        color: colorIconHover
      }
    })));
  };
  var genGroupStyle = function genGroupStyle(token) {
    var componentCls = token.componentCls,
      borderRadiusLG = token.borderRadiusLG,
      borderRadiusSM = token.borderRadiusSM;
    return _defineProperty({}, "".concat(componentCls, "-group"), Object.assign(Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), genInputGroupStyle(token)), {
      '&-rtl': {
        direction: 'rtl'
      },
      '&-wrapper': Object.assign(Object.assign(Object.assign({
        display: 'inline-block',
        width: '100%',
        textAlign: 'start',
        verticalAlign: 'top',
        '&-rtl': {
          direction: 'rtl'
        },
        // Size
        '&-lg': _defineProperty({}, "".concat(componentCls, "-group-addon"), {
          borderRadius: borderRadiusLG,
          fontSize: token.inputFontSizeLG
        }),
        '&-sm': _defineProperty({}, "".concat(componentCls, "-group-addon"), {
          borderRadius: borderRadiusSM
        })
      }, (0, _variants.genOutlinedGroupStyle)(token)), (0, _variants.genFilledGroupStyle)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "&:not(".concat(componentCls, "-compact-first-item):not(").concat(componentCls, "-compact-last-item)").concat(componentCls, "-compact-item"), _defineProperty({}, "".concat(componentCls, ", ").concat(componentCls, "-group-addon"), {
        borderRadius: 0
      })), "&:not(".concat(componentCls, "-compact-last-item)").concat(componentCls, "-compact-first-item"), _defineProperty({}, "".concat(componentCls, ", ").concat(componentCls, "-group-addon"), {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      })), "&:not(".concat(componentCls, "-compact-first-item)").concat(componentCls, "-compact-last-item"), _defineProperty({}, "".concat(componentCls, ", ").concat(componentCls, "-group-addon"), {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      })), "&:not(".concat(componentCls, "-compact-last-item)").concat(componentCls, "-compact-item"), _defineProperty({}, "".concat(componentCls, "-affix-wrapper"), {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      })))
    }));
  };
  var genSearchInputStyle = function genSearchInputStyle(token) {
    var componentCls = token.componentCls,
      antCls = token.antCls;
    var searchPrefixCls = "".concat(componentCls, "-search");
    return _defineProperty({}, searchPrefixCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls), {
      '&:hover, &:focus': _defineProperty({
        borderColor: token.colorPrimaryHover
      }, "+ ".concat(componentCls, "-group-addon ").concat(searchPrefixCls, "-button:not(").concat(antCls, "-btn-primary)"), {
        borderInlineStartColor: token.colorPrimaryHover
      })
    }), "".concat(componentCls, "-affix-wrapper"), {
      borderRadius: 0
    }), "".concat(componentCls, "-lg"), {
      lineHeight: token.calc(token.lineHeightLG).sub(0.0002).equal({
        unit: false
      })
    }), "> ".concat(componentCls, "-group"), _defineProperty({}, "> ".concat(componentCls, "-group-addon:last-child"), _defineProperty(_defineProperty({
      insetInlineStart: -1,
      padding: 0,
      border: 0
    }, "".concat(searchPrefixCls, "-button"), {
      // Fix https://github.com/ant-design/ant-design/issues/47150
      marginInlineEnd: -1,
      paddingTop: 0,
      paddingBottom: 0,
      borderStartStartRadius: 0,
      borderStartEndRadius: token.borderRadius,
      borderEndEndRadius: token.borderRadius,
      borderEndStartRadius: 0,
      boxShadow: 'none'
    }), "".concat(searchPrefixCls, "-button:not(").concat(antCls, "-btn-primary)"), _defineProperty({
      color: token.colorTextDescription,
      '&:hover': {
        color: token.colorPrimaryHover
      },
      '&:active': {
        color: token.colorPrimaryActive
      }
    }, "&".concat(antCls, "-btn-loading::before"), {
      insetInlineStart: 0,
      insetInlineEnd: 0,
      insetBlockStart: 0,
      insetBlockEnd: 0
    })))), "".concat(searchPrefixCls, "-button"), {
      height: token.controlHeight,
      '&:hover, &:focus': {
        zIndex: 1
      }
    }), "&-large ".concat(searchPrefixCls, "-button"), {
      height: token.controlHeightLG
    }), "&-small ".concat(searchPrefixCls, "-button"), {
      height: token.controlHeightSM
    }), '&-rtl', {
      direction: 'rtl'
    }), "&".concat(componentCls, "-compact-item"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "&:not(".concat(componentCls, "-compact-last-item)"), _defineProperty({}, "".concat(componentCls, "-group-addon"), _defineProperty({}, "".concat(componentCls, "-search-button"), {
      marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal(),
      borderRadius: 0
    }))), "&:not(".concat(componentCls, "-compact-first-item)"), _defineProperty({}, "".concat(componentCls, ",").concat(componentCls, "-affix-wrapper"), {
      borderRadius: 0
    })), "> ".concat(componentCls, "-group-addon ").concat(componentCls, "-search-button,\n        > ").concat(componentCls, ",\n        ").concat(componentCls, "-affix-wrapper"), {
      '&:hover,&:focus,&:active': {
        zIndex: 2
      }
    }), "> ".concat(componentCls, "-affix-wrapper-focused"), {
      zIndex: 2
    })));
  };
  var genTextAreaStyle = function genTextAreaStyle(token) {
    var componentCls = token.componentCls,
      paddingLG = token.paddingLG;
    var textareaPrefixCls = "".concat(componentCls, "-textarea");
    return _defineProperty({}, textareaPrefixCls, _defineProperty(_defineProperty({
      position: 'relative',
      '&-show-count': _defineProperty(_defineProperty({}, "> ".concat(componentCls), {
        height: '100%'
      }), "".concat(componentCls, "-data-count"), {
        position: 'absolute',
        bottom: token.calc(token.fontSize).mul(token.lineHeight).mul(-1).equal(),
        insetInlineEnd: 0,
        color: token.colorTextDescription,
        whiteSpace: 'nowrap',
        pointerEvents: 'none'
      }),
      '&-allow-clear': _defineProperty({}, "> ".concat(componentCls), {
        paddingInlineEnd: paddingLG
      })
    }, "&-affix-wrapper".concat(textareaPrefixCls, "-has-feedback"), _defineProperty({}, "".concat(componentCls), {
      paddingInlineEnd: paddingLG
    })), "&-affix-wrapper".concat(componentCls, "-affix-wrapper"), _defineProperty(_defineProperty({
      padding: 0
    }, "> textarea".concat(componentCls), {
      fontSize: 'inherit',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      '&:focus': {
        boxShadow: 'none !important'
      }
    }), "".concat(componentCls, "-suffix"), _defineProperty(_defineProperty({
      margin: 0,
      '> *:not(:last-child)': {
        marginInline: 0
      }
    }, "".concat(componentCls, "-clear-icon"), {
      position: 'absolute',
      insetInlineEnd: token.paddingXS,
      insetBlockStart: token.paddingXS
    }), "".concat(textareaPrefixCls, "-suffix"), {
      position: 'absolute',
      top: 0,
      insetInlineEnd: token.paddingInline,
      bottom: 0,
      zIndex: 1,
      display: 'inline-flex',
      alignItems: 'center',
      margin: 'auto',
      pointerEvents: 'none'
    }))));
  };
  // ============================== Range ===============================
  var genRangeStyle = function genRangeStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, "".concat(componentCls, "-out-of-range"), _defineProperty({}, "&, & input, & textarea, ".concat(componentCls, "-show-count-suffix, ").concat(componentCls, "-data-count"), {
      color: token.colorError
    }));
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Input', function (token) {
    var inputToken = (0, _internal.mergeToken)(token, (0, _token.initInputToken)(token));
    return [genInputStyle(inputToken), genTextAreaStyle(inputToken), genAffixStyle(inputToken), genGroupStyle(inputToken), genSearchInputStyle(inputToken), genRangeStyle(inputToken),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    (0, _compactItem.genCompactItemStyle)(inputToken)];
  }, _token.initComponentToken);
});