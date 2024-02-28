define(["exports", "react", "rc-util", "rc-util/es/raf", "antd4mx/_util/wave/WaveEffect", "antd4mx/config-provider", "antd4mx/theme/useToken", "antd4mx/_util/wave/interface"], function (_exports, React, _rcUtil, _raf, _WaveEffect, _configProvider, _useToken3, _interface) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useWave;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function useWave(nodeRef, className, component) {
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      wave = _React$useContext.wave;
    var _useToken = (0, _useToken3["default"])(),
      _useToken2 = _slicedToArray(_useToken, 3),
      token = _useToken2[1],
      hashId = _useToken2[2];
    var showWave = (0, _rcUtil.useEvent)(function (event) {
      var node = nodeRef.current;
      if ((wave === null || wave === void 0 ? void 0 : wave.disabled) || !node) {
        return;
      }
      var targetNode = node.querySelector(".".concat(_interface.TARGET_CLS)) || node;
      var _ref = wave || {},
        showEffect = _ref.showEffect;
      // Customize wave effect
      (showEffect || _WaveEffect["default"])(targetNode, {
        className: className,
        token: token,
        component: component,
        event: event,
        hashId: hashId
      });
    });
    var rafId = React.useRef();
    // Merge trigger event into one for each frame
    var showDebounceWave = function showDebounceWave(event) {
      _raf["default"].cancel(rafId.current);
      rafId.current = (0, _raf["default"])(function () {
        showWave(event);
      });
    };
    return showDebounceWave;
  }
});