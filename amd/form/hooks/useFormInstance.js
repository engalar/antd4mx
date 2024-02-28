define(["exports", "react", "antd4mx/form/context"], function (_exports, _react, _context) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useFormInstance;
  function useFormInstance() {
    var _useContext = (0, _react.useContext)(_context.FormContext),
      form = _useContext.form;
    return form;
  }
});