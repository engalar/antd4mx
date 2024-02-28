define(["exports", "rc-picker/es/locale/az_AZ", "antd4mx/time-picker/locale/az_AZ"], function (_exports, _az_AZ, _az_AZ2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var locale = {
    lang: Object.assign({
      placeholder: 'Tarix seçin',
      rangePlaceholder: ['Başlama tarixi', 'Bitmə tarixi']
    }, _az_AZ["default"]),
    timePickerLocale: Object.assign({}, _az_AZ2["default"])
  };
  var _default = _exports["default"] = locale;
});