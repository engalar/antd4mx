define(["exports", "antd4mx/theme/themes/shared/genRadius"], function (_exports, _genRadius) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = genCommonMapToken;
  function genCommonMapToken(token) {
    var motionUnit = token.motionUnit,
      motionBase = token.motionBase,
      borderRadius = token.borderRadius,
      lineWidth = token.lineWidth;
    return Object.assign({
      // motion
      motionDurationFast: "".concat((motionBase + motionUnit).toFixed(1), "s"),
      motionDurationMid: "".concat((motionBase + motionUnit * 2).toFixed(1), "s"),
      motionDurationSlow: "".concat((motionBase + motionUnit * 3).toFixed(1), "s"),
      // line
      lineWidthBold: lineWidth + 1
    }, (0, _genRadius["default"])(borderRadius));
  }
});