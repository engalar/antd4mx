define(["exports", "rc-picker/es/locale/mn_MN", "antd4mx/time-picker/locale/mn_MN"], function (_exports, _mn_MN, _mn_MN2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Огноо сонгох',
      rangePlaceholder: ['Эхлэх огноо', 'Дуусах огноо']
    }, _mn_MN["default"]),
    timePickerLocale: Object.assign({}, _mn_MN2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});