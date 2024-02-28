define(["exports", "rc-picker/es/locale/nl_BE", "antd4mx/time-picker/locale/nl_BE"], function (_exports, _nl_BE, _nl_BE2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      monthPlaceholder: 'Selecteer maand',
      placeholder: 'Selecteer datum',
      quarterPlaceholder: 'Selecteer kwartaal',
      rangeMonthPlaceholder: ['Begin maand', 'Eind maand'],
      rangePlaceholder: ['Begin datum', 'Eind datum'],
      rangeWeekPlaceholder: ['Begin week', 'Eind week'],
      rangeYearPlaceholder: ['Begin jaar', 'Eind jaar'],
      weekPlaceholder: 'Selecteer week',
      yearPlaceholder: 'Selecteer jaar'
    }, _nl_BE["default"]),
    timePickerLocale: Object.assign({}, _nl_BE2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/issues/424
  var _default = _exports["default"] = locale;
});