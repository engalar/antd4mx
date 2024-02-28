define(["exports", "antd4mx/input/Group", "antd4mx/input/Input", "antd4mx/input/Password", "antd4mx/input/Search", "antd4mx/input/TextArea"], function (_exports, _Group, _Input, _Password, _Search, _TextArea) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var Input = _Input["default"];
  if (process.env.NODE_ENV !== 'production') {
    Input.displayName = 'Input';
  }
  Input.Group = _Group["default"];
  Input.Search = _Search["default"];
  Input.TextArea = _TextArea["default"];
  Input.Password = _Password["default"];
  var _default = _exports["default"] = Input;
});