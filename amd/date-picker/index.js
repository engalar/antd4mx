define(["exports", "rc-picker/es/generate/dayjs", "antd4mx/_util/PurePanel", "antd4mx/date-picker/generatePicker/index", "antd4mx/date-picker/util"], function (_exports, _dayjs, _PurePanel, _index, _util) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var DatePicker = (0, _index["default"])(_dayjs["default"]);
  function postPureProps(props) {
    var dropdownAlign = (0, _util.transPlacement2DropdownAlign)(props.direction, props.placement);
    dropdownAlign.overflow.adjustY = false;
    dropdownAlign.overflow.adjustX = false;
    return Object.assign(Object.assign({}, props), {
      dropdownAlign: dropdownAlign
    });
  }
  // We don't care debug panel
  /* istanbul ignore next */
  var PurePanel = (0, _PurePanel["default"])(DatePicker, 'picker', null, postPureProps);
  DatePicker._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
  var PureRangePanel = (0, _PurePanel["default"])(DatePicker.RangePicker, 'picker', null, postPureProps);
  DatePicker._InternalRangePanelDoNotUseOrYouWillBeFired = PureRangePanel;
  DatePicker.generatePicker = _index["default"];
  var _default = _exports["default"] = DatePicker;
});