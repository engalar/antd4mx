define(["exports", "rc-picker/es/locale/hu_HU", "antd4mx/time-picker/locale/hu_HU"], function (_exports, _hu_HU, _hu_HU2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Válasszon dátumot',
      rangePlaceholder: ['Kezdő dátum', 'Befejezés dátuma']
    }, _hu_HU["default"]),
    timePickerLocale: Object.assign({}, _hu_HU2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});