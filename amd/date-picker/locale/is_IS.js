define(["exports", "rc-picker/es/locale/is_IS", "antd4mx/time-picker/locale/is_IS"], function (_exports, _is_IS, _is_IS2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Veldu dag',
      rangePlaceholder: ['Upphafsdagur', 'Lokadagur']
    }, _is_IS["default"]),
    timePickerLocale: Object.assign({}, _is_IS2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});