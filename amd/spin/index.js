function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-util/es/omit", "throttle-debounce", "antd4mx/_util/reactNode", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/spin/style/index"], function (_exports, React, _classnames, _omit, _throttleDebounce, _reactNode, _warning, _index, _index2) {
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
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var SpinSizes = ['small', 'default', 'large'];
  // Render indicator
  var defaultIndicator = null;
  function renderIndicator(prefixCls, props) {
    var indicator = props.indicator;
    var dotClassName = "".concat(prefixCls, "-dot");
    // should not be render default indicator when indicator value is null
    if (indicator === null) {
      return null;
    }
    if ((0, _reactNode.isValidElement)(indicator)) {
      return (0, _reactNode.cloneElement)(indicator, {
        className: (0, _classnames["default"])(indicator.props.className, dotClassName)
      });
    }
    if ((0, _reactNode.isValidElement)(defaultIndicator)) {
      return (0, _reactNode.cloneElement)(defaultIndicator, {
        className: (0, _classnames["default"])(defaultIndicator.props.className, dotClassName)
      });
    }
    return /*#__PURE__*/React.createElement("span", {
      className: (0, _classnames["default"])(dotClassName, "".concat(prefixCls, "-dot-spin"))
    }, /*#__PURE__*/React.createElement("i", {
      className: "".concat(prefixCls, "-dot-item"),
      key: 1
    }), /*#__PURE__*/React.createElement("i", {
      className: "".concat(prefixCls, "-dot-item"),
      key: 2
    }), /*#__PURE__*/React.createElement("i", {
      className: "".concat(prefixCls, "-dot-item"),
      key: 3
    }), /*#__PURE__*/React.createElement("i", {
      className: "".concat(prefixCls, "-dot-item"),
      key: 4
    }));
  }
  function shouldDelay(spinning, delay) {
    return !!spinning && !!delay && !isNaN(Number(delay));
  }
  var Spin = function Spin(props) {
    var customizePrefixCls = props.prefixCls,
      _props$spinning = props.spinning,
      customSpinning = _props$spinning === void 0 ? true : _props$spinning,
      _props$delay = props.delay,
      delay = _props$delay === void 0 ? 0 : _props$delay,
      className = props.className,
      rootClassName = props.rootClassName,
      _props$size = props.size,
      size = _props$size === void 0 ? 'default' : _props$size,
      tip = props.tip,
      wrapperClassName = props.wrapperClassName,
      style = props.style,
      children = props.children,
      _props$fullscreen = props.fullscreen,
      fullscreen = _props$fullscreen === void 0 ? false : _props$fullscreen,
      restProps = __rest(props, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen"]);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('spin', customizePrefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var _React$useState = React.useState(function () {
        return customSpinning && !shouldDelay(customSpinning, delay);
      }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      spinning = _React$useState2[0],
      setSpinning = _React$useState2[1];
    React.useEffect(function () {
      if (customSpinning) {
        var showSpinning = (0, _throttleDebounce.debounce)(delay, function () {
          setSpinning(true);
        });
        showSpinning();
        return function () {
          var _a;
          (_a = showSpinning === null || showSpinning === void 0 ? void 0 : showSpinning.cancel) === null || _a === void 0 ? void 0 : _a.call(showSpinning);
        };
      }
      setSpinning(false);
    }, [delay, customSpinning]);
    var isNestedPattern = React.useMemo(function () {
      return typeof children !== 'undefined' && !fullscreen;
    }, [children, fullscreen]);
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Spin');
      process.env.NODE_ENV !== "production" ? warning(!tip || isNestedPattern || fullscreen, 'usage', '`tip` only work in nest or fullscreen pattern.') : void 0;
    }
    var _React$useContext2 = React.useContext(_index.ConfigContext),
      direction = _React$useContext2.direction,
      spin = _React$useContext2.spin;
    var spinClassName = (0, _classnames["default"])(prefixCls, spin === null || spin === void 0 ? void 0 : spin.className, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-sm"), size === 'small'), "".concat(prefixCls, "-lg"), size === 'large'), "".concat(prefixCls, "-spinning"), spinning), "".concat(prefixCls, "-show-text"), !!tip), "".concat(prefixCls, "-fullscreen"), fullscreen), "".concat(prefixCls, "-fullscreen-show"), fullscreen && spinning), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className, rootClassName, hashId, cssVarCls);
    var containerClassName = (0, _classnames["default"])("".concat(prefixCls, "-container"), _defineProperty({}, "".concat(prefixCls, "-blur"), spinning));
    // fix https://fb.me/react-unknown-prop
    var divProps = (0, _omit["default"])(restProps, ['indicator']);
    var mergedStyle = Object.assign(Object.assign({}, spin === null || spin === void 0 ? void 0 : spin.style), style);
    var spinElement = /*#__PURE__*/React.createElement("div", Object.assign({}, divProps, {
      style: mergedStyle,
      className: spinClassName,
      "aria-live": "polite",
      "aria-busy": spinning
    }), renderIndicator(prefixCls, props), tip && (isNestedPattern || fullscreen) ? ( /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-text")
    }, tip)) : null);
    if (isNestedPattern) {
      return wrapCSSVar( /*#__PURE__*/React.createElement("div", Object.assign({}, divProps, {
        className: (0, _classnames["default"])("".concat(prefixCls, "-nested-loading"), wrapperClassName, hashId, cssVarCls)
      }), spinning && /*#__PURE__*/React.createElement("div", {
        key: "loading"
      }, spinElement), /*#__PURE__*/React.createElement("div", {
        className: containerClassName,
        key: "container"
      }, children)));
    }
    return wrapCSSVar(spinElement);
  };
  Spin.setDefaultIndicator = function (indicator) {
    defaultIndicator = indicator;
  };
  if (process.env.NODE_ENV !== 'production') {
    Spin.displayName = 'Spin';
  }
  var _default = _exports["default"] = Spin;
});