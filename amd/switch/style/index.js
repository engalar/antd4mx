define(["exports", "@ant-design/cssinjs", "@ctrl/tinycolor", "antd4mx/style/index", "antd4mx/theme/internal"], function (_exports, _cssinjs, _tinycolor, _index, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genSwitchSmallStyle = function genSwitchSmallStyle(token) {
    var componentCls = token.componentCls,
      trackHeightSM = token.trackHeightSM,
      trackPadding = token.trackPadding,
      trackMinWidthSM = token.trackMinWidthSM,
      innerMinMarginSM = token.innerMinMarginSM,
      innerMaxMarginSM = token.innerMaxMarginSM,
      handleSizeSM = token.handleSizeSM,
      calc = token.calc;
    var switchInnerCls = "".concat(componentCls, "-inner");
    var trackPaddingCalc = (0, _cssinjs.unit)(calc(handleSizeSM).add(calc(trackPadding).mul(2)).equal());
    var innerMaxMarginCalc = (0, _cssinjs.unit)(calc(innerMaxMarginSM).mul(2).equal());
    return _defineProperty({}, componentCls, _defineProperty({}, "&".concat(componentCls, "-small"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      minWidth: trackMinWidthSM,
      height: trackHeightSM,
      lineHeight: (0, _cssinjs.unit)(trackHeightSM)
    }, "".concat(componentCls, "-inner"), _defineProperty(_defineProperty({
      paddingInlineStart: innerMaxMarginSM,
      paddingInlineEnd: innerMinMarginSM
    }, "".concat(switchInnerCls, "-checked"), {
      marginInlineStart: "calc(-100% + ".concat(trackPaddingCalc, " - ").concat(innerMaxMarginCalc, ")"),
      marginInlineEnd: "calc(100% - ".concat(trackPaddingCalc, " + ").concat(innerMaxMarginCalc, ")")
    }), "".concat(switchInnerCls, "-unchecked"), {
      marginTop: calc(trackHeightSM).mul(-1).equal(),
      marginInlineStart: 0,
      marginInlineEnd: 0
    })), "".concat(componentCls, "-handle"), {
      width: handleSizeSM,
      height: handleSizeSM
    }), "".concat(componentCls, "-loading-icon"), {
      top: calc(calc(handleSizeSM).sub(token.switchLoadingIconSize)).div(2).equal(),
      fontSize: token.switchLoadingIconSize
    }), "&".concat(componentCls, "-checked"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-inner"), _defineProperty(_defineProperty({
      paddingInlineStart: innerMinMarginSM,
      paddingInlineEnd: innerMaxMarginSM
    }, "".concat(switchInnerCls, "-checked"), {
      marginInlineStart: 0,
      marginInlineEnd: 0
    }), "".concat(switchInnerCls, "-unchecked"), {
      marginInlineStart: "calc(100% - ".concat(trackPaddingCalc, " + ").concat(innerMaxMarginCalc, ")"),
      marginInlineEnd: "calc(-100% + ".concat(trackPaddingCalc, " - ").concat(innerMaxMarginCalc, ")")
    })), "".concat(componentCls, "-handle"), {
      insetInlineStart: "calc(100% - ".concat((0, _cssinjs.unit)(calc(handleSizeSM).add(trackPadding).equal()), ")")
    })), "&:not(".concat(componentCls, "-disabled):active"), _defineProperty(_defineProperty({}, "&:not(".concat(componentCls, "-checked) ").concat(switchInnerCls), _defineProperty({}, "".concat(switchInnerCls, "-unchecked"), {
      marginInlineStart: calc(token.marginXXS).div(2).equal(),
      marginInlineEnd: calc(token.marginXXS).mul(-1).div(2).equal()
    })), "&".concat(componentCls, "-checked ").concat(switchInnerCls), _defineProperty({}, "".concat(switchInnerCls, "-checked"), {
      marginInlineStart: calc(token.marginXXS).mul(-1).div(2).equal(),
      marginInlineEnd: calc(token.marginXXS).div(2).equal()
    })))));
  };
  var genSwitchLoadingStyle = function genSwitchLoadingStyle(token) {
    var componentCls = token.componentCls,
      handleSize = token.handleSize,
      calc = token.calc;
    return _defineProperty({}, componentCls, _defineProperty(_defineProperty({}, "".concat(componentCls, "-loading-icon").concat(token.iconCls), {
      position: 'relative',
      top: calc(calc(handleSize).sub(token.fontSize)).div(2).equal(),
      color: token.switchLoadingIconColor,
      verticalAlign: 'top'
    }), "&".concat(componentCls, "-checked ").concat(componentCls, "-loading-icon"), {
      color: token.switchColor
    }));
  };
  var genSwitchHandleStyle = function genSwitchHandleStyle(token) {
    var componentCls = token.componentCls,
      trackPadding = token.trackPadding,
      handleBg = token.handleBg,
      handleShadow = token.handleShadow,
      handleSize = token.handleSize,
      calc = token.calc;
    var switchHandleCls = "".concat(componentCls, "-handle");
    return _defineProperty({}, componentCls, _defineProperty(_defineProperty(_defineProperty({}, switchHandleCls, {
      position: 'absolute',
      top: trackPadding,
      insetInlineStart: trackPadding,
      width: handleSize,
      height: handleSize,
      transition: "all ".concat(token.switchDuration, " ease-in-out"),
      '&::before': {
        position: 'absolute',
        top: 0,
        insetInlineEnd: 0,
        bottom: 0,
        insetInlineStart: 0,
        backgroundColor: handleBg,
        borderRadius: calc(handleSize).div(2).equal(),
        boxShadow: handleShadow,
        transition: "all ".concat(token.switchDuration, " ease-in-out"),
        content: '""'
      }
    }), "&".concat(componentCls, "-checked ").concat(switchHandleCls), {
      insetInlineStart: "calc(100% - ".concat((0, _cssinjs.unit)(calc(handleSize).add(trackPadding).equal()), ")")
    }), "&:not(".concat(componentCls, "-disabled):active"), _defineProperty(_defineProperty({}, "".concat(switchHandleCls, "::before"), {
      insetInlineEnd: token.switchHandleActiveInset,
      insetInlineStart: 0
    }), "&".concat(componentCls, "-checked ").concat(switchHandleCls, "::before"), {
      insetInlineEnd: 0,
      insetInlineStart: token.switchHandleActiveInset
    })));
  };
  var genSwitchInnerStyle = function genSwitchInnerStyle(token) {
    var componentCls = token.componentCls,
      trackHeight = token.trackHeight,
      trackPadding = token.trackPadding,
      innerMinMargin = token.innerMinMargin,
      innerMaxMargin = token.innerMaxMargin,
      handleSize = token.handleSize,
      calc = token.calc;
    var switchInnerCls = "".concat(componentCls, "-inner");
    var trackPaddingCalc = (0, _cssinjs.unit)(calc(handleSize).add(calc(trackPadding).mul(2)).equal());
    var innerMaxMarginCalc = (0, _cssinjs.unit)(calc(innerMaxMargin).mul(2).equal());
    return _defineProperty({}, componentCls, _defineProperty(_defineProperty(_defineProperty({}, switchInnerCls, _defineProperty(_defineProperty(_defineProperty({
      display: 'block',
      overflow: 'hidden',
      borderRadius: 100,
      height: '100%',
      paddingInlineStart: innerMaxMargin,
      paddingInlineEnd: innerMinMargin,
      transition: "padding-inline-start ".concat(token.switchDuration, " ease-in-out, padding-inline-end ").concat(token.switchDuration, " ease-in-out")
    }, "".concat(switchInnerCls, "-checked, ").concat(switchInnerCls, "-unchecked"), {
      display: 'block',
      color: token.colorTextLightSolid,
      fontSize: token.fontSizeSM,
      transition: "margin-inline-start ".concat(token.switchDuration, " ease-in-out, margin-inline-end ").concat(token.switchDuration, " ease-in-out"),
      pointerEvents: 'none'
    }), "".concat(switchInnerCls, "-checked"), {
      marginInlineStart: "calc(-100% + ".concat(trackPaddingCalc, " - ").concat(innerMaxMarginCalc, ")"),
      marginInlineEnd: "calc(100% - ".concat(trackPaddingCalc, " + ").concat(innerMaxMarginCalc, ")")
    }), "".concat(switchInnerCls, "-unchecked"), {
      marginTop: calc(trackHeight).mul(-1).equal(),
      marginInlineStart: 0,
      marginInlineEnd: 0
    })), "&".concat(componentCls, "-checked ").concat(switchInnerCls), _defineProperty(_defineProperty({
      paddingInlineStart: innerMinMargin,
      paddingInlineEnd: innerMaxMargin
    }, "".concat(switchInnerCls, "-checked"), {
      marginInlineStart: 0,
      marginInlineEnd: 0
    }), "".concat(switchInnerCls, "-unchecked"), {
      marginInlineStart: "calc(100% - ".concat(trackPaddingCalc, " + ").concat(innerMaxMarginCalc, ")"),
      marginInlineEnd: "calc(-100% + ".concat(trackPaddingCalc, " - ").concat(innerMaxMarginCalc, ")")
    })), "&:not(".concat(componentCls, "-disabled):active"), _defineProperty(_defineProperty({}, "&:not(".concat(componentCls, "-checked) ").concat(switchInnerCls), _defineProperty({}, "".concat(switchInnerCls, "-unchecked"), {
      marginInlineStart: calc(trackPadding).mul(2).equal(),
      marginInlineEnd: calc(trackPadding).mul(-1).mul(2).equal()
    })), "&".concat(componentCls, "-checked ").concat(switchInnerCls), _defineProperty({}, "".concat(switchInnerCls, "-checked"), {
      marginInlineStart: calc(trackPadding).mul(-1).mul(2).equal(),
      marginInlineEnd: calc(trackPadding).mul(2).equal()
    }))));
  };
  var genSwitchStyle = function genSwitchStyle(token) {
    var componentCls = token.componentCls,
      trackHeight = token.trackHeight,
      trackMinWidth = token.trackMinWidth;
    return _defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty({
      position: 'relative',
      display: 'inline-block',
      boxSizing: 'border-box',
      minWidth: trackMinWidth,
      height: trackHeight,
      lineHeight: "".concat((0, _cssinjs.unit)(trackHeight)),
      verticalAlign: 'middle',
      background: token.colorTextQuaternary,
      border: '0',
      borderRadius: 100,
      cursor: 'pointer',
      transition: "all ".concat(token.motionDurationMid),
      userSelect: 'none'
    }, "&:hover:not(".concat(componentCls, "-disabled)"), {
      background: token.colorTextTertiary
    })), (0, _index.genFocusStyle)(token)), _defineProperty(_defineProperty(_defineProperty({}, "&".concat(componentCls, "-checked"), _defineProperty({
      background: token.switchColor
    }, "&:hover:not(".concat(componentCls, "-disabled)"), {
      background: token.colorPrimaryHover
    })), "&".concat(componentCls, "-loading, &").concat(componentCls, "-disabled"), {
      cursor: 'not-allowed',
      opacity: token.switchDisabledOpacity,
      '*': {
        boxShadow: 'none',
        cursor: 'not-allowed'
      }
    }), "&".concat(componentCls, "-rtl"), {
      direction: 'rtl'
    })));
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var fontSize = token.fontSize,
      lineHeight = token.lineHeight,
      controlHeight = token.controlHeight,
      colorWhite = token.colorWhite;
    var height = fontSize * lineHeight;
    var heightSM = controlHeight / 2;
    var padding = 2; // Fixed value
    var handleSize = height - padding * 2;
    var handleSizeSM = heightSM - padding * 2;
    return {
      trackHeight: height,
      trackHeightSM: heightSM,
      trackMinWidth: handleSize * 2 + padding * 4,
      trackMinWidthSM: handleSizeSM * 2 + padding * 2,
      trackPadding: padding,
      // Fixed value
      handleBg: colorWhite,
      handleSize: handleSize,
      handleSizeSM: handleSizeSM,
      handleShadow: "0 2px 4px 0 ".concat(new _tinycolor.TinyColor('#00230b').setAlpha(0.2).toRgbString()),
      innerMinMargin: handleSize / 2,
      innerMaxMargin: handleSize + padding + padding * 2,
      innerMinMarginSM: handleSizeSM / 2,
      innerMaxMarginSM: handleSizeSM + padding + padding * 2
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Switch', function (token) {
    var switchToken = (0, _internal.mergeToken)(token, {
      switchDuration: token.motionDurationMid,
      switchColor: token.colorPrimary,
      switchDisabledOpacity: token.opacityLoading,
      switchLoadingIconSize: token.calc(token.fontSizeIcon).mul(0.75).equal(),
      switchLoadingIconColor: "rgba(0, 0, 0, ".concat(token.opacityLoading, ")"),
      switchHandleActiveInset: '-30%'
    });
    return [genSwitchStyle(switchToken),
    // inner style
    genSwitchInnerStyle(switchToken),
    // handle style
    genSwitchHandleStyle(switchToken),
    // loading style
    genSwitchLoadingStyle(switchToken),
    // small style
    genSwitchSmallStyle(switchToken)];
  }, prepareComponentToken);
});