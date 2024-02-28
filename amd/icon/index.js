define(["exports", "antd4mx/_util/warning"], function (_exports, _warning) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var Icon = function Icon() {
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Icon');
      process.env.NODE_ENV !== "production" ? warning(false, 'usage', 'Empty Icon') : void 0;
    }
    return null;
  };
  var _default = _exports["default"] = Icon;
});