define(["exports", "@ant-design/cssinjs", "antd4mx/style/index", "antd4mx/theme/internal"], function (_exports, _cssinjs, _index, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareToken = _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var antStatusProcessing = new _cssinjs.Keyframes('antStatusProcessing', {
    '0%': {
      transform: 'scale(0.8)',
      opacity: 0.5
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  });
  var antZoomBadgeIn = new _cssinjs.Keyframes('antZoomBadgeIn', {
    '0%': {
      transform: 'scale(0) translate(50%, -50%)',
      opacity: 0
    },
    '100%': {
      transform: 'scale(1) translate(50%, -50%)'
    }
  });
  var antZoomBadgeOut = new _cssinjs.Keyframes('antZoomBadgeOut', {
    '0%': {
      transform: 'scale(1) translate(50%, -50%)'
    },
    '100%': {
      transform: 'scale(0) translate(50%, -50%)',
      opacity: 0
    }
  });
  var antNoWrapperZoomBadgeIn = new _cssinjs.Keyframes('antNoWrapperZoomBadgeIn', {
    '0%': {
      transform: 'scale(0)',
      opacity: 0
    },
    '100%': {
      transform: 'scale(1)'
    }
  });
  var antNoWrapperZoomBadgeOut = new _cssinjs.Keyframes('antNoWrapperZoomBadgeOut', {
    '0%': {
      transform: 'scale(1)'
    },
    '100%': {
      transform: 'scale(0)',
      opacity: 0
    }
  });
  var antBadgeLoadingCircle = new _cssinjs.Keyframes('antBadgeLoadingCircle', {
    '0%': {
      transformOrigin: '50%'
    },
    '100%': {
      transform: 'translate(50%, -50%) rotate(360deg)',
      transformOrigin: '50%'
    }
  });
  var genSharedBadgeStyle = function genSharedBadgeStyle(token) {
    var componentCls = token.componentCls,
      iconCls = token.iconCls,
      antCls = token.antCls,
      badgeShadowSize = token.badgeShadowSize,
      motionDurationSlow = token.motionDurationSlow,
      textFontSize = token.textFontSize,
      textFontSizeSM = token.textFontSizeSM,
      statusSize = token.statusSize,
      dotSize = token.dotSize,
      textFontWeight = token.textFontWeight,
      indicatorHeight = token.indicatorHeight,
      indicatorHeightSM = token.indicatorHeightSM,
      marginXS = token.marginXS,
      calc = token.calc;
    var numberPrefixCls = "".concat(antCls, "-scroll-number");
    var colorPreset = (0, _internal.genPresetColor)(token, function (colorKey, _ref) {
      var darkColor = _ref.darkColor;
      return _defineProperty({}, "&".concat(componentCls, " ").concat(componentCls, "-color-").concat(colorKey), _defineProperty({
        background: darkColor
      }, "&:not(".concat(componentCls, "-count)"), {
        color: darkColor
      }));
    });
    return _defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      display: 'inline-block',
      width: 'fit-content',
      lineHeight: 1
    }, "".concat(componentCls, "-count"), {
      zIndex: token.indicatorZIndex,
      minWidth: indicatorHeight,
      height: indicatorHeight,
      color: token.badgeTextColor,
      fontWeight: textFontWeight,
      fontSize: textFontSize,
      lineHeight: (0, _cssinjs.unit)(indicatorHeight),
      whiteSpace: 'nowrap',
      textAlign: 'center',
      background: token.badgeColor,
      borderRadius: calc(indicatorHeight).div(2).equal(),
      boxShadow: "0 0 0 ".concat((0, _cssinjs.unit)(badgeShadowSize), " ").concat(token.badgeShadowColor),
      transition: "background ".concat(token.motionDurationMid),
      a: {
        color: token.badgeTextColor
      },
      'a:hover': {
        color: token.badgeTextColor
      },
      'a:hover &': {
        background: token.badgeColorHover
      }
    }), "".concat(componentCls, "-count-sm"), {
      minWidth: indicatorHeightSM,
      height: indicatorHeightSM,
      fontSize: textFontSizeSM,
      lineHeight: (0, _cssinjs.unit)(indicatorHeightSM),
      borderRadius: calc(indicatorHeightSM).div(2).equal()
    }), "".concat(componentCls, "-multiple-words"), {
      padding: "0 ".concat((0, _cssinjs.unit)(token.paddingXS)),
      bdi: {
        unicodeBidi: 'plaintext'
      }
    }), "".concat(componentCls, "-dot"), {
      zIndex: token.indicatorZIndex,
      width: dotSize,
      minWidth: dotSize,
      height: dotSize,
      background: token.badgeColor,
      borderRadius: '100%',
      boxShadow: "0 0 0 ".concat((0, _cssinjs.unit)(badgeShadowSize), " ").concat(token.badgeShadowColor)
    }), "".concat(componentCls, "-dot").concat(numberPrefixCls), {
      transition: "background ".concat(motionDurationSlow)
    }), "".concat(componentCls, "-count, ").concat(componentCls, "-dot, ").concat(numberPrefixCls, "-custom-component"), _defineProperty({
      position: 'absolute',
      top: 0,
      insetInlineEnd: 0,
      transform: 'translate(50%, -50%)',
      transformOrigin: '100% 0%'
    }, "&".concat(iconCls, "-spin"), {
      animationName: antBadgeLoadingCircle,
      animationDuration: '1s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear'
    })), "&".concat(componentCls, "-status"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      lineHeight: 'inherit',
      verticalAlign: 'baseline'
    }, "".concat(componentCls, "-status-dot"), {
      position: 'relative',
      top: -1,
      // Magic number, but seems better experience
      display: 'inline-block',
      width: statusSize,
      height: statusSize,
      verticalAlign: 'middle',
      borderRadius: '50%'
    }), "".concat(componentCls, "-status-success"), {
      backgroundColor: token.colorSuccess
    }), "".concat(componentCls, "-status-processing"), {
      overflow: 'visible',
      color: token.colorPrimary,
      backgroundColor: token.colorPrimary,
      '&::after': {
        position: 'absolute',
        top: 0,
        insetInlineStart: 0,
        width: '100%',
        height: '100%',
        borderWidth: badgeShadowSize,
        borderStyle: 'solid',
        borderColor: 'inherit',
        borderRadius: '50%',
        animationName: antStatusProcessing,
        animationDuration: token.badgeProcessingDuration,
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        content: '""'
      }
    }), "".concat(componentCls, "-status-default"), {
      backgroundColor: token.colorTextPlaceholder
    }), "".concat(componentCls, "-status-error"), {
      backgroundColor: token.colorError
    }), "".concat(componentCls, "-status-warning"), {
      backgroundColor: token.colorWarning
    }), "".concat(componentCls, "-status-text"), {
      marginInlineStart: marginXS,
      color: token.colorText,
      fontSize: token.fontSize
    }))), colorPreset), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-zoom-appear, ").concat(componentCls, "-zoom-enter"), {
      animationName: antZoomBadgeIn,
      animationDuration: token.motionDurationSlow,
      animationTimingFunction: token.motionEaseOutBack,
      animationFillMode: 'both'
    }), "".concat(componentCls, "-zoom-leave"), {
      animationName: antZoomBadgeOut,
      animationDuration: token.motionDurationSlow,
      animationTimingFunction: token.motionEaseOutBack,
      animationFillMode: 'both'
    }), "&".concat(componentCls, "-not-a-wrapper"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-zoom-appear, ").concat(componentCls, "-zoom-enter"), {
      animationName: antNoWrapperZoomBadgeIn,
      animationDuration: token.motionDurationSlow,
      animationTimingFunction: token.motionEaseOutBack
    }), "".concat(componentCls, "-zoom-leave"), {
      animationName: antNoWrapperZoomBadgeOut,
      animationDuration: token.motionDurationSlow,
      animationTimingFunction: token.motionEaseOutBack
    }), "&:not(".concat(componentCls, "-status)"), {
      verticalAlign: 'middle'
    }), "".concat(numberPrefixCls, "-custom-component, ").concat(componentCls, "-count"), {
      transform: 'none'
    }), "".concat(numberPrefixCls, "-custom-component, ").concat(numberPrefixCls), {
      position: 'relative',
      top: 'auto',
      display: 'block',
      transformOrigin: '50% 50%'
    })), "".concat(numberPrefixCls), _defineProperty(_defineProperty({
      overflow: 'hidden'
    }, "".concat(numberPrefixCls, "-only"), _defineProperty({
      position: 'relative',
      display: 'inline-block',
      height: indicatorHeight,
      transition: "all ".concat(token.motionDurationSlow, " ").concat(token.motionEaseOutBack),
      WebkitTransformStyle: 'preserve-3d',
      WebkitBackfaceVisibility: 'hidden'
    }, "> p".concat(numberPrefixCls, "-only-unit"), {
      height: indicatorHeight,
      margin: 0,
      WebkitTransformStyle: 'preserve-3d',
      WebkitBackfaceVisibility: 'hidden'
    })), "".concat(numberPrefixCls, "-symbol"), {
      verticalAlign: 'top'
    })), '&-rtl', _defineProperty({
      direction: 'rtl'
    }, "".concat(componentCls, "-count, ").concat(componentCls, "-dot, ").concat(numberPrefixCls, "-custom-component"), {
      transform: 'translate(-50%, -50%)'
    }))));
  };
  // ============================== Export ==============================
  var prepareToken = _exports.prepareToken = function prepareToken(token) {
    var fontHeight = token.fontHeight,
      lineWidth = token.lineWidth,
      marginXS = token.marginXS,
      colorBorderBg = token.colorBorderBg;
    var badgeFontHeight = fontHeight;
    var badgeShadowSize = lineWidth;
    var badgeTextColor = token.colorBgContainer;
    var badgeColor = token.colorError;
    var badgeColorHover = token.colorErrorHover;
    var badgeToken = (0, _internal.mergeToken)(token, {
      badgeFontHeight: badgeFontHeight,
      badgeShadowSize: badgeShadowSize,
      badgeTextColor: badgeTextColor,
      badgeColor: badgeColor,
      badgeColorHover: badgeColorHover,
      badgeShadowColor: colorBorderBg,
      badgeProcessingDuration: '1.2s',
      badgeRibbonOffset: marginXS,
      // Follow token just by Design. Not related with token
      badgeRibbonCornerTransform: 'scaleY(0.75)',
      badgeRibbonCornerFilter: "brightness(75%)"
    });
    return badgeToken;
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var fontSize = token.fontSize,
      lineHeight = token.lineHeight,
      fontSizeSM = token.fontSizeSM,
      lineWidth = token.lineWidth;
    return {
      indicatorZIndex: 'auto',
      indicatorHeight: Math.round(fontSize * lineHeight) - 2 * lineWidth,
      indicatorHeightSM: fontSize,
      dotSize: fontSizeSM / 2,
      textFontSize: fontSizeSM,
      textFontSizeSM: fontSizeSM,
      textFontWeight: 'normal',
      statusSize: fontSizeSM / 2
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Badge', function (token) {
    var badgeToken = prepareToken(token);
    return genSharedBadgeStyle(badgeToken);
  }, prepareComponentToken);
});