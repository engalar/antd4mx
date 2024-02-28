function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-checkbox", "rc-util/es/ref", "antd4mx/_util/warning", "antd4mx/_util/wave/index", "antd4mx/_util/wave/interface", "antd4mx/config-provider/index", "antd4mx/config-provider/DisabledContext", "antd4mx/form/context", "antd4mx/radio/context", "antd4mx/radio/style/index", "antd4mx/config-provider/hooks/useCSSVarCls"], function (_exports, React, _classnames, _rcCheckbox, _ref, _warning, _index, _interface, _index2, _DisabledContext, _context, _context2, _index3, _useCSSVarCls) {
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
  var InternalRadio = function InternalRadio(props, ref) {
    var _a, _b;
    var groupContext = React.useContext(_context2["default"]);
    var radioOptionTypeContext = React.useContext(_context2.RadioOptionTypeContext);
    var _React$useContext = React.useContext(_index2.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      radio = _React$useContext.radio;
    var innerRef = React.useRef(null);
    var mergedRef = (0, _ref.composeRef)(ref, innerRef);
    var _React$useContext2 = React.useContext(_context.FormItemInputContext),
      isFormItemInput = _React$useContext2.isFormItemInput;
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Radio');
      process.env.NODE_ENV !== "production" ? warning(!('optionType' in props), 'usage', '`optionType` is only support in Radio.Group.') : void 0;
    }
    var onChange = function onChange(e) {
      var _a, _b;
      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
      (_b = groupContext === null || groupContext === void 0 ? void 0 : groupContext.onChange) === null || _b === void 0 ? void 0 : _b.call(groupContext, e);
    };
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      children = props.children,
      style = props.style,
      title = props.title,
      restProps = __rest(props, ["prefixCls", "className", "rootClassName", "children", "style", "title"]);
    var radioPrefixCls = getPrefixCls('radio', customizePrefixCls);
    var isButtonType = ((groupContext === null || groupContext === void 0 ? void 0 : groupContext.optionType) || radioOptionTypeContext) === 'button';
    var prefixCls = isButtonType ? "".concat(radioPrefixCls, "-button") : radioPrefixCls;
    // Style
    var rootCls = (0, _useCSSVarCls["default"])(radioPrefixCls);
    var _useStyle = (0, _index3["default"])(radioPrefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var radioProps = Object.assign({}, restProps);
    // ===================== Disabled =====================
    var disabled = React.useContext(_DisabledContext["default"]);
    if (groupContext) {
      radioProps.name = groupContext.name;
      radioProps.onChange = onChange;
      radioProps.checked = props.value === groupContext.value;
      radioProps.disabled = (_a = radioProps.disabled) !== null && _a !== void 0 ? _a : groupContext.disabled;
    }
    radioProps.disabled = (_b = radioProps.disabled) !== null && _b !== void 0 ? _b : disabled;
    var wrapperClassString = (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-wrapper-checked"), radioProps.checked), "".concat(prefixCls, "-wrapper-disabled"), radioProps.disabled), "".concat(prefixCls, "-wrapper-rtl"), direction === 'rtl'), "".concat(prefixCls, "-wrapper-in-form-item"), isFormItemInput), radio === null || radio === void 0 ? void 0 : radio.className, className, rootClassName, hashId, cssVarCls, rootCls);
    return wrapCSSVar( /*#__PURE__*/React.createElement(_index["default"], {
      component: "Radio",
      disabled: radioProps.disabled
    }, /*#__PURE__*/React.createElement("label", {
      className: wrapperClassString,
      style: Object.assign(Object.assign({}, radio === null || radio === void 0 ? void 0 : radio.style), style),
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      title: title
    }, /*#__PURE__*/React.createElement(_rcCheckbox["default"], Object.assign({}, radioProps, {
      className: (0, _classnames["default"])(radioProps.className, !isButtonType && _interface.TARGET_CLS),
      type: "radio",
      prefixCls: prefixCls,
      ref: mergedRef
    })), children !== undefined ? /*#__PURE__*/React.createElement("span", null, children) : null)));
  };
  var Radio = /*#__PURE__*/React.forwardRef(InternalRadio);
  if (process.env.NODE_ENV !== 'production') {
    Radio.displayName = 'Radio';
  }
  var _default = _exports["default"] = Radio;
});