define(["exports", "rc-picker/es/locale/sk_SK", "antd4mx/time-picker/locale/sk_SK"], function (_exports, _sk_SK, _sk_SK2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // 统一合并为完整的 Locale
  var locale = {
    lang: Object.assign({
      placeholder: 'Vybrať dátum',
      rangePlaceholder: ['Od', 'Do']
    }, _sk_SK["default"]),
    timePickerLocale: Object.assign({}, _sk_SK2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});