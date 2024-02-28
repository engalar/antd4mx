define(["exports", "rc-picker/es/locale/vi_VN", "antd4mx/time-picker/locale/vi_VN"], function (_exports, _vi_VN, _vi_VN2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Chọn thời điểm',
      yearPlaceholder: 'Chọn năm',
      quarterPlaceholder: 'Chọn quý',
      monthPlaceholder: 'Chọn tháng',
      weekPlaceholder: 'Chọn tuần',
      rangePlaceholder: ['Ngày bắt đầu', 'Ngày kết thúc'],
      rangeYearPlaceholder: ['Năm bắt đầu', 'Năm kết thúc'],
      rangeQuarterPlaceholder: ['Quý bắt đầu', 'Quý kết thúc'],
      rangeMonthPlaceholder: ['Tháng bắt đầu', 'Tháng kết thúc'],
      rangeWeekPlaceholder: ['Tuần bắt đầu', 'Tuần kết thúc']
    }, _vi_VN["default"]),
    timePickerLocale: Object.assign({}, _vi_VN2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});