define(["exports", "antd4mx/style/index", "antd4mx/style/motion/index", "antd4mx/theme/internal", "@ant-design/cssinjs"], function (_exports, _index, _index2, _internal, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareToken = _exports.prepareComponentToken = _exports.genModalMaskStyle = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function box(position) {
    return {
      position: position,
      inset: 0
    };
  }
  var genModalMaskStyle = _exports.genModalMaskStyle = function genModalMaskStyle(token) {
    var componentCls = token.componentCls,
      antCls = token.antCls;
    return [_defineProperty({}, "".concat(componentCls, "-root"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls).concat(antCls, "-zoom-enter, ").concat(componentCls).concat(antCls, "-zoom-appear"), {
      // reset scale avoid mousePosition bug
      transform: 'none',
      opacity: 0,
      animationDuration: token.motionDurationSlow,
      // https://github.com/ant-design/ant-design/issues/11777
      userSelect: 'none'
    }), "".concat(componentCls).concat(antCls, "-zoom-leave ").concat(componentCls, "-content"), {
      pointerEvents: 'none'
    }), "".concat(componentCls, "-mask"), Object.assign(Object.assign({}, box('fixed')), _defineProperty({
      zIndex: token.zIndexPopupBase,
      height: '100%',
      backgroundColor: token.colorBgMask,
      pointerEvents: 'none'
    }, "".concat(componentCls, "-hidden"), {
      display: 'none'
    }))), "".concat(componentCls, "-wrap"), Object.assign(Object.assign({}, box('fixed')), {
      zIndex: token.zIndexPopupBase,
      overflow: 'auto',
      outline: 0,
      WebkitOverflowScrolling: 'touch'
    }))), _defineProperty({}, "".concat(componentCls, "-root"), (0, _index2.initFadeMotion)(token))];
  };
  var genModalStyle = function genModalStyle(token) {
    var componentCls = token.componentCls;
    return [// ======================== Root =========================
    _defineProperty({}, "".concat(componentCls, "-root"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-wrap-rtl"), {
      direction: 'rtl'
    }), "".concat(componentCls, "-centered"), _defineProperty({
      textAlign: 'center',
      '&::before': {
        display: 'inline-block',
        width: 0,
        height: '100%',
        verticalAlign: 'middle',
        content: '""'
      }
    }, componentCls, {
      top: 0,
      display: 'inline-block',
      paddingBottom: 0,
      textAlign: 'start',
      verticalAlign: 'middle'
    })), "@media (max-width: ".concat(token.screenSMMax, "px)"), _defineProperty(_defineProperty({}, componentCls, {
      maxWidth: 'calc(100vw - 16px)',
      margin: "".concat((0, _cssinjs.unit)(token.marginXS), " auto")
    }), "".concat(componentCls, "-centered"), _defineProperty({}, componentCls, {
      flex: 1
    })))), // ======================== Modal ========================
    _defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      pointerEvents: 'none',
      position: 'relative',
      top: 100,
      width: 'auto',
      maxWidth: "calc(100vw - ".concat((0, _cssinjs.unit)(token.calc(token.margin).mul(2).equal()), ")"),
      margin: '0 auto',
      paddingBottom: token.paddingLG
    }, "".concat(componentCls, "-title"), {
      margin: 0,
      color: token.titleColor,
      fontWeight: token.fontWeightStrong,
      fontSize: token.titleFontSize,
      lineHeight: token.titleLineHeight,
      wordWrap: 'break-word'
    }), "".concat(componentCls, "-content"), {
      position: 'relative',
      backgroundColor: token.contentBg,
      backgroundClip: 'padding-box',
      border: 0,
      borderRadius: token.borderRadiusLG,
      boxShadow: token.boxShadow,
      pointerEvents: 'auto',
      padding: token.contentPadding
    }), "".concat(componentCls, "-close"), Object.assign({
      position: 'absolute',
      top: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
      insetInlineEnd: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
      zIndex: token.calc(token.zIndexPopupBase).add(10).equal(),
      padding: 0,
      color: token.modalCloseIconColor,
      fontWeight: token.fontWeightStrong,
      lineHeight: 1,
      textDecoration: 'none',
      background: 'transparent',
      borderRadius: token.borderRadiusSM,
      width: token.modalCloseBtnSize,
      height: token.modalCloseBtnSize,
      border: 0,
      outline: 0,
      cursor: 'pointer',
      transition: "color ".concat(token.motionDurationMid, ", background-color ").concat(token.motionDurationMid),
      '&-x': {
        display: 'flex',
        fontSize: token.fontSizeLG,
        fontStyle: 'normal',
        lineHeight: "".concat((0, _cssinjs.unit)(token.modalCloseBtnSize)),
        justifyContent: 'center',
        textTransform: 'none',
        textRendering: 'auto'
      },
      '&:hover': {
        color: token.modalIconHoverColor,
        backgroundColor: token.closeBtnHoverBg,
        textDecoration: 'none'
      },
      '&:active': {
        backgroundColor: token.closeBtnActiveBg
      }
    }, (0, _index.genFocusStyle)(token))), "".concat(componentCls, "-header"), {
      color: token.colorText,
      background: token.headerBg,
      borderRadius: "".concat((0, _cssinjs.unit)(token.borderRadiusLG), " ").concat((0, _cssinjs.unit)(token.borderRadiusLG), " 0 0"),
      marginBottom: token.headerMarginBottom,
      padding: token.headerPadding,
      borderBottom: token.headerBorderBottom
    }), "".concat(componentCls, "-body"), {
      fontSize: token.fontSize,
      lineHeight: token.lineHeight,
      wordWrap: 'break-word',
      padding: token.bodyPadding
    }), "".concat(componentCls, "-footer"), _defineProperty({
      textAlign: 'end',
      background: token.footerBg,
      marginTop: token.footerMarginTop,
      padding: token.footerPadding,
      borderTop: token.footerBorderTop,
      borderRadius: token.footerBorderRadius
    }, "> ".concat(token.antCls, "-btn + ").concat(token.antCls, "-btn"), {
      marginInlineStart: token.marginXS
    })), "".concat(componentCls, "-open"), {
      overflow: 'hidden'
    }))), // ======================== Pure =========================
    _defineProperty({}, "".concat(componentCls, "-pure-panel"), _defineProperty(_defineProperty({
      top: 'auto',
      padding: 0,
      display: 'flex',
      flexDirection: 'column'
    }, "".concat(componentCls, "-content,\n          ").concat(componentCls, "-body,\n          ").concat(componentCls, "-confirm-body-wrapper"), {
      display: 'flex',
      flexDirection: 'column',
      flex: 'auto'
    }), "".concat(componentCls, "-confirm-body"), {
      marginBottom: 'auto'
    }))];
  };
  var genRTLStyle = function genRTLStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, "".concat(componentCls, "-root"), _defineProperty({}, "".concat(componentCls, "-wrap-rtl"), _defineProperty({
      direction: 'rtl'
    }, "".concat(componentCls, "-confirm-body"), {
      direction: 'rtl'
    })));
  };
  // ============================== Export ==============================
  var prepareToken = _exports.prepareToken = function prepareToken(token) {
    var headerPaddingVertical = token.padding;
    var headerFontSize = token.fontSizeHeading5;
    var headerLineHeight = token.lineHeightHeading5;
    var modalToken = (0, _internal.mergeToken)(token, {
      modalHeaderHeight: token.calc(token.calc(headerLineHeight).mul(headerFontSize).equal()).add(token.calc(headerPaddingVertical).mul(2).equal()).equal(),
      modalFooterBorderColorSplit: token.colorSplit,
      modalFooterBorderStyle: token.lineType,
      modalFooterBorderWidth: token.lineWidth,
      modalIconHoverColor: token.colorIconHover,
      modalCloseIconColor: token.colorIcon,
      modalCloseBtnSize: token.fontHeight,
      modalConfirmIconSize: token.fontHeight,
      modalTitleHeight: token.calc(token.titleFontSize).mul(token.titleLineHeight).equal()
    });
    return modalToken;
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      footerBg: 'transparent',
      headerBg: token.colorBgElevated,
      titleLineHeight: token.lineHeightHeading5,
      titleFontSize: token.fontSizeHeading5,
      contentBg: token.colorBgElevated,
      titleColor: token.colorTextHeading,
      // internal
      closeBtnHoverBg: token.wireframe ? 'transparent' : token.colorFillContent,
      closeBtnActiveBg: token.wireframe ? 'transparent' : token.colorFillContentHover,
      contentPadding: token.wireframe ? 0 : "".concat((0, _cssinjs.unit)(token.paddingMD), " ").concat((0, _cssinjs.unit)(token.paddingContentHorizontalLG)),
      headerPadding: token.wireframe ? "".concat((0, _cssinjs.unit)(token.padding), " ").concat((0, _cssinjs.unit)(token.paddingLG)) : 0,
      headerBorderBottom: token.wireframe ? "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit) : 'none',
      headerMarginBottom: token.wireframe ? 0 : token.marginXS,
      bodyPadding: token.wireframe ? token.paddingLG : 0,
      footerPadding: token.wireframe ? "".concat((0, _cssinjs.unit)(token.paddingXS), " ").concat((0, _cssinjs.unit)(token.padding)) : 0,
      footerBorderTop: token.wireframe ? "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit) : 'none',
      footerBorderRadius: token.wireframe ? "0 0 ".concat((0, _cssinjs.unit)(token.borderRadiusLG), " ").concat((0, _cssinjs.unit)(token.borderRadiusLG)) : 0,
      footerMarginTop: token.wireframe ? 0 : token.marginSM,
      confirmBodyPadding: token.wireframe ? "".concat((0, _cssinjs.unit)(token.padding * 2), " ").concat((0, _cssinjs.unit)(token.padding * 2), " ").concat((0, _cssinjs.unit)(token.paddingLG)) : 0,
      confirmIconMarginInlineEnd: token.wireframe ? token.margin : token.marginSM,
      confirmBtnsMarginTop: token.wireframe ? token.marginLG : token.marginSM
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Modal', function (token) {
    var modalToken = prepareToken(token);
    return [genModalStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), (0, _index2.initZoomMotion)(modalToken, 'zoom')];
  }, prepareComponentToken, {
    unitless: {
      titleLineHeight: true
    }
  });
});