define(["exports", "@ant-design/cssinjs", "antd4mx/theme/internal", "antd4mx/drawer/style/motion"], function (_exports, _cssinjs, _internal, _motion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // =============================== Base ===============================
  var genDrawerStyle = function genDrawerStyle(token) {
    var _componentCls;
    var componentCls = token.componentCls,
      zIndexPopup = token.zIndexPopup,
      colorBgMask = token.colorBgMask,
      colorBgElevated = token.colorBgElevated,
      motionDurationSlow = token.motionDurationSlow,
      motionDurationMid = token.motionDurationMid,
      padding = token.padding,
      paddingLG = token.paddingLG,
      fontSizeLG = token.fontSizeLG,
      lineHeightLG = token.lineHeightLG,
      lineWidth = token.lineWidth,
      lineType = token.lineType,
      colorSplit = token.colorSplit,
      marginSM = token.marginSM,
      colorIcon = token.colorIcon,
      colorIconHover = token.colorIconHover,
      colorText = token.colorText,
      fontWeightStrong = token.fontWeightStrong,
      footerPaddingBlock = token.footerPaddingBlock,
      footerPaddingInline = token.footerPaddingInline;
    var wrapperCls = "".concat(componentCls, "-content-wrapper");
    return _defineProperty({}, componentCls, (_componentCls = {
      position: 'fixed',
      inset: 0,
      zIndex: zIndexPopup,
      pointerEvents: 'none',
      '&-pure': _defineProperty(_defineProperty(_defineProperty(_defineProperty({
        position: 'relative',
        background: colorBgElevated,
        display: 'flex',
        flexDirection: 'column'
      }, "&".concat(componentCls, "-left"), {
        boxShadow: token.boxShadowDrawerLeft
      }), "&".concat(componentCls, "-right"), {
        boxShadow: token.boxShadowDrawerRight
      }), "&".concat(componentCls, "-top"), {
        boxShadow: token.boxShadowDrawerUp
      }), "&".concat(componentCls, "-bottom"), {
        boxShadow: token.boxShadowDrawerDown
      }),
      '&-inline': {
        position: 'absolute'
      }
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_componentCls, "".concat(componentCls, "-mask"), {
      position: 'absolute',
      inset: 0,
      zIndex: zIndexPopup,
      background: colorBgMask,
      pointerEvents: 'auto'
    }), wrapperCls, {
      position: 'absolute',
      zIndex: zIndexPopup,
      maxWidth: '100vw',
      transition: "all ".concat(motionDurationSlow),
      '&-hidden': {
        display: 'none'
      }
    }), "&-left > ".concat(wrapperCls), {
      top: 0,
      bottom: 0,
      left: {
        _skip_check_: true,
        value: 0
      },
      boxShadow: token.boxShadowDrawerLeft
    }), "&-right > ".concat(wrapperCls), {
      top: 0,
      right: {
        _skip_check_: true,
        value: 0
      },
      bottom: 0,
      boxShadow: token.boxShadowDrawerRight
    }), "&-top > ".concat(wrapperCls), {
      top: 0,
      insetInline: 0,
      boxShadow: token.boxShadowDrawerUp
    }), "&-bottom > ".concat(wrapperCls), {
      bottom: 0,
      insetInline: 0,
      boxShadow: token.boxShadowDrawerDown
    }), "".concat(componentCls, "-content"), {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      overflow: 'auto',
      background: colorBgElevated,
      pointerEvents: 'auto'
    }), "".concat(componentCls, "-header"), {
      display: 'flex',
      flex: 0,
      alignItems: 'center',
      padding: "".concat((0, _cssinjs.unit)(padding), " ").concat((0, _cssinjs.unit)(paddingLG)),
      fontSize: fontSizeLG,
      lineHeight: lineHeightLG,
      borderBottom: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorSplit),
      '&-title': {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        minWidth: 0,
        minHeight: 0
      }
    }), "".concat(componentCls, "-extra"), {
      flex: 'none'
    }), "".concat(componentCls, "-close"), {
      display: 'inline-block',
      marginInlineEnd: marginSM,
      color: colorIcon,
      fontWeight: fontWeightStrong,
      fontSize: fontSizeLG,
      fontStyle: 'normal',
      lineHeight: 1,
      textAlign: 'center',
      textTransform: 'none',
      textDecoration: 'none',
      background: 'transparent',
      border: 0,
      outline: 0,
      cursor: 'pointer',
      transition: "color ".concat(motionDurationMid),
      textRendering: 'auto',
      '&:focus, &:hover': {
        color: colorIconHover,
        textDecoration: 'none'
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_componentCls, "".concat(componentCls, "-title"), {
      flex: 1,
      margin: 0,
      color: colorText,
      fontWeight: token.fontWeightStrong,
      fontSize: fontSizeLG,
      lineHeight: lineHeightLG
    }), "".concat(componentCls, "-body"), {
      flex: 1,
      minWidth: 0,
      minHeight: 0,
      padding: paddingLG,
      overflow: 'auto'
    }), "".concat(componentCls, "-footer"), {
      flexShrink: 0,
      padding: "".concat((0, _cssinjs.unit)(footerPaddingBlock), " ").concat((0, _cssinjs.unit)(footerPaddingInline)),
      borderTop: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorSplit)
    }), '&-rtl', {
      direction: 'rtl'
    })));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      zIndexPopup: token.zIndexPopupBase,
      footerPaddingBlock: token.paddingXS,
      footerPaddingInline: token.padding
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Drawer', function (token) {
    var drawerToken = (0, _internal.mergeToken)(token, {});
    return [genDrawerStyle(drawerToken), (0, _motion["default"])(drawerToken)];
  }, prepareComponentToken);
});