define(["exports", "react", "classnames", "rc-slider", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/config-provider/DisabledContext", "antd4mx/slider/SliderTooltip", "antd4mx/slider/style"], function (_exports, _react, _classnames, _rcSlider, _warning, _configProvider, _DisabledContext, _SliderTooltip, _style) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
  function getTipFormatter(tipFormatter, legacyTipFormatter) {
    if (tipFormatter || tipFormatter === null) {
      return tipFormatter;
    }
    if (legacyTipFormatter || legacyTipFormatter === null) {
      return legacyTipFormatter;
    }
    return function (val) {
      return typeof val === 'number' ? val.toString() : '';
    };
  }
  var Slider = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
    var customizePrefixCls = props.prefixCls,
      range = props.range,
      className = props.className,
      rootClassName = props.rootClassName,
      style = props.style,
      disabled = props.disabled,
      legacyTooltipPrefixCls = props.tooltipPrefixCls,
      legacyTipFormatter = props.tipFormatter,
      legacyTooltipVisible = props.tooltipVisible,
      legacyGetTooltipPopupContainer = props.getTooltipPopupContainer,
      legacyTooltipPlacement = props.tooltipPlacement,
      restProps = __rest(props, ["prefixCls", "range", "className", "rootClassName", "style", "disabled", "tooltipPrefixCls", "tipFormatter", "tooltipVisible", "getTooltipPopupContainer", "tooltipPlacement"]);
    var _React$useContext = _react["default"].useContext(_configProvider.ConfigContext),
      direction = _React$useContext.direction,
      slider = _React$useContext.slider,
      getPrefixCls = _React$useContext.getPrefixCls,
      getPopupContainer = _React$useContext.getPopupContainer;
    var contextDisabled = _react["default"].useContext(_DisabledContext["default"]);
    var mergedDisabled = disabled !== null && disabled !== void 0 ? disabled : contextDisabled;
    var _React$useState = _react["default"].useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      opens = _React$useState2[0],
      setOpens = _React$useState2[1];
    var toggleTooltipOpen = function toggleTooltipOpen(index, open) {
      setOpens(function (prev) {
        return Object.assign(Object.assign({}, prev), _defineProperty({}, index, open));
      });
    };
    var getTooltipPlacement = function getTooltipPlacement(placement, vertical) {
      if (placement) {
        return placement;
      }
      if (!vertical) {
        return 'top';
      }
      return direction === 'rtl' ? 'left' : 'right';
    };
    var prefixCls = getPrefixCls('slider', customizePrefixCls);
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var cls = (0, _classnames["default"])(className, slider === null || slider === void 0 ? void 0 : slider.className, rootClassName, _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), hashId, cssVarCls);
    // make reverse default on rtl direction
    if (direction === 'rtl' && !restProps.vertical) {
      restProps.reverse = !restProps.reverse;
    }
    // Range config
    var _React$useMemo = _react["default"].useMemo(function () {
        if (!range) {
          return [false];
        }
        return _typeof(range) === 'object' ? [true, range.draggableTrack] : [true, false];
      }, [range]),
      _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
      mergedRange = _React$useMemo2[0],
      draggableTrack = _React$useMemo2[1];
    // Warning for deprecated usage
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Slider');
      [['tooltipPrefixCls', 'prefixCls'], ['getTooltipPopupContainer', 'getPopupContainer'], ['tipFormatter', 'formatter'], ['tooltipPlacement', 'placement'], ['tooltipVisible', 'open']].forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          deprecatedName = _ref2[0],
          newName = _ref2[1];
        warning.deprecated(!(deprecatedName in props), deprecatedName, "tooltip.".concat(newName));
      });
    }
    var handleRender = function handleRender(node, info) {
      var _a;
      var index = info.index,
        dragging = info.dragging;
      var _props$tooltip = props.tooltip,
        tooltip = _props$tooltip === void 0 ? {} : _props$tooltip,
        vertical = props.vertical;
      var tooltipProps = Object.assign({}, tooltip);
      var tooltipOpen = tooltipProps.open,
        tooltipPlacement = tooltipProps.placement,
        getTooltipPopupContainer = tooltipProps.getPopupContainer,
        customizeTooltipPrefixCls = tooltipProps.prefixCls,
        tipFormatter = tooltipProps.formatter;
      var mergedTipFormatter = getTipFormatter(tipFormatter, legacyTipFormatter);
      var isTipFormatter = mergedTipFormatter ? opens[index] || dragging : false;
      var open = (_a = tooltipOpen !== null && tooltipOpen !== void 0 ? tooltipOpen : legacyTooltipVisible) !== null && _a !== void 0 ? _a : tooltipOpen === undefined && isTipFormatter;
      var passedProps = Object.assign(Object.assign({}, node.props), {
        onMouseEnter: function onMouseEnter() {
          return toggleTooltipOpen(index, true);
        },
        onMouseLeave: function onMouseLeave() {
          return toggleTooltipOpen(index, false);
        },
        onFocus: function onFocus(e) {
          var _a;
          toggleTooltipOpen(index, true);
          (_a = restProps.onFocus) === null || _a === void 0 ? void 0 : _a.call(restProps, e);
        },
        onBlur: function onBlur(e) {
          var _a;
          toggleTooltipOpen(index, false);
          (_a = restProps.onBlur) === null || _a === void 0 ? void 0 : _a.call(restProps, e);
        }
      });
      return /*#__PURE__*/_react["default"].createElement(_SliderTooltip["default"], Object.assign({}, tooltipProps, {
        prefixCls: getPrefixCls('tooltip', customizeTooltipPrefixCls !== null && customizeTooltipPrefixCls !== void 0 ? customizeTooltipPrefixCls : legacyTooltipPrefixCls),
        title: mergedTipFormatter ? mergedTipFormatter(info.value) : '',
        open: open,
        placement: getTooltipPlacement(tooltipPlacement !== null && tooltipPlacement !== void 0 ? tooltipPlacement : legacyTooltipPlacement, vertical),
        key: index,
        overlayClassName: "".concat(prefixCls, "-tooltip"),
        getPopupContainer: getTooltipPopupContainer || legacyGetTooltipPopupContainer || getPopupContainer
      }), /*#__PURE__*/_react["default"].cloneElement(node, passedProps));
    };
    var mergedStyle = Object.assign(Object.assign({}, slider === null || slider === void 0 ? void 0 : slider.style), style);
    return wrapCSSVar( /*#__PURE__*/_react["default"].createElement(_rcSlider["default"], Object.assign({}, restProps, {
      step: restProps.step,
      range: mergedRange,
      draggableTrack: draggableTrack,
      className: cls,
      style: mergedStyle,
      disabled: mergedDisabled,
      ref: ref,
      prefixCls: prefixCls,
      handleRender: handleRender
    })));
  });
  if (process.env.NODE_ENV !== 'production') {
    Slider.displayName = 'Slider';
  }
  var _default = _exports["default"] = Slider;
});