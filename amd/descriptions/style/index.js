define(["exports", "@ant-design/cssinjs", "antd4mx/style", "antd4mx/theme/internal"], function (_exports, _cssinjs, _style, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genBorderedStyle = function genBorderedStyle(token) {
    var componentCls = token.componentCls,
      labelBg = token.labelBg;
    return _defineProperty({}, "&".concat(componentCls, "-bordered"), _defineProperty(_defineProperty(_defineProperty({}, "> ".concat(componentCls, "-view"), _defineProperty({
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit),
      '> table': {
        tableLayout: 'auto',
        borderCollapse: 'collapse'
      }
    }, "".concat(componentCls, "-row"), _defineProperty(_defineProperty({
      borderBottom: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit),
      '&:last-child': {
        borderBottom: 'none'
      }
    }, "> ".concat(componentCls, "-item-label, > ").concat(componentCls, "-item-content"), {
      padding: "".concat((0, _cssinjs.unit)(token.padding), " ").concat((0, _cssinjs.unit)(token.paddingLG)),
      borderInlineEnd: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit),
      '&:last-child': {
        borderInlineEnd: 'none'
      }
    }), "> ".concat(componentCls, "-item-label"), {
      color: token.colorTextSecondary,
      backgroundColor: labelBg,
      '&::after': {
        display: 'none'
      }
    }))), "&".concat(componentCls, "-middle"), _defineProperty({}, "".concat(componentCls, "-row"), _defineProperty({}, "> ".concat(componentCls, "-item-label, > ").concat(componentCls, "-item-content"), {
      padding: "".concat((0, _cssinjs.unit)(token.paddingSM), " ").concat((0, _cssinjs.unit)(token.paddingLG))
    }))), "&".concat(componentCls, "-small"), _defineProperty({}, "".concat(componentCls, "-row"), _defineProperty({}, "> ".concat(componentCls, "-item-label, > ").concat(componentCls, "-item-content"), {
      padding: "".concat((0, _cssinjs.unit)(token.paddingXS), " ").concat((0, _cssinjs.unit)(token.padding))
    }))));
  };
  var genDescriptionStyles = function genDescriptionStyles(token) {
    var _Object$assign;
    var componentCls = token.componentCls,
      extraColor = token.extraColor,
      itemPaddingBottom = token.itemPaddingBottom,
      colonMarginRight = token.colonMarginRight,
      colonMarginLeft = token.colonMarginLeft,
      titleMarginBottom = token.titleMarginBottom;
    return _defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), genBorderedStyle(token)), (_Object$assign = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Object$assign, "&-rtl", {
      direction: 'rtl'
    }), "".concat(componentCls, "-header"), {
      display: 'flex',
      alignItems: 'center',
      marginBottom: titleMarginBottom
    }), "".concat(componentCls, "-title"), Object.assign(Object.assign({}, _style.textEllipsis), {
      flex: 'auto',
      color: token.titleColor,
      fontWeight: token.fontWeightStrong,
      fontSize: token.fontSizeLG,
      lineHeight: token.lineHeightLG
    })), "".concat(componentCls, "-extra"), {
      marginInlineStart: 'auto',
      color: extraColor,
      fontSize: token.fontSize
    }), "".concat(componentCls, "-view"), {
      width: '100%',
      borderRadius: token.borderRadiusLG,
      table: {
        width: '100%',
        tableLayout: 'fixed'
      }
    }), "".concat(componentCls, "-row"), {
      '> th, > td': {
        paddingBottom: itemPaddingBottom
      },
      '&:last-child': {
        borderBottom: 'none'
      }
    }), "".concat(componentCls, "-item-label"), _defineProperty({
      color: token.colorTextTertiary,
      fontWeight: 'normal',
      fontSize: token.fontSize,
      lineHeight: token.lineHeight,
      textAlign: "start",
      '&::after': {
        content: '":"',
        position: 'relative',
        top: -0.5,
        // magic for position
        marginInline: "".concat((0, _cssinjs.unit)(colonMarginLeft), " ").concat((0, _cssinjs.unit)(colonMarginRight))
      }
    }, "&".concat(componentCls, "-item-no-colon::after"), {
      content: '""'
    })), "".concat(componentCls, "-item-no-label"), {
      '&::after': {
        margin: 0,
        content: '""'
      }
    }), "".concat(componentCls, "-item-content"), {
      display: 'table-cell',
      flex: 1,
      color: token.contentColor,
      fontSize: token.fontSize,
      lineHeight: token.lineHeight,
      wordBreak: 'break-word',
      overflowWrap: 'break-word'
    }), "".concat(componentCls, "-item"), {
      paddingBottom: 0,
      verticalAlign: 'top',
      '&-container': _defineProperty(_defineProperty({
        display: 'flex'
      }, "".concat(componentCls, "-item-label"), {
        display: 'inline-flex',
        alignItems: 'baseline'
      }), "".concat(componentCls, "-item-content"), {
        display: 'inline-flex',
        alignItems: 'baseline'
      })
    }), _defineProperty(_defineProperty(_Object$assign, '&-middle', _defineProperty({}, "".concat(componentCls, "-row"), {
      '> th, > td': {
        paddingBottom: token.paddingSM
      }
    })), '&-small', _defineProperty({}, "".concat(componentCls, "-row"), {
      '> th, > td': {
        paddingBottom: token.paddingXS
      }
    })))));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      labelBg: token.colorFillAlter,
      titleColor: token.colorText,
      titleMarginBottom: token.fontSizeSM * token.lineHeightSM,
      itemPaddingBottom: token.padding,
      colonMarginRight: token.marginXS,
      colonMarginLeft: token.marginXXS / 2,
      contentColor: token.colorText,
      extraColor: token.colorText
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Descriptions', function (token) {
    var descriptionToken = (0, _internal.mergeToken)(token, {});
    return genDescriptionStyles(descriptionToken);
  }, prepareComponentToken);
});