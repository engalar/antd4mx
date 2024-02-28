define(["exports", "antd4mx/theme/interface/index"], function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = genPresetColor;
  function genPresetColor(token, genCss) {
    return _index.PresetColors.reduce(function (prev, colorKey) {
      var lightColor = token["".concat(colorKey, "1")];
      var lightBorderColor = token["".concat(colorKey, "3")];
      var darkColor = token["".concat(colorKey, "6")];
      var textColor = token["".concat(colorKey, "7")];
      return Object.assign(Object.assign({}, prev), genCss(colorKey, {
        lightColor: lightColor,
        lightBorderColor: lightBorderColor,
        darkColor: darkColor,
        textColor: textColor
      }));
    }, {});
  }
});