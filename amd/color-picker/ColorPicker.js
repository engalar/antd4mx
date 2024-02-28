function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-util/es/hooks/useMergedState", "antd4mx/_util/PurePanel", "antd4mx/_util/statusUtils", "antd4mx/_util/warning", "antd4mx/config-provider/context", "antd4mx/config-provider/DisabledContext", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/config-provider/hooks/useSize", "antd4mx/form/context", "antd4mx/popover", "antd4mx/color-picker/ColorPickerPanel", "antd4mx/color-picker/components/ColorTrigger", "antd4mx/color-picker/hooks/useColorState", "antd4mx/color-picker/style", "antd4mx/color-picker/util"], function (_exports, _react, _classnames, _useMergedState5, _PurePanel, _statusUtils, _warning, _context, _DisabledContext, _useCSSVarCls, _useSize, _context2, _popover, _ColorPickerPanel, _ColorTrigger, _useColorState3, _style, _util) {
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
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var ColorPicker = function ColorPicker(props) {
    var value = props.value,
      defaultValue = props.defaultValue,
      format = props.format,
      defaultFormat = props.defaultFormat,
      _props$allowClear = props.allowClear,
      allowClear = _props$allowClear === void 0 ? false : _props$allowClear,
      presets = props.presets,
      children = props.children,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? 'click' : _props$trigger,
      open = props.open,
      disabled = props.disabled,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'bottomLeft' : _props$placement,
      _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? true : _props$arrow,
      panelRender = props.panelRender,
      showText = props.showText,
      style = props.style,
      className = props.className,
      customizeSize = props.size,
      rootClassName = props.rootClassName,
      customizePrefixCls = props.prefixCls,
      styles = props.styles,
      _props$disabledAlpha = props.disabledAlpha,
      disabledAlpha = _props$disabledAlpha === void 0 ? false : _props$disabledAlpha,
      onFormatChange = props.onFormatChange,
      onChange = props.onChange,
      onClear = props.onClear,
      onOpenChange = props.onOpenChange,
      onChangeComplete = props.onChangeComplete,
      getPopupContainer = props.getPopupContainer,
      _props$autoAdjustOver = props.autoAdjustOverflow,
      autoAdjustOverflow = _props$autoAdjustOver === void 0 ? true : _props$autoAdjustOver,
      destroyTooltipOnHide = props.destroyTooltipOnHide,
      rest = __rest(props, ["value", "defaultValue", "format", "defaultFormat", "allowClear", "presets", "children", "trigger", "open", "disabled", "placement", "arrow", "panelRender", "showText", "style", "className", "size", "rootClassName", "prefixCls", "styles", "disabledAlpha", "onFormatChange", "onChange", "onClear", "onOpenChange", "onChangeComplete", "getPopupContainer", "autoAdjustOverflow", "destroyTooltipOnHide"]);
    var _useContext = (0, _react.useContext)(_context.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls,
      direction = _useContext.direction,
      colorPicker = _useContext.colorPicker;
    var contextDisabled = (0, _react.useContext)(_DisabledContext["default"]);
    var mergedDisabled = disabled !== null && disabled !== void 0 ? disabled : contextDisabled;
    var _useColorState = (0, _useColorState3["default"])('', {
        value: value,
        defaultValue: defaultValue
      }),
      _useColorState2 = _slicedToArray(_useColorState, 2),
      colorValue = _useColorState2[0],
      setColorValue = _useColorState2[1];
    var _useMergedState = (0, _useMergedState5["default"])(false, {
        value: open,
        postState: function postState(openData) {
          return !mergedDisabled && openData;
        },
        onChange: onOpenChange
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      popupOpen = _useMergedState2[0],
      setPopupOpen = _useMergedState2[1];
    var _useMergedState3 = (0, _useMergedState5["default"])(format, {
        value: format,
        defaultValue: defaultFormat,
        onChange: onFormatChange
      }),
      _useMergedState4 = _slicedToArray(_useMergedState3, 2),
      formatValue = _useMergedState4[0],
      setFormatValue = _useMergedState4[1];
    var _useState = (0, _react.useState)(!value && !defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      colorCleared = _useState2[0],
      setColorCleared = _useState2[1];
    var prefixCls = getPrefixCls('color-picker', customizePrefixCls);
    var isAlphaColor = (0, _react.useMemo)(function () {
      return (0, _util.getAlphaColor)(colorValue) < 100;
    }, [colorValue]);
    // ===================== Form Status =====================
    var _React$useContext = _react["default"].useContext(_context2.FormItemInputContext),
      contextStatus = _React$useContext.status;
    // ===================== Style =====================
    var mergedSize = (0, _useSize["default"])(customizeSize);
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _style["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var rtlCls = _defineProperty({}, "".concat(prefixCls, "-rtl"), direction);
    var mergeRootCls = (0, _classnames["default"])(rootClassName, cssVarCls, rootCls, rtlCls);
    var mergeCls = (0, _classnames["default"])((0, _statusUtils.getStatusClassNames)(prefixCls, contextStatus), _defineProperty(_defineProperty({}, "".concat(prefixCls, "-sm"), mergedSize === 'small'), "".concat(prefixCls, "-lg"), mergedSize === 'large'), colorPicker === null || colorPicker === void 0 ? void 0 : colorPicker.className, mergeRootCls, className, hashId);
    var mergePopupCls = (0, _classnames["default"])(prefixCls, mergeRootCls);
    var popupAllowCloseRef = (0, _react.useRef)(true);
    // ===================== Warning ======================
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('ColorPicker');
      process.env.NODE_ENV !== "production" ? warning(!(disabledAlpha && isAlphaColor), 'usage', '`disabledAlpha` will make the alpha to be 100% when use alpha color.') : void 0;
    }
    var handleChange = function handleChange(data, type, pickColor) {
      var color = (0, _util.generateColor)(data);
      var isNull = value === null || !value && defaultValue === null;
      if (colorCleared || isNull) {
        setColorCleared(false);
        // ignore alpha slider
        if ((0, _util.getAlphaColor)(colorValue) === 0 && type !== 'alpha') {
          color = (0, _util.genAlphaColor)(color);
        }
      }
      // ignore alpha color
      if (disabledAlpha && isAlphaColor) {
        color = (0, _util.genAlphaColor)(color);
      }
      // Only for drag-and-drop color picking
      if (pickColor) {
        popupAllowCloseRef.current = false;
      } else {
        onChangeComplete === null || onChangeComplete === void 0 ? void 0 : onChangeComplete(color);
      }
      setColorValue(color);
      onChange === null || onChange === void 0 ? void 0 : onChange(color, color.toHexString());
    };
    var handleClear = function handleClear() {
      setColorCleared(true);
      onClear === null || onClear === void 0 ? void 0 : onClear();
    };
    var handleChangeComplete = function handleChangeComplete(color) {
      popupAllowCloseRef.current = true;
      var changeColor = (0, _util.generateColor)(color);
      // ignore alpha color
      if (disabledAlpha && isAlphaColor) {
        changeColor = (0, _util.genAlphaColor)(color);
      }
      onChangeComplete === null || onChangeComplete === void 0 ? void 0 : onChangeComplete(changeColor);
    };
    var popoverProps = {
      open: popupOpen,
      trigger: trigger,
      placement: placement,
      arrow: arrow,
      rootClassName: rootClassName,
      getPopupContainer: getPopupContainer,
      autoAdjustOverflow: autoAdjustOverflow,
      destroyTooltipOnHide: destroyTooltipOnHide
    };
    var colorBaseProps = {
      prefixCls: prefixCls,
      color: colorValue,
      allowClear: allowClear,
      colorCleared: colorCleared,
      disabled: mergedDisabled,
      disabledAlpha: disabledAlpha,
      presets: presets,
      panelRender: panelRender,
      format: formatValue,
      onFormatChange: setFormatValue,
      onChangeComplete: handleChangeComplete
    };
    var mergedStyle = Object.assign(Object.assign({}, colorPicker === null || colorPicker === void 0 ? void 0 : colorPicker.style), style);
    // ============================ zIndex ============================
    return wrapCSSVar( /*#__PURE__*/_react["default"].createElement(_popover["default"], Object.assign({
      style: styles === null || styles === void 0 ? void 0 : styles.popup,
      overlayInnerStyle: styles === null || styles === void 0 ? void 0 : styles.popupOverlayInner,
      onOpenChange: function onOpenChange(visible) {
        if (popupAllowCloseRef.current && !mergedDisabled) {
          setPopupOpen(visible);
        }
      },
      content: /*#__PURE__*/_react["default"].createElement(_context2.NoFormStyle, {
        override: true,
        status: true
      }, /*#__PURE__*/_react["default"].createElement(_ColorPickerPanel["default"], Object.assign({}, colorBaseProps, {
        onChange: handleChange,
        onChangeComplete: handleChangeComplete,
        onClear: handleClear
      }))),
      overlayClassName: mergePopupCls
    }, popoverProps), children || ( /*#__PURE__*/_react["default"].createElement(_ColorTrigger["default"], Object.assign({
      open: popupOpen,
      className: mergeCls,
      style: mergedStyle,
      color: value ? (0, _util.generateColor)(value) : colorValue,
      prefixCls: prefixCls,
      disabled: mergedDisabled,
      colorCleared: colorCleared,
      showText: showText,
      format: formatValue
    }, rest)))));
  };
  if (process.env.NODE_ENV !== 'production') {
    ColorPicker.displayName = 'ColorPicker';
  }
  var PurePanel = (0, _PurePanel["default"])(ColorPicker, 'color-picker', /* istanbul ignore next */
  function (prefixCls) {
    return prefixCls;
  }, function (props) {
    return Object.assign(Object.assign({}, props), {
      placement: 'bottom',
      autoAdjustOverflow: false
    });
  });
  ColorPicker._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
  var _default = _exports["default"] = ColorPicker;
});