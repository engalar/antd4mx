define(["exports", "@ant-design/cssinjs", "antd4mx/style/motion/motion"], function (_exports, _cssinjs, _motion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.moveUpOut = _exports.moveUpIn = _exports.moveRightOut = _exports.moveRightIn = _exports.moveLeftOut = _exports.moveLeftIn = _exports.moveDownOut = _exports.moveDownIn = _exports.initMoveMotion = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var moveDownIn = _exports.moveDownIn = new _cssinjs.Keyframes('antMoveDownIn', {
    '0%': {
      transform: 'translate3d(0, 100%, 0)',
      transformOrigin: '0 0',
      opacity: 0
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    }
  });
  var moveDownOut = _exports.moveDownOut = new _cssinjs.Keyframes('antMoveDownOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    },
    '100%': {
      transform: 'translate3d(0, 100%, 0)',
      transformOrigin: '0 0',
      opacity: 0
    }
  });
  var moveLeftIn = _exports.moveLeftIn = new _cssinjs.Keyframes('antMoveLeftIn', {
    '0%': {
      transform: 'translate3d(-100%, 0, 0)',
      transformOrigin: '0 0',
      opacity: 0
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    }
  });
  var moveLeftOut = _exports.moveLeftOut = new _cssinjs.Keyframes('antMoveLeftOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    },
    '100%': {
      transform: 'translate3d(-100%, 0, 0)',
      transformOrigin: '0 0',
      opacity: 0
    }
  });
  var moveRightIn = _exports.moveRightIn = new _cssinjs.Keyframes('antMoveRightIn', {
    '0%': {
      transform: 'translate3d(100%, 0, 0)',
      transformOrigin: '0 0',
      opacity: 0
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    }
  });
  var moveRightOut = _exports.moveRightOut = new _cssinjs.Keyframes('antMoveRightOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    },
    '100%': {
      transform: 'translate3d(100%, 0, 0)',
      transformOrigin: '0 0',
      opacity: 0
    }
  });
  var moveUpIn = _exports.moveUpIn = new _cssinjs.Keyframes('antMoveUpIn', {
    '0%': {
      transform: 'translate3d(0, -100%, 0)',
      transformOrigin: '0 0',
      opacity: 0
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    }
  });
  var moveUpOut = _exports.moveUpOut = new _cssinjs.Keyframes('antMoveUpOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    },
    '100%': {
      transform: 'translate3d(0, -100%, 0)',
      transformOrigin: '0 0',
      opacity: 0
    }
  });
  var moveMotion = {
    'move-up': {
      inKeyframes: moveUpIn,
      outKeyframes: moveUpOut
    },
    'move-down': {
      inKeyframes: moveDownIn,
      outKeyframes: moveDownOut
    },
    'move-left': {
      inKeyframes: moveLeftIn,
      outKeyframes: moveLeftOut
    },
    'move-right': {
      inKeyframes: moveRightIn,
      outKeyframes: moveRightOut
    }
  };
  var initMoveMotion = _exports.initMoveMotion = function initMoveMotion(token, motionName) {
    var antCls = token.antCls;
    var motionCls = "".concat(antCls, "-").concat(motionName);
    var _moveMotion$motionNam = moveMotion[motionName],
      inKeyframes = _moveMotion$motionNam.inKeyframes,
      outKeyframes = _moveMotion$motionNam.outKeyframes;
    return [(0, _motion.initMotion)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), _defineProperty(_defineProperty({}, "\n        ".concat(motionCls, "-enter,\n        ").concat(motionCls, "-appear\n      "), {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    }), "".concat(motionCls, "-leave"), {
      animationTimingFunction: token.motionEaseInOutCirc
    })];
  };
});