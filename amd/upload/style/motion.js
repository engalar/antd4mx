define(["exports", "@ant-design/cssinjs", "antd4mx/style/motion"], function (_exports, _cssinjs, _motion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var uploadAnimateInlineIn = new _cssinjs.Keyframes('uploadAnimateInlineIn', {
    from: {
      width: 0,
      height: 0,
      margin: 0,
      padding: 0,
      opacity: 0
    }
  });
  var uploadAnimateInlineOut = new _cssinjs.Keyframes('uploadAnimateInlineOut', {
    to: {
      width: 0,
      height: 0,
      margin: 0,
      padding: 0,
      opacity: 0
    }
  });
  // =========================== Motion ===========================
  var genMotionStyle = function genMotionStyle(token) {
    var componentCls = token.componentCls;
    var inlineCls = "".concat(componentCls, "-animate-inline");
    return [_defineProperty({}, "".concat(componentCls, "-wrapper"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(inlineCls, "-appear, ").concat(inlineCls, "-enter, ").concat(inlineCls, "-leave"), {
      animationDuration: token.motionDurationSlow,
      animationTimingFunction: token.motionEaseInOutCirc,
      animationFillMode: 'forwards'
    }), "".concat(inlineCls, "-appear, ").concat(inlineCls, "-enter"), {
      animationName: uploadAnimateInlineIn
    }), "".concat(inlineCls, "-leave"), {
      animationName: uploadAnimateInlineOut
    })), _defineProperty({}, "".concat(componentCls, "-wrapper"), (0, _motion.initFadeMotion)(token)), uploadAnimateInlineIn, uploadAnimateInlineOut];
  };
  var _default = _exports["default"] = genMotionStyle;
});