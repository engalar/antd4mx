define(["exports", "rc-picker/es/locale/ml_IN", "antd4mx/time-picker/locale/ml_IN"], function (_exports, _ml_IN, _ml_IN2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'തിയതി തിരഞ്ഞെടുക്കുക',
      yearPlaceholder: 'വർഷം തിരഞ്ഞെടുക്കുക',
      quarterPlaceholder: 'ത്രൈമാസം തിരഞ്ഞെടുക്കുക',
      monthPlaceholder: 'മാസം തിരഞ്ഞെടുക്കുക',
      weekPlaceholder: 'വാരം തിരഞ്ഞെടുക്കുക',
      rangePlaceholder: ['ആരംഭ ദിനം', 'അവസാന ദിനം'],
      rangeYearPlaceholder: ['ആരംഭ വർഷം', 'അവസാന വർഷം'],
      rangeMonthPlaceholder: ['ആരംഭ മാസം', 'അവസാന മാസം'],
      rangeWeekPlaceholder: ['ആരംഭ വാരം', 'അവസാന വാരം']
    }, _ml_IN["default"]),
    timePickerLocale: Object.assign({}, _ml_IN2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});