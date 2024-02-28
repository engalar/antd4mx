define(["exports", "react", "antd4mx/button", "antd4mx/modal/context"], function (_exports, _react, _button, _context) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var NormalCancelBtn = function NormalCancelBtn() {
    var _useContext = (0, _react.useContext)(_context.ModalContext),
      cancelButtonProps = _useContext.cancelButtonProps,
      cancelTextLocale = _useContext.cancelTextLocale,
      onCancel = _useContext.onCancel;
    return /*#__PURE__*/_react["default"].createElement(_button["default"], Object.assign({
      onClick: onCancel
    }, cancelButtonProps), cancelTextLocale);
  };
  var _default = _exports["default"] = NormalCancelBtn;
});