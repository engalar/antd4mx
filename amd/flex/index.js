function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-util/es/omit", "antd4mx/_util/gapSize", "antd4mx/config-provider/index", "antd4mx/flex/style/index", "antd4mx/flex/utils"], function (_exports, _react, _classnames, _omit, _gapSize, _index, _index2, _utils) {
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
  var Flex = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
    var customizePrefixCls = props.prefixCls,
      rootClassName = props.rootClassName,
      className = props.className,
      style = props.style,
      flex = props.flex,
      gap = props.gap,
      children = props.children,
      _props$vertical = props.vertical,
      vertical = _props$vertical === void 0 ? false : _props$vertical,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      othersProps = __rest(props, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]);
    var _React$useContext = _react["default"].useContext(_index.ConfigContext),
      ctxFlex = _React$useContext.flex,
      ctxDirection = _React$useContext.direction,
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('flex', customizePrefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var mergedVertical = vertical !== null && vertical !== void 0 ? vertical : ctxFlex === null || ctxFlex === void 0 ? void 0 : ctxFlex.vertical;
    var mergedCls = (0, _classnames["default"])(className, rootClassName, ctxFlex === null || ctxFlex === void 0 ? void 0 : ctxFlex.className, prefixCls, hashId, cssVarCls, (0, _utils["default"])(prefixCls, props), _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-rtl"), ctxDirection === 'rtl'), "".concat(prefixCls, "-gap-").concat(gap), (0, _gapSize.isPresetSize)(gap)), "".concat(prefixCls, "-vertical"), mergedVertical));
    var mergedStyle = Object.assign(Object.assign({}, ctxFlex === null || ctxFlex === void 0 ? void 0 : ctxFlex.style), style);
    if (flex) {
      mergedStyle.flex = flex;
    }
    if (gap && !(0, _gapSize.isPresetSize)(gap)) {
      mergedStyle.gap = gap;
    }
    return wrapCSSVar( /*#__PURE__*/_react["default"].createElement(Component, Object.assign({
      ref: ref,
      className: mergedCls,
      style: mergedStyle
    }, (0, _omit["default"])(othersProps, ['justify', 'wrap', 'align'])), children));
  });
  if (process.env.NODE_ENV !== 'production') {
    Flex.displayName = 'Flex';
  }
  var _default = _exports["default"] = Flex;
});