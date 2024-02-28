define(["exports", "rc-pagination/es/locale/eu_ES", "antd4mx/calendar/locale/eu_ES", "antd4mx/date-picker/locale/eu_ES", "antd4mx/time-picker/locale/eu_ES"], function (_exports, _eu_ES, _eu_ES2, _eu_ES3, _eu_ES4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  /* eslint-disable no-template-curly-in-string */

  var typeTemplate = '${label} ez da ${type} balioduna';
  var localeValues = {
    locale: 'eu',
    Pagination: _eu_ES["default"],
    DatePicker: _eu_ES3["default"],
    TimePicker: _eu_ES4["default"],
    Calendar: _eu_ES2["default"],
    global: {
      placeholder: 'Aukeratu'
    },
    Table: {
      filterTitle: 'Iragazi menua',
      filterConfirm: 'Onartu',
      filterReset: 'Garbitu',
      filterEmptyText: 'Iragazkirik gabe',
      filterCheckall: 'Hautatu dena',
      filterSearchPlaceholder: 'Bilatu iragazkietan',
      emptyText: 'Daturik gabe',
      selectAll: 'Hautatu dena',
      selectInvert: 'Alderantzikatu hautaketa',
      selectNone: 'Hustu dena',
      selectionAll: 'Hautatu datu guztiak',
      sortTitle: 'Ordenatu',
      expand: 'Zabaldu',
      collapse: 'Itxi',
      triggerDesc: 'Egin klik beheranzko ordenean ordenatzeko',
      triggerAsc: 'Egin klik goranzko ordenean ordenatzeko',
      cancelSort: 'Egin klik ordenamendua ezeztatzeko'
    },
    Tour: {
      Next: 'Hurrengoa',
      Previous: 'Aurrekoa',
      Finish: 'Bukatu'
    },
    Modal: {
      okText: 'Onartu',
      cancelText: 'Utzi',
      justOkText: 'Onartu'
    },
    Popconfirm: {
      okText: 'Onartu',
      cancelText: 'Utzi'
    },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Bilatu hemen',
      itemUnit: 'elementu',
      itemsUnit: 'elementuak',
      remove: 'Ezabatu',
      selectCurrent: 'Hautatu uneko orria',
      removeCurrent: 'Uneko orria ezabatu',
      selectAll: 'Datu guztiak hautatu',
      removeAll: 'Ezabatu datu guztiak',
      selectInvert: 'Uneko orrialdea alderantzikatu'
    },
    Upload: {
      uploading: 'Igotzen...',
      removeFile: 'Fitxategia ezabatu',
      uploadError: 'Errorea fitxategia igotzerakoan',
      previewFile: 'Aurrebista',
      downloadFile: 'Fitxategia deskargatu'
    },
    Empty: {
      description: 'Ez dago daturik'
    },
    Icon: {
      icon: 'ikono'
    },
    Text: {
      edit: 'Editatu',
      copy: 'Kopiatu',
      copied: 'Kopiatuta',
      expand: 'Zabaldu'
    },
    Form: {
      optional: '(aukerakoa)',
      defaultValidateMessages: {
        "default": '${label} eremuaren balidazio errorea',
        required: 'Mesedez, sartu ${label}',
        "enum": '${label} [${enum}] -tako bat izan behar da',
        whitespace: '${label} ezin da izan karaktere zuri bat',
        date: {
          format: '${label} dataren formatua baliogabea da',
          parse: '${label} ezin da data batera doitu',
          invalid: '${label} data baliogabea da'
        },
        types: {
          string: typeTemplate,
          method: typeTemplate,
          array: typeTemplate,
          object: typeTemplate,
          number: typeTemplate,
          date: typeTemplate,
          "boolean": typeTemplate,
          integer: typeTemplate,
          "float": typeTemplate,
          regexp: typeTemplate,
          email: typeTemplate,
          url: typeTemplate,
          hex: typeTemplate
        },
        string: {
          len: '${label} eremuak ${len} karaktere izan dehar ditu',
          min: '${label} eremuak gutxienez ${min} karaktere izan behar ditu',
          max: '${label} eremuak gehienez ${max} karaktere izan behar ditu',
          range: '${label} eremuak ${min}-${max} karaktere artean izan behar ditu'
        },
        number: {
          len: '${label} eremuaren balioa ${len} izan behar da',
          min: '${label} eremuaren balio minimoa ${min} da',
          max: '${label} eremuaren balio maximoa ${max} da',
          range: '${label} eremuaren balioa ${min}-${max} artekoa izan behar da'
        },
        array: {
          len: '${len} ${label} izan behar dira',
          min: 'Gutxienez ${min} ${label}',
          max: 'Gehienez ${max} ${label}',
          range: '${label} kopuruak ${min}-${max} -ra bitartekoa izan behar du'
        },
        pattern: {
          mismatch: '${label} ez dator bat ${pattern} patroiarekin'
        }
      }
    },
    Image: {
      preview: 'Aurrebista'
    },
    QRCode: {
      expired: 'QR kodea kadukatuta',
      refresh: 'Freskatu'
    },
    ColorPicker: {
      presetEmpty: 'Hustu'
    }
  };
  var _default = _exports["default"] = localeValues;
});