define(["exports", "antd4mx/layout/layout", "antd4mx/layout/Sider"], function (_exports, _layout, _Sider) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var Layout = _layout["default"];
  Layout.Header = _layout.Header;
  Layout.Footer = _layout.Footer;
  Layout.Content = _layout.Content;
  Layout.Sider = _Sider["default"];
  Layout._InternalSiderContext = _Sider.SiderContext;
  var _default = _exports["default"] = Layout;
});