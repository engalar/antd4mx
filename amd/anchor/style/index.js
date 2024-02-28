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
  // ============================== Shared ==============================
  var genSharedAnchorStyle = function genSharedAnchorStyle(token) {
    var componentCls = token.componentCls,
      holderOffsetBlock = token.holderOffsetBlock,
      motionDurationSlow = token.motionDurationSlow,
      lineWidthBold = token.lineWidthBold,
      colorPrimary = token.colorPrimary,
      lineType = token.lineType,
      colorSplit = token.colorSplit,
      calc = token.calc;
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), _defineProperty(_defineProperty(_defineProperty({
      marginBlockStart: calc(holderOffsetBlock).mul(-1).equal(),
      paddingBlockStart: holderOffsetBlock
    }, componentCls, Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty({
      position: 'relative',
      paddingInlineStart: lineWidthBold
    }, "".concat(componentCls, "-link"), _defineProperty(_defineProperty({
      paddingBlock: token.linkPaddingBlock,
      paddingInline: "".concat((0, _cssinjs.unit)(token.linkPaddingInlineStart), " 0"),
      '&-title': Object.assign(Object.assign({}, _style.textEllipsis), {
        position: 'relative',
        display: 'block',
        marginBlockEnd: token.anchorTitleBlock,
        color: token.colorText,
        transition: "all ".concat(token.motionDurationSlow),
        '&:only-child': {
          marginBlockEnd: 0
        }
      })
    }, "&-active > ".concat(componentCls, "-link-title"), {
      color: token.colorPrimary
    }), "".concat(componentCls, "-link"), {
      paddingBlock: token.anchorPaddingBlockSecondary
    })))), "&:not(".concat(componentCls, "-wrapper-horizontal)"), _defineProperty({}, componentCls, _defineProperty({
      '&::before': {
        position: 'absolute',
        insetInlineStart: 0,
        top: 0,
        height: '100%',
        borderInlineStart: "".concat((0, _cssinjs.unit)(lineWidthBold), " ").concat(lineType, " ").concat(colorSplit),
        content: '" "'
      }
    }, "".concat(componentCls, "-ink"), _defineProperty({
      position: 'absolute',
      insetInlineStart: 0,
      display: 'none',
      transform: 'translateY(-50%)',
      transition: "top ".concat(motionDurationSlow, " ease-in-out"),
      width: lineWidthBold,
      backgroundColor: colorPrimary
    }, "&".concat(componentCls, "-ink-visible"), {
      display: 'inline-block'
    })))), "".concat(componentCls, "-fixed ").concat(componentCls, "-ink ").concat(componentCls, "-ink"), {
      display: 'none'
    }));
  };
  var genSharedAnchorHorizontalStyle = function genSharedAnchorHorizontalStyle(token) {
    var componentCls = token.componentCls,
      motionDurationSlow = token.motionDurationSlow,
      lineWidthBold = token.lineWidthBold,
      colorPrimary = token.colorPrimary;
    return _defineProperty({}, "".concat(componentCls, "-wrapper-horizontal"), _defineProperty({
      position: 'relative',
      '&::before': {
        position: 'absolute',
        left: {
          _skip_check_: true,
          value: 0
        },
        right: {
          _skip_check_: true,
          value: 0
        },
        bottom: 0,
        borderBottom: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit),
        content: '" "'
      }
    }, componentCls, _defineProperty(_defineProperty({
      overflowX: 'scroll',
      position: 'relative',
      display: 'flex',
      scrollbarWidth: 'none' /* Firefox */,
      '&::-webkit-scrollbar': {
        display: 'none' /* Safari and Chrome */
      }
    }, "".concat(componentCls, "-link:first-of-type"), {
      paddingInline: 0
    }), "".concat(componentCls, "-ink"), {
      position: 'absolute',
      bottom: 0,
      transition: "left ".concat(motionDurationSlow, " ease-in-out, width ").concat(motionDurationSlow, " ease-in-out"),
      height: lineWidthBold,
      backgroundColor: colorPrimary
    })));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      linkPaddingBlock: token.paddingXXS,
      linkPaddingInlineStart: token.padding
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Anchor', function (token) {
    var fontSize = token.fontSize,
      fontSizeLG = token.fontSizeLG,
      paddingXXS = token.paddingXXS,
      calc = token.calc;
    var anchorToken = (0, _internal.mergeToken)(token, {
      holderOffsetBlock: paddingXXS,
      anchorPaddingBlockSecondary: calc(paddingXXS).div(2).equal(),
      anchorTitleBlock: calc(fontSize).div(14).mul(3).equal(),
      anchorBallSize: calc(fontSizeLG).div(2).equal()
    });
    return [genSharedAnchorStyle(anchorToken), genSharedAnchorHorizontalStyle(anchorToken)];
  }, prepareComponentToken);
});