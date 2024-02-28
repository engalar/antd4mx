define(["exports", "rc-util/es/KeyCode", "react"], function (_exports, _KeyCode, React) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var onKeyDown = function onKeyDown(event) {
    var keyCode = event.keyCode;
    if (keyCode === _KeyCode["default"].ENTER) {
      event.stopPropagation();
    }
  };
  var FilterDropdownMenuWrapper = /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      onKeyDown: onKeyDown,
      ref: ref
    }, props.children);
  });
  if (process.env.NODE_ENV !== 'production') {
    FilterDropdownMenuWrapper.displayName = 'FilterDropdownMenuWrapper';
  }
  var _default = _exports["default"] = FilterDropdownMenuWrapper;
});