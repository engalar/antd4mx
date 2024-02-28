define(["exports", "react", "classnames"], function (_exports, _react, _classnames) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var IconWrapper = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    var className = props.className,
      style = props.style,
      children = props.children,
      prefixCls = props.prefixCls;
    var iconWrapperCls = (0, _classnames["default"])("".concat(prefixCls, "-icon"), className);
    return /*#__PURE__*/_react["default"].createElement("span", {
      ref: ref,
      className: iconWrapperCls,
      style: style
    }, children);
  });
  var _default = _exports["default"] = IconWrapper;
});