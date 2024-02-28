define(["exports", "rc-picker/es/locale/hr_HR", "antd4mx/time-picker/locale/hr_HR"], function (_exports, _hr_HR, _hr_HR2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Odaberite datum',
      yearPlaceholder: 'Odaberite godinu',
      quarterPlaceholder: 'Odaberite četvrtinu',
      monthPlaceholder: 'Odaberite mjesec',
      weekPlaceholder: 'Odaberite tjedan',
      rangePlaceholder: ['Početni datum', 'Završni datum'],
      rangeYearPlaceholder: ['Početna godina', 'Završna godina'],
      rangeMonthPlaceholder: ['Početni mjesec', 'Završni mjesec'],
      rangeWeekPlaceholder: ['Početni tjedan', 'Završni tjedan']
    }, _hr_HR["default"]),
    timePickerLocale: Object.assign({}, _hr_HR2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});