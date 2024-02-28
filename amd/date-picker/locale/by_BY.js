define(["exports", "rc-picker/es/locale/by_BY", "antd4mx/time-picker/locale/by_BY"], function (_exports, _by_BY, _by_BY2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var locale = {
    lang: Object.assign({
      placeholder: 'Выберыце дату',
      yearPlaceholder: 'Выберыце год',
      quarterPlaceholder: 'Выберыце квартал',
      monthPlaceholder: 'Выберыце месяц',
      weekPlaceholder: 'Выберыце тыдзень',
      rangePlaceholder: ['Дата пачатку', 'Дата заканчэння'],
      rangeYearPlaceholder: ['Год пачатку', 'Год заканчэння'],
      rangeQuarterPlaceholder: ['Квартал пачатку', 'Квартал заканчэння'],
      rangeMonthPlaceholder: ['Месяц пачатку', 'Месяц заканчэння'],
      rangeWeekPlaceholder: ['Тыдзень пачаку', 'Тыдзень заканчэння']
    }, _by_BY["default"]),
    timePickerLocale: Object.assign({}, _by_BY2["default"])
  };
  var _default = _exports["default"] = locale;
});