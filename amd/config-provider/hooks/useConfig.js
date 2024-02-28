define(["exports", "react", "antd4mx/config-provider/DisabledContext", "antd4mx/config-provider/SizeContext"], function (_exports, _react, _DisabledContext, _SizeContext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function useConfig() {
    var componentDisabled = (0, _react.useContext)(_DisabledContext["default"]);
    var componentSize = (0, _react.useContext)(_SizeContext["default"]);
    return {
      componentDisabled: componentDisabled,
      componentSize: componentSize
    };
  }
  var _default = _exports["default"] = useConfig;
});