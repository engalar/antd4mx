define(["exports", "rc-picker/es/locale/fa_IR", "antd4mx/time-picker/locale/fa_IR"], function (_exports, _fa_IR, _fa_IR2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'انتخاب تاریخ',
      yearPlaceholder: 'انتخاب سال',
      quarterPlaceholder: 'انتخاب فصل',
      monthPlaceholder: 'انتخاب ماه',
      weekPlaceholder: 'انتخاب هفته',
      rangePlaceholder: ['تاریخ شروع', 'تاریخ پایان'],
      rangeYearPlaceholder: ['سال شروع', 'سال پایان'],
      rangeQuarterPlaceholder: ['فصل شروع', 'فصل پایان'],
      rangeMonthPlaceholder: ['ماه شروع', 'ماه پایان'],
      rangeWeekPlaceholder: ['هفته شروع', 'هفته پایان']
    }, _fa_IR["default"]),
    timePickerLocale: Object.assign({}, _fa_IR2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});