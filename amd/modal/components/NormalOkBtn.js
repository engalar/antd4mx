define(["exports", "react", "antd4mx/button", "antd4mx/button/buttonHelpers", "antd4mx/modal/context"], function (_exports, _react, _button, _buttonHelpers, _context) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var NormalOkBtn = function NormalOkBtn() {
    var _useContext = (0, _react.useContext)(_context.ModalContext),
      confirmLoading = _useContext.confirmLoading,
      okButtonProps = _useContext.okButtonProps,
      okType = _useContext.okType,
      okTextLocale = _useContext.okTextLocale,
      onOk = _useContext.onOk;
    return /*#__PURE__*/_react["default"].createElement(_button["default"], Object.assign({}, (0, _buttonHelpers.convertLegacyProps)(okType), {
      loading: confirmLoading,
      onClick: onOk
    }, okButtonProps), okTextLocale);
  };
  var _default = _exports["default"] = NormalOkBtn;
});