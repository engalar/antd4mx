define(["exports", "rc-pagination/es/locale/nb_NO", "antd4mx/calendar/locale/nb_NO", "antd4mx/date-picker/locale/nb_NO", "antd4mx/time-picker/locale/nb_NO"], function (_exports, _nb_NO, _nb_NO2, _nb_NO3, _nb_NO4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  /* eslint-disable no-template-curly-in-string */

  var typeTemplate = '${label} er ikke et gyldig ${type}';
  var localeValues = {
    locale: 'nb',
    Pagination: _nb_NO["default"],
    DatePicker: _nb_NO3["default"],
    TimePicker: _nb_NO4["default"],
    Calendar: _nb_NO2["default"],
    global: {
      placeholder: 'Vennligst velg'
    },
    Table: {
      filterTitle: 'Filtermeny',
      filterConfirm: 'OK',
      filterReset: 'Nullstill',
      filterEmptyText: 'Ingen filtre',
      selectAll: 'Velg alle',
      selectInvert: 'Inverter gjeldende side',
      selectionAll: 'Velg all data',
      sortTitle: 'Sorter',
      expand: 'Utvid rad',
      collapse: 'Skjul rad',
      triggerDesc: 'Sorter data i synkende rekkefølge',
      triggerAsc: 'Sorterer data i stigende rekkefølge',
      cancelSort: 'Klikk for å avbryte sorteringen'
    },
    Modal: {
      okText: 'OK',
      cancelText: 'Avbryt',
      justOkText: 'OK'
    },
    Popconfirm: {
      okText: 'OK',
      cancelText: 'Avbryt'
    },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Søk her',
      itemUnit: 'element',
      itemsUnit: 'elementer',
      remove: 'Fjern',
      selectCurrent: 'Velg gjeldende side',
      removeCurrent: 'Fjern gjeldende side',
      selectAll: 'Velg all data',
      removeAll: 'Fjern all data',
      selectInvert: 'Inverter gjeldende side'
    },
    Upload: {
      uploading: 'Laster opp...',
      removeFile: 'Fjern fil',
      uploadError: 'Feil ved opplastning',
      previewFile: 'Forhåndsvisning',
      downloadFile: 'Last ned fil'
    },
    Empty: {
      description: 'Ingen data'
    },
    Icon: {
      icon: 'ikon'
    },
    Text: {
      edit: 'Rediger',
      copy: 'Kopier',
      copied: 'Kopiert',
      expand: 'Utvid'
    },
    Form: {
      defaultValidateMessages: {
        "default": 'Feltvalideringsfeil ${label}',
        required: 'Vennligst skriv inn ${label}',
        "enum": '${label} må være en av [${enum}]',
        whitespace: '${label} kan ikke være et blankt tegn',
        date: {
          format: '${label} datoformatet er ugyldig',
          parse: '${label} kan ikke konverteres til en dato',
          invalid: '${label} er en ugyldig dato'
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
          len: '${label} må være ${len} tegn',
          min: '${label} må minst ha ${min} tegn',
          max: '${label} opp til ${max} tegn',
          range: '${label} må være mellom ${min}-${max} tegn'
        },
        number: {
          len: '${label} må være lik ${len}',
          min: '${label} minimumsverdien er ${min}',
          max: '${label} maksimumsverdien er ${max}',
          range: '${label} må være mellom ${min}-${max}'
        },
        array: {
          len: 'Må være ${len} ${label}',
          min: 'Må være minst ${min} ${label}',
          max: 'På det meste ${max} ${label}',
          range: 'Totalt av ${label} må være mellom ${min}-${max}'
        },
        pattern: {
          mismatch: '${label} stemmer ikke overens med mønsteret ${pattern}'
        }
      }
    }
  };
  var _default = _exports["default"] = localeValues;
});