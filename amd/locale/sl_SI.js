define(["exports", "rc-pagination/es/locale/sl_SI", "antd4mx/calendar/locale/sl_SI", "antd4mx/date-picker/locale/sl_SI", "antd4mx/time-picker/locale/sl_SI"], function (_exports, _sl_SI, _sl_SI2, _sl_SI3, _sl_SI4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var localeValues = {
    locale: 'sl',
    Pagination: _sl_SI["default"],
    DatePicker: _sl_SI3["default"],
    TimePicker: _sl_SI4["default"],
    Calendar: _sl_SI2["default"],
    Table: {
      filterTitle: 'Filter',
      filterConfirm: 'Filtriraj',
      filterReset: 'Pobriši filter',
      selectAll: 'Izberi vse na trenutni strani',
      selectInvert: 'Obrni izbor na trenutni strani'
    },
    Modal: {
      okText: 'V redu',
      cancelText: 'Prekliči',
      justOkText: 'V redu'
    },
    Popconfirm: {
      okText: 'v redu',
      cancelText: 'Prekliči'
    },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Išči tukaj',
      itemUnit: 'Objekt',
      itemsUnit: 'Objektov'
    },
    Upload: {
      uploading: 'Nalaganje...',
      removeFile: 'Odstrani datoteko',
      uploadError: 'Napaka pri nalaganju',
      previewFile: 'Predogled datoteke',
      downloadFile: 'Prenos datoteke'
    },
    Empty: {
      description: 'Ni podatkov'
    }
  };
  var _default = _exports["default"] = localeValues;
});