define(["exports", "rc-picker/es/locale/lv_LV", "antd4mx/time-picker/locale/lv_LV"], function (_exports, _lv_LV, _lv_LV2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Izvēlieties datumu',
      rangePlaceholder: ['Sākuma datums', 'Beigu datums']
    }, _lv_LV["default"]),
    timePickerLocale: Object.assign({}, _lv_LV2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});