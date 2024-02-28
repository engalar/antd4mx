define(["exports", "rc-picker/es/locale/ga_IE", "antd4mx/time-picker/locale/ga_IE"], function (_exports, _ga_IE, _ga_IE2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Roghnaigh dáta',
      yearPlaceholder: 'Roghnaigh bliain',
      quarterPlaceholder: 'Roghnaigh ráithe',
      monthPlaceholder: 'Roghnaigh mí',
      weekPlaceholder: 'Roghnaigh seachtain',
      rangePlaceholder: ['Dáta tosaigh', 'Dáta deiridh'],
      rangeYearPlaceholder: ['Tús na bliana', 'Deireadh na bliana'],
      rangeMonthPlaceholder: ['Tosaigh mhí', 'Deireadh mhí'],
      rangeWeekPlaceholder: ['Tosaigh an tseachtain', 'Deireadh na seachtaine']
    }, _ga_IE["default"]),
    timePickerLocale: Object.assign({}, _ga_IE2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});