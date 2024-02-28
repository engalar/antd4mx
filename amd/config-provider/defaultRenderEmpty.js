define(["exports", "react", "antd4mx/config-provider", "antd4mx/empty"], function (_exports, _react, _configProvider, _empty) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var DefaultRenderEmpty = function DefaultRenderEmpty(props) {
    var componentName = props.componentName;
    var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;
    var prefix = getPrefixCls('empty');
    switch (componentName) {
      case 'Table':
      case 'List':
        return /*#__PURE__*/_react["default"].createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE
        });
      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return /*#__PURE__*/_react["default"].createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE,
          className: "".concat(prefix, "-small")
        });
      /* istanbul ignore next */
      default:
        // Should never hit if we take all the component into consider.
        return /*#__PURE__*/_react["default"].createElement(_empty["default"], null);
    }
  };
  var _default = _exports["default"] = DefaultRenderEmpty;
});