define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useContainerWidth;
  function useContainerWidth(prefixCls) {
    var getContainerWidth = function getContainerWidth(ele, width) {
      var container = ele.querySelector(".".concat(prefixCls, "-container"));
      var returnWidth = width;
      if (container) {
        var style = getComputedStyle(container);
        var borderLeft = parseInt(style.borderLeftWidth, 10);
        var borderRight = parseInt(style.borderRightWidth, 10);
        returnWidth = width - borderLeft - borderRight;
      }
      return returnWidth;
    };
    return getContainerWidth;
  }
});