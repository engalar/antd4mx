define(["exports", "rc-pagination/es/locale/fi_FI", "antd4mx/calendar/locale/fi_FI", "antd4mx/date-picker/locale/fi_FI", "antd4mx/time-picker/locale/fi_FI"], function (_exports, _fi_FI, _fi_FI2, _fi_FI3, _fi_FI4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var localeValues = {
    locale: 'fi',
    Pagination: _fi_FI["default"],
    DatePicker: _fi_FI3["default"],
    TimePicker: _fi_FI4["default"],
    Calendar: _fi_FI2["default"],
    Table: {
      filterTitle: 'Suodatus valikko',
      filterConfirm: 'OK',
      filterReset: 'Tyhjennä',
      selectAll: 'Valitse kaikki',
      selectInvert: 'Valitse päinvastoin',
      sortTitle: 'Lajittele',
      triggerDesc: 'Lajittele laskevasti',
      triggerAsc: 'Lajittele nousevasti',
      cancelSort: 'Peruuta lajittelu'
    },
    Modal: {
      okText: 'OK',
      cancelText: 'Peruuta',
      justOkText: 'OK'
    },
    Popconfirm: {
      okText: 'OK',
      cancelText: 'Peruuta'
    },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Etsi täältä',
      itemUnit: 'kohde',
      itemsUnit: 'kohdetta'
    },
    Upload: {
      uploading: 'Lähetetään...',
      removeFile: 'Poista tiedosto',
      uploadError: 'Virhe lähetyksessä',
      previewFile: 'Esikatsele tiedostoa',
      downloadFile: 'Lataa tiedosto'
    },
    Empty: {
      description: 'Ei kohteita'
    },
    Text: {
      edit: 'Muokkaa',
      copy: 'Kopioi',
      copied: 'Kopioitu',
      expand: 'Näytä lisää'
    }
  };
  var _default = _exports["default"] = localeValues;
});