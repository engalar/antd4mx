define(["exports", "@rc-component/color-picker", "react", "antd4mx/color-picker/context", "antd4mx/color-picker/components/ColorClear", "antd4mx/color-picker/components/ColorInput"], function (_exports, _colorPicker, _react, _context, _ColorClear, _ColorInput) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var PanelPicker = function PanelPicker() {
    var _a = (0, _react.useContext)(_context.PanelPickerContext),
      prefixCls = _a.prefixCls,
      colorCleared = _a.colorCleared,
      allowClear = _a.allowClear,
      value = _a.value,
      disabledAlpha = _a.disabledAlpha,
      _onChange = _a.onChange,
      onClear = _a.onClear,
      onChangeComplete = _a.onChangeComplete,
      injectProps = __rest(_a, ["prefixCls", "colorCleared", "allowClear", "value", "disabledAlpha", "onChange", "onClear", "onChangeComplete"]);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, allowClear && ( /*#__PURE__*/_react["default"].createElement(_ColorClear["default"], Object.assign({
      prefixCls: prefixCls,
      value: value,
      colorCleared: colorCleared,
      onChange: function onChange(clearColor) {
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(clearColor);
        onClear === null || onClear === void 0 ? void 0 : onClear();
      }
    }, injectProps))), /*#__PURE__*/_react["default"].createElement(_colorPicker["default"], {
      prefixCls: prefixCls,
      value: value === null || value === void 0 ? void 0 : value.toHsb(),
      disabledAlpha: disabledAlpha,
      onChange: function onChange(colorValue, type) {
        return _onChange === null || _onChange === void 0 ? void 0 : _onChange(colorValue, type, true);
      },
      onChangeComplete: onChangeComplete
    }), /*#__PURE__*/_react["default"].createElement(_ColorInput["default"], Object.assign({
      value: value,
      onChange: _onChange,
      prefixCls: prefixCls,
      disabledAlpha: disabledAlpha
    }, injectProps)));
  };
  var _default = _exports["default"] = PanelPicker;
});