define(["exports", "rc-picker/es/locale/pl_PL", "antd4mx/time-picker/locale/pl_PL"], function (_exports, _pl_PL, _pl_PL2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'Wybierz datę',
      rangePlaceholder: ['Data początkowa', 'Data końcowa']
    }, _pl_PL["default"]),
    timePickerLocale: Object.assign({}, _pl_PL2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});