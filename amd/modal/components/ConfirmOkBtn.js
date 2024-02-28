define(["exports", "react", "antd4mx/_util/ActionButton", "antd4mx/modal/context"], function (_exports, _react, _ActionButton, _context) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var ConfirmOkBtn = function ConfirmOkBtn() {
    var _useContext = (0, _react.useContext)(_context.ModalContext),
      autoFocusButton = _useContext.autoFocusButton,
      _close = _useContext.close,
      isSilent = _useContext.isSilent,
      okButtonProps = _useContext.okButtonProps,
      rootPrefixCls = _useContext.rootPrefixCls,
      okTextLocale = _useContext.okTextLocale,
      okType = _useContext.okType,
      onConfirm = _useContext.onConfirm,
      onOk = _useContext.onOk;
    return /*#__PURE__*/_react["default"].createElement(_ActionButton["default"], {
      isSilent: isSilent,
      type: okType || 'primary',
      actionFn: onOk,
      close: function close() {
        _close === null || _close === void 0 ? void 0 : _close.apply(void 0, arguments);
        onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(true);
      },
      autoFocus: autoFocusButton === 'ok',
      buttonProps: okButtonProps,
      prefixCls: "".concat(rootPrefixCls, "-btn")
    }, okTextLocale);
  };
  var _default = _exports["default"] = ConfirmOkBtn;
});