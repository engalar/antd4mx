function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-input", "rc-util/es/ref", "antd4mx/_util/statusUtils", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/config-provider/DisabledContext", "antd4mx/config-provider/hooks/useSize", "antd4mx/form/context", "antd4mx/space/Compact", "antd4mx/input/hooks/useRemovePasswordTimeout", "antd4mx/input/style", "antd4mx/input/utils", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/form/hooks/useVariants", "antd4mx/_util/getAllowClear"], function (_exports, _react, _classnames, _rcInput, _ref2, _statusUtils, _warning, _configProvider, _DisabledContext, _useSize, _context, _Compact, _useRemovePasswordTimeout, _style, _utils, _useCSSVarCls, _useVariants, _getAllowClear) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _exports.triggerFocus = triggerFocus;
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
  function triggerFocus(element, option) {
    if (!element) {
      return;
    }
    element.focus(option);
    // Selection content
    var _ref = option || {},
      cursor = _ref.cursor;
    if (cursor) {
      var len = element.value.length;
      switch (cursor) {
        case 'start':
          element.setSelectionRange(0, 0);
          break;
        case 'end':
          element.setSelectionRange(len, len);
          break;
        default:
          element.setSelectionRange(0, len);
          break;
      }
    }
  }
  var Input = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    var _a;
    var customizePrefixCls = props.prefixCls,
      _props$bordered = props.bordered,
      bordered = _props$bordered === void 0 ? true : _props$bordered,
      customStatus = props.status,
      customSize = props.size,
      customDisabled = props.disabled,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      suffix = props.suffix,
      allowClear = props.allowClear,
      addonAfter = props.addonAfter,
      addonBefore = props.addonBefore,
      className = props.className,
      style = props.style,
      styles = props.styles,
      rootClassName = props.rootClassName,
      onChange = props.onChange,
      classes = props.classNames,
      customVariant = props.variant,
      rest = __rest(props, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]);
    if (process.env.NODE_ENV !== 'production') {
      var _devUseWarning = (0, _warning.devUseWarning)('Input'),
        deprecated = _devUseWarning.deprecated;
      deprecated(!('bordered' in props), 'bordered', 'variant');
    }
    var _React$useContext = _react["default"].useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      input = _React$useContext.input;
    var prefixCls = getPrefixCls('input', customizePrefixCls);
    var inputRef = (0, _react.useRef)(null);
    // Style
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _style["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    // ===================== Compact Item =====================
    var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
      compactSize = _useCompactItemContex.compactSize,
      compactItemClassnames = _useCompactItemContex.compactItemClassnames;
    // ===================== Size =====================
    var mergedSize = (0, _useSize["default"])(function (ctx) {
      var _a;
      return (_a = customSize !== null && customSize !== void 0 ? customSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
    });
    // ===================== Disabled =====================
    var disabled = _react["default"].useContext(_DisabledContext["default"]);
    var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    // ===================== Status =====================
    var _useContext = (0, _react.useContext)(_context.FormItemInputContext),
      contextStatus = _useContext.status,
      hasFeedback = _useContext.hasFeedback,
      feedbackIcon = _useContext.feedbackIcon;
    var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);
    // ===================== Focus warning =====================
    var inputHasPrefixSuffix = (0, _utils.hasPrefixSuffix)(props) || !!hasFeedback;
    var prevHasPrefixSuffix = (0, _react.useRef)(inputHasPrefixSuffix);
    /* eslint-disable react-hooks/rules-of-hooks */
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Input');
      (0, _react.useEffect)(function () {
        var _a;
        if (inputHasPrefixSuffix && !prevHasPrefixSuffix.current) {
          process.env.NODE_ENV !== "production" ? warning(document.activeElement === ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input), 'usage', "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ") : void 0;
        }
        prevHasPrefixSuffix.current = inputHasPrefixSuffix;
      }, [inputHasPrefixSuffix]);
    }
    /* eslint-enable */
    // ===================== Remove Password value =====================
    var removePasswordTimeout = (0, _useRemovePasswordTimeout["default"])(inputRef, true);
    var handleBlur = function handleBlur(e) {
      removePasswordTimeout();
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    };
    var handleFocus = function handleFocus(e) {
      removePasswordTimeout();
      onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
    };
    var handleChange = function handleChange(e) {
      removePasswordTimeout();
      onChange === null || onChange === void 0 ? void 0 : onChange(e);
    };
    var suffixNode = (hasFeedback || suffix) && ( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, suffix, hasFeedback && feedbackIcon));
    var mergedAllowClear = (0, _getAllowClear["default"])(allowClear);
    var _useVariant = (0, _useVariants["default"])(customVariant, bordered),
      _useVariant2 = _slicedToArray(_useVariant, 2),
      variant = _useVariant2[0],
      enableVariantCls = _useVariant2[1];
    return wrapCSSVar( /*#__PURE__*/_react["default"].createElement(_rcInput["default"], Object.assign({
      ref: (0, _ref2.composeRef)(ref, inputRef),
      prefixCls: prefixCls,
      autoComplete: input === null || input === void 0 ? void 0 : input.autoComplete
    }, rest, {
      disabled: mergedDisabled,
      onBlur: handleBlur,
      onFocus: handleFocus,
      style: Object.assign(Object.assign({}, input === null || input === void 0 ? void 0 : input.style), style),
      styles: Object.assign(Object.assign({}, input === null || input === void 0 ? void 0 : input.styles), styles),
      suffix: suffixNode,
      allowClear: mergedAllowClear,
      className: (0, _classnames["default"])(className, rootClassName, cssVarCls, rootCls, compactItemClassnames, input === null || input === void 0 ? void 0 : input.className),
      onChange: handleChange,
      addonAfter: addonAfter && ( /*#__PURE__*/_react["default"].createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/_react["default"].createElement(_context.NoFormStyle, {
        override: true,
        status: true
      }, addonAfter))),
      addonBefore: addonBefore && ( /*#__PURE__*/_react["default"].createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/_react["default"].createElement(_context.NoFormStyle, {
        override: true,
        status: true
      }, addonBefore))),
      classNames: Object.assign(Object.assign(Object.assign({}, classes), input === null || input === void 0 ? void 0 : input.classNames), {
        input: (0, _classnames["default"])(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-sm"), mergedSize === 'small'), "".concat(prefixCls, "-lg"), mergedSize === 'large'), "".concat(prefixCls, "-rtl"), direction === 'rtl'), classes === null || classes === void 0 ? void 0 : classes.input, (_a = input === null || input === void 0 ? void 0 : input.classNames) === null || _a === void 0 ? void 0 : _a.input, hashId),
        variant: (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-").concat(variant), enableVariantCls), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus)),
        affixWrapper: (0, _classnames["default"])(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-affix-wrapper-sm"), mergedSize === 'small'), "".concat(prefixCls, "-affix-wrapper-lg"), mergedSize === 'large'), "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), hashId),
        wrapper: (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-group-rtl"), direction === 'rtl'), hashId),
        groupWrapper: (0, _classnames["default"])(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-group-wrapper-sm"), mergedSize === 'small'), "".concat(prefixCls, "-group-wrapper-lg"), mergedSize === 'large'), "".concat(prefixCls, "-group-wrapper-rtl"), direction === 'rtl'), "".concat(prefixCls, "-group-wrapper-").concat(variant), enableVariantCls), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-group-wrapper"), mergedStatus, hasFeedback), hashId)
      })
    })));
  });
  var _default = _exports["default"] = Input;
});