define(["exports", "react", "rc-field-form", "rc-util/es/omit"], function (_exports, _react, _rcFieldForm, _omit) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.VariantContext = _exports.NoStyleItemContext = _exports.NoFormStyle = _exports.FormProvider = _exports.FormItemPrefixContext = _exports.FormItemInputContext = _exports.FormContext = void 0;
  var React = _react;
  var FormContext = _exports.FormContext = /*#__PURE__*/React.createContext({
    labelAlign: 'right',
    vertical: false,
    itemRef: function itemRef() {}
  });
  var NoStyleItemContext = _exports.NoStyleItemContext = /*#__PURE__*/React.createContext(null);
  var FormProvider = _exports.FormProvider = function FormProvider(props) {
    var providerProps = (0, _omit["default"])(props, ['prefixCls']);
    return /*#__PURE__*/React.createElement(_rcFieldForm.FormProvider, Object.assign({}, providerProps));
  };
  var FormItemPrefixContext = _exports.FormItemPrefixContext = /*#__PURE__*/React.createContext({
    prefixCls: ''
  });
  var FormItemInputContext = _exports.FormItemInputContext = /*#__PURE__*/React.createContext({});
  if (process.env.NODE_ENV !== 'production') {
    FormItemInputContext.displayName = 'FormItemInputContext';
  }
  var NoFormStyle = _exports.NoFormStyle = function NoFormStyle(_ref) {
    var children = _ref.children,
      status = _ref.status,
      override = _ref.override;
    var formItemInputContext = (0, _react.useContext)(FormItemInputContext);
    var newFormItemInputContext = (0, _react.useMemo)(function () {
      var newContext = Object.assign({}, formItemInputContext);
      if (override) {
        delete newContext.isFormItemInput;
      }
      if (status) {
        delete newContext.status;
        delete newContext.hasFeedback;
        delete newContext.feedbackIcon;
      }
      return newContext;
    }, [status, override, formItemInputContext]);
    return /*#__PURE__*/React.createElement(FormItemInputContext.Provider, {
      value: newFormItemInputContext
    }, children);
  };
  var VariantContext = _exports.VariantContext = /*#__PURE__*/(0, _react.createContext)(undefined);
});