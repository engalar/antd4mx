define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = void 0;
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var fontSize = token.fontSize,
      lineHeight = token.lineHeight,
      controlHeight = token.controlHeight,
      controlPaddingHorizontal = token.controlPaddingHorizontal,
      zIndexPopupBase = token.zIndexPopupBase,
      colorText = token.colorText,
      fontWeightStrong = token.fontWeightStrong,
      controlItemBgActive = token.controlItemBgActive,
      controlItemBgHover = token.controlItemBgHover,
      colorBgContainer = token.colorBgContainer,
      colorFillSecondary = token.colorFillSecondary,
      controlHeightLG = token.controlHeightLG,
      controlHeightSM = token.controlHeightSM,
      colorBgContainerDisabled = token.colorBgContainerDisabled,
      colorTextDisabled = token.colorTextDisabled;
    return {
      zIndexPopup: zIndexPopupBase + 50,
      optionSelectedColor: colorText,
      optionSelectedFontWeight: fontWeightStrong,
      optionSelectedBg: controlItemBgActive,
      optionActiveBg: controlItemBgHover,
      optionPadding: "".concat((controlHeight - fontSize * lineHeight) / 2, "px ").concat(controlPaddingHorizontal, "px"),
      optionFontSize: fontSize,
      optionLineHeight: lineHeight,
      optionHeight: controlHeight,
      selectorBg: colorBgContainer,
      clearBg: colorBgContainer,
      singleItemHeightLG: controlHeightLG,
      multipleItemBg: colorFillSecondary,
      multipleItemBorderColor: 'transparent',
      multipleItemHeight: controlHeightSM,
      multipleItemHeightLG: controlHeight,
      multipleSelectorBgDisabled: colorBgContainerDisabled,
      multipleItemColorDisabled: colorTextDisabled,
      multipleItemBorderColorDisabled: 'transparent',
      showArrowPaddingInlineEnd: Math.ceil(token.fontSize * 1.25)
    };
  };
});