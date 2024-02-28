define(["exports", "rc-picker/es/locale/ru_RU", "antd4mx/time-picker/locale/ru_RU"], function (_exports, _ru_RU, _ru_RU2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  /** Created by Andrey Gayvoronsky on 13/04/16. */

  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Выберите дату',
      yearPlaceholder: 'Выберите год',
      quarterPlaceholder: 'Выберите квартал',
      monthPlaceholder: 'Выберите месяц',
      weekPlaceholder: 'Выберите неделю',
      rangePlaceholder: ['Начальная дата', 'Конечная дата'],
      rangeYearPlaceholder: ['Начальный год', 'Год окончания'],
      rangeMonthPlaceholder: ['Начальный месяц', 'Конечный месяц'],
      rangeWeekPlaceholder: ['Начальная неделя', 'Конечная неделя']
    }, _ru_RU["default"]),
    timePickerLocale: Object.assign({}, _ru_RU2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});