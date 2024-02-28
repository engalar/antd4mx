define(["exports", "react", "classnames", "rc-util/es/omit", "rc-util/es/ref", "antd4mx/_util/warning", "antd4mx/_util/wave", "antd4mx/config-provider", "antd4mx/config-provider/DisabledContext", "antd4mx/config-provider/hooks/useSize", "antd4mx/space/Compact", "antd4mx/button/button-group", "antd4mx/button/buttonHelpers", "antd4mx/button/IconWrapper", "antd4mx/button/LoadingIcon", "antd4mx/button/style", "antd4mx/button/style/compactCmp"], function (_exports, _react, _classnames, _omit, _ref, _warning, _wave, _configProvider, _DisabledContext, _useSize, _Compact, _buttonGroup, _buttonHelpers, _IconWrapper, _LoadingIcon, _style, _compactCmp) {
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
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  /* eslint-disable react/button-has-type */

  function getLoadingConfig(loading) {
    if (_typeof(loading) === 'object' && loading) {
      var delay = loading === null || loading === void 0 ? void 0 : loading.delay;
      delay = !Number.isNaN(delay) && typeof delay === 'number' ? delay : 0;
      return {
        loading: delay <= 0,
        delay: delay
      };
    }
    return {
      loading: !!loading,
      delay: 0
    };
  }
  var InternalButton = function InternalButton(props, ref) {
    var _a, _b;
    var _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      customizePrefixCls = props.prefixCls,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      danger = props.danger,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'default' : _props$shape,
      customizeSize = props.size,
      styles = props.styles,
      customDisabled = props.disabled,
      className = props.className,
      rootClassName = props.rootClassName,
      children = props.children,
      icon = props.icon,
      _props$ghost = props.ghost,
      ghost = _props$ghost === void 0 ? false : _props$ghost,
      _props$block = props.block,
      block = _props$block === void 0 ? false : _props$block,
      _props$htmlType = props.htmlType,
      htmlType = _props$htmlType === void 0 ? 'button' : _props$htmlType,
      customClassNames = props.classNames,
      _props$style = props.style,
      customStyle = _props$style === void 0 ? {} : _props$style,
      rest = __rest(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]);
    var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls,
      autoInsertSpaceInButton = _useContext.autoInsertSpaceInButton,
      direction = _useContext.direction,
      button = _useContext.button;
    var prefixCls = getPrefixCls('btn', customizePrefixCls);
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var disabled = (0, _react.useContext)(_DisabledContext["default"]);
    var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    var groupSize = (0, _react.useContext)(_buttonGroup.GroupSizeContext);
    var loadingOrDelay = (0, _react.useMemo)(function () {
      return getLoadingConfig(loading);
    }, [loading]);
    var _useState = (0, _react.useState)(loadingOrDelay.loading),
      _useState2 = _slicedToArray(_useState, 2),
      innerLoading = _useState2[0],
      setLoading = _useState2[1];
    var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasTwoCNChar = _useState4[0],
      setHasTwoCNChar = _useState4[1];
    var internalRef = /*#__PURE__*/(0, _react.createRef)();
    var buttonRef = (0, _ref.composeRef)(ref, internalRef);
    var needInserted = _react.Children.count(children) === 1 && !icon && !(0, _buttonHelpers.isUnBorderedButtonType)(type);
    (0, _react.useEffect)(function () {
      var delayTimer = null;
      if (loadingOrDelay.delay > 0) {
        delayTimer = setTimeout(function () {
          delayTimer = null;
          setLoading(true);
        }, loadingOrDelay.delay);
      } else {
        setLoading(loadingOrDelay.loading);
      }
      function cleanupTimer() {
        if (delayTimer) {
          clearTimeout(delayTimer);
          delayTimer = null;
        }
      }
      return cleanupTimer;
    }, [loadingOrDelay]);
    (0, _react.useEffect)(function () {
      // FIXME: for HOC usage like <FormatMessage />
      if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
        return;
      }
      var buttonText = buttonRef.current.textContent;
      if (needInserted && (0, _buttonHelpers.isTwoCNChar)(buttonText)) {
        if (!hasTwoCNChar) {
          setHasTwoCNChar(true);
        }
      } else if (hasTwoCNChar) {
        setHasTwoCNChar(false);
      }
    }, [buttonRef]);
    var handleClick = function handleClick(e) {
      var onClick = props.onClick;
      // FIXME: https://github.com/ant-design/ant-design/issues/30207
      if (innerLoading || mergedDisabled) {
        e.preventDefault();
        return;
      }
      onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Button');
      process.env.NODE_ENV !== "production" ? warning(!(typeof icon === 'string' && icon.length > 2), 'breaking', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon")) : void 0;
      process.env.NODE_ENV !== "production" ? warning(!(ghost && (0, _buttonHelpers.isUnBorderedButtonType)(type)), 'usage', "`link` or `text` button can't be a `ghost` button.") : void 0;
    }
    var autoInsertSpace = autoInsertSpaceInButton !== false;
    var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
      compactSize = _useCompactItemContex.compactSize,
      compactItemClassnames = _useCompactItemContex.compactItemClassnames;
    var sizeClassNameMap = {
      large: 'lg',
      small: 'sm',
      middle: undefined
    };
    var sizeFullName = (0, _useSize["default"])(function (ctxSize) {
      var _a, _b;
      return (_b = (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : groupSize) !== null && _b !== void 0 ? _b : ctxSize;
    });
    var sizeCls = sizeFullName ? sizeClassNameMap[sizeFullName] || '' : '';
    var iconType = innerLoading ? 'loading' : icon;
    var linkButtonRestProps = (0, _omit["default"])(rest, ['navigate']);
    var classes = (0, _classnames["default"])(prefixCls, hashId, cssVarCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(shape), shape !== 'default' && shape), "".concat(prefixCls, "-").concat(type), type), "".concat(prefixCls, "-").concat(sizeCls), sizeCls), "".concat(prefixCls, "-icon-only"), !children && children !== 0 && !!iconType), "".concat(prefixCls, "-background-ghost"), ghost && !(0, _buttonHelpers.isUnBorderedButtonType)(type)), "".concat(prefixCls, "-loading"), innerLoading), "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace && !innerLoading), "".concat(prefixCls, "-block"), block), "".concat(prefixCls, "-dangerous"), !!danger), "".concat(prefixCls, "-rtl"), direction === 'rtl'), compactItemClassnames, className, rootClassName, button === null || button === void 0 ? void 0 : button.className);
    var fullStyle = Object.assign(Object.assign({}, button === null || button === void 0 ? void 0 : button.style), customStyle);
    var iconClasses = (0, _classnames["default"])(customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.icon, (_a = button === null || button === void 0 ? void 0 : button.classNames) === null || _a === void 0 ? void 0 : _a.icon);
    var iconStyle = Object.assign(Object.assign({}, (styles === null || styles === void 0 ? void 0 : styles.icon) || {}), ((_b = button === null || button === void 0 ? void 0 : button.styles) === null || _b === void 0 ? void 0 : _b.icon) || {});
    var iconNode = icon && !innerLoading ? ( /*#__PURE__*/_react["default"].createElement(_IconWrapper["default"], {
      prefixCls: prefixCls,
      className: iconClasses,
      style: iconStyle
    }, icon)) : ( /*#__PURE__*/_react["default"].createElement(_LoadingIcon["default"], {
      existIcon: !!icon,
      prefixCls: prefixCls,
      loading: !!innerLoading
    }));
    var kids = children || children === 0 ? (0, _buttonHelpers.spaceChildren)(children, needInserted && autoInsertSpace) : null;
    if (linkButtonRestProps.href !== undefined) {
      return wrapCSSVar( /*#__PURE__*/_react["default"].createElement("a", Object.assign({}, linkButtonRestProps, {
        className: (0, _classnames["default"])(classes, _defineProperty({}, "".concat(prefixCls, "-disabled"), mergedDisabled)),
        href: mergedDisabled ? undefined : linkButtonRestProps.href,
        style: fullStyle,
        onClick: handleClick,
        ref: buttonRef,
        tabIndex: mergedDisabled ? -1 : 0
      }), iconNode, kids));
    }
    var buttonNode = /*#__PURE__*/_react["default"].createElement("button", Object.assign({}, rest, {
      type: htmlType,
      className: classes,
      style: fullStyle,
      onClick: handleClick,
      disabled: mergedDisabled,
      ref: buttonRef
    }), iconNode, kids, !!compactItemClassnames && /*#__PURE__*/_react["default"].createElement(_compactCmp["default"], {
      key: "compact",
      prefixCls: prefixCls
    }));
    if (!(0, _buttonHelpers.isUnBorderedButtonType)(type)) {
      buttonNode = /*#__PURE__*/_react["default"].createElement(_wave["default"], {
        component: "Button",
        disabled: !!innerLoading
      }, buttonNode);
    }
    return wrapCSSVar(buttonNode);
  };
  var Button = /*#__PURE__*/(0, _react.forwardRef)(InternalButton);
  if (process.env.NODE_ENV !== 'production') {
    Button.displayName = 'Button';
  }
  Button.Group = _buttonGroup["default"];
  Button.__ANT_BUTTON = true;
  var _default = _exports["default"] = Button;
});