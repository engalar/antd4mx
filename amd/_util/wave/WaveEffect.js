define(["exports", "classnames", "rc-motion", "rc-util/es/React/render", "rc-util/es/raf", "react", "antd4mx/_util/wave/util", "antd4mx/_util/wave/interface"], function (_exports, _classnames, _rcMotion, _render, _raf, React, _util, _interface) {
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
  function validateNum(value) {
    return Number.isNaN(value) ? 0 : value;
  }
  var WaveEffect = function WaveEffect(props) {
    var className = props.className,
      target = props.target,
      component = props.component;
    var divRef = React.useRef(null);
    var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      color = _React$useState2[0],
      setWaveColor = _React$useState2[1];
    var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      borderRadius = _React$useState4[0],
      setBorderRadius = _React$useState4[1];
    var _React$useState5 = React.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      left = _React$useState6[0],
      setLeft = _React$useState6[1];
    var _React$useState7 = React.useState(0),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      top = _React$useState8[0],
      setTop = _React$useState8[1];
    var _React$useState9 = React.useState(0),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      width = _React$useState10[0],
      setWidth = _React$useState10[1];
    var _React$useState11 = React.useState(0),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      height = _React$useState12[0],
      setHeight = _React$useState12[1];
    var _React$useState13 = React.useState(false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      enabled = _React$useState14[0],
      setEnabled = _React$useState14[1];
    var waveStyle = {
      left: left,
      top: top,
      width: width,
      height: height,
      borderRadius: borderRadius.map(function (radius) {
        return "".concat(radius, "px");
      }).join(' ')
    };
    if (color) {
      waveStyle['--wave-color'] = color;
    }
    function syncPos() {
      var nodeStyle = getComputedStyle(target);
      // Get wave color from target
      setWaveColor((0, _util.getTargetWaveColor)(target));
      var isStatic = nodeStyle.position === 'static';
      // Rect
      var borderLeftWidth = nodeStyle.borderLeftWidth,
        borderTopWidth = nodeStyle.borderTopWidth;
      setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
      setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
      setWidth(target.offsetWidth);
      setHeight(target.offsetHeight);
      // Get border radius
      var borderTopLeftRadius = nodeStyle.borderTopLeftRadius,
        borderTopRightRadius = nodeStyle.borderTopRightRadius,
        borderBottomLeftRadius = nodeStyle.borderBottomLeftRadius,
        borderBottomRightRadius = nodeStyle.borderBottomRightRadius;
      setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map(function (radius) {
        return validateNum(parseFloat(radius));
      }));
    }
    React.useEffect(function () {
      if (target) {
        // We need delay to check position here
        // since UI may change after click
        var id = (0, _raf["default"])(function () {
          syncPos();
          setEnabled(true);
        });
        // Add resize observer to follow size
        var resizeObserver;
        if (typeof ResizeObserver !== 'undefined') {
          resizeObserver = new ResizeObserver(syncPos);
          resizeObserver.observe(target);
        }
        return function () {
          _raf["default"].cancel(id);
          resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
        };
      }
    }, []);
    if (!enabled) {
      return null;
    }
    var isSmallComponent = (component === 'Checkbox' || component === 'Radio') && (target === null || target === void 0 ? void 0 : target.classList.contains(_interface.TARGET_CLS));
    return /*#__PURE__*/React.createElement(_rcMotion["default"], {
      visible: true,
      motionAppear: true,
      motionName: "wave-motion",
      motionDeadline: 5000,
      onAppearEnd: function onAppearEnd(_, event) {
        var _a;
        if (event.deadline || event.propertyName === 'opacity') {
          var holder = (_a = divRef.current) === null || _a === void 0 ? void 0 : _a.parentElement;
          (0, _render.unmount)(holder).then(function () {
            holder === null || holder === void 0 ? void 0 : holder.remove();
          });
        }
        return false;
      }
    }, function (_ref) {
      var motionClassName = _ref.className;
      return /*#__PURE__*/React.createElement("div", {
        ref: divRef,
        className: (0, _classnames["default"])(className, {
          'wave-quick': isSmallComponent
        }, motionClassName),
        style: waveStyle
      });
    });
  };
  var showWaveEffect = function showWaveEffect(target, info) {
    var _a;
    var component = info.component;
    // Skip for unchecked checkbox
    if (component === 'Checkbox' && !((_a = target.querySelector('input')) === null || _a === void 0 ? void 0 : _a.checked)) {
      return;
    }
    // Create holder
    var holder = document.createElement('div');
    holder.style.position = 'absolute';
    holder.style.left = '0px';
    holder.style.top = '0px';
    target === null || target === void 0 ? void 0 : target.insertBefore(holder, target === null || target === void 0 ? void 0 : target.firstChild);
    (0, _render.render)( /*#__PURE__*/React.createElement(WaveEffect, Object.assign({}, info, {
      target: target
    })), holder);
  };
  var _default = _exports["default"] = showWaveEffect;
});