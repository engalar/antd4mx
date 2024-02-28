define(["exports", "react", "antd4mx/date-picker/PickerButton"], function (_exports, _react, _PickerButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useComponents;
  function useComponents(components) {
    return (0, _react.useMemo)(function () {
      return Object.assign({
        button: _PickerButton["default"]
      }, components);
    }, [components]);
  }
});