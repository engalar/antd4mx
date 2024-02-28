define(["exports", "@ant-design/cssinjs"], function (_exports, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genStepsProgressDotStyle = function genStepsProgressDotStyle(token) {
    var componentCls = token.componentCls,
      descriptionMaxWidth = token.descriptionMaxWidth,
      lineHeight = token.lineHeight,
      dotCurrentSize = token.dotCurrentSize,
      dotSize = token.dotSize,
      motionDurationSlow = token.motionDurationSlow;
    return _defineProperty(_defineProperty({}, "&".concat(componentCls, "-dot, &").concat(componentCls, "-dot").concat(componentCls, "-small"), _defineProperty({}, "".concat(componentCls, "-item"), _defineProperty(_defineProperty({
      '&-title': {
        lineHeight: lineHeight
      },
      '&-tail': {
        // Math.floor((token.size - token.lineWidth * 3) / 2)
        top: token.calc(token.dotSize).sub(token.calc(token.lineWidth).mul(3).equal()).div(2).equal(),
        width: '100%',
        marginTop: 0,
        marginBottom: 0,
        marginInline: "".concat((0, _cssinjs.unit)(token.calc(descriptionMaxWidth).div(2).equal()), " 0"),
        padding: 0,
        '&::after': {
          width: "calc(100% - ".concat((0, _cssinjs.unit)(token.calc(token.marginSM).mul(2).equal()), ")"),
          height: token.calc(token.lineWidth).mul(3).equal(),
          marginInlineStart: token.marginSM
        }
      },
      '&-icon': _defineProperty({
        width: dotSize,
        height: dotSize,
        marginInlineStart: token.calc(token.descriptionMaxWidth).sub(dotSize).div(2).equal(),
        paddingInlineEnd: 0,
        lineHeight: "".concat((0, _cssinjs.unit)(dotSize)),
        background: 'transparent',
        border: 0
      }, "".concat(componentCls, "-icon-dot"), {
        position: 'relative',
        "float": 'left',
        width: '100%',
        height: '100%',
        borderRadius: 100,
        // very large number
        transition: "all ".concat(motionDurationSlow),
        /* expand hover area */
        '&::after': {
          position: 'absolute',
          top: token.calc(token.marginSM).mul(-1).equal(),
          insetInlineStart: token.calc(dotSize).sub(token.calc(token.controlHeightLG).mul(1.5).equal()).div(2).equal(),
          width: token.calc(token.controlHeightLG).mul(1.5).equal(),
          height: token.controlHeight,
          background: 'transparent',
          content: '""'
        }
      }),
      '&-content': {
        width: descriptionMaxWidth
      }
    }, "&-process ".concat(componentCls, "-item-icon"), {
      position: 'relative',
      top: token.calc(dotSize).sub(dotCurrentSize).div(2).equal(),
      width: dotCurrentSize,
      height: dotCurrentSize,
      lineHeight: "".concat((0, _cssinjs.unit)(dotCurrentSize)),
      background: 'none',
      marginInlineStart: token.calc(token.descriptionMaxWidth).sub(dotCurrentSize).div(2).equal()
    }), "&-process ".concat(componentCls, "-icon"), _defineProperty({}, "&:first-child ".concat(componentCls, "-icon-dot"), {
      insetInlineStart: 0
    })))), "&".concat(componentCls, "-vertical").concat(componentCls, "-dot"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-item-icon"), {
      marginTop: token.calc(token.controlHeight).sub(dotSize).div(2).equal(),
      marginInlineStart: 0,
      background: 'none'
    }), "".concat(componentCls, "-item-process ").concat(componentCls, "-item-icon"), {
      marginTop: token.calc(token.controlHeight).sub(dotCurrentSize).div(2).equal(),
      top: 0,
      insetInlineStart: token.calc(dotSize).sub(dotCurrentSize).div(2).equal(),
      marginInlineStart: 0
    }), "".concat(componentCls, "-item > ").concat(componentCls, "-item-container > ").concat(componentCls, "-item-tail"), {
      top: token.calc(token.controlHeight).sub(dotSize).div(2).equal(),
      insetInlineStart: 0,
      margin: 0,
      padding: "".concat((0, _cssinjs.unit)(token.calc(dotSize).add(token.paddingXS).equal()), " 0 ").concat((0, _cssinjs.unit)(token.paddingXS)),
      '&::after': {
        marginInlineStart: token.calc(dotSize).sub(token.lineWidth).div(2).equal()
      }
    }), "&".concat(componentCls, "-small"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-item-icon"), {
      marginTop: token.calc(token.controlHeightSM).sub(dotSize).div(2).equal()
    }), "".concat(componentCls, "-item-process ").concat(componentCls, "-item-icon"), {
      marginTop: token.calc(token.controlHeightSM).sub(dotCurrentSize).div(2).equal()
    }), "".concat(componentCls, "-item > ").concat(componentCls, "-item-container > ").concat(componentCls, "-item-tail"), {
      top: token.calc(token.controlHeightSM).sub(dotSize).div(2).equal()
    })), "".concat(componentCls, "-item:first-child ").concat(componentCls, "-icon-dot"), {
      insetInlineStart: 0
    }), "".concat(componentCls, "-item-content"), {
      width: 'inherit'
    }));
  };
  var _default = _exports["default"] = genStepsProgressDotStyle;
});