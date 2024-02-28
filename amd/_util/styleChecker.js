define(["exports", "rc-util/es/Dom/canUseDom", "rc-util/es/Dom/styleChecker"], function (_exports, _canUseDom, _styleChecker) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.canUseDocElement = void 0;
  Object.defineProperty(_exports, "isStyleSupport", {
    enumerable: true,
    get: function get() {
      return _styleChecker.isStyleSupport;
    }
  });
  var canUseDocElement = _exports.canUseDocElement = function canUseDocElement() {
    return (0, _canUseDom["default"])() && window.document.documentElement;
  };
});