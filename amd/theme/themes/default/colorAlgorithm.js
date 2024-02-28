define(["exports", "@ctrl/tinycolor"], function (_exports, _tinycolor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getSolidColor = _exports.getAlphaColor = void 0;
  var getAlphaColor = _exports.getAlphaColor = function getAlphaColor(baseColor, alpha) {
    return new _tinycolor.TinyColor(baseColor).setAlpha(alpha).toRgbString();
  };
  var getSolidColor = _exports.getSolidColor = function getSolidColor(baseColor, brightness) {
    var instance = new _tinycolor.TinyColor(baseColor);
    return instance.darken(brightness).toHexString();
  };
});