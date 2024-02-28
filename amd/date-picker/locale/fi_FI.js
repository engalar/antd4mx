define(["exports", "rc-picker/es/locale/fi_FI", "antd4mx/time-picker/locale/fi_FI"], function (_exports, _fi_FI, _fi_FI2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Valitse päivä',
      rangePlaceholder: ['Alkamispäivä', 'Päättymispäivä']
    }, _fi_FI["default"]),
    timePickerLocale: Object.assign({}, _fi_FI2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});