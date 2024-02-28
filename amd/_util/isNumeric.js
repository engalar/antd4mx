define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var isNumeric = function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };
  var _default = _exports["default"] = isNumeric;
});