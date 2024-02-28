define(["exports", "rc-picker/es/locale/th_TH", "antd4mx/time-picker/locale/th_TH"], function (_exports, _th_TH, _th_TH2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'เลือกวันที่',
      yearPlaceholder: 'เลือกปี',
      quarterPlaceholder: 'เลือกไตรมาส',
      monthPlaceholder: 'เลือกเดือน',
      weekPlaceholder: 'เลือกสัปดาห์',
      rangePlaceholder: ['วันเริ่มต้น', 'วันสิ้นสุด'],
      rangeYearPlaceholder: ['ปีเริ่มต้น', 'ปีสิ้นสุด'],
      rangeMonthPlaceholder: ['เดือนเริ่มต้น', 'เดือนสิ้นสุด'],
      rangeWeekPlaceholder: ['สัปดาห์เริ่มต้น', 'สัปดาห์สิ้นสุด']
    }, _th_TH["default"]),
    timePickerLocale: Object.assign({}, _th_TH2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});