define(["exports", "rc-picker/es/locale/uk_UA", "antd4mx/time-picker/locale/uk_UA"], function (_exports, _uk_UA, _uk_UA2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Оберіть дату',
      rangePlaceholder: ['Початкова дата', 'Кінцева дата']
    }, _uk_UA["default"]),
    timePickerLocale: Object.assign({}, _uk_UA2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});