define(["exports", "rc-pagination/es/locale/kmr_IQ", "antd4mx/calendar/locale/kmr_IQ", "antd4mx/date-picker/locale/kmr_IQ", "antd4mx/time-picker/locale/kmr_IQ"], function (_exports, _kmr_IQ, _kmr_IQ2, _kmr_IQ3, _kmr_IQ4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // please use antd/locale/kmr_IQ instead
  // keep this file for compatibility
  // https://github.com/ant-design/ant-design/issues/25778
  var localeValues = {
    locale: 'ku-iq',
    Pagination: _kmr_IQ["default"],
    DatePicker: _kmr_IQ3["default"],
    TimePicker: _kmr_IQ4["default"],
    Calendar: _kmr_IQ2["default"],
    Table: {
      filterTitle: 'Menuê peldanka',
      filterConfirm: 'Temam',
      filterReset: 'Jê bibe',
      selectAll: 'Hemî hilbijêre',
      selectInvert: 'Hilbijartinan veguhere'
    },
    Modal: {
      okText: 'Temam',
      cancelText: 'Betal ke',
      justOkText: 'Temam'
    },
    Popconfirm: {
      okText: 'Temam',
      cancelText: 'Betal ke'
    },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Lêgerîn',
      itemUnit: 'tişt',
      itemsUnit: 'tişt'
    },
    Upload: {
      uploading: 'Bardike...',
      removeFile: 'Pelê rabike',
      uploadError: 'Xeta barkirine',
      previewFile: 'Pelê pêşbibîne',
      downloadFile: 'Pelê dakêşin'
    },
    Empty: {
      description: 'Agahî tune'
    }
  };
  var _default = _exports["default"] = localeValues;
});