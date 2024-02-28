define(["exports", "react", "@ant-design/icons/es/icons/DownOutlined", "@ant-design/icons/es/icons/UpOutlined", "classnames", "rc-input-number", "antd4mx/_util/statusUtils", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/config-provider/DisabledContext", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/config-provider/hooks/useSize", "antd4mx/form/context", "antd4mx/form/hooks/useVariants", "antd4mx/space/Compact", "antd4mx/input-number/style/index"], function (_exports, React, _DownOutlined, _UpOutlined, _classnames, _rcInputNumber, _statusUtils, _warning, _index, _DisabledContext, _useCSSVarCls, _useSize, _context, _useVariants, _Compact, _index2) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
  var InputNumber = /*#__PURE__*/React.forwardRef(function (props, ref) {
    if (process.env.NODE_ENV !== 'production') {
      var _devUseWarning = (0, _warning.devUseWarning)('InputNumber'),
        deprecated = _devUseWarning.deprecated;
      deprecated(!('bordered' in props), 'bordered', 'variant');
    }
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;
    var inputRef = React.useRef(null);
    React.useImperativeHandle(ref, function () {
      return inputRef.current;
    });
    var className = props.className,
      rootClassName = props.rootClassName,
      customizeSize = props.size,
      customDisabled = props.disabled,
      customizePrefixCls = props.prefixCls,
      addonBefore = props.addonBefore,
      addonAfter = props.addonAfter,
      prefix = props.prefix,
      bordered = props.bordered,
      readOnly = props.readOnly,
      customStatus = props.status,
      controls = props.controls,
      customVariant = props.variant,
      others = __rest(props, ["className", "rootClassName", "size", "disabled", "prefixCls", "addonBefore", "addonAfter", "prefix", "bordered", "readOnly", "status", "controls", "variant"]);
    var prefixCls = getPrefixCls('input-number', customizePrefixCls);
    // Style
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
      compactSize = _useCompactItemContex.compactSize,
      compactItemClassnames = _useCompactItemContex.compactItemClassnames;
    var upIcon = /*#__PURE__*/React.createElement(_UpOutlined["default"], {
      className: "".concat(prefixCls, "-handler-up-inner")
    });
    var downIcon = /*#__PURE__*/React.createElement(_DownOutlined["default"], {
      className: "".concat(prefixCls, "-handler-down-inner")
    });
    var controlsTemp = typeof controls === 'boolean' ? controls : undefined;
    if (_typeof(controls) === 'object') {
      upIcon = typeof controls.upIcon === 'undefined' ? upIcon : ( /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-handler-up-inner")
      }, controls.upIcon));
      downIcon = typeof controls.downIcon === 'undefined' ? downIcon : ( /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-handler-down-inner")
      }, controls.downIcon));
    }
    var _React$useContext2 = React.useContext(_context.FormItemInputContext),
      hasFeedback = _React$useContext2.hasFeedback,
      contextStatus = _React$useContext2.status,
      isFormItemInput = _React$useContext2.isFormItemInput,
      feedbackIcon = _React$useContext2.feedbackIcon;
    var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);
    var mergedSize = (0, _useSize["default"])(function (ctx) {
      var _a;
      return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
    });
    // ===================== Disabled =====================
    var disabled = React.useContext(_DisabledContext["default"]);
    var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    var _useVariant = (0, _useVariants["default"])(customVariant, bordered),
      _useVariant2 = _slicedToArray(_useVariant, 2),
      variant = _useVariant2[0],
      enableVariantCls = _useVariant2[1];
    // eslint-disable-next-line react/jsx-no-useless-fragment
    var suffixNode = hasFeedback && /*#__PURE__*/React.createElement(React.Fragment, null, feedbackIcon);
    var inputNumberClass = (0, _classnames["default"])(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-lg"), mergedSize === 'large'), "".concat(prefixCls, "-sm"), mergedSize === 'small'), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-in-form-item"), isFormItemInput), hashId);
    var wrapperClassName = "".concat(prefixCls, "-group");
    var element = /*#__PURE__*/React.createElement(_rcInputNumber["default"], Object.assign({
      ref: inputRef,
      disabled: mergedDisabled,
      className: (0, _classnames["default"])(cssVarCls, rootCls, className, rootClassName, compactItemClassnames),
      upHandler: upIcon,
      downHandler: downIcon,
      prefixCls: prefixCls,
      readOnly: readOnly,
      controls: controlsTemp,
      prefix: prefix,
      suffix: suffixNode,
      addonAfter: addonAfter && ( /*#__PURE__*/React.createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/React.createElement(_context.NoFormStyle, {
        override: true,
        status: true
      }, addonAfter))),
      addonBefore: addonBefore && ( /*#__PURE__*/React.createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/React.createElement(_context.NoFormStyle, {
        override: true,
        status: true
      }, addonBefore))),
      classNames: {
        input: inputNumberClass,
        variant: (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-").concat(variant), enableVariantCls), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus, hasFeedback)),
        affixWrapper: (0, _classnames["default"])(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-affix-wrapper-sm"), mergedSize === 'small'), "".concat(prefixCls, "-affix-wrapper-lg"), mergedSize === 'large'), "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), hashId),
        wrapper: (0, _classnames["default"])(_defineProperty({}, "".concat(wrapperClassName, "-rtl"), direction === 'rtl'), hashId),
        groupWrapper: (0, _classnames["default"])(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-group-wrapper-sm"), mergedSize === 'small'), "".concat(prefixCls, "-group-wrapper-lg"), mergedSize === 'large'), "".concat(prefixCls, "-group-wrapper-rtl"), direction === 'rtl'), "".concat(prefixCls, "-group-wrapper-").concat(variant), enableVariantCls), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-group-wrapper"), mergedStatus, hasFeedback), hashId)
      }
    }, others));
    return wrapCSSVar(element);
  });
  var TypedInputNumber = InputNumber;
  /** @private Internal Component. Do not use in your production. */
  var PureInputNumber = function PureInputNumber(props) {
    return /*#__PURE__*/React.createElement(_index["default"], {
      theme: {
        components: {
          InputNumber: {
            handleVisible: true
          }
        }
      }
    }, /*#__PURE__*/React.createElement(InputNumber, Object.assign({}, props)));
  };
  if (process.env.NODE_ENV !== 'production') {
    TypedInputNumber.displayName = 'InputNumber';
  }
  TypedInputNumber._InternalPanelDoNotUseOrYouWillBeFired = PureInputNumber;
  var _default = _exports["default"] = TypedInputNumber;
});