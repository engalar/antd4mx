function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-checkbox", "antd4mx/_util/warning", "antd4mx/_util/wave", "antd4mx/_util/wave/interface", "antd4mx/config-provider", "antd4mx/config-provider/DisabledContext", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/form/context", "antd4mx/checkbox/GroupContext", "antd4mx/checkbox/style"], function (_exports, React, _classnames, _rcCheckbox, _warning, _wave, _interface, _configProvider, _DisabledContext, _useCSSVarCls, _context, _GroupContext, _style) {
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
  var InternalCheckbox = function InternalCheckbox(props, ref) {
    var _a;
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      children = props.children,
      _props$indeterminate = props.indeterminate,
      indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
      style = props.style,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      _props$skipGroup = props.skipGroup,
      skipGroup = _props$skipGroup === void 0 ? false : _props$skipGroup,
      disabled = props.disabled,
      restProps = __rest(props, ["prefixCls", "className", "rootClassName", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      checkbox = _React$useContext.checkbox;
    var checkboxGroup = React.useContext(_GroupContext["default"]);
    var _React$useContext2 = React.useContext(_context.FormItemInputContext),
      isFormItemInput = _React$useContext2.isFormItemInput;
    var contextDisabled = React.useContext(_DisabledContext["default"]);
    var mergedDisabled = (_a = (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.disabled) || disabled) !== null && _a !== void 0 ? _a : contextDisabled;
    var prevValue = React.useRef(restProps.value);
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Checkbox');
      process.env.NODE_ENV !== "production" ? warning('checked' in restProps || !!checkboxGroup || !('value' in restProps), 'usage', '`value` is not a valid prop, do you mean `checked`?') : void 0;
    }
    React.useEffect(function () {
      checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
    }, []);
    React.useEffect(function () {
      if (skipGroup) {
        return;
      }
      if (restProps.value !== prevValue.current) {
        checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(prevValue.current);
        checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
        prevValue.current = restProps.value;
      }
      return function () {
        return checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(restProps.value);
      };
    }, [restProps.value]);
    var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _style["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var checkboxProps = Object.assign({}, restProps);
    if (checkboxGroup && !skipGroup) {
      checkboxProps.onChange = function () {
        if (restProps.onChange) {
          restProps.onChange.apply(restProps, arguments);
        }
        if (checkboxGroup.toggleOption) {
          checkboxGroup.toggleOption({
            label: children,
            value: restProps.value
          });
        }
      };
      checkboxProps.name = checkboxGroup.name;
      checkboxProps.checked = checkboxGroup.value.includes(restProps.value);
    }
    var classString = (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-wrapper-checked"), checkboxProps.checked), "".concat(prefixCls, "-wrapper-disabled"), mergedDisabled), "".concat(prefixCls, "-wrapper-in-form-item"), isFormItemInput), checkbox === null || checkbox === void 0 ? void 0 : checkbox.className, className, rootClassName, cssVarCls, rootCls, hashId);
    var checkboxClass = (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-indeterminate"), indeterminate), _interface.TARGET_CLS, hashId);
    var ariaChecked = indeterminate ? 'mixed' : undefined;
    return wrapCSSVar( /*#__PURE__*/React.createElement(_wave["default"], {
      component: "Checkbox",
      disabled: mergedDisabled
    }, /*#__PURE__*/React.createElement("label", {
      className: classString,
      style: Object.assign(Object.assign({}, checkbox === null || checkbox === void 0 ? void 0 : checkbox.style), style),
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }, /*#__PURE__*/React.createElement(_rcCheckbox["default"], Object.assign({
      "aria-checked": ariaChecked
    }, checkboxProps, {
      prefixCls: prefixCls,
      className: checkboxClass,
      disabled: mergedDisabled,
      ref: ref
    })), children !== undefined && /*#__PURE__*/React.createElement("span", null, children))));
  };
  var Checkbox = /*#__PURE__*/React.forwardRef(InternalCheckbox);
  if (process.env.NODE_ENV !== 'production') {
    Checkbox.displayName = 'Checkbox';
  }
  var _default = _exports["default"] = Checkbox;
});