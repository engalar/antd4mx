define(["exports", "react"], function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var fullClone = Object.assign({}, React);
  var useId = fullClone.useId;
  var useEmptyId = function useEmptyId() {
    return '';
  };
  var useThemeKey = typeof useId === 'undefined' ? useEmptyId : useId;
  var _default = _exports["default"] = useThemeKey;
});