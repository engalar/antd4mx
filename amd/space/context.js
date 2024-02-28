define(["exports", "react"], function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.SpaceContextProvider = _exports.SpaceContext = void 0;
  var SpaceContext = _exports.SpaceContext = /*#__PURE__*/_react["default"].createContext({
    latestIndex: 0
  });
  var SpaceContextProvider = _exports.SpaceContextProvider = SpaceContext.Provider;
});