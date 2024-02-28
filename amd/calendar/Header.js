define(["exports", "react", "antd4mx/form/context", "antd4mx/radio", "antd4mx/select"], function (_exports, _react, _context, _radio, _select) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var React = _react;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var YearSelectOffset = 10;
  var YearSelectTotal = 20;
  function YearSelect(props) {
    var fullscreen = props.fullscreen,
      validRange = props.validRange,
      generateConfig = props.generateConfig,
      locale = props.locale,
      prefixCls = props.prefixCls,
      value = props.value,
      _onChange = props.onChange,
      divRef = props.divRef;
    var year = generateConfig.getYear(value || generateConfig.getNow());
    var start = year - YearSelectOffset;
    var end = start + YearSelectTotal;
    if (validRange) {
      start = generateConfig.getYear(validRange[0]);
      end = generateConfig.getYear(validRange[1]) + 1;
    }
    var suffix = locale && locale.year === '年' ? '年' : '';
    var options = [];
    for (var index = start; index < end; index++) {
      options.push({
        label: "".concat(index).concat(suffix),
        value: index
      });
    }
    return /*#__PURE__*/React.createElement(_select["default"], {
      size: fullscreen ? undefined : 'small',
      options: options,
      value: year,
      className: "".concat(prefixCls, "-year-select"),
      onChange: function onChange(numYear) {
        var newDate = generateConfig.setYear(value, numYear);
        if (validRange) {
          var _validRange = _slicedToArray(validRange, 2),
            startDate = _validRange[0],
            endDate = _validRange[1];
          var newYear = generateConfig.getYear(newDate);
          var newMonth = generateConfig.getMonth(newDate);
          if (newYear === generateConfig.getYear(endDate) && newMonth > generateConfig.getMonth(endDate)) {
            newDate = generateConfig.setMonth(newDate, generateConfig.getMonth(endDate));
          }
          if (newYear === generateConfig.getYear(startDate) && newMonth < generateConfig.getMonth(startDate)) {
            newDate = generateConfig.setMonth(newDate, generateConfig.getMonth(startDate));
          }
        }
        _onChange(newDate);
      },
      getPopupContainer: function getPopupContainer() {
        return divRef.current;
      }
    });
  }
  function MonthSelect(props) {
    var prefixCls = props.prefixCls,
      fullscreen = props.fullscreen,
      validRange = props.validRange,
      value = props.value,
      generateConfig = props.generateConfig,
      locale = props.locale,
      _onChange2 = props.onChange,
      divRef = props.divRef;
    var month = generateConfig.getMonth(value || generateConfig.getNow());
    var start = 0;
    var end = 11;
    if (validRange) {
      var _validRange2 = _slicedToArray(validRange, 2),
        rangeStart = _validRange2[0],
        rangeEnd = _validRange2[1];
      var currentYear = generateConfig.getYear(value);
      if (generateConfig.getYear(rangeEnd) === currentYear) {
        end = generateConfig.getMonth(rangeEnd);
      }
      if (generateConfig.getYear(rangeStart) === currentYear) {
        start = generateConfig.getMonth(rangeStart);
      }
    }
    var months = locale.shortMonths || generateConfig.locale.getShortMonths(locale.locale);
    var options = [];
    for (var index = start; index <= end; index += 1) {
      options.push({
        label: months[index],
        value: index
      });
    }
    return /*#__PURE__*/React.createElement(_select["default"], {
      size: fullscreen ? undefined : 'small',
      className: "".concat(prefixCls, "-month-select"),
      value: month,
      options: options,
      onChange: function onChange(newMonth) {
        _onChange2(generateConfig.setMonth(value, newMonth));
      },
      getPopupContainer: function getPopupContainer() {
        return divRef.current;
      }
    });
  }
  function ModeSwitch(props) {
    var prefixCls = props.prefixCls,
      locale = props.locale,
      mode = props.mode,
      fullscreen = props.fullscreen,
      onModeChange = props.onModeChange;
    return /*#__PURE__*/React.createElement(_radio.Group, {
      onChange: function onChange(_ref) {
        var value = _ref.target.value;
        onModeChange(value);
      },
      value: mode,
      size: fullscreen ? undefined : 'small',
      className: "".concat(prefixCls, "-mode-switch")
    }, /*#__PURE__*/React.createElement(_radio.Button, {
      value: "month"
    }, locale.month), /*#__PURE__*/React.createElement(_radio.Button, {
      value: "year"
    }, locale.year));
  }
  function CalendarHeader(props) {
    var prefixCls = props.prefixCls,
      fullscreen = props.fullscreen,
      mode = props.mode,
      _onChange3 = props.onChange,
      onModeChange = props.onModeChange;
    var divRef = React.useRef(null);
    var formItemInputContext = (0, _react.useContext)(_context.FormItemInputContext);
    var mergedFormItemInputContext = (0, _react.useMemo)(function () {
      return Object.assign(Object.assign({}, formItemInputContext), {
        isFormItemInput: false
      });
    }, [formItemInputContext]);
    var sharedProps = Object.assign(Object.assign({}, props), {
      fullscreen: fullscreen,
      divRef: divRef
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-header"),
      ref: divRef
    }, /*#__PURE__*/React.createElement(_context.FormItemInputContext.Provider, {
      value: mergedFormItemInputContext
    }, /*#__PURE__*/React.createElement(YearSelect, Object.assign({}, sharedProps, {
      onChange: function onChange(v) {
        _onChange3(v, 'year');
      }
    })), mode === 'month' && ( /*#__PURE__*/React.createElement(MonthSelect, Object.assign({}, sharedProps, {
      onChange: function onChange(v) {
        _onChange3(v, 'month');
      }
    })))), /*#__PURE__*/React.createElement(ModeSwitch, Object.assign({}, sharedProps, {
      onModeChange: onModeChange
    })));
  }
  var _default = _exports["default"] = CalendarHeader;
});