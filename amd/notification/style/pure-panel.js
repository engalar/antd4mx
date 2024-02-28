define(["exports", "antd4mx/theme/internal", "antd4mx/notification/style/index", "@ant-design/cssinjs"], function (_exports, _internal, _index, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var _default = _exports["default"] = (0, _internal.genSubStyleComponent)(['Notification', 'PurePanel'], function (token) {
    var noticeCls = "".concat(token.componentCls, "-notice");
    var notificationToken = (0, _index.prepareNotificationToken)(token);
    return _defineProperty({}, "".concat(noticeCls, "-pure-panel"), Object.assign(Object.assign({}, (0, _index.genNoticeStyle)(notificationToken)), {
      width: notificationToken.width,
      maxWidth: "calc(100vw - ".concat((0, _cssinjs.unit)(token.calc(notificationToken.notificationMarginEdge).mul(2).equal()), ")"),
      margin: 0
    }));
  }, _index.prepareComponentToken);
});