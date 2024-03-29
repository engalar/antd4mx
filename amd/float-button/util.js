define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var getOffset = function getOffset(radius) {
    if (radius === 0) {
      return 0;
    }
    // 如果要考虑通用性，这里应该用三角函数 Math.sin(45)
    // 但是这个场景比较特殊，始终是等腰直角三角形，所以直接用 Math.sqrt() 开方即可
    return radius - Math.sqrt(Math.pow(radius, 2) / 2);
  };
  var _default = _exports["default"] = getOffset;
});