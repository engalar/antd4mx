define(["exports", "@ant-design/cssinjs", "antd4mx/style/index", "antd4mx/theme/internal"], function (_exports, _cssinjs, _index, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genTimelineStyle = function genTimelineStyle(token) {
    var componentCls = token.componentCls,
      calc = token.calc;
    return _defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }, "".concat(componentCls, "-item"), {
      position: 'relative',
      margin: 0,
      paddingBottom: token.itemPaddingBottom,
      fontSize: token.fontSize,
      listStyle: 'none',
      '&-tail': {
        position: 'absolute',
        insetBlockStart: token.itemHeadSize,
        insetInlineStart: calc(calc(token.itemHeadSize).sub(token.tailWidth)).div(2).equal(),
        height: "calc(100% - ".concat((0, _cssinjs.unit)(token.itemHeadSize), ")"),
        borderInlineStart: "".concat((0, _cssinjs.unit)(token.tailWidth), " ").concat(token.lineType, " ").concat(token.tailColor)
      },
      '&-pending': _defineProperty(_defineProperty({}, "".concat(componentCls, "-item-head"), {
        fontSize: token.fontSizeSM,
        backgroundColor: 'transparent'
      }), "".concat(componentCls, "-item-tail"), {
        display: 'none'
      }),
      '&-head': {
        position: 'absolute',
        width: token.itemHeadSize,
        height: token.itemHeadSize,
        backgroundColor: token.dotBg,
        border: "".concat((0, _cssinjs.unit)(token.dotBorderWidth), " ").concat(token.lineType, " transparent"),
        borderRadius: '50%',
        '&-blue': {
          color: token.colorPrimary,
          borderColor: token.colorPrimary
        },
        '&-red': {
          color: token.colorError,
          borderColor: token.colorError
        },
        '&-green': {
          color: token.colorSuccess,
          borderColor: token.colorSuccess
        },
        '&-gray': {
          color: token.colorTextDisabled,
          borderColor: token.colorTextDisabled
        }
      },
      '&-head-custom': {
        position: 'absolute',
        insetBlockStart: calc(token.itemHeadSize).div(2).equal(),
        insetInlineStart: calc(token.itemHeadSize).div(2).equal(),
        width: 'auto',
        height: 'auto',
        marginBlockStart: 0,
        paddingBlock: token.customHeadPaddingVertical,
        lineHeight: 1,
        textAlign: 'center',
        border: 0,
        borderRadius: 0,
        transform: "translate(-50%, -50%)"
      },
      '&-content': {
        position: 'relative',
        insetBlockStart: calc(calc(token.fontSize).mul(token.lineHeight).sub(token.fontSize)).mul(-1).add(token.lineWidth).equal(),
        marginInlineStart: calc(token.margin).add(token.itemHeadSize).equal(),
        marginInlineEnd: 0,
        marginBlockStart: 0,
        marginBlockEnd: 0,
        wordBreak: 'break-word'
      },
      '&-last': _defineProperty(_defineProperty({}, "> ".concat(componentCls, "-item-tail"), {
        display: 'none'
      }), "> ".concat(componentCls, "-item-content"), {
        minHeight: calc(token.controlHeightLG).mul(1.2).equal()
      })
    }), "&".concat(componentCls, "-alternate,\n        &").concat(componentCls, "-right,\n        &").concat(componentCls, "-label"), _defineProperty({}, "".concat(componentCls, "-item"), {
      '&-tail, &-head, &-head-custom': {
        insetInlineStart: '50%'
      },
      '&-head': {
        marginInlineStart: calc(token.marginXXS).mul(-1).equal(),
        '&-custom': {
          marginInlineStart: calc(token.tailWidth).div(2).equal()
        }
      },
      '&-left': _defineProperty({}, "".concat(componentCls, "-item-content"), {
        insetInlineStart: "calc(50% - ".concat((0, _cssinjs.unit)(token.marginXXS), ")"),
        width: "calc(50% - ".concat((0, _cssinjs.unit)(token.marginSM), ")"),
        textAlign: 'start'
      }),
      '&-right': _defineProperty({}, "".concat(componentCls, "-item-content"), {
        width: "calc(50% - ".concat((0, _cssinjs.unit)(token.marginSM), ")"),
        margin: 0,
        textAlign: 'end'
      })
    })), "&".concat(componentCls, "-right"), _defineProperty({}, "".concat(componentCls, "-item-right"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-item-tail,\n            ").concat(componentCls, "-item-head,\n            ").concat(componentCls, "-item-head-custom"), {
      insetInlineStart: "calc(100% - ".concat((0, _cssinjs.unit)(calc(calc(token.itemHeadSize).add(token.tailWidth)).div(2).equal()), ")")
    }), "".concat(componentCls, "-item-content"), {
      width: "calc(100% - ".concat((0, _cssinjs.unit)(calc(token.itemHeadSize).add(token.marginXS).equal()), ")")
    }))), "&".concat(componentCls, "-pending\n        ").concat(componentCls, "-item-last\n        ").concat(componentCls, "-item-tail"), {
      display: 'block',
      height: "calc(100% - ".concat((0, _cssinjs.unit)(token.margin), ")"),
      borderInlineStart: "".concat((0, _cssinjs.unit)(token.tailWidth), " dotted ").concat(token.tailColor)
    }), "&".concat(componentCls, "-reverse\n        ").concat(componentCls, "-item-last\n        ").concat(componentCls, "-item-tail"), {
      display: 'none'
    }), "&".concat(componentCls, "-reverse ").concat(componentCls, "-item-pending"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-item-tail"), {
      insetBlockStart: token.margin,
      display: 'block',
      height: "calc(100% - ".concat((0, _cssinjs.unit)(token.margin), ")"),
      borderInlineStart: "".concat((0, _cssinjs.unit)(token.tailWidth), " dotted ").concat(token.tailColor)
    }), "".concat(componentCls, "-item-content"), {
      minHeight: calc(token.controlHeightLG).mul(1.2).equal()
    })), "&".concat(componentCls, "-label"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-item-label"), {
      position: 'absolute',
      insetBlockStart: calc(calc(token.fontSize).mul(token.lineHeight).sub(token.fontSize)).mul(-1).add(token.tailWidth).equal(),
      width: "calc(50% - ".concat((0, _cssinjs.unit)(token.marginSM), ")"),
      textAlign: 'end'
    }), "".concat(componentCls, "-item-right"), _defineProperty({}, "".concat(componentCls, "-item-label"), {
      insetInlineStart: "calc(50% + ".concat((0, _cssinjs.unit)(token.marginSM), ")"),
      width: "calc(50% - ".concat((0, _cssinjs.unit)(token.marginSM), ")"),
      textAlign: 'start'
    }))), '&-rtl', _defineProperty({
      direction: 'rtl'
    }, "".concat(componentCls, "-item-head-custom"), {
      transform: "translate(50%, -50%)"
    }))));
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      tailColor: token.colorSplit,
      tailWidth: token.lineWidthBold,
      dotBorderWidth: token.wireframe ? token.lineWidthBold : token.lineWidth * 3,
      dotBg: token.colorBgContainer,
      itemPaddingBottom: token.padding * 1.25
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Timeline', function (token) {
    var timeLineToken = (0, _internal.mergeToken)(token, {
      itemHeadSize: 10,
      customHeadPaddingVertical: token.paddingXXS,
      paddingInlineEnd: 2
    });
    return [genTimelineStyle(timeLineToken)];
  }, prepareComponentToken);
});