define(["exports", "@ant-design/icons/es/icons/ExclamationCircleFilled", "classnames", "react", "antd4mx/_util/ActionButton", "antd4mx/_util/getRenderPropValue", "antd4mx/button", "antd4mx/button/buttonHelpers", "antd4mx/config-provider", "antd4mx/locale", "antd4mx/locale/en_US", "antd4mx/popover/PurePanel", "antd4mx/popconfirm/style"], function (_exports, _ExclamationCircleFilled, _classnames, React, _ActionButton, _getRenderPropValue, _button, _buttonHelpers, _configProvider, _locale, _en_US, _PurePanel, _style) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.Overlay = void 0;
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
  var Overlay = _exports.Overlay = function Overlay(props) {
    var prefixCls = props.prefixCls,
      okButtonProps = props.okButtonProps,
      cancelButtonProps = props.cancelButtonProps,
      title = props.title,
      description = props.description,
      cancelText = props.cancelText,
      okText = props.okText,
      _props$okType = props.okType,
      okType = _props$okType === void 0 ? 'primary' : _props$okType,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? /*#__PURE__*/React.createElement(_ExclamationCircleFilled["default"], null) : _props$icon,
      _props$showCancel = props.showCancel,
      showCancel = _props$showCancel === void 0 ? true : _props$showCancel,
      close = props.close,
      onConfirm = props.onConfirm,
      onCancel = props.onCancel,
      onPopupClick = props.onPopupClick;
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var _useLocale = (0, _locale.useLocale)('Popconfirm', _en_US["default"].Popconfirm),
      _useLocale2 = _slicedToArray(_useLocale, 1),
      contextLocale = _useLocale2[0];
    var theTitle = (0, _getRenderPropValue.getRenderPropValue)(title);
    var theDescription = (0, _getRenderPropValue.getRenderPropValue)(description);
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-inner-content"),
      onClick: onPopupClick
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-message")
    }, icon && /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-message-icon")
    }, icon), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-message-text")
    }, theTitle && /*#__PURE__*/React.createElement("div", {
      className: (0, _classnames["default"])("".concat(prefixCls, "-title"))
    }, theTitle), theDescription && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, theDescription))), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-buttons")
    }, showCancel && ( /*#__PURE__*/React.createElement(_button["default"], Object.assign({
      onClick: onCancel,
      size: "small"
    }, cancelButtonProps), cancelText || (contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.cancelText))), /*#__PURE__*/React.createElement(_ActionButton["default"], {
      buttonProps: Object.assign(Object.assign({
        size: 'small'
      }, (0, _buttonHelpers.convertLegacyProps)(okType)), okButtonProps),
      actionFn: onConfirm,
      close: close,
      prefixCls: getPrefixCls('btn'),
      quitOnNullishReturnValue: true,
      emitEvent: true
    }, okText || (contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.okText))));
  };
  var PurePanel = function PurePanel(props) {
    var customizePrefixCls = props.prefixCls,
      placement = props.placement,
      className = props.className,
      style = props.style,
      restProps = __rest(props, ["prefixCls", "placement", "className", "style"]);
    var _React$useContext2 = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext2.getPrefixCls;
    var prefixCls = getPrefixCls('popconfirm', customizePrefixCls);
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 1),
      wrapCSSVar = _useStyle2[0];
    return wrapCSSVar( /*#__PURE__*/React.createElement(_PurePanel["default"], {
      placement: placement,
      className: (0, _classnames["default"])(prefixCls, className),
      style: style,
      content: /*#__PURE__*/React.createElement(Overlay, Object.assign({
        prefixCls: prefixCls
      }, restProps))
    }));
  };
  var _default = _exports["default"] = PurePanel;
});