define(["exports", "antd4mx/color-picker/color"], function (_exports, _color) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getRoundNumber = _exports.getAlphaColor = _exports.generateColor = _exports.genAlphaColor = void 0;
  var generateColor = _exports.generateColor = function generateColor(color) {
    if (color instanceof _color.ColorFactory) {
      return color;
    }
    return new _color.ColorFactory(color);
  };
  var getRoundNumber = _exports.getRoundNumber = function getRoundNumber(value) {
    return Math.round(Number(value || 0));
  };
  var getAlphaColor = _exports.getAlphaColor = function getAlphaColor(color) {
    return getRoundNumber(color.toHsb().a * 100);
  };
  var genAlphaColor = _exports.genAlphaColor = function genAlphaColor(color, alpha) {
    var hsba = color.toHsb();
    hsba.a = alpha || 1;
    return generateColor(hsba);
  };
});