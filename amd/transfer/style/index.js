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
  var genTransferCustomizeStyle = function genTransferCustomizeStyle(token) {
    var antCls = token.antCls,
      componentCls = token.componentCls,
      listHeight = token.listHeight,
      controlHeightLG = token.controlHeightLG;
    var tableCls = "".concat(antCls, "-table");
    var inputCls = "".concat(antCls, "-input");
    return _defineProperty({}, "".concat(componentCls, "-customize-list"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-list"), {
      flex: '1 1 50%',
      width: 'auto',
      height: 'auto',
      minHeight: listHeight
    }), "".concat(tableCls, "-wrapper"), _defineProperty(_defineProperty({}, "".concat(tableCls, "-small"), _defineProperty({
      border: 0,
      borderRadius: 0
    }, "".concat(tableCls, "-selection-column"), {
      width: controlHeightLG,
      minWidth: controlHeightLG
    })), "".concat(tableCls, "-pagination").concat(tableCls, "-pagination"), {
      margin: 0,
      padding: token.paddingXS
    })), "".concat(inputCls, "[disabled]"), {
      backgroundColor: 'transparent'
    }));
  };
  var genTransferStatusColor = function genTransferStatusColor(token, color) {
    var componentCls = token.componentCls,
      colorBorder = token.colorBorder;
    return _defineProperty({}, "".concat(componentCls, "-list"), {
      borderColor: color,
      '&-search:not([disabled])': {
        borderColor: colorBorder
      }
    });
  };
  var genTransferStatusStyle = function genTransferStatusStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty(_defineProperty({}, "".concat(componentCls, "-status-error"), Object.assign({}, genTransferStatusColor(token, token.colorError))), "".concat(componentCls, "-status-warning"), Object.assign({}, genTransferStatusColor(token, token.colorWarning)));
  };
  var genTransferListStyle = function genTransferListStyle(token) {
    var componentCls = token.componentCls,
      colorBorder = token.colorBorder,
      colorSplit = token.colorSplit,
      lineWidth = token.lineWidth,
      itemHeight = token.itemHeight,
      headerHeight = token.headerHeight,
      transferHeaderVerticalPadding = token.transferHeaderVerticalPadding,
      itemPaddingBlock = token.itemPaddingBlock,
      controlItemBgActive = token.controlItemBgActive,
      colorTextDisabled = token.colorTextDisabled,
      listHeight = token.listHeight,
      listWidth = token.listWidth,
      listWidthLG = token.listWidthLG,
      fontSizeIcon = token.fontSizeIcon,
      marginXS = token.marginXS,
      paddingSM = token.paddingSM,
      lineType = token.lineType,
      antCls = token.antCls,
      iconCls = token.iconCls,
      motionDurationSlow = token.motionDurationSlow,
      controlItemBgHover = token.controlItemBgHover,
      borderRadiusLG = token.borderRadiusLG,
      colorBgContainer = token.colorBgContainer,
      colorText = token.colorText,
      controlItemBgActiveHover = token.controlItemBgActiveHover;
    return {
      display: 'flex',
      flexDirection: 'column',
      width: listWidth,
      height: listHeight,
      border: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorBorder),
      borderRadius: token.borderRadiusLG,
      '&-with-pagination': {
        width: listWidthLG,
        height: 'auto'
      },
      '&-search': _defineProperty({}, "".concat(iconCls, "-search"), {
        color: colorTextDisabled
      }),
      '&-header': {
        display: 'flex',
        flex: 'none',
        alignItems: 'center',
        height: headerHeight,
        // border-top is on the transfer dom. We should minus 1px for this
        padding: "".concat((0, _cssinjs.unit)(token.calc(transferHeaderVerticalPadding).sub(lineWidth).equal()), " ").concat((0, _cssinjs.unit)(paddingSM), " ").concat((0, _cssinjs.unit)(transferHeaderVerticalPadding)),
        color: colorText,
        background: colorBgContainer,
        borderBottom: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorSplit),
        borderRadius: "".concat((0, _cssinjs.unit)(borderRadiusLG), " ").concat((0, _cssinjs.unit)(borderRadiusLG), " 0 0"),
        '> *:not(:last-child)': {
          marginInlineEnd: 4 // This is magic and fixed number, DO NOT use token since it may change.
        },
        '> *': {
          flex: 'none'
        },
        '&-title': Object.assign(Object.assign({}, _index.textEllipsis), {
          flex: 'auto',
          textAlign: 'end'
        }),
        '&-dropdown': Object.assign(Object.assign({}, (0, _index.resetIcon)()), {
          fontSize: fontSizeIcon,
          transform: 'translateY(10%)',
          cursor: 'pointer',
          '&[disabled]': {
            cursor: 'not-allowed'
          }
        })
      },
      '&-body': {
        display: 'flex',
        flex: 'auto',
        flexDirection: 'column',
        fontSize: token.fontSize,
        // https://blog.csdn.net/qq449245884/article/details/107373672/
        minHeight: 0,
        '&-search-wrapper': {
          position: 'relative',
          flex: 'none',
          padding: paddingSM
        }
      },
      '&-content': _defineProperty({
        flex: 'auto',
        margin: 0,
        padding: 0,
        overflow: 'auto',
        listStyle: 'none',
        '&-item': _defineProperty(_defineProperty(_defineProperty({
          display: 'flex',
          alignItems: 'center',
          minHeight: itemHeight,
          padding: "".concat((0, _cssinjs.unit)(itemPaddingBlock), " ").concat((0, _cssinjs.unit)(paddingSM)),
          transition: "all ".concat(motionDurationSlow),
          '> *:not(:last-child)': {
            marginInlineEnd: marginXS
          },
          '> *': {
            flex: 'none'
          },
          '&-text': Object.assign(Object.assign({}, _index.textEllipsis), {
            flex: 'auto'
          }),
          '&-remove': {
            position: 'relative',
            color: colorBorder,
            cursor: 'pointer',
            transition: "all ".concat(motionDurationSlow),
            '&:hover': {
              color: token.colorLinkHover
            },
            '&::after': {
              position: 'absolute',
              inset: "-".concat((0, _cssinjs.unit)(itemPaddingBlock), " -50%"),
              content: '""'
            }
          }
        }, "&:not(".concat(componentCls, "-list-content-item-disabled)"), _defineProperty({
          '&:hover': {
            backgroundColor: controlItemBgHover,
            cursor: 'pointer'
          }
        }, "&".concat(componentCls, "-list-content-item-checked:hover"), {
          backgroundColor: controlItemBgActiveHover
        })), '&-checked', {
          backgroundColor: controlItemBgActive
        }), '&-disabled', {
          color: colorTextDisabled,
          cursor: 'not-allowed'
        })
      }, "&-show-remove ".concat(componentCls, "-list-content-item:not(").concat(componentCls, "-list-content-item-disabled):hover"), {
        background: 'transparent',
        cursor: 'default'
      }),
      '&-pagination': _defineProperty({
        padding: token.paddingXS,
        textAlign: 'end',
        borderTop: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorSplit)
      }, "".concat(antCls, "-pagination-options"), {
        paddingInlineEnd: token.paddingXS
      }),
      '&-body-not-found': {
        flex: 'none',
        width: '100%',
        margin: 'auto 0',
        color: colorTextDisabled,
        textAlign: 'center'
      },
      '&-footer': {
        borderTop: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorSplit)
      },
      // fix: https://github.com/ant-design/ant-design/issues/44489
      '&-checkbox': {
        lineHeight: 1
      }
    };
  };
  var genTransferStyle = function genTransferStyle(token) {
    var antCls = token.antCls,
      iconCls = token.iconCls,
      componentCls = token.componentCls,
      marginXS = token.marginXS,
      marginXXS = token.marginXXS,
      fontSizeIcon = token.fontSizeIcon,
      colorBgContainerDisabled = token.colorBgContainerDisabled;
    return _defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      display: 'flex',
      alignItems: 'stretch'
    }, "".concat(componentCls, "-disabled"), _defineProperty({}, "".concat(componentCls, "-list"), {
      background: colorBgContainerDisabled
    })), "".concat(componentCls, "-list"), genTransferListStyle(token)), "".concat(componentCls, "-operation"), _defineProperty({
      display: 'flex',
      flex: 'none',
      flexDirection: 'column',
      alignSelf: 'center',
      margin: "0 ".concat((0, _cssinjs.unit)(marginXS)),
      verticalAlign: 'middle'
    }, "".concat(antCls, "-btn"), _defineProperty({
      display: 'block',
      '&:first-child': {
        marginBottom: marginXXS
      }
    }, iconCls, {
      fontSize: fontSizeIcon
    })))));
  };
  var genTransferRTLStyle = function genTransferRTLStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, "".concat(componentCls, "-rtl"), {
      direction: 'rtl'
    });
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var fontSize = token.fontSize,
      lineHeight = token.lineHeight,
      controlHeight = token.controlHeight,
      controlHeightLG = token.controlHeightLG,
      lineWidth = token.lineWidth;
    var fontHeight = Math.round(fontSize * lineHeight);
    return {
      listWidth: 180,
      listHeight: 200,
      listWidthLG: 250,
      headerHeight: controlHeightLG,
      itemHeight: controlHeight,
      itemPaddingBlock: (controlHeight - fontHeight) / 2,
      transferHeaderVerticalPadding: Math.ceil((controlHeightLG - lineWidth - fontHeight) / 2)
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Transfer', function (token) {
    var transferToken = (0, _internal.mergeToken)(token);
    return [genTransferStyle(transferToken), genTransferCustomizeStyle(transferToken), genTransferStatusStyle(transferToken), genTransferRTLStyle(transferToken)];
  }, prepareComponentToken);
});