define(["exports", "react", "classnames", "antd4mx/config-provider/index", "antd4mx/grid/RowContext", "antd4mx/grid/style/index"], function (_exports, React, _classnames, _index, _RowContext, _index2) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
  function parseFlex(flex) {
    if (typeof flex === 'number') {
      return "".concat(flex, " ").concat(flex, " auto");
    }
    if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
      return "0 0 ".concat(flex);
    }
    return flex;
  }
  var sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  var Col = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;
    var _React$useContext2 = React.useContext(_RowContext["default"]),
      gutter = _React$useContext2.gutter,
      wrap = _React$useContext2.wrap;
    var customizePrefixCls = props.prefixCls,
      span = props.span,
      order = props.order,
      offset = props.offset,
      push = props.push,
      pull = props.pull,
      className = props.className,
      children = props.children,
      flex = props.flex,
      style = props.style,
      others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);
    var prefixCls = getPrefixCls('col', customizePrefixCls);
    var _useColStyle = (0, _index2.useColStyle)(prefixCls),
      _useColStyle2 = _slicedToArray(_useColStyle, 3),
      wrapCSSVar = _useColStyle2[0],
      hashId = _useColStyle2[1],
      cssVarCls = _useColStyle2[2];
    // ===================== Size ======================
    var sizeStyle = {};
    var sizeClassObj = {};
    sizes.forEach(function (size) {
      var sizeProps = {};
      var propSize = props[size];
      if (typeof propSize === 'number') {
        sizeProps.span = propSize;
      } else if (_typeof(propSize) === 'object') {
        sizeProps = propSize || {};
      }
      delete others[size];
      sizeClassObj = Object.assign(Object.assign({}, sizeClassObj), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), "".concat(prefixCls, "-rtl"), direction === 'rtl'));
      // Responsive flex layout
      if (sizeProps.flex) {
        sizeClassObj["".concat(prefixCls, "-").concat(size, "-flex")] = true;
        sizeStyle["--".concat(prefixCls, "-").concat(size, "-flex")] = parseFlex(sizeProps.flex);
      }
    });
    // ==================== Normal =====================
    var classes = (0, _classnames["default"])(prefixCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(span), span !== undefined), "".concat(prefixCls, "-order-").concat(order), order), "".concat(prefixCls, "-offset-").concat(offset), offset), "".concat(prefixCls, "-push-").concat(push), push), "".concat(prefixCls, "-pull-").concat(pull), pull), className, sizeClassObj, hashId, cssVarCls);
    var mergedStyle = {};
    // Horizontal gutter use padding
    if (gutter && gutter[0] > 0) {
      var horizontalGutter = gutter[0] / 2;
      mergedStyle.paddingLeft = horizontalGutter;
      mergedStyle.paddingRight = horizontalGutter;
    }
    if (flex) {
      mergedStyle.flex = parseFlex(flex);
      // Hack for Firefox to avoid size issue
      // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
      if (wrap === false && !mergedStyle.minWidth) {
        mergedStyle.minWidth = 0;
      }
    }
    // ==================== Render =====================
    return wrapCSSVar( /*#__PURE__*/React.createElement("div", Object.assign({}, others, {
      style: Object.assign(Object.assign(Object.assign({}, mergedStyle), style), sizeStyle),
      className: classes,
      ref: ref
    }), children));
  });
  if (process.env.NODE_ENV !== 'production') {
    Col.displayName = 'Col';
  }
  var _default = _exports["default"] = Col;
});