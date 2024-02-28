function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-util/es/ref", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/typography/style/index"], function (_exports, React, _classnames, _ref, _warning, _index, _index2) {
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
  var Typography = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var customizePrefixCls = props.prefixCls,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'article' : _props$component,
      className = props.className,
      rootClassName = props.rootClassName,
      setContentRef = props.setContentRef,
      children = props.children,
      typographyDirection = props.direction,
      style = props.style,
      restProps = __rest(props, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      contextDirection = _React$useContext.direction,
      typography = _React$useContext.typography;
    var direction = typographyDirection !== null && typographyDirection !== void 0 ? typographyDirection : contextDirection;
    var mergedRef = ref;
    if (setContentRef) {
      mergedRef = (0, _ref.composeRef)(ref, setContentRef);
    }
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Typography');
      warning.deprecated(!setContentRef, 'setContentRef', 'ref');
    }
    var prefixCls = getPrefixCls('typography', customizePrefixCls);
    // Style
    var _useStyle = (0, _index2["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var componentClassName = (0, _classnames["default"])(prefixCls, typography === null || typography === void 0 ? void 0 : typography.className, _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className, rootClassName, hashId, cssVarCls);
    var mergedStyle = Object.assign(Object.assign({}, typography === null || typography === void 0 ? void 0 : typography.style), style);
    return wrapCSSVar( /*#__PURE__*/
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    React.createElement(Component, Object.assign({
      className: componentClassName,
      style: mergedStyle,
      ref: mergedRef
    }, restProps), children));
  });
  if (process.env.NODE_ENV !== 'production') {
    Typography.displayName = 'Typography';
  }
  // es default export should use const instead of let
  var _default = _exports["default"] = Typography;
});