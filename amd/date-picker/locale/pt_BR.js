define(["exports", "rc-picker/es/locale/pt_BR", "antd4mx/time-picker/locale/pt_BR"], function (_exports, _pt_BR, _pt_BR2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Selecionar data',
      rangePlaceholder: ['Data inicial', 'Data final']
    }, _pt_BR["default"]),
    timePickerLocale: Object.assign({}, _pt_BR2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});