function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@ant-design/icons/es/icons/CloseOutlined", "@ant-design/icons/es/icons/FileTextOutlined", "classnames", "rc-motion", "rc-util/es/hooks/useMergedState", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/float-button/context", "antd4mx/float-button/FloatButton", "antd4mx/float-button/style", "antd4mx/config-provider/hooks/useCSSVarCls"], function (_exports, _react, _CloseOutlined, _FileTextOutlined, _classnames, _rcMotion, _useMergedState3, _warning, _configProvider, _context, _FloatButton, _style, _useCSSVarCls) {
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
  var FloatButtonGroup = function FloatButtonGroup(props) {
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'circle' : _props$shape,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? /*#__PURE__*/_react["default"].createElement(_FileTextOutlined["default"], null) : _props$icon,
      _props$closeIcon = props.closeIcon,
      closeIcon = _props$closeIcon === void 0 ? /*#__PURE__*/_react["default"].createElement(_CloseOutlined["default"], null) : _props$closeIcon,
      description = props.description,
      trigger = props.trigger,
      children = props.children,
      onOpenChange = props.onOpenChange,
      customOpen = props.open,
      floatButtonProps = __rest(props, ["prefixCls", "className", "style", "shape", "type", "icon", "closeIcon", "description", "trigger", "children", "onOpenChange", "open"]);
    var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      direction = _useContext.direction,
      getPrefixCls = _useContext.getPrefixCls;
    var prefixCls = getPrefixCls(_FloatButton.floatButtonPrefixCls, customizePrefixCls);
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _style["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var groupPrefixCls = "".concat(prefixCls, "-group");
    var groupCls = (0, _classnames["default"])(groupPrefixCls, hashId, cssVarCls, rootCls, className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'), "".concat(groupPrefixCls, "-").concat(shape), shape), "".concat(groupPrefixCls, "-").concat(shape, "-shadow"), !trigger));
    var wrapperCls = (0, _classnames["default"])(hashId, "".concat(groupPrefixCls, "-wrap"));
    var _useMergedState = (0, _useMergedState3["default"])(false, {
        value: customOpen
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      open = _useMergedState2[0],
      setOpen = _useMergedState2[1];
    var floatButtonGroupRef = _react["default"].useRef(null);
    var floatButtonRef = _react["default"].useRef(null);
    var hoverAction = _react["default"].useMemo(function () {
      var hoverTypeAction = {
        onMouseEnter: function onMouseEnter() {
          setOpen(true);
          onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(true);
        },
        onMouseLeave: function onMouseLeave() {
          setOpen(false);
          onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false);
        }
      };
      return trigger === 'hover' ? hoverTypeAction : {};
    }, [trigger]);
    var handleOpenChange = function handleOpenChange() {
      setOpen(function (prevState) {
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(!prevState);
        return !prevState;
      });
    };
    var onClick = (0, _react.useCallback)(function (e) {
      var _a, _b;
      if ((_a = floatButtonGroupRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
        if ((_b = floatButtonRef.current) === null || _b === void 0 ? void 0 : _b.contains(e.target)) {
          handleOpenChange();
        }
        return;
      }
      setOpen(false);
      onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false);
    }, [trigger]);
    (0, _react.useEffect)(function () {
      if (trigger === 'click') {
        document.addEventListener('click', onClick);
        return function () {
          document.removeEventListener('click', onClick);
        };
      }
    }, [trigger]);
    // =================== Warning =====================
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('FloatButton.Group');
      process.env.NODE_ENV !== "production" ? warning(!('open' in props) || !!trigger, 'usage', '`open` need to be used together with `trigger`') : void 0;
    }
    return wrapCSSVar( /*#__PURE__*/_react["default"].createElement(_context.FloatButtonGroupProvider, {
      value: shape
    }, /*#__PURE__*/_react["default"].createElement("div", Object.assign({
      ref: floatButtonGroupRef,
      className: groupCls,
      style: style
    }, hoverAction), trigger && ['click', 'hover'].includes(trigger) ? ( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_rcMotion["default"], {
      visible: open,
      motionName: "".concat(groupPrefixCls, "-wrap")
    }, function (_ref) {
      var motionClassName = _ref.className;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(motionClassName, wrapperCls)
      }, children);
    }), /*#__PURE__*/_react["default"].createElement(_FloatButton["default"], Object.assign({
      ref: floatButtonRef,
      type: type,
      shape: shape,
      icon: open ? closeIcon : icon,
      description: description,
      "aria-label": props['aria-label']
    }, floatButtonProps)))) : children)));
  };
  var _default = _exports["default"] = /*#__PURE__*/(0, _react.memo)(FloatButtonGroup);
});