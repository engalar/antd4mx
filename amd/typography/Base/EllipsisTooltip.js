define(["exports", "react", "antd4mx/tooltip"], function (_exports, React, _tooltip) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var EllipsisTooltip = function EllipsisTooltip(_ref) {
    var enabledEllipsis = _ref.enabledEllipsis,
      isEllipsis = _ref.isEllipsis,
      children = _ref.children,
      tooltipProps = _ref.tooltipProps;
    if (!(tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.title) || !enabledEllipsis) {
      return children;
    }
    return /*#__PURE__*/React.createElement(_tooltip["default"], Object.assign({
      open: isEllipsis ? undefined : false
    }, tooltipProps), children);
  };
  if (process.env.NODE_ENV !== 'production') {
    EllipsisTooltip.displayName = 'EllipsisTooltip';
  }
  var _default = _exports["default"] = EllipsisTooltip;
});