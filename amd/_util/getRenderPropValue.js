define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getRenderPropValue = void 0;
  var getRenderPropValue = _exports.getRenderPropValue = function getRenderPropValue(propValue) {
    if (!propValue) {
      return null;
    }
    return typeof propValue === 'function' ? propValue() : propValue;
  };
});