function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@ant-design/icons/es/icons/CalendarOutlined", "@ant-design/icons/es/icons/ClockCircleOutlined", "classnames", "rc-picker", "antd4mx/_util/hooks/useZIndex", "antd4mx/_util/statusUtils", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/config-provider/DisabledContext", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/config-provider/hooks/useSize", "antd4mx/form/context", "antd4mx/form/hooks/useVariants", "antd4mx/locale", "antd4mx/space/Compact", "antd4mx/date-picker/locale/en_US", "antd4mx/date-picker/style", "antd4mx/date-picker/util", "antd4mx/date-picker/generatePicker/useComponents"], function (_exports, _react, _CalendarOutlined, _ClockCircleOutlined, _classnames, _rcPicker, _useZIndex3, _statusUtils, _warning, _configProvider, _DisabledContext, _useCSSVarCls, _useSize, _context, _useVariants, _locale, _Compact, _en_US, _style, _util, _useComponents) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = generatePicker;
  var React = _react;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  function generatePicker(generateConfig) {
    function getPicker(picker, displayName) {
      var consumerName = displayName === 'TimePicker' ? 'timePicker' : 'datePicker';
      var Picker = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
        var _a;
        var customizePrefixCls = props.prefixCls,
          customizeGetPopupContainer = props.getPopupContainer,
          components = props.components,
          style = props.style,
          className = props.className,
          rootClassName = props.rootClassName,
          customizeSize = props.size,
          bordered = props.bordered,
          placement = props.placement,
          placeholder = props.placeholder,
          popupClassName = props.popupClassName,
          dropdownClassName = props.dropdownClassName,
          customDisabled = props.disabled,
          customStatus = props.status,
          customVariant = props.variant,
          restProps = __rest(props, ["prefixCls", "getPopupContainer", "components", "style", "className", "rootClassName", "size", "bordered", "placement", "placeholder", "popupClassName", "dropdownClassName", "disabled", "status", "variant"]);
        var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
          getPrefixCls = _useContext.getPrefixCls,
          direction = _useContext.direction,
          getPopupContainer = _useContext.getPopupContainer,
          consumerStyle = _useContext[consumerName];
        var prefixCls = getPrefixCls('picker', customizePrefixCls);
        var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
          compactSize = _useCompactItemContex.compactSize,
          compactItemClassnames = _useCompactItemContex.compactItemClassnames;
        var innerRef = React.useRef(null);
        var _useVariant = (0, _useVariants["default"])(customVariant, bordered),
          _useVariant2 = _slicedToArray(_useVariant, 2),
          variant = _useVariant2[0],
          enableVariantCls = _useVariant2[1];
        var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
        var _useStyle = (0, _style["default"])(prefixCls, rootCls),
          _useStyle2 = _slicedToArray(_useStyle, 3),
          wrapCSSVar = _useStyle2[0],
          hashId = _useStyle2[1],
          cssVarCls = _useStyle2[2];
        (0, _react.useImperativeHandle)(ref, function () {
          return innerRef.current;
        });
        var additionalProps = {
          showToday: true
        };
        var mergedPicker = picker || props.picker;
        var rootPrefixCls = getPrefixCls();
        // =================== Warning =====================
        if (process.env.NODE_ENV !== 'production') {
          var warning = (0, _warning.devUseWarning)(displayName || 'DatePicker');
          process.env.NODE_ENV !== "production" ? warning(picker !== 'quarter', 'deprecated', "DatePicker.".concat(displayName, " is legacy usage. Please use DatePicker[picker='").concat(picker, "'] directly.")) : void 0;
          warning.deprecated(!dropdownClassName, 'dropdownClassName', 'popupClassName');
          warning.deprecated(!('bordered' in props), 'bordered', 'variant');
        }
        // ===================== Icon =====================
        var _useIcons = (0, _util.useIcons)(props, prefixCls),
          _useIcons2 = _slicedToArray(_useIcons, 2),
          mergedAllowClear = _useIcons2[0],
          removeIcon = _useIcons2[1];
        // ================== components ==================
        var mergedComponents = (0, _useComponents["default"])(components);
        // ===================== Size =====================
        var mergedSize = (0, _useSize["default"])(function (ctx) {
          var _a;
          return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
        });
        // ===================== Disabled =====================
        var disabled = React.useContext(_DisabledContext["default"]);
        var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
        // ===================== FormItemInput =====================
        var formItemContext = (0, _react.useContext)(_context.FormItemInputContext);
        var hasFeedback = formItemContext.hasFeedback,
          contextStatus = formItemContext.status,
          feedbackIcon = formItemContext.feedbackIcon;
        var suffixNode = /*#__PURE__*/React.createElement(React.Fragment, null, mergedPicker === 'time' ? /*#__PURE__*/React.createElement(_ClockCircleOutlined["default"], null) : /*#__PURE__*/React.createElement(_CalendarOutlined["default"], null), hasFeedback && feedbackIcon);
        var _useLocale = (0, _locale.useLocale)('DatePicker', _en_US["default"]),
          _useLocale2 = _slicedToArray(_useLocale, 1),
          contextLocale = _useLocale2[0];
        var locale = Object.assign(Object.assign({}, contextLocale), props.locale);
        // ============================ zIndex ============================
        var _useZIndex = (0, _useZIndex3.useZIndex)('DatePicker', (_a = props.popupStyle) === null || _a === void 0 ? void 0 : _a.zIndex),
          _useZIndex2 = _slicedToArray(_useZIndex, 1),
          zIndex = _useZIndex2[0];
        return wrapCSSVar( /*#__PURE__*/React.createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/React.createElement(_rcPicker["default"], Object.assign({
          ref: innerRef,
          placeholder: (0, _util.getPlaceholder)(locale, mergedPicker, placeholder),
          suffixIcon: suffixNode,
          dropdownAlign: (0, _util.transPlacement2DropdownAlign)(direction, placement),
          prevIcon: /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-prev-icon")
          }),
          nextIcon: /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-next-icon")
          }),
          superPrevIcon: /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-super-prev-icon")
          }),
          superNextIcon: /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-super-next-icon")
          }),
          transitionName: "".concat(rootPrefixCls, "-slide-up"),
          picker: picker
        }, additionalProps, restProps, {
          locale: locale.lang,
          className: (0, _classnames["default"])(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), "".concat(prefixCls, "-").concat(variant), enableVariantCls), (0, _statusUtils.getStatusClassNames)(prefixCls, (0, _statusUtils.getMergedStatus)(contextStatus, customStatus), hasFeedback), hashId, compactItemClassnames, consumerStyle === null || consumerStyle === void 0 ? void 0 : consumerStyle.className, className, cssVarCls, rootCls, rootClassName),
          style: Object.assign(Object.assign({}, consumerStyle === null || consumerStyle === void 0 ? void 0 : consumerStyle.style), style),
          prefixCls: prefixCls,
          getPopupContainer: customizeGetPopupContainer || getPopupContainer,
          generateConfig: generateConfig,
          components: mergedComponents,
          direction: direction,
          disabled: mergedDisabled,
          classNames: {
            popup: (0, _classnames["default"])(hashId, cssVarCls, rootCls, rootClassName, popupClassName || dropdownClassName)
          },
          styles: {
            popup: Object.assign(Object.assign({}, props.popupStyle), {
              zIndex: zIndex
            })
          },
          allowClear: mergedAllowClear,
          removeIcon: removeIcon
        }))));
      });
      if (process.env.NODE_ENV !== 'production' && displayName) {
        Picker.displayName = displayName;
      }
      return Picker;
    }
    var DatePicker = getPicker();
    var WeekPicker = getPicker('week', 'WeekPicker');
    var MonthPicker = getPicker('month', 'MonthPicker');
    var YearPicker = getPicker('year', 'YearPicker');
    var TimePicker = getPicker('time', 'TimePicker');
    var QuarterPicker = getPicker('quarter', 'QuarterPicker');
    return {
      DatePicker: DatePicker,
      WeekPicker: WeekPicker,
      MonthPicker: MonthPicker,
      YearPicker: YearPicker,
      TimePicker: TimePicker,
      QuarterPicker: QuarterPicker
    };
  }
});