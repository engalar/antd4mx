define(["exports", "rc-util/es/raf", "rc-util/es/ref", "react", "antd4mx/tooltip"], function (_exports, _raf, _ref, _react, _tooltip) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var React = _react;
  var SliderTooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var open = props.open;
    var innerRef = (0, _react.useRef)(null);
    var rafRef = (0, _react.useRef)(null);
    function cancelKeepAlign() {
      _raf["default"].cancel(rafRef.current);
      rafRef.current = null;
    }
    function keepAlign() {
      rafRef.current = (0, _raf["default"])(function () {
        var _a;
        (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.forceAlign();
        rafRef.current = null;
      });
    }
    React.useEffect(function () {
      if (open) {
        keepAlign();
      } else {
        cancelKeepAlign();
      }
      return cancelKeepAlign;
    }, [open, props.title]);
    return /*#__PURE__*/React.createElement(_tooltip["default"], Object.assign({
      ref: (0, _ref.composeRef)(innerRef, ref)
    }, props));
  });
  if (process.env.NODE_ENV !== 'production') {
    SliderTooltip.displayName = 'SliderTooltip';
  }
  var _default = _exports["default"] = SliderTooltip;
});