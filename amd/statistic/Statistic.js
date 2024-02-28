function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "classnames", "react", "rc-util/es/pickAttrs", "antd4mx/config-provider", "antd4mx/skeleton", "antd4mx/statistic/Number", "antd4mx/statistic/style"], function (_exports, _classnames, React, _pickAttrs, _configProvider, _skeleton, _Number, _style) {
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
  var Statistic = function Statistic(props) {
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      style = props.style,
      valueStyle = props.valueStyle,
      _props$value = props.value,
      value = _props$value === void 0 ? 0 : _props$value,
      title = props.title,
      valueRender = props.valueRender,
      prefix = props.prefix,
      suffix = props.suffix,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      formatter = props.formatter,
      precision = props.precision,
      _props$decimalSeparat = props.decimalSeparator,
      decimalSeparator = _props$decimalSeparat === void 0 ? '.' : _props$decimalSeparat,
      _props$groupSeparator = props.groupSeparator,
      groupSeparator = _props$groupSeparator === void 0 ? ',' : _props$groupSeparator,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      rest = __rest(props, ["prefixCls", "className", "rootClassName", "style", "valueStyle", "value", "title", "valueRender", "prefix", "suffix", "loading", "formatter", "precision", "decimalSeparator", "groupSeparator", "onMouseEnter", "onMouseLeave"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      statistic = _React$useContext.statistic;
    var prefixCls = getPrefixCls('statistic', customizePrefixCls);
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var valueNode = /*#__PURE__*/React.createElement(_Number["default"], {
      decimalSeparator: decimalSeparator,
      groupSeparator: groupSeparator,
      prefixCls: prefixCls,
      formatter: formatter,
      precision: precision,
      value: value
    });
    var cls = (0, _classnames["default"])(prefixCls, _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), statistic === null || statistic === void 0 ? void 0 : statistic.className, className, rootClassName, hashId, cssVarCls);
    var restProps = (0, _pickAttrs["default"])(rest, {
      aria: true,
      data: true
    });
    return wrapCSSVar( /*#__PURE__*/React.createElement("div", Object.assign({}, restProps, {
      className: cls,
      style: Object.assign(Object.assign({}, statistic === null || statistic === void 0 ? void 0 : statistic.style), style),
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }), title && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-title")
    }, title), /*#__PURE__*/React.createElement(_skeleton["default"], {
      paragraph: false,
      loading: loading,
      className: "".concat(prefixCls, "-skeleton")
    }, /*#__PURE__*/React.createElement("div", {
      style: valueStyle,
      className: "".concat(prefixCls, "-content")
    }, prefix && /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-content-prefix")
    }, prefix), valueRender ? valueRender(valueNode) : valueNode, suffix && /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-content-suffix")
    }, suffix)))));
  };
  if (process.env.NODE_ENV !== 'production') {
    Statistic.displayName = 'Statistic';
  }
  var _default = _exports["default"] = Statistic;
});