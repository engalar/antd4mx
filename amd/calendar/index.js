define(["exports", "rc-picker/es/generate/dayjs", "antd4mx/calendar/generateCalendar"], function (_exports, _dayjs, _generateCalendar) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var Calendar = (0, _generateCalendar["default"])(_dayjs["default"]);
  Calendar.generateCalendar = _generateCalendar["default"];
  var _default = _exports["default"] = Calendar;
});