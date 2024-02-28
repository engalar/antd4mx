define(["exports", "@ant-design/cssinjs", "antd4mx/style/motion/motion"], function (_exports, _cssinjs, _motion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.slideUpOut = _exports.slideUpIn = _exports.slideRightOut = _exports.slideRightIn = _exports.slideLeftOut = _exports.slideLeftIn = _exports.slideDownOut = _exports.slideDownIn = _exports.initSlideMotion = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var slideUpIn = _exports.slideUpIn = new _cssinjs.Keyframes('antSlideUpIn', {
    '0%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '0% 0%',
      opacity: 0
    },
    '100%': {
      transform: 'scaleY(1)',
      transformOrigin: '0% 0%',
      opacity: 1
    }
  });
  var slideUpOut = _exports.slideUpOut = new _cssinjs.Keyframes('antSlideUpOut', {
    '0%': {
      transform: 'scaleY(1)',
      transformOrigin: '0% 0%',
      opacity: 1
    },
    '100%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '0% 0%',
      opacity: 0
    }
  });
  var slideDownIn = _exports.slideDownIn = new _cssinjs.Keyframes('antSlideDownIn', {
    '0%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0
    },
    '100%': {
      transform: 'scaleY(1)',
      transformOrigin: '100% 100%',
      opacity: 1
    }
  });
  var slideDownOut = _exports.slideDownOut = new _cssinjs.Keyframes('antSlideDownOut', {
    '0%': {
      transform: 'scaleY(1)',
      transformOrigin: '100% 100%',
      opacity: 1
    },
    '100%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0
    }
  });
  var slideLeftIn = _exports.slideLeftIn = new _cssinjs.Keyframes('antSlideLeftIn', {
    '0%': {
      transform: 'scaleX(0.8)',
      transformOrigin: '0% 0%',
      opacity: 0
    },
    '100%': {
      transform: 'scaleX(1)',
      transformOrigin: '0% 0%',
      opacity: 1
    }
  });
  var slideLeftOut = _exports.slideLeftOut = new _cssinjs.Keyframes('antSlideLeftOut', {
    '0%': {
      transform: 'scaleX(1)',
      transformOrigin: '0% 0%',
      opacity: 1
    },
    '100%': {
      transform: 'scaleX(0.8)',
      transformOrigin: '0% 0%',
      opacity: 0
    }
  });
  var slideRightIn = _exports.slideRightIn = new _cssinjs.Keyframes('antSlideRightIn', {
    '0%': {
      transform: 'scaleX(0.8)',
      transformOrigin: '100% 0%',
      opacity: 0
    },
    '100%': {
      transform: 'scaleX(1)',
      transformOrigin: '100% 0%',
      opacity: 1
    }
  });
  var slideRightOut = _exports.slideRightOut = new _cssinjs.Keyframes('antSlideRightOut', {
    '0%': {
      transform: 'scaleX(1)',
      transformOrigin: '100% 0%',
      opacity: 1
    },
    '100%': {
      transform: 'scaleX(0.8)',
      transformOrigin: '100% 0%',
      opacity: 0
    }
  });
  var slideMotion = {
    'slide-up': {
      inKeyframes: slideUpIn,
      outKeyframes: slideUpOut
    },
    'slide-down': {
      inKeyframes: slideDownIn,
      outKeyframes: slideDownOut
    },
    'slide-left': {
      inKeyframes: slideLeftIn,
      outKeyframes: slideLeftOut
    },
    'slide-right': {
      inKeyframes: slideRightIn,
      outKeyframes: slideRightOut
    }
  };
  var initSlideMotion = _exports.initSlideMotion = function initSlideMotion(token, motionName) {
    var antCls = token.antCls;
    var motionCls = "".concat(antCls, "-").concat(motionName);
    var _slideMotion$motionNa = slideMotion[motionName],
      inKeyframes = _slideMotion$motionNa.inKeyframes,
      outKeyframes = _slideMotion$motionNa.outKeyframes;
    return [(0, _motion.initMotion)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), _defineProperty(_defineProperty({}, "\n      ".concat(motionCls, "-enter,\n      ").concat(motionCls, "-appear\n    "), _defineProperty({
      transform: 'scale(0)',
      transformOrigin: '0% 0%',
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint
    }, "&-prepare", {
      transform: 'scale(1)'
    })), "".concat(motionCls, "-leave"), {
      animationTimingFunction: token.motionEaseInQuint
    })];
  };
});