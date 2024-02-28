define(["exports", "react", "antd4mx/config-provider"], function (_exports, React, _configProvider) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var BreadcrumbSeparator = function BreadcrumbSeparator(_ref) {
    var children = _ref.children;
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('breadcrumb');
    return /*#__PURE__*/React.createElement("li", {
      className: "".concat(prefixCls, "-separator"),
      "aria-hidden": "true"
    }, children === '' ? children : children || '/');
  };
  BreadcrumbSeparator.__ANT_BREADCRUMB_SEPARATOR = true;
  var _default = _exports["default"] = BreadcrumbSeparator;
});