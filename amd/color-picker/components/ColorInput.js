define(["exports", "rc-util/es/hooks/useMergedState", "react", "antd4mx/select", "antd4mx/color-picker/interface", "antd4mx/color-picker/components/ColorAlphaInput", "antd4mx/color-picker/components/ColorHexInput", "antd4mx/color-picker/components/ColorHsbInput", "antd4mx/color-picker/components/ColorRgbInput"], function (_exports, _useMergedState3, _react, _select, _interface, _ColorAlphaInput, _ColorHexInput, _ColorHsbInput, _ColorRgbInput) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var selectOptions = [_interface.ColorFormat.hex, _interface.ColorFormat.hsb, _interface.ColorFormat.rgb].map(function (format) {
    return {
      value: format,
      label: format.toLocaleUpperCase()
    };
  });
  var ColorInput = function ColorInput(props) {
    var prefixCls = props.prefixCls,
      format = props.format,
      value = props.value,
      disabledAlpha = props.disabledAlpha,
      onFormatChange = props.onFormatChange,
      onChange = props.onChange;
    var _useMergedState = (0, _useMergedState3["default"])(_interface.ColorFormat.hex, {
        value: format,
        onChange: onFormatChange
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      colorFormat = _useMergedState2[0],
      setColorFormat = _useMergedState2[1];
    var colorInputPrefixCls = "".concat(prefixCls, "-input");
    var handleFormatChange = function handleFormatChange(newFormat) {
      setColorFormat(newFormat);
    };
    var steppersNode = (0, _react.useMemo)(function () {
      var inputProps = {
        value: value,
        prefixCls: prefixCls,
        onChange: onChange
      };
      switch (colorFormat) {
        case _interface.ColorFormat.hsb:
          return /*#__PURE__*/_react["default"].createElement(_ColorHsbInput["default"], Object.assign({}, inputProps));
        case _interface.ColorFormat.rgb:
          return /*#__PURE__*/_react["default"].createElement(_ColorRgbInput["default"], Object.assign({}, inputProps));
        case _interface.ColorFormat.hex:
        default:
          return /*#__PURE__*/_react["default"].createElement(_ColorHexInput["default"], Object.assign({}, inputProps));
      }
    }, [colorFormat, prefixCls, value, onChange]);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(colorInputPrefixCls, "-container")
    }, /*#__PURE__*/_react["default"].createElement(_select["default"], {
      value: colorFormat,
      variant: "borderless",
      getPopupContainer: function getPopupContainer(current) {
        return current;
      },
      popupMatchSelectWidth: 68,
      placement: "bottomRight",
      onChange: handleFormatChange,
      className: "".concat(prefixCls, "-format-select"),
      size: "small",
      options: selectOptions
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: colorInputPrefixCls
    }, steppersNode), !disabledAlpha && ( /*#__PURE__*/_react["default"].createElement(_ColorAlphaInput["default"], {
      prefixCls: prefixCls,
      value: value,
      onChange: onChange
    })));
  };
  var _default = _exports["default"] = ColorInput;
});