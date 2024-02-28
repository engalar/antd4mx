define(["exports", "antd4mx/button/button", "./buttonHelpers"], function (_exports, _button, _buttonHelpers) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  var _exportNames = {};
  _exports["default"] = void 0;
  Object.keys(_buttonHelpers).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in _exports && _exports[key] === _buttonHelpers[key]) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function get() {
        return _buttonHelpers[key];
      }
    });
  });
  var _default = _exports["default"] = _button["default"];
});