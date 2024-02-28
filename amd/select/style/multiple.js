define(["exports", "@ant-design/cssinjs", "antd4mx/style", "antd4mx/theme/internal"], function (_exports, _cssinjs, _style, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.genSelectionStyle = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var FIXED_ITEM_MARGIN = 2;
  var getSelectItemStyle = function getSelectItemStyle(token) {
    var multipleSelectItemHeight = token.multipleSelectItemHeight,
      selectHeight = token.selectHeight,
      lineWidth = token.lineWidth;
    var selectItemDist = token.calc(selectHeight).sub(multipleSelectItemHeight).div(2).sub(lineWidth).equal();
    return selectItemDist;
  };
  var genSelectionStyle = _exports.genSelectionStyle = function genSelectionStyle(token, suffix) {
    var componentCls = token.componentCls,
      iconCls = token.iconCls;
    var selectOverflowPrefixCls = "".concat(componentCls, "-selection-overflow");
    var selectItemHeight = token.multipleSelectItemHeight;
    var selectItemDist = getSelectItemStyle(token);
    var suffixCls = suffix ? "".concat(componentCls, "-").concat(suffix) : '';
    return _defineProperty({}, "".concat(componentCls, "-multiple").concat(suffixCls), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, selectOverflowPrefixCls, {
      position: 'relative',
      display: 'flex',
      flex: 'auto',
      flexWrap: 'wrap',
      maxWidth: '100%',
      '&-item': {
        flex: 'none',
        alignSelf: 'center',
        maxWidth: '100%',
        display: 'inline-flex'
      }
    }), "".concat(componentCls, "-selector"), _defineProperty(_defineProperty({
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      height: '100%',
      // Multiple is little different that horizontal is follow the vertical
      paddingInline: token.calc(FIXED_ITEM_MARGIN).mul(2).equal(),
      paddingBlock: token.calc(selectItemDist).sub(FIXED_ITEM_MARGIN).equal(),
      borderRadius: token.borderRadius
    }, "".concat(componentCls, "-disabled&"), {
      background: token.multipleSelectorBgDisabled,
      cursor: 'not-allowed'
    }), '&:after', {
      display: 'inline-block',
      width: 0,
      margin: "".concat((0, _cssinjs.unit)(FIXED_ITEM_MARGIN), " 0"),
      lineHeight: (0, _cssinjs.unit)(selectItemHeight),
      visibility: 'hidden',
      content: '"\\a0"'
    })), "".concat(componentCls, "-selection-item"), _defineProperty(_defineProperty(_defineProperty({
      display: 'flex',
      alignSelf: 'center',
      flex: 'none',
      boxSizing: 'border-box',
      maxWidth: '100%',
      height: selectItemHeight,
      marginTop: FIXED_ITEM_MARGIN,
      marginBottom: FIXED_ITEM_MARGIN,
      lineHeight: (0, _cssinjs.unit)(token.calc(selectItemHeight).sub(token.calc(token.lineWidth).mul(2)).equal()),
      borderRadius: token.borderRadiusSM,
      cursor: 'default',
      transition: "font-size ".concat(token.motionDurationSlow, ", line-height ").concat(token.motionDurationSlow, ", height ").concat(token.motionDurationSlow),
      marginInlineEnd: token.calc(FIXED_ITEM_MARGIN).mul(2).equal(),
      paddingInlineStart: token.paddingXS,
      paddingInlineEnd: token.calc(token.paddingXS).div(2).equal()
    }, "".concat(componentCls, "-disabled&"), {
      color: token.multipleItemColorDisabled,
      borderColor: token.multipleItemBorderColorDisabled,
      cursor: 'not-allowed'
    }), '&-content', {
      display: 'inline-block',
      marginInlineEnd: token.calc(token.paddingXS).div(2).equal(),
      overflow: 'hidden',
      whiteSpace: 'pre',
      // fix whitespace wrapping. custom tags display all whitespace within.
      textOverflow: 'ellipsis'
    }), '&-remove', Object.assign(Object.assign({}, (0, _style.resetIcon)()), _defineProperty(_defineProperty({
      display: 'inline-flex',
      alignItems: 'center',
      color: token.colorIcon,
      fontWeight: 'bold',
      fontSize: 10,
      lineHeight: 'inherit',
      cursor: 'pointer'
    }, "> ".concat(iconCls), {
      verticalAlign: '-0.2em'
    }), '&:hover', {
      color: token.colorIconHover
    })))), "".concat(selectOverflowPrefixCls, "-item + ").concat(selectOverflowPrefixCls, "-item"), _defineProperty({}, "".concat(componentCls, "-selection-search"), {
      marginInlineStart: 0
    })), "".concat(selectOverflowPrefixCls, "-item-suffix"), {
      height: '100%'
    }), "".concat(componentCls, "-selection-search"), _defineProperty(_defineProperty(_defineProperty({
      display: 'inline-flex',
      position: 'relative',
      maxWidth: '100%',
      marginInlineStart: token.calc(token.inputPaddingHorizontalBase).sub(selectItemDist).equal()
    }, "\n          &-input,\n          &-mirror\n        ", {
      height: selectItemHeight,
      fontFamily: token.fontFamily,
      lineHeight: (0, _cssinjs.unit)(selectItemHeight),
      transition: "all ".concat(token.motionDurationSlow)
    }), '&-input', {
      width: '100%',
      minWidth: 4.1 // fix search cursor missing
    }), '&-mirror', {
      position: 'absolute',
      top: 0,
      insetInlineStart: 0,
      insetInlineEnd: 'auto',
      zIndex: 999,
      whiteSpace: 'pre',
      // fix whitespace wrapping caused width calculation bug
      visibility: 'hidden'
    })), "".concat(componentCls, "-selection-placeholder"), {
      position: 'absolute',
      top: '50%',
      insetInlineStart: token.inputPaddingHorizontalBase,
      insetInlineEnd: token.inputPaddingHorizontalBase,
      transform: 'translateY(-50%)',
      transition: "all ".concat(token.motionDurationSlow)
    }));
  };
  function genSizeStyle(token, suffix) {
    var componentCls = token.componentCls;
    var suffixCls = suffix ? "".concat(componentCls, "-").concat(suffix) : '';
    var rawStyle = _defineProperty({}, "".concat(componentCls, "-multiple").concat(suffixCls), _defineProperty(_defineProperty({
      fontSize: token.fontSize
    }, "".concat(componentCls, "-selector"), _defineProperty({}, "".concat(componentCls, "-show-search&"), {
      cursor: 'text'
    })), "\n        &".concat(componentCls, "-show-arrow ").concat(componentCls, "-selector,\n        &").concat(componentCls, "-allow-clear ").concat(componentCls, "-selector\n      "), {
      paddingInlineEnd: token.calc(token.fontSizeIcon).add(token.controlPaddingHorizontal).equal()
    }));
    return [genSelectionStyle(token, suffix), rawStyle];
  }
  var genMultipleStyle = function genMultipleStyle(token) {
    var componentCls = token.componentCls;
    var smallToken = (0, _internal.mergeToken)(token, {
      selectHeight: token.controlHeightSM,
      multipleSelectItemHeight: token.controlHeightXS,
      borderRadius: token.borderRadiusSM,
      borderRadiusSM: token.borderRadiusXS
    });
    var largeToken = (0, _internal.mergeToken)(token, {
      fontSize: token.fontSizeLG,
      selectHeight: token.controlHeightLG,
      multipleSelectItemHeight: token.multipleItemHeightLG,
      borderRadius: token.borderRadiusLG,
      borderRadiusSM: token.borderRadius
    });
    return [genSizeStyle(token),
    // ======================== Small ========================
    genSizeStyle(smallToken, 'sm'), // Padding
    _defineProperty({}, "".concat(componentCls, "-multiple").concat(componentCls, "-sm"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-selection-placeholder"), {
      insetInline: token.calc(token.controlPaddingHorizontalSM).sub(token.lineWidth).equal()
    }), "".concat(componentCls, "-selection-search"), {
      marginInlineStart: 2 // Magic Number
    })),
    // ======================== Large ========================
    genSizeStyle(largeToken, 'lg')];
  };
  var _default = _exports["default"] = genMultipleStyle;
});