define(["exports", "react", "antd4mx/_util/warning", "antd4mx/form/context"], function (_exports, _react, _warning, _context) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var useFormItemStatus = function useFormItemStatus() {
    var _useContext = (0, _react.useContext)(_context.FormItemInputContext),
      status = _useContext.status,
      _useContext$errors = _useContext.errors,
      errors = _useContext$errors === void 0 ? [] : _useContext$errors,
      _useContext$warnings = _useContext.warnings,
      warnings = _useContext$warnings === void 0 ? [] : _useContext$warnings;
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Form.Item');
      process.env.NODE_ENV !== "production" ? warning(status !== undefined, 'usage', 'Form.Item.useStatus should be used under Form.Item component. For more information: https://u.ant.design/form-item-usestatus') : void 0;
    }
    return {
      status: status,
      errors: errors,
      warnings: warnings
    };
  };
  // Only used for compatible package. Not promise this will work on future version.
  useFormItemStatus.Context = _context.FormItemInputContext;
  var _default = _exports["default"] = useFormItemStatus;
});