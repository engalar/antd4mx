define(["exports", "rc-picker/es/locale/bg_BG", "antd4mx/time-picker/locale/bg_BG"], function (_exports, _bg_BG, _bg_BG2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Избор на дата',
      rangePlaceholder: ['Начална', 'Крайна']
    }, _bg_BG["default"]),
    timePickerLocale: Object.assign({}, _bg_BG2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});