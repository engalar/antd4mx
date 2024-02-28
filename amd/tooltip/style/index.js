define(["exports", "antd4mx/style/index", "antd4mx/style/motion/index", "antd4mx/style/placementArrow", "antd4mx/theme/internal", "@ant-design/cssinjs", "antd4mx/style/roundedArrow"], function (_exports, _index, _index2, _placementArrow, _internal, _cssinjs, _roundedArrow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genTooltipStyle = function genTooltipStyle(token) {
    var componentCls = token.componentCls,
      tooltipMaxWidth = token.tooltipMaxWidth,
      tooltipColor = token.tooltipColor,
      tooltipBg = token.tooltipBg,
      tooltipBorderRadius = token.tooltipBorderRadius,
      zIndexPopup = token.zIndexPopup,
      controlHeight = token.controlHeight,
      boxShadowSecondary = token.boxShadowSecondary,
      paddingSM = token.paddingSM,
      paddingXS = token.paddingXS;
    return [_defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty({
      position: 'absolute',
      zIndex: zIndexPopup,
      display: 'block',
      width: 'max-content',
      maxWidth: tooltipMaxWidth,
      visibility: 'visible',
      transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
      '&-hidden': {
        display: 'none'
      },
      '--antd-arrow-background-color': tooltipBg
    }, "".concat(componentCls, "-inner"), {
      minWidth: controlHeight,
      minHeight: controlHeight,
      padding: "".concat((0, _cssinjs.unit)(token.calc(paddingSM).div(2).equal()), " ").concat((0, _cssinjs.unit)(paddingXS)),
      color: tooltipColor,
      textAlign: 'start',
      textDecoration: 'none',
      wordWrap: 'break-word',
      backgroundColor: tooltipBg,
      borderRadius: tooltipBorderRadius,
      boxShadow: boxShadowSecondary,
      boxSizing: 'border-box'
    }), ["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(','), _defineProperty({}, "".concat(componentCls, "-inner"), {
      borderRadius: token.min(tooltipBorderRadius, _placementArrow.MAX_VERTICAL_CONTENT_RADIUS)
    })), "".concat(componentCls, "-content"), {
      position: 'relative'
    })), (0, _internal.genPresetColor)(token, function (colorKey, _ref) {
      var darkColor = _ref.darkColor;
      return _defineProperty({}, "&".concat(componentCls, "-").concat(colorKey), _defineProperty(_defineProperty({}, "".concat(componentCls, "-inner"), {
        backgroundColor: darkColor
      }), "".concat(componentCls, "-arrow"), {
        '--antd-arrow-background-color': darkColor
      }));
    })), {
      // RTL
      '&-rtl': {
        direction: 'rtl'
      }
    })),
    // Arrow Style
    (0, _placementArrow["default"])(token, 'var(--antd-arrow-background-color)'), // Pure Render
    _defineProperty({}, "".concat(componentCls, "-pure"), {
      position: 'relative',
      maxWidth: 'none',
      margin: token.sizePopupArrow
    })];
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return Object.assign(Object.assign({
      zIndexPopup: token.zIndexPopupBase + 70
    }, (0, _placementArrow.getArrowOffsetToken)({
      contentRadius: token.borderRadius,
      limitVerticalRadius: true
    })), (0, _roundedArrow.getArrowToken)((0, _internal.mergeToken)(token, {
      borderRadiusOuter: Math.min(token.borderRadiusOuter, 4)
    })));
  };
  var _default = _exports["default"] = function _default(prefixCls) {
    var injectStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var useStyle = (0, _internal.genStyleHooks)('Tooltip', function (token) {
      var borderRadius = token.borderRadius,
        colorTextLightSolid = token.colorTextLightSolid,
        colorBgSpotlight = token.colorBgSpotlight;
      var TooltipToken = (0, _internal.mergeToken)(token, {
        // default variables
        tooltipMaxWidth: 250,
        tooltipColor: colorTextLightSolid,
        tooltipBorderRadius: borderRadius,
        tooltipBg: colorBgSpotlight
      });
      return [genTooltipStyle(TooltipToken), (0, _index2.initZoomMotion)(token, 'zoom-big-fast')];
    }, prepareComponentToken, {
      resetStyle: false,
      // Popover use Tooltip as internal component. We do not need to handle this.
      injectStyle: injectStyle
    });
    return useStyle(prefixCls);
  };
});