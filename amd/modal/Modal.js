function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@ant-design/icons/es/icons/CloseOutlined", "classnames", "rc-dialog", "antd4mx/_util/hooks/useClosable", "antd4mx/_util/hooks/useZIndex", "antd4mx/_util/motion", "antd4mx/_util/styleChecker", "antd4mx/_util/warning", "antd4mx/_util/zindexContext", "antd4mx/config-provider/index", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/form/context", "antd4mx/space/Compact", "antd4mx/watermark/context", "antd4mx/modal/shared", "antd4mx/modal/style/index"], function (_exports, React, _CloseOutlined, _classnames, _rcDialog, _useClosable3, _useZIndex3, _motion, _styleChecker, _warning, _zindexContext, _index, _useCSSVarCls, _context, _Compact, _context2, _shared, _index2) {
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
  var mousePosition;
  // ref: https://github.com/ant-design/ant-design/issues/15795
  var getClickPosition = function getClickPosition(e) {
    mousePosition = {
      x: e.pageX,
      y: e.pageY
    };
    // 100ms 内发生过点击事件，则从点击位置动画展示
    // 否则直接 zoom 展示
    // 这样可以兼容非点击方式展开
    setTimeout(function () {
      mousePosition = null;
    }, 100);
  };
  // 只有点击事件支持从鼠标位置动画展开
  if ((0, _styleChecker.canUseDocElement)()) {
    document.documentElement.addEventListener('click', getClickPosition, true);
  }
  var Modal = function Modal(props) {
    var _a;
    var _React$useContext = React.useContext(_index.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      modal = _React$useContext.modal;
    var handleCancel = function handleCancel(e) {
      var onCancel = props.onCancel;
      onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
    };
    var handleOk = function handleOk(e) {
      var onOk = props.onOk;
      onOk === null || onOk === void 0 ? void 0 : onOk(e);
    };
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Modal');
      [['visible', 'open'], ['bodyStyle', 'styles.body'], ['maskStyle', 'styles.mask']].forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          deprecatedName = _ref2[0],
          newName = _ref2[1];
        warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
      });
    }
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      open = props.open,
      wrapClassName = props.wrapClassName,
      centered = props.centered,
      getContainer = props.getContainer,
      closeIcon = props.closeIcon,
      closable = props.closable,
      _props$focusTriggerAf = props.focusTriggerAfterClose,
      focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
      style = props.style,
      visible = props.visible,
      _props$width = props.width,
      width = _props$width === void 0 ? 520 : _props$width,
      footer = props.footer,
      modalClassNames = props.classNames,
      modalStyles = props.styles,
      restProps = __rest(props, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "closable", "focusTriggerAfterClose", "style", "visible", "width", "footer", "classNames", "styles"]);
    var prefixCls = getPrefixCls('modal', customizePrefixCls);
    var rootPrefixCls = getPrefixCls();
    // Style
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var wrapClassNameExtended = (0, _classnames["default"])(wrapClassName, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-centered"), !!centered), "".concat(prefixCls, "-wrap-rtl"), direction === 'rtl'));
    var dialogFooter = footer !== null && ( /*#__PURE__*/React.createElement(_shared.Footer, Object.assign({}, props, {
      onOk: handleOk,
      onCancel: handleCancel
    })));
    var _useClosable = (0, _useClosable3["default"])(closable, typeof closeIcon !== 'undefined' ? closeIcon : modal === null || modal === void 0 ? void 0 : modal.closeIcon, function (icon) {
        return (0, _shared.renderCloseIcon)(prefixCls, icon);
      }, /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
        className: "".concat(prefixCls, "-close-icon")
      }), true),
      _useClosable2 = _slicedToArray(_useClosable, 2),
      mergedClosable = _useClosable2[0],
      mergedCloseIcon = _useClosable2[1];
    // ============================ Refs ============================
    // Select `ant-modal-content` by `panelRef`
    var panelRef = (0, _context2.usePanelRef)(".".concat(prefixCls, "-content"));
    // ============================ zIndex ============================
    var _useZIndex = (0, _useZIndex3.useZIndex)('Modal', restProps.zIndex),
      _useZIndex2 = _slicedToArray(_useZIndex, 2),
      zIndex = _useZIndex2[0],
      contextZIndex = _useZIndex2[1];
    // =========================== Render ===========================
    return wrapCSSVar( /*#__PURE__*/React.createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/React.createElement(_context.NoFormStyle, {
      status: true,
      override: true
    }, /*#__PURE__*/React.createElement(_zindexContext["default"].Provider, {
      value: contextZIndex
    }, /*#__PURE__*/React.createElement(_rcDialog["default"], Object.assign({
      width: width
    }, restProps, {
      zIndex: zIndex,
      getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
      prefixCls: prefixCls,
      rootClassName: (0, _classnames["default"])(hashId, rootClassName, cssVarCls, rootCls),
      footer: dialogFooter,
      visible: open !== null && open !== void 0 ? open : visible,
      mousePosition: (_a = restProps.mousePosition) !== null && _a !== void 0 ? _a : mousePosition,
      onClose: handleCancel,
      closable: mergedClosable,
      closeIcon: mergedCloseIcon,
      focusTriggerAfterClose: focusTriggerAfterClose,
      transitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'zoom', props.transitionName),
      maskTransitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'fade', props.maskTransitionName),
      className: (0, _classnames["default"])(hashId, className, modal === null || modal === void 0 ? void 0 : modal.className),
      style: Object.assign(Object.assign({}, modal === null || modal === void 0 ? void 0 : modal.style), style),
      classNames: Object.assign(Object.assign(Object.assign({}, modal === null || modal === void 0 ? void 0 : modal.classNames), modalClassNames), {
        wrapper: (0, _classnames["default"])(wrapClassNameExtended, modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.wrapper)
      }),
      styles: Object.assign(Object.assign({}, modal === null || modal === void 0 ? void 0 : modal.styles), modalStyles),
      panelRef: panelRef
    }))))));
  };
  var _default = _exports["default"] = Modal;
});