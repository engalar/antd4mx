define(["exports", "@ant-design/cssinjs", "antd4mx/style", "antd4mx/theme/internal", "antd4mx/tabs/style/motion"], function (_exports, _cssinjs, _style, _internal, _motion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genCardStyle = function genCardStyle(token) {
    var componentCls = token.componentCls,
      tabsCardPadding = token.tabsCardPadding,
      cardBg = token.cardBg,
      cardGutter = token.cardGutter,
      colorBorderSecondary = token.colorBorderSecondary,
      itemSelectedColor = token.itemSelectedColor;
    return _defineProperty({}, "".concat(componentCls, "-card"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-tab"), {
      margin: 0,
      padding: tabsCardPadding,
      background: cardBg,
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(colorBorderSecondary),
      transition: "all ".concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut)
    }), "".concat(componentCls, "-tab-active"), {
      color: itemSelectedColor,
      background: token.colorBgContainer
    }), "".concat(componentCls, "-ink-bar"), {
      visibility: 'hidden'
    })), "&".concat(componentCls, "-top, &").concat(componentCls, "-bottom"), _defineProperty({}, "> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav"), _defineProperty({}, "".concat(componentCls, "-tab + ").concat(componentCls, "-tab"), {
      marginLeft: {
        _skip_check_: true,
        value: (0, _cssinjs.unit)(cardGutter)
      }
    }))), "&".concat(componentCls, "-top"), _defineProperty({}, "> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-tab"), {
      borderRadius: "".concat((0, _cssinjs.unit)(token.borderRadiusLG), " ").concat((0, _cssinjs.unit)(token.borderRadiusLG), " 0 0")
    }), "".concat(componentCls, "-tab-active"), {
      borderBottomColor: token.colorBgContainer
    }))), "&".concat(componentCls, "-bottom"), _defineProperty({}, "> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-tab"), {
      borderRadius: "0 0 ".concat((0, _cssinjs.unit)(token.borderRadiusLG), " ").concat((0, _cssinjs.unit)(token.borderRadiusLG))
    }), "".concat(componentCls, "-tab-active"), {
      borderTopColor: token.colorBgContainer
    }))), "&".concat(componentCls, "-left, &").concat(componentCls, "-right"), _defineProperty({}, "> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav"), _defineProperty({}, "".concat(componentCls, "-tab + ").concat(componentCls, "-tab"), {
      marginTop: (0, _cssinjs.unit)(cardGutter)
    }))), "&".concat(componentCls, "-left"), _defineProperty({}, "> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-tab"), {
      borderRadius: {
        _skip_check_: true,
        value: "".concat((0, _cssinjs.unit)(token.borderRadiusLG), " 0 0 ").concat((0, _cssinjs.unit)(token.borderRadiusLG))
      }
    }), "".concat(componentCls, "-tab-active"), {
      borderRightColor: {
        _skip_check_: true,
        value: token.colorBgContainer
      }
    }))), "&".concat(componentCls, "-right"), _defineProperty({}, "> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-tab"), {
      borderRadius: {
        _skip_check_: true,
        value: "0 ".concat((0, _cssinjs.unit)(token.borderRadiusLG), " ").concat((0, _cssinjs.unit)(token.borderRadiusLG), " 0")
      }
    }), "".concat(componentCls, "-tab-active"), {
      borderLeftColor: {
        _skip_check_: true,
        value: token.colorBgContainer
      }
    }))));
  };
  var genDropdownStyle = function genDropdownStyle(token) {
    var componentCls = token.componentCls,
      itemHoverColor = token.itemHoverColor,
      dropdownEdgeChildVerticalPadding = token.dropdownEdgeChildVerticalPadding;
    return _defineProperty({}, "".concat(componentCls, "-dropdown"), Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty({
      position: 'absolute',
      top: -9999,
      left: {
        _skip_check_: true,
        value: -9999
      },
      zIndex: token.zIndexPopup,
      display: 'block',
      '&-hidden': {
        display: 'none'
      }
    }, "".concat(componentCls, "-dropdown-menu"), {
      maxHeight: token.tabsDropdownHeight,
      margin: 0,
      padding: "".concat((0, _cssinjs.unit)(dropdownEdgeChildVerticalPadding), " 0"),
      overflowX: 'hidden',
      overflowY: 'auto',
      textAlign: {
        _skip_check_: true,
        value: 'left'
      },
      listStyleType: 'none',
      backgroundColor: token.colorBgContainer,
      backgroundClip: 'padding-box',
      borderRadius: token.borderRadiusLG,
      outline: 'none',
      boxShadow: token.boxShadowSecondary,
      '&-item': Object.assign(Object.assign({}, _style.textEllipsis), {
        display: 'flex',
        alignItems: 'center',
        minWidth: token.tabsDropdownWidth,
        margin: 0,
        padding: "".concat((0, _cssinjs.unit)(token.paddingXXS), " ").concat((0, _cssinjs.unit)(token.paddingSM)),
        color: token.colorText,
        fontWeight: 'normal',
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        cursor: 'pointer',
        transition: "all ".concat(token.motionDurationSlow),
        '> span': {
          flex: 1,
          whiteSpace: 'nowrap'
        },
        '&-remove': {
          flex: 'none',
          marginLeft: {
            _skip_check_: true,
            value: token.marginSM
          },
          color: token.colorTextDescription,
          fontSize: token.fontSizeSM,
          background: 'transparent',
          border: 0,
          cursor: 'pointer',
          '&:hover': {
            color: itemHoverColor
          }
        },
        '&:hover': {
          background: token.controlItemBgHover
        },
        '&-disabled': {
          '&, &:hover': {
            color: token.colorTextDisabled,
            background: 'transparent',
            cursor: 'not-allowed'
          }
        }
      })
    })));
  };
  var genPositionStyle = function genPositionStyle(token) {
    var componentCls = token.componentCls,
      margin = token.margin,
      colorBorderSecondary = token.colorBorderSecondary,
      horizontalMargin = token.horizontalMargin,
      verticalItemPadding = token.verticalItemPadding,
      verticalItemMargin = token.verticalItemMargin,
      calc = token.calc;
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-top, ").concat(componentCls, "-bottom"), _defineProperty({
      flexDirection: 'column'
    }, "> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav"), _defineProperty(_defineProperty({
      margin: horizontalMargin,
      '&::before': {
        position: 'absolute',
        right: {
          _skip_check_: true,
          value: 0
        },
        left: {
          _skip_check_: true,
          value: 0
        },
        borderBottom: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(colorBorderSecondary),
        content: "''"
      }
    }, "".concat(componentCls, "-ink-bar"), {
      height: token.lineWidthBold,
      '&-animated': {
        transition: "width ".concat(token.motionDurationSlow, ", left ").concat(token.motionDurationSlow, ",\n            right ").concat(token.motionDurationSlow)
      }
    }), "".concat(componentCls, "-nav-wrap"), _defineProperty(_defineProperty({
      '&::before, &::after': {
        top: 0,
        bottom: 0,
        width: token.controlHeight
      },
      '&::before': {
        left: {
          _skip_check_: true,
          value: 0
        },
        boxShadow: token.boxShadowTabsOverflowLeft
      },
      '&::after': {
        right: {
          _skip_check_: true,
          value: 0
        },
        boxShadow: token.boxShadowTabsOverflowRight
      }
    }, "&".concat(componentCls, "-nav-wrap-ping-left::before"), {
      opacity: 1
    }), "&".concat(componentCls, "-nav-wrap-ping-right::after"), {
      opacity: 1
    })))), "".concat(componentCls, "-top"), _defineProperty({}, "> ".concat(componentCls, "-nav,\n        > div > ").concat(componentCls, "-nav"), _defineProperty({
      '&::before': {
        bottom: 0
      }
    }, "".concat(componentCls, "-ink-bar"), {
      bottom: 0
    }))), "".concat(componentCls, "-bottom"), _defineProperty(_defineProperty({}, "> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav"), _defineProperty({
      order: 1,
      marginTop: margin,
      marginBottom: 0,
      '&::before': {
        top: 0
      }
    }, "".concat(componentCls, "-ink-bar"), {
      top: 0
    })), "> ".concat(componentCls, "-content-holder, > div > ").concat(componentCls, "-content-holder"), {
      order: 0
    })), "".concat(componentCls, "-left, ").concat(componentCls, "-right"), _defineProperty({}, "> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      flexDirection: 'column',
      minWidth: calc(token.controlHeight).mul(1.25).equal()
    }, "".concat(componentCls, "-tab"), {
      padding: verticalItemPadding,
      textAlign: 'center'
    }), "".concat(componentCls, "-tab + ").concat(componentCls, "-tab"), {
      margin: verticalItemMargin
    }), "".concat(componentCls, "-nav-wrap"), _defineProperty(_defineProperty({
      flexDirection: 'column',
      '&::before, &::after': {
        right: {
          _skip_check_: true,
          value: 0
        },
        left: {
          _skip_check_: true,
          value: 0
        },
        height: token.controlHeight
      },
      '&::before': {
        top: 0,
        boxShadow: token.boxShadowTabsOverflowTop
      },
      '&::after': {
        bottom: 0,
        boxShadow: token.boxShadowTabsOverflowBottom
      }
    }, "&".concat(componentCls, "-nav-wrap-ping-top::before"), {
      opacity: 1
    }), "&".concat(componentCls, "-nav-wrap-ping-bottom::after"), {
      opacity: 1
    })), "".concat(componentCls, "-ink-bar"), {
      width: token.lineWidthBold,
      '&-animated': {
        transition: "height ".concat(token.motionDurationSlow, ", top ").concat(token.motionDurationSlow)
      }
    }), "".concat(componentCls, "-nav-list, ").concat(componentCls, "-nav-operations"), {
      flex: '1 0 auto',
      // fix safari scroll problem
      flexDirection: 'column'
    }))), "".concat(componentCls, "-left"), _defineProperty(_defineProperty({}, "> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav"), _defineProperty({}, "".concat(componentCls, "-ink-bar"), {
      right: {
        _skip_check_: true,
        value: 0
      }
    })), "> ".concat(componentCls, "-content-holder, > div > ").concat(componentCls, "-content-holder"), _defineProperty({
      marginLeft: {
        _skip_check_: true,
        value: (0, _cssinjs.unit)(calc(token.lineWidth).mul(-1).equal())
      },
      borderLeft: {
        _skip_check_: true,
        value: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder)
      }
    }, "> ".concat(componentCls, "-content > ").concat(componentCls, "-tabpane"), {
      paddingLeft: {
        _skip_check_: true,
        value: token.paddingLG
      }
    }))), "".concat(componentCls, "-right"), _defineProperty(_defineProperty({}, "> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav"), _defineProperty({
      order: 1
    }, "".concat(componentCls, "-ink-bar"), {
      left: {
        _skip_check_: true,
        value: 0
      }
    })), "> ".concat(componentCls, "-content-holder, > div > ").concat(componentCls, "-content-holder"), _defineProperty({
      order: 0,
      marginRight: {
        _skip_check_: true,
        value: calc(token.lineWidth).mul(-1).equal()
      },
      borderRight: {
        _skip_check_: true,
        value: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder)
      }
    }, "> ".concat(componentCls, "-content > ").concat(componentCls, "-tabpane"), {
      paddingRight: {
        _skip_check_: true,
        value: token.paddingLG
      }
    })));
  };
  var genSizeStyle = function genSizeStyle(token) {
    var componentCls = token.componentCls,
      cardPaddingSM = token.cardPaddingSM,
      cardPaddingLG = token.cardPaddingLG,
      horizontalItemPaddingSM = token.horizontalItemPaddingSM,
      horizontalItemPaddingLG = token.horizontalItemPaddingLG;
    return _defineProperty(_defineProperty({}, componentCls, {
      '&-small': _defineProperty({}, "> ".concat(componentCls, "-nav"), _defineProperty({}, "".concat(componentCls, "-tab"), {
        padding: horizontalItemPaddingSM,
        fontSize: token.titleFontSizeSM
      })),
      '&-large': _defineProperty({}, "> ".concat(componentCls, "-nav"), _defineProperty({}, "".concat(componentCls, "-tab"), {
        padding: horizontalItemPaddingLG,
        fontSize: token.titleFontSizeLG
      }))
    }), "".concat(componentCls, "-card"), _defineProperty(_defineProperty({}, "&".concat(componentCls, "-small"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "> ".concat(componentCls, "-nav"), _defineProperty({}, "".concat(componentCls, "-tab"), {
      padding: cardPaddingSM
    })), "&".concat(componentCls, "-bottom"), _defineProperty({}, "> ".concat(componentCls, "-nav ").concat(componentCls, "-tab"), {
      borderRadius: "0 0 ".concat((0, _cssinjs.unit)(token.borderRadius), " ").concat((0, _cssinjs.unit)(token.borderRadius))
    })), "&".concat(componentCls, "-top"), _defineProperty({}, "> ".concat(componentCls, "-nav ").concat(componentCls, "-tab"), {
      borderRadius: "".concat((0, _cssinjs.unit)(token.borderRadius), " ").concat((0, _cssinjs.unit)(token.borderRadius), " 0 0")
    })), "&".concat(componentCls, "-right"), _defineProperty({}, "> ".concat(componentCls, "-nav ").concat(componentCls, "-tab"), {
      borderRadius: {
        _skip_check_: true,
        value: "0 ".concat((0, _cssinjs.unit)(token.borderRadius), " ").concat((0, _cssinjs.unit)(token.borderRadius), " 0")
      }
    })), "&".concat(componentCls, "-left"), _defineProperty({}, "> ".concat(componentCls, "-nav ").concat(componentCls, "-tab"), {
      borderRadius: {
        _skip_check_: true,
        value: "".concat((0, _cssinjs.unit)(token.borderRadius), " 0 0 ").concat((0, _cssinjs.unit)(token.borderRadius))
      }
    }))), "&".concat(componentCls, "-large"), _defineProperty({}, "> ".concat(componentCls, "-nav"), _defineProperty({}, "".concat(componentCls, "-tab"), {
      padding: cardPaddingLG
    }))));
  };
  var genTabStyle = function genTabStyle(token) {
    var componentCls = token.componentCls,
      itemActiveColor = token.itemActiveColor,
      itemHoverColor = token.itemHoverColor,
      iconCls = token.iconCls,
      tabsHorizontalItemMargin = token.tabsHorizontalItemMargin,
      horizontalItemPadding = token.horizontalItemPadding,
      itemSelectedColor = token.itemSelectedColor,
      itemColor = token.itemColor;
    var tabCls = "".concat(componentCls, "-tab");
    return _defineProperty(_defineProperty({}, tabCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      WebkitTouchCallout: 'none',
      WebkitTapHighlightColor: 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      padding: horizontalItemPadding,
      fontSize: token.titleFontSize,
      background: 'transparent',
      border: 0,
      outline: 'none',
      cursor: 'pointer',
      color: itemColor,
      '&-btn, &-remove': Object.assign({
        '&:focus:not(:focus-visible), &:active': {
          color: itemActiveColor
        }
      }, (0, _style.genFocusStyle)(token)),
      '&-btn': _defineProperty({
        outline: 'none',
        transition: 'all 0.3s'
      }, "".concat(tabCls, "-icon:not(:last-child)"), {
        marginInlineEnd: token.marginSM
      }),
      '&-remove': {
        flex: 'none',
        marginRight: {
          _skip_check_: true,
          value: token.calc(token.marginXXS).mul(-1).equal()
        },
        marginLeft: {
          _skip_check_: true,
          value: token.marginXS
        },
        color: token.colorTextDescription,
        fontSize: token.fontSizeSM,
        background: 'transparent',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        transition: "all ".concat(token.motionDurationSlow),
        '&:hover': {
          color: token.colorTextHeading
        }
      },
      '&:hover': {
        color: itemHoverColor
      }
    }, "&".concat(tabCls, "-active ").concat(tabCls, "-btn"), {
      color: itemSelectedColor,
      textShadow: token.tabsActiveTextShadow
    }), "&".concat(tabCls, "-disabled"), {
      color: token.colorTextDisabled,
      cursor: 'not-allowed'
    }), "&".concat(tabCls, "-disabled ").concat(tabCls, "-btn, &").concat(tabCls, "-disabled ").concat(componentCls, "-remove"), {
      '&:focus, &:active': {
        color: token.colorTextDisabled
      }
    }), "& ".concat(tabCls, "-remove ").concat(iconCls), {
      margin: 0
    }), "".concat(iconCls, ":not(:last-child)"), {
      marginRight: {
        _skip_check_: true,
        value: token.marginSM
      }
    })), "".concat(tabCls, " + ").concat(tabCls), {
      margin: {
        _skip_check_: true,
        value: tabsHorizontalItemMargin
      }
    });
  };
  var genRtlStyle = function genRtlStyle(token) {
    var componentCls = token.componentCls,
      tabsHorizontalItemMarginRTL = token.tabsHorizontalItemMarginRTL,
      iconCls = token.iconCls,
      cardGutter = token.cardGutter,
      calc = token.calc;
    var rtlCls = "".concat(componentCls, "-rtl");
    return _defineProperty(_defineProperty(_defineProperty({}, rtlCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      direction: 'rtl'
    }, "".concat(componentCls, "-nav"), _defineProperty({}, "".concat(componentCls, "-tab"), _defineProperty(_defineProperty(_defineProperty({
      margin: {
        _skip_check_: true,
        value: tabsHorizontalItemMarginRTL
      }
    }, "".concat(componentCls, "-tab:last-of-type"), {
      marginLeft: {
        _skip_check_: true,
        value: 0
      }
    }), iconCls, {
      marginRight: {
        _skip_check_: true,
        value: 0
      },
      marginLeft: {
        _skip_check_: true,
        value: (0, _cssinjs.unit)(token.marginSM)
      }
    }), "".concat(componentCls, "-tab-remove"), _defineProperty({
      marginRight: {
        _skip_check_: true,
        value: (0, _cssinjs.unit)(token.marginXS)
      },
      marginLeft: {
        _skip_check_: true,
        value: (0, _cssinjs.unit)(calc(token.marginXXS).mul(-1).equal())
      }
    }, iconCls, {
      margin: 0
    })))), "&".concat(componentCls, "-left"), _defineProperty(_defineProperty({}, "> ".concat(componentCls, "-nav"), {
      order: 1
    }), "> ".concat(componentCls, "-content-holder"), {
      order: 0
    })), "&".concat(componentCls, "-right"), _defineProperty(_defineProperty({}, "> ".concat(componentCls, "-nav"), {
      order: 0
    }), "> ".concat(componentCls, "-content-holder"), {
      order: 1
    })), "&".concat(componentCls, "-card").concat(componentCls, "-top, &").concat(componentCls, "-card").concat(componentCls, "-bottom"), _defineProperty({}, "> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav"), _defineProperty({}, "".concat(componentCls, "-tab + ").concat(componentCls, "-tab"), {
      marginRight: {
        _skip_check_: true,
        value: cardGutter
      },
      marginLeft: {
        _skip_check_: true,
        value: 0
      }
    })))), "".concat(componentCls, "-dropdown-rtl"), {
      direction: 'rtl'
    }), "".concat(componentCls, "-menu-item"), _defineProperty({}, "".concat(componentCls, "-dropdown-rtl"), {
      textAlign: {
        _skip_check_: true,
        value: 'right'
      }
    }));
  };
  var genTabsStyle = function genTabsStyle(token) {
    var componentCls = token.componentCls,
      tabsCardPadding = token.tabsCardPadding,
      cardHeight = token.cardHeight,
      cardGutter = token.cardGutter,
      itemHoverColor = token.itemHoverColor,
      itemActiveColor = token.itemActiveColor,
      colorBorderSecondary = token.colorBorderSecondary;
    return _defineProperty(_defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty({
      display: 'flex'
    }, "> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      display: 'flex',
      flex: 'none',
      alignItems: 'center'
    }, "".concat(componentCls, "-nav-wrap"), {
      position: 'relative',
      display: 'flex',
      flex: 'auto',
      alignSelf: 'stretch',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      transform: 'translate(0)',
      // Fix chrome render bug
      // >>>>> Ping shadow
      '&::before, &::after': {
        position: 'absolute',
        zIndex: 1,
        opacity: 0,
        transition: "opacity ".concat(token.motionDurationSlow),
        content: "''",
        pointerEvents: 'none'
      }
    }), "".concat(componentCls, "-nav-list"), {
      position: 'relative',
      display: 'flex',
      transition: "opacity ".concat(token.motionDurationSlow)
    }), "".concat(componentCls, "-nav-operations"), {
      display: 'flex',
      alignSelf: 'stretch'
    }), "".concat(componentCls, "-nav-operations-hidden"), {
      position: 'absolute',
      visibility: 'hidden',
      pointerEvents: 'none'
    }), "".concat(componentCls, "-nav-more"), {
      position: 'relative',
      padding: tabsCardPadding,
      background: 'transparent',
      border: 0,
      color: token.colorText,
      '&::after': {
        position: 'absolute',
        right: {
          _skip_check_: true,
          value: 0
        },
        bottom: 0,
        left: {
          _skip_check_: true,
          value: 0
        },
        height: token.calc(token.controlHeightLG).div(8).equal(),
        transform: 'translateY(100%)',
        content: "''"
      }
    }), "".concat(componentCls, "-nav-add"), Object.assign({
      minWidth: cardHeight,
      minHeight: cardHeight,
      marginLeft: {
        _skip_check_: true,
        value: cardGutter
      },
      padding: "0 ".concat((0, _cssinjs.unit)(token.paddingXS)),
      background: 'transparent',
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(colorBorderSecondary),
      borderRadius: "".concat((0, _cssinjs.unit)(token.borderRadiusLG), " ").concat((0, _cssinjs.unit)(token.borderRadiusLG), " 0 0"),
      outline: 'none',
      cursor: 'pointer',
      color: token.colorText,
      transition: "all ".concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut),
      '&:hover': {
        color: itemHoverColor
      },
      '&:active, &:focus:not(:focus-visible)': {
        color: itemActiveColor
      }
    }, (0, _style.genFocusStyle)(token)))), "".concat(componentCls, "-extra-content"), {
      flex: 'none'
    }), "".concat(componentCls, "-ink-bar"), {
      position: 'absolute',
      background: token.inkBarColor,
      pointerEvents: 'none'
    })), genTabStyle(token)), _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-content"), {
      position: 'relative',
      width: '100%'
    }), "".concat(componentCls, "-content-holder"), {
      flex: 'auto',
      minWidth: 0,
      minHeight: 0
    }), "".concat(componentCls, "-tabpane"), {
      outline: 'none',
      '&-hidden': {
        display: 'none'
      }
    }))), "".concat(componentCls, "-centered"), _defineProperty({}, "> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav"), _defineProperty({}, "".concat(componentCls, "-nav-wrap"), _defineProperty({}, "&:not([class*='".concat(componentCls, "-nav-wrap-ping'])"), {
      justifyContent: 'center'
    }))));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var cardHeight = token.controlHeightLG;
    return {
      zIndexPopup: token.zIndexPopupBase + 50,
      cardBg: token.colorFillAlter,
      cardHeight: cardHeight,
      // Initialize with empty string, because cardPadding will be calculated with cardHeight by default.
      cardPadding: "".concat((cardHeight - Math.round(token.fontSize * token.lineHeight)) / 2 - token.lineWidth, "px ").concat(token.padding, "px"),
      cardPaddingSM: "".concat(token.paddingXXS * 1.5, "px ").concat(token.padding, "px"),
      cardPaddingLG: "".concat(token.paddingXS, "px ").concat(token.padding, "px ").concat(token.paddingXXS * 1.5, "px"),
      titleFontSize: token.fontSize,
      titleFontSizeLG: token.fontSizeLG,
      titleFontSizeSM: token.fontSize,
      inkBarColor: token.colorPrimary,
      horizontalMargin: "0 0 ".concat(token.margin, "px 0"),
      horizontalItemGutter: 32,
      // Fixed Value
      // Initialize with empty string, because horizontalItemMargin will be calculated with horizontalItemGutter by default.
      horizontalItemMargin: "",
      horizontalItemMarginRTL: "",
      horizontalItemPadding: "".concat(token.paddingSM, "px 0"),
      horizontalItemPaddingSM: "".concat(token.paddingXS, "px 0"),
      horizontalItemPaddingLG: "".concat(token.padding, "px 0"),
      verticalItemPadding: "".concat(token.paddingXS, "px ").concat(token.paddingLG, "px"),
      verticalItemMargin: "".concat(token.margin, "px 0 0 0"),
      itemColor: token.colorText,
      itemSelectedColor: token.colorPrimary,
      itemHoverColor: token.colorPrimaryHover,
      itemActiveColor: token.colorPrimaryActive,
      cardGutter: token.marginXXS / 2
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Tabs', function (token) {
    var tabsToken = (0, _internal.mergeToken)(token, {
      // `cardPadding` is empty by default, so we could calculate with dynamic `cardHeight`
      tabsCardPadding: token.cardPadding,
      dropdownEdgeChildVerticalPadding: token.paddingXXS,
      tabsActiveTextShadow: '0 0 0.25px currentcolor',
      tabsDropdownHeight: 200,
      tabsDropdownWidth: 120,
      tabsHorizontalItemMargin: "0 0 0 ".concat((0, _cssinjs.unit)(token.horizontalItemGutter)),
      tabsHorizontalItemMarginRTL: "0 0 0 ".concat((0, _cssinjs.unit)(token.horizontalItemGutter))
    });
    return [genSizeStyle(tabsToken), genRtlStyle(tabsToken), genPositionStyle(tabsToken), genDropdownStyle(tabsToken), genCardStyle(tabsToken), genTabsStyle(tabsToken), (0, _motion["default"])(tabsToken)];
  }, prepareComponentToken);
});