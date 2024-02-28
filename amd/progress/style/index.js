define(["exports", "@ant-design/cssinjs", "antd4mx/style", "antd4mx/theme/internal"], function (_exports, _cssinjs, _style, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = _exports.Percent = _exports.LineStrokeColorVar = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var LineStrokeColorVar = _exports.LineStrokeColorVar = '--progress-line-stroke-color';
  var Percent = _exports.Percent = '--progress-percent';
  var genAntProgressActive = function genAntProgressActive(isRtl) {
    var direction = isRtl ? '100%' : '-100%';
    return new _cssinjs.Keyframes("antProgress".concat(isRtl ? 'RTL' : 'LTR', "Active"), {
      '0%': {
        transform: "translateX(".concat(direction, ") scaleX(0)"),
        opacity: 0.1
      },
      '20%': {
        transform: "translateX(".concat(direction, ") scaleX(0)"),
        opacity: 0.5
      },
      to: {
        transform: 'translateX(0) scaleX(1)',
        opacity: 0
      }
    });
  };
  var genBaseStyle = function genBaseStyle(token) {
    var _Object$assign;
    var progressCls = token.componentCls,
      iconPrefixCls = token.iconCls;
    return _defineProperty({}, progressCls, Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), (_Object$assign = {
      display: 'inline-block',
      '&-rtl': {
        direction: 'rtl'
      },
      '&-line': {
        position: 'relative',
        width: '100%',
        fontSize: token.fontSize
      }
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$assign, "".concat(progressCls, "-outer"), {
      display: 'inline-block',
      width: '100%'
    }), "&".concat(progressCls, "-show-info"), _defineProperty({}, "".concat(progressCls, "-outer"), {
      marginInlineEnd: "calc(-2em - ".concat((0, _cssinjs.unit)(token.marginXS), ")"),
      paddingInlineEnd: "calc(2em + ".concat((0, _cssinjs.unit)(token.paddingXS), ")")
    })), "".concat(progressCls, "-inner"), {
      position: 'relative',
      display: 'inline-block',
      width: '100%',
      overflow: 'hidden',
      verticalAlign: 'middle',
      backgroundColor: token.remainingColor,
      borderRadius: token.lineBorderRadius
    }), "".concat(progressCls, "-inner:not(").concat(progressCls, "-circle-gradient)"), _defineProperty({}, "".concat(progressCls, "-circle-path"), {
      stroke: token.defaultColor
    })), "".concat(progressCls, "-success-bg, ").concat(progressCls, "-bg"), {
      position: 'relative',
      background: token.defaultColor,
      borderRadius: token.lineBorderRadius,
      transition: "all ".concat(token.motionDurationSlow, " ").concat(token.motionEaseInOutCirc)
    }), "".concat(progressCls, "-bg"), {
      overflow: 'hidden',
      '&::after': {
        content: '""',
        background: {
          _multi_value_: true,
          value: ['inherit', "var(".concat(LineStrokeColorVar, ")")]
        },
        height: '100%',
        width: "calc(1 / var(".concat(Percent, ") * 100%)"),
        display: 'block'
      }
    }), "".concat(progressCls, "-success-bg"), {
      position: 'absolute',
      insetBlockStart: 0,
      insetInlineStart: 0,
      backgroundColor: token.colorSuccess
    }), "".concat(progressCls, "-text"), _defineProperty({
      display: 'inline-block',
      width: '2em',
      marginInlineStart: token.marginXS,
      color: token.colorText,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      textAlign: 'start',
      verticalAlign: 'middle',
      wordBreak: 'normal'
    }, iconPrefixCls, {
      fontSize: token.fontSize
    })), "&".concat(progressCls, "-status-active"), _defineProperty({}, "".concat(progressCls, "-bg::before"), {
      position: 'absolute',
      inset: 0,
      backgroundColor: token.colorBgContainer,
      borderRadius: token.lineBorderRadius,
      opacity: 0,
      animationName: genAntProgressActive(),
      animationDuration: token.progressActiveMotionDuration,
      animationTimingFunction: token.motionEaseOutQuint,
      animationIterationCount: 'infinite',
      content: '""'
    })), "&".concat(progressCls, "-rtl").concat(progressCls, "-status-active"), _defineProperty({}, "".concat(progressCls, "-bg::before"), {
      animationName: genAntProgressActive(true)
    })), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$assign, "&".concat(progressCls, "-status-exception"), _defineProperty(_defineProperty({}, "".concat(progressCls, "-bg"), {
      backgroundColor: token.colorError
    }), "".concat(progressCls, "-text"), {
      color: token.colorError
    })), "&".concat(progressCls, "-status-exception ").concat(progressCls, "-inner:not(").concat(progressCls, "-circle-gradient)"), _defineProperty({}, "".concat(progressCls, "-circle-path"), {
      stroke: token.colorError
    })), "&".concat(progressCls, "-status-success"), _defineProperty(_defineProperty({}, "".concat(progressCls, "-bg"), {
      backgroundColor: token.colorSuccess
    }), "".concat(progressCls, "-text"), {
      color: token.colorSuccess
    })), "&".concat(progressCls, "-status-success ").concat(progressCls, "-inner:not(").concat(progressCls, "-circle-gradient)"), _defineProperty({}, "".concat(progressCls, "-circle-path"), {
      stroke: token.colorSuccess
    })))));
  };
  var genCircleStyle = function genCircleStyle(token) {
    var progressCls = token.componentCls,
      iconPrefixCls = token.iconCls;
    return _defineProperty(_defineProperty({}, progressCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(progressCls, "-circle-trail"), {
      stroke: token.remainingColor
    }), "&".concat(progressCls, "-circle ").concat(progressCls, "-inner"), {
      position: 'relative',
      lineHeight: 1,
      backgroundColor: 'transparent'
    }), "&".concat(progressCls, "-circle ").concat(progressCls, "-text"), _defineProperty({
      position: 'absolute',
      insetBlockStart: '50%',
      insetInlineStart: 0,
      width: '100%',
      margin: 0,
      padding: 0,
      color: token.circleTextColor,
      fontSize: token.circleTextFontSize,
      lineHeight: 1,
      whiteSpace: 'normal',
      textAlign: 'center',
      transform: 'translateY(-50%)'
    }, iconPrefixCls, {
      fontSize: token.circleIconFontSize
    })), "".concat(progressCls, "-circle&-status-exception"), _defineProperty({}, "".concat(progressCls, "-text"), {
      color: token.colorError
    })), "".concat(progressCls, "-circle&-status-success"), _defineProperty({}, "".concat(progressCls, "-text"), {
      color: token.colorSuccess
    }))), "".concat(progressCls, "-inline-circle"), _defineProperty({
      lineHeight: 1
    }, "".concat(progressCls, "-inner"), {
      verticalAlign: 'bottom'
    }));
  };
  var genStepStyle = function genStepStyle(token) {
    var progressCls = token.componentCls;
    return _defineProperty({}, progressCls, _defineProperty({}, "".concat(progressCls, "-steps"), {
      display: 'inline-block',
      '&-outer': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      },
      '&-item': {
        flexShrink: 0,
        minWidth: token.progressStepMinWidth,
        marginInlineEnd: token.progressStepMarginInlineEnd,
        backgroundColor: token.remainingColor,
        transition: "all ".concat(token.motionDurationSlow),
        '&-active': {
          backgroundColor: token.defaultColor
        }
      }
    }));
  };
  var genSmallLine = function genSmallLine(token) {
    var progressCls = token.componentCls,
      iconPrefixCls = token.iconCls;
    return _defineProperty({}, progressCls, _defineProperty({}, "".concat(progressCls, "-small&-line, ").concat(progressCls, "-small&-line ").concat(progressCls, "-text ").concat(iconPrefixCls), {
      fontSize: token.fontSizeSM
    }));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      circleTextColor: token.colorText,
      defaultColor: token.colorInfo,
      remainingColor: token.colorFillSecondary,
      lineBorderRadius: 100,
      // magic for capsule shape, should be a very large number
      circleTextFontSize: '1em',
      circleIconFontSize: "".concat(token.fontSize / token.fontSizeSM, "em")
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Progress', function (token) {
    var progressStepMarginInlineEnd = token.calc(token.marginXXS).div(2).equal();
    var progressToken = (0, _internal.mergeToken)(token, {
      progressStepMarginInlineEnd: progressStepMarginInlineEnd,
      progressStepMinWidth: progressStepMarginInlineEnd,
      progressActiveMotionDuration: '2.4s'
    });
    return [genBaseStyle(progressToken), genCircleStyle(progressToken), genStepStyle(progressToken), genSmallLine(progressToken)];
  }, prepareComponentToken);
});