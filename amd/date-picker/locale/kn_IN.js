define(["exports", "rc-picker/es/locale/kn_IN", "antd4mx/time-picker/locale/kn_IN"], function (_exports, _kn_IN, _kn_IN2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ',
      rangePlaceholder: ['ಪ್ರಾರಂಭ ದಿನಾಂಕ', 'ಅಂತಿಮ ದಿನಾಂಕ']
    }, _kn_IN["default"]),
    timePickerLocale: Object.assign({}, _kn_IN2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});