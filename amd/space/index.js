function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-util/es/Children/toArray", "antd4mx/_util/gapSize", "antd4mx/config-provider", "antd4mx/space/Compact", "antd4mx/space/context", "antd4mx/space/Item", "antd4mx/space/style", "./context"], function (_exports, React, _classnames, _toArray, _gapSize, _configProvider, _Compact, _context, _Item, _style, _context2) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "SpaceContext", {
    enumerable: true,
    get: function get() {
      return _context2.SpaceContext;
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
  var Space = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _a, _b;
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      space = _React$useContext.space,
      directionConfig = _React$useContext.direction;
    var _props$size = props.size,
      size = _props$size === void 0 ? (space === null || space === void 0 ? void 0 : space.size) || 'small' : _props$size,
      align = props.align,
      className = props.className,
      rootClassName = props.rootClassName,
      children = props.children,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      customizePrefixCls = props.prefixCls,
      split = props.split,
      style = props.style,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? false : _props$wrap,
      customClassNames = props.classNames,
      styles = props.styles,
      otherProps = __rest(props, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]);
    var _ref = Array.isArray(size) ? size : [size, size],
      _ref2 = _slicedToArray(_ref, 2),
      horizontalSize = _ref2[0],
      verticalSize = _ref2[1];
    var isPresetVerticalSize = (0, _gapSize.isPresetSize)(verticalSize);
    var isPresetHorizontalSize = (0, _gapSize.isPresetSize)(horizontalSize);
    var isValidVerticalSize = (0, _gapSize.isValidGapNumber)(verticalSize);
    var isValidHorizontalSize = (0, _gapSize.isValidGapNumber)(horizontalSize);
    var childNodes = (0, _toArray["default"])(children, {
      keepEmpty: true
    });
    var mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
    var prefixCls = getPrefixCls('space', customizePrefixCls);
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var cls = (0, _classnames["default"])(prefixCls, space === null || space === void 0 ? void 0 : space.className, hashId, "".concat(prefixCls, "-").concat(direction), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-rtl"), directionConfig === 'rtl'), "".concat(prefixCls, "-align-").concat(mergedAlign), mergedAlign), "".concat(prefixCls, "-gap-row-").concat(verticalSize), isPresetVerticalSize), "".concat(prefixCls, "-gap-col-").concat(horizontalSize), isPresetHorizontalSize), className, rootClassName, cssVarCls);
    var itemClassName = (0, _classnames["default"])("".concat(prefixCls, "-item"), (_a = customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.item) !== null && _a !== void 0 ? _a : (_b = space === null || space === void 0 ? void 0 : space.classNames) === null || _b === void 0 ? void 0 : _b.item);
    // Calculate latest one
    var latestIndex = 0;
    var nodes = childNodes.map(function (child, i) {
      var _a, _b;
      if (child !== null && child !== undefined) {
        latestIndex = i;
      }
      var key = child && child.key || "".concat(itemClassName, "-").concat(i);
      return /*#__PURE__*/React.createElement(_Item["default"], {
        className: itemClassName,
        key: key,
        index: i,
        split: split,
        style: (_a = styles === null || styles === void 0 ? void 0 : styles.item) !== null && _a !== void 0 ? _a : (_b = space === null || space === void 0 ? void 0 : space.styles) === null || _b === void 0 ? void 0 : _b.item
      }, child);
    });
    var spaceContext = React.useMemo(function () {
      return {
        latestIndex: latestIndex
      };
    }, [latestIndex]);
    // =========================== Render ===========================
    if (childNodes.length === 0) {
      return null;
    }
    var gapStyle = {};
    if (wrap) {
      gapStyle.flexWrap = 'wrap';
    }
    if (!isPresetHorizontalSize && isValidHorizontalSize) {
      gapStyle.columnGap = horizontalSize;
    }
    if (!isPresetVerticalSize && isValidVerticalSize) {
      gapStyle.rowGap = verticalSize;
    }
    return wrapCSSVar( /*#__PURE__*/React.createElement("div", Object.assign({
      ref: ref,
      className: cls,
      style: Object.assign(Object.assign(Object.assign({}, gapStyle), space === null || space === void 0 ? void 0 : space.style), style)
    }, otherProps), /*#__PURE__*/React.createElement(_context.SpaceContextProvider, {
      value: spaceContext
    }, nodes)));
  });
  if (process.env.NODE_ENV !== 'production') {
    Space.displayName = 'Space';
  }
  var CompoundedSpace = Space;
  CompoundedSpace.Compact = _Compact["default"];
  var _default = _exports["default"] = CompoundedSpace;
});