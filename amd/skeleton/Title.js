define(["exports", "classnames", "react"], function (_exports, _classnames, React) {
  "use strict";
  "use client";

  /* eslint-disable jsx-a11y/heading-has-content */
  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var Title = function Title(_ref) {
    var prefixCls = _ref.prefixCls,
      className = _ref.className,
      width = _ref.width,
      style = _ref.style;
    return /*#__PURE__*/React.createElement("h3", {
      className: (0, _classnames["default"])(prefixCls, className),
      style: Object.assign({
        width: width
      }, style)
    });
  };
  var _default = _exports["default"] = Title;
});