define(["exports", "react", "classnames", "rc-tooltip", "rc-util/es/hooks/useMergedState", "antd4mx/_util/hooks/useZIndex", "antd4mx/_util/motion", "antd4mx/_util/placements", "antd4mx/_util/reactNode", "antd4mx/_util/warning", "antd4mx/_util/zindexContext", "antd4mx/config-provider/index", "antd4mx/space/Compact", "antd4mx/theme/internal", "antd4mx/tooltip/PurePanel", "antd4mx/tooltip/style/index", "antd4mx/tooltip/util"], function (_exports, React, _classnames, _rcTooltip, _useMergedState3, _useZIndex3, _motion, _placements, _reactNode, _warning, _zindexContext, _index, _Compact, _internal, _PurePanel, _index2, _util) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
  var Tooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _a, _b;
    var customizePrefixCls = props.prefixCls,
      openClassName = props.openClassName,
      getTooltipContainer = props.getTooltipContainer,
      overlayClassName = props.overlayClassName,
      color = props.color,
      overlayInnerStyle = props.overlayInnerStyle,
      children = props.children,
      afterOpenChange = props.afterOpenChange,
      afterVisibleChange = props.afterVisibleChange,
      destroyTooltipOnHide = props.destroyTooltipOnHide,
      _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? true : _props$arrow,
      title = props.title,
      overlay = props.overlay,
      builtinPlacements = props.builtinPlacements,
      _props$arrowPointAtCe = props.arrowPointAtCenter,
      arrowPointAtCenter = _props$arrowPointAtCe === void 0 ? false : _props$arrowPointAtCe,
      _props$autoAdjustOver = props.autoAdjustOverflow,
      autoAdjustOverflow = _props$autoAdjustOver === void 0 ? true : _props$autoAdjustOver;
    var mergedShowArrow = !!arrow;
    var _useToken = (0, _internal.useToken)(),
      _useToken2 = _slicedToArray(_useToken, 2),
      token = _useToken2[1];
    var _React$useContext = React.useContext(_index.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;
    // ============================== Ref ===============================
    var warning = (0, _warning.devUseWarning)('Tooltip');
    var tooltipRef = React.useRef(null);
    var forceAlign = function forceAlign() {
      var _a;
      (_a = tooltipRef.current) === null || _a === void 0 ? void 0 : _a.forceAlign();
    };
    React.useImperativeHandle(ref, function () {
      return {
        forceAlign: forceAlign,
        forcePopupAlign: function forcePopupAlign() {
          warning.deprecated(false, 'forcePopupAlign', 'forceAlign');
          forceAlign();
        }
      };
    });
    // ============================== Warn ==============================
    if (process.env.NODE_ENV !== 'production') {
      [['visible', 'open'], ['defaultVisible', 'defaultOpen'], ['onVisibleChange', 'onOpenChange'], ['afterVisibleChange', 'afterOpenChange'], ['arrowPointAtCenter', 'arrow={{ pointAtCenter: true }}']].forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          deprecatedName = _ref2[0],
          newName = _ref2[1];
        warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
      });
      process.env.NODE_ENV !== "production" ? warning(!destroyTooltipOnHide || typeof destroyTooltipOnHide === 'boolean', 'usage', '`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly.') : void 0;
      process.env.NODE_ENV !== "production" ? warning(!arrow || typeof arrow === 'boolean' || !('arrowPointAtCenter' in arrow), 'deprecated', '`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead.') : void 0;
    }
    // ============================== Open ==============================
    var _useMergedState = (0, _useMergedState3["default"])(false, {
        value: (_a = props.open) !== null && _a !== void 0 ? _a : props.visible,
        defaultValue: (_b = props.defaultOpen) !== null && _b !== void 0 ? _b : props.defaultVisible
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      open = _useMergedState2[0],
      setOpen = _useMergedState2[1];
    var noTitle = !title && !overlay && title !== 0; // overlay for old version compatibility
    var onOpenChange = function onOpenChange(vis) {
      var _a, _b;
      setOpen(noTitle ? false : vis);
      if (!noTitle) {
        (_a = props.onOpenChange) === null || _a === void 0 ? void 0 : _a.call(props, vis);
        (_b = props.onVisibleChange) === null || _b === void 0 ? void 0 : _b.call(props, vis);
      }
    };
    var tooltipPlacements = React.useMemo(function () {
      var _a, _b;
      var mergedArrowPointAtCenter = arrowPointAtCenter;
      if (_typeof(arrow) === 'object') {
        mergedArrowPointAtCenter = (_b = (_a = arrow.pointAtCenter) !== null && _a !== void 0 ? _a : arrow.arrowPointAtCenter) !== null && _b !== void 0 ? _b : arrowPointAtCenter;
      }
      return builtinPlacements || (0, _placements["default"])({
        arrowPointAtCenter: mergedArrowPointAtCenter,
        autoAdjustOverflow: autoAdjustOverflow,
        arrowWidth: mergedShowArrow ? token.sizePopupArrow : 0,
        borderRadius: token.borderRadius,
        offset: token.marginXXS,
        visibleFirst: true
      });
    }, [arrowPointAtCenter, arrow, builtinPlacements, token]);
    var memoOverlay = React.useMemo(function () {
      if (title === 0) {
        return title;
      }
      return overlay || title || '';
    }, [overlay, title]);
    var memoOverlayWrapper = /*#__PURE__*/React.createElement(_Compact.NoCompactStyle, null, typeof memoOverlay === 'function' ? memoOverlay() : memoOverlay);
    var getPopupContainer = props.getPopupContainer,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'top' : _props$placement,
      _props$mouseEnterDela = props.mouseEnterDelay,
      mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0.1 : _props$mouseEnterDela,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      overlayStyle = props.overlayStyle,
      rootClassName = props.rootClassName,
      otherProps = __rest(props, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]);
    var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
    var rootPrefixCls = getPrefixCls();
    var injectFromPopover = props['data-popover-inject'];
    var tempOpen = open;
    // Hide tooltip when there is no title
    if (!('open' in props) && !('visible' in props) && noTitle) {
      tempOpen = false;
    }
    // ============================= Render =============================
    var child = (0, _reactNode.isValidElement)(children) && !(0, _reactNode.isFragment)(children) ? children : /*#__PURE__*/React.createElement("span", null, children);
    var childProps = child.props;
    var childCls = !childProps.className || typeof childProps.className === 'string' ? (0, _classnames["default"])(childProps.className, openClassName || "".concat(prefixCls, "-open")) : childProps.className;
    // Style
    var _useStyle = (0, _index2["default"])(prefixCls, !injectFromPopover),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    // Color
    var colorInfo = (0, _util.parseColor)(prefixCls, color);
    var arrowContentStyle = colorInfo.arrowStyle;
    var formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
    var customOverlayClassName = (0, _classnames["default"])(overlayClassName, _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), colorInfo.className, rootClassName, hashId, cssVarCls);
    // ============================ zIndex ============================
    var _useZIndex = (0, _useZIndex3.useZIndex)('Tooltip', otherProps.zIndex),
      _useZIndex2 = _slicedToArray(_useZIndex, 2),
      zIndex = _useZIndex2[0],
      contextZIndex = _useZIndex2[1];
    var content = /*#__PURE__*/React.createElement(_rcTooltip["default"], Object.assign({}, otherProps, {
      zIndex: zIndex,
      showArrow: mergedShowArrow,
      placement: placement,
      mouseEnterDelay: mouseEnterDelay,
      mouseLeaveDelay: mouseLeaveDelay,
      prefixCls: prefixCls,
      overlayClassName: customOverlayClassName,
      overlayStyle: Object.assign(Object.assign({}, arrowContentStyle), overlayStyle),
      getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
      ref: tooltipRef,
      builtinPlacements: tooltipPlacements,
      overlay: memoOverlayWrapper,
      visible: tempOpen,
      onVisibleChange: onOpenChange,
      afterVisibleChange: afterOpenChange !== null && afterOpenChange !== void 0 ? afterOpenChange : afterVisibleChange,
      overlayInnerStyle: formattedOverlayInnerStyle,
      arrowContent: /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-arrow-content")
      }),
      motion: {
        motionName: (0, _motion.getTransitionName)(rootPrefixCls, 'zoom-big-fast', props.transitionName),
        motionDeadline: 1000
      },
      destroyTooltipOnHide: !!destroyTooltipOnHide
    }), tempOpen ? (0, _reactNode.cloneElement)(child, {
      className: childCls
    }) : child);
    return wrapCSSVar( /*#__PURE__*/React.createElement(_zindexContext["default"].Provider, {
      value: contextZIndex
    }, content));
  });
  if (process.env.NODE_ENV !== 'production') {
    Tooltip.displayName = 'Tooltip';
  }
  Tooltip._InternalPanelDoNotUseOrYouWillBeFired = _PurePanel["default"];
  var _default = _exports["default"] = Tooltip;
});