function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "classnames", "rc-util/es/omit", "antd4mx/config-provider", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/checkbox/Checkbox", "antd4mx/checkbox/GroupContext", "antd4mx/checkbox/style"], function (_exports, _toConsumableArray2, React, _classnames, _omit, _configProvider, _useCSSVarCls, _Checkbox, _GroupContext, _style) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "GroupContext", {
    enumerable: true,
    get: function get() {
      return _GroupContext["default"];
    }
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
  var CheckboxGroup = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var defaultValue = props.defaultValue,
      children = props.children,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      style = props.style,
      onChange = props.onChange,
      restProps = __rest(props, ["defaultValue", "children", "options", "prefixCls", "className", "rootClassName", "style", "onChange"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;
    var _React$useState = React.useState(restProps.value || defaultValue || []),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];
    var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      registeredValues = _React$useState4[0],
      setRegisteredValues = _React$useState4[1];
    React.useEffect(function () {
      if ('value' in restProps) {
        setValue(restProps.value || []);
      }
    }, [restProps.value]);
    var memoOptions = React.useMemo(function () {
      return options.map(function (option) {
        if (typeof option === 'string' || typeof option === 'number') {
          return {
            label: option,
            value: option
          };
        }
        return option;
      });
    }, [options]);
    var cancelValue = function cancelValue(val) {
      setRegisteredValues(function (prevValues) {
        return prevValues.filter(function (v) {
          return v !== val;
        });
      });
    };
    var registerValue = function registerValue(val) {
      setRegisteredValues(function (prevValues) {
        return [].concat((0, _toConsumableArray2["default"])(prevValues), [val]);
      });
    };
    var toggleOption = function toggleOption(option) {
      var optionIndex = value.indexOf(option.value);
      var newValue = (0, _toConsumableArray2["default"])(value);
      if (optionIndex === -1) {
        newValue.push(option.value);
      } else {
        newValue.splice(optionIndex, 1);
      }
      if (!('value' in restProps)) {
        setValue(newValue);
      }
      onChange === null || onChange === void 0 ? void 0 : onChange(newValue.filter(function (val) {
        return registeredValues.includes(val);
      }).sort(function (a, b) {
        var indexA = memoOptions.findIndex(function (opt) {
          return opt.value === a;
        });
        var indexB = memoOptions.findIndex(function (opt) {
          return opt.value === b;
        });
        return indexA - indexB;
      }));
    };
    var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
    var groupPrefixCls = "".concat(prefixCls, "-group");
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _style["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var domProps = (0, _omit["default"])(restProps, ['value', 'disabled']);
    var childrenNode = options.length ? memoOptions.map(function (option) {
      return /*#__PURE__*/React.createElement(_Checkbox["default"], {
        prefixCls: prefixCls,
        key: option.value.toString(),
        disabled: 'disabled' in option ? option.disabled : restProps.disabled,
        value: option.value,
        checked: value.includes(option.value),
        onChange: option.onChange,
        className: "".concat(groupPrefixCls, "-item"),
        style: option.style,
        title: option.title,
        id: option.id,
        required: option.required
      }, option.label);
    }) : children;
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    var context = {
      toggleOption: toggleOption,
      value: value,
      disabled: restProps.disabled,
      name: restProps.name,
      // https://github.com/ant-design/ant-design/issues/16376
      registerValue: registerValue,
      cancelValue: cancelValue
    };
    var classString = (0, _classnames["default"])(groupPrefixCls, _defineProperty({}, "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'), className, rootClassName, cssVarCls, rootCls, hashId);
    return wrapCSSVar( /*#__PURE__*/React.createElement("div", Object.assign({
      className: classString,
      style: style
    }, domProps, {
      ref: ref
    }), /*#__PURE__*/React.createElement(_GroupContext["default"].Provider, {
      value: context
    }, childrenNode)));
  });
  var _default = _exports["default"] = CheckboxGroup;
});