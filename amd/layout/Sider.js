function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@ant-design/icons/es/icons/BarsOutlined", "@ant-design/icons/es/icons/LeftOutlined", "@ant-design/icons/es/icons/RightOutlined", "classnames", "rc-util/es/omit", "antd4mx/_util/isNumeric", "antd4mx/config-provider/index", "antd4mx/layout/context"], function (_exports, _react, _BarsOutlined, _LeftOutlined, _RightOutlined, _classnames, _omit, _isNumeric, _index, _context) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.SiderContext = void 0;
  var React = _react;
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
  var dimensionMaxMap = {
    xs: '479.98px',
    sm: '575.98px',
    md: '767.98px',
    lg: '991.98px',
    xl: '1199.98px',
    xxl: '1599.98px'
  };
  var SiderContext = _exports.SiderContext = /*#__PURE__*/React.createContext({});
  var generateId = function () {
    var i = 0;
    return function () {
      var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      i += 1;
      return "".concat(prefix).concat(i);
    };
  }();
  var Sider = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      trigger = props.trigger,
      children = props.children,
      _props$defaultCollaps = props.defaultCollapsed,
      defaultCollapsed = _props$defaultCollaps === void 0 ? false : _props$defaultCollaps,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? 'dark' : _props$theme,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      _props$collapsible = props.collapsible,
      collapsible = _props$collapsible === void 0 ? false : _props$collapsible,
      _props$reverseArrow = props.reverseArrow,
      reverseArrow = _props$reverseArrow === void 0 ? false : _props$reverseArrow,
      _props$width = props.width,
      width = _props$width === void 0 ? 200 : _props$width,
      _props$collapsedWidth = props.collapsedWidth,
      collapsedWidth = _props$collapsedWidth === void 0 ? 80 : _props$collapsedWidth,
      zeroWidthTriggerStyle = props.zeroWidthTriggerStyle,
      breakpoint = props.breakpoint,
      onCollapse = props.onCollapse,
      onBreakpoint = props.onBreakpoint,
      otherProps = __rest(props, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]);
    var _useContext = (0, _react.useContext)(_context.LayoutContext),
      siderHook = _useContext.siderHook;
    var _useState = (0, _react.useState)('collapsed' in props ? props.collapsed : defaultCollapsed),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];
    var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      below = _useState4[0],
      setBelow = _useState4[1];
    (0, _react.useEffect)(function () {
      if ('collapsed' in props) {
        setCollapsed(props.collapsed);
      }
    }, [props.collapsed]);
    var handleSetCollapsed = function handleSetCollapsed(value, type) {
      if (!('collapsed' in props)) {
        setCollapsed(value);
      }
      onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(value, type);
    };
    // ========================= Responsive =========================
    var responsiveHandlerRef = (0, _react.useRef)();
    responsiveHandlerRef.current = function (mql) {
      setBelow(mql.matches);
      onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);
      if (collapsed !== mql.matches) {
        handleSetCollapsed(mql.matches, 'responsive');
      }
    };
    (0, _react.useEffect)(function () {
      function responsiveHandler(mql) {
        return responsiveHandlerRef.current(mql);
      }
      var mql;
      if (typeof window !== 'undefined') {
        var _window = window,
          matchMedia = _window.matchMedia;
        if (matchMedia && breakpoint && breakpoint in dimensionMaxMap) {
          mql = matchMedia("screen and (max-width: ".concat(dimensionMaxMap[breakpoint], ")"));
          try {
            mql.addEventListener('change', responsiveHandler);
          } catch (error) {
            mql.addListener(responsiveHandler);
          }
          responsiveHandler(mql);
        }
      }
      return function () {
        try {
          mql === null || mql === void 0 ? void 0 : mql.removeEventListener('change', responsiveHandler);
        } catch (error) {
          mql === null || mql === void 0 ? void 0 : mql.removeListener(responsiveHandler);
        }
      };
    }, [breakpoint]); // in order to accept dynamic 'breakpoint' property, we need to add 'breakpoint' into dependency array.
    (0, _react.useEffect)(function () {
      var uniqueId = generateId('ant-sider-');
      siderHook.addSider(uniqueId);
      return function () {
        return siderHook.removeSider(uniqueId);
      };
    }, []);
    var toggle = function toggle() {
      handleSetCollapsed(!collapsed, 'clickTrigger');
    };
    var _useContext2 = (0, _react.useContext)(_index.ConfigContext),
      getPrefixCls = _useContext2.getPrefixCls;
    var renderSider = function renderSider() {
      var prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
      var divProps = (0, _omit["default"])(otherProps, ['collapsed']);
      var rawWidth = collapsed ? collapsedWidth : width;
      // use "px" as fallback unit for width
      var siderWidth = (0, _isNumeric["default"])(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth);
      // special trigger when collapsedWidth == 0
      var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? ( /*#__PURE__*/React.createElement("span", {
        onClick: toggle,
        className: (0, _classnames["default"])("".concat(prefixCls, "-zero-width-trigger"), "".concat(prefixCls, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')),
        style: zeroWidthTriggerStyle
      }, trigger || /*#__PURE__*/React.createElement(_BarsOutlined["default"], null))) : null;
      var iconObj = {
        expanded: reverseArrow ? /*#__PURE__*/React.createElement(_RightOutlined["default"], null) : /*#__PURE__*/React.createElement(_LeftOutlined["default"], null),
        collapsed: reverseArrow ? /*#__PURE__*/React.createElement(_LeftOutlined["default"], null) : /*#__PURE__*/React.createElement(_RightOutlined["default"], null)
      };
      var status = collapsed ? 'collapsed' : 'expanded';
      var defaultTrigger = iconObj[status];
      var triggerDom = trigger !== null ? zeroWidthTrigger || ( /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-trigger"),
        onClick: toggle,
        style: {
          width: siderWidth
        }
      }, trigger || defaultTrigger)) : null;
      var divStyle = Object.assign(Object.assign({}, style), {
        flex: "0 0 ".concat(siderWidth),
        maxWidth: siderWidth,
        minWidth: siderWidth,
        width: siderWidth
      });
      var siderCls = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(theme), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-collapsed"), !!collapsed), "".concat(prefixCls, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), "".concat(prefixCls, "-below"), !!below), "".concat(prefixCls, "-zero-width"), parseFloat(siderWidth) === 0), className);
      return /*#__PURE__*/React.createElement("aside", Object.assign({
        className: siderCls
      }, divProps, {
        style: divStyle,
        ref: ref
      }), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-children")
      }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null);
    };
    var contextValue = React.useMemo(function () {
      return {
        siderCollapsed: collapsed
      };
    }, [collapsed]);
    return /*#__PURE__*/React.createElement(SiderContext.Provider, {
      value: contextValue
    }, renderSider());
  });
  if (process.env.NODE_ENV !== 'production') {
    Sider.displayName = 'Sider';
  }
  var _default = _exports["default"] = Sider;
});