define(["exports", "antd4mx/date-picker/generatePicker/generateRangePicker", "antd4mx/date-picker/generatePicker/generateSinglePicker"], function (_exports, _generateRangePicker, _generateSinglePicker2) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function generatePicker(generateConfig) {
    // =========================== Picker ===========================
    var _generateSinglePicker = (0, _generateSinglePicker2["default"])(generateConfig),
      DatePicker = _generateSinglePicker.DatePicker,
      WeekPicker = _generateSinglePicker.WeekPicker,
      MonthPicker = _generateSinglePicker.MonthPicker,
      YearPicker = _generateSinglePicker.YearPicker,
      TimePicker = _generateSinglePicker.TimePicker,
      QuarterPicker = _generateSinglePicker.QuarterPicker;
    // ======================== Range Picker ========================
    var RangePicker = (0, _generateRangePicker["default"])(generateConfig);
    var MergedDatePicker = DatePicker;
    MergedDatePicker.WeekPicker = WeekPicker;
    MergedDatePicker.MonthPicker = MonthPicker;
    MergedDatePicker.YearPicker = YearPicker;
    MergedDatePicker.RangePicker = RangePicker;
    MergedDatePicker.TimePicker = TimePicker;
    MergedDatePicker.QuarterPicker = QuarterPicker;
    if (process.env.NODE_ENV !== 'production') {
      MergedDatePicker.displayName = 'DatePicker';
    }
    return MergedDatePicker;
  }
  var _default = _exports["default"] = generatePicker;
});