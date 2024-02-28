define(["exports", "@ctrl/tinycolor", "antd4mx/style/index", "antd4mx/style/placementArrow", "antd4mx/theme/internal", "antd4mx/style/roundedArrow", "@ant-design/cssinjs"], function (_exports, _tinycolor, _index, _placementArrow, _internal, _roundedArrow, _cssinjs) {
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
  var genBaseStyle = function genBaseStyle(token) {
    var componentCls = token.componentCls,
      lineHeight = token.lineHeight,
      padding = token.padding,
      paddingXS = token.paddingXS,
      borderRadius = token.borderRadius,
      borderRadiusXS = token.borderRadiusXS,
      colorPrimary = token.colorPrimary,
      colorText = token.colorText,
      colorFill = token.colorFill,
      indicatorHeight = token.indicatorHeight,
      indicatorWidth = token.indicatorWidth,
      boxShadowTertiary = token.boxShadowTertiary,
      tourZIndexPopup = token.tourZIndexPopup,
      fontSize = token.fontSize,
      colorBgElevated = token.colorBgElevated,
      fontWeightStrong = token.fontWeightStrong,
      marginXS = token.marginXS,
      colorTextLightSolid = token.colorTextLightSolid,
      tourBorderRadius = token.tourBorderRadius,
      colorWhite = token.colorWhite,
      primaryNextBtnHoverBg = token.primaryNextBtnHoverBg,
      closeBtnSize = token.closeBtnSize,
      motionDurationSlow = token.motionDurationSlow,
      antCls = token.antCls,
      primaryPrevBtnBg = token.primaryPrevBtnBg;
    return [_defineProperty(_defineProperty(_defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      color: colorText,
      position: 'absolute',
      zIndex: tourZIndexPopup,
      display: 'block',
      visibility: 'visible',
      fontSize: fontSize,
      lineHeight: lineHeight,
      width: 520,
      '--antd-arrow-background-color': colorBgElevated,
      '&-pure': {
        maxWidth: '100%',
        position: 'relative'
      }
    }, "&".concat(componentCls, "-hidden"), {
      display: 'none'
    }), "".concat(componentCls, "-content"), {
      position: 'relative'
    }), "".concat(componentCls, "-inner"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      textAlign: 'start',
      textDecoration: 'none',
      borderRadius: tourBorderRadius,
      boxShadow: boxShadowTertiary,
      position: 'relative',
      backgroundColor: colorBgElevated,
      border: 'none',
      backgroundClip: 'padding-box'
    }, "".concat(componentCls, "-close"), {
      position: 'absolute',
      top: padding,
      insetInlineEnd: padding,
      color: token.colorIcon,
      outline: 'none',
      width: closeBtnSize,
      height: closeBtnSize,
      borderRadius: token.borderRadiusSM,
      transition: "background-color ".concat(token.motionDurationMid, ", color ").concat(token.motionDurationMid),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      '&:hover': {
        color: token.colorIconHover,
        backgroundColor: token.closeBtnHoverBg
      }
    }), "".concat(componentCls, "-cover"), {
      textAlign: 'center',
      padding: "".concat((0, _cssinjs.unit)(token.calc(padding).add(closeBtnSize).add(paddingXS).equal()), " ").concat((0, _cssinjs.unit)(padding), " 0"),
      img: {
        width: '100%'
      }
    }), "".concat(componentCls, "-header"), _defineProperty({
      padding: "".concat((0, _cssinjs.unit)(padding), " ").concat((0, _cssinjs.unit)(padding), " ").concat((0, _cssinjs.unit)(paddingXS))
    }, "".concat(componentCls, "-title"), {
      lineHeight: lineHeight,
      fontSize: fontSize,
      fontWeight: fontWeightStrong
    })), "".concat(componentCls, "-description"), {
      padding: "0 ".concat((0, _cssinjs.unit)(padding)),
      lineHeight: lineHeight,
      wordWrap: 'break-word'
    }), "".concat(componentCls, "-footer"), _defineProperty(_defineProperty({
      padding: "".concat((0, _cssinjs.unit)(paddingXS), " ").concat((0, _cssinjs.unit)(padding), " ").concat((0, _cssinjs.unit)(padding)),
      textAlign: 'end',
      borderRadius: "0 0 ".concat((0, _cssinjs.unit)(borderRadiusXS), " ").concat((0, _cssinjs.unit)(borderRadiusXS)),
      display: 'flex'
    }, "".concat(componentCls, "-indicators"), _defineProperty({
      display: 'inline-block'
    }, "".concat(componentCls, "-indicator"), {
      width: indicatorWidth,
      height: indicatorHeight,
      display: 'inline-block',
      borderRadius: '50%',
      background: colorFill,
      '&:not(:last-child)': {
        marginInlineEnd: indicatorHeight
      },
      '&-active': {
        background: colorPrimary
      }
    })), "".concat(componentCls, "-buttons"), _defineProperty({
      marginInlineStart: 'auto'
    }, "".concat(antCls, "-btn"), {
      marginInlineStart: marginXS
    })))), "".concat(componentCls, "-primary, &").concat(componentCls, "-primary"), _defineProperty({
      '--antd-arrow-background-color': colorPrimary
    }, "".concat(componentCls, "-inner"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      color: colorTextLightSolid,
      textAlign: 'start',
      textDecoration: 'none',
      backgroundColor: colorPrimary,
      borderRadius: borderRadius,
      boxShadow: boxShadowTertiary
    }, "".concat(componentCls, "-close"), {
      color: colorTextLightSolid
    }), "".concat(componentCls, "-indicators"), _defineProperty({}, "".concat(componentCls, "-indicator"), {
      background: primaryPrevBtnBg,
      '&-active': {
        background: colorTextLightSolid
      }
    })), "".concat(componentCls, "-prev-btn"), {
      color: colorTextLightSolid,
      borderColor: primaryPrevBtnBg,
      backgroundColor: colorPrimary,
      '&:hover': {
        backgroundColor: primaryPrevBtnBg,
        borderColor: 'transparent'
      }
    }), "".concat(componentCls, "-next-btn"), {
      color: colorPrimary,
      borderColor: 'transparent',
      background: colorWhite,
      '&:hover': {
        background: primaryNextBtnHoverBg
      }
    }))))), "".concat(componentCls, "-mask"), _defineProperty({}, "".concat(componentCls, "-placeholder-animated"), {
      transition: "all ".concat(motionDurationSlow)
    })), ['&-placement-left', '&-placement-leftTop', '&-placement-leftBottom', '&-placement-right', '&-placement-rightTop', '&-placement-rightBottom'].join(','), _defineProperty({}, "".concat(componentCls, "-inner"), {
      borderRadius: token.min(tourBorderRadius, _placementArrow.MAX_VERTICAL_CONTENT_RADIUS)
    })),
    // ============================= Arrow ===========================
    (0, _placementArrow["default"])(token, 'var(--antd-arrow-background-color)')];
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return Object.assign(Object.assign({
      zIndexPopup: token.zIndexPopupBase + 70,
      closeBtnSize: token.fontSize * token.lineHeight,
      primaryPrevBtnBg: new _tinycolor.TinyColor(token.colorTextLightSolid).setAlpha(0.15).toRgbString(),
      closeBtnHoverBg: token.wireframe ? 'transparent' : token.colorFillContent,
      primaryNextBtnHoverBg: new _tinycolor.TinyColor(token.colorBgTextHover).onBackground(token.colorWhite).toRgbString()
    }, (0, _placementArrow.getArrowOffsetToken)({
      contentRadius: token.borderRadiusLG,
      limitVerticalRadius: true
    })), (0, _roundedArrow.getArrowToken)(token));
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Tour', function (token) {
    var borderRadiusLG = token.borderRadiusLG;
    var TourToken = (0, _internal.mergeToken)(token, {
      indicatorWidth: 6,
      indicatorHeight: 6,
      tourBorderRadius: borderRadiusLG
    });
    return [genBaseStyle(TourToken)];
  }, prepareComponentToken);
});