define(["exports", "@ant-design/cssinjs", "@ctrl/tinycolor"], function (_exports, _cssinjs, _tinycolor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.genPanelStyle = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genPickerCellInnerStyle = function genPickerCellInnerStyle(token) {
    var _ref;
    var pickerCellCls = token.pickerCellCls,
      pickerCellInnerCls = token.pickerCellInnerCls,
      cellHeight = token.cellHeight,
      borderRadiusSM = token.borderRadiusSM,
      motionDurationMid = token.motionDurationMid,
      cellHoverBg = token.cellHoverBg,
      lineWidth = token.lineWidth,
      lineType = token.lineType,
      colorPrimary = token.colorPrimary,
      cellActiveWithRangeBg = token.cellActiveWithRangeBg,
      colorTextLightSolid = token.colorTextLightSolid,
      colorTextDisabled = token.colorTextDisabled,
      cellBgDisabled = token.cellBgDisabled,
      colorFillSecondary = token.colorFillSecondary;
    return _ref = {
      '&::before': {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 0,
        insetInlineEnd: 0,
        zIndex: 1,
        height: cellHeight,
        transform: 'translateY(-50%)',
        content: '""'
      }
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, pickerCellInnerCls, {
      position: 'relative',
      zIndex: 2,
      display: 'inline-block',
      minWidth: cellHeight,
      height: cellHeight,
      lineHeight: (0, _cssinjs.unit)(cellHeight),
      borderRadius: borderRadiusSM,
      transition: "background ".concat(motionDurationMid)
    }), "&:hover:not(".concat(pickerCellCls, "-in-view),\n    &:hover:not(").concat(pickerCellCls, "-selected):not(").concat(pickerCellCls, "-range-start):not(").concat(pickerCellCls, "-range-end)"), _defineProperty({}, pickerCellInnerCls, {
      background: cellHoverBg
    })), "&-in-view".concat(pickerCellCls, "-today ").concat(pickerCellInnerCls), {
      '&::before': {
        position: 'absolute',
        top: 0,
        insetInlineEnd: 0,
        bottom: 0,
        insetInlineStart: 0,
        zIndex: 1,
        border: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorPrimary),
        borderRadius: borderRadiusSM,
        content: '""'
      }
    }), "&-in-view".concat(pickerCellCls, "-in-range,\n      &-in-view").concat(pickerCellCls, "-range-start,\n      &-in-view").concat(pickerCellCls, "-range-end"), _defineProperty({
      position: 'relative'
    }, "&:not(".concat(pickerCellCls, "-disabled):before"), {
      background: cellActiveWithRangeBg
    })), "&-in-view".concat(pickerCellCls, "-selected,\n      &-in-view").concat(pickerCellCls, "-range-start,\n      &-in-view").concat(pickerCellCls, "-range-end"), _defineProperty(_defineProperty({}, "&:not(".concat(pickerCellCls, "-disabled) ").concat(pickerCellInnerCls), {
      color: colorTextLightSolid,
      background: colorPrimary
    }), "&".concat(pickerCellCls, "-disabled ").concat(pickerCellInnerCls), {
      background: colorFillSecondary
    })), "&-in-view".concat(pickerCellCls, "-range-start:not(").concat(pickerCellCls, "-disabled):before"), {
      insetInlineStart: '50%'
    }), "&-in-view".concat(pickerCellCls, "-range-end:not(").concat(pickerCellCls, "-disabled):before"), {
      insetInlineEnd: '50%'
    }), "&-in-view".concat(pickerCellCls, "-range-start:not(").concat(pickerCellCls, "-range-end) ").concat(pickerCellInnerCls), {
      borderStartStartRadius: borderRadiusSM,
      borderEndStartRadius: borderRadiusSM,
      borderStartEndRadius: 0,
      borderEndEndRadius: 0
    }), "&-in-view".concat(pickerCellCls, "-range-end:not(").concat(pickerCellCls, "-range-start) ").concat(pickerCellInnerCls), {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      borderStartEndRadius: borderRadiusSM,
      borderEndEndRadius: borderRadiusSM
    }), '&-disabled', _defineProperty(_defineProperty({
      color: colorTextDisabled,
      pointerEvents: 'none'
    }, pickerCellInnerCls, {
      background: 'transparent'
    }), '&::before', {
      background: cellBgDisabled
    })), _defineProperty(_ref, "&-disabled".concat(pickerCellCls, "-today ").concat(pickerCellInnerCls, "::before"), {
      borderColor: colorTextDisabled
    });
  };
  var genPanelStyle = _exports.genPanelStyle = function genPanelStyle(token) {
    var _componentCls;
    var componentCls = token.componentCls,
      pickerCellCls = token.pickerCellCls,
      pickerCellInnerCls = token.pickerCellInnerCls,
      pickerYearMonthCellWidth = token.pickerYearMonthCellWidth,
      pickerControlIconSize = token.pickerControlIconSize,
      cellWidth = token.cellWidth,
      paddingSM = token.paddingSM,
      paddingXS = token.paddingXS,
      paddingXXS = token.paddingXXS,
      colorBgContainer = token.colorBgContainer,
      lineWidth = token.lineWidth,
      lineType = token.lineType,
      borderRadiusLG = token.borderRadiusLG,
      colorPrimary = token.colorPrimary,
      colorTextHeading = token.colorTextHeading,
      colorSplit = token.colorSplit,
      pickerControlIconBorderWidth = token.pickerControlIconBorderWidth,
      colorIcon = token.colorIcon,
      textHeight = token.textHeight,
      motionDurationMid = token.motionDurationMid,
      colorIconHover = token.colorIconHover,
      fontWeightStrong = token.fontWeightStrong,
      cellHeight = token.cellHeight,
      pickerCellPaddingVertical = token.pickerCellPaddingVertical,
      colorTextDisabled = token.colorTextDisabled,
      colorText = token.colorText,
      fontSize = token.fontSize,
      motionDurationSlow = token.motionDurationSlow,
      withoutTimeCellHeight = token.withoutTimeCellHeight,
      pickerQuarterPanelContentHeight = token.pickerQuarterPanelContentHeight,
      borderRadiusSM = token.borderRadiusSM,
      colorTextLightSolid = token.colorTextLightSolid,
      cellHoverBg = token.cellHoverBg,
      timeColumnHeight = token.timeColumnHeight,
      timeColumnWidth = token.timeColumnWidth,
      timeCellHeight = token.timeCellHeight,
      controlItemBgActive = token.controlItemBgActive,
      marginXXS = token.marginXXS,
      pickerDatePanelPaddingHorizontal = token.pickerDatePanelPaddingHorizontal,
      pickerControlIconMargin = token.pickerControlIconMargin;
    var pickerPanelWidth = token.calc(cellWidth).mul(7).add(token.calc(pickerDatePanelPaddingHorizontal).mul(2)).equal();
    return _defineProperty({}, componentCls, (_componentCls = {
      '&-panel': {
        display: 'inline-flex',
        flexDirection: 'column',
        textAlign: 'center',
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        outline: 'none',
        '&-focused': {
          borderColor: colorPrimary
        },
        '&-rtl': _defineProperty(_defineProperty({
          direction: 'rtl'
        }, "".concat(componentCls, "-prev-icon,\n              ").concat(componentCls, "-super-prev-icon"), {
          transform: 'rotate(45deg)'
        }), "".concat(componentCls, "-next-icon,\n              ").concat(componentCls, "-super-next-icon"), {
          transform: 'rotate(-135deg)'
        })
      }
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_componentCls, "&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel,\n        &-week-panel,\n        &-date-panel,\n        &-time-panel", {
      display: 'flex',
      flexDirection: 'column',
      width: pickerPanelWidth
    }), '&-header', {
      display: 'flex',
      padding: "0 ".concat((0, _cssinjs.unit)(paddingXS)),
      color: colorTextHeading,
      borderBottom: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorSplit),
      '> *': {
        flex: 'none'
      },
      button: {
        padding: 0,
        color: colorIcon,
        lineHeight: (0, _cssinjs.unit)(textHeight),
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        transition: "color ".concat(motionDurationMid),
        fontSize: 'inherit'
      },
      '> button': {
        minWidth: '1.6em',
        fontSize: fontSize,
        '&:hover': {
          color: colorIconHover
        },
        '&:disabled': {
          opacity: 0.25,
          pointerEvents: 'none'
        }
      },
      '&-view': {
        flex: 'auto',
        fontWeight: fontWeightStrong,
        lineHeight: (0, _cssinjs.unit)(textHeight),
        button: {
          color: 'inherit',
          fontWeight: 'inherit',
          verticalAlign: 'top',
          '&:not(:first-child)': {
            marginInlineStart: paddingXS
          },
          '&:hover': {
            color: colorPrimary
          }
        }
      }
    }), "&-prev-icon,\n        &-next-icon,\n        &-super-prev-icon,\n        &-super-next-icon", {
      position: 'relative',
      display: 'inline-block',
      width: pickerControlIconSize,
      height: pickerControlIconSize,
      '&::before': {
        position: 'absolute',
        top: 0,
        insetInlineStart: 0,
        display: 'inline-block',
        width: pickerControlIconSize,
        height: pickerControlIconSize,
        border: "0 solid currentcolor",
        borderBlockStartWidth: pickerControlIconBorderWidth,
        borderBlockEndWidth: 0,
        borderInlineStartWidth: pickerControlIconBorderWidth,
        borderInlineEndWidth: 0,
        content: '""'
      }
    }), "&-super-prev-icon,\n        &-super-next-icon", {
      '&::after': {
        position: 'absolute',
        top: pickerControlIconMargin,
        insetInlineStart: pickerControlIconMargin,
        display: 'inline-block',
        width: pickerControlIconSize,
        height: pickerControlIconSize,
        border: '0 solid currentcolor',
        borderBlockStartWidth: pickerControlIconBorderWidth,
        borderBlockEndWidth: 0,
        borderInlineStartWidth: pickerControlIconBorderWidth,
        borderInlineEndWidth: 0,
        content: '""'
      }
    }), "&-prev-icon,\n        &-super-prev-icon", {
      transform: 'rotate(-45deg)'
    }), "&-next-icon,\n        &-super-next-icon", {
      transform: 'rotate(135deg)'
    }), '&-content', {
      width: '100%',
      tableLayout: 'fixed',
      borderCollapse: 'collapse',
      'th, td': {
        position: 'relative',
        minWidth: cellHeight,
        fontWeight: 'normal'
      },
      th: {
        height: token.calc(cellHeight).add(token.calc(pickerCellPaddingVertical).mul(2)).equal(),
        color: colorText,
        verticalAlign: 'middle'
      }
    }), '&-cell', Object.assign({
      padding: "".concat((0, _cssinjs.unit)(pickerCellPaddingVertical), " 0"),
      color: colorTextDisabled,
      cursor: 'pointer',
      // In view
      '&-in-view': {
        color: colorText
      }
    }, genPickerCellInnerStyle(token))), "&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel", _defineProperty(_defineProperty({}, "".concat(componentCls, "-content"), {
      height: token.calc(withoutTimeCellHeight).mul(4).equal()
    }), pickerCellInnerCls, {
      padding: "0 ".concat((0, _cssinjs.unit)(paddingXS))
    })), '&-quarter-panel', _defineProperty({}, "".concat(componentCls, "-content"), {
      height: pickerQuarterPanelContentHeight
    })), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_componentCls, '&-decade-panel', _defineProperty(_defineProperty({}, pickerCellInnerCls, {
      padding: "0 ".concat((0, _cssinjs.unit)(token.calc(paddingXS).div(2).equal()))
    }), "".concat(componentCls, "-cell::before"), {
      display: 'none'
    })), "&-year-panel,\n        &-quarter-panel,\n        &-month-panel", _defineProperty(_defineProperty({}, "".concat(componentCls, "-body"), {
      padding: "0 ".concat((0, _cssinjs.unit)(paddingXS))
    }), pickerCellInnerCls, {
      width: pickerYearMonthCellWidth
    })), '&-date-panel', _defineProperty(_defineProperty({}, "".concat(componentCls, "-body"), {
      padding: "".concat((0, _cssinjs.unit)(paddingXS), " ").concat((0, _cssinjs.unit)(pickerDatePanelPaddingHorizontal))
    }), "".concat(componentCls, "-content th"), {
      boxSizing: 'border-box',
      padding: 0
    })), '&-week-panel', _defineProperty(_defineProperty({}, "".concat(componentCls, "-cell"), _defineProperty({}, "&:hover ".concat(pickerCellInnerCls, ",\n            &-selected ").concat(pickerCellInnerCls, ",\n            ").concat(pickerCellInnerCls), {
      background: 'transparent !important'
    })), '&-row', _defineProperty(_defineProperty(_defineProperty({
      td: {
        '&:before': {
          transition: "background ".concat(motionDurationMid)
        },
        '&:first-child:before': {
          borderStartStartRadius: borderRadiusSM,
          borderEndStartRadius: borderRadiusSM
        },
        '&:last-child:before': {
          borderStartEndRadius: borderRadiusSM,
          borderEndEndRadius: borderRadiusSM
        }
      }
    }, "&:hover td", {
      '&:before': {
        background: cellHoverBg
      }
    }), "&-range-start td,\n            &-range-end td,\n            &-selected td", _defineProperty({}, "&".concat(pickerCellCls), _defineProperty(_defineProperty({
      '&:before': {
        background: colorPrimary
      }
    }, "&".concat(componentCls, "-cell-week"), {
      color: new _tinycolor.TinyColor(colorTextLightSolid).setAlpha(0.5).toHexString()
    }), pickerCellInnerCls, {
      color: colorTextLightSolid
    }))), "&-range-hover td:before", {
      background: controlItemBgActive
    }))), "&-week-panel, &-date-panel-show-week", _defineProperty(_defineProperty({}, "".concat(componentCls, "-body"), {
      padding: "".concat((0, _cssinjs.unit)(paddingXS), " ").concat((0, _cssinjs.unit)(paddingSM))
    }), "".concat(componentCls, "-content th"), {
      width: 'auto'
    })), '&-datetime-panel', _defineProperty(_defineProperty(_defineProperty({
      display: 'flex'
    }, "".concat(componentCls, "-time-panel"), {
      borderInlineStart: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorSplit)
    }), "".concat(componentCls, "-date-panel,\n          ").concat(componentCls, "-time-panel"), {
      transition: "opacity ".concat(motionDurationSlow)
    }), '&-active', _defineProperty({}, "".concat(componentCls, "-date-panel,\n            ").concat(componentCls, "-time-panel"), {
      opacity: 0.3,
      '&-active': {
        opacity: 1
      }
    }))), '&-time-panel', _defineProperty(_defineProperty({
      width: 'auto',
      minWidth: 'auto',
      direction: 'ltr'
    }, "".concat(componentCls, "-content"), {
      display: 'flex',
      flex: 'auto',
      height: timeColumnHeight
    }), '&-column', {
      flex: '1 0 auto',
      width: timeColumnWidth,
      margin: "".concat((0, _cssinjs.unit)(paddingXXS), " 0"),
      padding: 0,
      overflowY: 'hidden',
      textAlign: 'start',
      listStyle: 'none',
      transition: "background ".concat(motionDurationMid),
      overflowX: 'hidden',
      '&::-webkit-scrollbar': {
        width: 8,
        backgroundColor: 'transparent'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: token.colorTextTertiary,
        borderRadius: 4
      },
      // For Firefox
      '&': {
        scrollbarWidth: 'thin',
        scrollbarColor: "".concat(token.colorTextTertiary, " transparent")
      },
      '&::after': {
        display: 'block',
        height: token.calc('100%').sub(timeCellHeight).equal(),
        content: '""'
      },
      '&:not(:first-child)': {
        borderInlineStart: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorSplit)
      },
      '&-active': {
        background: new _tinycolor.TinyColor(controlItemBgActive).setAlpha(0.2).toHexString()
      },
      '&:hover': {
        overflowY: 'auto'
      },
      '> li': _defineProperty({
        margin: 0,
        padding: 0
      }, "&".concat(componentCls, "-time-panel-cell"), _defineProperty(_defineProperty(_defineProperty({
        marginInline: marginXXS
      }, "".concat(componentCls, "-time-panel-cell-inner"), {
        display: 'block',
        width: token.calc(timeColumnWidth).sub(token.calc(marginXXS).mul(2)).equal(),
        height: timeCellHeight,
        margin: 0,
        paddingBlock: 0,
        paddingInlineEnd: 0,
        paddingInlineStart: token.calc(timeColumnWidth).sub(timeCellHeight).div(2).equal(),
        color: colorText,
        lineHeight: (0, _cssinjs.unit)(timeCellHeight),
        borderRadius: borderRadiusSM,
        cursor: 'pointer',
        transition: "background ".concat(motionDurationMid),
        '&:hover': {
          background: cellHoverBg
        }
      }), '&-selected', _defineProperty({}, "".concat(componentCls, "-time-panel-cell-inner"), {
        background: controlItemBgActive
      })), '&-disabled', _defineProperty({}, "".concat(componentCls, "-time-panel-cell-inner"), {
        color: colorTextDisabled,
        background: 'transparent',
        cursor: 'not-allowed'
      })))
    }))));
  };
  var genPickerPanelStyle = function genPickerPanelStyle(token) {
    var componentCls = token.componentCls,
      textHeight = token.textHeight,
      lineWidth = token.lineWidth,
      paddingSM = token.paddingSM,
      antCls = token.antCls,
      colorPrimary = token.colorPrimary,
      cellActiveWithRangeBg = token.cellActiveWithRangeBg,
      colorPrimaryBorder = token.colorPrimaryBorder,
      lineType = token.lineType,
      colorSplit = token.colorSplit;
    return _defineProperty({}, "".concat(componentCls, "-dropdown"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-footer"), {
      borderTop: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorSplit),
      '&-extra': {
        padding: "0 ".concat((0, _cssinjs.unit)(paddingSM)),
        lineHeight: (0, _cssinjs.unit)(token.calc(textHeight).sub(token.calc(lineWidth).mul(2)).equal()),
        textAlign: 'start',
        '&:not(:last-child)': {
          borderBottom: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorSplit)
        }
      }
    }), "".concat(componentCls, "-panels + ").concat(componentCls, "-footer ").concat(componentCls, "-ranges"), {
      justifyContent: 'space-between'
    }), "".concat(componentCls, "-ranges"), _defineProperty(_defineProperty(_defineProperty({
      marginBlock: 0,
      paddingInline: (0, _cssinjs.unit)(paddingSM),
      overflow: 'hidden',
      textAlign: 'start',
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '> li': {
        lineHeight: (0, _cssinjs.unit)(token.calc(textHeight).sub(token.calc(lineWidth).mul(2)).equal()),
        display: 'inline-block'
      }
    }, "".concat(componentCls, "-now-btn-disabled"), {
      pointerEvents: 'none',
      color: token.colorTextDisabled
    }), "".concat(componentCls, "-preset > ").concat(antCls, "-tag-blue"), {
      color: colorPrimary,
      background: cellActiveWithRangeBg,
      borderColor: colorPrimaryBorder,
      cursor: 'pointer'
    }), "".concat(componentCls, "-ok"), {
      paddingBlock: token.calc(lineWidth).mul(2).equal(),
      marginInlineStart: 'auto'
    })));
  };
  var _default = _exports["default"] = genPickerPanelStyle;
});