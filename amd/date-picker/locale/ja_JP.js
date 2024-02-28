define(["exports", "rc-picker/es/locale/ja_JP", "antd4mx/time-picker/locale/ja_JP"], function (_exports, _ja_JP, _ja_JP2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: '日付を選択',
      rangePlaceholder: ['開始日付', '終了日付']
    }, _ja_JP["default"]),
    timePickerLocale: Object.assign({}, _ja_JP2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});