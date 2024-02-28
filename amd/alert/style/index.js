define(["exports", "@ant-design/cssinjs", "antd4mx/style/index", "antd4mx/theme/internal"], function (_exports, _cssinjs, _index, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports.genTypeStyle = _exports.genBaseStyle = _exports.genActionStyle = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genAlertTypeStyle = function genAlertTypeStyle(bgColor, borderColor, iconColor, token, alertCls) {
    return _defineProperty({
      background: bgColor,
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(borderColor)
    }, "".concat(alertCls, "-icon"), {
      color: iconColor
    });
  };
  var genBaseStyle = _exports.genBaseStyle = function genBaseStyle(token) {
    var componentCls = token.componentCls,
      duration = token.motionDurationSlow,
      marginXS = token.marginXS,
      marginSM = token.marginSM,
      fontSize = token.fontSize,
      fontSizeLG = token.fontSizeLG,
      lineHeight = token.lineHeight,
      borderRadius = token.borderRadiusLG,
      motionEaseInOutCirc = token.motionEaseInOutCirc,
      withDescriptionIconSize = token.withDescriptionIconSize,
      colorText = token.colorText,
      colorTextHeading = token.colorTextHeading,
      withDescriptionPadding = token.withDescriptionPadding,
      defaultPadding = token.defaultPadding;
    return _defineProperty(_defineProperty(_defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: defaultPadding,
      wordWrap: 'break-word',
      borderRadius: borderRadius
    }, "&".concat(componentCls, "-rtl"), {
      direction: 'rtl'
    }), "".concat(componentCls, "-content"), {
      flex: 1,
      minWidth: 0
    }), "".concat(componentCls, "-icon"), {
      marginInlineEnd: marginXS,
      lineHeight: 0
    }), "&-description", {
      display: 'none',
      fontSize: fontSize,
      lineHeight: lineHeight
    }), '&-message', {
      color: colorTextHeading
    }), "&".concat(componentCls, "-motion-leave"), {
      overflow: 'hidden',
      opacity: 1,
      transition: "max-height ".concat(duration, " ").concat(motionEaseInOutCirc, ", opacity ").concat(duration, " ").concat(motionEaseInOutCirc, ",\n        padding-top ").concat(duration, " ").concat(motionEaseInOutCirc, ", padding-bottom ").concat(duration, " ").concat(motionEaseInOutCirc, ",\n        margin-bottom ").concat(duration, " ").concat(motionEaseInOutCirc)
    }), "&".concat(componentCls, "-motion-leave-active"), {
      maxHeight: 0,
      marginBottom: '0 !important',
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }))), "".concat(componentCls, "-with-description"), _defineProperty(_defineProperty(_defineProperty({
      alignItems: 'flex-start',
      padding: withDescriptionPadding
    }, "".concat(componentCls, "-icon"), {
      marginInlineEnd: marginSM,
      fontSize: withDescriptionIconSize,
      lineHeight: 0
    }), "".concat(componentCls, "-message"), {
      display: 'block',
      marginBottom: marginXS,
      color: colorTextHeading,
      fontSize: fontSizeLG
    }), "".concat(componentCls, "-description"), {
      display: 'block',
      color: colorText
    })), "".concat(componentCls, "-banner"), {
      marginBottom: 0,
      border: '0 !important',
      borderRadius: 0
    });
  };
  var genTypeStyle = _exports.genTypeStyle = function genTypeStyle(token) {
    var componentCls = token.componentCls,
      colorSuccess = token.colorSuccess,
      colorSuccessBorder = token.colorSuccessBorder,
      colorSuccessBg = token.colorSuccessBg,
      colorWarning = token.colorWarning,
      colorWarningBorder = token.colorWarningBorder,
      colorWarningBg = token.colorWarningBg,
      colorError = token.colorError,
      colorErrorBorder = token.colorErrorBorder,
      colorErrorBg = token.colorErrorBg,
      colorInfo = token.colorInfo,
      colorInfoBorder = token.colorInfoBorder,
      colorInfoBg = token.colorInfoBg;
    return _defineProperty({}, componentCls, {
      '&-success': genAlertTypeStyle(colorSuccessBg, colorSuccessBorder, colorSuccess, token, componentCls),
      '&-info': genAlertTypeStyle(colorInfoBg, colorInfoBorder, colorInfo, token, componentCls),
      '&-warning': genAlertTypeStyle(colorWarningBg, colorWarningBorder, colorWarning, token, componentCls),
      '&-error': Object.assign(Object.assign({}, genAlertTypeStyle(colorErrorBg, colorErrorBorder, colorError, token, componentCls)), _defineProperty({}, "".concat(componentCls, "-description > pre"), {
        margin: 0,
        padding: 0
      }))
    });
  };
  var genActionStyle = _exports.genActionStyle = function genActionStyle(token) {
    var componentCls = token.componentCls,
      iconCls = token.iconCls,
      motionDurationMid = token.motionDurationMid,
      marginXS = token.marginXS,
      fontSizeIcon = token.fontSizeIcon,
      colorIcon = token.colorIcon,
      colorIconHover = token.colorIconHover;
    return _defineProperty({}, componentCls, _defineProperty(_defineProperty(_defineProperty({}, "&-action", {
      marginInlineStart: marginXS
    }), "".concat(componentCls, "-close-icon"), _defineProperty({
      marginInlineStart: marginXS,
      padding: 0,
      overflow: 'hidden',
      fontSize: fontSizeIcon,
      lineHeight: (0, _cssinjs.unit)(fontSizeIcon),
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      cursor: 'pointer'
    }, "".concat(iconCls, "-close"), {
      color: colorIcon,
      transition: "color ".concat(motionDurationMid),
      '&:hover': {
        color: colorIconHover
      }
    })), '&-close-text', {
      color: colorIcon,
      transition: "color ".concat(motionDurationMid),
      '&:hover': {
        color: colorIconHover
      }
    }));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var paddingHorizontal = 12; // Fixed value here.
    return {
      withDescriptionIconSize: token.fontSizeHeading3,
      defaultPadding: "".concat(token.paddingContentVerticalSM, "px ").concat(paddingHorizontal, "px"),
      withDescriptionPadding: "".concat(token.paddingMD, "px ").concat(token.paddingContentHorizontalLG, "px")
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Alert', function (token) {
    return [genBaseStyle(token), genTypeStyle(token), genActionStyle(token)];
  }, prepareComponentToken);
});