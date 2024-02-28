define(["exports", "rc-picker/es/locale/he_IL", "antd4mx/time-picker/locale/he_IL"], function (_exports, _he_IL, _he_IL2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'בחר תאריך',
      rangePlaceholder: ['תאריך התחלה', 'תאריך סיום']
    }, _he_IL["default"]),
    timePickerLocale: Object.assign({}, _he_IL2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});