define(["exports", "rc-picker/es/locale/fr_FR", "antd4mx/time-picker/locale/fr_FR"], function (_exports, _fr_FR, _fr_FR2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Sélectionner une date',
      yearPlaceholder: 'Sélectionner une année',
      quarterPlaceholder: 'Sélectionner un trimestre',
      monthPlaceholder: 'Sélectionner un mois',
      weekPlaceholder: 'Sélectionner une semaine',
      rangePlaceholder: ['Date de début', 'Date de fin'],
      rangeYearPlaceholder: ['Année de début', 'Année de fin'],
      rangeMonthPlaceholder: ['Mois de début', 'Mois de fin'],
      rangeWeekPlaceholder: ['Semaine de début', 'Semaine de fin']
    }, _fr_FR["default"]),
    timePickerLocale: Object.assign({}, _fr_FR2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/issues/424
  var _default = _exports["default"] = locale;
});