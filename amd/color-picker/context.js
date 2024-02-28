define(["exports", "react"], function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.PanelPresetsProvider = _exports.PanelPresetsContext = _exports.PanelPickerProvider = _exports.PanelPickerContext = void 0;
  var PanelPickerContext = _exports.PanelPickerContext = /*#__PURE__*/_react["default"].createContext({});
  var PanelPresetsContext = _exports.PanelPresetsContext = /*#__PURE__*/_react["default"].createContext({});
  var PanelPickerProvider = _exports.PanelPickerProvider = PanelPickerContext.Provider;
  var PanelPresetsProvider = _exports.PanelPresetsProvider = PanelPresetsContext.Provider;
});