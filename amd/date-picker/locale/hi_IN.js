define(["exports", "rc-picker/es/locale/hi_IN", "antd4mx/time-picker/locale/hi_IN"], function (_exports, _hi_IN, _hi_IN2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'तारीख़ चुनें',
      yearPlaceholder: 'वर्ष चुनें',
      quarterPlaceholder: 'तिमाही चुनें',
      monthPlaceholder: 'महीना चुनिए',
      weekPlaceholder: 'सप्ताह चुनें',
      rangePlaceholder: ['प्रारंभ तिथि', 'समाप्ति तिथि'],
      rangeYearPlaceholder: ['आरंभिक वर्ष', 'अंत वर्ष'],
      rangeMonthPlaceholder: ['आरंभिक महीना', 'अंत महीना'],
      rangeWeekPlaceholder: ['आरंभिक सप्ताह', 'अंत सप्ताह']
    }, _hi_IN["default"]),
    timePickerLocale: Object.assign({}, _hi_IN2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});