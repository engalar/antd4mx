function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-util/es/omit", "antd4mx/_util/warning", "antd4mx/badge/index", "antd4mx/config-provider/index", "antd4mx/tooltip/index", "antd4mx/float-button/context", "antd4mx/float-button/FloatButtonContent", "antd4mx/float-button/style/index", "antd4mx/config-provider/hooks/useCSSVarCls"], function (_exports, _react, _classnames, _omit, _warning, _index, _index2, _index3, _context, _FloatButtonContent, _index4, _useCSSVarCls) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.floatButtonPrefixCls = _exports["default"] = void 0;
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
  var floatButtonPrefixCls = _exports.floatButtonPrefixCls = 'float-btn';
  var FloatButton = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'circle' : _props$shape,
      icon = props.icon,
      description = props.description,
      tooltip = props.tooltip,
      _props$badge = props.badge,
      badge = _props$badge === void 0 ? {} : _props$badge,
      restProps = __rest(props, ["prefixCls", "className", "rootClassName", "type", "shape", "icon", "description", "tooltip", "badge"]);
    var _useContext = (0, _react.useContext)(_index2.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls,
      direction = _useContext.direction;
    var groupShape = (0, _react.useContext)(_context["default"]);
    var prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _index4["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var mergeShape = groupShape || shape;
    var classString = (0, _classnames["default"])(hashId, cssVarCls, rootCls, prefixCls, className, rootClassName, "".concat(prefixCls, "-").concat(type), "".concat(prefixCls, "-").concat(mergeShape), _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
    // 虽然在 ts 中已经 omit 过了，但是为了防止多余的属性被透传进来，这里再 omit 一遍，以防万一
    var badgeProps = (0, _react.useMemo)(function () {
      return (0, _omit["default"])(badge, ['title', 'children', 'status', 'text']);
    }, [badge]);
    var contentProps = (0, _react.useMemo)(function () {
      return {
        prefixCls: prefixCls,
        description: description,
        icon: icon,
        type: type
      };
    }, [prefixCls, description, icon, type]);
    var buttonNode = /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-body")
    }, /*#__PURE__*/_react["default"].createElement(_FloatButtonContent["default"], Object.assign({}, contentProps)));
    if ('badge' in props) {
      buttonNode = /*#__PURE__*/_react["default"].createElement(_index["default"], Object.assign({}, badgeProps), buttonNode);
    }
    if ('tooltip' in props) {
      buttonNode = /*#__PURE__*/_react["default"].createElement(_index3["default"], {
        title: tooltip,
        placement: direction === 'rtl' ? 'right' : 'left'
      }, buttonNode);
    }
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('FloatButton');
      process.env.NODE_ENV !== "production" ? warning(!(shape === 'circle' && description), 'usage', 'supported only when `shape` is `square`. Due to narrow space for text, short sentence is recommended.') : void 0;
    }
    return wrapCSSVar(props.href ? ( /*#__PURE__*/_react["default"].createElement("a", Object.assign({
      ref: ref
    }, restProps, {
      className: classString
    }), buttonNode)) : ( /*#__PURE__*/_react["default"].createElement("button", Object.assign({
      ref: ref
    }, restProps, {
      className: classString,
      type: "button"
    }), buttonNode)));
  });
  if (process.env.NODE_ENV !== 'production') {
    FloatButton.displayName = 'FloatButton';
  }
  var _default = _exports["default"] = FloatButton;
});