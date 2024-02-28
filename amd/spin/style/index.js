define(["exports", "@ant-design/cssinjs", "antd4mx/style/index", "antd4mx/theme/internal"], function (_exports, _cssinjs, _index, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var antSpinMove = new _cssinjs.Keyframes('antSpinMove', {
    to: {
      opacity: 1
    }
  });
  var antRotate = new _cssinjs.Keyframes('antRotate', {
    to: {
      transform: 'rotate(405deg)'
    }
  });
  var genSpinStyle = function genSpinStyle(token) {
    var componentCls = token.componentCls,
      calc = token.calc;
    return _defineProperty({}, "".concat(componentCls), Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'absolute',
      display: 'none',
      color: token.colorPrimary,
      fontSize: 0,
      textAlign: 'center',
      verticalAlign: 'middle',
      opacity: 0,
      transition: "transform ".concat(token.motionDurationSlow, " ").concat(token.motionEaseInOutCirc),
      '&-spinning': {
        position: 'static',
        display: 'inline-block',
        opacity: 1
      }
    }, "".concat(componentCls, "-text"), {
      fontSize: token.fontSize,
      paddingTop: calc(calc(token.dotSize).sub(token.fontSize)).div(2).add(2).equal()
    }), '&-fullscreen', _defineProperty(_defineProperty({
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      backgroundColor: token.colorBgMask,
      zIndex: token.zIndexPopupBase,
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      opacity: 0,
      visibility: 'hidden',
      transition: "all ".concat(token.motionDurationMid),
      '&-show': {
        opacity: 1,
        visibility: 'visible'
      }
    }, "".concat(componentCls, "-dot ").concat(componentCls, "-dot-item"), {
      backgroundColor: token.colorWhite
    }), "".concat(componentCls, "-text"), {
      color: token.colorTextLightSolid
    })), '&-nested-loading', _defineProperty(_defineProperty(_defineProperty({
      position: 'relative'
    }, "> div > ".concat(componentCls), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'absolute',
      top: 0,
      insetInlineStart: 0,
      zIndex: 4,
      display: 'block',
      width: '100%',
      height: '100%',
      maxHeight: token.contentHeight
    }, "".concat(componentCls, "-dot"), {
      position: 'absolute',
      top: '50%',
      insetInlineStart: '50%',
      margin: calc(token.dotSize).mul(-1).div(2).equal()
    }), "".concat(componentCls, "-text"), {
      position: 'absolute',
      top: '50%',
      width: '100%',
      textShadow: "0 1px 2px ".concat(token.colorBgContainer) // FIXME: shadow
    }), "&".concat(componentCls, "-show-text ").concat(componentCls, "-dot"), {
      marginTop: calc(token.dotSize).div(2).mul(-1).sub(10).equal()
    }), '&-sm', _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-dot"), {
      margin: calc(token.dotSizeSM).mul(-1).div(2).equal()
    }), "".concat(componentCls, "-text"), {
      paddingTop: calc(calc(token.dotSizeSM).sub(token.fontSize)).div(2).add(2).equal()
    }), "&".concat(componentCls, "-show-text ").concat(componentCls, "-dot"), {
      marginTop: calc(token.dotSizeSM).div(2).mul(-1).sub(10).equal()
    })), '&-lg', _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-dot"), {
      margin: calc(token.dotSizeLG).mul(-1).div(2).equal()
    }), "".concat(componentCls, "-text"), {
      paddingTop: calc(calc(token.dotSizeLG).sub(token.fontSize)).div(2).add(2).equal()
    }), "&".concat(componentCls, "-show-text ").concat(componentCls, "-dot"), {
      marginTop: calc(token.dotSizeLG).div(2).mul(-1).sub(10).equal()
    }))), "".concat(componentCls, "-container"), {
      position: 'relative',
      transition: "opacity ".concat(token.motionDurationSlow),
      '&::after': {
        position: 'absolute',
        top: 0,
        insetInlineEnd: 0,
        bottom: 0,
        insetInlineStart: 0,
        zIndex: 10,
        width: '100%',
        height: '100%',
        background: token.colorBgContainer,
        opacity: 0,
        transition: "all ".concat(token.motionDurationSlow),
        content: '""',
        pointerEvents: 'none'
      }
    }), "".concat(componentCls, "-blur"), _defineProperty({
      clear: 'both',
      opacity: 0.5,
      userSelect: 'none',
      pointerEvents: 'none'
    }, "&::after", {
      opacity: 0.4,
      pointerEvents: 'auto'
    }))), "&-tip", {
      color: token.spinDotDefault
    }), "".concat(componentCls, "-dot"), {
      position: 'relative',
      display: 'inline-block',
      fontSize: token.dotSize,
      width: '1em',
      height: '1em',
      '&-item': {
        position: 'absolute',
        display: 'block',
        width: calc(token.dotSize).sub(calc(token.marginXXS).div(2)).div(2).equal(),
        height: calc(token.dotSize).sub(calc(token.marginXXS).div(2)).div(2).equal(),
        backgroundColor: token.colorPrimary,
        borderRadius: '100%',
        transform: 'scale(0.75)',
        transformOrigin: '50% 50%',
        opacity: 0.3,
        animationName: antSpinMove,
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        animationDirection: 'alternate',
        '&:nth-child(1)': {
          top: 0,
          insetInlineStart: 0,
          animationDelay: '0s'
        },
        '&:nth-child(2)': {
          top: 0,
          insetInlineEnd: 0,
          animationDelay: '0.4s'
        },
        '&:nth-child(3)': {
          insetInlineEnd: 0,
          bottom: 0,
          animationDelay: '0.8s'
        },
        '&:nth-child(4)': {
          bottom: 0,
          insetInlineStart: 0,
          animationDelay: '1.2s'
        }
      },
      '&-spin': {
        transform: 'rotate(45deg)',
        animationName: antRotate,
        animationDuration: '1.2s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
      }
    }), "&-sm ".concat(componentCls, "-dot"), {
      fontSize: token.dotSizeSM,
      i: {
        width: calc(calc(token.dotSizeSM).sub(calc(token.marginXXS).div(2))).div(2).equal(),
        height: calc(calc(token.dotSizeSM).sub(calc(token.marginXXS).div(2))).div(2).equal()
      }
    }), "&-lg ".concat(componentCls, "-dot"), {
      fontSize: token.dotSizeLG,
      i: {
        width: calc(calc(token.dotSizeLG).sub(token.marginXXS)).div(2).equal(),
        height: calc(calc(token.dotSizeLG).sub(token.marginXXS)).div(2).equal()
      }
    }), "&".concat(componentCls, "-show-text ").concat(componentCls, "-text"), {
      display: 'block'
    })));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var controlHeightLG = token.controlHeightLG,
      controlHeight = token.controlHeight;
    return {
      contentHeight: 400,
      dotSize: controlHeightLG / 2,
      dotSizeSM: controlHeightLG * 0.35,
      dotSizeLG: controlHeight
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Spin', function (token) {
    var spinToken = (0, _internal.mergeToken)(token, {
      spinDotDefault: token.colorTextDescription
    });
    return [genSpinStyle(spinToken)];
  }, prepareComponentToken);
});