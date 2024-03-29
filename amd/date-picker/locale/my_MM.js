define(["exports", "rc-picker/es/locale/my_MM", "antd4mx/time-picker/locale/my_MM"], function (_exports, _my_MM, _my_MM2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  // Merge into a locale object
  var locale = {
    lang: Object.assign({
      placeholder: 'ရက်စွဲကို ရွေးပါ။',
      yearPlaceholder: 'နှစ်ကို ရွေးပါ။',
      quarterPlaceholder: 'လေးပုံတစ်ပုံကို ရွေးပါ။',
      monthPlaceholder: 'လကိုရွေးပါ။',
      weekPlaceholder: 'ရက်သတ္တပတ်ကို ရွေးပါ။',
      rangePlaceholder: ['စတင်သည့်ရက်စွဲ', 'ကုန်ဆုံးရက်'],
      rangeYearPlaceholder: ['စတင်သည့်နှစ်', 'နှစ်ကုန်'],
      rangeQuarterPlaceholder: ['လေးပုံတစ်ပုံကို စတင်ပါ။', 'အဆုံးသုံးလ'],
      rangeMonthPlaceholder: ['စတင်လ', 'လကုန်'],
      rangeWeekPlaceholder: ['ရက်သတ္တပတ်စတင်ပါ။', 'သီတင်းပတ်ကုန်']
    }, _my_MM["default"]),
    timePickerLocale: Object.assign({}, _my_MM2["default"])
  };
  // All settings at:
  // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
  var _default = _exports["default"] = locale;
});