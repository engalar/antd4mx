define(["exports", "@ant-design/cssinjs", "antd4mx/input/style", "antd4mx/style", "antd4mx/style/compact-item", "antd4mx/style/motion", "antd4mx/style/roundedArrow", "antd4mx/theme/internal", "antd4mx/date-picker/style/multiple", "antd4mx/date-picker/style/panel", "antd4mx/date-picker/style/token", "antd4mx/date-picker/style/variants"], function (_exports, _cssinjs, _style, _style2, _compactItem, _motion, _roundedArrow, _internal, _multiple, _panel, _token, _variants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  Object.defineProperty(_exports, "genPanelStyle", {
    enumerable: true,
    get: function get() {
      return _panel.genPanelStyle;
    }
  });
  Object.defineProperty(_exports, "initPanelComponentToken", {
    enumerable: true,
    get: function get() {
      return _token.initPanelComponentToken;
    }
  });
  Object.defineProperty(_exports, "initPickerPanelToken", {
    enumerable: true,
    get: function get() {
      return _token.initPickerPanelToken;
    }
  });
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genPickerPadding = function genPickerPadding(token, inputHeight, fontHeight, paddingHorizontal) {
    var height = token.calc(fontHeight).add(2).equal();
    var paddingTop = token.max(token.calc(inputHeight).sub(height).div(2).equal(), 0);
    var paddingBottom = token.max(token.calc(inputHeight).sub(height).sub(paddingTop).equal(), 0);
    return {
      padding: "".concat((0, _cssinjs.unit)(paddingTop), " ").concat((0, _cssinjs.unit)(paddingHorizontal), " ").concat((0, _cssinjs.unit)(paddingBottom))
    };
  };
  var genPickerStatusStyle = function genPickerStatusStyle(token) {
    var componentCls = token.componentCls,
      colorError = token.colorError,
      colorWarning = token.colorWarning;
    return _defineProperty({}, "".concat(componentCls, ":not(").concat(componentCls, "-disabled):not([disabled])"), _defineProperty(_defineProperty({}, "&".concat(componentCls, "-status-error"), _defineProperty({}, "".concat(componentCls, "-active-bar"), {
      background: colorError
    })), "&".concat(componentCls, "-status-warning"), _defineProperty({}, "".concat(componentCls, "-active-bar"), {
      background: colorWarning
    })));
  };
  var genPickerStyle = function genPickerStyle(token) {
    var _Object$assign2, _Object$assign3;
    var componentCls = token.componentCls,
      antCls = token.antCls,
      controlHeight = token.controlHeight,
      paddingInline = token.paddingInline,
      lineWidth = token.lineWidth,
      lineType = token.lineType,
      colorBorder = token.colorBorder,
      borderRadius = token.borderRadius,
      motionDurationMid = token.motionDurationMid,
      colorTextDisabled = token.colorTextDisabled,
      colorTextPlaceholder = token.colorTextPlaceholder,
      controlHeightLG = token.controlHeightLG,
      fontSizeLG = token.fontSizeLG,
      controlHeightSM = token.controlHeightSM,
      paddingInlineSM = token.paddingInlineSM,
      paddingXS = token.paddingXS,
      marginXS = token.marginXS,
      colorTextDescription = token.colorTextDescription,
      lineWidthBold = token.lineWidthBold,
      colorPrimary = token.colorPrimary,
      motionDurationSlow = token.motionDurationSlow,
      zIndexPopup = token.zIndexPopup,
      paddingXXS = token.paddingXXS,
      sizePopupArrow = token.sizePopupArrow,
      colorBgElevated = token.colorBgElevated,
      borderRadiusLG = token.borderRadiusLG,
      boxShadowSecondary = token.boxShadowSecondary,
      borderRadiusSM = token.borderRadiusSM,
      colorSplit = token.colorSplit,
      cellHoverBg = token.cellHoverBg,
      presetsWidth = token.presetsWidth,
      presetsMaxWidth = token.presetsMaxWidth,
      boxShadowPopoverArrow = token.boxShadowPopoverArrow,
      fontHeight = token.fontHeight,
      fontHeightLG = token.fontHeightLG,
      lineHeightLG = token.lineHeightLG;
    return [_defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign({}, (0, _style2.resetComponent)(token)), genPickerPadding(token, controlHeight, fontHeight, paddingInline)), (_Object$assign3 = {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      lineHeight: 1,
      borderRadius: borderRadius,
      transition: "border ".concat(motionDurationMid, ", box-shadow ").concat(motionDurationMid, ", background ").concat(motionDurationMid)
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$assign3, "".concat(componentCls, "-input"), {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: '100%',
      '> input': Object.assign(Object.assign({
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        color: 'inherit',
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        transition: "all ".concat(motionDurationMid)
      }, (0, _style.genPlaceholderStyle)(colorTextPlaceholder)), {
        flex: 'auto',
        // Fix Firefox flex not correct:
        // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
        minWidth: 1,
        height: 'auto',
        padding: 0,
        background: 'transparent',
        border: 0,
        fontFamily: 'inherit',
        '&:focus': {
          boxShadow: 'none',
          outline: 0
        },
        '&[disabled]': {
          background: 'transparent',
          color: colorTextDisabled,
          cursor: 'not-allowed'
        }
      }),
      '&-placeholder': {
        '> input': {
          color: colorTextPlaceholder
        }
      }
    }), '&-large', Object.assign(Object.assign({}, genPickerPadding(token, controlHeightLG, fontHeightLG, paddingInline)), _defineProperty({}, "".concat(componentCls, "-input > input"), {
      fontSize: fontSizeLG,
      lineHeight: lineHeightLG
    }))), '&-small', Object.assign({}, genPickerPadding(token, controlHeightSM, fontHeight, paddingInlineSM))), "".concat(componentCls, "-suffix"), {
      display: 'flex',
      flex: 'none',
      alignSelf: 'center',
      marginInlineStart: token.calc(paddingXS).div(2).equal(),
      color: colorTextDisabled,
      lineHeight: 1,
      pointerEvents: 'none',
      transition: "opacity ".concat(motionDurationMid, ", color ").concat(motionDurationMid),
      '> *': {
        verticalAlign: 'top',
        '&:not(:last-child)': {
          marginInlineEnd: marginXS
        }
      }
    }), "".concat(componentCls, "-clear"), {
      position: 'absolute',
      top: '50%',
      insetInlineEnd: 0,
      color: colorTextDisabled,
      lineHeight: 1,
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      opacity: 0,
      transition: "opacity ".concat(motionDurationMid, ", color ").concat(motionDurationMid),
      '> *': {
        verticalAlign: 'top'
      },
      '&:hover': {
        color: colorTextDescription
      }
    }), '&:hover', _defineProperty(_defineProperty({}, "".concat(componentCls, "-clear"), {
      opacity: 1
    }), "".concat(componentCls, "-suffix:not(:last-child)"), {
      opacity: 0
    })), "".concat(componentCls, "-separator"), _defineProperty(_defineProperty({
      position: 'relative',
      display: 'inline-block',
      width: '1em',
      height: fontSizeLG,
      color: colorTextDisabled,
      fontSize: fontSizeLG,
      verticalAlign: 'top',
      cursor: 'default'
    }, "".concat(componentCls, "-focused &"), {
      color: colorTextDescription
    }), "".concat(componentCls, "-range-separator &"), _defineProperty({}, "".concat(componentCls, "-disabled &"), {
      cursor: 'not-allowed'
    }))), '&-range', _defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      display: 'inline-flex'
    }, "".concat(componentCls, "-active-bar"), {
      bottom: token.calc(lineWidth).mul(-1).equal(),
      height: lineWidthBold,
      background: colorPrimary,
      opacity: 0,
      transition: "all ".concat(motionDurationSlow, " ease-out"),
      pointerEvents: 'none'
    }), "&".concat(componentCls, "-focused"), _defineProperty({}, "".concat(componentCls, "-active-bar"), {
      opacity: 1
    })), "".concat(componentCls, "-range-separator"), {
      alignItems: 'center',
      padding: "0 ".concat((0, _cssinjs.unit)(paddingXS)),
      lineHeight: 1
    })), '&-range, &-multiple', _defineProperty(_defineProperty({}, "".concat(componentCls, "-clear"), {
      insetInlineEnd: paddingInline
    }), "&".concat(componentCls, "-small"), _defineProperty({}, "".concat(componentCls, "-clear"), {
      insetInlineEnd: paddingInlineSM
    }))), '&-dropdown', Object.assign(Object.assign(Object.assign({}, (0, _style2.resetComponent)(token)), (0, _panel.genPanelStyle)(token)), (_Object$assign2 = {
      pointerEvents: 'none',
      position: 'absolute',
      // Fix incorrect position of picker popup
      // https://github.com/ant-design/ant-design/issues/35590
      top: -9999,
      left: {
        _skip_check_: true,
        value: -9999
      },
      zIndex: zIndexPopup
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$assign2, "&".concat(componentCls, "-dropdown-hidden"), {
      display: 'none'
    }), "&".concat(componentCls, "-dropdown-placement-bottomLeft"), _defineProperty({}, "".concat(componentCls, "-range-arrow"), {
      top: 0,
      display: 'block',
      transform: 'translateY(-100%)'
    })), "&".concat(componentCls, "-dropdown-placement-topLeft"), _defineProperty({}, "".concat(componentCls, "-range-arrow"), {
      bottom: 0,
      display: 'block',
      transform: 'translateY(100%) rotate(180deg)'
    })), "&".concat(antCls, "-slide-up-enter").concat(antCls, "-slide-up-enter-active").concat(componentCls, "-dropdown-placement-topLeft,\n          &").concat(antCls, "-slide-up-enter").concat(antCls, "-slide-up-enter-active").concat(componentCls, "-dropdown-placement-topRight,\n          &").concat(antCls, "-slide-up-appear").concat(antCls, "-slide-up-appear-active").concat(componentCls, "-dropdown-placement-topLeft,\n          &").concat(antCls, "-slide-up-appear").concat(antCls, "-slide-up-appear-active").concat(componentCls, "-dropdown-placement-topRight"), {
      animationName: _motion.slideDownIn
    }), "&".concat(antCls, "-slide-up-enter").concat(antCls, "-slide-up-enter-active").concat(componentCls, "-dropdown-placement-bottomLeft,\n          &").concat(antCls, "-slide-up-enter").concat(antCls, "-slide-up-enter-active").concat(componentCls, "-dropdown-placement-bottomRight,\n          &").concat(antCls, "-slide-up-appear").concat(antCls, "-slide-up-appear-active").concat(componentCls, "-dropdown-placement-bottomLeft,\n          &").concat(antCls, "-slide-up-appear").concat(antCls, "-slide-up-appear-active").concat(componentCls, "-dropdown-placement-bottomRight"), {
      animationName: _motion.slideUpIn
    }), "&".concat(antCls, "-slide-up-leave").concat(antCls, "-slide-up-leave-active").concat(componentCls, "-dropdown-placement-topLeft,\n          &").concat(antCls, "-slide-up-leave").concat(antCls, "-slide-up-leave-active").concat(componentCls, "-dropdown-placement-topRight"), {
      animationName: _motion.slideDownOut
    }), "&".concat(antCls, "-slide-up-leave").concat(antCls, "-slide-up-leave-active").concat(componentCls, "-dropdown-placement-bottomLeft,\n          &").concat(antCls, "-slide-up-leave").concat(antCls, "-slide-up-leave-active").concat(componentCls, "-dropdown-placement-bottomRight"), {
      animationName: _motion.slideUpOut
    }), "".concat(componentCls, "-panel > ").concat(componentCls, "-time-panel"), {
      paddingTop: paddingXXS
    }), "".concat(componentCls, "-range-wrapper"), {
      display: 'flex',
      position: 'relative'
    }), "".concat(componentCls, "-range-arrow"), Object.assign(Object.assign({
      position: 'absolute',
      zIndex: 1,
      display: 'none',
      paddingInline: token.calc(paddingInline).mul(1.5).equal(),
      boxSizing: 'content-box',
      transition: "left ".concat(motionDurationSlow, " ease-out")
    }, (0, _roundedArrow.genRoundedArrow)(token, colorBgElevated, boxShadowPopoverArrow)), {
      '&:before': {
        insetInlineStart: token.calc(paddingInline).mul(1.5).equal()
      }
    })), _defineProperty(_Object$assign2, "".concat(componentCls, "-panel-container"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      overflow: 'hidden',
      verticalAlign: 'top',
      background: colorBgElevated,
      borderRadius: borderRadiusLG,
      boxShadow: boxShadowSecondary,
      transition: "margin ".concat(motionDurationSlow),
      display: 'inline-block',
      pointerEvents: 'auto'
    }, "".concat(componentCls, "-panel-layout"), {
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'stretch'
    }), "".concat(componentCls, "-presets"), {
      display: 'flex',
      flexDirection: 'column',
      minWidth: presetsWidth,
      maxWidth: presetsMaxWidth,
      ul: {
        height: 0,
        flex: 'auto',
        listStyle: 'none',
        overflow: 'auto',
        margin: 0,
        padding: paddingXS,
        borderInlineEnd: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorSplit),
        li: Object.assign(Object.assign({}, _style2.textEllipsis), {
          borderRadius: borderRadiusSM,
          paddingInline: paddingXS,
          paddingBlock: token.calc(controlHeightSM).sub(fontHeight).div(2).equal(),
          cursor: 'pointer',
          transition: "all ".concat(motionDurationSlow),
          '+ li': {
            marginTop: marginXS
          },
          '&:hover': {
            background: cellHoverBg
          }
        })
      }
    }), "".concat(componentCls, "-panels"), {
      display: 'inline-flex',
      flexWrap: 'nowrap',
      direction: 'ltr',
      // [`${componentCls}-panel`]: {
      //   borderWidth: `0 0 ${unit(lineWidth)}`,
      // },
      '&:last-child': _defineProperty({}, "".concat(componentCls, "-panel"), {
        borderWidth: 0
      })
    }), "".concat(componentCls, "-panel"), _defineProperty(_defineProperty({
      verticalAlign: 'top',
      background: 'transparent',
      borderRadius: 0,
      borderWidth: 0
    }, "".concat(componentCls, "-content,\n            table"), {
      textAlign: 'center'
    }), '&-focused', {
      borderColor: colorBorder
    })))))), _defineProperty(_defineProperty(_Object$assign3, '&-dropdown-range', {
      padding: "".concat((0, _cssinjs.unit)(token.calc(sizePopupArrow).mul(2).div(3).equal()), " 0"),
      '&-hidden': {
        display: 'none'
      }
    }), '&-rtl', _defineProperty(_defineProperty({
      direction: 'rtl'
    }, "".concat(componentCls, "-separator"), {
      transform: 'rotate(180deg)'
    }), "".concat(componentCls, "-footer"), {
      '&-extra': {
        direction: 'rtl'
      }
    }))))),
    // Follow code may reuse in other components
    (0, _motion.initSlideMotion)(token, 'slide-up'), (0, _motion.initSlideMotion)(token, 'slide-down'), (0, _motion.initMoveMotion)(token, 'move-up'), (0, _motion.initMoveMotion)(token, 'move-down')];
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('DatePicker', function (token) {
    var pickerToken = (0, _internal.mergeToken)((0, _style.initInputToken)(token), (0, _token.initPickerPanelToken)(token), {
      inputPaddingHorizontalBase: token.calc(token.paddingSM).sub(1).equal(),
      multipleSelectItemHeight: token.multipleItemHeight,
      selectHeight: token.controlHeight
    });
    return [(0, _panel["default"])(pickerToken), genPickerStyle(pickerToken), (0, _variants["default"])(pickerToken), genPickerStatusStyle(pickerToken), (0, _multiple["default"])(pickerToken),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    (0, _compactItem.genCompactItemStyle)(token, {
      focusElCls: "".concat(token.componentCls, "-focused")
    })];
  }, _token.prepareComponentToken);
});