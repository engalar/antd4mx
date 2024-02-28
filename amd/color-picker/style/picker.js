define(["exports", "@ant-design/cssinjs", "antd4mx/color-picker/style/color-block"], function (_exports, _cssinjs, _colorBlock) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genPickerStyle = function genPickerStyle(token) {
    var componentCls = token.componentCls,
      controlHeightLG = token.controlHeightLG,
      borderRadiusSM = token.borderRadiusSM,
      colorPickerInsetShadow = token.colorPickerInsetShadow,
      marginSM = token.marginSM,
      colorBgElevated = token.colorBgElevated,
      colorFillSecondary = token.colorFillSecondary,
      lineWidthBold = token.lineWidthBold,
      colorPickerHandlerSize = token.colorPickerHandlerSize,
      colorPickerHandlerSizeSM = token.colorPickerHandlerSizeSM,
      colorPickerSliderHeight = token.colorPickerSliderHeight;
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-select"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-palette"), {
      minHeight: token.calc(controlHeightLG).mul(4).equal(),
      overflow: 'hidden',
      borderRadius: borderRadiusSM
    }), "".concat(componentCls, "-saturation"), {
      position: 'absolute',
      borderRadius: 'inherit',
      boxShadow: colorPickerInsetShadow,
      inset: 0
    }), "marginBottom", marginSM)), "".concat(componentCls, "-handler"), {
      width: colorPickerHandlerSize,
      height: colorPickerHandlerSize,
      border: "".concat((0, _cssinjs.unit)(lineWidthBold), " solid ").concat(colorBgElevated),
      position: 'relative',
      borderRadius: '50%',
      cursor: 'pointer',
      boxShadow: "".concat(colorPickerInsetShadow, ", 0 0 0 1px ").concat(colorFillSecondary),
      '&-sm': {
        width: colorPickerHandlerSizeSM,
        height: colorPickerHandlerSizeSM
      }
    }), "".concat(componentCls, "-slider"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      borderRadius: token.calc(colorPickerSliderHeight).div(2).equal()
    }, "".concat(componentCls, "-palette"), {
      height: colorPickerSliderHeight
    }), "".concat(componentCls, "-gradient"), {
      borderRadius: token.calc(colorPickerSliderHeight).div(2).equal(),
      boxShadow: colorPickerInsetShadow
    }), '&-alpha', (0, _colorBlock.getTransBg)("".concat((0, _cssinjs.unit)(colorPickerSliderHeight)), token.colorFillSecondary)), '&-hue', {
      marginBottom: marginSM
    })), "".concat(componentCls, "-slider-container"), _defineProperty({
      display: 'flex',
      gap: marginSM,
      marginBottom: marginSM
    }, "".concat(componentCls, "-slider-group"), {
      flex: 1,
      '&-disabled-alpha': _defineProperty({
        display: 'flex',
        alignItems: 'center'
      }, "".concat(componentCls, "-slider"), {
        flex: 1,
        marginBottom: 0
      })
    }));
  };
  var _default = _exports["default"] = genPickerStyle;
});