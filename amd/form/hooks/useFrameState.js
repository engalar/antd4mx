define(["exports", "rc-util/es/raf", "react"], function (_exports, _raf, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useFrameState;
  var React = _react;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function useFrameState(defaultValue) {
    var _React$useState = React.useState(defaultValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];
    var frameRef = (0, _react.useRef)(null);
    var batchRef = (0, _react.useRef)([]);
    var destroyRef = (0, _react.useRef)(false);
    React.useEffect(function () {
      destroyRef.current = false;
      return function () {
        destroyRef.current = true;
        _raf["default"].cancel(frameRef.current);
        frameRef.current = null;
      };
    }, []);
    function setFrameValue(updater) {
      if (destroyRef.current) {
        return;
      }
      if (frameRef.current === null) {
        batchRef.current = [];
        frameRef.current = (0, _raf["default"])(function () {
          frameRef.current = null;
          setValue(function (prevValue) {
            var current = prevValue;
            batchRef.current.forEach(function (func) {
              current = func(current);
            });
            return current;
          });
        });
      }
      batchRef.current.push(updater);
    }
    return [value, setFrameValue];
  }
});