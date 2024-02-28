define(["exports", "@ant-design/cssinjs", "antd4mx/style/index", "antd4mx/style/motion/fade", "antd4mx/style/motion/motion", "antd4mx/theme/internal", "antd4mx/float-button/util"], function (_exports, _cssinjs, _index, _fade, _motion, _internal, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var initFloatButtonGroupMotion = function initFloatButtonGroupMotion(token) {
    var componentCls = token.componentCls,
      floatButtonSize = token.floatButtonSize,
      motionDurationSlow = token.motionDurationSlow,
      motionEaseInOutCirc = token.motionEaseInOutCirc;
    var groupPrefixCls = "".concat(componentCls, "-group");
    var moveDownIn = new _cssinjs.Keyframes('antFloatButtonMoveDownIn', {
      '0%': {
        transform: "translate3d(0, ".concat((0, _cssinjs.unit)(floatButtonSize), ", 0)"),
        transformOrigin: '0 0',
        opacity: 0
      },
      '100%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
      }
    });
    var moveDownOut = new _cssinjs.Keyframes('antFloatButtonMoveDownOut', {
      '0%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
      },
      '100%': {
        transform: "translate3d(0, ".concat((0, _cssinjs.unit)(floatButtonSize), ", 0)"),
        transformOrigin: '0 0',
        opacity: 0
      }
    });
    return [_defineProperty({}, "".concat(groupPrefixCls, "-wrap"), Object.assign({}, (0, _motion.initMotion)("".concat(groupPrefixCls, "-wrap"), moveDownIn, moveDownOut, motionDurationSlow, true))), _defineProperty({}, "".concat(groupPrefixCls, "-wrap"), _defineProperty(_defineProperty({}, "\n          &".concat(groupPrefixCls, "-wrap-enter,\n          &").concat(groupPrefixCls, "-wrap-appear\n        "), {
      opacity: 0,
      animationTimingFunction: motionEaseInOutCirc
    }), "&".concat(groupPrefixCls, "-wrap-leave"), {
      animationTimingFunction: motionEaseInOutCirc
    }))];
  };
  // ============================== Group ==============================
  var floatButtonGroupStyle = function floatButtonGroupStyle(token) {
    var antCls = token.antCls,
      componentCls = token.componentCls,
      floatButtonSize = token.floatButtonSize,
      margin = token.margin,
      borderRadiusLG = token.borderRadiusLG,
      borderRadiusSM = token.borderRadiusSM,
      badgeOffset = token.badgeOffset,
      floatButtonBodyPadding = token.floatButtonBodyPadding,
      calc = token.calc;
    var groupPrefixCls = "".concat(componentCls, "-group");
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, groupPrefixCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty({
      zIndex: 99,
      display: 'block',
      border: 'none',
      position: 'fixed',
      width: floatButtonSize,
      height: 'auto',
      boxShadow: 'none',
      minHeight: floatButtonSize,
      insetInlineEnd: token.floatButtonInsetInlineEnd,
      insetBlockEnd: token.floatButtonInsetBlockEnd,
      borderRadius: borderRadiusLG
    }, "".concat(groupPrefixCls, "-wrap"), {
      zIndex: -1,
      display: 'block',
      position: 'relative',
      marginBottom: margin
    }), "&".concat(groupPrefixCls, "-rtl"), {
      direction: 'rtl'
    }), componentCls, {
      position: 'static'
    }))), "".concat(groupPrefixCls, "-circle"), _defineProperty({}, "".concat(componentCls, "-circle:not(:last-child)"), _defineProperty({
      marginBottom: token.margin
    }, "".concat(componentCls, "-body"), {
      width: floatButtonSize,
      height: floatButtonSize,
      borderRadius: '50%'
    }))), "".concat(groupPrefixCls, "-square"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-square"), _defineProperty({
      borderRadius: 0,
      padding: 0,
      '&:first-child': {
        borderStartStartRadius: borderRadiusLG,
        borderStartEndRadius: borderRadiusLG
      },
      '&:last-child': {
        borderEndStartRadius: borderRadiusLG,
        borderEndEndRadius: borderRadiusLG
      },
      '&:not(:last-child)': {
        borderBottom: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit)
      }
    }, "".concat(antCls, "-badge"), _defineProperty({}, "".concat(antCls, "-badge-count"), {
      top: calc(calc(floatButtonBodyPadding).add(badgeOffset)).mul(-1).equal(),
      insetInlineEnd: calc(calc(floatButtonBodyPadding).add(badgeOffset)).mul(-1).equal()
    }))), "".concat(groupPrefixCls, "-wrap"), _defineProperty({
      display: 'block',
      borderRadius: borderRadiusLG,
      boxShadow: token.boxShadowSecondary
    }, "".concat(componentCls, "-square"), _defineProperty({
      boxShadow: 'none',
      marginTop: 0,
      borderRadius: 0,
      padding: floatButtonBodyPadding,
      '&:first-child': {
        borderStartStartRadius: borderRadiusLG,
        borderStartEndRadius: borderRadiusLG
      },
      '&:last-child': {
        borderEndStartRadius: borderRadiusLG,
        borderEndEndRadius: borderRadiusLG
      },
      '&:not(:last-child)': {
        borderBottom: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit)
      }
    }, "".concat(componentCls, "-body"), {
      width: token.floatButtonBodySize,
      height: token.floatButtonBodySize
    })))), "".concat(groupPrefixCls, "-circle-shadow"), {
      boxShadow: 'none'
    }), "".concat(groupPrefixCls, "-square-shadow"), _defineProperty({
      boxShadow: token.boxShadowSecondary
    }, "".concat(componentCls, "-square"), _defineProperty({
      boxShadow: 'none',
      padding: floatButtonBodyPadding
    }, "".concat(componentCls, "-body"), {
      width: token.floatButtonBodySize,
      height: token.floatButtonBodySize,
      borderRadius: borderRadiusSM
    })));
  };
  // ============================== Shared ==============================
  var sharedFloatButtonStyle = function sharedFloatButtonStyle(token) {
    var antCls = token.antCls,
      componentCls = token.componentCls,
      floatButtonBodyPadding = token.floatButtonBodyPadding,
      floatButtonIconSize = token.floatButtonIconSize,
      floatButtonSize = token.floatButtonSize,
      borderRadiusLG = token.borderRadiusLG,
      badgeOffset = token.badgeOffset,
      dotOffsetInSquare = token.dotOffsetInSquare,
      dotOffsetInCircle = token.dotOffsetInCircle,
      calc = token.calc;
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty({
      border: 'none',
      position: 'fixed',
      cursor: 'pointer',
      zIndex: 99,
      // Do not remove the 'display: block' here.
      // Deleting it will cause marginBottom to become ineffective.
      // Ref: https://github.com/ant-design/ant-design/issues/44700
      display: 'block',
      width: floatButtonSize,
      height: floatButtonSize,
      insetInlineEnd: token.floatButtonInsetInlineEnd,
      insetBlockEnd: token.floatButtonInsetBlockEnd,
      boxShadow: token.boxShadowSecondary,
      // Pure Panel
      '&-pure': {
        position: 'relative',
        inset: 'auto'
      },
      '&:empty': {
        display: 'none'
      }
    }, "".concat(antCls, "-badge"), _defineProperty({
      width: '100%',
      height: '100%'
    }, "".concat(antCls, "-badge-count"), {
      transform: 'translate(0, 0)',
      transformOrigin: 'center',
      top: calc(badgeOffset).mul(-1).equal(),
      insetInlineEnd: calc(badgeOffset).mul(-1).equal()
    })), "".concat(componentCls, "-body"), _defineProperty({
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: "all ".concat(token.motionDurationMid)
    }, "".concat(componentCls, "-content"), _defineProperty({
      overflow: 'hidden',
      textAlign: 'center',
      minHeight: floatButtonSize,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: "".concat((0, _cssinjs.unit)(calc(floatButtonBodyPadding).div(2).equal()), " ").concat((0, _cssinjs.unit)(floatButtonBodyPadding))
    }, "".concat(componentCls, "-icon"), {
      textAlign: 'center',
      margin: 'auto',
      width: floatButtonIconSize,
      fontSize: floatButtonIconSize,
      lineHeight: 1
    }))))), "".concat(componentCls, "-rtl"), {
      direction: 'rtl'
    }), "".concat(componentCls, "-circle"), _defineProperty(_defineProperty({
      height: floatButtonSize,
      borderRadius: '50%'
    }, "".concat(antCls, "-badge"), _defineProperty({}, "".concat(antCls, "-badge-dot"), {
      top: dotOffsetInCircle,
      insetInlineEnd: dotOffsetInCircle
    })), "".concat(componentCls, "-body"), {
      borderRadius: '50%'
    })), "".concat(componentCls, "-square"), _defineProperty(_defineProperty({
      height: 'auto',
      minHeight: floatButtonSize,
      borderRadius: borderRadiusLG
    }, "".concat(antCls, "-badge"), _defineProperty({}, "".concat(antCls, "-badge-dot"), {
      top: dotOffsetInSquare,
      insetInlineEnd: dotOffsetInSquare
    })), "".concat(componentCls, "-body"), {
      height: 'auto',
      borderRadius: borderRadiusLG
    })), "".concat(componentCls, "-default"), _defineProperty({
      backgroundColor: token.floatButtonBackgroundColor,
      transition: "background-color ".concat(token.motionDurationMid)
    }, "".concat(componentCls, "-body"), _defineProperty({
      backgroundColor: token.floatButtonBackgroundColor,
      transition: "background-color ".concat(token.motionDurationMid),
      '&:hover': {
        backgroundColor: token.colorFillContent
      }
    }, "".concat(componentCls, "-content"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-icon"), {
      color: token.colorText
    }), "".concat(componentCls, "-description"), {
      display: 'flex',
      alignItems: 'center',
      lineHeight: (0, _cssinjs.unit)(token.fontSizeLG),
      color: token.colorText,
      fontSize: token.fontSizeSM
    })))), "".concat(componentCls, "-primary"), _defineProperty({
      backgroundColor: token.colorPrimary
    }, "".concat(componentCls, "-body"), _defineProperty({
      backgroundColor: token.colorPrimary,
      transition: "background-color ".concat(token.motionDurationMid),
      '&:hover': {
        backgroundColor: token.colorPrimaryHover
      }
    }, "".concat(componentCls, "-content"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-icon"), {
      color: token.colorTextLightSolid
    }), "".concat(componentCls, "-description"), {
      display: 'flex',
      alignItems: 'center',
      lineHeight: (0, _cssinjs.unit)(token.fontSizeLG),
      color: token.colorTextLightSolid,
      fontSize: token.fontSizeSM
    }))));
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      dotOffsetInCircle: (0, _util["default"])(token.controlHeightLG / 2),
      dotOffsetInSquare: (0, _util["default"])(token.borderRadiusLG)
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('FloatButton', function (token) {
    var colorTextLightSolid = token.colorTextLightSolid,
      colorBgElevated = token.colorBgElevated,
      controlHeightLG = token.controlHeightLG,
      marginXXL = token.marginXXL,
      marginLG = token.marginLG,
      fontSize = token.fontSize,
      fontSizeIcon = token.fontSizeIcon,
      controlItemBgHover = token.controlItemBgHover,
      paddingXXS = token.paddingXXS,
      calc = token.calc;
    var floatButtonToken = (0, _internal.mergeToken)(token, {
      floatButtonBackgroundColor: colorBgElevated,
      floatButtonColor: colorTextLightSolid,
      floatButtonHoverBackgroundColor: controlItemBgHover,
      floatButtonFontSize: fontSize,
      floatButtonIconSize: calc(fontSizeIcon).mul(1.5).equal(),
      floatButtonSize: controlHeightLG,
      floatButtonInsetBlockEnd: marginXXL,
      floatButtonInsetInlineEnd: marginLG,
      floatButtonBodySize: calc(controlHeightLG).sub(calc(paddingXXS).mul(2)).equal(),
      // 这里的 paddingXXS 是简写，完整逻辑是 (controlHeightLG - (controlHeightLG - paddingXXS * 2)) / 2,
      floatButtonBodyPadding: paddingXXS,
      badgeOffset: calc(paddingXXS).mul(1.5).equal()
    });
    return [floatButtonGroupStyle(floatButtonToken), sharedFloatButtonStyle(floatButtonToken), (0, _fade.initFadeMotion)(token), initFloatButtonGroupMotion(floatButtonToken)];
  }, prepareComponentToken);
});