define(["exports", "rc-picker/es/locale/ta_IN", "antd4mx/time-picker/locale/ta_IN"], function (_exports, _ta_IN, _ta_IN2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Tamil Locale added to rc-calendar

  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'தேதியைத் தேர்ந்தெடுக்கவும்',
      rangePlaceholder: ['தொடக்க தேதி', 'கடைசி தேதி'],
      quarterPlaceholder: 'காலாண்டைத் தேர்ந்தெடுக்கவும்',
      monthPlaceholder: 'மாதத்தைத் தேர்ந்தெடுக்கவும்',
      weekPlaceholder: 'வாரத்தைத் தேர்ந்தெடுக்கவும்',
      rangeYearPlaceholder: ['தொடக்க ஆண்டு', 'இறுதி ஆண்டு'],
      rangeQuarterPlaceholder: ['காலாண்டு தொடக்கம்', 'இறுதி காலாண்டு'],
      rangeMonthPlaceholder: ['தொடக்க மாதம்', 'இறுதி மாதம்'],
      rangeWeekPlaceholder: ['வாரம் தொடங்கு', 'இறுதி வாரம்']
    }, _ta_IN["default"]),
    timePickerLocale: Object.assign({}, _ta_IN2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});