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
  // ============================== Shared ==============================
  var genSharedDividerStyle = function genSharedDividerStyle(token) {
    var componentCls = token.componentCls,
      sizePaddingEdgeHorizontal = token.sizePaddingEdgeHorizontal,
      colorSplit = token.colorSplit,
      lineWidth = token.lineWidth,
      textPaddingInline = token.textPaddingInline,
      orientationMargin = token.orientationMargin,
      verticalMarginInline = token.verticalMarginInline;
    return _defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      borderBlockStart: "".concat((0, _cssinjs.unit)(lineWidth), " solid ").concat(colorSplit),
      // vertical
      '&-vertical': {
        position: 'relative',
        top: '-0.06em',
        display: 'inline-block',
        height: '0.9em',
        marginInline: verticalMarginInline,
        marginBlock: 0,
        verticalAlign: 'middle',
        borderTop: 0,
        borderInlineStart: "".concat((0, _cssinjs.unit)(lineWidth), " solid ").concat(colorSplit)
      },
      '&-horizontal': {
        display: 'flex',
        clear: 'both',
        width: '100%',
        minWidth: '100%',
        // Fix https://github.com/ant-design/ant-design/issues/10914
        margin: "".concat((0, _cssinjs.unit)(token.dividerHorizontalGutterMargin), " 0")
      }
    }, "&-horizontal".concat(componentCls, "-with-text"), {
      display: 'flex',
      alignItems: 'center',
      margin: "".concat((0, _cssinjs.unit)(token.dividerHorizontalWithTextGutterMargin), " 0"),
      color: token.colorTextHeading,
      fontWeight: 500,
      fontSize: token.fontSizeLG,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      borderBlockStart: "0 ".concat(colorSplit),
      '&::before, &::after': {
        position: 'relative',
        width: '50%',
        borderBlockStart: "".concat((0, _cssinjs.unit)(lineWidth), " solid transparent"),
        // Chrome not accept `inherit` in `border-top`
        borderBlockStartColor: 'inherit',
        borderBlockEnd: 0,
        transform: 'translateY(50%)',
        content: "''"
      }
    }), "&-horizontal".concat(componentCls, "-with-text-left"), {
      '&::before': {
        width: "calc(".concat(orientationMargin, " * 100%)")
      },
      '&::after': {
        width: "calc(100% - ".concat(orientationMargin, " * 100%)")
      }
    }), "&-horizontal".concat(componentCls, "-with-text-right"), {
      '&::before': {
        width: "calc(100% - ".concat(orientationMargin, " * 100%)")
      },
      '&::after': {
        width: "calc(".concat(orientationMargin, " * 100%)")
      }
    }), "".concat(componentCls, "-inner-text"), {
      display: 'inline-block',
      paddingBlock: 0,
      paddingInline: textPaddingInline
    }), '&-dashed', {
      background: 'none',
      borderColor: colorSplit,
      borderStyle: 'dashed',
      borderWidth: "".concat((0, _cssinjs.unit)(lineWidth), " 0 0")
    }), "&-horizontal".concat(componentCls, "-with-text").concat(componentCls, "-dashed"), {
      '&::before, &::after': {
        borderStyle: 'dashed none none'
      }
    }), "&-vertical".concat(componentCls, "-dashed"), {
      borderInlineStartWidth: lineWidth,
      borderInlineEnd: 0,
      borderBlockStart: 0,
      borderBlockEnd: 0
    }), "&-plain".concat(componentCls, "-with-text"), {
      color: token.colorText,
      fontWeight: 'normal',
      fontSize: token.fontSize
    }), "&-horizontal".concat(componentCls, "-with-text-left").concat(componentCls, "-no-default-orientation-margin-left"), _defineProperty({
      '&::before': {
        width: 0
      },
      '&::after': {
        width: '100%'
      }
    }, "".concat(componentCls, "-inner-text"), {
      paddingInlineStart: sizePaddingEdgeHorizontal
    })), "&-horizontal".concat(componentCls, "-with-text-right").concat(componentCls, "-no-default-orientation-margin-right"), _defineProperty({
      '&::before': {
        width: '100%'
      },
      '&::after': {
        width: 0
      }
    }, "".concat(componentCls, "-inner-text"), {
      paddingInlineEnd: sizePaddingEdgeHorizontal
    }))));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      textPaddingInline: '1em',
      orientationMargin: 0.05,
      verticalMarginInline: token.marginXS
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Divider', function (token) {
    var dividerToken = (0, _internal.mergeToken)(token, {
      dividerHorizontalWithTextGutterMargin: token.margin,
      dividerHorizontalGutterMargin: token.marginLG,
      sizePaddingEdgeHorizontal: 0
    });
    return [genSharedDividerStyle(dividerToken)];
  }, prepareComponentToken, {
    unitless: {
      orientationMargin: true
    }
  });
});