define(["exports", "rc-picker/es/locale/zh_TW", "antd4mx/time-picker/locale/zh_TW"], function (_exports, _zh_TW, _zh_TW2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // 统一合并为完整的 Locale
  var locale = {
    lang: Object.assign({
      placeholder: '請選擇日期',
      yearPlaceholder: '請選擇年份',
      quarterPlaceholder: '請選擇季度',
      monthPlaceholder: '請選擇月份',
      weekPlaceholder: '請選擇周',
      rangePlaceholder: ['開始日期', '結束日期'],
      rangeYearPlaceholder: ['開始年份', '結束年份'],
      rangeMonthPlaceholder: ['開始月份', '結束月份'],
      rangeQuarterPlaceholder: ['開始季度', '結束季度'],
      rangeWeekPlaceholder: ['開始周', '結束周']
    }, _zh_TW["default"]),
    timePickerLocale: Object.assign({}, _zh_TW2["default"])
  };
  locale.lang.ok = '確 定';
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});