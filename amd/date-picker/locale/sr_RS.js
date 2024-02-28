define(["exports", "rc-picker/es/locale/sr_RS", "antd4mx/time-picker/locale/sr_RS"], function (_exports, _sr_RS, _sr_RS2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Izaberi datum',
      yearPlaceholder: 'Izaberi godinu',
      quarterPlaceholder: 'Izaberi tromesečje',
      monthPlaceholder: 'Izaberi mesec',
      weekPlaceholder: 'Izaberi sedmicu',
      rangePlaceholder: ['Datum početka', 'Datum završetka'],
      rangeYearPlaceholder: ['Godina početka', 'Godina završetka'],
      rangeMonthPlaceholder: ['Mesec početka', 'Mesec završetka'],
      rangeWeekPlaceholder: ['Sedmica početka', 'Sedmica završetka']
    }, _sr_RS["default"]),
    timePickerLocale: Object.assign({}, _sr_RS2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});