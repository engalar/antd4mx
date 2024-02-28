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
  var getMoveTranslate = function getMoveTranslate(direction) {
    var value = '100%';
    return {
      left: "translateX(-".concat(value, ")"),
      right: "translateX(".concat(value, ")"),
      top: "translateY(-".concat(value, ")"),
      bottom: "translateY(".concat(value, ")")
    }[direction];
  };
  var getEnterLeaveStyle = function getEnterLeaveStyle(startStyle, endStyle) {
    return {
      '&-enter, &-appear': Object.assign(Object.assign({}, startStyle), {
        '&-active': endStyle
      }),
      '&-leave': Object.assign(Object.assign({}, endStyle), {
        '&-active': startStyle
      })
    };
  };
  var getFadeStyle = function getFadeStyle(from, duration) {
    return Object.assign({
      '&-enter, &-appear, &-leave': {
        '&-start': {
          transition: 'none'
        },
        '&-active': {
          transition: "all ".concat(duration)
        }
      }
    }, getEnterLeaveStyle({
      opacity: from
    }, {
      opacity: 1
    }));
  };
  var getPanelMotionStyles = function getPanelMotionStyles(direction, duration) {
    return [getFadeStyle(0.7, duration), getEnterLeaveStyle({
      transform: getMoveTranslate(direction)
    }, {
      transform: 'none'
    })];
  };
  var genMotionStyle = function genMotionStyle(token) {
    var componentCls = token.componentCls,
      motionDurationSlow = token.motionDurationSlow;
    return _defineProperty({}, componentCls, _defineProperty(_defineProperty({}, "".concat(componentCls, "-mask-motion"), getFadeStyle(0, motionDurationSlow)), "".concat(componentCls, "-panel-motion"), ['left', 'right', 'top', 'bottom'].reduce(function (obj, direction) {
      return Object.assign(Object.assign({}, obj), _defineProperty({}, "&-".concat(direction), getPanelMotionStyles(direction, motionDurationSlow)));
    }, {})));
  };
  var _default = _exports["default"] = genMotionStyle;
});