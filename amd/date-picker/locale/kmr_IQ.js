define(["exports", "rc-picker/es/locale/kmr_IQ", "antd4mx/time-picker/locale/kmr_IQ"], function (_exports, _kmr_IQ, _kmr_IQ2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Dîrok hilbijêre',
      rangePlaceholder: ['Dîroka destpêkê', 'Dîroka dawîn']
    }, _kmr_IQ["default"]),
    timePickerLocale: Object.assign({}, _kmr_IQ2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});