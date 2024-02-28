define(["exports", "react", "antd4mx/color-picker/util", "antd4mx/color-picker/components/ColorSteppers"], function (_exports, _react, _util, _ColorSteppers) {
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
  var ColorRgbInput = function ColorRgbInput(_ref) {
    var prefixCls = _ref.prefixCls,
      value = _ref.value,
      onChange = _ref.onChange;
    var colorRgbInputPrefixCls = "".concat(prefixCls, "-rgb-input");
    var _useState = (0, _react.useState)((0, _util.generateColor)(value || '#000')),
      _useState2 = _slicedToArray(_useState, 2),
      rgbValue = _useState2[0],
      setRgbValue = _useState2[1];
    // Update step value
    (0, _react.useEffect)(function () {
      if (value) {
        setRgbValue(value);
      }
    }, [value]);
    var handleRgbChange = function handleRgbChange(step, type) {
      var rgb = rgbValue.toRgb();
      rgb[type] = step || 0;
      var genColor = (0, _util.generateColor)(rgb);
      if (!value) {
        setRgbValue(genColor);
      }
      onChange === null || onChange === void 0 ? void 0 : onChange(genColor);
    };
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: colorRgbInputPrefixCls
    }, /*#__PURE__*/_react["default"].createElement(_ColorSteppers["default"], {
      max: 255,
      min: 0,
      value: Number(rgbValue.toRgb().r),
      prefixCls: prefixCls,
      className: colorRgbInputPrefixCls,
      onChange: function onChange(step) {
        return handleRgbChange(Number(step), 'r');
      }
    }), /*#__PURE__*/_react["default"].createElement(_ColorSteppers["default"], {
      max: 255,
      min: 0,
      value: Number(rgbValue.toRgb().g),
      prefixCls: prefixCls,
      className: colorRgbInputPrefixCls,
      onChange: function onChange(step) {
        return handleRgbChange(Number(step), 'g');
      }
    }), /*#__PURE__*/_react["default"].createElement(_ColorSteppers["default"], {
      max: 255,
      min: 0,
      value: Number(rgbValue.toRgb().b),
      prefixCls: prefixCls,
      className: colorRgbInputPrefixCls,
      onChange: function onChange(step) {
        return handleRgbChange(Number(step), 'b');
      }
    }));
  };
  var _default = _exports["default"] = ColorRgbInput;
});