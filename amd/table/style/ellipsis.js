define(["exports", "antd4mx/style"], function (_exports, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genEllipsisStyle = function genEllipsisStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), _defineProperty({}, "".concat(componentCls, "-cell-ellipsis"), Object.assign(Object.assign({}, _style.textEllipsis), _defineProperty(_defineProperty({
      wordBreak: 'keep-all'
    }, "\n          &".concat(componentCls, "-cell-fix-left-last,\n          &").concat(componentCls, "-cell-fix-right-first\n        "), _defineProperty({
      overflow: 'visible'
    }, "".concat(componentCls, "-cell-content"), {
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    })), "".concat(componentCls, "-column-title"), {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      wordBreak: 'keep-all'
    }))));
  };
  var _default = _exports["default"] = genEllipsisStyle;
});