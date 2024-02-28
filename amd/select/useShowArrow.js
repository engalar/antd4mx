define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useShowArrow;
  /**
   * Since Select, TreeSelect, Cascader is same Select like component.
   * We just use same hook to handle this logic.
   *
   * If `suffixIcon` is not equal to `null`, always show it.
   */
  function useShowArrow(suffixIcon, showArrow) {
    return showArrow !== undefined ? showArrow : suffixIcon !== null;
  }
});