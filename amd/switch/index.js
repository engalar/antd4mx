function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@ant-design/icons/es/icons/LoadingOutlined", "classnames", "rc-switch", "antd4mx/_util/wave/index", "antd4mx/config-provider/index", "antd4mx/config-provider/DisabledContext", "antd4mx/config-provider/hooks/useSize", "antd4mx/switch/style/index", "rc-util/es/hooks/useMergedState"], function (_exports, React, _LoadingOutlined, _classnames, _rcSwitch, _index, _index2, _DisabledContext, _useSize, _index3, _useMergedState3) {
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
  var Switch = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var customizePrefixCls = props.prefixCls,
      customizeSize = props.size,
      customDisabled = props.disabled,
      loading = props.loading,
      className = props.className,
      rootClassName = props.rootClassName,
      style = props.style,
      checkedProp = props.checked,
      value = props.value,
      defaultCheckedProp = props.defaultChecked,
      defaultValue = props.defaultValue,
      onChange = props.onChange,
      restProps = __rest(props, ["prefixCls", "size", "disabled", "loading", "className", "rootClassName", "style", "checked", "value", "defaultChecked", "defaultValue", "onChange"]);
    var _useMergedState = (0, _useMergedState3["default"])(false, {
        value: checkedProp !== null && checkedProp !== void 0 ? checkedProp : value,
        defaultValue: defaultCheckedProp !== null && defaultCheckedProp !== void 0 ? defaultCheckedProp : defaultValue
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      checked = _useMergedState2[0],
      setChecked = _useMergedState2[1];
    var _React$useContext = React.useContext(_index2.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      SWITCH = _React$useContext["switch"];
    // ===================== Disabled =====================
    var disabled = React.useContext(_DisabledContext["default"]);
    var mergedDisabled = (customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled) || loading;
    var prefixCls = getPrefixCls('switch', customizePrefixCls);
    var loadingIcon = /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-handle")
    }, loading && /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
      className: "".concat(prefixCls, "-loading-icon")
    }));
    // Style
    var _useStyle = (0, _index3["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var mergedSize = (0, _useSize["default"])(customizeSize);
    var classes = (0, _classnames["default"])(SWITCH === null || SWITCH === void 0 ? void 0 : SWITCH.className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-small"), mergedSize === 'small'), "".concat(prefixCls, "-loading"), loading), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className, rootClassName, hashId, cssVarCls);
    var mergedStyle = Object.assign(Object.assign({}, SWITCH === null || SWITCH === void 0 ? void 0 : SWITCH.style), style);
    var changeHandler = function changeHandler() {
      setChecked(arguments.length <= 0 ? undefined : arguments[0]);
      onChange === null || onChange === void 0 ? void 0 : onChange.apply(void 0, arguments);
    };
    return wrapCSSVar( /*#__PURE__*/React.createElement(_index["default"], {
      component: "Switch"
    }, /*#__PURE__*/React.createElement(_rcSwitch["default"], Object.assign({}, restProps, {
      checked: checked,
      onChange: changeHandler,
      prefixCls: prefixCls,
      className: classes,
      style: mergedStyle,
      disabled: mergedDisabled,
      ref: ref,
      loadingIcon: loadingIcon
    }))));
  });
  Switch.__ANT_SWITCH = true;
  if (process.env.NODE_ENV !== 'production') {
    Switch.displayName = 'Switch';
  }
  var _default = _exports["default"] = Switch;
});