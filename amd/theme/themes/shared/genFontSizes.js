define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = getFontSizes;
  _exports.getLineHeight = getLineHeight;
  function getLineHeight(fontSize) {
    return (fontSize + 8) / fontSize;
  }
  // https://zhuanlan.zhihu.com/p/32746810
  function getFontSizes(base) {
    var fontSizes = new Array(10).fill(null).map(function (_, index) {
      var i = index - 1;
      var baseSize = base * Math.pow(2.71828, i / 5);
      var intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
      // Convert to even
      return Math.floor(intSize / 2) * 2;
    });
    fontSizes[1] = base;
    return fontSizes.map(function (size) {
      return {
        size: size,
        lineHeight: getLineHeight(size)
      };
    });
  }
});