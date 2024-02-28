define(["exports", "antd4mx/radio/group", "antd4mx/radio/radio", "antd4mx/radio/radioButton"], function (_exports, _group, _radio, _radioButton) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Button", {
    enumerable: true,
    get: function get() {
      return _radioButton["default"];
    }
  });
  Object.defineProperty(_exports, "Group", {
    enumerable: true,
    get: function get() {
      return _group["default"];
    }
  });
  _exports["default"] = void 0;
  var Radio = _radio["default"];
  Radio.Button = _radioButton["default"];
  Radio.Group = _group["default"];
  Radio.__ANT_RADIO = true;
  var _default = _exports["default"] = Radio;
});