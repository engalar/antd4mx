define(["exports", "@ant-design/cssinjs"], function (_exports, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genPresetsStyle = function genPresetsStyle(token) {
    var componentCls = token.componentCls,
      antCls = token.antCls,
      colorTextQuaternary = token.colorTextQuaternary,
      paddingXXS = token.paddingXXS,
      colorPickerPresetColorSize = token.colorPickerPresetColorSize,
      fontSizeSM = token.fontSizeSM,
      colorText = token.colorText,
      lineHeightSM = token.lineHeightSM,
      lineWidth = token.lineWidth,
      borderRadius = token.borderRadius,
      colorFill = token.colorFill,
      colorWhite = token.colorWhite,
      marginXXS = token.marginXXS,
      paddingXS = token.paddingXS,
      fontHeightSM = token.fontHeightSM;
    return _defineProperty({}, "".concat(componentCls, "-presets"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(antCls, "-collapse-item > ").concat(antCls, "-collapse-header"), _defineProperty({
      padding: 0
    }, "".concat(antCls, "-collapse-expand-icon"), {
      height: fontHeightSM,
      color: colorTextQuaternary,
      paddingInlineEnd: paddingXXS
    })), "".concat(antCls, "-collapse"), {
      display: 'flex',
      flexDirection: 'column',
      gap: marginXXS
    }), "".concat(antCls, "-collapse-item > ").concat(antCls, "-collapse-content > ").concat(antCls, "-collapse-content-box"), {
      padding: "".concat((0, _cssinjs.unit)(paddingXS), " 0")
    }), '&-label', {
      fontSize: fontSizeSM,
      color: colorText,
      lineHeight: lineHeightSM
    }), '&-items', _defineProperty({
      display: 'flex',
      flexWrap: 'wrap',
      gap: token.calc(marginXXS).mul(1.5).equal()
    }, "".concat(componentCls, "-presets-color"), _defineProperty({
      position: 'relative',
      cursor: 'pointer',
      width: colorPickerPresetColorSize,
      height: colorPickerPresetColorSize,
      '&::before': {
        content: '""',
        pointerEvents: 'none',
        width: token.calc(colorPickerPresetColorSize).add(token.calc(lineWidth).mul(4)).equal(),
        height: token.calc(colorPickerPresetColorSize).add(token.calc(lineWidth).mul(4)).equal(),
        position: 'absolute',
        top: token.calc(lineWidth).mul(-2).equal(),
        insetInlineStart: token.calc(lineWidth).mul(-2).equal(),
        borderRadius: borderRadius,
        border: "".concat((0, _cssinjs.unit)(lineWidth), " solid transparent"),
        transition: "border-color ".concat(token.motionDurationMid, " ").concat(token.motionEaseInBack)
      },
      '&:hover::before': {
        borderColor: colorFill
      },
      '&::after': {
        boxSizing: 'border-box',
        position: 'absolute',
        top: '50%',
        insetInlineStart: '21.5%',
        display: 'table',
        width: token.calc(colorPickerPresetColorSize).div(13).mul(5).equal(),
        height: token.calc(colorPickerPresetColorSize).div(13).mul(8).equal(),
        border: "".concat((0, _cssinjs.unit)(token.lineWidthBold), " solid ").concat(token.colorWhite),
        borderTop: 0,
        borderInlineStart: 0,
        transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
        opacity: 0,
        content: '""',
        transition: "all ".concat(token.motionDurationFast, " ").concat(token.motionEaseInBack, ", opacity ").concat(token.motionDurationFast)
      }
    }, "&".concat(componentCls, "-presets-color-checked"), _defineProperty({
      '&::after': {
        opacity: 1,
        borderColor: colorWhite,
        transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
        transition: "transform ".concat(token.motionDurationMid, " ").concat(token.motionEaseOutBack, " ").concat(token.motionDurationFast)
      }
    }, "&".concat(componentCls, "-presets-color-bright"), {
      '&::after': {
        borderColor: 'rgba(0, 0, 0, 0.45)'
      }
    })))), '&-empty', {
      fontSize: fontSizeSM,
      color: colorTextQuaternary
    }));
  };
  var _default = _exports["default"] = genPresetsStyle;
});