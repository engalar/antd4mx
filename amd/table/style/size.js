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
  var genSizeStyle = function genSizeStyle(token) {
    var componentCls = token.componentCls,
      tableExpandColumnWidth = token.tableExpandColumnWidth,
      calc = token.calc;
    var getSizeStyle = function getSizeStyle(size, paddingVertical, paddingHorizontal, fontSize) {
      return _defineProperty({}, "".concat(componentCls).concat(componentCls, "-").concat(size), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        fontSize: fontSize
      }, "\n        ".concat(componentCls, "-title,\n        ").concat(componentCls, "-footer,\n        ").concat(componentCls, "-cell,\n        ").concat(componentCls, "-thead > tr > th,\n        ").concat(componentCls, "-tbody > tr > th,\n        ").concat(componentCls, "-tbody > tr > td,\n        tfoot > tr > th,\n        tfoot > tr > td\n      "), {
        padding: "".concat((0, _cssinjs.unit)(paddingVertical), " ").concat((0, _cssinjs.unit)(paddingHorizontal))
      }), "".concat(componentCls, "-filter-trigger"), {
        marginInlineEnd: (0, _cssinjs.unit)(calc(paddingHorizontal).div(2).mul(-1).equal())
      }), "".concat(componentCls, "-expanded-row-fixed"), {
        margin: "".concat((0, _cssinjs.unit)(calc(paddingVertical).mul(-1).equal()), " ").concat((0, _cssinjs.unit)(calc(paddingHorizontal).mul(-1).equal()))
      }), "".concat(componentCls, "-tbody"), _defineProperty({}, "".concat(componentCls, "-wrapper:only-child ").concat(componentCls), {
        marginBlock: (0, _cssinjs.unit)(calc(paddingVertical).mul(-1).equal()),
        marginInline: "".concat((0, _cssinjs.unit)(calc(tableExpandColumnWidth).sub(paddingHorizontal).equal()), " ").concat((0, _cssinjs.unit)(calc(paddingHorizontal).mul(-1).equal()))
      })), "".concat(componentCls, "-selection-extra"), {
        paddingInlineStart: (0, _cssinjs.unit)(calc(paddingHorizontal).div(4).equal())
      }));
    };
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), Object.assign(Object.assign({}, getSizeStyle('middle', token.tablePaddingVerticalMiddle, token.tablePaddingHorizontalMiddle, token.tableFontSizeMiddle)), getSizeStyle('small', token.tablePaddingVerticalSmall, token.tablePaddingHorizontalSmall, token.tableFontSizeSmall)));
  };
  var _default = _exports["default"] = genSizeStyle;
});