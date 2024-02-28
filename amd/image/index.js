define(["exports", "react", "@ant-design/icons/es/icons/EyeOutlined", "classnames", "rc-image", "antd4mx/_util/hooks/useZIndex", "antd4mx/_util/motion", "antd4mx/config-provider", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/locale/en_US", "antd4mx/image/PreviewGroup", "antd4mx/image/style"], function (_exports, React, _EyeOutlined, _classnames, _rcImage, _useZIndex3, _motion, _configProvider, _useCSSVarCls, _en_US, _PreviewGroup, _style) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
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
  var Image = function Image(props) {
    var _a;
    var customizePrefixCls = props.prefixCls,
      preview = props.preview,
      className = props.className,
      rootClassName = props.rootClassName,
      style = props.style,
      otherProps = __rest(props, ["prefixCls", "preview", "className", "rootClassName", "style"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      _React$useContext$loc = _React$useContext.locale,
      contextLocale = _React$useContext$loc === void 0 ? _en_US["default"] : _React$useContext$loc,
      getContextPopupContainer = _React$useContext.getPopupContainer,
      image = _React$useContext.image;
    var prefixCls = getPrefixCls('image', customizePrefixCls);
    var rootPrefixCls = getPrefixCls();
    var imageLocale = contextLocale.Image || _en_US["default"].Image;
    // Style
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _style["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var mergedRootClassName = (0, _classnames["default"])(rootClassName, hashId, cssVarCls, rootCls);
    var mergedClassName = (0, _classnames["default"])(className, hashId, image === null || image === void 0 ? void 0 : image.className);
    var _useZIndex = (0, _useZIndex3.useZIndex)('ImagePreview', _typeof(preview) === 'object' ? preview.zIndex : undefined),
      _useZIndex2 = _slicedToArray(_useZIndex, 1),
      zIndex = _useZIndex2[0];
    var mergedPreview = React.useMemo(function () {
      var _a;
      if (preview === false) {
        return preview;
      }
      var _preview = _typeof(preview) === 'object' ? preview : {};
      var getContainer = _preview.getContainer,
        closeIcon = _preview.closeIcon,
        restPreviewProps = __rest(_preview, ["getContainer", "closeIcon"]);
      return Object.assign(Object.assign({
        mask: ( /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-mask-info")
        }, /*#__PURE__*/React.createElement(_EyeOutlined["default"], null), imageLocale === null || imageLocale === void 0 ? void 0 : imageLocale.preview)),
        icons: _PreviewGroup.icons
      }, restPreviewProps), {
        getContainer: getContainer !== null && getContainer !== void 0 ? getContainer : getContextPopupContainer,
        transitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'zoom', _preview.transitionName),
        maskTransitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'fade', _preview.maskTransitionName),
        zIndex: zIndex,
        closeIcon: closeIcon !== null && closeIcon !== void 0 ? closeIcon : (_a = image === null || image === void 0 ? void 0 : image.preview) === null || _a === void 0 ? void 0 : _a.closeIcon
      });
    }, [preview, imageLocale, (_a = image === null || image === void 0 ? void 0 : image.preview) === null || _a === void 0 ? void 0 : _a.closeIcon]);
    var mergedStyle = Object.assign(Object.assign({}, image === null || image === void 0 ? void 0 : image.style), style);
    return wrapCSSVar( /*#__PURE__*/React.createElement(_rcImage["default"], Object.assign({
      prefixCls: prefixCls,
      preview: mergedPreview,
      rootClassName: mergedRootClassName,
      className: mergedClassName,
      style: mergedStyle
    }, otherProps)));
  };
  Image.PreviewGroup = _PreviewGroup["default"];
  if (process.env.NODE_ENV !== 'production') {
    Image.displayName = 'Image';
  }
  var _default = _exports["default"] = Image;
});