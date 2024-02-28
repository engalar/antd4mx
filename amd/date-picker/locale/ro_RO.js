define(["exports", "rc-picker/es/locale/ro_RO", "antd4mx/time-picker/locale/ro_RO"], function (_exports, _ro_RO, _ro_RO2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Selectează data',
      rangePlaceholder: ['Data start', 'Data sfârșit']
    }, _ro_RO["default"]),
    timePickerLocale: Object.assign({}, _ro_RO2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});