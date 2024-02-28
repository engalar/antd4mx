define(["exports", "react", "antd4mx/_util/PurePanel", "antd4mx/_util/warning", "antd4mx/date-picker"], function (_exports, React, _PurePanel, _warning, _datePicker) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var InternalTimePicker = _datePicker["default"].TimePicker,
    InternalRangePicker = _datePicker["default"].RangePicker;
  var RangePicker = /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(InternalRangePicker, Object.assign({}, props, {
      picker: "time",
      mode: undefined,
      ref: ref
    }));
  });
  var TimePicker = /*#__PURE__*/React.forwardRef(function (_a, ref) {
    var addon = _a.addon,
      renderExtraFooter = _a.renderExtraFooter,
      restProps = __rest(_a, ["addon", "renderExtraFooter"]);
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('TimePicker');
      warning.deprecated(!addon, 'addon', 'renderExtraFooter');
    }
    var internalRenderExtraFooter = React.useMemo(function () {
      if (renderExtraFooter) {
        return renderExtraFooter;
      }
      if (addon) {
        return addon;
      }
      return undefined;
    }, [addon, renderExtraFooter]);
    return /*#__PURE__*/React.createElement(InternalTimePicker, Object.assign({}, restProps, {
      mode: undefined,
      ref: ref,
      renderExtraFooter: internalRenderExtraFooter
    }));
  });
  if (process.env.NODE_ENV !== 'production') {
    TimePicker.displayName = 'TimePicker';
  }
  // We don't care debug panel
  /* istanbul ignore next */
  var PurePanel = (0, _PurePanel["default"])(TimePicker, 'picker');
  TimePicker._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
  TimePicker.RangePicker = RangePicker;
  TimePicker._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
  var _default = _exports["default"] = TimePicker;
});