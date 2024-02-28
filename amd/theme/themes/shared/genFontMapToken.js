define(["exports", "antd4mx/theme/themes/shared/genFontSizes"], function (_exports, _genFontSizes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var genFontMapToken = function genFontMapToken(fontSize) {
    var fontSizePairs = (0, _genFontSizes["default"])(fontSize);
    var fontSizes = fontSizePairs.map(function (pair) {
      return pair.size;
    });
    var lineHeights = fontSizePairs.map(function (pair) {
      return pair.lineHeight;
    });
    var fontSizeMD = fontSizes[1];
    var fontSizeSM = fontSizes[0];
    var fontSizeLG = fontSizes[2];
    var lineHeight = lineHeights[1];
    var lineHeightSM = lineHeights[0];
    var lineHeightLG = lineHeights[2];
    return {
      fontSizeSM: fontSizeSM,
      fontSize: fontSizeMD,
      fontSizeLG: fontSizeLG,
      fontSizeXL: fontSizes[3],
      fontSizeHeading1: fontSizes[6],
      fontSizeHeading2: fontSizes[5],
      fontSizeHeading3: fontSizes[4],
      fontSizeHeading4: fontSizes[3],
      fontSizeHeading5: fontSizes[2],
      lineHeight: lineHeight,
      lineHeightLG: lineHeightLG,
      lineHeightSM: lineHeightSM,
      fontHeight: Math.round(lineHeight * fontSizeMD),
      fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
      fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
      lineHeightHeading1: lineHeights[6],
      lineHeightHeading2: lineHeights[5],
      lineHeightHeading3: lineHeights[4],
      lineHeightHeading4: lineHeights[3],
      lineHeightHeading5: lineHeights[2]
    };
  };
  var _default = _exports["default"] = genFontMapToken;
});