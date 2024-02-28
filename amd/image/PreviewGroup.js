define(["exports", "react", "@ant-design/icons/es/icons/CloseOutlined", "@ant-design/icons/es/icons/LeftOutlined", "@ant-design/icons/es/icons/RightOutlined", "@ant-design/icons/es/icons/RotateLeftOutlined", "@ant-design/icons/es/icons/RotateRightOutlined", "@ant-design/icons/es/icons/SwapOutlined", "@ant-design/icons/es/icons/ZoomInOutlined", "@ant-design/icons/es/icons/ZoomOutOutlined", "classnames", "rc-image", "antd4mx/_util/hooks/useZIndex", "antd4mx/_util/motion", "antd4mx/config-provider", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/image/style"], function (_exports, React, _CloseOutlined, _LeftOutlined, _RightOutlined, _RotateLeftOutlined, _RotateRightOutlined, _SwapOutlined, _ZoomInOutlined, _ZoomOutOutlined, _classnames, _rcImage, _useZIndex3, _motion, _configProvider, _useCSSVarCls, _style) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.icons = _exports["default"] = void 0;
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
  var icons = _exports.icons = {
    rotateLeft: /*#__PURE__*/React.createElement(_RotateLeftOutlined["default"], null),
    rotateRight: /*#__PURE__*/React.createElement(_RotateRightOutlined["default"], null),
    zoomIn: /*#__PURE__*/React.createElement(_ZoomInOutlined["default"], null),
    zoomOut: /*#__PURE__*/React.createElement(_ZoomOutOutlined["default"], null),
    close: /*#__PURE__*/React.createElement(_CloseOutlined["default"], null),
    left: /*#__PURE__*/React.createElement(_LeftOutlined["default"], null),
    right: /*#__PURE__*/React.createElement(_RightOutlined["default"], null),
    flipX: /*#__PURE__*/React.createElement(_SwapOutlined["default"], null),
    flipY: /*#__PURE__*/React.createElement(_SwapOutlined["default"], {
      rotate: 90
    })
  };
  var InternalPreviewGroup = function InternalPreviewGroup(_a) {
    var customizePrefixCls = _a.previewPrefixCls,
      preview = _a.preview,
      otherProps = __rest(_a, ["previewPrefixCls", "preview"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('image', customizePrefixCls);
    var previewPrefixCls = "".concat(prefixCls, "-preview");
    var rootPrefixCls = getPrefixCls();
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _style["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var _useZIndex = (0, _useZIndex3.useZIndex)('ImagePreview', _typeof(preview) === 'object' ? preview.zIndex : undefined),
      _useZIndex2 = _slicedToArray(_useZIndex, 1),
      zIndex = _useZIndex2[0];
    var mergedPreview = React.useMemo(function () {
      var _a;
      if (preview === false) {
        return preview;
      }
      var _preview = _typeof(preview) === 'object' ? preview : {};
      var mergedRootClassName = (0, _classnames["default"])(hashId, cssVarCls, rootCls, (_a = _preview.rootClassName) !== null && _a !== void 0 ? _a : '');
      return Object.assign(Object.assign({}, _preview), {
        transitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'zoom', _preview.transitionName),
        maskTransitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'fade', _preview.maskTransitionName),
        rootClassName: mergedRootClassName,
        zIndex: zIndex
      });
    }, [preview]);
    return wrapCSSVar( /*#__PURE__*/React.createElement(_rcImage["default"].PreviewGroup, Object.assign({
      preview: mergedPreview,
      previewPrefixCls: previewPrefixCls,
      icons: icons
    }, otherProps)));
  };
  var _default = _exports["default"] = InternalPreviewGroup;
});