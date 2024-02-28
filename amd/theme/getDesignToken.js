define(["exports", "@ant-design/cssinjs", "antd4mx/theme/themes/default", "antd4mx/theme/themes/seed", "antd4mx/theme/util/alias"], function (_exports, _cssinjs, _default2, _seed, _alias) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var getDesignToken = function getDesignToken(config) {
    var theme = (config === null || config === void 0 ? void 0 : config.algorithm) ? (0, _cssinjs.createTheme)(config.algorithm) : (0, _cssinjs.createTheme)(_default2["default"]);
    var mergedToken = Object.assign(Object.assign({}, _seed["default"]), config === null || config === void 0 ? void 0 : config.token);
    return (0, _cssinjs.getComputedToken)(mergedToken, {
      override: config === null || config === void 0 ? void 0 : config.token
    }, theme, _alias["default"]);
  };
  var _default = _exports["default"] = getDesignToken;
});