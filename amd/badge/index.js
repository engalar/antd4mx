define(["exports", "react", "classnames", "rc-motion", "antd4mx/_util/colors", "antd4mx/_util/reactNode", "antd4mx/config-provider/index", "antd4mx/badge/Ribbon", "antd4mx/badge/ScrollNumber", "antd4mx/badge/style/index"], function (_exports, _react, _classnames4, _rcMotion, _colors, _reactNode, _index, _Ribbon, _ScrollNumber, _index2) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var React = _react;
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
  var InternalBadge = function InternalBadge(props, ref) {
    var _a, _b, _c, _d, _e;
    var customizePrefixCls = props.prefixCls,
      customizeScrollNumberPrefixCls = props.scrollNumberPrefixCls,
      children = props.children,
      status = props.status,
      text = props.text,
      color = props.color,
      _props$count = props.count,
      count = _props$count === void 0 ? null : _props$count,
      _props$overflowCount = props.overflowCount,
      overflowCount = _props$overflowCount === void 0 ? 99 : _props$overflowCount,
      _props$dot = props.dot,
      dot = _props$dot === void 0 ? false : _props$dot,
      _props$size = props.size,
      size = _props$size === void 0 ? 'default' : _props$size,
      title = props.title,
      offset = props.offset,
      style = props.style,
      className = props.className,
      rootClassName = props.rootClassName,
      classNames = props.classNames,
      styles = props.styles,
      _props$showZero = props.showZero,
      showZero = _props$showZero === void 0 ? false : _props$showZero,
      restProps = __rest(props, ["prefixCls", "scrollNumberPrefixCls", "children", "status", "text", "color", "count", "overflowCount", "dot", "size", "title", "offset", "style", "className", "rootClassName", "classNames", "styles", "showZero"]);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      badge = _React$useContext.badge;
    var prefixCls = getPrefixCls('badge', customizePrefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    // ================================ Misc ================================
    var numberedDisplayCount = count > overflowCount ? "".concat(overflowCount, "+") : count;
    var isZero = numberedDisplayCount === '0' || numberedDisplayCount === 0;
    var ignoreCount = count === null || isZero && !showZero;
    var hasStatus = (status !== null && status !== undefined || color !== null && color !== undefined) && ignoreCount;
    var showAsDot = dot && !isZero;
    var mergedCount = showAsDot ? '' : numberedDisplayCount;
    var isHidden = (0, _react.useMemo)(function () {
      var isEmpty = mergedCount === null || mergedCount === undefined || mergedCount === '';
      return (isEmpty || isZero && !showZero) && !showAsDot;
    }, [mergedCount, isZero, showZero, showAsDot]);
    // Count should be cache in case hidden change it
    var countRef = (0, _react.useRef)(count);
    if (!isHidden) {
      countRef.current = count;
    }
    var livingCount = countRef.current;
    // We need cache count since remove motion should not change count display
    var displayCountRef = (0, _react.useRef)(mergedCount);
    if (!isHidden) {
      displayCountRef.current = mergedCount;
    }
    var displayCount = displayCountRef.current;
    // We will cache the dot status to avoid shaking on leaved motion
    var isDotRef = (0, _react.useRef)(showAsDot);
    if (!isHidden) {
      isDotRef.current = showAsDot;
    }
    // =============================== Styles ===============================
    var mergedStyle = (0, _react.useMemo)(function () {
      if (!offset) {
        return Object.assign(Object.assign({}, badge === null || badge === void 0 ? void 0 : badge.style), style);
      }
      var offsetStyle = {
        marginTop: offset[1]
      };
      if (direction === 'rtl') {
        offsetStyle.left = parseInt(offset[0], 10);
      } else {
        offsetStyle.right = -parseInt(offset[0], 10);
      }
      return Object.assign(Object.assign(Object.assign({}, offsetStyle), badge === null || badge === void 0 ? void 0 : badge.style), style);
    }, [direction, offset, style, badge === null || badge === void 0 ? void 0 : badge.style]);
    // =============================== Render ===============================
    // >>> Title
    var titleNode = title !== null && title !== void 0 ? title : typeof livingCount === 'string' || typeof livingCount === 'number' ? livingCount : undefined;
    // >>> Status Text
    var statusTextNode = isHidden || !text ? null : /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-status-text")
    }, text);
    // >>> Display Component
    var displayNode = !livingCount || _typeof(livingCount) !== 'object' ? undefined : (0, _reactNode.cloneElement)(livingCount, function (oriProps) {
      return {
        style: Object.assign(Object.assign({}, mergedStyle), oriProps.style)
      };
    });
    // InternalColor
    var isInternalColor = (0, _colors.isPresetColor)(color, false);
    // Shared styles
    var statusCls = (0, _classnames4["default"])(classNames === null || classNames === void 0 ? void 0 : classNames.indicator, (_a = badge === null || badge === void 0 ? void 0 : badge.classNames) === null || _a === void 0 ? void 0 : _a.indicator, _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-status-dot"), hasStatus), "".concat(prefixCls, "-status-").concat(status), !!status), "".concat(prefixCls, "-color-").concat(color), isInternalColor));
    var statusStyle = {};
    if (color && !isInternalColor) {
      statusStyle.color = color;
      statusStyle.background = color;
    }
    var badgeClassName = (0, _classnames4["default"])(prefixCls, _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-status"), hasStatus), "".concat(prefixCls, "-not-a-wrapper"), !children), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className, rootClassName, badge === null || badge === void 0 ? void 0 : badge.className, (_b = badge === null || badge === void 0 ? void 0 : badge.classNames) === null || _b === void 0 ? void 0 : _b.root, classNames === null || classNames === void 0 ? void 0 : classNames.root, hashId, cssVarCls);
    // <Badge status="success" />
    if (!children && hasStatus) {
      var statusTextColor = mergedStyle.color;
      return wrapCSSVar( /*#__PURE__*/React.createElement("span", Object.assign({}, restProps, {
        className: badgeClassName,
        style: Object.assign(Object.assign(Object.assign({}, styles === null || styles === void 0 ? void 0 : styles.root), (_c = badge === null || badge === void 0 ? void 0 : badge.styles) === null || _c === void 0 ? void 0 : _c.root), mergedStyle)
      }), /*#__PURE__*/React.createElement("span", {
        className: statusCls,
        style: Object.assign(Object.assign(Object.assign({}, styles === null || styles === void 0 ? void 0 : styles.indicator), (_d = badge === null || badge === void 0 ? void 0 : badge.styles) === null || _d === void 0 ? void 0 : _d.indicator), statusStyle)
      }), text && ( /*#__PURE__*/React.createElement("span", {
        style: {
          color: statusTextColor
        },
        className: "".concat(prefixCls, "-status-text")
      }, text))));
    }
    return wrapCSSVar( /*#__PURE__*/React.createElement("span", Object.assign({
      ref: ref
    }, restProps, {
      className: badgeClassName,
      style: Object.assign(Object.assign({}, (_e = badge === null || badge === void 0 ? void 0 : badge.styles) === null || _e === void 0 ? void 0 : _e.root), styles === null || styles === void 0 ? void 0 : styles.root)
    }), children, /*#__PURE__*/React.createElement(_rcMotion["default"], {
      visible: !isHidden,
      motionName: "".concat(prefixCls, "-zoom"),
      motionAppear: false,
      motionDeadline: 1000
    }, function (_ref) {
      var motionClassName = _ref.className,
        scrollNumberRef = _ref.ref;
      var _a, _b;
      var scrollNumberPrefixCls = getPrefixCls('scroll-number', customizeScrollNumberPrefixCls);
      var isDot = isDotRef.current;
      var scrollNumberCls = (0, _classnames4["default"])(classNames === null || classNames === void 0 ? void 0 : classNames.indicator, (_a = badge === null || badge === void 0 ? void 0 : badge.classNames) === null || _a === void 0 ? void 0 : _a.indicator, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-dot"), isDot), "".concat(prefixCls, "-count"), !isDot), "".concat(prefixCls, "-count-sm"), size === 'small'), "".concat(prefixCls, "-multiple-words"), !isDot && displayCount && displayCount.toString().length > 1), "".concat(prefixCls, "-status-").concat(status), !!status), "".concat(prefixCls, "-color-").concat(color), isInternalColor));
      var scrollNumberStyle = Object.assign(Object.assign(Object.assign({}, styles === null || styles === void 0 ? void 0 : styles.indicator), (_b = badge === null || badge === void 0 ? void 0 : badge.styles) === null || _b === void 0 ? void 0 : _b.indicator), mergedStyle);
      if (color && !isInternalColor) {
        scrollNumberStyle = scrollNumberStyle || {};
        scrollNumberStyle.background = color;
      }
      return /*#__PURE__*/React.createElement(_ScrollNumber["default"], {
        prefixCls: scrollNumberPrefixCls,
        show: !isHidden,
        motionClassName: motionClassName,
        className: scrollNumberCls,
        count: displayCount,
        title: titleNode,
        style: scrollNumberStyle,
        key: "scrollNumber",
        ref: scrollNumberRef
      }, displayNode);
    }), statusTextNode));
  };
  var Badge = /*#__PURE__*/React.forwardRef(InternalBadge);
  Badge.Ribbon = _Ribbon["default"];
  if (process.env.NODE_ENV !== 'production') {
    Badge.displayName = 'Badge';
  }
  var _default = _exports["default"] = Badge;
});