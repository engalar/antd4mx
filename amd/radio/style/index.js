define(["exports", "@ant-design/cssinjs", "antd4mx/style", "antd4mx/theme/internal"], function (_exports, _cssinjs, _style, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // ============================== Styles ==============================
  // styles from RadioGroup only
  var getGroupRadioStyle = function getGroupRadioStyle(token) {
    var componentCls = token.componentCls,
      antCls = token.antCls;
    var groupPrefixCls = "".concat(componentCls, "-group");
    return _defineProperty({}, groupPrefixCls, Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty({
      display: 'inline-block',
      fontSize: 0
    }, "&".concat(groupPrefixCls, "-rtl"), {
      direction: 'rtl'
    }), "".concat(antCls, "-badge ").concat(antCls, "-badge-count"), {
      zIndex: 1
    }), "> ".concat(antCls, "-badge:not(:first-child) > ").concat(antCls, "-button-wrapper"), {
      borderInlineStart: 'none'
    })));
  };
  // Styles from radio-wrapper
  var getRadioBasicStyle = function getRadioBasicStyle(token) {
    var _Object$assign2;
    var componentCls = token.componentCls,
      wrapperMarginInlineEnd = token.wrapperMarginInlineEnd,
      colorPrimary = token.colorPrimary,
      radioSize = token.radioSize,
      motionDurationSlow = token.motionDurationSlow,
      motionDurationMid = token.motionDurationMid,
      motionEaseInOutCirc = token.motionEaseInOutCirc,
      colorBgContainer = token.colorBgContainer,
      colorBorder = token.colorBorder,
      lineWidth = token.lineWidth,
      colorBgContainerDisabled = token.colorBgContainerDisabled,
      colorTextDisabled = token.colorTextDisabled,
      paddingXS = token.paddingXS,
      dotColorDisabled = token.dotColorDisabled,
      lineType = token.lineType,
      radioColor = token.radioColor,
      radioBgColor = token.radioBgColor,
      calc = token.calc;
    var radioInnerPrefixCls = "".concat(componentCls, "-inner");
    var dotPadding = 4;
    var radioDotDisabledSize = calc(radioSize).sub(calc(dotPadding).mul(2));
    var radioSizeCalc = calc(1).mul(radioSize).equal();
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), (_Object$assign2 = {
      display: 'inline-flex',
      alignItems: 'baseline',
      marginInlineStart: 0,
      marginInlineEnd: wrapperMarginInlineEnd,
      cursor: 'pointer'
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$assign2, "&".concat(componentCls, "-wrapper-rtl"), {
      direction: 'rtl'
    }), '&-disabled', {
      cursor: 'not-allowed',
      color: token.colorTextDisabled
    }), '&::after', {
      display: 'inline-block',
      width: 0,
      overflow: 'hidden',
      content: '"\\a0"'
    }), "".concat(componentCls, "-checked::after"), {
      position: 'absolute',
      insetBlockStart: 0,
      insetInlineStart: 0,
      width: '100%',
      height: '100%',
      border: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorPrimary),
      borderRadius: '50%',
      visibility: 'hidden',
      content: '""'
    }), componentCls, Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), {
      position: 'relative',
      display: 'inline-block',
      outline: 'none',
      cursor: 'pointer',
      alignSelf: 'center',
      borderRadius: '50%'
    })), "".concat(componentCls, "-wrapper:hover &,\n        &:hover ").concat(radioInnerPrefixCls), {
      borderColor: colorPrimary
    }), "".concat(componentCls, "-input:focus-visible + ").concat(radioInnerPrefixCls), Object.assign({}, (0, _style.genFocusOutline)(token))), "".concat(componentCls, ":hover::after, ").concat(componentCls, "-wrapper:hover &::after"), {
      visibility: 'visible'
    }), "".concat(componentCls, "-inner"), {
      '&::after': {
        boxSizing: 'border-box',
        position: 'absolute',
        insetBlockStart: '50%',
        insetInlineStart: '50%',
        display: 'block',
        width: radioSizeCalc,
        height: radioSizeCalc,
        marginBlockStart: calc(1).mul(radioSize).div(-2).equal(),
        marginInlineStart: calc(1).mul(radioSize).div(-2).equal(),
        backgroundColor: radioColor,
        borderBlockStart: 0,
        borderInlineStart: 0,
        borderRadius: radioSizeCalc,
        transform: 'scale(0)',
        opacity: 0,
        transition: "all ".concat(motionDurationSlow, " ").concat(motionEaseInOutCirc),
        content: '""'
      },
      boxSizing: 'border-box',
      position: 'relative',
      insetBlockStart: 0,
      insetInlineStart: 0,
      display: 'block',
      width: radioSizeCalc,
      height: radioSizeCalc,
      backgroundColor: colorBgContainer,
      borderColor: colorBorder,
      borderStyle: 'solid',
      borderWidth: lineWidth,
      borderRadius: '50%',
      transition: "all ".concat(motionDurationMid)
    }), "".concat(componentCls, "-input"), {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      cursor: 'pointer',
      opacity: 0
    }), _defineProperty(_defineProperty(_defineProperty(_Object$assign2, "".concat(componentCls, "-checked"), _defineProperty({}, radioInnerPrefixCls, {
      borderColor: colorPrimary,
      backgroundColor: radioBgColor,
      '&::after': {
        transform: "scale(".concat(token.calc(token.dotSize).div(radioSize).equal(), ")"),
        opacity: 1,
        transition: "all ".concat(motionDurationSlow, " ").concat(motionEaseInOutCirc)
      }
    })), "".concat(componentCls, "-disabled"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      cursor: 'not-allowed'
    }, radioInnerPrefixCls, {
      backgroundColor: colorBgContainerDisabled,
      borderColor: colorBorder,
      cursor: 'not-allowed',
      '&::after': {
        backgroundColor: dotColorDisabled
      }
    }), "".concat(componentCls, "-input"), {
      cursor: 'not-allowed'
    }), "".concat(componentCls, "-disabled + span"), {
      color: colorTextDisabled,
      cursor: 'not-allowed'
    }), "&".concat(componentCls, "-checked"), _defineProperty({}, radioInnerPrefixCls, {
      '&::after': {
        transform: "scale(".concat(calc(radioDotDisabledSize).div(radioSize).equal({
          unit: false
        }), ")")
      }
    }))), "span".concat(componentCls, " + *"), {
      paddingInlineStart: paddingXS,
      paddingInlineEnd: paddingXS
    }))));
  };
  // Styles from radio-button
  var getRadioButtonStyle = function getRadioButtonStyle(token) {
    var _$concat4;
    var buttonColor = token.buttonColor,
      controlHeight = token.controlHeight,
      componentCls = token.componentCls,
      lineWidth = token.lineWidth,
      lineType = token.lineType,
      colorBorder = token.colorBorder,
      motionDurationSlow = token.motionDurationSlow,
      motionDurationMid = token.motionDurationMid,
      buttonPaddingInline = token.buttonPaddingInline,
      fontSize = token.fontSize,
      buttonBg = token.buttonBg,
      fontSizeLG = token.fontSizeLG,
      controlHeightLG = token.controlHeightLG,
      controlHeightSM = token.controlHeightSM,
      paddingXS = token.paddingXS,
      borderRadius = token.borderRadius,
      borderRadiusSM = token.borderRadiusSM,
      borderRadiusLG = token.borderRadiusLG,
      buttonCheckedBg = token.buttonCheckedBg,
      buttonSolidCheckedColor = token.buttonSolidCheckedColor,
      colorTextDisabled = token.colorTextDisabled,
      colorBgContainerDisabled = token.colorBgContainerDisabled,
      buttonCheckedBgDisabled = token.buttonCheckedBgDisabled,
      buttonCheckedColorDisabled = token.buttonCheckedColorDisabled,
      colorPrimary = token.colorPrimary,
      colorPrimaryHover = token.colorPrimaryHover,
      colorPrimaryActive = token.colorPrimaryActive,
      buttonSolidCheckedBg = token.buttonSolidCheckedBg,
      buttonSolidCheckedHoverBg = token.buttonSolidCheckedHoverBg,
      buttonSolidCheckedActiveBg = token.buttonSolidCheckedActiveBg,
      calc = token.calc;
    return _defineProperty({}, "".concat(componentCls, "-button-wrapper"), (_$concat4 = {
      position: 'relative',
      display: 'inline-block',
      height: controlHeight,
      margin: 0,
      paddingInline: buttonPaddingInline,
      paddingBlock: 0,
      color: buttonColor,
      fontSize: fontSize,
      lineHeight: (0, _cssinjs.unit)(calc(controlHeight).sub(calc(lineWidth).mul(2)).equal()),
      background: buttonBg,
      border: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorBorder),
      // strange align fix for chrome but works
      // https://gw.alipayobjects.com/zos/rmsportal/VFTfKXJuogBAXcvfAUWJ.gif
      borderBlockStartWidth: calc(lineWidth).add(0.02).equal(),
      borderInlineStartWidth: 0,
      borderInlineEndWidth: lineWidth,
      cursor: 'pointer',
      transition: ["color ".concat(motionDurationMid), "background ".concat(motionDurationMid), "box-shadow ".concat(motionDurationMid)].join(','),
      a: {
        color: buttonColor
      }
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_$concat4, "> ".concat(componentCls, "-button"), {
      position: 'absolute',
      insetBlockStart: 0,
      insetInlineStart: 0,
      zIndex: -1,
      width: '100%',
      height: '100%'
    }), '&:not(:first-child)', {
      '&::before': {
        position: 'absolute',
        insetBlockStart: calc(lineWidth).mul(-1).equal(),
        insetInlineStart: calc(lineWidth).mul(-1).equal(),
        display: 'block',
        boxSizing: 'content-box',
        width: 1,
        height: '100%',
        paddingBlock: lineWidth,
        paddingInline: 0,
        backgroundColor: colorBorder,
        transition: "background-color ".concat(motionDurationSlow),
        content: '""'
      }
    }), '&:first-child', {
      borderInlineStart: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorBorder),
      borderStartStartRadius: borderRadius,
      borderEndStartRadius: borderRadius
    }), '&:last-child', {
      borderStartEndRadius: borderRadius,
      borderEndEndRadius: borderRadius
    }), '&:first-child:last-child', {
      borderRadius: borderRadius
    }), "".concat(componentCls, "-group-large &"), {
      height: controlHeightLG,
      fontSize: fontSizeLG,
      lineHeight: (0, _cssinjs.unit)(calc(controlHeightLG).sub(calc(lineWidth).mul(2)).equal()),
      '&:first-child': {
        borderStartStartRadius: borderRadiusLG,
        borderEndStartRadius: borderRadiusLG
      },
      '&:last-child': {
        borderStartEndRadius: borderRadiusLG,
        borderEndEndRadius: borderRadiusLG
      }
    }), "".concat(componentCls, "-group-small &"), {
      height: controlHeightSM,
      paddingInline: calc(paddingXS).sub(lineWidth).equal(),
      paddingBlock: 0,
      lineHeight: (0, _cssinjs.unit)(calc(controlHeightSM).sub(calc(lineWidth).mul(2)).equal()),
      '&:first-child': {
        borderStartStartRadius: borderRadiusSM,
        borderEndStartRadius: borderRadiusSM
      },
      '&:last-child': {
        borderStartEndRadius: borderRadiusSM,
        borderEndEndRadius: borderRadiusSM
      }
    }), '&:hover', {
      position: 'relative',
      color: colorPrimary
    }), '&:has(:focus-visible)', Object.assign({}, (0, _style.genFocusOutline)(token))), "".concat(componentCls, "-inner, input[type='checkbox'], input[type='radio']"), {
      width: 0,
      height: 0,
      opacity: 0,
      pointerEvents: 'none'
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_$concat4, "&-checked:not(".concat(componentCls, "-button-wrapper-disabled)"), {
      zIndex: 1,
      color: colorPrimary,
      background: buttonCheckedBg,
      borderColor: colorPrimary,
      '&::before': {
        backgroundColor: colorPrimary
      },
      '&:first-child': {
        borderColor: colorPrimary
      },
      '&:hover': {
        color: colorPrimaryHover,
        borderColor: colorPrimaryHover,
        '&::before': {
          backgroundColor: colorPrimaryHover
        }
      },
      '&:active': {
        color: colorPrimaryActive,
        borderColor: colorPrimaryActive,
        '&::before': {
          backgroundColor: colorPrimaryActive
        }
      }
    }), "".concat(componentCls, "-group-solid &-checked:not(").concat(componentCls, "-button-wrapper-disabled)"), {
      color: buttonSolidCheckedColor,
      background: buttonSolidCheckedBg,
      borderColor: buttonSolidCheckedBg,
      '&:hover': {
        color: buttonSolidCheckedColor,
        background: buttonSolidCheckedHoverBg,
        borderColor: buttonSolidCheckedHoverBg
      },
      '&:active': {
        color: buttonSolidCheckedColor,
        background: buttonSolidCheckedActiveBg,
        borderColor: buttonSolidCheckedActiveBg
      }
    }), '&-disabled', {
      color: colorTextDisabled,
      backgroundColor: colorBgContainerDisabled,
      borderColor: colorBorder,
      cursor: 'not-allowed',
      '&:first-child, &:hover': {
        color: colorTextDisabled,
        backgroundColor: colorBgContainerDisabled,
        borderColor: colorBorder
      }
    }), "&-disabled".concat(componentCls, "-button-wrapper-checked"), {
      color: buttonCheckedColorDisabled,
      backgroundColor: buttonCheckedBgDisabled,
      borderColor: colorBorder,
      boxShadow: 'none'
    })));
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var wireframe = token.wireframe,
      padding = token.padding,
      marginXS = token.marginXS,
      lineWidth = token.lineWidth,
      fontSizeLG = token.fontSizeLG,
      colorText = token.colorText,
      colorBgContainer = token.colorBgContainer,
      colorTextDisabled = token.colorTextDisabled,
      controlItemBgActiveDisabled = token.controlItemBgActiveDisabled,
      colorTextLightSolid = token.colorTextLightSolid,
      colorPrimary = token.colorPrimary,
      colorPrimaryHover = token.colorPrimaryHover,
      colorPrimaryActive = token.colorPrimaryActive,
      colorWhite = token.colorWhite;
    var dotPadding = 4; // Fixed value
    var radioSize = fontSizeLG;
    var radioDotSize = wireframe ? radioSize - dotPadding * 2 : radioSize - (dotPadding + lineWidth) * 2;
    return {
      // Radio
      radioSize: radioSize,
      dotSize: radioDotSize,
      dotColorDisabled: colorTextDisabled,
      // Radio buttons
      buttonSolidCheckedColor: colorTextLightSolid,
      buttonSolidCheckedBg: colorPrimary,
      buttonSolidCheckedHoverBg: colorPrimaryHover,
      buttonSolidCheckedActiveBg: colorPrimaryActive,
      buttonBg: colorBgContainer,
      buttonCheckedBg: colorBgContainer,
      buttonColor: colorText,
      buttonCheckedBgDisabled: controlItemBgActiveDisabled,
      buttonCheckedColorDisabled: colorTextDisabled,
      buttonPaddingInline: padding - lineWidth,
      wrapperMarginInlineEnd: marginXS,
      // internal
      radioColor: wireframe ? colorPrimary : colorWhite,
      radioBgColor: wireframe ? colorBgContainer : colorPrimary
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Radio', function (token) {
    var controlOutline = token.controlOutline,
      controlOutlineWidth = token.controlOutlineWidth;
    var radioFocusShadow = "0 0 0 ".concat((0, _cssinjs.unit)(controlOutlineWidth), " ").concat(controlOutline);
    var radioButtonFocusShadow = radioFocusShadow;
    var radioToken = (0, _internal.mergeToken)(token, {
      radioFocusShadow: radioFocusShadow,
      radioButtonFocusShadow: radioButtonFocusShadow
    });
    return [getGroupRadioStyle(radioToken), getRadioBasicStyle(radioToken), getRadioButtonStyle(radioToken)];
  }, prepareComponentToken, {
    unitless: {
      radioSize: true,
      dotSize: true
    }
  });
});