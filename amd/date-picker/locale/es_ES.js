define(["exports", "rc-picker/es/locale/es_ES", "antd4mx/time-picker/locale/es_ES"], function (_exports, _es_ES, _es_ES2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Seleccionar fecha',
      rangePlaceholder: ['Fecha inicial', 'Fecha final']
    }, _es_ES["default"]),
    timePickerLocale: Object.assign({}, _es_ES2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});