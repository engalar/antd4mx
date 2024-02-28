define(["exports", "react", "@ant-design/icons/es/icons/FileTextOutlined", "classnames"], function (_exports, _react, _FileTextOutlined, _classnames) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var FloatButtonContent = function FloatButtonContent(props) {
    var icon = props.icon,
      description = props.description,
      prefixCls = props.prefixCls,
      className = props.className;
    var defaultElement = /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-icon")
    }, /*#__PURE__*/_react["default"].createElement(_FileTextOutlined["default"], null));
    return /*#__PURE__*/_react["default"].createElement("div", {
      onClick: props.onClick,
      onFocus: props.onFocus,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      className: (0, _classnames["default"])(className, "".concat(prefixCls, "-content"))
    }, icon || description ? ( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, icon && /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-icon")
    }, icon), description && /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, description))) : defaultElement);
  };
  var _default = _exports["default"] = /*#__PURE__*/(0, _react.memo)(FloatButtonContent);
});