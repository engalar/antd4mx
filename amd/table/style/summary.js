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
  var genSummaryStyle = function genSummaryStyle(token) {
    var componentCls = token.componentCls,
      lineWidth = token.lineWidth,
      tableBorderColor = token.tableBorderColor,
      calc = token.calc;
    var tableBorder = "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(token.lineType, " ").concat(tableBorderColor);
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-summary"), {
      position: 'relative',
      zIndex: token.zIndexTableFixed,
      background: token.tableBg,
      '> tr': {
        '> th, > td': {
          borderBottom: tableBorder
        }
      }
    }), "div".concat(componentCls, "-summary"), {
      boxShadow: "0 ".concat((0, _cssinjs.unit)(calc(lineWidth).mul(-1).equal()), " 0 ").concat(tableBorderColor)
    }));
  };
  var _default = _exports["default"] = genSummaryStyle;
});