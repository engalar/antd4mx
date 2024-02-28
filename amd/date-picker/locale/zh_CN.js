define(["exports", "rc-picker/es/locale/zh_CN", "antd4mx/time-picker/locale/zh_CN"], function (_exports, _zh_CN, _zh_CN2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // 统一合并为完整的 Locale
  var locale = {
    lang: Object.assign({
      placeholder: '请选择日期',
      yearPlaceholder: '请选择年份',
      quarterPlaceholder: '请选择季度',
      monthPlaceholder: '请选择月份',
      weekPlaceholder: '请选择周',
      rangePlaceholder: ['开始日期', '结束日期'],
      rangeYearPlaceholder: ['开始年份', '结束年份'],
      rangeMonthPlaceholder: ['开始月份', '结束月份'],
      rangeQuarterPlaceholder: ['开始季度', '结束季度'],
      rangeWeekPlaceholder: ['开始周', '结束周']
    }, _zh_CN["default"]),
    timePickerLocale: Object.assign({}, _zh_CN2["default"])
  };
  // should add whitespace between char in Button
  locale.lang.ok = '确定';
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});