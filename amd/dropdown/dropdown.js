define(["exports", "react", "@ant-design/icons/es/icons/RightOutlined", "classnames", "rc-dropdown", "rc-util", "rc-util/es/hooks/useMergedState", "rc-util/es/omit", "antd4mx/_util/hooks/useZIndex", "antd4mx/_util/placements", "antd4mx/_util/PurePanel", "antd4mx/_util/reactNode", "antd4mx/_util/warning", "antd4mx/_util/zindexContext", "antd4mx/config-provider/index", "antd4mx/menu/index", "antd4mx/menu/OverrideContext", "antd4mx/theme/internal", "antd4mx/dropdown/style/index", "antd4mx/config-provider/hooks/useCSSVarCls"], function (_exports, React, _RightOutlined, _classnames, _rcDropdown, _rcUtil, _useMergedState3, _omit, _useZIndex3, _placements, _PurePanel, _reactNode, _warning, _zindexContext, _index, _index2, _OverrideContext, _internal, _index3, _useCSSVarCls) {
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
  var Placements = ['topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight', 'top', 'bottom'];
  var Dropdown = function Dropdown(props) {
    var menu = props.menu,
      arrow = props.arrow,
      customizePrefixCls = props.prefixCls,
      children = props.children,
      trigger = props.trigger,
      disabled = props.disabled,
      dropdownRender = props.dropdownRender,
      getPopupContainer = props.getPopupContainer,
      overlayClassName = props.overlayClassName,
      rootClassName = props.rootClassName,
      overlayStyle = props.overlayStyle,
      open = props.open,
      onOpenChange = props.onOpenChange,
      visible = props.visible,
      onVisibleChange = props.onVisibleChange,
      _props$mouseEnterDela = props.mouseEnterDelay,
      mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0.15 : _props$mouseEnterDela,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      _props$autoAdjustOver = props.autoAdjustOverflow,
      autoAdjustOverflow = _props$autoAdjustOver === void 0 ? true : _props$autoAdjustOver,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? '' : _props$placement,
      overlay = props.overlay,
      transitionName = props.transitionName;
    var _React$useContext = React.useContext(_index.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      dropdown = _React$useContext.dropdown;
    // Warning for deprecated usage
    var warning = (0, _warning.devUseWarning)('Dropdown');
    if (process.env.NODE_ENV !== 'production') {
      [['visible', 'open'], ['onVisibleChange', 'onOpenChange']].forEach(function (_ref) {
        var _ref4 = _slicedToArray(_ref, 2),
          deprecatedName = _ref4[0],
          newName = _ref4[1];
        warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
      });
      warning.deprecated(!('overlay' in props), 'overlay', 'menu');
    }
    var memoTransitionName = React.useMemo(function () {
      var rootPrefixCls = getPrefixCls();
      if (transitionName !== undefined) {
        return transitionName;
      }
      if (placement.includes('top')) {
        return "".concat(rootPrefixCls, "-slide-down");
      }
      return "".concat(rootPrefixCls, "-slide-up");
    }, [getPrefixCls, placement, transitionName]);
    var memoPlacement = React.useMemo(function () {
      if (!placement) {
        return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
      }
      if (placement.includes('Center')) {
        return placement.slice(0, placement.indexOf('Center'));
      }
      return placement;
    }, [placement, direction]);
    if (process.env.NODE_ENV !== 'production') {
      if (placement.includes('Center')) {
        var newPlacement = placement.slice(0, placement.indexOf('Center'));
        process.env.NODE_ENV !== "production" ? warning(!placement.includes('Center'), 'deprecated', "You are using '".concat(placement, "' placement in Dropdown, which is deprecated. Try to use '").concat(newPlacement, "' instead.")) : void 0;
      }
      [['visible', 'open'], ['onVisibleChange', 'onOpenChange']].forEach(function (_ref2) {
        var _ref5 = _slicedToArray(_ref2, 2),
          deprecatedName = _ref5[0],
          newName = _ref5[1];
        warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
      });
    }
    var prefixCls = getPrefixCls('dropdown', customizePrefixCls);
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _index3["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var _useToken = (0, _internal.useToken)(),
      _useToken2 = _slicedToArray(_useToken, 2),
      token = _useToken2[1];
    var child = React.Children.only(children);
    var dropdownTrigger = (0, _reactNode.cloneElement)(child, {
      className: (0, _classnames["default"])("".concat(prefixCls, "-trigger"), _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), child.props.className),
      disabled: disabled
    });
    var triggerActions = disabled ? [] : trigger;
    var alignPoint;
    if (triggerActions && triggerActions.includes('contextMenu')) {
      alignPoint = true;
    }
    // =========================== Open ============================
    var _useMergedState = (0, _useMergedState3["default"])(false, {
        value: open !== null && open !== void 0 ? open : visible
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      mergedOpen = _useMergedState2[0],
      setOpen = _useMergedState2[1];
    var onInnerOpenChange = (0, _rcUtil.useEvent)(function (nextOpen) {
      onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(nextOpen, {
        source: 'trigger'
      });
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(nextOpen);
      setOpen(nextOpen);
    });
    // =========================== Overlay ============================
    var overlayClassNameCustomized = (0, _classnames["default"])(overlayClassName, rootClassName, hashId, cssVarCls, rootCls, dropdown === null || dropdown === void 0 ? void 0 : dropdown.className, _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
    var builtinPlacements = (0, _placements["default"])({
      arrowPointAtCenter: _typeof(arrow) === 'object' && arrow.pointAtCenter,
      autoAdjustOverflow: autoAdjustOverflow,
      offset: token.marginXXS,
      arrowWidth: arrow ? token.sizePopupArrow : 0,
      borderRadius: token.borderRadius
    });
    var onMenuClick = React.useCallback(function () {
      if ((menu === null || menu === void 0 ? void 0 : menu.selectable) && (menu === null || menu === void 0 ? void 0 : menu.multiple)) {
        return;
      }
      onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false, {
        source: 'menu'
      });
      setOpen(false);
    }, [menu === null || menu === void 0 ? void 0 : menu.selectable, menu === null || menu === void 0 ? void 0 : menu.multiple]);
    var renderOverlay = function renderOverlay() {
      // rc-dropdown already can process the function of overlay, but we have check logic here.
      // So we need render the element to check and pass back to rc-dropdown.
      var overlayNode;
      if (menu === null || menu === void 0 ? void 0 : menu.items) {
        overlayNode = /*#__PURE__*/React.createElement(_index2["default"], Object.assign({}, menu));
      } else if (typeof overlay === 'function') {
        overlayNode = overlay();
      } else {
        overlayNode = overlay;
      }
      if (dropdownRender) {
        overlayNode = dropdownRender(overlayNode);
      }
      overlayNode = React.Children.only(typeof overlayNode === 'string' ? /*#__PURE__*/React.createElement("span", null, overlayNode) : overlayNode);
      return /*#__PURE__*/React.createElement(_OverrideContext.OverrideProvider, {
        prefixCls: "".concat(prefixCls, "-menu"),
        rootClassName: (0, _classnames["default"])(cssVarCls, rootCls),
        expandIcon: /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-menu-submenu-arrow")
        }, /*#__PURE__*/React.createElement(_RightOutlined["default"], {
          className: "".concat(prefixCls, "-menu-submenu-arrow-icon")
        })),
        mode: "vertical",
        selectable: false,
        onClick: onMenuClick,
        validator: function validator(_ref3) {
          var mode = _ref3.mode;
          // Warning if use other mode
          process.env.NODE_ENV !== "production" ? warning(!mode || mode === 'vertical', 'usage', "mode=\"".concat(mode, "\" is not supported for Dropdown's Menu.")) : void 0;
        }
      }, overlayNode);
    };
    // =========================== zIndex ============================
    var _useZIndex = (0, _useZIndex3.useZIndex)('Dropdown', overlayStyle === null || overlayStyle === void 0 ? void 0 : overlayStyle.zIndex),
      _useZIndex2 = _slicedToArray(_useZIndex, 2),
      zIndex = _useZIndex2[0],
      contextZIndex = _useZIndex2[1];
    // ============================ Render ============================
    var renderNode = /*#__PURE__*/React.createElement(_rcDropdown["default"], Object.assign({
      alignPoint: alignPoint
    }, (0, _omit["default"])(props, ['rootClassName']), {
      mouseEnterDelay: mouseEnterDelay,
      mouseLeaveDelay: mouseLeaveDelay,
      visible: mergedOpen,
      builtinPlacements: builtinPlacements,
      arrow: !!arrow,
      overlayClassName: overlayClassNameCustomized,
      prefixCls: prefixCls,
      getPopupContainer: getPopupContainer || getContextPopupContainer,
      transitionName: memoTransitionName,
      trigger: triggerActions,
      overlay: renderOverlay,
      placement: memoPlacement,
      onVisibleChange: onInnerOpenChange,
      overlayStyle: Object.assign(Object.assign(Object.assign({}, dropdown === null || dropdown === void 0 ? void 0 : dropdown.style), overlayStyle), {
        zIndex: zIndex
      })
    }), dropdownTrigger);
    if (zIndex) {
      renderNode = /*#__PURE__*/React.createElement(_zindexContext["default"].Provider, {
        value: contextZIndex
      }, renderNode);
    }
    return wrapCSSVar(renderNode);
  };
  function postPureProps(props) {
    return Object.assign(Object.assign({}, props), {
      align: {
        overflow: {
          adjustX: false,
          adjustY: false
        }
      }
    });
  }
  // We don't care debug panel
  var PurePanel = (0, _PurePanel["default"])(Dropdown, 'dropdown', function (prefixCls) {
    return prefixCls;
  }, postPureProps);
  /* istanbul ignore next */
  var WrapPurePanel = function WrapPurePanel(props) {
    return /*#__PURE__*/React.createElement(PurePanel, Object.assign({}, props), /*#__PURE__*/React.createElement("span", null));
  };
  Dropdown._InternalPanelDoNotUseOrYouWillBeFired = WrapPurePanel;
  if (process.env.NODE_ENV !== 'production') {
    Dropdown.displayName = 'Dropdown';
  }
  var _default = _exports["default"] = Dropdown;
});