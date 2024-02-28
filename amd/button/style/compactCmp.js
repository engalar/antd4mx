define(["exports", "antd4mx/button/style/token", "antd4mx/style/compact-item", "antd4mx/style/compact-item-vertical", "antd4mx/theme/internal", "@ant-design/cssinjs"], function (_exports, _token, _compactItem, _compactItemVertical, _internal, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genButtonCompactStyle = function genButtonCompactStyle(token) {
    var componentCls = token.componentCls,
      calc = token.calc;
    return _defineProperty({}, componentCls, _defineProperty(_defineProperty({}, "&-compact-item".concat(componentCls, "-primary"), _defineProperty({}, "&:not([disabled]) + ".concat(componentCls, "-compact-item").concat(componentCls, "-primary:not([disabled])"), {
      position: 'relative',
      '&:before': {
        position: 'absolute',
        top: calc(token.lineWidth).mul(-1).equal(),
        insetInlineStart: calc(token.lineWidth).mul(-1).equal(),
        display: 'inline-block',
        width: token.lineWidth,
        height: "calc(100% + ".concat((0, _cssinjs.unit)(token.lineWidth), " * 2)"),
        backgroundColor: token.colorPrimaryHover,
        content: '""'
      }
    })), '&-compact-vertical-item', _defineProperty({}, "&".concat(componentCls, "-primary"), _defineProperty({}, "&:not([disabled]) + ".concat(componentCls, "-compact-vertical-item").concat(componentCls, "-primary:not([disabled])"), {
      position: 'relative',
      '&:before': {
        position: 'absolute',
        top: calc(token.lineWidth).mul(-1).equal(),
        insetInlineStart: calc(token.lineWidth).mul(-1).equal(),
        display: 'inline-block',
        width: "calc(100% + ".concat((0, _cssinjs.unit)(token.lineWidth), " * 2)"),
        height: token.lineWidth,
        backgroundColor: token.colorPrimaryHover,
        content: '""'
      }
    }))));
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genSubStyleComponent)(['Button', 'compact'], function (token) {
    var buttonToken = (0, _token.prepareToken)(token);
    return [
    // Space Compact
    (0, _compactItem.genCompactItemStyle)(buttonToken), (0, _compactItemVertical.genCompactItemVerticalStyle)(buttonToken), genButtonCompactStyle(buttonToken)];
  }, _token.prepareComponentToken);
});