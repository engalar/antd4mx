define(["exports", "react", "antd4mx/divider/index", "antd4mx/color-picker/components/PanelPicker", "antd4mx/color-picker/components/PanelPresets", "antd4mx/color-picker/context"], function (_exports, _react, _index, _PanelPicker, _PanelPresets, _context) {
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
  var ColorPickerPanel = function ColorPickerPanel(props) {
    var prefixCls = props.prefixCls,
      presets = props.presets,
      panelRender = props.panelRender,
      color = props.color,
      onChange = props.onChange,
      onClear = props.onClear,
      injectProps = __rest(props, ["prefixCls", "presets", "panelRender", "color", "onChange", "onClear"]);
    var colorPickerPanelPrefixCls = "".concat(prefixCls, "-inner");
    // ==== Inject props ===
    var panelPickerProps = Object.assign({
      prefixCls: prefixCls,
      value: color,
      onChange: onChange,
      onClear: onClear
    }, injectProps);
    var panelPresetsProps = _react["default"].useMemo(function () {
      return {
        prefixCls: prefixCls,
        value: color,
        presets: presets,
        onChange: onChange
      };
    }, [prefixCls, color, presets, onChange]);
    // ====================== Render ======================
    var innerPanel = /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(colorPickerPanelPrefixCls, "-content")
    }, /*#__PURE__*/_react["default"].createElement(_PanelPicker["default"], null), Array.isArray(presets) && /*#__PURE__*/_react["default"].createElement(_index["default"], null), /*#__PURE__*/_react["default"].createElement(_PanelPresets["default"], null));
    return /*#__PURE__*/_react["default"].createElement(_context.PanelPickerProvider, {
      value: panelPickerProps
    }, /*#__PURE__*/_react["default"].createElement(_context.PanelPresetsProvider, {
      value: panelPresetsProps
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: colorPickerPanelPrefixCls
    }, typeof panelRender === 'function' ? panelRender(innerPanel, {
      components: {
        Picker: _PanelPicker["default"],
        Presets: _PanelPresets["default"]
      }
    }) : innerPanel)));
  };
  if (process.env.NODE_ENV !== 'production') {
    ColorPickerPanel.displayName = 'ColorPickerPanel';
  }
  var _default = _exports["default"] = ColorPickerPanel;
});