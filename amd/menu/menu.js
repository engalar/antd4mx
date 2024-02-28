define(["exports", "react", "@ant-design/icons/es/icons/EllipsisOutlined", "classnames", "rc-menu", "rc-util", "rc-util/es/omit", "antd4mx/_util/motion", "antd4mx/_util/reactNode", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/menu/hooks/useItems", "antd4mx/menu/MenuContext", "antd4mx/menu/OverrideContext", "antd4mx/menu/style/index", "antd4mx/config-provider/hooks/useCSSVarCls"], function (_exports, _react, _EllipsisOutlined, _classnames, _rcMenu, _rcUtil, _omit, _motion, _reactNode, _warning, _index, _useItems, _MenuContext, _OverrideContext, _index2, _useCSSVarCls) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var React = _react;
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
  var InternalMenu = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    var _a, _b;
    var override = React.useContext(_OverrideContext["default"]);
    var overrideObj = override || {};
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      getPopupContainer = _React$useContext.getPopupContainer,
      direction = _React$useContext.direction,
      menu = _React$useContext.menu;
    var rootPrefixCls = getPrefixCls();
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? 'light' : _props$theme,
      expandIcon = props.expandIcon,
      _internalDisableMenuItemTitleTooltip = props._internalDisableMenuItemTitleTooltip,
      inlineCollapsed = props.inlineCollapsed,
      siderCollapsed = props.siderCollapsed,
      items = props.items,
      children = props.children,
      rootClassName = props.rootClassName,
      mode = props.mode,
      selectable = props.selectable,
      onClick = props.onClick,
      overflowedIndicatorPopupClassName = props.overflowedIndicatorPopupClassName,
      restProps = __rest(props, ["prefixCls", "className", "style", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "items", "children", "rootClassName", "mode", "selectable", "onClick", "overflowedIndicatorPopupClassName"]);
    var passedProps = (0, _omit["default"])(restProps, ['collapsedWidth']);
    // ========================= Items ===========================
    var mergedChildren = (0, _useItems["default"])(items) || children;
    // ======================== Warning ==========================
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Menu');
      process.env.NODE_ENV !== "production" ? warning(!('inlineCollapsed' in props && mode !== 'inline'), 'usage', '`inlineCollapsed` should only be used when `mode` is inline.') : void 0;
      process.env.NODE_ENV !== "production" ? warning(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'usage', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.') : void 0;
      warning.deprecated('items' in props && !children, 'children', 'items');
    }
    (_a = overrideObj.validator) === null || _a === void 0 ? void 0 : _a.call(overrideObj, {
      mode: mode
    });
    // ========================== Click ==========================
    // Tell dropdown that item clicked
    var onItemClick = (0, _rcUtil.useEvent)(function () {
      var _a;
      onClick === null || onClick === void 0 ? void 0 : onClick.apply(void 0, arguments);
      (_a = overrideObj.onClick) === null || _a === void 0 ? void 0 : _a.call(overrideObj);
    });
    // ========================== Mode ===========================
    var mergedMode = overrideObj.mode || mode;
    // ======================= Selectable ========================
    var mergedSelectable = selectable !== null && selectable !== void 0 ? selectable : overrideObj.selectable;
    // ======================== Collapsed ========================
    // Inline Collapsed
    var mergedInlineCollapsed = React.useMemo(function () {
      if (siderCollapsed !== undefined) {
        return siderCollapsed;
      }
      return inlineCollapsed;
    }, [inlineCollapsed, siderCollapsed]);
    var defaultMotions = {
      horizontal: {
        motionName: "".concat(rootPrefixCls, "-slide-up")
      },
      inline: (0, _motion["default"])(rootPrefixCls),
      other: {
        motionName: "".concat(rootPrefixCls, "-zoom-big")
      }
    };
    var prefixCls = getPrefixCls('menu', customizePrefixCls || overrideObj.prefixCls);
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls, rootCls, !override),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var menuClassName = (0, _classnames["default"])("".concat(prefixCls, "-").concat(theme), menu === null || menu === void 0 ? void 0 : menu.className, className);
    // ====================== Expand Icon ========================
    var mergedExpandIcon;
    if (typeof expandIcon === 'function') {
      mergedExpandIcon = expandIcon;
    } else if (expandIcon === null || expandIcon === false) {
      mergedExpandIcon = null;
    } else if (overrideObj.expandIcon === null || overrideObj.expandIcon === false) {
      mergedExpandIcon = null;
    } else {
      var beClone = expandIcon !== null && expandIcon !== void 0 ? expandIcon : overrideObj.expandIcon;
      mergedExpandIcon = (0, _reactNode.cloneElement)(beClone, {
        className: (0, _classnames["default"])("".concat(prefixCls, "-submenu-expand-icon"), (0, _reactNode.isValidElement)(beClone) ? (_b = beClone.props) === null || _b === void 0 ? void 0 : _b.className : '')
      });
    }
    // ======================== Context ==========================
    var contextValue = React.useMemo(function () {
      return {
        prefixCls: prefixCls,
        inlineCollapsed: mergedInlineCollapsed || false,
        direction: direction,
        firstLevel: true,
        theme: theme,
        mode: mergedMode,
        disableMenuItemTitleTooltip: _internalDisableMenuItemTitleTooltip
      };
    }, [prefixCls, mergedInlineCollapsed, direction, _internalDisableMenuItemTitleTooltip, theme]);
    // ========================= Render ==========================
    return wrapCSSVar( /*#__PURE__*/React.createElement(_OverrideContext["default"].Provider, {
      value: null
    }, /*#__PURE__*/React.createElement(_MenuContext["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/React.createElement(_rcMenu["default"], Object.assign({
      getPopupContainer: getPopupContainer,
      overflowedIndicator: /*#__PURE__*/React.createElement(_EllipsisOutlined["default"], null),
      overflowedIndicatorPopupClassName: (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(theme), overflowedIndicatorPopupClassName),
      mode: mergedMode,
      selectable: mergedSelectable,
      onClick: onItemClick
    }, passedProps, {
      inlineCollapsed: mergedInlineCollapsed,
      style: Object.assign(Object.assign({}, menu === null || menu === void 0 ? void 0 : menu.style), style),
      className: menuClassName,
      prefixCls: prefixCls,
      direction: direction,
      defaultMotions: defaultMotions,
      expandIcon: mergedExpandIcon,
      ref: ref,
      rootClassName: (0, _classnames["default"])(rootClassName, hashId, overrideObj.rootClassName, cssVarCls, rootCls)
    }), mergedChildren))));
  });
  var _default = _exports["default"] = InternalMenu;
});