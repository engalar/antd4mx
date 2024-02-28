define(["exports", "react", "classnames", "rc-resize-observer", "rc-util/es/ref", "antd4mx/_util/responsiveObserver", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/config-provider/hooks/useSize", "antd4mx/grid/hooks/useBreakpoint", "antd4mx/avatar/AvatarContext", "antd4mx/avatar/style/index", "antd4mx/config-provider/hooks/useCSSVarCls"], function (_exports, React, _classnames, _rcResizeObserver, _ref, _responsiveObserver, _warning, _index, _useSize, _useBreakpoint, _AvatarContext, _index2, _useCSSVarCls) {
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
  var InternalAvatar = function InternalAvatar(props, ref) {
    var _React$useState = React.useState(1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      scale = _React$useState2[0],
      setScale = _React$useState2[1];
    var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      mounted = _React$useState4[0],
      setMounted = _React$useState4[1];
    var _React$useState5 = React.useState(true),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isImgExist = _React$useState6[0],
      setIsImgExist = _React$useState6[1];
    var avatarNodeRef = React.useRef(null);
    var avatarChildrenRef = React.useRef(null);
    var avatarNodeMergeRef = (0, _ref.composeRef)(ref, avatarNodeRef);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      avatar = _React$useContext.avatar;
    var avatarCtx = React.useContext(_AvatarContext["default"]);
    var setScaleParam = function setScaleParam() {
      if (!avatarChildrenRef.current || !avatarNodeRef.current) {
        return;
      }
      var childrenWidth = avatarChildrenRef.current.offsetWidth; // offsetWidth avoid affecting be transform scale
      var nodeWidth = avatarNodeRef.current.offsetWidth;
      // denominator is 0 is no meaning
      if (childrenWidth !== 0 && nodeWidth !== 0) {
        var _props$gap = props.gap,
          gap = _props$gap === void 0 ? 4 : _props$gap;
        if (gap * 2 < nodeWidth) {
          setScale(nodeWidth - gap * 2 < childrenWidth ? (nodeWidth - gap * 2) / childrenWidth : 1);
        }
      }
    };
    React.useEffect(function () {
      setMounted(true);
    }, []);
    React.useEffect(function () {
      setIsImgExist(true);
      setScale(1);
    }, [props.src]);
    React.useEffect(setScaleParam, [props.gap]);
    var handleImgLoadError = function handleImgLoadError() {
      var onError = props.onError;
      var errorFlag = onError === null || onError === void 0 ? void 0 : onError();
      if (errorFlag !== false) {
        setIsImgExist(false);
      }
    };
    var customizePrefixCls = props.prefixCls,
      shape = props.shape,
      customSize = props.size,
      src = props.src,
      srcSet = props.srcSet,
      icon = props.icon,
      className = props.className,
      rootClassName = props.rootClassName,
      alt = props.alt,
      draggable = props.draggable,
      children = props.children,
      crossOrigin = props.crossOrigin,
      others = __rest(props, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "rootClassName", "alt", "draggable", "children", "crossOrigin"]);
    var size = (0, _useSize["default"])(function (ctxSize) {
      var _a, _b;
      return (_b = (_a = customSize !== null && customSize !== void 0 ? customSize : avatarCtx === null || avatarCtx === void 0 ? void 0 : avatarCtx.size) !== null && _a !== void 0 ? _a : ctxSize) !== null && _b !== void 0 ? _b : 'default';
    });
    var needResponsive = Object.keys(_typeof(size) === 'object' ? size || {} : {}).some(function (key) {
      return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(key);
    });
    var screens = (0, _useBreakpoint["default"])(needResponsive);
    var responsiveSizeStyle = React.useMemo(function () {
      if (_typeof(size) !== 'object') {
        return {};
      }
      var currentBreakpoint = _responsiveObserver.responsiveArray.find(function (screen) {
        return screens[screen];
      });
      var currentSize = size[currentBreakpoint];
      return currentSize ? {
        width: currentSize,
        height: currentSize,
        fontSize: currentSize && (icon || children) ? currentSize / 2 : 18
      } : {};
    }, [screens, size]);
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Avatar');
      process.env.NODE_ENV !== "production" ? warning(!(typeof icon === 'string' && icon.length > 2), 'breaking', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon")) : void 0;
    }
    var prefixCls = getPrefixCls('avatar', customizePrefixCls);
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var sizeCls = (0, _classnames["default"])(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-lg"), size === 'large'), "".concat(prefixCls, "-sm"), size === 'small'));
    var hasImageElement = /*#__PURE__*/React.isValidElement(src);
    var mergedShape = shape || (avatarCtx === null || avatarCtx === void 0 ? void 0 : avatarCtx.shape) || 'circle';
    var classString = (0, _classnames["default"])(prefixCls, sizeCls, avatar === null || avatar === void 0 ? void 0 : avatar.className, "".concat(prefixCls, "-").concat(mergedShape), _defineProperty(_defineProperty({}, "".concat(prefixCls, "-image"), hasImageElement || src && isImgExist), "".concat(prefixCls, "-icon"), !!icon), cssVarCls, rootCls, className, rootClassName, hashId);
    var sizeStyle = typeof size === 'number' ? {
      width: size,
      height: size,
      fontSize: icon ? size / 2 : 18
    } : {};
    var childrenToRender;
    if (typeof src === 'string' && isImgExist) {
      childrenToRender = /*#__PURE__*/React.createElement("img", {
        src: src,
        draggable: draggable,
        srcSet: srcSet,
        onError: handleImgLoadError,
        alt: alt,
        crossOrigin: crossOrigin
      });
    } else if (hasImageElement) {
      childrenToRender = src;
    } else if (icon) {
      childrenToRender = icon;
    } else if (mounted || scale !== 1) {
      var transformString = "scale(".concat(scale, ")");
      var childrenStyle = {
        msTransform: transformString,
        WebkitTransform: transformString,
        transform: transformString
      };
      childrenToRender = /*#__PURE__*/React.createElement(_rcResizeObserver["default"], {
        onResize: setScaleParam
      }, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-string"),
        ref: avatarChildrenRef,
        style: Object.assign({}, childrenStyle)
      }, children));
    } else {
      childrenToRender = /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-string"),
        style: {
          opacity: 0
        },
        ref: avatarChildrenRef
      }, children);
    }
    // The event is triggered twice from bubbling up the DOM tree.
    // see https://codesandbox.io/s/kind-snow-9lidz
    delete others.onError;
    delete others.gap;
    return wrapCSSVar( /*#__PURE__*/React.createElement("span", Object.assign({}, others, {
      style: Object.assign(Object.assign(Object.assign(Object.assign({}, sizeStyle), responsiveSizeStyle), avatar === null || avatar === void 0 ? void 0 : avatar.style), others.style),
      className: classString,
      ref: avatarNodeMergeRef
    }), childrenToRender));
  };
  var Avatar = /*#__PURE__*/React.forwardRef(InternalAvatar);
  if (process.env.NODE_ENV !== 'production') {
    Avatar.displayName = 'Avatar';
  }
  var _default = _exports["default"] = Avatar;
});