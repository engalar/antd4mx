define(["exports", "react"], function (_exports, React) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.SizeContextProvider = void 0;
  var SizeContext = /*#__PURE__*/React.createContext(undefined);
  var SizeContextProvider = _exports.SizeContextProvider = function SizeContextProvider(_ref) {
    var children = _ref.children,
      size = _ref.size;
    var originSize = React.useContext(SizeContext);
    return /*#__PURE__*/React.createElement(SizeContext.Provider, {
      value: size || originSize
    }, children);
  };
  var _default = _exports["default"] = SizeContext;
});