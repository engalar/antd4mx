function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-resize-observer", "rc-util/es/omit", "antd4mx/_util/throttleByAnimationFrame", "antd4mx/config-provider/index", "antd4mx/affix/style/index", "antd4mx/affix/utils"], function (_exports, _react, _classnames, _rcResizeObserver, _omit, _throttleByAnimationFrame, _index, _index2, _utils) {
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
  var TRIGGER_EVENTS = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
  function getDefaultTarget() {
    return typeof window !== 'undefined' ? window : null;
  }
  var AffixStatus;
  (function (AffixStatus) {
    AffixStatus[AffixStatus["None"] = 0] = "None";
    AffixStatus[AffixStatus["Prepare"] = 1] = "Prepare";
  })(AffixStatus || (AffixStatus = {}));
  var Affix = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
    var _a;
    var style = props.style,
      offsetTop = props.offsetTop,
      offsetBottom = props.offsetBottom,
      prefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      children = props.children,
      target = props.target,
      onChange = props.onChange;
    var _React$useContext = _react["default"].useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      getTargetContainer = _React$useContext.getTargetContainer;
    var affixPrefixCls = getPrefixCls('affix', prefixCls);
    var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      lastAffix = _React$useState2[0],
      setLastAffix = _React$useState2[1];
    var _React$useState3 = _react["default"].useState(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      affixStyle = _React$useState4[0],
      setAffixStyle = _React$useState4[1];
    var _React$useState5 = _react["default"].useState(),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      placeholderStyle = _React$useState6[0],
      setPlaceholderStyle = _React$useState6[1];
    var status = _react["default"].useRef(AffixStatus.None);
    var prevTarget = _react["default"].useRef(null);
    var prevListener = _react["default"].useRef();
    var placeholderNodeRef = _react["default"].useRef(null);
    var fixedNodeRef = _react["default"].useRef(null);
    var timer = _react["default"].useRef(null);
    var targetFunc = (_a = target !== null && target !== void 0 ? target : getTargetContainer) !== null && _a !== void 0 ? _a : getDefaultTarget;
    var internalOffsetTop = offsetBottom === undefined && offsetTop === undefined ? 0 : offsetTop;
    // =================== Measure ===================
    var measure = function measure() {
      if (status.current !== AffixStatus.Prepare || !fixedNodeRef.current || !placeholderNodeRef.current || !targetFunc) {
        return;
      }
      var targetNode = targetFunc();
      if (targetNode) {
        var newState = {
          status: AffixStatus.None
        };
        var placeholderRect = (0, _utils.getTargetRect)(placeholderNodeRef.current);
        if (placeholderRect.top === 0 && placeholderRect.left === 0 && placeholderRect.width === 0 && placeholderRect.height === 0) {
          return;
        }
        var targetRect = (0, _utils.getTargetRect)(targetNode);
        var fixedTop = (0, _utils.getFixedTop)(placeholderRect, targetRect, internalOffsetTop);
        var fixedBottom = (0, _utils.getFixedBottom)(placeholderRect, targetRect, offsetBottom);
        if (fixedTop !== undefined) {
          newState.affixStyle = {
            position: 'fixed',
            top: fixedTop,
            width: placeholderRect.width,
            height: placeholderRect.height
          };
          newState.placeholderStyle = {
            width: placeholderRect.width,
            height: placeholderRect.height
          };
        } else if (fixedBottom !== undefined) {
          newState.affixStyle = {
            position: 'fixed',
            bottom: fixedBottom,
            width: placeholderRect.width,
            height: placeholderRect.height
          };
          newState.placeholderStyle = {
            width: placeholderRect.width,
            height: placeholderRect.height
          };
        }
        newState.lastAffix = !!newState.affixStyle;
        if (lastAffix !== newState.lastAffix) {
          onChange === null || onChange === void 0 ? void 0 : onChange(newState.lastAffix);
        }
        status.current = newState.status;
        setAffixStyle(newState.affixStyle);
        setPlaceholderStyle(newState.placeholderStyle);
        setLastAffix(newState.lastAffix);
      }
    };
    var prepareMeasure = function prepareMeasure() {
      var _a;
      status.current = AffixStatus.Prepare;
      measure();
      if (process.env.NODE_ENV === 'test') {
        (_a = props === null || props === void 0 ? void 0 : props.onTestUpdatePosition) === null || _a === void 0 ? void 0 : _a.call(props);
      }
    };
    var updatePosition = (0, _throttleByAnimationFrame["default"])(function () {
      prepareMeasure();
    });
    var lazyUpdatePosition = (0, _throttleByAnimationFrame["default"])(function () {
      // Check position change before measure to make Safari smooth
      if (targetFunc && affixStyle) {
        var targetNode = targetFunc();
        if (targetNode && placeholderNodeRef.current) {
          var targetRect = (0, _utils.getTargetRect)(targetNode);
          var placeholderRect = (0, _utils.getTargetRect)(placeholderNodeRef.current);
          var fixedTop = (0, _utils.getFixedTop)(placeholderRect, targetRect, internalOffsetTop);
          var fixedBottom = (0, _utils.getFixedBottom)(placeholderRect, targetRect, offsetBottom);
          if (fixedTop !== undefined && affixStyle.top === fixedTop || fixedBottom !== undefined && affixStyle.bottom === fixedBottom) {
            return;
          }
        }
      }
      // Directly call prepare measure since it's already throttled.
      prepareMeasure();
    });
    var addListeners = function addListeners() {
      var listenerTarget = targetFunc === null || targetFunc === void 0 ? void 0 : targetFunc();
      if (!listenerTarget) {
        return;
      }
      TRIGGER_EVENTS.forEach(function (eventName) {
        var _a;
        if (prevListener.current) {
          (_a = prevTarget.current) === null || _a === void 0 ? void 0 : _a.removeEventListener(eventName, prevListener.current);
        }
        listenerTarget === null || listenerTarget === void 0 ? void 0 : listenerTarget.addEventListener(eventName, lazyUpdatePosition);
      });
      prevTarget.current = listenerTarget;
      prevListener.current = lazyUpdatePosition;
    };
    var removeListeners = function removeListeners() {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }
      var newTarget = targetFunc === null || targetFunc === void 0 ? void 0 : targetFunc();
      TRIGGER_EVENTS.forEach(function (eventName) {
        var _a;
        newTarget === null || newTarget === void 0 ? void 0 : newTarget.removeEventListener(eventName, lazyUpdatePosition);
        if (prevListener.current) {
          (_a = prevTarget.current) === null || _a === void 0 ? void 0 : _a.removeEventListener(eventName, prevListener.current);
        }
      });
      updatePosition.cancel();
      lazyUpdatePosition.cancel();
    };
    _react["default"].useImperativeHandle(ref, function () {
      return {
        updatePosition: updatePosition
      };
    });
    // mount & unmount
    _react["default"].useEffect(function () {
      // [Legacy] Wait for parent component ref has its value.
      // We should use target as directly element instead of function which makes element check hard.
      timer.current = setTimeout(addListeners);
      return function () {
        return removeListeners();
      };
    }, []);
    _react["default"].useEffect(function () {
      addListeners();
    }, [target, affixStyle]);
    _react["default"].useEffect(function () {
      updatePosition();
    }, [target, offsetTop, offsetBottom]);
    var _useStyle = (0, _index2["default"])(affixPrefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var rootCls = (0, _classnames["default"])(rootClassName, hashId, affixPrefixCls, cssVarCls);
    var mergedCls = (0, _classnames["default"])(_defineProperty({}, rootCls, affixStyle));
    var otherProps = (0, _omit["default"])(props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target', 'onChange', 'rootClassName']);
    if (process.env.NODE_ENV === 'test') {
      otherProps = (0, _omit["default"])(otherProps, ['onTestUpdatePosition']);
    }
    return wrapCSSVar( /*#__PURE__*/_react["default"].createElement(_rcResizeObserver["default"], {
      onResize: updatePosition
    }, /*#__PURE__*/_react["default"].createElement("div", Object.assign({
      style: style,
      className: className,
      ref: placeholderNodeRef
    }, otherProps), affixStyle && /*#__PURE__*/_react["default"].createElement("div", {
      style: placeholderStyle,
      "aria-hidden": "true"
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: mergedCls,
      ref: fixedNodeRef,
      style: affixStyle
    }, /*#__PURE__*/_react["default"].createElement(_rcResizeObserver["default"], {
      onResize: updatePosition
    }, children)))));
  });
  if (process.env.NODE_ENV !== 'production') {
    Affix.displayName = 'Affix';
  }
  var _default = _exports["default"] = Affix;
});