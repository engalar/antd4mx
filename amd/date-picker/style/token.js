define(["exports", "@ctrl/tinycolor", "antd4mx/input/style/token", "antd4mx/style/roundedArrow"], function (_exports, _tinycolor, _token, _roundedArrow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports.initPickerPanelToken = _exports.initPanelComponentToken = void 0;
  var initPickerPanelToken = _exports.initPickerPanelToken = function initPickerPanelToken(token) {
    var componentCls = token.componentCls,
      controlHeightLG = token.controlHeightLG,
      paddingXXS = token.paddingXXS,
      padding = token.padding;
    return {
      pickerCellCls: "".concat(componentCls, "-cell"),
      pickerCellInnerCls: "".concat(componentCls, "-cell-inner"),
      pickerYearMonthCellWidth: token.calc(controlHeightLG).mul(1.5).equal(),
      pickerQuarterPanelContentHeight: token.calc(controlHeightLG).mul(1.4).equal(),
      pickerCellPaddingVertical: token.calc(paddingXXS).add(token.calc(paddingXXS).div(2)).equal(),
      pickerCellBorderGap: 2,
      // Magic for gap between cells
      pickerControlIconSize: 7,
      pickerControlIconMargin: 4,
      pickerControlIconBorderWidth: 1.5,
      pickerDatePanelPaddingHorizontal: token.calc(padding).add(token.calc(paddingXXS).div(2)).equal() // 18 in normal
    };
  };
  var initPanelComponentToken = _exports.initPanelComponentToken = function initPanelComponentToken(token) {
    var colorBgContainerDisabled = token.colorBgContainerDisabled,
      controlHeightSM = token.controlHeightSM,
      controlHeightLG = token.controlHeightLG;
    return {
      cellHoverBg: token.controlItemBgHover,
      cellActiveWithRangeBg: token.controlItemBgActive,
      cellHoverWithRangeBg: new _tinycolor.TinyColor(token.colorPrimary).lighten(35).toHexString(),
      cellRangeBorderColor: new _tinycolor.TinyColor(token.colorPrimary).lighten(20).toHexString(),
      cellBgDisabled: colorBgContainerDisabled,
      timeColumnWidth: controlHeightLG * 1.4,
      timeColumnHeight: 28 * 8,
      timeCellHeight: 28,
      cellWidth: controlHeightSM * 1.5,
      cellHeight: controlHeightSM,
      textHeight: controlHeightLG,
      withoutTimeCellHeight: controlHeightLG * 1.65,
      multipleItemBg: token.colorFillSecondary,
      multipleItemBorderColor: 'transparent',
      multipleItemHeight: controlHeightSM,
      multipleItemHeightLG: token.controlHeight,
      multipleSelectorBgDisabled: colorBgContainerDisabled,
      multipleItemColorDisabled: token.colorTextDisabled,
      multipleItemBorderColorDisabled: 'transparent'
    };
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _token.initComponentToken)(token)), initPanelComponentToken(token)), (0, _roundedArrow.getArrowToken)(token)), {
      presetsWidth: 120,
      presetsMaxWidth: 200,
      zIndexPopup: token.zIndexPopupBase + 50
    });
  };
});