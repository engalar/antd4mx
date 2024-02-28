function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "@ant-design/icons/es/icons/CheckCircleFilled", "@ant-design/icons/es/icons/CloseCircleFilled", "@ant-design/icons/es/icons/ExclamationCircleFilled", "@ant-design/icons/es/icons/InfoCircleFilled", "classnames", "antd4mx/_util/hooks/useZIndex", "antd4mx/_util/motion", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/locale/index", "antd4mx/theme/useToken", "antd4mx/modal/components/ConfirmCancelBtn", "antd4mx/modal/components/ConfirmOkBtn", "antd4mx/modal/context", "antd4mx/modal/Modal", "antd4mx/modal/style/confirm"], function (_exports, _toConsumableArray2, React, _CheckCircleFilled, _CloseCircleFilled, _ExclamationCircleFilled, _InfoCircleFilled, _classnames, _useZIndex, _motion, _warning, _index, _index2, _useToken3, _ConfirmCancelBtn, _ConfirmOkBtn, _context, _Modal, _confirm) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ConfirmContent = ConfirmContent;
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
  function ConfirmContent(props) {
    var prefixCls = props.prefixCls,
      icon = props.icon,
      okText = props.okText,
      cancelText = props.cancelText,
      confirmPrefixCls = props.confirmPrefixCls,
      type = props.type,
      okCancel = props.okCancel,
      footer = props.footer,
      staticLocale = props.locale,
      resetProps = __rest(props, ["prefixCls", "icon", "okText", "cancelText", "confirmPrefixCls", "type", "okCancel", "footer", "locale"]);
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Modal');
      process.env.NODE_ENV !== "production" ? warning(!(typeof icon === 'string' && icon.length > 2), 'breaking', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon")) : void 0;
    }
    // Icon
    var mergedIcon = icon;
    // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon
    if (!icon && icon !== null) {
      switch (type) {
        case 'info':
          mergedIcon = /*#__PURE__*/React.createElement(_InfoCircleFilled["default"], null);
          break;
        case 'success':
          mergedIcon = /*#__PURE__*/React.createElement(_CheckCircleFilled["default"], null);
          break;
        case 'error':
          mergedIcon = /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null);
          break;
        default:
          mergedIcon = /*#__PURE__*/React.createElement(_ExclamationCircleFilled["default"], null);
      }
    }
    // 默认为 true，保持向下兼容
    var mergedOkCancel = okCancel !== null && okCancel !== void 0 ? okCancel : type === 'confirm';
    var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
    var _useLocale = (0, _index2.useLocale)('Modal'),
      _useLocale2 = _slicedToArray(_useLocale, 1),
      locale = _useLocale2[0];
    var mergedLocale = staticLocale || locale;
    // ================== Locale Text ==================
    var okTextLocale = okText || (mergedOkCancel ? mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.okText : mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.justOkText);
    var cancelTextLocale = cancelText || (mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.cancelText);
    // ================= Context Value =================
    var btnCtxValue = Object.assign({
      autoFocusButton: autoFocusButton,
      cancelTextLocale: cancelTextLocale,
      okTextLocale: okTextLocale,
      mergedOkCancel: mergedOkCancel
    }, resetProps);
    var btnCtxValueMemo = React.useMemo(function () {
      return btnCtxValue;
    }, (0, _toConsumableArray2["default"])(Object.values(btnCtxValue)));
    // ====================== Footer Origin Node ======================
    var footerOriginNode = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_ConfirmCancelBtn["default"], null), /*#__PURE__*/React.createElement(_ConfirmOkBtn["default"], null));
    var hasTitle = props.title !== undefined && props.title !== null;
    var bodyCls = "".concat(confirmPrefixCls, "-body");
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(confirmPrefixCls, "-body-wrapper")
    }, /*#__PURE__*/React.createElement("div", {
      className: (0, _classnames["default"])(bodyCls, _defineProperty({}, "".concat(bodyCls, "-has-title"), hasTitle))
    }, mergedIcon, /*#__PURE__*/React.createElement("div", {
      className: "".concat(confirmPrefixCls, "-paragraph")
    }, hasTitle && /*#__PURE__*/React.createElement("span", {
      className: "".concat(confirmPrefixCls, "-title")
    }, props.title), /*#__PURE__*/React.createElement("div", {
      className: "".concat(confirmPrefixCls, "-content")
    }, props.content))), footer === undefined || typeof footer === 'function' ? ( /*#__PURE__*/React.createElement(_context.ModalContextProvider, {
      value: btnCtxValueMemo
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(confirmPrefixCls, "-btns")
    }, typeof footer === 'function' ? footer(footerOriginNode, {
      OkBtn: _ConfirmOkBtn["default"],
      CancelBtn: _ConfirmCancelBtn["default"]
    }) : footerOriginNode))) : footer, /*#__PURE__*/React.createElement(_confirm["default"], {
      prefixCls: prefixCls
    }));
  }
  var ConfirmDialog = function ConfirmDialog(props) {
    var close = props.close,
      zIndex = props.zIndex,
      afterClose = props.afterClose,
      open = props.open,
      keyboard = props.keyboard,
      centered = props.centered,
      getContainer = props.getContainer,
      maskStyle = props.maskStyle,
      direction = props.direction,
      prefixCls = props.prefixCls,
      wrapClassName = props.wrapClassName,
      rootPrefixCls = props.rootPrefixCls,
      bodyStyle = props.bodyStyle,
      _props$closable = props.closable,
      closable = _props$closable === void 0 ? false : _props$closable,
      closeIcon = props.closeIcon,
      modalRender = props.modalRender,
      focusTriggerAfterClose = props.focusTriggerAfterClose,
      onConfirm = props.onConfirm,
      styles = props.styles;
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Modal');
      [['visible', 'open'], ['bodyStyle', 'styles.body'], ['maskStyle', 'styles.mask']].forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          deprecatedName = _ref2[0],
          newName = _ref2[1];
        warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
      });
    }
    var confirmPrefixCls = "".concat(prefixCls, "-confirm");
    var width = props.width || 416;
    var style = props.style || {};
    var mask = props.mask === undefined ? true : props.mask;
    // 默认为 false，保持旧版默认行为
    var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
    var classString = (0, _classnames["default"])(confirmPrefixCls, "".concat(confirmPrefixCls, "-").concat(props.type), _defineProperty({}, "".concat(confirmPrefixCls, "-rtl"), direction === 'rtl'), props.className);
    // ========================= zIndex =========================
    var _useToken = (0, _useToken3["default"])(),
      _useToken2 = _slicedToArray(_useToken, 2),
      token = _useToken2[1];
    var mergedZIndex = React.useMemo(function () {
      if (zIndex !== undefined) {
        return zIndex;
      }
      // Static always use max zIndex
      return token.zIndexPopupBase + _useZIndex.CONTAINER_MAX_OFFSET;
    }, [zIndex, token]);
    // ========================= Render =========================
    return /*#__PURE__*/React.createElement(_Modal["default"], {
      prefixCls: prefixCls,
      className: classString,
      wrapClassName: (0, _classnames["default"])(_defineProperty({}, "".concat(confirmPrefixCls, "-centered"), !!props.centered), wrapClassName),
      onCancel: function onCancel() {
        close === null || close === void 0 ? void 0 : close({
          triggerCancel: true
        });
        onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(false);
      },
      open: open,
      title: "",
      footer: null,
      transitionName: (0, _motion.getTransitionName)(rootPrefixCls || '', 'zoom', props.transitionName),
      maskTransitionName: (0, _motion.getTransitionName)(rootPrefixCls || '', 'fade', props.maskTransitionName),
      mask: mask,
      maskClosable: maskClosable,
      style: style,
      styles: Object.assign({
        body: bodyStyle,
        mask: maskStyle
      }, styles),
      width: width,
      zIndex: mergedZIndex,
      afterClose: afterClose,
      keyboard: keyboard,
      centered: centered,
      getContainer: getContainer,
      closable: closable,
      closeIcon: closeIcon,
      modalRender: modalRender,
      focusTriggerAfterClose: focusTriggerAfterClose
    }, /*#__PURE__*/React.createElement(ConfirmContent, Object.assign({}, props, {
      confirmPrefixCls: confirmPrefixCls
    })));
  };
  var ConfirmDialogWrapper = function ConfirmDialogWrapper(props) {
    var rootPrefixCls = props.rootPrefixCls,
      iconPrefixCls = props.iconPrefixCls,
      direction = props.direction,
      theme = props.theme;
    return /*#__PURE__*/React.createElement(_index["default"], {
      prefixCls: rootPrefixCls,
      iconPrefixCls: iconPrefixCls,
      direction: direction,
      theme: theme
    }, /*#__PURE__*/React.createElement(ConfirmDialog, Object.assign({}, props)));
  };
  if (process.env.NODE_ENV !== 'production') {
    ConfirmDialog.displayName = 'ConfirmDialog';
    ConfirmDialogWrapper.displayName = 'ConfirmDialogWrapper';
  }
  var _default = _exports["default"] = ConfirmDialogWrapper;
});