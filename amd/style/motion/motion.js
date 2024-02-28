define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initMotion = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var initMotionCommon = function initMotionCommon(duration) {
    return {
      animationDuration: duration,
      animationFillMode: 'both'
    };
  };
  // FIXME: origin less code seems same as initMotionCommon. Maybe we can safe remove
  var initMotionCommonLeave = function initMotionCommonLeave(duration) {
    return {
      animationDuration: duration,
      animationFillMode: 'both'
    };
  };
  var initMotion = _exports.initMotion = function initMotion(motionCls, inKeyframes, outKeyframes, duration) {
    var sameLevel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var sameLevelPrefix = sameLevel ? '&' : '';
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "\n      ".concat(sameLevelPrefix).concat(motionCls, "-enter,\n      ").concat(sameLevelPrefix).concat(motionCls, "-appear\n    "), Object.assign(Object.assign({}, initMotionCommon(duration)), {
      animationPlayState: 'paused'
    })), "".concat(sameLevelPrefix).concat(motionCls, "-leave"), Object.assign(Object.assign({}, initMotionCommonLeave(duration)), {
      animationPlayState: 'paused'
    })), "\n      ".concat(sameLevelPrefix).concat(motionCls, "-enter").concat(motionCls, "-enter-active,\n      ").concat(sameLevelPrefix).concat(motionCls, "-appear").concat(motionCls, "-appear-active\n    "), {
      animationName: inKeyframes,
      animationPlayState: 'running'
    }), "".concat(sameLevelPrefix).concat(motionCls, "-leave").concat(motionCls, "-leave-active"), {
      animationName: outKeyframes,
      animationPlayState: 'running',
      pointerEvents: 'none'
    });
  };
});