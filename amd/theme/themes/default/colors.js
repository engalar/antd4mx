define(["exports", "@ant-design/colors", "antd4mx/theme/themes/default/colorAlgorithm"], function (_exports, _colors, _colorAlgorithm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.generateNeutralColorPalettes = _exports.generateColorPalettes = void 0;
  var generateColorPalettes = _exports.generateColorPalettes = function generateColorPalettes(baseColor) {
    var colors = (0, _colors.generate)(baseColor);
    return {
      1: colors[0],
      2: colors[1],
      3: colors[2],
      4: colors[3],
      5: colors[4],
      6: colors[5],
      7: colors[6],
      8: colors[4],
      9: colors[5],
      10: colors[6]
      // 8: colors[7],
      // 9: colors[8],
      // 10: colors[9],
    };
  };
  var generateNeutralColorPalettes = _exports.generateNeutralColorPalettes = function generateNeutralColorPalettes(bgBaseColor, textBaseColor) {
    var colorBgBase = bgBaseColor || '#fff';
    var colorTextBase = textBaseColor || '#000';
    return {
      colorBgBase: colorBgBase,
      colorTextBase: colorTextBase,
      colorText: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.88),
      colorTextSecondary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.65),
      colorTextTertiary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.45),
      colorTextQuaternary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.25),
      colorFill: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.15),
      colorFillSecondary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.06),
      colorFillTertiary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.04),
      colorFillQuaternary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.02),
      colorBgLayout: (0, _colorAlgorithm.getSolidColor)(colorBgBase, 4),
      colorBgContainer: (0, _colorAlgorithm.getSolidColor)(colorBgBase, 0),
      colorBgElevated: (0, _colorAlgorithm.getSolidColor)(colorBgBase, 0),
      colorBgSpotlight: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.85),
      colorBgBlur: 'transparent',
      colorBorder: (0, _colorAlgorithm.getSolidColor)(colorBgBase, 15),
      colorBorderSecondary: (0, _colorAlgorithm.getSolidColor)(colorBgBase, 6)
    };
  };
});