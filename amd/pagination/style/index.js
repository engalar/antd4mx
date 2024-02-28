define(["exports", "@ant-design/cssinjs", "antd4mx/input/style/index", "antd4mx/style/index", "antd4mx/theme/internal", "antd4mx/input/style/variants"], function (_exports, _cssinjs, _index, _index2, _internal, _variants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareToken = _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genPaginationDisabledStyle = function genPaginationDisabledStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-disabled"), {
      '&, &:hover': _defineProperty({
        cursor: 'not-allowed'
      }, "".concat(componentCls, "-item-link"), {
        color: token.colorTextDisabled,
        cursor: 'not-allowed'
      }),
      '&:focus-visible': _defineProperty({
        cursor: 'not-allowed'
      }, "".concat(componentCls, "-item-link"), {
        color: token.colorTextDisabled,
        cursor: 'not-allowed'
      })
    }), "&".concat(componentCls, "-disabled"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      cursor: 'not-allowed'
    }, "".concat(componentCls, "-item"), {
      cursor: 'not-allowed',
      '&:hover, &:active': {
        backgroundColor: 'transparent'
      },
      a: {
        color: token.colorTextDisabled,
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'not-allowed'
      },
      '&-active': {
        borderColor: token.colorBorder,
        backgroundColor: token.itemActiveBgDisabled,
        '&:hover, &:active': {
          backgroundColor: token.itemActiveBgDisabled
        },
        a: {
          color: token.itemActiveColorDisabled
        }
      }
    }), "".concat(componentCls, "-item-link"), _defineProperty({
      color: token.colorTextDisabled,
      cursor: 'not-allowed',
      '&:hover, &:active': {
        backgroundColor: 'transparent'
      }
    }, "".concat(componentCls, "-simple&"), {
      backgroundColor: 'transparent',
      '&:hover, &:active': {
        backgroundColor: 'transparent'
      }
    })), "".concat(componentCls, "-simple-pager"), {
      color: token.colorTextDisabled
    }), "".concat(componentCls, "-jump-prev, ").concat(componentCls, "-jump-next"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-item-link-icon"), {
      opacity: 0
    }), "".concat(componentCls, "-item-ellipsis"), {
      opacity: 1
    }))), "&".concat(componentCls, "-simple"), _defineProperty({}, "".concat(componentCls, "-prev, ").concat(componentCls, "-next"), _defineProperty({}, "&".concat(componentCls, "-disabled ").concat(componentCls, "-item-link"), {
      '&:hover, &:active': {
        backgroundColor: 'transparent'
      }
    })));
  };
  var genPaginationMiniStyle = function genPaginationMiniStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "&".concat(componentCls, "-mini ").concat(componentCls, "-total-text, &").concat(componentCls, "-mini ").concat(componentCls, "-simple-pager"), {
      height: token.itemSizeSM,
      lineHeight: (0, _cssinjs.unit)(token.itemSizeSM)
    }), "&".concat(componentCls, "-mini ").concat(componentCls, "-item"), {
      minWidth: token.itemSizeSM,
      height: token.itemSizeSM,
      margin: 0,
      lineHeight: (0, _cssinjs.unit)(token.calc(token.itemSizeSM).sub(2).equal())
    }), "&".concat(componentCls, "-mini:not(").concat(componentCls, "-disabled) ").concat(componentCls, "-item:not(").concat(componentCls, "-item-active)"), {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      '&:hover': {
        backgroundColor: token.colorBgTextHover
      },
      '&:active': {
        backgroundColor: token.colorBgTextActive
      }
    }), "&".concat(componentCls, "-mini ").concat(componentCls, "-prev, &").concat(componentCls, "-mini ").concat(componentCls, "-next"), {
      minWidth: token.itemSizeSM,
      height: token.itemSizeSM,
      margin: 0,
      lineHeight: (0, _cssinjs.unit)(token.itemSizeSM)
    }), "&".concat(componentCls, "-mini:not(").concat(componentCls, "-disabled)"), _defineProperty({}, "".concat(componentCls, "-prev, ").concat(componentCls, "-next"), _defineProperty(_defineProperty(_defineProperty({}, "&:hover ".concat(componentCls, "-item-link"), {
      backgroundColor: token.colorBgTextHover
    }), "&:active ".concat(componentCls, "-item-link"), {
      backgroundColor: token.colorBgTextActive
    }), "&".concat(componentCls, "-disabled:hover ").concat(componentCls, "-item-link"), {
      backgroundColor: 'transparent'
    }))), "\n    &".concat(componentCls, "-mini ").concat(componentCls, "-prev ").concat(componentCls, "-item-link,\n    &").concat(componentCls, "-mini ").concat(componentCls, "-next ").concat(componentCls, "-item-link\n    "), {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      '&::after': {
        height: token.itemSizeSM,
        lineHeight: (0, _cssinjs.unit)(token.itemSizeSM)
      }
    }), "&".concat(componentCls, "-mini ").concat(componentCls, "-jump-prev, &").concat(componentCls, "-mini ").concat(componentCls, "-jump-next"), {
      height: token.itemSizeSM,
      marginInlineEnd: 0,
      lineHeight: (0, _cssinjs.unit)(token.itemSizeSM)
    }), "&".concat(componentCls, "-mini ").concat(componentCls, "-options"), _defineProperty(_defineProperty({
      marginInlineStart: token.paginationMiniOptionsMarginInlineStart
    }, "&-size-changer", {
      top: token.miniOptionsSizeChangerTop
    }), "&-quick-jumper", {
      height: token.itemSizeSM,
      lineHeight: (0, _cssinjs.unit)(token.itemSizeSM),
      input: Object.assign(Object.assign({}, (0, _index.genInputSmallStyle)(token)), {
        width: token.paginationMiniQuickJumperInputWidth,
        height: token.controlHeightSM
      })
    }));
  };
  var genPaginationSimpleStyle = function genPaginationSimpleStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty(_defineProperty({}, "\n    &".concat(componentCls, "-simple ").concat(componentCls, "-prev,\n    &").concat(componentCls, "-simple ").concat(componentCls, "-next\n    "), _defineProperty({
      height: token.itemSizeSM,
      lineHeight: (0, _cssinjs.unit)(token.itemSizeSM),
      verticalAlign: 'top'
    }, "".concat(componentCls, "-item-link"), {
      height: token.itemSizeSM,
      backgroundColor: 'transparent',
      border: 0,
      '&:hover': {
        backgroundColor: token.colorBgTextHover
      },
      '&:active': {
        backgroundColor: token.colorBgTextActive
      },
      '&::after': {
        height: token.itemSizeSM,
        lineHeight: (0, _cssinjs.unit)(token.itemSizeSM)
      }
    })), "&".concat(componentCls, "-simple ").concat(componentCls, "-simple-pager"), {
      display: 'inline-block',
      height: token.itemSizeSM,
      marginInlineEnd: token.marginXS,
      input: {
        boxSizing: 'border-box',
        height: '100%',
        marginInlineEnd: token.marginXS,
        padding: "0 ".concat((0, _cssinjs.unit)(token.paginationItemPaddingInline)),
        textAlign: 'center',
        backgroundColor: token.itemInputBg,
        border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder),
        borderRadius: token.borderRadius,
        outline: 'none',
        transition: "border-color ".concat(token.motionDurationMid),
        color: 'inherit',
        '&:hover': {
          borderColor: token.colorPrimary
        },
        '&:focus': {
          borderColor: token.colorPrimaryHover,
          boxShadow: "".concat((0, _cssinjs.unit)(token.inputOutlineOffset), " 0 ").concat((0, _cssinjs.unit)(token.controlOutlineWidth), " ").concat(token.controlOutline)
        },
        '&[disabled]': {
          color: token.colorTextDisabled,
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          cursor: 'not-allowed'
        }
      }
    });
  };
  var genPaginationJumpStyle = function genPaginationJumpStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-jump-prev, ").concat(componentCls, "-jump-next"), _defineProperty(_defineProperty({
      outline: 0
    }, "".concat(componentCls, "-item-container"), _defineProperty(_defineProperty({
      position: 'relative'
    }, "".concat(componentCls, "-item-link-icon"), {
      color: token.colorPrimary,
      fontSize: token.fontSizeSM,
      opacity: 0,
      transition: "all ".concat(token.motionDurationMid),
      '&-svg': {
        top: 0,
        insetInlineEnd: 0,
        bottom: 0,
        insetInlineStart: 0,
        margin: 'auto'
      }
    }), "".concat(componentCls, "-item-ellipsis"), {
      position: 'absolute',
      top: 0,
      insetInlineEnd: 0,
      bottom: 0,
      insetInlineStart: 0,
      display: 'block',
      margin: 'auto',
      color: token.colorTextDisabled,
      fontFamily: 'Arial, Helvetica, sans-serif',
      letterSpacing: token.paginationEllipsisLetterSpacing,
      textAlign: 'center',
      textIndent: token.paginationEllipsisTextIndent,
      opacity: 1,
      transition: "all ".concat(token.motionDurationMid)
    })), '&:hover', _defineProperty(_defineProperty({}, "".concat(componentCls, "-item-link-icon"), {
      opacity: 1
    }), "".concat(componentCls, "-item-ellipsis"), {
      opacity: 0
    }))), "\n    ".concat(componentCls, "-prev,\n    ").concat(componentCls, "-jump-prev,\n    ").concat(componentCls, "-jump-next\n    "), {
      marginInlineEnd: token.marginXS
    }), "\n    ".concat(componentCls, "-prev,\n    ").concat(componentCls, "-next,\n    ").concat(componentCls, "-jump-prev,\n    ").concat(componentCls, "-jump-next\n    "), {
      display: 'inline-block',
      minWidth: token.itemSize,
      height: token.itemSize,
      color: token.colorText,
      fontFamily: token.fontFamily,
      lineHeight: "".concat((0, _cssinjs.unit)(token.itemSize)),
      textAlign: 'center',
      verticalAlign: 'middle',
      listStyle: 'none',
      borderRadius: token.borderRadius,
      cursor: 'pointer',
      transition: "all ".concat(token.motionDurationMid)
    }), "".concat(componentCls, "-prev, ").concat(componentCls, "-next"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      fontFamily: 'Arial, Helvetica, sans-serif',
      outline: 0,
      button: {
        color: token.colorText,
        cursor: 'pointer',
        userSelect: 'none'
      }
    }, "".concat(componentCls, "-item-link"), {
      display: 'block',
      width: '100%',
      height: '100%',
      padding: 0,
      fontSize: token.fontSizeSM,
      textAlign: 'center',
      backgroundColor: 'transparent',
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " transparent"),
      borderRadius: token.borderRadius,
      outline: 'none',
      transition: "all ".concat(token.motionDurationMid)
    }), "&:hover ".concat(componentCls, "-item-link"), {
      backgroundColor: token.colorBgTextHover
    }), "&:active ".concat(componentCls, "-item-link"), {
      backgroundColor: token.colorBgTextActive
    }), "&".concat(componentCls, "-disabled:hover"), _defineProperty({}, "".concat(componentCls, "-item-link"), {
      backgroundColor: 'transparent'
    }))), "".concat(componentCls, "-slash"), {
      marginInlineEnd: token.paginationSlashMarginInlineEnd,
      marginInlineStart: token.paginationSlashMarginInlineStart
    }), "".concat(componentCls, "-options"), {
      display: 'inline-block',
      marginInlineStart: token.margin,
      verticalAlign: 'middle',
      '&-size-changer.-select': {
        display: 'inline-block',
        width: 'auto'
      },
      '&-quick-jumper': {
        display: 'inline-block',
        height: token.controlHeight,
        marginInlineStart: token.marginXS,
        lineHeight: (0, _cssinjs.unit)(token.controlHeight),
        verticalAlign: 'top',
        input: Object.assign(Object.assign(Object.assign({}, (0, _index.genBasicInputStyle)(token)), (0, _variants.genBaseOutlinedStyle)(token, {
          borderColor: token.colorBorder,
          hoverBorderColor: token.colorPrimaryHover,
          activeBorderColor: token.colorPrimary,
          activeShadow: token.activeShadow
        })), {
          '&[disabled]': Object.assign({}, (0, _variants.genDisabledStyle)(token)),
          width: token.calc(token.controlHeightLG).mul(1.25).equal(),
          height: token.controlHeight,
          boxSizing: 'border-box',
          margin: 0,
          marginInlineStart: token.marginXS,
          marginInlineEnd: token.marginXS
        })
      }
    });
  };
  var genPaginationItemStyle = function genPaginationItemStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, "".concat(componentCls, "-item"), _defineProperty(_defineProperty({
      display: 'inline-block',
      minWidth: token.itemSize,
      height: token.itemSize,
      marginInlineEnd: token.marginXS,
      fontFamily: token.fontFamily,
      lineHeight: (0, _cssinjs.unit)(token.calc(token.itemSize).sub(2).equal()),
      textAlign: 'center',
      verticalAlign: 'middle',
      listStyle: 'none',
      backgroundColor: 'transparent',
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " transparent"),
      borderRadius: token.borderRadius,
      outline: 0,
      cursor: 'pointer',
      userSelect: 'none',
      a: {
        display: 'block',
        padding: "0 ".concat((0, _cssinjs.unit)(token.paginationItemPaddingInline)),
        color: token.colorText,
        '&:hover': {
          textDecoration: 'none'
        }
      }
    }, "&:not(".concat(componentCls, "-item-active)"), {
      '&:hover': {
        transition: "all ".concat(token.motionDurationMid),
        backgroundColor: token.colorBgTextHover
      },
      '&:active': {
        backgroundColor: token.colorBgTextActive
      }
    }), '&-active', {
      fontWeight: token.fontWeightStrong,
      backgroundColor: token.itemActiveBg,
      borderColor: token.colorPrimary,
      a: {
        color: token.colorPrimary
      },
      '&:hover': {
        borderColor: token.colorPrimaryHover
      },
      '&:hover a': {
        color: token.colorPrimaryHover
      }
    }));
  };
  var genPaginationStyle = function genPaginationStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty(_defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _index2.resetComponent)(token)), _defineProperty({
      'ul, ol': {
        margin: 0,
        padding: 0,
        listStyle: 'none'
      },
      '&::after': {
        display: 'block',
        clear: 'both',
        height: 0,
        overflow: 'hidden',
        visibility: 'hidden',
        content: '""'
      }
    }, "".concat(componentCls, "-total-text"), {
      display: 'inline-block',
      height: token.itemSize,
      marginInlineEnd: token.marginXS,
      lineHeight: (0, _cssinjs.unit)(token.calc(token.itemSize).sub(2).equal()),
      verticalAlign: 'middle'
    })), genPaginationItemStyle(token)), genPaginationJumpStyle(token)), genPaginationSimpleStyle(token)), genPaginationMiniStyle(token)), genPaginationDisabledStyle(token)), _defineProperty(_defineProperty({}, "@media only screen and (max-width: ".concat(token.screenLG, "px)"), _defineProperty({}, "".concat(componentCls, "-item"), {
      '&-after-jump-prev, &-before-jump-next': {
        display: 'none'
      }
    })), "@media only screen and (max-width: ".concat(token.screenSM, "px)"), _defineProperty({}, "".concat(componentCls, "-options"), {
      display: 'none'
    })))), "&".concat(token.componentCls, "-rtl"), {
      direction: 'rtl'
    });
  };
  var genPaginationFocusStyle = function genPaginationFocusStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, "".concat(componentCls, ":not(").concat(componentCls, "-disabled)"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-item"), Object.assign({}, (0, _index2.genFocusStyle)(token))), "".concat(componentCls, "-jump-prev, ").concat(componentCls, "-jump-next"), {
      '&:focus-visible': Object.assign(_defineProperty(_defineProperty({}, "".concat(componentCls, "-item-link-icon"), {
        opacity: 1
      }), "".concat(componentCls, "-item-ellipsis"), {
        opacity: 0
      }), (0, _index2.genFocusOutline)(token))
    }), "".concat(componentCls, "-prev, ").concat(componentCls, "-next"), _defineProperty({}, "&:focus-visible ".concat(componentCls, "-item-link"), Object.assign({}, (0, _index2.genFocusOutline)(token)))));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return Object.assign({
      itemBg: token.colorBgContainer,
      itemSize: token.controlHeight,
      itemSizeSM: token.controlHeightSM,
      itemActiveBg: token.colorBgContainer,
      itemLinkBg: token.colorBgContainer,
      itemActiveColorDisabled: token.colorTextDisabled,
      itemActiveBgDisabled: token.controlItemBgActiveDisabled,
      itemInputBg: token.colorBgContainer,
      miniOptionsSizeChangerTop: 0
    }, (0, _index.initComponentToken)(token));
  };
  var prepareToken = _exports.prepareToken = function prepareToken(token) {
    return (0, _internal.mergeToken)(token, {
      inputOutlineOffset: 0,
      paginationMiniOptionsMarginInlineStart: token.calc(token.marginXXS).div(2).equal(),
      paginationMiniQuickJumperInputWidth: token.calc(token.controlHeightLG).mul(1.1).equal(),
      paginationItemPaddingInline: token.calc(token.marginXXS).mul(1.5).equal(),
      paginationEllipsisLetterSpacing: token.calc(token.marginXXS).div(2).equal(),
      paginationSlashMarginInlineStart: token.marginXXS,
      paginationSlashMarginInlineEnd: token.marginSM,
      paginationEllipsisTextIndent: '0.13em' // magic for ui experience
    }, (0, _index.initInputToken)(token));
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Pagination', function (token) {
    var paginationToken = prepareToken(token);
    return [genPaginationStyle(paginationToken), genPaginationFocusStyle(paginationToken)];
  }, prepareComponentToken);
});