define(["exports", "antd4mx/_util/warning", "antd4mx/form/ErrorList", "antd4mx/form/Form", "antd4mx/form/FormItem", "antd4mx/form/FormList", "antd4mx/form/context", "antd4mx/form/hooks/useFormInstance"], function (_exports, _warning, _ErrorList, _Form, _FormItem, _FormList, _context, _useFormInstance) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var Form = _Form["default"];
  Form.Item = _FormItem["default"];
  Form.List = _FormList["default"];
  Form.ErrorList = _ErrorList["default"];
  Form.useForm = _Form.useForm;
  Form.useFormInstance = _useFormInstance["default"];
  Form.useWatch = _Form.useWatch;
  Form.Provider = _context.FormProvider;
  Form.create = function () {
    process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'Form', 'antd v4 removed `Form.create`. Please remove or use `@ant-design/compatible` instead.') : void 0;
  };
  var _default = _exports["default"] = Form;
});