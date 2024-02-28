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
    var listBorderedCls = token.listBorderedCls,
      componentCls = token.componentCls,
      paddingLG = token.paddingLG,
      margin = token.margin,
      itemPaddingSM = token.itemPaddingSM,
      itemPaddingLG = token.itemPaddingLG,
      marginLG = token.marginLG,
      borderRadiusLG = token.borderRadiusLG;
    return _defineProperty(_defineProperty(_defineProperty({}, "".concat(listBorderedCls), _defineProperty(_defineProperty({
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder),
      borderRadius: borderRadiusLG
    }, "".concat(componentCls, "-header,").concat(componentCls, "-footer,").concat(componentCls, "-item"), {
      paddingInline: paddingLG
    }), "".concat(componentCls, "-pagination"), {
      margin: "".concat((0, _cssinjs.unit)(margin), " ").concat((0, _cssinjs.unit)(marginLG))
    })), "".concat(listBorderedCls).concat(componentCls, "-sm"), _defineProperty({}, "".concat(componentCls, "-item,").concat(componentCls, "-header,").concat(componentCls, "-footer"), {
      padding: itemPaddingSM
    })), "".concat(listBorderedCls).concat(componentCls, "-lg"), _defineProperty({}, "".concat(componentCls, "-item,").concat(componentCls, "-header,").concat(componentCls, "-footer"), {
      padding: itemPaddingLG
    }));
  };
  var genResponsiveStyle = function genResponsiveStyle(token) {
    var componentCls = token.componentCls,
      screenSM = token.screenSM,
      screenMD = token.screenMD,
      marginLG = token.marginLG,
      marginSM = token.marginSM,
      margin = token.margin;
    return _defineProperty(_defineProperty({}, "@media screen and (max-width:".concat(screenMD, "px)"), _defineProperty(_defineProperty({}, "".concat(componentCls), _defineProperty({}, "".concat(componentCls, "-item"), _defineProperty({}, "".concat(componentCls, "-item-action"), {
      marginInlineStart: marginLG
    }))), "".concat(componentCls, "-vertical"), _defineProperty({}, "".concat(componentCls, "-item"), _defineProperty({}, "".concat(componentCls, "-item-extra"), {
      marginInlineStart: marginLG
    })))), "@media screen and (max-width: ".concat(screenSM, "px)"), _defineProperty(_defineProperty({}, "".concat(componentCls), _defineProperty({}, "".concat(componentCls, "-item"), _defineProperty({
      flexWrap: 'wrap'
    }, "".concat(componentCls, "-action"), {
      marginInlineStart: marginSM
    }))), "".concat(componentCls, "-vertical"), _defineProperty({}, "".concat(componentCls, "-item"), _defineProperty(_defineProperty({
      flexWrap: 'wrap-reverse'
    }, "".concat(componentCls, "-item-main"), {
      minWidth: token.contentWidth
    }), "".concat(componentCls, "-item-extra"), {
      margin: "auto auto ".concat((0, _cssinjs.unit)(margin))
    }))));
  };
  // =============================== Base ===============================
  var genBaseStyle = function genBaseStyle(token) {
    var _ref3;
    var componentCls = token.componentCls,
      antCls = token.antCls,
      controlHeight = token.controlHeight,
      minHeight = token.minHeight,
      paddingSM = token.paddingSM,
      marginLG = token.marginLG,
      padding = token.padding,
      itemPadding = token.itemPadding,
      colorPrimary = token.colorPrimary,
      itemPaddingSM = token.itemPaddingSM,
      itemPaddingLG = token.itemPaddingLG,
      paddingXS = token.paddingXS,
      margin = token.margin,
      colorText = token.colorText,
      colorTextDescription = token.colorTextDescription,
      motionDurationSlow = token.motionDurationSlow,
      lineWidth = token.lineWidth,
      headerBg = token.headerBg,
      footerBg = token.footerBg,
      emptyTextPadding = token.emptyTextPadding,
      metaMarginBottom = token.metaMarginBottom,
      avatarMarginRight = token.avatarMarginRight,
      titleMarginBottom = token.titleMarginBottom,
      descriptionFontSize = token.descriptionFontSize;
    var alignCls = {};
    ['start', 'center', 'end'].forEach(function (item) {
      alignCls["&-align-".concat(item)] = {
        textAlign: item
      };
    });
    return _ref3 = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref3, "".concat(componentCls), Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      '*': {
        outline: 'none'
      }
    }, "".concat(componentCls, "-header"), {
      background: headerBg
    }), "".concat(componentCls, "-footer"), {
      background: footerBg
    }), "".concat(componentCls, "-header, ").concat(componentCls, "-footer"), {
      paddingBlock: paddingSM
    }), "".concat(componentCls, "-pagination"), Object.assign(Object.assign({
      marginBlockStart: marginLG
    }, alignCls), _defineProperty({}, "".concat(antCls, "-pagination-options"), {
      textAlign: 'start'
    }))), "".concat(componentCls, "-spin"), {
      minHeight: minHeight,
      textAlign: 'center'
    }), "".concat(componentCls, "-items"), {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }), "".concat(componentCls, "-item"), _defineProperty(_defineProperty({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: itemPadding,
      color: colorText
    }, "".concat(componentCls, "-item-meta"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      display: 'flex',
      flex: 1,
      alignItems: 'flex-start',
      maxWidth: '100%'
    }, "".concat(componentCls, "-item-meta-avatar"), {
      marginInlineEnd: avatarMarginRight
    }), "".concat(componentCls, "-item-meta-content"), {
      flex: '1 0',
      width: 0,
      color: colorText
    }), "".concat(componentCls, "-item-meta-title"), {
      margin: "0 0 ".concat((0, _cssinjs.unit)(token.marginXXS), " 0"),
      color: colorText,
      fontSize: token.fontSize,
      lineHeight: token.lineHeight,
      '> a': _defineProperty({
        color: colorText,
        transition: "all ".concat(motionDurationSlow)
      }, "&:hover", {
        color: colorPrimary
      })
    }), "".concat(componentCls, "-item-meta-description"), {
      color: colorTextDescription,
      fontSize: descriptionFontSize,
      lineHeight: token.lineHeight
    })), "".concat(componentCls, "-item-action"), _defineProperty(_defineProperty({
      flex: '0 0 auto',
      marginInlineStart: token.marginXXL,
      padding: 0,
      fontSize: 0,
      listStyle: 'none'
    }, "& > li", _defineProperty({
      position: 'relative',
      display: 'inline-block',
      padding: "0 ".concat((0, _cssinjs.unit)(paddingXS)),
      color: colorTextDescription,
      fontSize: token.fontSize,
      lineHeight: token.lineHeight,
      textAlign: 'center'
    }, "&:first-child", {
      paddingInlineStart: 0
    })), "".concat(componentCls, "-item-action-split"), {
      position: 'absolute',
      insetBlockStart: '50%',
      insetInlineEnd: 0,
      width: lineWidth,
      height: token.calc(token.fontHeight).sub(token.calc(token.marginXXS).mul(2)).equal(),
      transform: 'translateY(-50%)',
      backgroundColor: token.colorSplit
    }))), "".concat(componentCls, "-empty"), {
      padding: "".concat((0, _cssinjs.unit)(padding), " 0"),
      color: colorTextDescription,
      fontSize: token.fontSizeSM,
      textAlign: 'center'
    }), "".concat(componentCls, "-empty-text"), {
      padding: emptyTextPadding,
      color: token.colorTextDisabled,
      fontSize: token.fontSize,
      textAlign: 'center'
    }), "".concat(componentCls, "-item-no-flex"), {
      display: 'block'
    }))), "".concat(componentCls, "-grid ").concat(antCls, "-col > ").concat(componentCls, "-item"), {
      display: 'block',
      maxWidth: '100%',
      marginBlockEnd: margin,
      paddingBlock: 0,
      borderBlockEnd: 'none'
    }), "".concat(componentCls, "-vertical ").concat(componentCls, "-item"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      alignItems: 'initial'
    }, "".concat(componentCls, "-item-main"), {
      display: 'block',
      flex: 1
    }), "".concat(componentCls, "-item-extra"), {
      marginInlineStart: marginLG
    }), "".concat(componentCls, "-item-meta"), _defineProperty({
      marginBlockEnd: metaMarginBottom
    }, "".concat(componentCls, "-item-meta-title"), {
      marginBlockStart: 0,
      marginBlockEnd: titleMarginBottom,
      color: colorText,
      fontSize: token.fontSizeLG,
      lineHeight: token.lineHeightLG
    })), "".concat(componentCls, "-item-action"), {
      marginBlockStart: padding,
      marginInlineStart: 'auto',
      '> li': _defineProperty({
        padding: "0 ".concat((0, _cssinjs.unit)(padding))
      }, "&:first-child", {
        paddingInlineStart: 0
      })
    })), "".concat(componentCls, "-split ").concat(componentCls, "-item"), _defineProperty({
      borderBlockEnd: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit)
    }, "&:last-child", {
      borderBlockEnd: 'none'
    })), "".concat(componentCls, "-split ").concat(componentCls, "-header"), {
      borderBlockEnd: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit)
    }), "".concat(componentCls, "-split").concat(componentCls, "-empty ").concat(componentCls, "-footer"), {
      borderTop: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit)
    }), "".concat(componentCls, "-loading ").concat(componentCls, "-spin-nested-loading"), {
      minHeight: controlHeight
    }), "".concat(componentCls, "-split").concat(componentCls, "-something-after-last-item ").concat(antCls, "-spin-container > ").concat(componentCls, "-items > ").concat(componentCls, "-item:last-child"), {
      borderBlockEnd: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit)
    }), "".concat(componentCls, "-lg ").concat(componentCls, "-item"), {
      padding: itemPaddingLG
    }), "".concat(componentCls, "-sm ").concat(componentCls, "-item"), {
      padding: itemPaddingSM
    }), _defineProperty(_ref3, "".concat(componentCls, ":not(").concat(componentCls, "-vertical)"), _defineProperty({}, "".concat(componentCls, "-item-no-flex"), _defineProperty({}, "".concat(componentCls, "-item-action"), {
      "float": 'right'
    })));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      contentWidth: 220,
      itemPadding: "".concat((0, _cssinjs.unit)(token.paddingContentVertical), " 0"),
      itemPaddingSM: "".concat((0, _cssinjs.unit)(token.paddingContentVerticalSM), " ").concat((0, _cssinjs.unit)(token.paddingContentHorizontal)),
      itemPaddingLG: "".concat((0, _cssinjs.unit)(token.paddingContentVerticalLG), " ").concat((0, _cssinjs.unit)(token.paddingContentHorizontalLG)),
      headerBg: 'transparent',
      footerBg: 'transparent',
      emptyTextPadding: token.padding,
      metaMarginBottom: token.padding,
      avatarMarginRight: token.padding,
      titleMarginBottom: token.paddingSM,
      descriptionFontSize: token.fontSize
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('List', function (token) {
    var listToken = (0, _internal.mergeToken)(token, {
      listBorderedCls: "".concat(token.componentCls, "-bordered"),
      minHeight: token.controlHeightLG
    });
    return [genBaseStyle(listToken), genBorderedStyle(listToken), genResponsiveStyle(listToken)];
  }, prepareComponentToken);
});