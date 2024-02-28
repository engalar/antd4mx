define(["exports", "react", "rc-field-form", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/form/context"], function (_exports, React, _rcFieldForm, _warning, _configProvider, _context) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var FormList = function FormList(_a) {
    var customizePrefixCls = _a.prefixCls,
      children = _a.children,
      props = __rest(_a, ["prefixCls", "children"]);
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Form.List');
      process.env.NODE_ENV !== "production" ? warning(typeof props.name === 'number' || (Array.isArray(props.name) ? !!props.name.length : !!props.name), 'usage', 'Miss `name` prop.') : void 0;
    }
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('form', customizePrefixCls);
    var contextValue = React.useMemo(function () {
      return {
        prefixCls: prefixCls,
        status: 'error'
      };
    }, [prefixCls]);
    return /*#__PURE__*/React.createElement(_rcFieldForm.List, Object.assign({}, props), function (fields, operation, meta) {
      return /*#__PURE__*/React.createElement(_context.FormItemPrefixContext.Provider, {
        value: contextValue
      }, children(fields.map(function (field) {
        return Object.assign(Object.assign({}, field), {
          fieldKey: field.key
        });
      }), operation, {
        errors: meta.errors,
        warnings: meta.warnings
      }));
    });
  };
  var _default = _exports["default"] = FormList;
});