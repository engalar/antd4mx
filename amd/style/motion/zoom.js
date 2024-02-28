define(["exports", "@ant-design/cssinjs", "antd4mx/style/motion/motion"], function (_exports, _cssinjs, _motion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.zoomUpOut = _exports.zoomUpIn = _exports.zoomRightOut = _exports.zoomRightIn = _exports.zoomOut = _exports.zoomLeftOut = _exports.zoomLeftIn = _exports.zoomIn = _exports.zoomDownOut = _exports.zoomDownIn = _exports.zoomBigOut = _exports.zoomBigIn = _exports.initZoomMotion = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var zoomIn = _exports.zoomIn = new _cssinjs.Keyframes('antZoomIn', {
    '0%': {
      transform: 'scale(0.2)',
      opacity: 0
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1
    }
  });
  var zoomOut = _exports.zoomOut = new _cssinjs.Keyframes('antZoomOut', {
    '0%': {
      transform: 'scale(1)'
    },
    '100%': {
      transform: 'scale(0.2)',
      opacity: 0
    }
  });
  var zoomBigIn = _exports.zoomBigIn = new _cssinjs.Keyframes('antZoomBigIn', {
    '0%': {
      transform: 'scale(0.8)',
      opacity: 0
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1
    }
  });
  var zoomBigOut = _exports.zoomBigOut = new _cssinjs.Keyframes('antZoomBigOut', {
    '0%': {
      transform: 'scale(1)'
    },
    '100%': {
      transform: 'scale(0.8)',
      opacity: 0
    }
  });
  var zoomUpIn = _exports.zoomUpIn = new _cssinjs.Keyframes('antZoomUpIn', {
    '0%': {
      transform: 'scale(0.8)',
      transformOrigin: '50% 0%',
      opacity: 0
    },
    '100%': {
      transform: 'scale(1)',
      transformOrigin: '50% 0%'
    }
  });
  var zoomUpOut = _exports.zoomUpOut = new _cssinjs.Keyframes('antZoomUpOut', {
    '0%': {
      transform: 'scale(1)',
      transformOrigin: '50% 0%'
    },
    '100%': {
      transform: 'scale(0.8)',
      transformOrigin: '50% 0%',
      opacity: 0
    }
  });
  var zoomLeftIn = _exports.zoomLeftIn = new _cssinjs.Keyframes('antZoomLeftIn', {
    '0%': {
      transform: 'scale(0.8)',
      transformOrigin: '0% 50%',
      opacity: 0
    },
    '100%': {
      transform: 'scale(1)',
      transformOrigin: '0% 50%'
    }
  });
  var zoomLeftOut = _exports.zoomLeftOut = new _cssinjs.Keyframes('antZoomLeftOut', {
    '0%': {
      transform: 'scale(1)',
      transformOrigin: '0% 50%'
    },
    '100%': {
      transform: 'scale(0.8)',
      transformOrigin: '0% 50%',
      opacity: 0
    }
  });
  var zoomRightIn = _exports.zoomRightIn = new _cssinjs.Keyframes('antZoomRightIn', {
    '0%': {
      transform: 'scale(0.8)',
      transformOrigin: '100% 50%',
      opacity: 0
    },
    '100%': {
      transform: 'scale(1)',
      transformOrigin: '100% 50%'
    }
  });
  var zoomRightOut = _exports.zoomRightOut = new _cssinjs.Keyframes('antZoomRightOut', {
    '0%': {
      transform: 'scale(1)',
      transformOrigin: '100% 50%'
    },
    '100%': {
      transform: 'scale(0.8)',
      transformOrigin: '100% 50%',
      opacity: 0
    }
  });
  var zoomDownIn = _exports.zoomDownIn = new _cssinjs.Keyframes('antZoomDownIn', {
    '0%': {
      transform: 'scale(0.8)',
      transformOrigin: '50% 100%',
      opacity: 0
    },
    '100%': {
      transform: 'scale(1)',
      transformOrigin: '50% 100%'
    }
  });
  var zoomDownOut = _exports.zoomDownOut = new _cssinjs.Keyframes('antZoomDownOut', {
    '0%': {
      transform: 'scale(1)',
      transformOrigin: '50% 100%'
    },
    '100%': {
      transform: 'scale(0.8)',
      transformOrigin: '50% 100%',
      opacity: 0
    }
  });
  var zoomMotion = {
    zoom: {
      inKeyframes: zoomIn,
      outKeyframes: zoomOut
    },
    'zoom-big': {
      inKeyframes: zoomBigIn,
      outKeyframes: zoomBigOut
    },
    'zoom-big-fast': {
      inKeyframes: zoomBigIn,
      outKeyframes: zoomBigOut
    },
    'zoom-left': {
      inKeyframes: zoomLeftIn,
      outKeyframes: zoomLeftOut
    },
    'zoom-right': {
      inKeyframes: zoomRightIn,
      outKeyframes: zoomRightOut
    },
    'zoom-up': {
      inKeyframes: zoomUpIn,
      outKeyframes: zoomUpOut
    },
    'zoom-down': {
      inKeyframes: zoomDownIn,
      outKeyframes: zoomDownOut
    }
  };
  var initZoomMotion = _exports.initZoomMotion = function initZoomMotion(token, motionName) {
    var antCls = token.antCls;
    var motionCls = "".concat(antCls, "-").concat(motionName);
    var _zoomMotion$motionNam = zoomMotion[motionName],
      inKeyframes = _zoomMotion$motionNam.inKeyframes,
      outKeyframes = _zoomMotion$motionNam.outKeyframes;
    return [(0, _motion.initMotion)(motionCls, inKeyframes, outKeyframes, motionName === 'zoom-big-fast' ? token.motionDurationFast : token.motionDurationMid), _defineProperty(_defineProperty({}, "\n        ".concat(motionCls, "-enter,\n        ").concat(motionCls, "-appear\n      "), {
      transform: 'scale(0)',
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc,
      '&-prepare': {
        transform: 'none'
      }
    }), "".concat(motionCls, "-leave"), {
      animationTimingFunction: token.motionEaseInOutCirc
    })];
  };
});