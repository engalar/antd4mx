define(["exports", "rc-pagination/es/locale/hu_HU", "antd4mx/calendar/locale/hu_HU", "antd4mx/date-picker/locale/hu_HU", "antd4mx/time-picker/locale/hu_HU"], function (_exports, _hu_HU, _hu_HU2, _hu_HU3, _hu_HU4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var localeValues = {
    locale: 'hu',
    Pagination: _hu_HU["default"],
    DatePicker: _hu_HU3["default"],
    TimePicker: _hu_HU4["default"],
    Calendar: _hu_HU2["default"],
    Table: {
      filterTitle: 'Szűrők',
      filterConfirm: 'Alkalmazás',
      filterReset: 'Visszaállítás',
      selectAll: 'Jelenlegi oldal kiválasztása',
      selectInvert: 'Jelenlegi oldal inverze',
      sortTitle: 'Rendezés'
    },
    Modal: {
      okText: 'Alkalmazás',
      cancelText: 'Visszavonás',
      justOkText: 'Alkalmazás'
    },
    Popconfirm: {
      okText: 'Alkalmazás',
      cancelText: 'Visszavonás'
    },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Keresés',
      itemUnit: 'elem',
      itemsUnit: 'elemek'
    },
    Upload: {
      uploading: 'Feltöltés...',
      removeFile: 'Fájl eltávolítása',
      uploadError: 'Feltöltési hiba',
      previewFile: 'Fájl előnézet',
      downloadFile: 'Fájl letöltése'
    },
    Empty: {
      description: 'Nincs adat'
    }
  };
  var _default = _exports["default"] = localeValues;
});