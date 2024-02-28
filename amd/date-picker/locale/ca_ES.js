define(["exports", "rc-picker/es/locale/ca_ES", "antd4mx/time-picker/locale/ca_ES"], function (_exports, _ca_ES, _ca_ES2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Seleccionar data',
      rangePlaceholder: ['Data inicial', 'Data final']
    }, _ca_ES["default"]),
    timePickerLocale: Object.assign({}, _ca_ES2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});