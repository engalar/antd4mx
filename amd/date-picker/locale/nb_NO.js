define(["exports", "rc-picker/es/locale/nb_NO", "antd4mx/time-picker/locale/nb_NO"], function (_exports, _nb_NO, _nb_NO2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Velg dato',
      yearPlaceholder: 'Velg år',
      quarterPlaceholder: 'Velg kvartal',
      monthPlaceholder: 'Velg måned',
      weekPlaceholder: 'Velg uke',
      rangePlaceholder: ['Startdato', 'Sluttdato'],
      rangeYearPlaceholder: ['Startår', 'Sluttår'],
      rangeMonthPlaceholder: ['Startmåned', 'Sluttmåned'],
      rangeWeekPlaceholder: ['Start uke', 'Sluttuke']
    }, _nb_NO["default"]),
    timePickerLocale: Object.assign({}, _nb_NO2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});