define(["exports", "rc-picker/es/locale/de_DE", "antd4mx/time-picker/locale/de_DE"], function (_exports, _de_DE, _de_DE2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Datum auswählen',
      rangePlaceholder: ['Startdatum', 'Enddatum']
    }, _de_DE["default"]),
    timePickerLocale: Object.assign({}, _de_DE2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/issues/424
  var _default = _exports["default"] = locale;
});