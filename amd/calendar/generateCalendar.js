function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-picker", "rc-util/es/hooks/useMergedState", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/locale", "antd4mx/calendar/Header", "antd4mx/calendar/locale/en_US", "antd4mx/calendar/style"], function (_exports, React, _classnames, _rcPicker, _useMergedState5, _warning, _configProvider, _locale, _Header, _en_US, _style) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function generateCalendar(generateConfig) {
    function isSameYear(date1, date2) {
      return date1 && date2 && generateConfig.getYear(date1) === generateConfig.getYear(date2);
    }
    function isSameMonth(date1, date2) {
      return isSameYear(date1, date2) && generateConfig.getMonth(date1) === generateConfig.getMonth(date2);
    }
    function isSameDate(date1, date2) {
      return isSameMonth(date1, date2) && generateConfig.getDate(date1) === generateConfig.getDate(date2);
    }
    var Calendar = function Calendar(props) {
      var customizePrefixCls = props.prefixCls,
        className = props.className,
        rootClassName = props.rootClassName,
        style = props.style,
        dateFullCellRender = props.dateFullCellRender,
        dateCellRender = props.dateCellRender,
        monthFullCellRender = props.monthFullCellRender,
        monthCellRender = props.monthCellRender,
        cellRender = props.cellRender,
        fullCellRender = props.fullCellRender,
        headerRender = props.headerRender,
        value = props.value,
        defaultValue = props.defaultValue,
        disabledDate = props.disabledDate,
        mode = props.mode,
        validRange = props.validRange,
        _props$fullscreen = props.fullscreen,
        fullscreen = _props$fullscreen === void 0 ? true : _props$fullscreen,
        onChange = props.onChange,
        onPanelChange = props.onPanelChange,
        onSelect = props.onSelect;
      var _React$useContext = React.useContext(_configProvider.ConfigContext),
        getPrefixCls = _React$useContext.getPrefixCls,
        direction = _React$useContext.direction,
        calendar = _React$useContext.calendar;
      var prefixCls = getPrefixCls('picker', customizePrefixCls);
      var calendarPrefixCls = "".concat(prefixCls, "-calendar");
      var _useStyle = (0, _style["default"])(prefixCls, calendarPrefixCls),
        _useStyle2 = _slicedToArray(_useStyle, 3),
        wrapCSSVar = _useStyle2[0],
        hashId = _useStyle2[1],
        cssVarCls = _useStyle2[2];
      var today = generateConfig.getNow();
      // ====================== Warning =======================
      if (process.env.NODE_ENV !== 'production') {
        var warning = (0, _warning.devUseWarning)('Calendar');
        warning.deprecated(!dateFullCellRender, 'dateFullCellRender', 'fullCellRender');
        warning.deprecated(!dateCellRender, 'dateCellRender', 'cellRender');
        warning.deprecated(!monthFullCellRender, 'monthFullCellRender', 'fullCellRender');
        warning.deprecated(!monthCellRender, 'monthCellRender', 'cellRender');
      }
      // ====================== State =======================
      // Value
      var _useMergedState = (0, _useMergedState5["default"])(function () {
          return value || generateConfig.getNow();
        }, {
          defaultValue: defaultValue,
          value: value
        }),
        _useMergedState2 = _slicedToArray(_useMergedState, 2),
        mergedValue = _useMergedState2[0],
        setMergedValue = _useMergedState2[1];
      // Mode
      var _useMergedState3 = (0, _useMergedState5["default"])('month', {
          value: mode
        }),
        _useMergedState4 = _slicedToArray(_useMergedState3, 2),
        mergedMode = _useMergedState4[0],
        setMergedMode = _useMergedState4[1];
      var panelMode = React.useMemo(function () {
        return mergedMode === 'year' ? 'month' : 'date';
      }, [mergedMode]);
      // Disabled Date
      var mergedDisabledDate = React.useCallback(function (date) {
        var notInRange = validRange ? generateConfig.isAfter(validRange[0], date) || generateConfig.isAfter(date, validRange[1]) : false;
        return notInRange || !!(disabledDate === null || disabledDate === void 0 ? void 0 : disabledDate(date));
      }, [disabledDate, validRange]);
      // ====================== Events ======================
      var triggerPanelChange = function triggerPanelChange(date, newMode) {
        onPanelChange === null || onPanelChange === void 0 ? void 0 : onPanelChange(date, newMode);
      };
      var triggerChange = function triggerChange(date) {
        setMergedValue(date);
        if (!isSameDate(date, mergedValue)) {
          // Trigger when month panel switch month
          if (panelMode === 'date' && !isSameMonth(date, mergedValue) || panelMode === 'month' && !isSameYear(date, mergedValue)) {
            triggerPanelChange(date, mergedMode);
          }
          onChange === null || onChange === void 0 ? void 0 : onChange(date);
        }
      };
      var triggerModeChange = function triggerModeChange(newMode) {
        setMergedMode(newMode);
        triggerPanelChange(mergedValue, newMode);
      };
      var onInternalSelect = function onInternalSelect(date, source) {
        triggerChange(date);
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(date, {
          source: source
        });
      };
      // ====================== Locale ======================
      var getDefaultLocale = function getDefaultLocale() {
        var locale = props.locale;
        var result = Object.assign(Object.assign({}, _en_US["default"]), locale);
        result.lang = Object.assign(Object.assign({}, result.lang), (locale || {}).lang);
        return result;
      };
      // ====================== Render ======================
      var dateRender = React.useCallback(function (date, info) {
        if (fullCellRender) {
          return fullCellRender(date, info);
        }
        if (dateFullCellRender) {
          return dateFullCellRender(date);
        }
        return /*#__PURE__*/React.createElement("div", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-cell-inner"), "".concat(calendarPrefixCls, "-date"), _defineProperty({}, "".concat(calendarPrefixCls, "-date-today"), isSameDate(today, date)))
        }, /*#__PURE__*/React.createElement("div", {
          className: "".concat(calendarPrefixCls, "-date-value")
        }, String(generateConfig.getDate(date)).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
          className: "".concat(calendarPrefixCls, "-date-content")
        }, cellRender ? cellRender(date, info) : dateCellRender && dateCellRender(date)));
      }, [dateFullCellRender, dateCellRender, cellRender, fullCellRender]);
      var monthRender = React.useCallback(function (date, info) {
        if (fullCellRender) {
          return fullCellRender(date, info);
        }
        if (monthFullCellRender) {
          return monthFullCellRender(date);
        }
        var months = info.locale.shortMonths || generateConfig.locale.getShortMonths(info.locale.locale);
        return /*#__PURE__*/React.createElement("div", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-cell-inner"), "".concat(calendarPrefixCls, "-date"), _defineProperty({}, "".concat(calendarPrefixCls, "-date-today"), isSameMonth(today, date)))
        }, /*#__PURE__*/React.createElement("div", {
          className: "".concat(calendarPrefixCls, "-date-value")
        }, months[generateConfig.getMonth(date)]), /*#__PURE__*/React.createElement("div", {
          className: "".concat(calendarPrefixCls, "-date-content")
        }, cellRender ? cellRender(date, info) : monthCellRender && monthCellRender(date)));
      }, [monthFullCellRender, monthCellRender, cellRender, fullCellRender]);
      var _useLocale = (0, _locale.useLocale)('Calendar', getDefaultLocale),
        _useLocale2 = _slicedToArray(_useLocale, 1),
        contextLocale = _useLocale2[0];
      var mergedCellRender = function mergedCellRender(current, info) {
        if (info.type === 'date') {
          return dateRender(current, info);
        }
        if (info.type === 'month') {
          return monthRender(current, Object.assign(Object.assign({}, info), {
            locale: contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.lang
          }));
        }
      };
      return wrapCSSVar( /*#__PURE__*/React.createElement("div", {
        className: (0, _classnames["default"])(calendarPrefixCls, _defineProperty(_defineProperty(_defineProperty({}, "".concat(calendarPrefixCls, "-full"), fullscreen), "".concat(calendarPrefixCls, "-mini"), !fullscreen), "".concat(calendarPrefixCls, "-rtl"), direction === 'rtl'), calendar === null || calendar === void 0 ? void 0 : calendar.className, className, rootClassName, hashId, cssVarCls),
        style: Object.assign(Object.assign({}, calendar === null || calendar === void 0 ? void 0 : calendar.style), style)
      }, headerRender ? headerRender({
        value: mergedValue,
        type: mergedMode,
        onChange: function onChange(nextDate) {
          onInternalSelect(nextDate, 'customize');
        },
        onTypeChange: triggerModeChange
      }) : ( /*#__PURE__*/React.createElement(_Header["default"], {
        prefixCls: calendarPrefixCls,
        value: mergedValue,
        generateConfig: generateConfig,
        mode: mergedMode,
        fullscreen: fullscreen,
        locale: contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.lang,
        validRange: validRange,
        onChange: onInternalSelect,
        onModeChange: triggerModeChange
      })), /*#__PURE__*/React.createElement(_rcPicker.PickerPanel, {
        value: mergedValue,
        prefixCls: prefixCls,
        locale: contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.lang,
        generateConfig: generateConfig,
        cellRender: mergedCellRender,
        onSelect: function onSelect(nextDate) {
          onInternalSelect(nextDate, panelMode);
        },
        mode: panelMode,
        picker: panelMode,
        disabledDate: mergedDisabledDate,
        hideHeader: true
      })));
    };
    if (process.env.NODE_ENV !== 'production') {
      Calendar.displayName = 'Calendar';
    }
    return Calendar;
  }
  var _default = _exports["default"] = generateCalendar;
});