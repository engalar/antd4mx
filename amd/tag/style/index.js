define(["exports", "@ant-design/cssinjs", "@ctrl/tinycolor", "antd4mx/style", "antd4mx/theme/internal"], function (_exports, _cssinjs, _tinycolor, _style, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareToken = _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // ============================== Styles ==============================
  var genBaseStyle = function genBaseStyle(token) {
    var paddingXXS = token.paddingXXS,
      lineWidth = token.lineWidth,
      tagPaddingHorizontal = token.tagPaddingHorizontal,
      componentCls = token.componentCls,
      calc = token.calc;
    var paddingInline = calc(tagPaddingHorizontal).sub(lineWidth).equal();
    var iconMarginInline = calc(paddingXXS).sub(lineWidth).equal();
    return _defineProperty(_defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      display: 'inline-block',
      height: 'auto',
      marginInlineEnd: token.marginXS,
      paddingInline: paddingInline,
      fontSize: token.tagFontSize,
      lineHeight: token.tagLineHeight,
      whiteSpace: 'nowrap',
      background: token.defaultBg,
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder),
      borderRadius: token.borderRadiusSM,
      opacity: 1,
      transition: "all ".concat(token.motionDurationMid),
      textAlign: 'start',
      position: 'relative'
    }, "&".concat(componentCls, "-rtl"), {
      direction: 'rtl'
    }), '&, a, a:hover', {
      color: token.defaultColor
    }), "".concat(componentCls, "-close-icon"), {
      marginInlineStart: iconMarginInline,
      fontSize: token.tagIconSize,
      color: token.colorTextDescription,
      cursor: 'pointer',
      transition: "all ".concat(token.motionDurationMid),
      '&:hover': {
        color: token.colorTextHeading
      }
    }), "&".concat(componentCls, "-has-color"), _defineProperty({
      borderColor: 'transparent'
    }, "&, a, a:hover, ".concat(token.iconCls, "-close, ").concat(token.iconCls, "-close:hover"), {
      color: token.colorTextLightSolid
    })), "&-checkable", _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      cursor: 'pointer'
    }, "&:not(".concat(componentCls, "-checkable-checked):hover"), {
      color: token.colorPrimary,
      backgroundColor: token.colorFillSecondary
    }), '&:active, &-checked', {
      color: token.colorTextLightSolid
    }), '&-checked', {
      backgroundColor: token.colorPrimary,
      '&:hover': {
        backgroundColor: token.colorPrimaryHover
      }
    }), '&:active', {
      backgroundColor: token.colorPrimaryActive
    })), "&-hidden", {
      display: 'none'
    }), "> ".concat(token.iconCls, " + span, > span + ").concat(token.iconCls), {
      marginInlineStart: paddingInline
    }))), "".concat(componentCls, "-borderless"), {
      borderColor: 'transparent',
      background: token.tagBorderlessBg
    });
  };
  // ============================== Export ==============================
  var prepareToken = _exports.prepareToken = function prepareToken(token) {
    var lineWidth = token.lineWidth,
      fontSizeIcon = token.fontSizeIcon,
      calc = token.calc;
    var tagFontSize = token.fontSizeSM;
    var tagToken = (0, _internal.mergeToken)(token, {
      tagFontSize: tagFontSize,
      tagLineHeight: (0, _cssinjs.unit)(calc(token.lineHeightSM).mul(tagFontSize).equal()),
      tagIconSize: calc(fontSizeIcon).sub(calc(lineWidth).mul(2)).equal(),
      // Tag icon is much smaller
      tagPaddingHorizontal: 8,
      // Fixed padding.
      tagBorderlessBg: token.defaultBg
    });
    return tagToken;
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      defaultBg: new _tinycolor.TinyColor(token.colorFillQuaternary).onBackground(token.colorBgContainer).toHexString(),
      defaultColor: token.colorText
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Tag', function (token) {
    var tagToken = prepareToken(token);
    return genBaseStyle(tagToken);
  }, prepareComponentToken);
});