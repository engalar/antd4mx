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
  var genBorderedStyle = function genBorderedStyle(token) {
    var componentCls = token.componentCls,
      lineWidth = token.lineWidth,
      lineType = token.lineType,
      tableBorderColor = token.tableBorderColor,
      tableHeaderBg = token.tableHeaderBg,
      tablePaddingVertical = token.tablePaddingVertical,
      tablePaddingHorizontal = token.tablePaddingHorizontal,
      calc = token.calc;
    var tableBorder = "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(tableBorderColor);
    var getSizeBorderStyle = function getSizeBorderStyle(size, paddingVertical, paddingHorizontal) {
      return _defineProperty({}, "&".concat(componentCls, "-").concat(size), _defineProperty({}, "> ".concat(componentCls, "-container"), _defineProperty({}, "> ".concat(componentCls, "-content, > ").concat(componentCls, "-body"), _defineProperty({}, "\n            > table > tbody > tr > th,\n            > table > tbody > tr > td\n          ", _defineProperty({}, "> ".concat(componentCls, "-expanded-row-fixed"), {
        margin: "".concat((0, _cssinjs.unit)(calc(paddingVertical).mul(-1).equal()), "\n              ").concat((0, _cssinjs.unit)(calc(calc(paddingHorizontal).add(lineWidth)).mul(-1).equal()))
      })))));
    };
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls).concat(componentCls, "-bordered"), Object.assign(Object.assign(Object.assign(_defineProperty(_defineProperty(_defineProperty({}, "> ".concat(componentCls, "-title"), {
      border: tableBorder,
      borderBottom: 0
    }), "> ".concat(componentCls, "-container"), _defineProperty({
      borderInlineStart: tableBorder,
      borderTop: tableBorder
    }, "\n            > ".concat(componentCls, "-content,\n            > ").concat(componentCls, "-header,\n            > ").concat(componentCls, "-body,\n            > ").concat(componentCls, "-summary\n          "), {
      '> table': _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "\n                > thead > tr > th,\n                > thead > tr > td,\n                > tbody > tr > th,\n                > tbody > tr > td,\n                > tfoot > tr > th,\n                > tfoot > tr > td\n              ", {
        borderInlineEnd: tableBorder
      }), '> thead', {
        '> tr:not(:last-child) > th': {
          borderBottom: tableBorder
        },
        '> tr > th::before': {
          backgroundColor: 'transparent !important'
        }
      }), "\n                > thead > tr,\n                > tbody > tr,\n                > tfoot > tr\n              ", _defineProperty({}, "> ".concat(componentCls, "-cell-fix-right-first::after"), {
        borderInlineEnd: tableBorder
      })), "\n                > tbody > tr > th,\n                > tbody > tr > td\n              ", _defineProperty({}, "> ".concat(componentCls, "-expanded-row-fixed"), {
        margin: "".concat((0, _cssinjs.unit)(calc(tablePaddingVertical).mul(-1).equal()), " ").concat((0, _cssinjs.unit)(calc(calc(tablePaddingHorizontal).add(lineWidth)).mul(-1).equal())),
        '&::after': {
          position: 'absolute',
          top: 0,
          insetInlineEnd: lineWidth,
          bottom: 0,
          borderInlineEnd: tableBorder,
          content: '""'
        }
      }))
    })), "&".concat(componentCls, "-scroll-horizontal"), _defineProperty({}, "> ".concat(componentCls, "-container > ").concat(componentCls, "-body"), {
      '> table > tbody': _defineProperty({}, "\n                > tr".concat(componentCls, "-expanded-row,\n                > tr").concat(componentCls, "-placeholder\n              "), _defineProperty({}, "> th, > td", {
        borderInlineEnd: 0
      }))
    })), getSizeBorderStyle('middle', token.tablePaddingVerticalMiddle, token.tablePaddingHorizontalMiddle)), getSizeBorderStyle('small', token.tablePaddingVerticalSmall, token.tablePaddingHorizontalSmall)), _defineProperty({}, "> ".concat(componentCls, "-footer"), {
      border: tableBorder,
      borderTop: 0
    }))), "".concat(componentCls, "-cell"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-container:first-child"), {
      // :first-child to avoid the case when bordered and title is set
      borderTop: 0
    }), '&-scrollbar:not([rowspan])', {
      boxShadow: "0 ".concat((0, _cssinjs.unit)(lineWidth), " 0 ").concat((0, _cssinjs.unit)(lineWidth), " ").concat(tableHeaderBg)
    })), "".concat(componentCls, "-bordered ").concat(componentCls, "-cell-scrollbar"), {
      borderInlineEnd: tableBorder
    }));
  };
  var _default = _exports["default"] = genBorderedStyle;
});