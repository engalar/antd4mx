define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "@ant-design/icons/es/icons/CloseOutlined", "antd4mx/config-provider/DisabledContext", "antd4mx/locale", "antd4mx/modal/components/NormalCancelBtn", "antd4mx/modal/components/NormalOkBtn", "antd4mx/modal/context", "antd4mx/modal/locale"], function (_exports, _toConsumableArray2, _react, _CloseOutlined, _DisabledContext, _locale, _NormalCancelBtn, _NormalOkBtn, _context, _locale2) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Footer = void 0;
  _exports.renderCloseIcon = renderCloseIcon;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function renderCloseIcon(prefixCls, closeIcon) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(prefixCls, "-close-x")
    }, closeIcon || /*#__PURE__*/_react["default"].createElement(_CloseOutlined["default"], {
      className: "".concat(prefixCls, "-close-icon")
    }));
  }
  var Footer = _exports.Footer = function Footer(props) {
    var okText = props.okText,
      _props$okType = props.okType,
      okType = _props$okType === void 0 ? 'primary' : _props$okType,
      cancelText = props.cancelText,
      confirmLoading = props.confirmLoading,
      onOk = props.onOk,
      onCancel = props.onCancel,
      okButtonProps = props.okButtonProps,
      cancelButtonProps = props.cancelButtonProps,
      footer = props.footer;
    var _useLocale = (0, _locale.useLocale)('Modal', (0, _locale2.getConfirmLocale)()),
      _useLocale2 = _slicedToArray(_useLocale, 1),
      locale = _useLocale2[0];
    // ================== Locale Text ==================
    var okTextLocale = okText || (locale === null || locale === void 0 ? void 0 : locale.okText);
    var cancelTextLocale = cancelText || (locale === null || locale === void 0 ? void 0 : locale.cancelText);
    // ================= Context Value =================
    var btnCtxValue = {
      confirmLoading: confirmLoading,
      okButtonProps: okButtonProps,
      cancelButtonProps: cancelButtonProps,
      okTextLocale: okTextLocale,
      cancelTextLocale: cancelTextLocale,
      okType: okType,
      onOk: onOk,
      onCancel: onCancel
    };
    var btnCtxValueMemo = _react["default"].useMemo(function () {
      return btnCtxValue;
    }, (0, _toConsumableArray2["default"])(Object.values(btnCtxValue)));
    var footerNode;
    if (typeof footer === 'function' || typeof footer === 'undefined') {
      footerNode = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_NormalCancelBtn["default"], null), /*#__PURE__*/_react["default"].createElement(_NormalOkBtn["default"], null));
      if (typeof footer === 'function') {
        footerNode = footer(footerNode, {
          OkBtn: _NormalOkBtn["default"],
          CancelBtn: _NormalCancelBtn["default"]
        });
      }
      footerNode = /*#__PURE__*/_react["default"].createElement(_context.ModalContextProvider, {
        value: btnCtxValueMemo
      }, footerNode);
    } else {
      footerNode = footer;
    }
    return /*#__PURE__*/_react["default"].createElement(_DisabledContext.DisabledContextProvider, {
      disabled: false
    }, footerNode);
  };
});