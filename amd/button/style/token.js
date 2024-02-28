define(["exports", "antd4mx/theme/internal"], function (_exports, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareToken = _exports.prepareComponentToken = void 0;
  var prepareToken = _exports.prepareToken = function prepareToken(token) {
    var paddingInline = token.paddingInline,
      onlyIconSize = token.onlyIconSize,
      paddingBlock = token.paddingBlock;
    var buttonToken = (0, _internal.mergeToken)(token, {
      buttonPaddingHorizontal: paddingInline,
      buttonPaddingVertical: paddingBlock,
      buttonIconOnlyFontSize: onlyIconSize
    });
    return buttonToken;
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var _a, _b, _c, _d, _e, _f;
    var contentFontSize = (_a = token.contentFontSize) !== null && _a !== void 0 ? _a : token.fontSize;
    var contentFontSizeSM = (_b = token.contentFontSizeSM) !== null && _b !== void 0 ? _b : token.fontSize;
    var contentFontSizeLG = (_c = token.contentFontSizeLG) !== null && _c !== void 0 ? _c : token.fontSizeLG;
    var contentLineHeight = (_d = token.contentLineHeight) !== null && _d !== void 0 ? _d : (0, _internal.getLineHeight)(contentFontSize);
    var contentLineHeightSM = (_e = token.contentLineHeightSM) !== null && _e !== void 0 ? _e : (0, _internal.getLineHeight)(contentFontSizeSM);
    var contentLineHeightLG = (_f = token.contentLineHeightLG) !== null && _f !== void 0 ? _f : (0, _internal.getLineHeight)(contentFontSizeLG);
    return {
      fontWeight: 400,
      defaultShadow: "0 ".concat(token.controlOutlineWidth, "px 0 ").concat(token.controlTmpOutline),
      primaryShadow: "0 ".concat(token.controlOutlineWidth, "px 0 ").concat(token.controlOutline),
      dangerShadow: "0 ".concat(token.controlOutlineWidth, "px 0 ").concat(token.colorErrorOutline),
      primaryColor: token.colorTextLightSolid,
      dangerColor: token.colorTextLightSolid,
      borderColorDisabled: token.colorBorder,
      defaultGhostColor: token.colorBgContainer,
      ghostBg: 'transparent',
      defaultGhostBorderColor: token.colorBgContainer,
      paddingInline: token.paddingContentHorizontal - token.lineWidth,
      paddingInlineLG: token.paddingContentHorizontal - token.lineWidth,
      paddingInlineSM: 8 - token.lineWidth,
      onlyIconSize: token.fontSizeLG,
      onlyIconSizeSM: token.fontSizeLG - 2,
      onlyIconSizeLG: token.fontSizeLG + 2,
      groupBorderColor: token.colorPrimaryHover,
      linkHoverBg: 'transparent',
      textHoverBg: token.colorBgTextHover,
      defaultColor: token.colorText,
      defaultBg: token.colorBgContainer,
      defaultBorderColor: token.colorBorder,
      defaultBorderColorDisabled: token.colorBorder,
      defaultHoverBg: token.colorBgContainer,
      defaultHoverColor: token.colorPrimaryHover,
      defaultHoverBorderColor: token.colorPrimaryHover,
      defaultActiveBg: token.colorBgContainer,
      defaultActiveColor: token.colorPrimaryActive,
      defaultActiveBorderColor: token.colorPrimaryActive,
      contentFontSize: contentFontSize,
      contentFontSizeSM: contentFontSizeSM,
      contentFontSizeLG: contentFontSizeLG,
      contentLineHeight: contentLineHeight,
      contentLineHeightSM: contentLineHeightSM,
      contentLineHeightLG: contentLineHeightLG,
      paddingBlock: Math.max((token.controlHeight - contentFontSize * contentLineHeight) / 2 - token.lineWidth, 0),
      paddingBlockSM: Math.max((token.controlHeightSM - contentFontSizeSM * contentLineHeightSM) / 2 - token.lineWidth, 0),
      paddingBlockLG: Math.max((token.controlHeightLG - contentFontSizeLG * contentLineHeightLG) / 2 - token.lineWidth, 0)
    };
  };
});