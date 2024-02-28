define(["exports", "react", "antd4mx/color-picker/context", "antd4mx/color-picker/components/ColorPresets"], function (_exports, _react, _context, _ColorPresets) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var PanelPresets = function PanelPresets() {
    var _useContext = (0, _react.useContext)(_context.PanelPresetsContext),
      prefixCls = _useContext.prefixCls,
      value = _useContext.value,
      presets = _useContext.presets,
      onChange = _useContext.onChange;
    return Array.isArray(presets) ? ( /*#__PURE__*/_react["default"].createElement(_ColorPresets["default"], {
      value: value,
      presets: presets,
      prefixCls: prefixCls,
      onChange: onChange
    })) : null;
  };
  var _default = _exports["default"] = PanelPresets;
});