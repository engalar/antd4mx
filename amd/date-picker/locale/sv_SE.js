define(["exports", "rc-picker/es/locale/sv_SE", "antd4mx/time-picker/locale/sv_SE"], function (_exports, _sv_SE, _sv_SE2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Välj datum',
      yearPlaceholder: 'Välj år',
      quarterPlaceholder: 'Välj kvartal',
      monthPlaceholder: 'Välj månad',
      weekPlaceholder: 'Välj vecka',
      rangePlaceholder: ['Startdatum', 'Slutdatum'],
      rangeYearPlaceholder: ['Startår', 'Slutår'],
      rangeMonthPlaceholder: ['Startmånad', 'Slutmånad'],
      rangeWeekPlaceholder: ['Startvecka', 'Slutvecka']
    }, _sv_SE["default"]),
    timePickerLocale: Object.assign({}, _sv_SE2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});