define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = capitalize;
  function capitalize(str) {
    if (typeof str !== 'string') {
      return str;
    }
    var ret = str.charAt(0).toUpperCase() + str.slice(1);
    return ret;
  }
});