function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-drawer", "antd4mx/_util/hooks/useZIndex", "antd4mx/_util/motion", "antd4mx/_util/warning", "antd4mx/_util/zindexContext", "antd4mx/config-provider/index", "antd4mx/form/context", "antd4mx/space/Compact", "antd4mx/watermark/context", "antd4mx/drawer/DrawerPanel", "antd4mx/drawer/style/index"], function (_exports, React, _classnames, _rcDrawer, _useZIndex3, _motion, _warning, _zindexContext, _index, _context, _Compact, _context2, _DrawerPanel, _index2) {
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
  var SizeTypes = ['default', 'large'];
  var defaultPushState = {
    distance: 180
  };
  var Drawer = function Drawer(props) {
    var _a;
    var rootClassName = props.rootClassName,
      width = props.width,
      height = props.height,
      _props$size = props.size,
      size = _props$size === void 0 ? 'default' : _props$size,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      _props$push = props.push,
      push = _props$push === void 0 ? defaultPushState : _props$push,
      open = props.open,
      afterOpenChange = props.afterOpenChange,
      onClose = props.onClose,
      customizePrefixCls = props.prefixCls,
      customizeGetContainer = props.getContainer,
      style = props.style,
      className = props.className,
      visible = props.visible,
      afterVisibleChange = props.afterVisibleChange,
      maskStyle = props.maskStyle,
      drawerStyle = props.drawerStyle,
      contentWrapperStyle = props.contentWrapperStyle,
      rest = __rest(props, ["rootClassName", "width", "height", "size", "mask", "push", "open", "afterOpenChange", "onClose", "prefixCls", "getContainer", "style", "className", "visible", "afterVisibleChange", "maskStyle", "drawerStyle", "contentWrapperStyle"]);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      drawer = _React$useContext.drawer;
    var prefixCls = getPrefixCls('drawer', customizePrefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var getContainer =
    // 有可能为 false，所以不能直接判断
    customizeGetContainer === undefined && getPopupContainer ? function () {
      return getPopupContainer(document.body);
    } : customizeGetContainer;
    var drawerClassName = (0, _classnames["default"])(_defineProperty({
      'no-mask': !mask
    }, "".concat(prefixCls, "-rtl"), direction === 'rtl'), rootClassName, hashId, cssVarCls);
    // ========================== Warning ===========================
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Drawer');
      [['visible', 'open'], ['afterVisibleChange', 'afterOpenChange'], ['headerStyle', 'styles.header'], ['bodyStyle', 'styles.body'], ['footerStyle', 'styles.footer'], ['contentWrapperStyle', 'styles.wrapper'], ['maskStyle', 'styles.mask'], ['drawerStyle', 'styles.content']].forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          deprecatedName = _ref2[0],
          newName = _ref2[1];
        warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
      });
      if (getContainer !== undefined && ((_a = props.style) === null || _a === void 0 ? void 0 : _a.position) === 'absolute') {
        process.env.NODE_ENV !== "production" ? warning(false, 'breaking', '`style` is replaced by `rootStyle` in v5. Please check that `position: absolute` is necessary.') : void 0;
      }
    }
    // ============================ Size ============================
    var mergedWidth = React.useMemo(function () {
      return width !== null && width !== void 0 ? width : size === 'large' ? 736 : 378;
    }, [width, size]);
    var mergedHeight = React.useMemo(function () {
      return height !== null && height !== void 0 ? height : size === 'large' ? 736 : 378;
    }, [height, size]);
    // =========================== Motion ===========================
    var maskMotion = {
      motionName: (0, _motion.getTransitionName)(prefixCls, 'mask-motion'),
      motionAppear: true,
      motionEnter: true,
      motionLeave: true,
      motionDeadline: 500
    };
    var panelMotion = function panelMotion(motionPlacement) {
      return {
        motionName: (0, _motion.getTransitionName)(prefixCls, "panel-motion-".concat(motionPlacement)),
        motionAppear: true,
        motionEnter: true,
        motionLeave: true,
        motionDeadline: 500
      };
    };
    // ============================ Refs ============================
    // Select `ant-modal-content` by `panelRef`
    var panelRef = (0, _context2.usePanelRef)();
    // ============================ zIndex ============================
    var _useZIndex = (0, _useZIndex3.useZIndex)('Drawer', rest.zIndex),
      _useZIndex2 = _slicedToArray(_useZIndex, 2),
      zIndex = _useZIndex2[0],
      contextZIndex = _useZIndex2[1];
    // =========================== Render ===========================
    var _rest$classNames = rest.classNames,
      propClassNames = _rest$classNames === void 0 ? {} : _rest$classNames,
      _rest$styles = rest.styles,
      propStyles = _rest$styles === void 0 ? {} : _rest$styles;
    var _ref3 = drawer || {},
      _ref3$classNames = _ref3.classNames,
      contextClassNames = _ref3$classNames === void 0 ? {} : _ref3$classNames,
      _ref3$styles = _ref3.styles,
      contextStyles = _ref3$styles === void 0 ? {} : _ref3$styles;
    return wrapCSSVar( /*#__PURE__*/React.createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/React.createElement(_context.NoFormStyle, {
      status: true,
      override: true
    }, /*#__PURE__*/React.createElement(_zindexContext["default"].Provider, {
      value: contextZIndex
    }, /*#__PURE__*/React.createElement(_rcDrawer["default"], Object.assign({
      prefixCls: prefixCls,
      onClose: onClose,
      maskMotion: maskMotion,
      motion: panelMotion
    }, rest, {
      classNames: {
        mask: (0, _classnames["default"])(propClassNames.mask, contextClassNames.mask),
        content: (0, _classnames["default"])(propClassNames.content, contextClassNames.content)
      },
      styles: {
        mask: Object.assign(Object.assign(Object.assign({}, propStyles.mask), maskStyle), contextStyles.mask),
        content: Object.assign(Object.assign(Object.assign({}, propStyles.content), drawerStyle), contextStyles.content),
        wrapper: Object.assign(Object.assign(Object.assign({}, propStyles.wrapper), contentWrapperStyle), contextStyles.wrapper)
      },
      open: open !== null && open !== void 0 ? open : visible,
      mask: mask,
      push: push,
      width: mergedWidth,
      height: mergedHeight,
      style: Object.assign(Object.assign({}, drawer === null || drawer === void 0 ? void 0 : drawer.style), style),
      className: (0, _classnames["default"])(drawer === null || drawer === void 0 ? void 0 : drawer.className, className),
      rootClassName: drawerClassName,
      getContainer: getContainer,
      afterOpenChange: afterOpenChange !== null && afterOpenChange !== void 0 ? afterOpenChange : afterVisibleChange,
      panelRef: panelRef,
      zIndex: zIndex
    }), /*#__PURE__*/React.createElement(_DrawerPanel["default"], Object.assign({
      prefixCls: prefixCls
    }, rest, {
      onClose: onClose
    })))))));
  };
  /** @private Internal Component. Do not use in your production. */
  var PurePanel = function PurePanel(props) {
    var customizePrefixCls = props.prefixCls,
      style = props.style,
      className = props.className,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'right' : _props$placement,
      restProps = __rest(props, ["prefixCls", "style", "className", "placement"]);
    var _React$useContext2 = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext2.getPrefixCls;
    var prefixCls = getPrefixCls('drawer', customizePrefixCls);
    var _useStyle3 = (0, _index2["default"])(prefixCls),
      _useStyle4 = _slicedToArray(_useStyle3, 3),
      wrapCSSVar = _useStyle4[0],
      hashId = _useStyle4[1],
      cssVarCls = _useStyle4[2];
    var cls = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-pure"), "".concat(prefixCls, "-").concat(placement), hashId, cssVarCls, className);
    return wrapCSSVar( /*#__PURE__*/React.createElement("div", {
      className: cls,
      style: style
    }, /*#__PURE__*/React.createElement(_DrawerPanel["default"], Object.assign({
      prefixCls: prefixCls
    }, restProps))));
  };
  Drawer._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
  if (process.env.NODE_ENV !== 'production') {
    Drawer.displayName = 'Drawer';
  }
  var _default = _exports["default"] = Drawer;
});