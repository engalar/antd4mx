define(["exports", "react"], function (_exports, React) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.DisabledContextProvider = void 0;
  var DisabledContext = /*#__PURE__*/React.createContext(false);
  var DisabledContextProvider = _exports.DisabledContextProvider = function DisabledContextProvider(_ref) {
    var children = _ref.children,
      disabled = _ref.disabled;
    var originDisabled = React.useContext(DisabledContext);
    return /*#__PURE__*/React.createElement(DisabledContext.Provider, {
      value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
    }, children);
  };
  var _default = _exports["default"] = DisabledContext;
});