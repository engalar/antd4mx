define(["exports", "react", "rc-menu", "antd4mx/layout/Sider", "antd4mx/menu/menu", "antd4mx/menu/MenuDivider", "antd4mx/menu/MenuItem", "antd4mx/menu/SubMenu"], function (_exports, _react, _rcMenu, _Sider, _menu, _MenuDivider, _MenuItem, _SubMenu) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var React = _react;
  var Menu = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    var menuRef = (0, _react.useRef)(null);
    var context = React.useContext(_Sider.SiderContext);
    (0, _react.useImperativeHandle)(ref, function () {
      return {
        menu: menuRef.current,
        focus: function focus(options) {
          var _a;
          (_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.focus(options);
        }
      };
    });
    return /*#__PURE__*/React.createElement(_menu["default"], Object.assign({
      ref: menuRef
    }, props, context));
  });
  Menu.Item = _MenuItem["default"];
  Menu.SubMenu = _SubMenu["default"];
  Menu.Divider = _MenuDivider["default"];
  Menu.ItemGroup = _rcMenu.ItemGroup;
  if (process.env.NODE_ENV !== 'production') {
    Menu.displayName = 'Menu';
  }
  var _default = _exports["default"] = Menu;
});