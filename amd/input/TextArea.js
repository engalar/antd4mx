define(["exports", "react", "@ant-design/icons/es/icons/CloseCircleFilled", "classnames", "rc-textarea", "antd4mx/_util/statusUtils", "antd4mx/config-provider", "antd4mx/config-provider/DisabledContext", "antd4mx/config-provider/hooks/useSize", "antd4mx/form/context", "antd4mx/input/Input", "antd4mx/input/style", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/form/hooks/useVariants", "antd4mx/_util/warning"], function (_exports, _react, _CloseCircleFilled, _classnames, _rcTextarea, _statusUtils, _configProvider, _DisabledContext, _useSize, _context, _Input, _style, _useCSSVarCls, _useVariants, _warning) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
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
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var TextArea = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    var _a;
    var customizePrefixCls = props.prefixCls,
      _props$bordered = props.bordered,
      bordered = _props$bordered === void 0 ? true : _props$bordered,
      customizeSize = props.size,
      customDisabled = props.disabled,
      customStatus = props.status,
      allowClear = props.allowClear,
      classes = props.classNames,
      rootClassName = props.rootClassName,
      className = props.className,
      customVariant = props.variant,
      rest = __rest(props, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "variant"]);
    if (process.env.NODE_ENV !== 'production') {
      var _devUseWarning = (0, _warning.devUseWarning)('TextArea'),
        deprecated = _devUseWarning.deprecated;
      deprecated(!('bordered' in props), 'bordered', 'variant');
    }
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;
    // ===================== Size =====================
    var mergedSize = (0, _useSize["default"])(customizeSize);
    // ===================== Disabled =====================
    var disabled = React.useContext(_DisabledContext["default"]);
    var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    // ===================== Status =====================
    var _React$useContext2 = React.useContext(_context.FormItemInputContext),
      contextStatus = _React$useContext2.status,
      hasFeedback = _React$useContext2.hasFeedback,
      feedbackIcon = _React$useContext2.feedbackIcon;
    var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);
    // ===================== Ref =====================
    var innerRef = React.useRef(null);
    React.useImperativeHandle(ref, function () {
      var _a;
      return {
        resizableTextArea: (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea,
        focus: function focus(option) {
          var _a, _b;
          (0, _Input.triggerFocus)((_b = (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea, option);
        },
        blur: function blur() {
          var _a;
          return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        }
      };
    });
    var prefixCls = getPrefixCls('input', customizePrefixCls);
    // Allow clear
    var mergedAllowClear;
    if (_typeof(allowClear) === 'object' && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
      mergedAllowClear = allowClear;
    } else if (allowClear) {
      mergedAllowClear = {
        clearIcon: /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null)
      };
    }
    // ===================== Style =====================
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _style["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var _useVariant = (0, _useVariants["default"])(customVariant, bordered),
      _useVariant2 = _slicedToArray(_useVariant, 2),
      variant = _useVariant2[0],
      enableVariantCls = _useVariant2[1];
    return wrapCSSVar( /*#__PURE__*/React.createElement(_rcTextarea["default"], Object.assign({}, rest, {
      disabled: mergedDisabled,
      allowClear: mergedAllowClear,
      className: (0, _classnames["default"])(cssVarCls, rootCls, className, rootClassName),
      classNames: Object.assign(Object.assign({}, classes), {
        textarea: (0, _classnames["default"])(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-sm"), mergedSize === 'small'), "".concat(prefixCls, "-lg"), mergedSize === 'large'), hashId, classes === null || classes === void 0 ? void 0 : classes.textarea),
        variant: (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-").concat(variant), enableVariantCls), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus)),
        affixWrapper: (0, _classnames["default"])("".concat(prefixCls, "-textarea-affix-wrapper"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), "".concat(prefixCls, "-affix-wrapper-sm"), mergedSize === 'small'), "".concat(prefixCls, "-affix-wrapper-lg"), mergedSize === 'large'), "".concat(prefixCls, "-textarea-show-count"), props.showCount || ((_a = props.count) === null || _a === void 0 ? void 0 : _a.show)), hashId)
      }),
      prefixCls: prefixCls,
      suffix: hasFeedback && /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-textarea-suffix")
      }, feedbackIcon),
      ref: innerRef
    })));
  });
  var _default = _exports["default"] = TextArea;
});