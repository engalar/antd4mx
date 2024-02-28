define(["exports", "@ant-design/cssinjs", "@ctrl/tinycolor", "antd4mx/style/index", "antd4mx/theme/internal", "antd4mx/table/style/bordered", "antd4mx/table/style/ellipsis", "antd4mx/table/style/empty", "antd4mx/table/style/expand", "antd4mx/table/style/filter", "antd4mx/table/style/fixed", "antd4mx/table/style/pagination", "antd4mx/table/style/radius", "antd4mx/table/style/rtl", "antd4mx/table/style/selection", "antd4mx/table/style/size", "antd4mx/table/style/sorter", "antd4mx/table/style/sticky", "antd4mx/table/style/summary", "antd4mx/table/style/virtual"], function (_exports, _cssinjs, _tinycolor, _index, _internal, _bordered, _ellipsis, _empty, _expand, _filter, _fixed, _pagination, _radius, _rtl, _selection, _size, _sorter, _sticky, _summary, _virtual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genTableStyle = function genTableStyle(token) {
    var componentCls = token.componentCls,
      fontWeightStrong = token.fontWeightStrong,
      tablePaddingVertical = token.tablePaddingVertical,
      tablePaddingHorizontal = token.tablePaddingHorizontal,
      tableExpandColumnWidth = token.tableExpandColumnWidth,
      lineWidth = token.lineWidth,
      lineType = token.lineType,
      tableBorderColor = token.tableBorderColor,
      tableFontSize = token.tableFontSize,
      tableBg = token.tableBg,
      tableRadius = token.tableRadius,
      tableHeaderTextColor = token.tableHeaderTextColor,
      motionDurationMid = token.motionDurationMid,
      tableHeaderBg = token.tableHeaderBg,
      tableHeaderCellSplitColor = token.tableHeaderCellSplitColor,
      tableFooterTextColor = token.tableFooterTextColor,
      tableFooterBg = token.tableFooterBg,
      calc = token.calc;
    var tableBorder = "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(tableBorderColor);
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), Object.assign(Object.assign({
      clear: 'both',
      maxWidth: '100%'
    }, (0, _index.clearFix)()), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), {
      fontSize: tableFontSize,
      background: tableBg,
      borderRadius: "".concat((0, _cssinjs.unit)(tableRadius), " ").concat((0, _cssinjs.unit)(tableRadius), " 0 0"),
      // https://github.com/ant-design/ant-design/issues/47486
      scrollbarColor: "".concat(token.tableScrollThumbBg, " ").concat(token.tableScrollBg)
    })), "table", {
      width: '100%',
      textAlign: 'start',
      borderRadius: "".concat((0, _cssinjs.unit)(tableRadius), " ").concat((0, _cssinjs.unit)(tableRadius), " 0 0"),
      borderCollapse: 'separate',
      borderSpacing: 0
    }), "\n          ".concat(componentCls, "-cell,\n          ").concat(componentCls, "-thead > tr > th,\n          ").concat(componentCls, "-tbody > tr > th,\n          ").concat(componentCls, "-tbody > tr > td,\n          tfoot > tr > th,\n          tfoot > tr > td\n        "), {
      position: 'relative',
      padding: "".concat((0, _cssinjs.unit)(tablePaddingVertical), " ").concat((0, _cssinjs.unit)(tablePaddingHorizontal)),
      overflowWrap: 'break-word'
    }), "".concat(componentCls, "-title"), {
      padding: "".concat((0, _cssinjs.unit)(tablePaddingVertical), " ").concat((0, _cssinjs.unit)(tablePaddingHorizontal))
    }), "".concat(componentCls, "-thead"), _defineProperty(_defineProperty({}, "\n          > tr > th,\n          > tr > td\n        ", _defineProperty({
      position: 'relative',
      color: tableHeaderTextColor,
      fontWeight: fontWeightStrong,
      textAlign: 'start',
      background: tableHeaderBg,
      borderBottom: tableBorder,
      transition: "background ".concat(motionDurationMid, " ease"),
      "&[colspan]:not([colspan='1'])": {
        textAlign: 'center'
      }
    }, "&:not(:last-child):not(".concat(componentCls, "-selection-column):not(").concat(componentCls, "-row-expand-icon-cell):not([colspan])::before"), {
      position: 'absolute',
      top: '50%',
      insetInlineEnd: 0,
      width: 1,
      height: '1.6em',
      backgroundColor: tableHeaderCellSplitColor,
      transform: 'translateY(-50%)',
      transition: "background-color ".concat(motionDurationMid),
      content: '""'
    })), '> tr:not(:last-child) > th[colspan]', {
      borderBottom: 0
    })), "".concat(componentCls, "-tbody"), {
      '> tr': _defineProperty(_defineProperty({}, "> th, > td", _defineProperty({
        transition: "background ".concat(motionDurationMid, ", border-color ").concat(motionDurationMid),
        borderBottom: tableBorder
      }, "\n              > ".concat(componentCls, "-wrapper:only-child,\n              > ").concat(componentCls, "-expanded-row-fixed > ").concat(componentCls, "-wrapper:only-child\n            "), _defineProperty({}, componentCls, _defineProperty({
        marginBlock: (0, _cssinjs.unit)(calc(tablePaddingVertical).mul(-1).equal()),
        marginInline: "".concat((0, _cssinjs.unit)(calc(tableExpandColumnWidth).sub(tablePaddingHorizontal).equal()), "\n                ").concat((0, _cssinjs.unit)(calc(tablePaddingHorizontal).mul(-1).equal()))
      }, "".concat(componentCls, "-tbody > tr:last-child > td"), {
        borderBottom: 0,
        '&:first-child, &:last-child': {
          borderRadius: 0
        }
      })))), '> th', {
        position: 'relative',
        color: tableHeaderTextColor,
        fontWeight: fontWeightStrong,
        textAlign: 'start',
        background: tableHeaderBg,
        borderBottom: tableBorder,
        transition: "background ".concat(motionDurationMid, " ease")
      })
    }), "".concat(componentCls, "-footer"), {
      padding: "".concat((0, _cssinjs.unit)(tablePaddingVertical), " ").concat((0, _cssinjs.unit)(tablePaddingHorizontal)),
      color: tableFooterTextColor,
      background: tableFooterBg
    })));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var colorFillAlter = token.colorFillAlter,
      colorBgContainer = token.colorBgContainer,
      colorTextHeading = token.colorTextHeading,
      colorFillSecondary = token.colorFillSecondary,
      colorFillContent = token.colorFillContent,
      controlItemBgActive = token.controlItemBgActive,
      controlItemBgActiveHover = token.controlItemBgActiveHover,
      padding = token.padding,
      paddingSM = token.paddingSM,
      paddingXS = token.paddingXS,
      colorBorderSecondary = token.colorBorderSecondary,
      borderRadiusLG = token.borderRadiusLG,
      controlHeight = token.controlHeight,
      colorTextPlaceholder = token.colorTextPlaceholder,
      fontSize = token.fontSize,
      fontSizeSM = token.fontSizeSM,
      lineHeight = token.lineHeight,
      lineWidth = token.lineWidth,
      colorIcon = token.colorIcon,
      colorIconHover = token.colorIconHover,
      opacityLoading = token.opacityLoading,
      controlInteractiveSize = token.controlInteractiveSize;
    var colorFillSecondarySolid = new _tinycolor.TinyColor(colorFillSecondary).onBackground(colorBgContainer).toHexShortString();
    var colorFillContentSolid = new _tinycolor.TinyColor(colorFillContent).onBackground(colorBgContainer).toHexShortString();
    var colorFillAlterSolid = new _tinycolor.TinyColor(colorFillAlter).onBackground(colorBgContainer).toHexShortString();
    var baseColorAction = new _tinycolor.TinyColor(colorIcon);
    var baseColorActionHover = new _tinycolor.TinyColor(colorIconHover);
    var expandIconHalfInner = controlInteractiveSize / 2 - lineWidth;
    var expandIconSize = expandIconHalfInner * 2 + lineWidth * 3;
    return {
      headerBg: colorFillAlterSolid,
      headerColor: colorTextHeading,
      headerSortActiveBg: colorFillSecondarySolid,
      headerSortHoverBg: colorFillContentSolid,
      bodySortBg: colorFillAlterSolid,
      rowHoverBg: colorFillAlterSolid,
      rowSelectedBg: controlItemBgActive,
      rowSelectedHoverBg: controlItemBgActiveHover,
      rowExpandedBg: colorFillAlter,
      cellPaddingBlock: padding,
      cellPaddingInline: padding,
      cellPaddingBlockMD: paddingSM,
      cellPaddingInlineMD: paddingXS,
      cellPaddingBlockSM: paddingXS,
      cellPaddingInlineSM: paddingXS,
      borderColor: colorBorderSecondary,
      headerBorderRadius: borderRadiusLG,
      footerBg: colorFillAlterSolid,
      footerColor: colorTextHeading,
      cellFontSize: fontSize,
      cellFontSizeMD: fontSize,
      cellFontSizeSM: fontSize,
      headerSplitColor: colorBorderSecondary,
      fixedHeaderSortActiveBg: colorFillSecondarySolid,
      headerFilterHoverBg: colorFillContent,
      filterDropdownMenuBg: colorBgContainer,
      filterDropdownBg: colorBgContainer,
      expandIconBg: colorBgContainer,
      selectionColumnWidth: controlHeight,
      stickyScrollBarBg: colorTextPlaceholder,
      stickyScrollBarBorderRadius: 100,
      expandIconMarginTop: (fontSize * lineHeight - lineWidth * 3) / 2 - Math.ceil((fontSizeSM * 1.4 - lineWidth * 3) / 2),
      headerIconColor: baseColorAction.clone().setAlpha(baseColorAction.getAlpha() * opacityLoading).toRgbString(),
      headerIconHoverColor: baseColorActionHover.clone().setAlpha(baseColorActionHover.getAlpha() * opacityLoading).toRgbString(),
      expandIconHalfInner: expandIconHalfInner,
      expandIconSize: expandIconSize,
      expandIconScale: controlInteractiveSize / expandIconSize
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Table', function (token) {
    var colorTextHeading = token.colorTextHeading,
      colorSplit = token.colorSplit,
      colorBgContainer = token.colorBgContainer,
      checkboxSize = token.controlInteractiveSize,
      headerBg = token.headerBg,
      headerColor = token.headerColor,
      headerSortActiveBg = token.headerSortActiveBg,
      headerSortHoverBg = token.headerSortHoverBg,
      bodySortBg = token.bodySortBg,
      rowHoverBg = token.rowHoverBg,
      rowSelectedBg = token.rowSelectedBg,
      rowSelectedHoverBg = token.rowSelectedHoverBg,
      rowExpandedBg = token.rowExpandedBg,
      cellPaddingBlock = token.cellPaddingBlock,
      cellPaddingInline = token.cellPaddingInline,
      cellPaddingBlockMD = token.cellPaddingBlockMD,
      cellPaddingInlineMD = token.cellPaddingInlineMD,
      cellPaddingBlockSM = token.cellPaddingBlockSM,
      cellPaddingInlineSM = token.cellPaddingInlineSM,
      borderColor = token.borderColor,
      footerBg = token.footerBg,
      footerColor = token.footerColor,
      headerBorderRadius = token.headerBorderRadius,
      cellFontSize = token.cellFontSize,
      cellFontSizeMD = token.cellFontSizeMD,
      cellFontSizeSM = token.cellFontSizeSM,
      headerSplitColor = token.headerSplitColor,
      fixedHeaderSortActiveBg = token.fixedHeaderSortActiveBg,
      headerFilterHoverBg = token.headerFilterHoverBg,
      filterDropdownBg = token.filterDropdownBg,
      expandIconBg = token.expandIconBg,
      selectionColumnWidth = token.selectionColumnWidth,
      stickyScrollBarBg = token.stickyScrollBarBg,
      calc = token.calc;
    var zIndexTableFixed = 2;
    var tableToken = (0, _internal.mergeToken)(token, {
      tableFontSize: cellFontSize,
      tableBg: colorBgContainer,
      tableRadius: headerBorderRadius,
      tablePaddingVertical: cellPaddingBlock,
      tablePaddingHorizontal: cellPaddingInline,
      tablePaddingVerticalMiddle: cellPaddingBlockMD,
      tablePaddingHorizontalMiddle: cellPaddingInlineMD,
      tablePaddingVerticalSmall: cellPaddingBlockSM,
      tablePaddingHorizontalSmall: cellPaddingInlineSM,
      tableBorderColor: borderColor,
      tableHeaderTextColor: headerColor,
      tableHeaderBg: headerBg,
      tableFooterTextColor: footerColor,
      tableFooterBg: footerBg,
      tableHeaderCellSplitColor: headerSplitColor,
      tableHeaderSortBg: headerSortActiveBg,
      tableHeaderSortHoverBg: headerSortHoverBg,
      tableBodySortBg: bodySortBg,
      tableFixedHeaderSortActiveBg: fixedHeaderSortActiveBg,
      tableHeaderFilterActiveBg: headerFilterHoverBg,
      tableFilterDropdownBg: filterDropdownBg,
      tableRowHoverBg: rowHoverBg,
      tableSelectedRowBg: rowSelectedBg,
      tableSelectedRowHoverBg: rowSelectedHoverBg,
      zIndexTableFixed: zIndexTableFixed,
      zIndexTableSticky: zIndexTableFixed + 1,
      tableFontSizeMiddle: cellFontSizeMD,
      tableFontSizeSmall: cellFontSizeSM,
      tableSelectionColumnWidth: selectionColumnWidth,
      tableExpandIconBg: expandIconBg,
      tableExpandColumnWidth: calc(checkboxSize).add(calc(token.padding).mul(2)).equal(),
      tableExpandedRowBg: rowExpandedBg,
      // Dropdown
      tableFilterDropdownWidth: 120,
      tableFilterDropdownHeight: 264,
      tableFilterDropdownSearchWidth: 140,
      // Virtual Scroll Bar
      tableScrollThumbSize: 8,
      // Mac scroll bar size
      tableScrollThumbBg: stickyScrollBarBg,
      tableScrollThumbBgHover: colorTextHeading,
      tableScrollBg: colorSplit
    });
    return [genTableStyle(tableToken), (0, _pagination["default"])(tableToken), (0, _summary["default"])(tableToken), (0, _sorter["default"])(tableToken), (0, _filter["default"])(tableToken), (0, _bordered["default"])(tableToken), (0, _radius["default"])(tableToken), (0, _expand["default"])(tableToken), (0, _summary["default"])(tableToken), (0, _empty["default"])(tableToken), (0, _selection["default"])(tableToken), (0, _fixed["default"])(tableToken), (0, _sticky["default"])(tableToken), (0, _ellipsis["default"])(tableToken), (0, _size["default"])(tableToken), (0, _rtl["default"])(tableToken), (0, _virtual["default"])(tableToken)];
  }, prepareComponentToken, {
    unitless: {
      expandIconScale: true
    }
  });
});