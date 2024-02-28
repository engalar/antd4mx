define(["exports", "rc-picker/es/locale/km_KH", "antd4mx/time-picker/locale/km_KH"], function (_exports, _km_KH, _km_KH2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'រើសថ្ងៃ',
      yearPlaceholder: 'រើសឆ្នាំ',
      quarterPlaceholder: 'រើសត្រីមាស',
      monthPlaceholder: 'រើសខែ',
      weekPlaceholder: 'រើសសប្តាហ៍',
      rangePlaceholder: ['ថ្ងៃចាប់ផ្ដើម', 'ថ្ងៃបញ្ចប់'],
      rangeYearPlaceholder: ['ឆ្នាំចាប់ផ្ដើម', 'ឆ្នាំបញ្ចប់'],
      rangeMonthPlaceholder: ['ខែចាប់ផ្ដើម', 'ខែបញ្ចប់'],
      rangeWeekPlaceholder: ['សប្ដាហ៍ចាប់ផ្ដើម', 'សប្ដាហ៍បញ្ចប់']
    }, _km_KH["default"]),
    timePickerLocale: Object.assign({}, _km_KH2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});