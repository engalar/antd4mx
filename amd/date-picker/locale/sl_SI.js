define(["exports", "antd4mx/time-picker/locale/sl_SI"], function (_exports, _sl_SI) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: {
      locale: 'sl',
      placeholder: 'Izberite datum',
      rangePlaceholder: ['Začetni datum', 'Končni datum'],
      today: 'Danes',
      now: 'Trenutno',
      backToToday: 'Nazaj na trenutni datum',
      ok: 'OK',
      clear: 'Počisti',
      month: 'Mesec',
      year: 'Leto',
      timeSelect: 'Izberi čas',
      dateSelect: 'Izberi datum',
      monthSelect: 'Izberite mesec',
      yearSelect: 'Izberite leto',
      decadeSelect: 'Izberite desetletje',
      yearFormat: 'YYYY',
      dateFormat: 'D.M.YYYY',
      dayFormat: 'D',
      dateTimeFormat: 'D.M.YYYY HH:mm:ss',
      monthFormat: 'MMMM',
      monthBeforeYear: true,
      previousMonth: 'Prejšnji mesec (PageUp)',
      nextMonth: 'Naslednji mesec (PageDown)',
      previousYear: 'Lansko leto (Control + left)',
      nextYear: 'Naslednje leto (Control + right)',
      previousDecade: 'Prejšnje desetletje',
      nextDecade: 'Naslednje desetletje',
      previousCentury: 'Zadnje stoletje',
      nextCentury: 'Naslednje stoletje'
    },
    timePickerLocale: Object.assign({}, _sl_SI["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});