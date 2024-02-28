function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-util/es/hooks/useMergedState", "rc-util/es/pickAttrs", "antd4mx/config-provider", "antd4mx/config-provider/hooks/useSize", "antd4mx/radio/context", "antd4mx/radio/radio", "antd4mx/radio/style", "antd4mx/config-provider/hooks/useCSSVarCls"], function (_exports, React, _classnames, _useMergedState3, _pickAttrs, _configProvider, _useSize, _context, _radio, _style, _useCSSVarCls) {
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
  var RadioGroup = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;
    var _useMergedState = (0, _useMergedState3["default"])(props.defaultValue, {
        value: props.value
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      value = _useMergedState2[0],
      setValue = _useMergedState2[1];
    var onRadioChange = function onRadioChange(ev) {
      var lastValue = value;
      var val = ev.target.value;
      if (!('value' in props)) {
        setValue(val);
      }
      var onChange = props.onChange;
      if (onChange && val !== lastValue) {
        onChange(ev);
      }
    };
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      options = props.options,
      _props$buttonStyle = props.buttonStyle,
      buttonStyle = _props$buttonStyle === void 0 ? 'outline' : _props$buttonStyle,
      disabled = props.disabled,
      children = props.children,
      customizeSize = props.size,
      style = props.style,
      id = props.id,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onFocus = props.onFocus,
      onBlur = props.onBlur;
    var prefixCls = getPrefixCls('radio', customizePrefixCls);
    var groupPrefixCls = "".concat(prefixCls, "-group");
    // Style
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _style["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var childrenToRender = children;
    // 如果存在 options, 优先使用
    if (options && options.length > 0) {
      childrenToRender = options.map(function (option) {
        if (typeof option === 'string' || typeof option === 'number') {
          // 此处类型自动推导为 string
          return /*#__PURE__*/React.createElement(_radio["default"], {
            key: option.toString(),
            prefixCls: prefixCls,
            disabled: disabled,
            value: option,
            checked: value === option
          }, option);
        }
        // 此处类型自动推导为 { label: string value: string }
        return /*#__PURE__*/React.createElement(_radio["default"], {
          key: "radio-group-value-options-".concat(option.value),
          prefixCls: prefixCls,
          disabled: option.disabled || disabled,
          value: option.value,
          checked: value === option.value,
          title: option.title,
          style: option.style,
          id: option.id,
          required: option.required
        }, option.label);
      });
    }
    var mergedSize = (0, _useSize["default"])(customizeSize);
    var classString = (0, _classnames["default"])(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), _defineProperty(_defineProperty({}, "".concat(groupPrefixCls, "-").concat(mergedSize), mergedSize), "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'), className, rootClassName, hashId, cssVarCls, rootCls);
    return wrapCSSVar( /*#__PURE__*/React.createElement("div", Object.assign({}, (0, _pickAttrs["default"])(props, {
      aria: true,
      data: true
    }), {
      className: classString,
      style: style,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onFocus: onFocus,
      onBlur: onBlur,
      id: id,
      ref: ref
    }), /*#__PURE__*/React.createElement(_context.RadioGroupContextProvider, {
      value: {
        onChange: onRadioChange,
        value: value,
        disabled: props.disabled,
        name: props.name,
        optionType: props.optionType
      }
    }, childrenToRender)));
  });
  var _default = _exports["default"] = /*#__PURE__*/React.memo(RadioGroup);
});