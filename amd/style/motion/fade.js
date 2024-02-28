define(["exports", "@ant-design/cssinjs", "antd4mx/style/motion/motion"], function (_exports, _cssinjs, _motion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initFadeMotion = _exports.fadeOut = _exports.fadeIn = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var fadeIn = _exports.fadeIn = new _cssinjs.Keyframes('antFadeIn', {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  });
  var fadeOut = _exports.fadeOut = new _cssinjs.Keyframes('antFadeOut', {
    '0%': {
      opacity: 1
    },
    '100%': {
      opacity: 0
    }
  });
  var initFadeMotion = _exports.initFadeMotion = function initFadeMotion(token) {
    var sameLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var antCls = token.antCls;
    var motionCls = "".concat(antCls, "-fade");
    var sameLevelPrefix = sameLevel ? '&' : '';
    return [(0, _motion.initMotion)(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel), _defineProperty(_defineProperty({}, "\n        ".concat(sameLevelPrefix).concat(motionCls, "-enter,\n        ").concat(sameLevelPrefix).concat(motionCls, "-appear\n      "), {
      opacity: 0,
      animationTimingFunction: 'linear'
    }), "".concat(sameLevelPrefix).concat(motionCls, "-leave"), {
      animationTimingFunction: 'linear'
    })];
  };
});