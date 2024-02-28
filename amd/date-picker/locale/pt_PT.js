define(["exports", "rc-picker/es/locale/pt_PT", "antd4mx/time-picker/locale/pt_PT"], function (_exports, _pt_PT, _pt_PT2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign(Object.assign({}, _pt_PT["default"]), {
      placeholder: 'Data',
      rangePlaceholder: ['Data inicial', 'Data final'],
      today: 'Hoje',
      now: 'Agora',
      backToToday: 'Hoje',
      ok: 'OK',
      clear: 'Limpar',
      month: 'Mês',
      year: 'Ano',
      timeSelect: 'Hora',
      dateSelect: 'Selecionar data',
      monthSelect: 'Selecionar mês',
      yearSelect: 'Selecionar ano',
      decadeSelect: 'Selecionar década',
      yearFormat: 'YYYY',
      dateFormat: 'D/M/YYYY',
      dayFormat: 'D',
      dateTimeFormat: 'D/M/YYYY HH:mm:ss',
      monthFormat: 'MMMM',
      monthBeforeYear: false,
      previousMonth: 'Mês anterior (PageUp)',
      nextMonth: 'Mês seguinte (PageDown)',
      previousYear: 'Ano anterior (Control + left)',
      nextYear: 'Ano seguinte (Control + right)',
      previousDecade: 'Última década',
      nextDecade: 'Próxima década',
      previousCentury: 'Último século',
      nextCentury: 'Próximo século'
    }),
    timePickerLocale: Object.assign(Object.assign({}, _pt_PT2["default"]), {
      placeholder: 'Hora'
    })
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});