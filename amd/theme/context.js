define(["exports", "react", "@ant-design/cssinjs", "antd4mx/theme/themes/default", "antd4mx/theme/themes/seed"], function (_exports, _react, _cssinjs, _default, _seed) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.defaultTheme = _exports.defaultConfig = _exports.DesignTokenContext = void 0;
  var defaultTheme = _exports.defaultTheme = (0, _cssinjs.createTheme)(_default["default"]);
  // ================================ Context =================================
  // To ensure snapshot stable. We disable hashed in test env.
  var defaultConfig = _exports.defaultConfig = {
    token: _seed["default"],
    override: {
      override: _seed["default"]
    },
    hashed: true
  };
  var DesignTokenContext = _exports.DesignTokenContext = /*#__PURE__*/_react["default"].createContext(defaultConfig);
});