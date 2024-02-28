define(["exports", "antd4mx/notification/interface"], function (_exports, _interface) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var placementAlignProperty = {
    topLeft: 'left',
    topRight: 'right',
    bottomLeft: 'left',
    bottomRight: 'right',
    top: 'left',
    bottom: 'left'
  };
  var genPlacementStackStyle = function genPlacementStackStyle(token, placement) {
    var componentCls = token.componentCls;
    return _defineProperty({}, "".concat(componentCls, "-").concat(placement), _defineProperty({}, "&".concat(componentCls, "-stack > ").concat(componentCls, "-notice-wrapper"), _defineProperty(_defineProperty({}, placement.startsWith('top') ? 'top' : 'bottom', 0), placementAlignProperty[placement], {
      value: 0,
      _skip_check_: true
    })));
  };
  var genStackChildrenStyle = function genStackChildrenStyle(token) {
    var childrenStyle = {};
    for (var i = 1; i < token.notificationStackLayer; i++) {
      childrenStyle["&:nth-last-child(".concat(i + 1, ")")] = _defineProperty({
        overflow: 'hidden'
      }, "& > ".concat(token.componentCls, "-notice"), {
        opacity: 0,
        transition: "opacity ".concat(token.motionDurationMid)
      });
    }
    return Object.assign(_defineProperty({}, "&:not(:nth-last-child(-n+".concat(token.notificationStackLayer, "))"), {
      opacity: 0,
      overflow: 'hidden',
      color: 'transparent',
      pointerEvents: 'none'
    }), childrenStyle);
  };
  var genStackedNoticeStyle = function genStackedNoticeStyle(token) {
    var childrenStyle = {};
    for (var i = 1; i < token.notificationStackLayer; i++) {
      childrenStyle["&:nth-last-child(".concat(i + 1, ")")] = {
        background: token.colorBgBlur,
        backdropFilter: 'blur(10px)',
        '-webkit-backdrop-filter': 'blur(10px)'
      };
    }
    return Object.assign({}, childrenStyle);
  };
  var genStackStyle = function genStackStyle(token) {
    var componentCls = token.componentCls;
    return Object.assign(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-stack"), _defineProperty({}, "& > ".concat(componentCls, "-notice-wrapper"), Object.assign({
      transition: "all ".concat(token.motionDurationSlow, ", backdrop-filter 0s"),
      position: 'absolute'
    }, genStackChildrenStyle(token)))), "".concat(componentCls, "-stack:not(").concat(componentCls, "-stack-expanded)"), _defineProperty({}, "& > ".concat(componentCls, "-notice-wrapper"), Object.assign({}, genStackedNoticeStyle(token)))), "".concat(componentCls, "-stack").concat(componentCls, "-stack-expanded"), _defineProperty({}, "& > ".concat(componentCls, "-notice-wrapper"), {
      '&:not(:nth-last-child(-n + 1))': _defineProperty({
        opacity: 1,
        overflow: 'unset',
        color: 'inherit',
        pointerEvents: 'auto'
      }, "& > ".concat(token.componentCls, "-notice"), {
        opacity: 1
      }),
      '&:after': {
        content: '""',
        position: 'absolute',
        height: token.margin,
        width: '100%',
        insetInline: 0,
        bottom: token.calc(token.margin).mul(-1).equal(),
        background: 'transparent',
        pointerEvents: 'auto'
      }
    })), _interface.NotificationPlacements.map(function (placement) {
      return genPlacementStackStyle(token, placement);
    }).reduce(function (acc, cur) {
      return Object.assign(Object.assign({}, acc), cur);
    }, {}));
  };
  var _default = _exports["default"] = genStackStyle;
});