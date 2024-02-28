define(["exports", "@ant-design/cssinjs", "antd4mx/style/index", "antd4mx/theme/internal", "antd4mx/button/style/group", "antd4mx/button/style/token"], function (_exports, _cssinjs, _index, _internal, _group, _token) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // ============================== Shared ==============================
  var genSharedButtonStyle = function genSharedButtonStyle(token) {
    var componentCls = token.componentCls,
      iconCls = token.iconCls,
      fontWeight = token.fontWeight;
    return _defineProperty({}, componentCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      outline: 'none',
      position: 'relative',
      display: 'inline-block',
      fontWeight: fontWeight,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      backgroundImage: 'none',
      background: 'transparent',
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " transparent"),
      cursor: 'pointer',
      transition: "all ".concat(token.motionDurationMid, " ").concat(token.motionEaseInOut),
      userSelect: 'none',
      touchAction: 'manipulation',
      color: token.colorText,
      '&:disabled > *': {
        pointerEvents: 'none'
      },
      '> span': {
        display: 'inline-block'
      }
    }, "".concat(componentCls, "-icon"), {
      lineHeight: 0
    }), "> ".concat(iconCls, " + span, > span + ").concat(iconCls), {
      marginInlineStart: token.marginXS
    }), "&:not(".concat(componentCls, "-icon-only) > ").concat(componentCls, "-icon"), _defineProperty({}, "&".concat(componentCls, "-loading-icon, &:not(:last-child)"), {
      marginInlineEnd: token.marginXS
    })), '> a', {
      color: 'currentColor'
    }), '&:not(:disabled)', Object.assign({}, (0, _index.genFocusStyle)(token))), "&".concat(componentCls, "-two-chinese-chars::first-letter"), {
      letterSpacing: '0.34em'
    }), "&".concat(componentCls, "-two-chinese-chars > *:not(").concat(iconCls, ")"), {
      marginInlineEnd: '-0.34em',
      letterSpacing: '0.34em'
    }), "&-icon-only".concat(componentCls, "-compact-item"), {
      flex: 'none'
    }));
  };
  var genHoverActiveButtonStyle = function genHoverActiveButtonStyle(btnCls, hoverStyle, activeStyle) {
    return _defineProperty({}, "&:not(:disabled):not(".concat(btnCls, "-disabled)"), {
      '&:hover': hoverStyle,
      '&:active': activeStyle
    });
  };
  // ============================== Shape ===============================
  var genCircleButtonStyle = function genCircleButtonStyle(token) {
    return {
      minWidth: token.controlHeight,
      paddingInlineStart: 0,
      paddingInlineEnd: 0,
      borderRadius: '50%'
    };
  };
  var genRoundButtonStyle = function genRoundButtonStyle(token) {
    return {
      borderRadius: token.controlHeight,
      paddingInlineStart: token.calc(token.controlHeight).div(2).equal(),
      paddingInlineEnd: token.calc(token.controlHeight).div(2).equal()
    };
  };
  // =============================== Type ===============================
  var genDisabledStyle = function genDisabledStyle(token) {
    return {
      cursor: 'not-allowed',
      borderColor: token.borderColorDisabled,
      color: token.colorTextDisabled,
      background: token.colorBgContainerDisabled,
      boxShadow: 'none'
    };
  };
  var genGhostButtonStyle = function genGhostButtonStyle(btnCls, background, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) {
    return _defineProperty({}, "&".concat(btnCls, "-background-ghost"), Object.assign(Object.assign({
      color: textColor || undefined,
      background: background,
      borderColor: borderColor || undefined,
      boxShadow: 'none'
    }, genHoverActiveButtonStyle(btnCls, Object.assign({
      background: background
    }, hoverStyle), Object.assign({
      background: background
    }, activeStyle))), {
      '&:disabled': {
        cursor: 'not-allowed',
        color: textColorDisabled || undefined,
        borderColor: borderColorDisabled || undefined
      }
    }));
  };
  var genSolidDisabledButtonStyle = function genSolidDisabledButtonStyle(token) {
    return _defineProperty({}, "&:disabled, &".concat(token.componentCls, "-disabled"), Object.assign({}, genDisabledStyle(token)));
  };
  var genSolidButtonStyle = function genSolidButtonStyle(token) {
    return Object.assign({}, genSolidDisabledButtonStyle(token));
  };
  var genPureDisabledButtonStyle = function genPureDisabledButtonStyle(token) {
    return _defineProperty({}, "&:disabled, &".concat(token.componentCls, "-disabled"), {
      cursor: 'not-allowed',
      color: token.colorTextDisabled
    });
  };
  // Type: Default
  var genDefaultButtonStyle = function genDefaultButtonStyle(token) {
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token)), {
      background: token.defaultBg,
      borderColor: token.defaultBorderColor,
      color: token.defaultColor,
      boxShadow: token.defaultShadow
    }), genHoverActiveButtonStyle(token.componentCls, {
      color: token.defaultHoverColor,
      borderColor: token.defaultHoverBorderColor,
      background: token.defaultHoverBg
    }, {
      color: token.defaultActiveColor,
      borderColor: token.defaultActiveBorderColor,
      background: token.defaultActiveBg
    })), genGhostButtonStyle(token.componentCls, token.ghostBg, token.defaultGhostColor, token.defaultGhostBorderColor, token.colorTextDisabled, token.colorBorder)), _defineProperty({}, "&".concat(token.componentCls, "-dangerous"), Object.assign(Object.assign(Object.assign({
      color: token.colorError,
      borderColor: token.colorError
    }, genHoverActiveButtonStyle(token.componentCls, {
      color: token.colorErrorHover,
      borderColor: token.colorErrorBorderHover
    }, {
      color: token.colorErrorActive,
      borderColor: token.colorErrorActive
    })), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder)), genSolidDisabledButtonStyle(token))));
  };
  // Type: Primary
  var genPrimaryButtonStyle = function genPrimaryButtonStyle(token) {
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token)), {
      color: token.primaryColor,
      background: token.colorPrimary,
      boxShadow: token.primaryShadow
    }), genHoverActiveButtonStyle(token.componentCls, {
      color: token.colorTextLightSolid,
      background: token.colorPrimaryHover
    }, {
      color: token.colorTextLightSolid,
      background: token.colorPrimaryActive
    })), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorPrimary, token.colorPrimary, token.colorTextDisabled, token.colorBorder, {
      color: token.colorPrimaryHover,
      borderColor: token.colorPrimaryHover
    }, {
      color: token.colorPrimaryActive,
      borderColor: token.colorPrimaryActive
    })), _defineProperty({}, "&".concat(token.componentCls, "-dangerous"), Object.assign(Object.assign(Object.assign({
      background: token.colorError,
      boxShadow: token.dangerShadow,
      color: token.dangerColor
    }, genHoverActiveButtonStyle(token.componentCls, {
      background: token.colorErrorHover
    }, {
      background: token.colorErrorActive
    })), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder, {
      color: token.colorErrorHover,
      borderColor: token.colorErrorHover
    }, {
      color: token.colorErrorActive,
      borderColor: token.colorErrorActive
    })), genSolidDisabledButtonStyle(token))));
  };
  // Type: Dashed
  var genDashedButtonStyle = function genDashedButtonStyle(token) {
    return Object.assign(Object.assign({}, genDefaultButtonStyle(token)), {
      borderStyle: 'dashed'
    });
  };
  // Type: Link
  var genLinkButtonStyle = function genLinkButtonStyle(token) {
    return Object.assign(Object.assign(Object.assign({
      color: token.colorLink
    }, genHoverActiveButtonStyle(token.componentCls, {
      color: token.colorLinkHover,
      background: token.linkHoverBg
    }, {
      color: token.colorLinkActive
    })), genPureDisabledButtonStyle(token)), _defineProperty({}, "&".concat(token.componentCls, "-dangerous"), Object.assign(Object.assign({
      color: token.colorError
    }, genHoverActiveButtonStyle(token.componentCls, {
      color: token.colorErrorHover
    }, {
      color: token.colorErrorActive
    })), genPureDisabledButtonStyle(token))));
  };
  // Type: Text
  var genTextButtonStyle = function genTextButtonStyle(token) {
    return Object.assign(Object.assign(Object.assign({}, genHoverActiveButtonStyle(token.componentCls, {
      color: token.colorText,
      background: token.textHoverBg
    }, {
      color: token.colorText,
      background: token.colorBgTextActive
    })), genPureDisabledButtonStyle(token)), _defineProperty({}, "&".concat(token.componentCls, "-dangerous"), Object.assign(Object.assign({
      color: token.colorError
    }, genPureDisabledButtonStyle(token)), genHoverActiveButtonStyle(token.componentCls, {
      color: token.colorErrorHover,
      background: token.colorErrorBg
    }, {
      color: token.colorErrorHover,
      background: token.colorErrorBg
    }))));
  };
  var genTypeButtonStyle = function genTypeButtonStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-default"), genDefaultButtonStyle(token)), "".concat(componentCls, "-primary"), genPrimaryButtonStyle(token)), "".concat(componentCls, "-dashed"), genDashedButtonStyle(token)), "".concat(componentCls, "-link"), genLinkButtonStyle(token)), "".concat(componentCls, "-text"), genTextButtonStyle(token)), "".concat(componentCls, "-ghost"), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorBgContainer, token.colorBgContainer, token.colorTextDisabled, token.colorBorder));
  };
  // =============================== Size ===============================
  var genButtonStyle = function genButtonStyle(token) {
    var prefixCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var componentCls = token.componentCls,
      controlHeight = token.controlHeight,
      fontSize = token.fontSize,
      lineHeight = token.lineHeight,
      borderRadius = token.borderRadius,
      buttonPaddingHorizontal = token.buttonPaddingHorizontal,
      iconCls = token.iconCls,
      buttonPaddingVertical = token.buttonPaddingVertical;
    var iconOnlyCls = "".concat(componentCls, "-icon-only");
    return [_defineProperty({}, "".concat(prefixCls), _defineProperty(_defineProperty(_defineProperty({
      fontSize: fontSize,
      lineHeight: lineHeight,
      height: controlHeight,
      padding: "".concat((0, _cssinjs.unit)(buttonPaddingVertical), " ").concat((0, _cssinjs.unit)(buttonPaddingHorizontal)),
      borderRadius: borderRadius
    }, "&".concat(iconOnlyCls), _defineProperty(_defineProperty({
      width: controlHeight,
      paddingInlineStart: 0,
      paddingInlineEnd: 0
    }, "&".concat(componentCls, "-round"), {
      width: 'auto'
    }), iconCls, {
      fontSize: token.buttonIconOnlyFontSize
    })), "&".concat(componentCls, "-loading"), {
      opacity: token.opacityLoading,
      cursor: 'default'
    }), "".concat(componentCls, "-loading-icon"), {
      transition: "width ".concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut, ", opacity ").concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut)
    })), // Shape - patch prefixCls again to override solid border radius style
    _defineProperty({}, "".concat(componentCls).concat(componentCls, "-circle").concat(prefixCls), genCircleButtonStyle(token)), _defineProperty({}, "".concat(componentCls).concat(componentCls, "-round").concat(prefixCls), genRoundButtonStyle(token))];
  };
  var genSizeBaseButtonStyle = function genSizeBaseButtonStyle(token) {
    var baseToken = (0, _internal.mergeToken)(token, {
      fontSize: token.contentFontSize,
      lineHeight: token.contentLineHeight
    });
    return genButtonStyle(baseToken, token.componentCls);
  };
  var genSizeSmallButtonStyle = function genSizeSmallButtonStyle(token) {
    var smallToken = (0, _internal.mergeToken)(token, {
      controlHeight: token.controlHeightSM,
      fontSize: token.contentFontSizeSM,
      lineHeight: token.contentLineHeightSM,
      padding: token.paddingXS,
      buttonPaddingHorizontal: token.paddingInlineSM,
      buttonPaddingVertical: token.paddingBlockSM,
      borderRadius: token.borderRadiusSM,
      buttonIconOnlyFontSize: token.onlyIconSizeSM
    });
    return genButtonStyle(smallToken, "".concat(token.componentCls, "-sm"));
  };
  var genSizeLargeButtonStyle = function genSizeLargeButtonStyle(token) {
    var largeToken = (0, _internal.mergeToken)(token, {
      controlHeight: token.controlHeightLG,
      fontSize: token.contentFontSizeLG,
      lineHeight: token.contentLineHeightLG,
      buttonPaddingHorizontal: token.paddingInlineLG,
      buttonPaddingVertical: token.paddingBlockLG,
      borderRadius: token.borderRadiusLG,
      buttonIconOnlyFontSize: token.onlyIconSizeLG
    });
    return genButtonStyle(largeToken, "".concat(token.componentCls, "-lg"));
  };
  var genBlockButtonStyle = function genBlockButtonStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, componentCls, _defineProperty({}, "&".concat(componentCls, "-block"), {
      width: '100%'
    }));
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Button', function (token) {
    var buttonToken = (0, _token.prepareToken)(token);
    return [
    // Shared
    genSharedButtonStyle(buttonToken),
    // Size
    genSizeBaseButtonStyle(buttonToken), genSizeSmallButtonStyle(buttonToken), genSizeLargeButtonStyle(buttonToken),
    // Block
    genBlockButtonStyle(buttonToken),
    // Group (type, ghost, danger, loading)
    genTypeButtonStyle(buttonToken),
    // Button Group
    (0, _group["default"])(buttonToken)];
  }, _token.prepareComponentToken, {
    unitless: {
      fontWeight: true,
      contentLineHeight: true,
      contentLineHeightSM: true,
      contentLineHeightLG: true
    }
  });
});