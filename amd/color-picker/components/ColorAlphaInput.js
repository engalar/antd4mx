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
  var ColorAlphaInput = function ColorAlphaInput(_ref) {
    var prefixCls = _ref.prefixCls,
      value = _ref.value,
      onChange = _ref.onChange;
    var colorAlphaInputPrefixCls = "".concat(prefixCls, "-alpha-input");
    var _useState = (0, _react.useState)((0, _util.generateColor)(value || '#000')),
      _useState2 = _slicedToArray(_useState, 2),
      alphaValue = _useState2[0],
      setAlphaValue = _useState2[1];
    // Update step value
    (0, _react.useEffect)(function () {
      if (value) {
        setAlphaValue(value);
      }
    }, [value]);
    var handleAlphaChange = function handleAlphaChange(step) {
      var hsba = alphaValue.toHsb();
      hsba.a = (step || 0) / 100;
      var genColor = (0, _util.generateColor)(hsba);
      if (!value) {
        setAlphaValue(genColor);
      }
      onChange === null || onChange === void 0 ? void 0 : onChange(genColor);
    };
    return /*#__PURE__*/_react["default"].createElement(_ColorSteppers["default"], {
      value: (0, _util.getAlphaColor)(alphaValue),
      prefixCls: prefixCls,
      formatter: function formatter(step) {
        return "".concat(step, "%");
      },
      className: colorAlphaInputPrefixCls,
      onChange: handleAlphaChange
    });
  };
  var _default = _exports["default"] = ColorAlphaInput;
});