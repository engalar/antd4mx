define(["exports", "rc-picker/es/locale/lt_LT", "antd4mx/time-picker/locale/lt_LT"], function (_exports, _lt_LT, _lt_LT2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Pasirinkite datą',
      yearPlaceholder: 'Pasirinkite metus',
      quarterPlaceholder: 'Pasirinkite ketvirtį',
      monthPlaceholder: 'Pasirinkite mėnesį',
      weekPlaceholder: 'Pasirinkite savaitę',
      rangePlaceholder: ['Pradžios data', 'Pabaigos data'],
      rangeYearPlaceholder: ['Pradžios metai', 'Pabaigos metai'],
      rangeQuarterPlaceholder: ['Pradžios ketvirtis', 'Pabaigos ketvirtis'],
      rangeMonthPlaceholder: ['Pradžios mėnesis', 'Pabaigos mėnesis'],
      rangeWeekPlaceholder: ['Pradžios savaitė', 'Pabaigos savaitė']
    }, _lt_LT["default"]),
    timePickerLocale: Object.assign({}, _lt_LT2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});