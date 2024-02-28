define(["exports", "rc-picker/es/locale/si_LK", "antd4mx/time-picker/locale/si_LK"], function (_exports, _si_LK, _si_LK2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'දිනය තෝරන්න',
      yearPlaceholder: 'අවුරුද්ද තෝරන්න',
      quarterPlaceholder: 'කාර්තුව තෝරන්න',
      monthPlaceholder: 'මාසය තෝරන්න',
      weekPlaceholder: 'සතිය තෝරන්න',
      rangePlaceholder: ['ආරම්භක දිනය', 'නිමවන දිනය'],
      rangeYearPlaceholder: ['ආර්ම්භක අවුරුද්ද', 'නිමවන අවුරුද්ද'],
      rangeQuarterPlaceholder: ['ආරම්භක කාර්තුව', 'නිමවන කාර්තුව'],
      rangeMonthPlaceholder: ['ආරම්භක මාසය', 'නිමවන මාසය'],
      rangeWeekPlaceholder: ['ආරම්භක සතිය', 'නිමවන සතිය']
    }, _si_LK["default"]),
    timePickerLocale: Object.assign({}, _si_LK2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});