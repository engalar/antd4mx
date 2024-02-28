define(["exports", "antd4mx/theme/internal"], function (_exports, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initComponentToken = void 0;
  _exports.initInputToken = initInputToken;
  function initInputToken(token) {
    return (0, _internal.mergeToken)(token, {
      inputAffixPadding: token.paddingXXS
    });
  }
  var initComponentToken = _exports.initComponentToken = function initComponentToken(token) {
    var controlHeight = token.controlHeight,
      fontSize = token.fontSize,
      lineHeight = token.lineHeight,
      lineWidth = token.lineWidth,
      controlHeightSM = token.controlHeightSM,
      controlHeightLG = token.controlHeightLG,
      fontSizeLG = token.fontSizeLG,
      lineHeightLG = token.lineHeightLG,
      paddingSM = token.paddingSM,
      controlPaddingHorizontalSM = token.controlPaddingHorizontalSM,
      controlPaddingHorizontal = token.controlPaddingHorizontal,
      colorFillAlter = token.colorFillAlter,
      colorPrimaryHover = token.colorPrimaryHover,
      colorPrimary = token.colorPrimary,
      controlOutlineWidth = token.controlOutlineWidth,
      controlOutline = token.controlOutline,
      colorErrorOutline = token.colorErrorOutline,
      colorWarningOutline = token.colorWarningOutline,
      colorBgContainer = token.colorBgContainer;
    return {
      paddingBlock: Math.max(Math.round((controlHeight - fontSize * lineHeight) / 2 * 10) / 10 - lineWidth, 0),
      paddingBlockSM: Math.max(Math.round((controlHeightSM - fontSize * lineHeight) / 2 * 10) / 10 - lineWidth, 0),
      paddingBlockLG: Math.ceil((controlHeightLG - fontSizeLG * lineHeightLG) / 2 * 10) / 10 - lineWidth,
      paddingInline: paddingSM - lineWidth,
      paddingInlineSM: controlPaddingHorizontalSM - lineWidth,
      paddingInlineLG: controlPaddingHorizontal - lineWidth,
      addonBg: colorFillAlter,
      activeBorderColor: colorPrimary,
      hoverBorderColor: colorPrimaryHover,
      activeShadow: "0 0 0 ".concat(controlOutlineWidth, "px ").concat(controlOutline),
      errorActiveShadow: "0 0 0 ".concat(controlOutlineWidth, "px ").concat(colorErrorOutline),
      warningActiveShadow: "0 0 0 ".concat(controlOutlineWidth, "px ").concat(colorWarningOutline),
      hoverBg: colorBgContainer,
      activeBg: colorBgContainer,
      inputFontSize: fontSize,
      inputFontSizeLG: fontSizeLG,
      inputFontSizeSM: fontSize
    };
  };
});