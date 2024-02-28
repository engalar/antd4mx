define(["exports", "rc-picker/es/locale/tr_TR", "antd4mx/time-picker/locale/tr_TR"], function (_exports, _tr_TR, _tr_TR2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Tarih seç',
      yearPlaceholder: 'Yıl seç',
      quarterPlaceholder: 'Çeyrek seç',
      monthPlaceholder: 'Ay seç',
      weekPlaceholder: 'Hafta seç',
      rangePlaceholder: ['Başlangıç tarihi', 'Bitiş tarihi'],
      rangeYearPlaceholder: ['Başlangıç yılı', 'Bitiş yılı'],
      rangeMonthPlaceholder: ['Başlangıç ayı', 'Bitiş ayı'],
      rangeWeekPlaceholder: ['Başlangıç haftası', 'Bitiş haftası']
    }, _tr_TR["default"]),
    timePickerLocale: Object.assign({}, _tr_TR2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});