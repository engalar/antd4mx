define(["exports", "react", "antd4mx/config-provider/SizeContext"], function (_exports, _react, _SizeContext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var useSize = function useSize(customSize) {
    var size = _react["default"].useContext(_SizeContext["default"]);
    var mergedSize = _react["default"].useMemo(function () {
      if (!customSize) {
        return size;
      }
      if (typeof customSize === 'string') {
        return customSize !== null && customSize !== void 0 ? customSize : size;
      }
      if (customSize instanceof Function) {
        return customSize(size);
      }
      return size;
    }, [customSize, size]);
    return mergedSize;
  };
  var _default = _exports["default"] = useSize;
});