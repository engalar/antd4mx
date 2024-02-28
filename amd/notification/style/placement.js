define(["exports", "@ant-design/cssinjs"], function (_exports, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genNotificationPlacementStyle = function genNotificationPlacementStyle(token) {
    var componentCls = token.componentCls,
      notificationMarginEdge = token.notificationMarginEdge,
      animationMaxHeight = token.animationMaxHeight;
    var noticeCls = "".concat(componentCls, "-notice");
    var rightFadeIn = new _cssinjs.Keyframes('antNotificationFadeIn', {
      '0%': {
        transform: "translate3d(100%, 0, 0)",
        opacity: 0
      },
      '100%': {
        transform: "translate3d(0, 0, 0)",
        opacity: 1
      }
    });
    var topFadeIn = new _cssinjs.Keyframes('antNotificationTopFadeIn', {
      '0%': {
        top: -animationMaxHeight,
        opacity: 0
      },
      '100%': {
        top: 0,
        opacity: 1
      }
    });
    var bottomFadeIn = new _cssinjs.Keyframes('antNotificationBottomFadeIn', {
      '0%': {
        bottom: token.calc(animationMaxHeight).mul(-1).equal(),
        opacity: 0
      },
      '100%': {
        bottom: 0,
        opacity: 1
      }
    });
    var leftFadeIn = new _cssinjs.Keyframes('antNotificationLeftFadeIn', {
      '0%': {
        transform: "translate3d(-100%, 0, 0)",
        opacity: 0
      },
      '100%': {
        transform: "translate3d(0, 0, 0)",
        opacity: 1
      }
    });
    return _defineProperty({}, componentCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "&".concat(componentCls, "-top, &").concat(componentCls, "-bottom"), _defineProperty({
      marginInline: 0
    }, noticeCls, {
      marginInline: 'auto auto'
    })), "&".concat(componentCls, "-top"), _defineProperty({}, "".concat(componentCls, "-fade-enter").concat(componentCls, "-fade-enter-active, ").concat(componentCls, "-fade-appear").concat(componentCls, "-fade-appear-active"), {
      animationName: topFadeIn
    })), "&".concat(componentCls, "-bottom"), _defineProperty({}, "".concat(componentCls, "-fade-enter").concat(componentCls, "-fade-enter-active, ").concat(componentCls, "-fade-appear").concat(componentCls, "-fade-appear-active"), {
      animationName: bottomFadeIn
    })), "&".concat(componentCls, "-topRight, &").concat(componentCls, "-bottomRight"), _defineProperty({}, "".concat(componentCls, "-fade-enter").concat(componentCls, "-fade-enter-active, ").concat(componentCls, "-fade-appear").concat(componentCls, "-fade-appear-active"), {
      animationName: rightFadeIn
    })), "&".concat(componentCls, "-topLeft, &").concat(componentCls, "-bottomLeft"), _defineProperty(_defineProperty({
      marginRight: {
        value: 0,
        _skip_check_: true
      },
      marginLeft: {
        value: notificationMarginEdge,
        _skip_check_: true
      }
    }, noticeCls, {
      marginInlineEnd: 'auto',
      marginInlineStart: 0
    }), "".concat(componentCls, "-fade-enter").concat(componentCls, "-fade-enter-active, ").concat(componentCls, "-fade-appear").concat(componentCls, "-fade-appear-active"), {
      animationName: leftFadeIn
    })));
  };
  var _default = _exports["default"] = genNotificationPlacementStyle;
});