define(["exports", "react", "antd4mx/color-picker/util"], function (_exports, _react, _util) {
  "use strict";

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
  function hasValue(value) {
    return value !== undefined;
  }
  var useColorState = function useColorState(defaultStateValue, option) {
    var defaultValue = option.defaultValue,
      value = option.value;
    var _useState = (0, _react.useState)(function () {
        var mergeState;
        if (hasValue(value)) {
          mergeState = value;
        } else if (hasValue(defaultValue)) {
          mergeState = defaultValue;
        } else {
          mergeState = defaultStateValue;
        }
        return (0, _util.generateColor)(mergeState || '');
      }),
      _useState2 = _slicedToArray(_useState, 2),
      colorValue = _useState2[0],
      setColorValue = _useState2[1];
    (0, _react.useEffect)(function () {
      if (value) {
        setColorValue((0, _util.generateColor)(value));
      }
    }, [value]);
    return [colorValue, setColorValue];
  };
  var _default = _exports["default"] = useColorState;
});