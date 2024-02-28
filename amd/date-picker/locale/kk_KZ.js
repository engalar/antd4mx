define(["exports", "rc-picker/es/locale/kk_KZ", "antd4mx/time-picker/locale/kk_KZ"], function (_exports, _kk_KZ, _kk_KZ2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Күнді таңдаңыз',
      yearPlaceholder: 'Жылды таңдаңыз',
      quarterPlaceholder: 'Тоқсанды таңдаңыз',
      monthPlaceholder: 'Айды таңдаңыз',
      weekPlaceholder: 'Аптаны таңдаңыз',
      rangePlaceholder: ['Бастау күні', 'Аяқталу күні'],
      rangeYearPlaceholder: ['Бастау жылы', 'Аяқталу жылы'],
      rangeMonthPlaceholder: ['Бастау айы', 'Аяқталу айы'],
      rangeWeekPlaceholder: ['Бастау апта', 'Аяқталу апта']
    }, _kk_KZ["default"]),
    timePickerLocale: Object.assign({}, _kk_KZ2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});