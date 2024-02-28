define(["exports", "antd4mx/float-button/BackTop", "antd4mx/float-button/FloatButton", "antd4mx/float-button/FloatButtonGroup", "antd4mx/float-button/PurePanel"], function (_exports, _BackTop, _FloatButton, _FloatButtonGroup, _PurePanel) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _FloatButton["default"].BackTop = _BackTop["default"];
  _FloatButton["default"].Group = _FloatButtonGroup["default"];
  _FloatButton["default"]._InternalPanelDoNotUseOrYouWillBeFired = _PurePanel["default"];
  var _default = _exports["default"] = _FloatButton["default"];
});