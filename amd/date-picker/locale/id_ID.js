define(["exports", "rc-picker/es/locale/id_ID", "antd4mx/time-picker/locale/id_ID"], function (_exports, _id_ID, _id_ID2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Pilih tanggal',
      rangePlaceholder: ['Mulai tanggal', 'Tanggal akhir']
    }, _id_ID["default"]),
    timePickerLocale: Object.assign({}, _id_ID2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});