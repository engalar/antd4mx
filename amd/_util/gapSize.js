define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.isPresetSize = isPresetSize;
  _exports.isValidGapNumber = isValidGapNumber;
  function isPresetSize(size) {
    return ['small', 'middle', 'large'].includes(size);
  }
  function isValidGapNumber(size) {
    if (!size) {
      // The case of size = 0 is deliberately excluded here, because the default value of the gap attribute in CSS is 0, so if the user passes 0 in, we can directly ignore it.
      return false;
    }
    return typeof size === 'number' && !Number.isNaN(size);
  }
});