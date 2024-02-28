define(["exports", "@ant-design/cssinjs", "antd4mx/theme/internal", "antd4mx/color-picker/style/color-block", "antd4mx/color-picker/style/input", "antd4mx/color-picker/style/picker", "antd4mx/color-picker/style/presets"], function (_exports, _cssinjs, _internal, _colorBlock, _input, _picker, _presets) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.genActiveStyle = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genActiveStyle = _exports.genActiveStyle = function genActiveStyle(token, borderColor, outlineColor) {
    return {
      borderInlineEndWidth: token.lineWidth,
      borderColor: borderColor,
      boxShadow: "0 0 0 ".concat((0, _cssinjs.unit)(token.controlOutlineWidth), " ").concat(outlineColor),
      outline: 0
    };
  };
  var genRtlStyle = function genRtlStyle(token) {
    var componentCls = token.componentCls;
    return {
      '&-rtl': _defineProperty(_defineProperty({}, "".concat(componentCls, "-presets-color"), {
        '&::after': {
          direction: 'ltr'
        }
      }), "".concat(componentCls, "-clear"), {
        '&::after': {
          direction: 'ltr'
        }
      })
    };
  };
  var genClearStyle = function genClearStyle(token, size, extraStyle) {
    var componentCls = token.componentCls,
      borderRadiusSM = token.borderRadiusSM,
      lineWidth = token.lineWidth,
      colorSplit = token.colorSplit,
      red6 = token.red6;
    return _defineProperty({}, "".concat(componentCls, "-clear"), Object.assign(Object.assign({
      width: size,
      height: size,
      borderRadius: borderRadiusSM,
      border: "".concat((0, _cssinjs.unit)(lineWidth), " solid ").concat(colorSplit),
      position: 'relative',
      overflow: 'hidden'
    }, extraStyle), {
      '&::after': {
        content: '""',
        position: 'absolute',
        insetInlineEnd: lineWidth,
        top: 0,
        display: 'block',
        width: 40,
        // maximum
        height: 2,
        // fixed
        transformOrigin: 'right',
        transform: 'rotate(-45deg)',
        backgroundColor: red6
      }
    }));
  };
  var genStatusStyle = function genStatusStyle(token) {
    var componentCls = token.componentCls,
      colorError = token.colorError,
      colorWarning = token.colorWarning,
      colorErrorHover = token.colorErrorHover,
      colorWarningHover = token.colorWarningHover,
      colorErrorOutline = token.colorErrorOutline,
      colorWarningOutline = token.colorWarningOutline;
    return _defineProperty(_defineProperty({}, "&".concat(componentCls, "-status-error"), _defineProperty({
      borderColor: colorError,
      '&:hover': {
        borderColor: colorErrorHover
      }
    }, "&".concat(componentCls, "-trigger-active"), Object.assign({}, genActiveStyle(token, colorError, colorErrorOutline)))), "&".concat(componentCls, "-status-warning"), _defineProperty({
      borderColor: colorWarning,
      '&:hover': {
        borderColor: colorWarningHover
      }
    }, "&".concat(componentCls, "-trigger-active"), Object.assign({}, genActiveStyle(token, colorWarning, colorWarningOutline))));
  };
  var genSizeStyle = function genSizeStyle(token) {
    var componentCls = token.componentCls,
      controlHeightLG = token.controlHeightLG,
      controlHeightSM = token.controlHeightSM,
      controlHeight = token.controlHeight,
      controlHeightXS = token.controlHeightXS,
      borderRadius = token.borderRadius,
      borderRadiusSM = token.borderRadiusSM,
      borderRadiusXS = token.borderRadiusXS,
      borderRadiusLG = token.borderRadiusLG,
      fontSizeLG = token.fontSizeLG;
    return _defineProperty(_defineProperty({}, "&".concat(componentCls, "-lg"), _defineProperty(_defineProperty({
      minWidth: controlHeightLG,
      height: controlHeightLG,
      borderRadius: borderRadiusLG
    }, "".concat(componentCls, "-color-block, ").concat(componentCls, "-clear"), {
      width: controlHeight,
      height: controlHeight,
      borderRadius: borderRadius
    }), "".concat(componentCls, "-trigger-text"), {
      fontSize: fontSizeLG
    })), "&".concat(componentCls, "-sm"), _defineProperty({
      minWidth: controlHeightSM,
      height: controlHeightSM,
      borderRadius: borderRadiusSM
    }, "".concat(componentCls, "-color-block, ").concat(componentCls, "-clear"), {
      width: controlHeightXS,
      height: controlHeightXS,
      borderRadius: borderRadiusXS
    }));
  };
  var genColorPickerStyle = function genColorPickerStyle(token) {
    var antCls = token.antCls,
      componentCls = token.componentCls,
      colorPickerWidth = token.colorPickerWidth,
      colorPrimary = token.colorPrimary,
      motionDurationMid = token.motionDurationMid,
      colorBgElevated = token.colorBgElevated,
      colorTextDisabled = token.colorTextDisabled,
      colorText = token.colorText,
      colorBgContainerDisabled = token.colorBgContainerDisabled,
      borderRadius = token.borderRadius,
      marginXS = token.marginXS,
      marginSM = token.marginSM,
      controlHeight = token.controlHeight,
      controlHeightSM = token.controlHeightSM,
      colorBgTextActive = token.colorBgTextActive,
      colorPickerPresetColorSize = token.colorPickerPresetColorSize,
      colorPickerPreviewSize = token.colorPickerPreviewSize,
      lineWidth = token.lineWidth,
      colorBorder = token.colorBorder,
      paddingXXS = token.paddingXXS,
      fontSize = token.fontSize,
      colorPrimaryHover = token.colorPrimaryHover,
      controlOutline = token.controlOutline;
    return [_defineProperty({}, componentCls, Object.assign(_defineProperty(_defineProperty({}, "".concat(componentCls, "-inner"), Object.assign(Object.assign(Object.assign(Object.assign(_defineProperty({
      '&-content': _defineProperty({
        display: 'flex',
        flexDirection: 'column',
        width: colorPickerWidth
      }, "& > ".concat(antCls, "-divider"), {
        margin: "".concat((0, _cssinjs.unit)(marginSM), " 0 ").concat((0, _cssinjs.unit)(marginXS))
      })
    }, "".concat(componentCls, "-panel"), Object.assign({}, (0, _picker["default"])(token))), (0, _colorBlock["default"])(token, colorPickerPreviewSize)), (0, _input["default"])(token)), (0, _presets["default"])(token)), genClearStyle(token, colorPickerPresetColorSize, {
      marginInlineStart: 'auto',
      marginBottom: marginXS
    }))), '&-trigger', Object.assign(Object.assign(Object.assign(Object.assign(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      minWidth: controlHeight,
      height: controlHeight,
      borderRadius: borderRadius,
      border: "".concat((0, _cssinjs.unit)(lineWidth), " solid ").concat(colorBorder),
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: "all ".concat(motionDurationMid),
      background: colorBgElevated,
      padding: token.calc(paddingXXS).sub(lineWidth).equal()
    }, "".concat(componentCls, "-trigger-text"), {
      marginInlineStart: marginXS,
      marginInlineEnd: token.calc(marginXS).sub(token.calc(paddingXXS).sub(lineWidth)).equal(),
      fontSize: fontSize,
      color: colorText
    }), '&:hover', {
      borderColor: colorPrimaryHover
    }), "&".concat(componentCls, "-trigger-active"), Object.assign({}, genActiveStyle(token, colorPrimary, controlOutline))), '&-disabled', _defineProperty({
      color: colorTextDisabled,
      background: colorBgContainerDisabled,
      cursor: 'not-allowed',
      '&:hover': {
        borderColor: colorBgTextActive
      }
    }, "".concat(componentCls, "-trigger-text"), {
      color: colorTextDisabled
    })), genClearStyle(token, controlHeightSM)), (0, _colorBlock["default"])(token, controlHeightSM)), genStatusStyle(token)), genSizeStyle(token))), genRtlStyle(token)))];
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('ColorPicker', function (token) {
    var colorTextQuaternary = token.colorTextQuaternary,
      marginSM = token.marginSM;
    var colorPickerSliderHeight = 8;
    var colorPickerToken = (0, _internal.mergeToken)(token, {
      colorPickerWidth: 234,
      colorPickerHandlerSize: 16,
      colorPickerHandlerSizeSM: 12,
      colorPickerAlphaInputWidth: 44,
      colorPickerInputNumberHandleWidth: 16,
      colorPickerPresetColorSize: 18,
      colorPickerInsetShadow: "inset 0 0 1px 0 ".concat(colorTextQuaternary),
      colorPickerSliderHeight: colorPickerSliderHeight,
      colorPickerPreviewSize: token.calc(colorPickerSliderHeight).mul(2).add(marginSM).equal()
    });
    return [genColorPickerStyle(colorPickerToken)];
  });
});