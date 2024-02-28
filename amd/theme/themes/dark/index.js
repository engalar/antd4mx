define(["exports", "@ant-design/colors", "antd4mx/theme/themes/seed", "antd4mx/theme/themes/shared/genColorMapToken", "antd4mx/theme/themes/dark/colors", "antd4mx/theme/themes/default"], function (_exports, _colors, _seed, _genColorMapToken, _colors2, _default2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var derivative = function derivative(token, mapToken) {
    var colorPalettes = Object.keys(_seed.defaultPresetColors).map(function (colorKey) {
      var colors = (0, _colors.generate)(token[colorKey], {
        theme: 'dark'
      });
      return new Array(10).fill(1).reduce(function (prev, _, i) {
        prev["".concat(colorKey, "-").concat(i + 1)] = colors[i];
        prev["".concat(colorKey).concat(i + 1)] = colors[i];
        return prev;
      }, {});
    }).reduce(function (prev, cur) {
      prev = Object.assign(Object.assign({}, prev), cur);
      return prev;
    }, {});
    var mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : (0, _default2["default"])(token);
    return Object.assign(Object.assign(Object.assign({}, mergedMapToken), colorPalettes), (0, _genColorMapToken["default"])(token, {
      generateColorPalettes: _colors2.generateColorPalettes,
      generateNeutralColorPalettes: _colors2.generateNeutralColorPalettes
    }));
  };
  var _default = _exports["default"] = derivative;
});