define(["exports", "rc-picker/es/locale/cs_CZ", "antd4mx/time-picker/locale/cs_CZ"], function (_exports, _cs_CZ, _cs_CZ2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Vybrat datum',
      rangePlaceholder: ['Od', 'Do']
    }, _cs_CZ["default"]),
    timePickerLocale: Object.assign({}, _cs_CZ2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});