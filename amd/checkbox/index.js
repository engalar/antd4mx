define(["exports", "antd4mx/checkbox/Checkbox", "antd4mx/checkbox/Group"], function (_exports, _Checkbox, _Group) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var Checkbox = _Checkbox["default"];
  Checkbox.Group = _Group["default"];
  Checkbox.__ANT_CHECKBOX = true;
  if (process.env.NODE_ENV !== 'production') {
    Checkbox.displayName = 'Checkbox';
  }
  var _default = _exports["default"] = Checkbox;
});