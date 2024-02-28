define(["exports", "rc-picker/es/locale/mk_MK", "antd4mx/time-picker/locale/mk_MK"], function (_exports, _mk_MK, _mk_MK2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Избери датум',
      rangePlaceholder: ['Од датум', 'До датум']
    }, _mk_MK["default"]),
    timePickerLocale: Object.assign({}, _mk_MK2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});