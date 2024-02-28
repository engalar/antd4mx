define(["exports", "@ant-design/colors", "antd4mx/theme/themes/shared/genControlHeight", "antd4mx/theme/themes/shared/genSizeMapToken", "antd4mx/theme/themes/seed", "antd4mx/theme/themes/shared/genColorMapToken", "antd4mx/theme/themes/shared/genCommonMapToken", "antd4mx/theme/themes/default/colors", "antd4mx/theme/themes/shared/genFontMapToken"], function (_exports, _colors, _genControlHeight, _genSizeMapToken, _seed, _genColorMapToken, _genCommonMapToken, _colors2, _genFontMapToken) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = derivative;
  function derivative(token) {
    var colorPalettes = Object.keys(_seed.defaultPresetColors).map(function (colorKey) {
      var colors = (0, _colors.generate)(token[colorKey]);
      return new Array(10).fill(1).reduce(function (prev, _, i) {
        prev["".concat(colorKey, "-").concat(i + 1)] = colors[i];
        prev["".concat(colorKey).concat(i + 1)] = colors[i];
        return prev;
      }, {});
    }).reduce(function (prev, cur) {
      prev = Object.assign(Object.assign({}, prev), cur);
      return prev;
    }, {});
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token), colorPalettes), (0, _genColorMapToken["default"])(token, {
      generateColorPalettes: _colors2.generateColorPalettes,
      generateNeutralColorPalettes: _colors2.generateNeutralColorPalettes
    })), (0, _genFontMapToken["default"])(token.fontSize)), (0, _genSizeMapToken["default"])(token)), (0, _genControlHeight["default"])(token)), (0, _genCommonMapToken["default"])(token));
  }
});