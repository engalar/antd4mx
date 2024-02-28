define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.easeInOutCubic = easeInOutCubic;
  // eslint-disable-next-line import/prefer-default-export
  function easeInOutCubic(t, b, c, d) {
    var cc = c - b;
    t /= d / 2;
    if (t < 1) {
      return cc / 2 * t * t * t + b;
    }
    // eslint-disable-next-line no-return-assign
    return cc / 2 * ((t -= 2) * t * t + 2) + b;
  }
});