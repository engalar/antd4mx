define(["exports", "rc-util/es/Children/toArray"], function (_exports, _toArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useChildren;
  function useChildren(children) {
    if (typeof children === 'function') {
      return children;
    }
    var childList = (0, _toArray["default"])(children);
    return childList.length <= 1 ? childList[0] : childList;
  }
});