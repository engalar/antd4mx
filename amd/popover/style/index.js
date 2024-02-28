define(["exports", "antd4mx/style", "antd4mx/style/motion", "antd4mx/style/placementArrow", "antd4mx/theme/internal", "antd4mx/style/roundedArrow"], function (_exports, _style, _motion, _placementArrow, _internal, _roundedArrow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genBaseStyle = function genBaseStyle(token) {
    var componentCls = token.componentCls,
      popoverColor = token.popoverColor,
      titleMinWidth = token.titleMinWidth,
      fontWeightStrong = token.fontWeightStrong,
      innerPadding = token.innerPadding,
      boxShadowSecondary = token.boxShadowSecondary,
      colorTextHeading = token.colorTextHeading,
      borderRadiusLG = token.borderRadiusLG,
      zIndexPopup = token.zIndexPopup,
      titleMarginBottom = token.titleMarginBottom,
      colorBgElevated = token.colorBgElevated,
      popoverBg = token.popoverBg,
      titleBorderBottom = token.titleBorderBottom,
      innerContentPadding = token.innerContentPadding,
      titlePadding = token.titlePadding;
    return [_defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'absolute',
      top: 0,
      // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
      left: {
        _skip_check_: true,
        value: 0
      },
      zIndex: zIndexPopup,
      fontWeight: 'normal',
      whiteSpace: 'normal',
      textAlign: 'start',
      cursor: 'auto',
      userSelect: 'text',
      transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
      '--antd-arrow-background-color': colorBgElevated,
      '&-rtl': {
        direction: 'rtl'
      },
      '&-hidden': {
        display: 'none'
      }
    }, "".concat(componentCls, "-content"), {
      position: 'relative'
    }), "".concat(componentCls, "-inner"), {
      backgroundColor: popoverBg,
      backgroundClip: 'padding-box',
      borderRadius: borderRadiusLG,
      boxShadow: boxShadowSecondary,
      padding: innerPadding
    }), "".concat(componentCls, "-title"), {
      minWidth: titleMinWidth,
      marginBottom: titleMarginBottom,
      color: colorTextHeading,
      fontWeight: fontWeightStrong,
      borderBottom: titleBorderBottom,
      padding: titlePadding
    }), "".concat(componentCls, "-inner-content"), {
      color: popoverColor,
      padding: innerContentPadding
    }))),
    // Arrow Style
    (0, _placementArrow["default"])(token, 'var(--antd-arrow-background-color)'), // Pure Render
    _defineProperty({}, "".concat(componentCls, "-pure"), _defineProperty({
      position: 'relative',
      maxWidth: 'none',
      margin: token.sizePopupArrow,
      display: 'inline-block'
    }, "".concat(componentCls, "-content"), {
      display: 'inline-block'
    }))];
  };
  var genColorStyle = function genColorStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, componentCls, _internal.PresetColors.map(function (colorKey) {
      var lightColor = token["".concat(colorKey, "6")];
      return _defineProperty({}, "&".concat(componentCls, "-").concat(colorKey), _defineProperty(_defineProperty({
        '--antd-arrow-background-color': lightColor
      }, "".concat(componentCls, "-inner"), {
        backgroundColor: lightColor
      }), "".concat(componentCls, "-arrow"), {
        background: 'transparent'
      }));
    }));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var lineWidth = token.lineWidth,
      controlHeight = token.controlHeight,
      fontHeight = token.fontHeight,
      padding = token.padding,
      wireframe = token.wireframe,
      zIndexPopupBase = token.zIndexPopupBase,
      borderRadiusLG = token.borderRadiusLG,
      marginXS = token.marginXS,
      lineType = token.lineType,
      colorSplit = token.colorSplit,
      paddingSM = token.paddingSM;
    var titlePaddingBlockDist = controlHeight - fontHeight;
    var popoverTitlePaddingBlockTop = titlePaddingBlockDist / 2;
    var popoverTitlePaddingBlockBottom = titlePaddingBlockDist / 2 - lineWidth;
    var popoverPaddingHorizontal = padding;
    return Object.assign(Object.assign(Object.assign({
      titleMinWidth: 177,
      zIndexPopup: zIndexPopupBase + 30
    }, (0, _roundedArrow.getArrowToken)(token)), (0, _placementArrow.getArrowOffsetToken)({
      contentRadius: borderRadiusLG,
      limitVerticalRadius: true
    })), {
      // internal
      innerPadding: wireframe ? 0 : 12,
      titleMarginBottom: wireframe ? 0 : marginXS,
      titlePadding: wireframe ? "".concat(popoverTitlePaddingBlockTop, "px ").concat(popoverPaddingHorizontal, "px ").concat(popoverTitlePaddingBlockBottom, "px") : 0,
      titleBorderBottom: wireframe ? "".concat(lineWidth, "px ").concat(lineType, " ").concat(colorSplit) : 'none',
      innerContentPadding: wireframe ? "".concat(paddingSM, "px ").concat(popoverPaddingHorizontal, "px") : 0
    });
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Popover', function (token) {
    var colorBgElevated = token.colorBgElevated,
      colorText = token.colorText;
    var popoverToken = (0, _internal.mergeToken)(token, {
      popoverBg: colorBgElevated,
      popoverColor: colorText
    });
    return [genBaseStyle(popoverToken), genColorStyle(popoverToken), (0, _motion.initZoomMotion)(popoverToken, 'zoom-big')];
  }, prepareComponentToken, {
    resetStyle: false,
    deprecatedTokens: [['width', 'titleMinWidth'], ['minWidth', 'titleMinWidth']]
  });
});