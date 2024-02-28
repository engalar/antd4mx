define(["exports", "react", "antd4mx/_util/ActionButton", "antd4mx/modal/context"], function (_exports, _react, _ActionButton, _context) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var ConfirmCancelBtn = function ConfirmCancelBtn() {
    var _useContext = (0, _react.useContext)(_context.ModalContext),
      autoFocusButton = _useContext.autoFocusButton,
      cancelButtonProps = _useContext.cancelButtonProps,
      cancelTextLocale = _useContext.cancelTextLocale,
      isSilent = _useContext.isSilent,
      mergedOkCancel = _useContext.mergedOkCancel,
      rootPrefixCls = _useContext.rootPrefixCls,
      _close = _useContext.close,
      onCancel = _useContext.onCancel,
      onConfirm = _useContext.onConfirm;
    return mergedOkCancel ? ( /*#__PURE__*/_react["default"].createElement(_ActionButton["default"], {
      isSilent: isSilent,
      actionFn: onCancel,
      close: function close() {
        _close === null || _close === void 0 ? void 0 : _close.apply(void 0, arguments);
        onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(false);
      },
      autoFocus: autoFocusButton === 'cancel',
      buttonProps: cancelButtonProps,
      prefixCls: "".concat(rootPrefixCls, "-btn")
    }, cancelTextLocale)) : null;
  };
  var _default = _exports["default"] = ConfirmCancelBtn;
});