define(["exports", "rc-picker/es/locale/ur_PK", "antd4mx/time-picker/locale/ur_PK"], function (_exports, _ur_PK, _ur_PK2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'تاریخ منتخب کریں',
      yearPlaceholder: 'سال کو منتخب کریں',
      quarterPlaceholder: 'کوارٹر منتخب کریں',
      monthPlaceholder: 'ماہ منتخب کریں',
      weekPlaceholder: 'ہفتہ منتخب کریں',
      rangePlaceholder: ['شروع کرنے کی تاریخ', 'آخری تاریخ'],
      rangeYearPlaceholder: ['آغاز سال', 'آخر سال'],
      rangeMonthPlaceholder: ['مہینہ شروع', 'اختتامی مہینہ'],
      rangeWeekPlaceholder: ['ہفتے شروع کریں', 'اختتام ہفتہ']
    }, _ur_PK["default"]),
    timePickerLocale: Object.assign({}, _ur_PK2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});