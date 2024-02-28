define(["exports", "rc-pagination/es/locale/pt_PT", "antd4mx/calendar/locale/pt_PT", "antd4mx/date-picker/locale/pt_PT", "antd4mx/time-picker/locale/pt_PT"], function (_exports, _pt_PT, _pt_PT2, _pt_PT3, _pt_PT4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  /* eslint-disable no-template-curly-in-string */

  var typeTemplate = '${label} não é um ${type} válido';
  var localeValues = {
    locale: 'pt',
    Pagination: _pt_PT["default"],
    DatePicker: _pt_PT3["default"],
    TimePicker: _pt_PT4["default"],
    Calendar: _pt_PT2["default"],
    global: {
      placeholder: 'Por favor escolha'
    },
    Table: {
      filterTitle: 'Filtro',
      filterConfirm: 'Aplicar',
      filterReset: 'Reiniciar',
      filterEmptyText: 'Sem filtros',
      filterCheckall: 'Selecionar todos os itens',
      filterSearchPlaceholder: 'Pesquisar nos filtros',
      emptyText: 'Sem conteúdo',
      selectAll: 'Selecionar página atual',
      selectInvert: 'Inverter seleção',
      sortTitle: 'Ordenação',
      selectNone: 'Apagar todo o conteúdo',
      selectionAll: 'Selecionar todo o conteúdo',
      expand: 'Expandir linha',
      collapse: 'Colapsar linha',
      triggerDesc: 'Clique organiza por descendente',
      triggerAsc: 'Clique organiza por ascendente',
      cancelSort: 'Clique para cancelar organização'
    },
    Modal: {
      okText: 'OK',
      cancelText: 'Cancelar',
      justOkText: 'OK'
    },
    Popconfirm: {
      okText: 'OK',
      cancelText: 'Cancelar'
    },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Procurar...',
      itemUnit: 'item',
      itemsUnit: 'itens',
      remove: 'Remover',
      selectCurrent: 'Selecionar página atual',
      removeCurrent: 'Remover página atual',
      selectAll: 'Selecionar tudo',
      removeAll: 'Remover tudo',
      selectInvert: 'Inverter a página actual'
    },
    Upload: {
      uploading: 'A carregar...',
      removeFile: 'Remover',
      uploadError: 'Erro ao carregar',
      previewFile: 'Pré-visualizar',
      downloadFile: 'Baixar'
    },
    Empty: {
      description: 'Sem resultados'
    },
    Icon: {
      icon: 'ícone'
    },
    Text: {
      edit: 'editar',
      copy: 'copiar',
      copied: 'copiado',
      expand: 'expandir'
    },
    Form: {
      optional: '(opcional)',
      defaultValidateMessages: {
        "default": 'Erro ${label} na validação de campo',
        required: 'Por favor, insira ${label}',
        "enum": '${label} deve ser um dos seguinte: [${enum}]',
        whitespace: '${label} não pode ser um carácter vazio',
        date: {
          format: ' O formato de data ${label} é inválido',
          parse: '${label} não pode ser convertido para uma data',
          invalid: '${label} é uma data inválida'
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
          len: '${label} deve possuir ${len} caracteres',
          min: '${label} deve possuir ao menos ${min} caracteres',
          max: '${label} deve possuir no máximo ${max} caracteres',
          range: '${label} deve possuir entre ${min} e ${max} caracteres'
        },
        number: {
          len: '${label} deve ser igual à ${len}',
          min: 'O valor mínimo de ${label} é ${min}',
          max: 'O valor máximo de ${label} é ${max}',
          range: '${label} deve estar entre ${min} e ${max}'
        },
        array: {
          len: 'Deve ser ${len} ${label}',
          min: 'No mínimo ${min} ${label}',
          max: 'No máximo ${max} ${label}',
          range: 'A quantidade de ${label} deve estar entre ${min} e ${max}'
        },
        pattern: {
          mismatch: '${label} não se enquadra no padrão ${pattern}'
        }
      }
    },
    Image: {
      preview: 'Pré-visualização'
    }
  };
  var _default = _exports["default"] = localeValues;
});