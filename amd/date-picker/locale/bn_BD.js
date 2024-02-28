define(["exports", "rc-picker/es/locale/bn_BD", "antd4mx/time-picker/locale/bn_BD"], function (_exports, _bn_BD, _bn_BD2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'তারিখ নির্বাচন',
      yearPlaceholder: 'বছর নির্বাচন',
      quarterPlaceholder: 'কোয়ার্টার নির্বাচন',
      monthPlaceholder: 'মাস নির্বাচন',
      weekPlaceholder: 'সপ্তাহ নির্বাচন',
      rangePlaceholder: ['শুরুর তারিখ', 'শেষ তারিখ'],
      rangeYearPlaceholder: ['শুরুর বছর', 'শেষ বছর'],
      rangeMonthPlaceholder: ['শুরুর মাস', 'শেষ মাস'],
      rangeWeekPlaceholder: ['শুরুর সপ্তাহ', 'শেষ সপ্তাহ']
    }, _bn_BD["default"]),
    timePickerLocale: Object.assign({}, _bn_BD2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});