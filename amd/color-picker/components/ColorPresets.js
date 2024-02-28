function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@rc-component/color-picker", "classnames", "rc-util/es/hooks/useMergedState", "antd4mx/collapse/index", "antd4mx/locale/index", "antd4mx/theme/internal", "antd4mx/color-picker/util"], function (_exports, _react, _colorPicker, _classnames, _useMergedState3, _index, _index2, _internal, _util) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var genPresetColor = function genPresetColor(list) {
    return list.map(function (value) {
      value.colors = value.colors.map(_util.generateColor);
      return value;
    });
  };
  var isBright = function isBright(value, bgColorToken) {
    var _value$toRgb = value.toRgb(),
      r = _value$toRgb.r,
      g = _value$toRgb.g,
      b = _value$toRgb.b,
      a = _value$toRgb.a;
    var hsv = new _colorPicker.Color(value.toRgbString()).onBackground(bgColorToken).toHsv();
    if (a <= 0.5) {
      // Adapted to dark mode
      return hsv.v > 0.5;
    }
    return r * 0.299 + g * 0.587 + b * 0.114 > 192;
  };
  var genCollapsePanelKey = function genCollapsePanelKey(_ref) {
    var label = _ref.label;
    return "panel-".concat(label);
  };
  var ColorPresets = function ColorPresets(_ref2) {
    var prefixCls = _ref2.prefixCls,
      presets = _ref2.presets,
      color = _ref2.value,
      onChange = _ref2.onChange;
    var _useLocale = (0, _index2.useLocale)('ColorPicker'),
      _useLocale2 = _slicedToArray(_useLocale, 1),
      locale = _useLocale2[0];
    var _useToken = (0, _internal.useToken)(),
      _useToken2 = _slicedToArray(_useToken, 2),
      token = _useToken2[1];
    var _useMergedState = (0, _useMergedState3["default"])(genPresetColor(presets), {
        value: genPresetColor(presets),
        postState: genPresetColor
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 1),
      presetsValue = _useMergedState2[0];
    var colorPresetsPrefixCls = "".concat(prefixCls, "-presets");
    var activeKeys = (0, _react.useMemo)(function () {
      return presetsValue.reduce(function (acc, preset) {
        var _preset$defaultOpen = preset.defaultOpen,
          defaultOpen = _preset$defaultOpen === void 0 ? true : _preset$defaultOpen;
        if (defaultOpen) acc.push(genCollapsePanelKey(preset));
        return acc;
      }, []);
    }, [presetsValue]);
    var handleClick = function handleClick(colorValue) {
      onChange === null || onChange === void 0 ? void 0 : onChange(colorValue);
    };
    var items = presetsValue.map(function (preset) {
      var _a;
      return {
        key: genCollapsePanelKey(preset),
        label: /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(colorPresetsPrefixCls, "-label")
        }, preset === null || preset === void 0 ? void 0 : preset.label),
        children: ( /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(colorPresetsPrefixCls, "-items")
        }, Array.isArray(preset === null || preset === void 0 ? void 0 : preset.colors) && ((_a = preset.colors) === null || _a === void 0 ? void 0 : _a.length) > 0 ? preset.colors.map(function (presetColor, index) {
          return /*#__PURE__*/_react["default"].createElement(_colorPicker.ColorBlock
          // eslint-disable-next-line react/no-array-index-key
          , {
            // eslint-disable-next-line react/no-array-index-key
            key: "preset-".concat(index, "-").concat(presetColor.toHexString()),
            color: (0, _util.generateColor)(presetColor).toRgbString(),
            prefixCls: prefixCls,
            className: (0, _classnames["default"])("".concat(colorPresetsPrefixCls, "-color"), _defineProperty(_defineProperty({}, "".concat(colorPresetsPrefixCls, "-color-checked"), presetColor.toHexString() === (color === null || color === void 0 ? void 0 : color.toHexString())), "".concat(colorPresetsPrefixCls, "-color-bright"), isBright(presetColor, token.colorBgElevated))),
            onClick: function onClick() {
              return handleClick(presetColor);
            }
          });
        }) : ( /*#__PURE__*/_react["default"].createElement("span", {
          className: "".concat(colorPresetsPrefixCls, "-empty")
        }, locale.presetEmpty))))
      };
    });
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: colorPresetsPrefixCls
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      defaultActiveKey: activeKeys,
      ghost: true,
      items: items
    }));
  };
  var _default = _exports["default"] = ColorPresets;
});