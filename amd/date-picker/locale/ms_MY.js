define(["exports", "rc-picker/es/locale/ms_MY", "antd4mx/time-picker/locale/ms_MY"], function (_exports, _ms_MY, _ms_MY2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Pilih tarikh',
      rangePlaceholder: ['Tarikh mula', 'Tarikh akhir']
    }, _ms_MY["default"]),
    timePickerLocale: Object.assign({}, _ms_MY2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});