define(["exports", "classnames", "react", "antd4mx/input-number/index"], function (_exports, _classnames, _react, _index) {
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
  var ColorSteppers = function ColorSteppers(_ref) {
    var prefixCls = _ref.prefixCls,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 100 : _ref$max,
      value = _ref.value,
      _onChange = _ref.onChange,
      className = _ref.className,
      formatter = _ref.formatter;
    var colorSteppersPrefixCls = "".concat(prefixCls, "-steppers");
    var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      stepValue = _useState2[0],
      setStepValue = _useState2[1];
    // Update step value
    (0, _react.useEffect)(function () {
      if (!Number.isNaN(value)) {
        setStepValue(value);
      }
    }, [value]);
    return /*#__PURE__*/_react["default"].createElement(_index["default"], {
      className: (0, _classnames["default"])(colorSteppersPrefixCls, className),
      min: min,
      max: max,
      value: stepValue,
      formatter: formatter,
      size: "small",
      onChange: function onChange(step) {
        if (!value) {
          setStepValue(step || 0);
        }
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(step);
      }
    });
  };
  var _default = _exports["default"] = ColorSteppers;
});