define(["exports", "@ant-design/cssinjs", "antd4mx/_util/hooks/useZIndex", "antd4mx/style", "antd4mx/theme/internal", "antd4mx/notification/style/placement", "antd4mx/notification/style/stack"], function (_exports, _cssinjs, _useZIndex, _style, _internal, _placement, _stack) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareNotificationToken = _exports.prepareComponentToken = _exports.genNoticeStyle = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genNoticeStyle = _exports.genNoticeStyle = function genNoticeStyle(token) {
    var iconCls = token.iconCls,
      componentCls = token.componentCls,
      boxShadow = token.boxShadow,
      fontSizeLG = token.fontSizeLG,
      notificationMarginBottom = token.notificationMarginBottom,
      borderRadiusLG = token.borderRadiusLG,
      colorSuccess = token.colorSuccess,
      colorInfo = token.colorInfo,
      colorWarning = token.colorWarning,
      colorError = token.colorError,
      colorTextHeading = token.colorTextHeading,
      notificationBg = token.notificationBg,
      notificationPadding = token.notificationPadding,
      notificationMarginEdge = token.notificationMarginEdge,
      fontSize = token.fontSize,
      lineHeight = token.lineHeight,
      width = token.width,
      notificationIconSize = token.notificationIconSize,
      colorText = token.colorText;
    var noticeCls = "".concat(componentCls, "-notice");
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      marginBottom: notificationMarginBottom,
      marginInlineStart: 'auto',
      background: notificationBg,
      borderRadius: borderRadiusLG,
      boxShadow: boxShadow
    }, noticeCls, {
      padding: notificationPadding,
      width: width,
      maxWidth: "calc(100vw - ".concat((0, _cssinjs.unit)(token.calc(notificationMarginEdge).mul(2).equal()), ")"),
      overflow: 'hidden',
      lineHeight: lineHeight,
      wordWrap: 'break-word'
    }), "".concat(componentCls, "-close-icon"), {
      fontSize: fontSize,
      cursor: 'pointer'
    }), "".concat(noticeCls, "-message"), {
      marginBottom: token.marginXS,
      color: colorTextHeading,
      fontSize: fontSizeLG,
      lineHeight: token.lineHeightLG
    }), "".concat(noticeCls, "-description"), {
      fontSize: fontSize,
      color: colorText
    }), "".concat(noticeCls, "-closable ").concat(noticeCls, "-message"), {
      paddingInlineEnd: token.paddingLG
    }), "".concat(noticeCls, "-with-icon ").concat(noticeCls, "-message"), {
      marginBottom: token.marginXS,
      marginInlineStart: token.calc(token.marginSM).add(notificationIconSize).equal(),
      fontSize: fontSizeLG
    }), "".concat(noticeCls, "-with-icon ").concat(noticeCls, "-description"), {
      marginInlineStart: token.calc(token.marginSM).add(notificationIconSize).equal(),
      fontSize: fontSize
    }), "".concat(noticeCls, "-icon"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'absolute',
      fontSize: notificationIconSize,
      lineHeight: 1
    }, "&-success".concat(iconCls), {
      color: colorSuccess
    }), "&-info".concat(iconCls), {
      color: colorInfo
    }), "&-warning".concat(iconCls), {
      color: colorWarning
    }), "&-error".concat(iconCls), {
      color: colorError
    })), "".concat(noticeCls, "-close"), {
      position: 'absolute',
      top: token.notificationPaddingVertical,
      insetInlineEnd: token.notificationPaddingHorizontal,
      color: token.colorIcon,
      outline: 'none',
      width: token.notificationCloseButtonSize,
      height: token.notificationCloseButtonSize,
      borderRadius: token.borderRadiusSM,
      transition: "background-color ".concat(token.motionDurationMid, ", color ").concat(token.motionDurationMid),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        color: token.colorIconHover,
        backgroundColor: token.closeBtnHoverBg
      }
    }), "".concat(noticeCls, "-btn"), {
      "float": 'right',
      marginTop: token.marginSM
    });
  };
  var genNotificationStyle = function genNotificationStyle(token) {
    var componentCls = token.componentCls,
      notificationMarginBottom = token.notificationMarginBottom,
      notificationMarginEdge = token.notificationMarginEdge,
      motionDurationMid = token.motionDurationMid,
      motionEaseInOut = token.motionEaseInOut;
    var noticeCls = "".concat(componentCls, "-notice");
    var fadeOut = new _cssinjs.Keyframes('antNotificationFadeOut', {
      '0%': {
        maxHeight: token.animationMaxHeight,
        marginBottom: notificationMarginBottom
      },
      '100%': {
        maxHeight: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      }
    });
    return [// ============================ Holder ============================
    _defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'fixed',
      zIndex: token.zIndexPopup,
      marginRight: {
        value: notificationMarginEdge,
        _skip_check_: true
      }
    }, "".concat(componentCls, "-hook-holder"), {
      position: 'relative'
    }), "".concat(componentCls, "-fade-appear-prepare"), {
      opacity: '0 !important'
    }), "".concat(componentCls, "-fade-enter, ").concat(componentCls, "-fade-appear"), {
      animationDuration: token.motionDurationMid,
      animationTimingFunction: motionEaseInOut,
      animationFillMode: 'both',
      opacity: 0,
      animationPlayState: 'paused'
    }), "".concat(componentCls, "-fade-leave"), {
      animationTimingFunction: motionEaseInOut,
      animationFillMode: 'both',
      animationDuration: motionDurationMid,
      animationPlayState: 'paused'
    }), "".concat(componentCls, "-fade-enter").concat(componentCls, "-fade-enter-active, ").concat(componentCls, "-fade-appear").concat(componentCls, "-fade-appear-active"), {
      animationPlayState: 'running'
    }), "".concat(componentCls, "-fade-leave").concat(componentCls, "-fade-leave-active"), {
      animationName: fadeOut,
      animationPlayState: 'running'
    }), '&-rtl', _defineProperty({
      direction: 'rtl'
    }, "".concat(noticeCls, "-btn"), {
      "float": 'left'
    })))), // ============================ Notice ============================
    _defineProperty({}, componentCls, _defineProperty({}, "".concat(noticeCls, "-wrapper"), Object.assign({}, genNoticeStyle(token))))];
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      zIndexPopup: token.zIndexPopupBase + _useZIndex.CONTAINER_MAX_OFFSET + 50,
      width: 384,
      closeBtnHoverBg: token.wireframe ? 'transparent' : token.colorFillContent
    };
  };
  var prepareNotificationToken = _exports.prepareNotificationToken = function prepareNotificationToken(token) {
    var notificationPaddingVertical = token.paddingMD;
    var notificationPaddingHorizontal = token.paddingLG;
    var notificationToken = (0, _internal.mergeToken)(token, {
      notificationBg: token.colorBgElevated,
      notificationPaddingVertical: notificationPaddingVertical,
      notificationPaddingHorizontal: notificationPaddingHorizontal,
      notificationIconSize: token.calc(token.fontSizeLG).mul(token.lineHeightLG).equal(),
      notificationCloseButtonSize: token.calc(token.controlHeightLG).mul(0.55).equal(),
      notificationMarginBottom: token.margin,
      notificationPadding: "".concat((0, _cssinjs.unit)(token.paddingMD), " ").concat((0, _cssinjs.unit)(token.paddingContentHorizontalLG)),
      notificationMarginEdge: token.marginLG,
      animationMaxHeight: 150,
      notificationStackLayer: 3
    });
    return notificationToken;
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Notification', function (token) {
    var notificationToken = prepareNotificationToken(token);
    return [genNotificationStyle(notificationToken), (0, _placement["default"])(notificationToken), (0, _stack["default"])(notificationToken)];
  }, prepareComponentToken);
});