define(["exports", "rc-picker/es/locale/el_GR", "antd4mx/time-picker/locale/el_GR"], function (_exports, _el_GR, _el_GR2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Επιλέξτε ημερομηνία',
      rangePlaceholder: ['Αρχική ημερομηνία', 'Τελική ημερομηνία']
    }, _el_GR["default"]),
    timePickerLocale: Object.assign({}, _el_GR2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/issues/424
  var _default = _exports["default"] = locale;
});