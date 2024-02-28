define(["exports", "rc-picker/es/locale/ko_KR", "antd4mx/time-picker/locale/ko_KR"], function (_exports, _ko_KR, _ko_KR2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: '날짜 선택',
      rangePlaceholder: ['시작일', '종료일']
    }, _ko_KR["default"]),
    timePickerLocale: Object.assign({}, _ko_KR2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});