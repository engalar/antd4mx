define(["exports", "@ctrl/tinycolor", "antd4mx/input/style/token"], function (_exports, _tinycolor, _token) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = void 0;
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var _a;
    var handleVisible = (_a = token.handleVisible) !== null && _a !== void 0 ? _a : 'auto';
    return Object.assign(Object.assign({}, (0, _token.initComponentToken)(token)), {
      controlWidth: 90,
      handleWidth: token.controlHeightSM - token.lineWidth * 2,
      handleFontSize: token.fontSize / 2,
      handleVisible: handleVisible,
      handleActiveBg: token.colorFillAlter,
      handleBg: token.colorBgContainer,
      filledHandleBg: new _tinycolor.TinyColor(token.colorFillSecondary).onBackground(token.colorBgContainer).toHexString(),
      handleHoverColor: token.colorPrimary,
      handleBorderColor: token.colorBorder,
      handleOpacity: handleVisible === true ? 1 : 0
    });
  };
});