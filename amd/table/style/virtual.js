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
  var genVirtualStyle = function genVirtualStyle(token) {
    var componentCls = token.componentCls,
      motionDurationMid = token.motionDurationMid,
      lineWidth = token.lineWidth,
      lineType = token.lineType,
      tableBorderColor = token.tableBorderColor,
      calc = token.calc;
    var tableBorder = "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(tableBorderColor);
    var rowCellCls = "".concat(componentCls, "-expanded-row-cell");
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-tbody-virtual"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-row:not(tr)"), {
      display: 'flex',
      boxSizing: 'border-box',
      width: '100%'
    }), "".concat(componentCls, "-cell"), {
      borderBottom: tableBorder,
      transition: "background ".concat(motionDurationMid)
    }), "".concat(componentCls, "-expanded-row"), _defineProperty({}, "".concat(rowCellCls).concat(rowCellCls, "-fixed"), {
      position: 'sticky',
      insetInlineStart: 0,
      overflow: 'hidden',
      width: "calc(var(--virtual-width) - ".concat((0, _cssinjs.unit)(lineWidth), ")"),
      borderInlineEnd: 'none'
    }))), "".concat(componentCls, "-bordered"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-tbody-virtual"), _defineProperty({
      '&:after': {
        content: '""',
        insetInline: 0,
        bottom: 0,
        borderBottom: tableBorder,
        position: 'absolute'
      }
    }, "".concat(componentCls, "-cell"), _defineProperty({
      borderInlineEnd: tableBorder
    }, "&".concat(componentCls, "-cell-fix-right-first:before"), {
      content: '""',
      position: 'absolute',
      insetBlock: 0,
      insetInlineStart: calc(lineWidth).mul(-1).equal(),
      borderInlineStart: tableBorder
    }))), "&".concat(componentCls, "-virtual"), _defineProperty({}, "".concat(componentCls, "-placeholder ").concat(componentCls, "-cell"), {
      borderInlineEnd: tableBorder,
      borderBottom: tableBorder
    }))));
  };
  var _default = _exports["default"] = genVirtualStyle;
});