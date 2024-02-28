define(["exports", "rc-picker/es/locale/ar_EG", "antd4mx/time-picker/locale/ar_EG"], function (_exports, _ar_EG, _ar_EG2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'اختيار التاريخ',
      rangePlaceholder: ['البداية', 'النهاية']
    }, _ar_EG["default"]),
    timePickerLocale: Object.assign({}, _ar_EG2["default"]),
    dateFormat: 'DD-MM-YYYY',
    monthFormat: 'MM-YYYY',
    dateTimeFormat: 'DD-MM-YYYY HH:mm:ss',
    weekFormat: 'wo-YYYY'
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});