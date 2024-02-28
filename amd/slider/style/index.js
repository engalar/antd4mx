define(["exports", "@ctrl/tinycolor", "antd4mx/style/index", "antd4mx/theme/internal", "@ant-design/cssinjs"], function (_exports, _tinycolor, _index, _internal, _cssinjs) {
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
    var _Object$assign;
    var componentCls = token.componentCls,
      antCls = token.antCls,
      controlSize = token.controlSize,
      dotSize = token.dotSize,
      marginFull = token.marginFull,
      marginPart = token.marginPart,
      colorFillContentHover = token.colorFillContentHover,
      handleColorDisabled = token.handleColorDisabled,
      calc = token.calc;
    return _defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), (_Object$assign = {
      position: 'relative',
      height: controlSize,
      margin: "".concat((0, _cssinjs.unit)(marginPart), " ").concat((0, _cssinjs.unit)(marginFull)),
      padding: 0,
      cursor: 'pointer',
      touchAction: 'none'
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$assign, "&-vertical", {
      margin: "".concat((0, _cssinjs.unit)(marginFull), " ").concat((0, _cssinjs.unit)(marginPart))
    }), "".concat(componentCls, "-rail"), {
      position: 'absolute',
      backgroundColor: token.railBg,
      borderRadius: token.borderRadiusXS,
      transition: "background-color ".concat(token.motionDurationMid)
    }), "".concat(componentCls, "-track,").concat(componentCls, "-tracks"), {
      position: 'absolute',
      transition: "background-color ".concat(token.motionDurationMid)
    }), "".concat(componentCls, "-track"), {
      backgroundColor: token.trackBg,
      borderRadius: token.borderRadiusXS
    }), "".concat(componentCls, "-track-draggable"), {
      boxSizing: 'content-box',
      backgroundClip: 'content-box',
      border: 'solid rgba(0,0,0,0)'
    }), '&:hover', _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-rail"), {
      backgroundColor: token.railHoverBg
    }), "".concat(componentCls, "-track"), {
      backgroundColor: token.trackHoverBg
    }), "".concat(componentCls, "-dot"), {
      borderColor: colorFillContentHover
    }), "".concat(componentCls, "-handle::after"), {
      boxShadow: "0 0 0 ".concat((0, _cssinjs.unit)(token.handleLineWidth), " ").concat(token.colorPrimaryBorderHover)
    }), "".concat(componentCls, "-dot-active"), {
      borderColor: token.dotActiveBorderColor
    })), "".concat(componentCls, "-handle"), {
      position: 'absolute',
      width: token.handleSize,
      height: token.handleSize,
      outline: 'none',
      // 扩大选区
      '&::before': {
        content: '""',
        position: 'absolute',
        insetInlineStart: calc(token.handleLineWidth).mul(-1).equal(),
        insetBlockStart: calc(token.handleLineWidth).mul(-1).equal(),
        width: calc(token.handleSize).add(calc(token.handleLineWidth).mul(2)).equal(),
        height: calc(token.handleSize).add(calc(token.handleLineWidth).mul(2)).equal(),
        backgroundColor: 'transparent'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        insetBlockStart: 0,
        insetInlineStart: 0,
        width: token.handleSize,
        height: token.handleSize,
        backgroundColor: token.colorBgElevated,
        boxShadow: "0 0 0 ".concat((0, _cssinjs.unit)(token.handleLineWidth), " ").concat(token.handleColor),
        borderRadius: '50%',
        cursor: 'pointer',
        transition: "\n            inset-inline-start ".concat(token.motionDurationMid, ",\n            inset-block-start ").concat(token.motionDurationMid, ",\n            width ").concat(token.motionDurationMid, ",\n            height ").concat(token.motionDurationMid, ",\n            box-shadow ").concat(token.motionDurationMid, "\n          ")
      },
      '&:hover, &:active, &:focus': {
        '&::before': {
          // -(
          //   (token.handleSizeHover - token.handleSize) / 2 +
          //   token.handleLineWidthHover
          // ),
          insetInlineStart: calc(token.handleSizeHover).sub(token.handleSize).div(2).add(token.handleLineWidthHover).mul(-1).equal(),
          insetBlockStart: calc(token.handleSizeHover).sub(token.handleSize).div(2).add(token.handleLineWidthHover).mul(-1).equal(),
          width: calc(token.handleSizeHover).add(calc(token.handleLineWidthHover).mul(2)).equal(),
          height: calc(token.handleSizeHover).add(calc(token.handleLineWidthHover).mul(2)).equal()
        },
        '&::after': {
          boxShadow: "0 0 0 ".concat((0, _cssinjs.unit)(token.handleLineWidthHover), " ").concat(token.handleActiveColor),
          width: token.handleSizeHover,
          height: token.handleSizeHover,
          insetInlineStart: token.calc(token.handleSize).sub(token.handleSizeHover).div(2).equal(),
          insetBlockStart: token.calc(token.handleSize).sub(token.handleSizeHover).div(2).equal()
        }
      }
    }), "".concat(componentCls, "-mark"), {
      position: 'absolute',
      fontSize: token.fontSize
    }), "".concat(componentCls, "-mark-text"), {
      position: 'absolute',
      display: 'inline-block',
      color: token.colorTextDescription,
      textAlign: 'center',
      wordBreak: 'keep-all',
      cursor: 'pointer',
      userSelect: 'none',
      '&-active': {
        color: token.colorText
      }
    }), "".concat(componentCls, "-step"), {
      position: 'absolute',
      background: 'transparent',
      pointerEvents: 'none'
    }), _defineProperty(_defineProperty(_defineProperty(_Object$assign, "".concat(componentCls, "-dot"), {
      position: 'absolute',
      width: dotSize,
      height: dotSize,
      backgroundColor: token.colorBgElevated,
      border: "".concat((0, _cssinjs.unit)(token.handleLineWidth), " solid ").concat(token.dotBorderColor),
      borderRadius: '50%',
      cursor: 'pointer',
      transition: "border-color ".concat(token.motionDurationSlow),
      pointerEvents: 'auto',
      '&-active': {
        borderColor: token.dotActiveBorderColor
      }
    }), "&".concat(componentCls, "-disabled"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      cursor: 'not-allowed'
    }, "".concat(componentCls, "-rail"), {
      backgroundColor: "".concat(token.railBg, " !important")
    }), "".concat(componentCls, "-track"), {
      backgroundColor: "".concat(token.trackBgDisabled, " !important")
    }), "\n          ".concat(componentCls, "-dot\n        "), {
      backgroundColor: token.colorBgElevated,
      borderColor: token.trackBgDisabled,
      boxShadow: 'none',
      cursor: 'not-allowed'
    }), "".concat(componentCls, "-handle::after"), {
      backgroundColor: token.colorBgElevated,
      cursor: 'not-allowed',
      width: token.handleSize,
      height: token.handleSize,
      boxShadow: "0 0 0 ".concat((0, _cssinjs.unit)(token.handleLineWidth), " ").concat(handleColorDisabled),
      insetInlineStart: 0,
      insetBlockStart: 0
    }), "\n          ".concat(componentCls, "-mark-text,\n          ").concat(componentCls, "-dot\n        "), {
      cursor: "not-allowed !important"
    })), "&-tooltip ".concat(antCls, "-tooltip-inner"), {
      minWidth: 'unset'
    }))));
  };
  // ============================ Horizontal ============================
  var genDirectionStyle = function genDirectionStyle(token, horizontal) {
    var componentCls = token.componentCls,
      railSize = token.railSize,
      handleSize = token.handleSize,
      dotSize = token.dotSize,
      marginFull = token.marginFull,
      calc = token.calc;
    var railPadding = horizontal ? 'paddingBlock' : 'paddingInline';
    var full = horizontal ? 'width' : 'height';
    var part = horizontal ? 'height' : 'width';
    var handlePos = horizontal ? 'insetBlockStart' : 'insetInlineStart';
    var markInset = horizontal ? 'top' : 'insetInlineStart';
    var handlePosSize = calc(railSize).mul(3).sub(handleSize).div(2).equal();
    var draggableBorderSize = calc(handleSize).sub(railSize).div(2).equal();
    var draggableBorder = horizontal ? {
      borderWidth: "".concat((0, _cssinjs.unit)(draggableBorderSize), " 0"),
      transform: "translateY(".concat((0, _cssinjs.unit)(calc(draggableBorderSize).mul(-1).equal()), ")")
    } : {
      borderWidth: "0 ".concat((0, _cssinjs.unit)(draggableBorderSize)),
      transform: "translateX(".concat((0, _cssinjs.unit)(token.calc(draggableBorderSize).mul(-1).equal()), ")")
    };
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, railPadding, railSize), part, calc(railSize).mul(3).equal()), "".concat(componentCls, "-rail"), _defineProperty(_defineProperty({}, full, '100%'), part, railSize)), "".concat(componentCls, "-track,").concat(componentCls, "-tracks"), _defineProperty({}, part, railSize)), "".concat(componentCls, "-track-draggable"), Object.assign({}, draggableBorder)), "".concat(componentCls, "-handle"), _defineProperty({}, handlePos, handlePosSize)), "".concat(componentCls, "-mark"), _defineProperty(_defineProperty({
      // Reset all
      insetInlineStart: 0,
      top: 0
    }, markInset, calc(railSize).mul(3).add(horizontal ? 0 : marginFull).equal()), full, '100%')), "".concat(componentCls, "-step"), _defineProperty(_defineProperty(_defineProperty({
      // Reset all
      insetInlineStart: 0,
      top: 0
    }, markInset, railSize), full, '100%'), part, railSize)), "".concat(componentCls, "-dot"), _defineProperty({
      position: 'absolute'
    }, handlePos, calc(railSize).sub(dotSize).div(2).equal()));
  };
  // ============================ Horizontal ============================
  var genHorizontalStyle = function genHorizontalStyle(token) {
    var componentCls = token.componentCls,
      marginPartWithMark = token.marginPartWithMark;
    return _defineProperty({}, "".concat(componentCls, "-horizontal"), Object.assign(Object.assign({}, genDirectionStyle(token, true)), _defineProperty({}, "&".concat(componentCls, "-with-marks"), {
      marginBottom: marginPartWithMark
    })));
  };
  // ============================= Vertical =============================
  var genVerticalStyle = function genVerticalStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, "".concat(componentCls, "-vertical"), Object.assign(Object.assign({}, genDirectionStyle(token, false)), {
      height: '100%'
    }));
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    // Handle line width is always width-er 1px
    var increaseHandleWidth = 1;
    var controlSize = token.controlHeightLG / 4;
    var controlSizeHover = token.controlHeightSM / 2;
    var handleLineWidth = token.lineWidth + increaseHandleWidth;
    var handleLineWidthHover = token.lineWidth + increaseHandleWidth * 3;
    return {
      controlSize: controlSize,
      railSize: 4,
      handleSize: controlSize,
      handleSizeHover: controlSizeHover,
      dotSize: 8,
      handleLineWidth: handleLineWidth,
      handleLineWidthHover: handleLineWidthHover,
      railBg: token.colorFillTertiary,
      railHoverBg: token.colorFillSecondary,
      trackBg: token.colorPrimaryBorder,
      trackHoverBg: token.colorPrimaryBorderHover,
      handleColor: token.colorPrimaryBorder,
      handleActiveColor: token.colorPrimary,
      handleColorDisabled: new _tinycolor.TinyColor(token.colorTextDisabled).onBackground(token.colorBgContainer).toHexShortString(),
      dotBorderColor: token.colorBorderSecondary,
      dotActiveBorderColor: token.colorPrimaryBorder,
      trackBgDisabled: token.colorBgContainerDisabled
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Slider', function (token) {
    var sliderToken = (0, _internal.mergeToken)(token, {
      marginPart: token.calc(token.controlHeight).sub(token.controlSize).div(2).equal(),
      marginFull: token.calc(token.controlSize).div(2).equal(),
      marginPartWithMark: token.calc(token.controlHeightLG).sub(token.controlSize).equal()
    });
    return [genBaseStyle(sliderToken), genHorizontalStyle(sliderToken), genVerticalStyle(sliderToken)];
  }, prepareComponentToken);
});