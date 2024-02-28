define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genFormValidateMotionStyle = function genFormValidateMotionStyle(token) {
    var componentCls = token.componentCls;
    var helpCls = "".concat(componentCls, "-show-help");
    var helpItemCls = "".concat(componentCls, "-show-help-item");
    return _defineProperty({}, helpCls, _defineProperty({
      // Explain holder
      transition: "opacity ".concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut),
      '&-appear, &-enter': {
        opacity: 0,
        '&-active': {
          opacity: 1
        }
      },
      '&-leave': {
        opacity: 1,
        '&-active': {
          opacity: 0
        }
      }
    }, helpItemCls, _defineProperty(_defineProperty({
      overflow: 'hidden',
      transition: "height ".concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut, ",\n                     opacity ").concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut, ",\n                     transform ").concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut, " !important")
    }, "&".concat(helpItemCls, "-appear, &").concat(helpItemCls, "-enter"), _defineProperty({
      transform: "translateY(-5px)",
      opacity: 0
    }, "&-active", {
      transform: 'translateY(0)',
      opacity: 1
    })), "&".concat(helpItemCls, "-leave-active"), {
      transform: "translateY(-5px)"
    })));
  };
  var _default = _exports["default"] = genFormValidateMotionStyle;
});