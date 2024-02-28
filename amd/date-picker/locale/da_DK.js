define(["exports", "rc-picker/es/locale/da_DK", "antd4mx/time-picker/locale/da_DK"], function (_exports, _da_DK, _da_DK2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Vælg dato',
      rangePlaceholder: ['Startdato', 'Slutdato']
    }, _da_DK["default"]),
    timePickerLocale: Object.assign({}, _da_DK2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});