define(["exports", "antd4mx/style/motion/index"], function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genMotionStyle = function genMotionStyle(token) {
    var componentCls = token.componentCls,
      motionDurationSlow = token.motionDurationSlow;
    return [_defineProperty({}, componentCls, _defineProperty({}, "".concat(componentCls, "-switch"), {
      '&-appear, &-enter': {
        transition: 'none',
        '&-start': {
          opacity: 0
        },
        '&-active': {
          opacity: 1,
          transition: "opacity ".concat(motionDurationSlow)
        }
      },
      '&-leave': {
        position: 'absolute',
        transition: 'none',
        inset: 0,
        '&-start': {
          opacity: 1
        },
        '&-active': {
          opacity: 0,
          transition: "opacity ".concat(motionDurationSlow)
        }
      }
    })),
    // Follow code may reuse in other components
    [(0, _index.initSlideMotion)(token, 'slide-up'), (0, _index.initSlideMotion)(token, 'slide-down')]];
  };
  var _default = _exports["default"] = genMotionStyle;
});