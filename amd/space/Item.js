define(["exports", "react", "antd4mx/space/context"], function (_exports, React, _context) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var Item = function Item(_ref) {
    var className = _ref.className,
      index = _ref.index,
      children = _ref.children,
      split = _ref.split,
      style = _ref.style;
    var _React$useContext = React.useContext(_context.SpaceContext),
      latestIndex = _React$useContext.latestIndex;
    if (children === null || children === undefined) {
      return null;
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: className,
      style: style
    }, children), index < latestIndex && split && /*#__PURE__*/React.createElement("span", {
      className: "".concat(className, "-split")
    }, split));
  };
  var _default = _exports["default"] = Item;
});