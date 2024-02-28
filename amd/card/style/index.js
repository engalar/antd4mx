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
  // ============================== Styles ==============================
  // ============================== Head ==============================
  var genCardHeadStyle = function genCardHeadStyle(token) {
    var antCls = token.antCls,
      componentCls = token.componentCls,
      headerHeight = token.headerHeight,
      cardPaddingBase = token.cardPaddingBase,
      tabsMarginBottom = token.tabsMarginBottom;
    return Object.assign(Object.assign({
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      minHeight: headerHeight,
      marginBottom: -1,
      padding: "0 ".concat((0, _cssinjs.unit)(cardPaddingBase)),
      color: token.colorTextHeading,
      fontWeight: token.fontWeightStrong,
      fontSize: token.headerFontSize,
      background: token.headerBg,
      borderBottom: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorderSecondary),
      borderRadius: "".concat((0, _cssinjs.unit)(token.borderRadiusLG), " ").concat((0, _cssinjs.unit)(token.borderRadiusLG), " 0 0")
    }, (0, _style.clearFix)()), _defineProperty({
      '&-wrapper': {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      },
      '&-title': Object.assign(Object.assign({
        display: 'inline-block',
        flex: 1
      }, _style.textEllipsis), _defineProperty({}, "\n          > ".concat(componentCls, "-typography,\n          > ").concat(componentCls, "-typography-edit-content\n        "), {
        insetInlineStart: 0,
        marginTop: 0,
        marginBottom: 0
      }))
    }, "".concat(antCls, "-tabs-top"), {
      clear: 'both',
      marginBottom: tabsMarginBottom,
      color: token.colorText,
      fontWeight: 'normal',
      fontSize: token.fontSize,
      '&-bar': {
        borderBottom: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorderSecondary)
      }
    }));
  };
  // ============================== Grid ==============================
  var genCardGridStyle = function genCardGridStyle(token) {
    var cardPaddingBase = token.cardPaddingBase,
      colorBorderSecondary = token.colorBorderSecondary,
      cardShadow = token.cardShadow,
      lineWidth = token.lineWidth;
    return {
      width: '33.33%',
      padding: cardPaddingBase,
      border: 0,
      borderRadius: 0,
      boxShadow: "\n      ".concat((0, _cssinjs.unit)(lineWidth), " 0 0 0 ").concat(colorBorderSecondary, ",\n      0 ").concat((0, _cssinjs.unit)(lineWidth), " 0 0 ").concat(colorBorderSecondary, ",\n      ").concat((0, _cssinjs.unit)(lineWidth), " ").concat((0, _cssinjs.unit)(lineWidth), " 0 0 ").concat(colorBorderSecondary, ",\n      ").concat((0, _cssinjs.unit)(lineWidth), " 0 0 0 ").concat(colorBorderSecondary, " inset,\n      0 ").concat((0, _cssinjs.unit)(lineWidth), " 0 0 ").concat(colorBorderSecondary, " inset;\n    "),
      transition: "all ".concat(token.motionDurationMid),
      '&-hoverable:hover': {
        position: 'relative',
        zIndex: 1,
        boxShadow: cardShadow
      }
    };
  };
  // ============================== Actions ==============================
  var genCardActionsStyle = function genCardActionsStyle(token) {
    var componentCls = token.componentCls,
      iconCls = token.iconCls,
      actionsLiMargin = token.actionsLiMargin,
      cardActionsIconSize = token.cardActionsIconSize,
      colorBorderSecondary = token.colorBorderSecondary,
      actionsBg = token.actionsBg;
    return Object.assign(Object.assign({
      margin: 0,
      padding: 0,
      listStyle: 'none',
      background: actionsBg,
      borderTop: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(colorBorderSecondary),
      display: 'flex',
      borderRadius: "0 0 ".concat((0, _cssinjs.unit)(token.borderRadiusLG), " ").concat((0, _cssinjs.unit)(token.borderRadiusLG))
    }, (0, _style.clearFix)()), {
      '& > li': {
        margin: actionsLiMargin,
        color: token.colorTextDescription,
        textAlign: 'center',
        '> span': _defineProperty(_defineProperty({
          position: 'relative',
          display: 'block',
          minWidth: token.calc(token.cardActionsIconSize).mul(2).equal(),
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          cursor: 'pointer',
          '&:hover': {
            color: token.colorPrimary,
            transition: "color ".concat(token.motionDurationMid)
          }
        }, "a:not(".concat(componentCls, "-btn), > ").concat(iconCls), {
          display: 'inline-block',
          width: '100%',
          color: token.colorTextDescription,
          lineHeight: (0, _cssinjs.unit)(token.fontHeight),
          transition: "color ".concat(token.motionDurationMid),
          '&:hover': {
            color: token.colorPrimary
          }
        }), "> ".concat(iconCls), {
          fontSize: cardActionsIconSize,
          lineHeight: (0, _cssinjs.unit)(token.calc(cardActionsIconSize).mul(token.lineHeight).equal())
        }),
        '&:not(:last-child)': {
          borderInlineEnd: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(colorBorderSecondary)
        }
      }
    });
  };
  // ============================== Meta ==============================
  var genCardMetaStyle = function genCardMetaStyle(token) {
    return Object.assign(Object.assign({
      margin: "".concat((0, _cssinjs.unit)(token.calc(token.marginXXS).mul(-1).equal()), " 0"),
      display: 'flex'
    }, (0, _style.clearFix)()), {
      '&-avatar': {
        paddingInlineEnd: token.padding
      },
      '&-detail': {
        overflow: 'hidden',
        flex: 1,
        '> div:not(:last-child)': {
          marginBottom: token.marginXS
        }
      },
      '&-title': Object.assign({
        color: token.colorTextHeading,
        fontWeight: token.fontWeightStrong,
        fontSize: token.fontSizeLG
      }, _style.textEllipsis),
      '&-description': {
        color: token.colorTextDescription
      }
    });
  };
  // ============================== Inner ==============================
  var genCardTypeInnerStyle = function genCardTypeInnerStyle(token) {
    var componentCls = token.componentCls,
      cardPaddingBase = token.cardPaddingBase,
      colorFillAlter = token.colorFillAlter;
    return _defineProperty(_defineProperty({}, "".concat(componentCls, "-head"), {
      padding: "0 ".concat((0, _cssinjs.unit)(cardPaddingBase)),
      background: colorFillAlter,
      '&-title': {
        fontSize: token.fontSize
      }
    }), "".concat(componentCls, "-body"), {
      padding: "".concat((0, _cssinjs.unit)(token.padding), " ").concat((0, _cssinjs.unit)(cardPaddingBase))
    });
  };
  // ============================== Loading ==============================
  var genCardLoadingStyle = function genCardLoadingStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({
      overflow: 'hidden'
    }, "".concat(componentCls, "-body"), {
      userSelect: 'none'
    });
  };
  // ============================== Basic ==============================
  var genCardStyle = function genCardStyle(token) {
    var antCls = token.antCls,
      componentCls = token.componentCls,
      cardShadow = token.cardShadow,
      cardHeadPadding = token.cardHeadPadding,
      colorBorderSecondary = token.colorBorderSecondary,
      boxShadowTertiary = token.boxShadowTertiary,
      cardPaddingBase = token.cardPaddingBase,
      extraColor = token.extraColor;
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      background: token.colorBgContainer,
      borderRadius: token.borderRadiusLG
    }, "&:not(".concat(componentCls, "-bordered)"), {
      boxShadow: boxShadowTertiary
    }), "".concat(componentCls, "-head"), genCardHeadStyle(token)), "".concat(componentCls, "-extra"), {
      // https://stackoverflow.com/a/22429853/3040605
      marginInlineStart: 'auto',
      color: extraColor,
      fontWeight: 'normal',
      fontSize: token.fontSize
    }), "".concat(componentCls, "-body"), Object.assign({
      padding: cardPaddingBase,
      borderRadius: " 0 0 ".concat((0, _cssinjs.unit)(token.borderRadiusLG), " ").concat((0, _cssinjs.unit)(token.borderRadiusLG))
    }, (0, _style.clearFix)())), "".concat(componentCls, "-grid"), genCardGridStyle(token)), "".concat(componentCls, "-cover"), _defineProperty({
      '> *': {
        display: 'block',
        width: '100%'
      }
    }, "img, img + ".concat(antCls, "-image-mask"), {
      borderRadius: "".concat((0, _cssinjs.unit)(token.borderRadiusLG), " ").concat((0, _cssinjs.unit)(token.borderRadiusLG), " 0 0")
    })), "".concat(componentCls, "-actions"), genCardActionsStyle(token)), "".concat(componentCls, "-meta"), genCardMetaStyle(token)))), "".concat(componentCls, "-bordered"), _defineProperty({
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(colorBorderSecondary)
    }, "".concat(componentCls, "-cover"), {
      marginTop: -1,
      marginInlineStart: -1,
      marginInlineEnd: -1
    })), "".concat(componentCls, "-hoverable"), {
      cursor: 'pointer',
      transition: "box-shadow ".concat(token.motionDurationMid, ", border-color ").concat(token.motionDurationMid),
      '&:hover': {
        borderColor: 'transparent',
        boxShadow: cardShadow
      }
    }), "".concat(componentCls, "-contain-grid"), _defineProperty(_defineProperty({
      borderRadius: "".concat((0, _cssinjs.unit)(token.borderRadiusLG), " ").concat((0, _cssinjs.unit)(token.borderRadiusLG), " 0 0 ")
    }, "".concat(componentCls, "-body"), {
      display: 'flex',
      flexWrap: 'wrap'
    }), "&:not(".concat(componentCls, "-loading) ").concat(componentCls, "-body"), {
      marginBlockStart: token.calc(token.lineWidth).mul(-1).equal(),
      marginInlineStart: token.calc(token.lineWidth).mul(-1).equal(),
      padding: 0
    })), "".concat(componentCls, "-contain-tabs"), _defineProperty({}, "> ".concat(componentCls, "-head"), _defineProperty({
      minHeight: 0
    }, "".concat(componentCls, "-head-title, ").concat(componentCls, "-extra"), {
      paddingTop: cardHeadPadding
    }))), "".concat(componentCls, "-type-inner"), genCardTypeInnerStyle(token)), "".concat(componentCls, "-loading"), genCardLoadingStyle(token)), "".concat(componentCls, "-rtl"), {
      direction: 'rtl'
    });
  };
  // ============================== Size ==============================
  var genCardSizeStyle = function genCardSizeStyle(token) {
    var componentCls = token.componentCls,
      cardPaddingSM = token.cardPaddingSM,
      headerHeightSM = token.headerHeightSM,
      headerFontSizeSM = token.headerFontSizeSM;
    return _defineProperty(_defineProperty({}, "".concat(componentCls, "-small"), _defineProperty(_defineProperty({}, "> ".concat(componentCls, "-head"), _defineProperty({
      minHeight: headerHeightSM,
      padding: "0 ".concat((0, _cssinjs.unit)(cardPaddingSM)),
      fontSize: headerFontSizeSM
    }, "> ".concat(componentCls, "-head-wrapper"), _defineProperty({}, "> ".concat(componentCls, "-extra"), {
      fontSize: token.fontSize
    }))), "> ".concat(componentCls, "-body"), {
      padding: cardPaddingSM
    })), "".concat(componentCls, "-small").concat(componentCls, "-contain-tabs"), _defineProperty({}, "> ".concat(componentCls, "-head"), _defineProperty({}, "".concat(componentCls, "-head-title, ").concat(componentCls, "-extra"), {
      paddingTop: 0,
      display: 'flex',
      alignItems: 'center'
    })));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      headerBg: 'transparent',
      headerFontSize: token.fontSizeLG,
      headerFontSizeSM: token.fontSize,
      headerHeight: token.fontSizeLG * token.lineHeightLG + token.padding * 2,
      headerHeightSM: token.fontSize * token.lineHeight + token.paddingXS * 2,
      actionsBg: token.colorBgContainer,
      actionsLiMargin: "".concat(token.paddingSM, "px 0"),
      tabsMarginBottom: -token.padding - token.lineWidth,
      extraColor: token.colorText
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Card', function (token) {
    var cardToken = (0, _internal.mergeToken)(token, {
      cardShadow: token.boxShadowCard,
      cardHeadPadding: token.padding,
      cardPaddingBase: token.paddingLG,
      cardActionsIconSize: token.fontSize,
      cardPaddingSM: 12 // Fixed padding.
    });
    return [
    // Style
    genCardStyle(cardToken),
    // Size
    genCardSizeStyle(cardToken)];
  }, prepareComponentToken);
});