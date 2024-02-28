define(["exports", "rc-picker/es/locale/eu_ES", "antd4mx/time-picker/locale/eu_ES"], function (_exports, _eu_ES, _eu_ES2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Hautatu data',
      rangePlaceholder: ['Hasierako data', 'Amaiera data']
    }, _eu_ES["default"]),
    timePickerLocale: Object.assign({}, _eu_ES2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});