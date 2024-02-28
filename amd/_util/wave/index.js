define(["exports", "classnames", "rc-util/es/ref", "rc-util/es/Dom/isVisible", "react", "antd4mx/config-provider/index", "antd4mx/_util/reactNode", "antd4mx/_util/wave/style", "antd4mx/_util/wave/useWave"], function (_exports, _classnames, _ref, _isVisible, _react, _index, _reactNode, _style, _useWave) {
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
  var Wave = function Wave(props) {
    var children = props.children,
      disabled = props.disabled,
      component = props.component;
    var _useContext = (0, _react.useContext)(_index.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;
    var containerRef = (0, _react.useRef)(null);
    // ============================== Style ===============================
    var prefixCls = getPrefixCls('wave');
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 2),
      hashId = _useStyle2[1];
    // =============================== Wave ===============================
    var showWave = (0, _useWave["default"])(containerRef, (0, _classnames["default"])(prefixCls, hashId), component);
    // ============================== Effect ==============================
    _react["default"].useEffect(function () {
      var node = containerRef.current;
      if (!node || node.nodeType !== 1 || disabled) {
        return;
      }
      // Click handler
      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (!(0, _isVisible["default"])(e.target) ||
        // No need wave
        !node.getAttribute || node.getAttribute('disabled') || node.disabled || node.className.includes('disabled') || node.className.includes('-leave')) {
          return;
        }
        showWave(e);
      };
      // Bind events
      node.addEventListener('click', onClick, true);
      return function () {
        node.removeEventListener('click', onClick, true);
      };
    }, [disabled]);
    // ============================== Render ==============================
    if (! /*#__PURE__*/_react["default"].isValidElement(children)) {
      return children !== null && children !== void 0 ? children : null;
    }
    var ref = (0, _ref.supportRef)(children) ? (0, _ref.composeRef)(children.ref, containerRef) : containerRef;
    return (0, _reactNode.cloneElement)(children, {
      ref: ref
    });
  };
  if (process.env.NODE_ENV !== 'production') {
    Wave.displayName = 'Wave';
  }
  var _default = _exports["default"] = Wave;
});