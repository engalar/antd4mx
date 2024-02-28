define(["exports", "antd4mx/style", "antd4mx/theme/internal", "@ant-design/cssinjs"], function (_exports, _style, _internal, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // ============================== Mixins ==============================
  function getItemDisabledStyle(cls, token) {
    return _defineProperty({}, "".concat(cls, ", ").concat(cls, ":hover, ").concat(cls, ":focus"), {
      color: token.colorTextDisabled,
      cursor: 'not-allowed'
    });
  }
  function getItemSelectedStyle(token) {
    return {
      backgroundColor: token.itemSelectedBg,
      boxShadow: token.boxShadowTertiary
    };
  }
  var segmentedTextEllipsisCss = Object.assign({
    overflow: 'hidden'
  }, _style.textEllipsis);
  // ============================== Styles ==============================
  var genSegmentedStyle = function genSegmentedStyle(token) {
    var componentCls = token.componentCls;
    var labelHeight = token.calc(token.controlHeight).sub(token.calc(token.trackPadding).mul(2)).equal();
    var labelHeightLG = token.calc(token.controlHeightLG).sub(token.calc(token.trackPadding).mul(2)).equal();
    var labelHeightSM = token.calc(token.controlHeightSM).sub(token.calc(token.trackPadding).mul(2)).equal();
    return _defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      display: 'inline-block',
      padding: token.trackPadding,
      color: token.itemColor,
      background: token.trackBg,
      borderRadius: token.borderRadius,
      transition: "all ".concat(token.motionDurationMid, " ").concat(token.motionEaseInOut)
    }, "".concat(componentCls, "-group"), {
      position: 'relative',
      display: 'flex',
      alignItems: 'stretch',
      justifyItems: 'flex-start',
      width: '100%'
    }), "&".concat(componentCls, "-rtl"), {
      direction: 'rtl'
    }), "&".concat(componentCls, "-block"), {
      display: 'flex'
    }), "&".concat(componentCls, "-block ").concat(componentCls, "-item"), {
      flex: 1,
      minWidth: 0
    }), "".concat(componentCls, "-item"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      textAlign: 'center',
      cursor: 'pointer',
      transition: "color ".concat(token.motionDurationMid, " ").concat(token.motionEaseInOut),
      borderRadius: token.borderRadiusSM,
      // Fix Safari render bug
      // https://github.com/ant-design/ant-design/issues/45250
      transform: 'translateZ(0)',
      '&-selected': Object.assign(Object.assign({}, getItemSelectedStyle(token)), {
        color: token.itemSelectedColor
      }),
      '&::after': {
        content: '""',
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        top: 0,
        insetInlineStart: 0,
        borderRadius: 'inherit',
        transition: "background-color ".concat(token.motionDurationMid),
        // This is mandatory to make it not clickable or hoverable
        // Ref: https://github.com/ant-design/ant-design/issues/40888
        pointerEvents: 'none'
      }
    }, "&:hover:not(".concat(componentCls, "-item-selected):not(").concat(componentCls, "-item-disabled)"), {
      color: token.itemHoverColor,
      '&::after': {
        backgroundColor: token.itemHoverBg
      }
    }), "&:active:not(".concat(componentCls, "-item-selected):not(").concat(componentCls, "-item-disabled)"), {
      color: token.itemHoverColor,
      '&::after': {
        backgroundColor: token.itemActiveBg
      }
    }), '&-label', Object.assign({
      minHeight: labelHeight,
      lineHeight: (0, _cssinjs.unit)(labelHeight),
      padding: "0 ".concat((0, _cssinjs.unit)(token.segmentedPaddingHorizontal))
    }, segmentedTextEllipsisCss)), '&-icon + *', {
      marginInlineStart: token.calc(token.marginSM).div(2).equal()
    }), '&-input', {
      position: 'absolute',
      insetBlockStart: 0,
      insetInlineStart: 0,
      width: 0,
      height: 0,
      opacity: 0,
      pointerEvents: 'none'
    })), "".concat(componentCls, "-thumb"), Object.assign(Object.assign({}, getItemSelectedStyle(token)), _defineProperty({
      position: 'absolute',
      insetBlockStart: 0,
      insetInlineStart: 0,
      width: 0,
      height: '100%',
      padding: "".concat((0, _cssinjs.unit)(token.paddingXXS), " 0"),
      borderRadius: token.borderRadiusSM
    }, "& ~ ".concat(componentCls, "-item:not(").concat(componentCls, "-item-selected):not(").concat(componentCls, "-item-disabled)::after"), {
      backgroundColor: 'transparent'
    }))), "&".concat(componentCls, "-lg"), _defineProperty(_defineProperty({
      borderRadius: token.borderRadiusLG
    }, "".concat(componentCls, "-item-label"), {
      minHeight: labelHeightLG,
      lineHeight: (0, _cssinjs.unit)(labelHeightLG),
      padding: "0 ".concat((0, _cssinjs.unit)(token.segmentedPaddingHorizontal)),
      fontSize: token.fontSizeLG
    }), "".concat(componentCls, "-item, ").concat(componentCls, "-thumb"), {
      borderRadius: token.borderRadius
    })), "&".concat(componentCls, "-sm"), _defineProperty(_defineProperty({
      borderRadius: token.borderRadiusSM
    }, "".concat(componentCls, "-item-label"), {
      minHeight: labelHeightSM,
      lineHeight: (0, _cssinjs.unit)(labelHeightSM),
      padding: "0 ".concat((0, _cssinjs.unit)(token.segmentedPaddingHorizontalSM))
    }), "".concat(componentCls, "-item, ").concat(componentCls, "-thumb"), {
      borderRadius: token.borderRadiusXS
    }))), getItemDisabledStyle("&-disabled ".concat(componentCls, "-item"), token)), getItemDisabledStyle("".concat(componentCls, "-item-disabled"), token)), _defineProperty({}, "".concat(componentCls, "-thumb-motion-appear-active"), {
      transition: "transform ".concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut, ", width ").concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut),
      willChange: 'transform, width'
    })));
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var colorTextLabel = token.colorTextLabel,
      colorText = token.colorText,
      colorFillSecondary = token.colorFillSecondary,
      colorBgElevated = token.colorBgElevated,
      colorFill = token.colorFill,
      lineWidthBold = token.lineWidthBold,
      colorBgLayout = token.colorBgLayout;
    return {
      trackPadding: lineWidthBold,
      trackBg: colorBgLayout,
      itemColor: colorTextLabel,
      itemHoverColor: colorText,
      itemHoverBg: colorFillSecondary,
      itemSelectedBg: colorBgElevated,
      itemActiveBg: colorFill,
      itemSelectedColor: colorText
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Segmented', function (token) {
    var lineWidth = token.lineWidth,
      calc = token.calc;
    var segmentedToken = (0, _internal.mergeToken)(token, {
      segmentedPaddingHorizontal: calc(token.controlPaddingHorizontal).sub(lineWidth).equal(),
      segmentedPaddingHorizontalSM: calc(token.controlPaddingHorizontalSM).sub(lineWidth).equal()
    });
    return [genSegmentedStyle(segmentedToken)];
  }, prepareComponentToken);
});