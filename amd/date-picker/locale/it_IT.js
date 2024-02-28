define(["exports", "rc-picker/es/locale/it_IT", "antd4mx/time-picker/locale/it_IT"], function (_exports, _it_IT, _it_IT2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Selezionare la data',
      rangePlaceholder: ["Data d'inizio", 'Data di fine']
    }, _it_IT["default"]),
    timePickerLocale: Object.assign({}, _it_IT2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/issues/424
  var _default = _exports["default"] = locale;
});