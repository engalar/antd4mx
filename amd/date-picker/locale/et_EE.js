define(["exports", "rc-picker/es/locale/et_EE", "antd4mx/time-picker/locale/et_EE"], function (_exports, _et_EE, _et_EE2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // 统一合并为完整的 Locale
  var locale = {
    lang: Object.assign({
      placeholder: 'Vali kuupäev',
      rangePlaceholder: ['Algus kuupäev', 'Lõpu kuupäev']
    }, _et_EE["default"]),
    timePickerLocale: Object.assign({}, _et_EE2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});