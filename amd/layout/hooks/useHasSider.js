define(["exports", "rc-util/es/Children/toArray", "antd4mx/layout/Sider"], function (_exports, _toArray, _Sider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useHasSider;
  function useHasSider(siders, children, hasSider) {
    if (typeof hasSider === 'boolean') {
      return hasSider;
    }
    if (siders.length) {
      return true;
    }
    var childNodes = (0, _toArray["default"])(children);
    return childNodes.some(function (node) {
      return node.type === _Sider["default"];
    });
  }
});