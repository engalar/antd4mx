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
  var genInputStyle = function genInputStyle(token) {
    var componentCls = token.componentCls,
      antCls = token.antCls,
      fontSizeSM = token.fontSizeSM,
      lineHeightSM = token.lineHeightSM,
      colorPickerAlphaInputWidth = token.colorPickerAlphaInputWidth,
      marginXXS = token.marginXXS,
      paddingXXS = token.paddingXXS,
      controlHeightSM = token.controlHeightSM,
      marginXS = token.marginXS,
      fontSizeIcon = token.fontSizeIcon,
      paddingXS = token.paddingXS,
      colorTextPlaceholder = token.colorTextPlaceholder,
      colorPickerInputNumberHandleWidth = token.colorPickerInputNumberHandleWidth,
      lineWidth = token.lineWidth;
    return _defineProperty({}, "".concat(componentCls, "-input-container"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      display: 'flex'
    }, "".concat(componentCls, "-steppers").concat(antCls, "-input-number"), _defineProperty(_defineProperty({
      fontSize: fontSizeSM,
      lineHeight: lineHeightSM
    }, "".concat(antCls, "-input-number-input"), {
      paddingInlineStart: paddingXXS,
      paddingInlineEnd: 0
    }), "".concat(antCls, "-input-number-handler-wrap"), {
      width: colorPickerInputNumberHandleWidth
    })), "".concat(componentCls, "-steppers").concat(componentCls, "-alpha-input"), {
      flex: "0 0 ".concat((0, _cssinjs.unit)(colorPickerAlphaInputWidth)),
      marginInlineStart: marginXXS
    }), "".concat(componentCls, "-format-select").concat(antCls, "-select"), {
      marginInlineEnd: marginXS,
      width: 'auto',
      '&-single': _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(antCls, "-select-selector"), {
        padding: 0,
        border: 0
      }), "".concat(antCls, "-select-arrow"), {
        insetInlineEnd: 0
      }), "".concat(antCls, "-select-selection-item"), {
        paddingInlineEnd: token.calc(fontSizeIcon).add(marginXXS).equal(),
        fontSize: fontSizeSM,
        lineHeight: "".concat((0, _cssinjs.unit)(controlHeightSM))
      }), "".concat(antCls, "-select-item-option-content"), {
        fontSize: fontSizeSM,
        lineHeight: lineHeightSM
      }), "".concat(antCls, "-select-dropdown"), _defineProperty({}, "".concat(antCls, "-select-item"), {
        minHeight: 'auto'
      }))
    }), "".concat(componentCls, "-input"), _defineProperty(_defineProperty(_defineProperty({
      gap: marginXXS,
      alignItems: 'center',
      flex: 1,
      width: 0
    }, "".concat(componentCls, "-hsb-input,").concat(componentCls, "-rgb-input"), {
      display: 'flex',
      gap: marginXXS,
      alignItems: 'center'
    }), "".concat(componentCls, "-steppers"), {
      flex: 1
    }), "".concat(componentCls, "-hex-input").concat(antCls, "-input-affix-wrapper"), _defineProperty(_defineProperty({
      flex: 1,
      padding: "0 ".concat((0, _cssinjs.unit)(paddingXS))
    }, "".concat(antCls, "-input"), {
      fontSize: fontSizeSM,
      textTransform: 'uppercase',
      lineHeight: (0, _cssinjs.unit)(token.calc(controlHeightSM).sub(token.calc(lineWidth).mul(2)).equal())
    }), "".concat(antCls, "-input-prefix"), {
      color: colorTextPlaceholder
    }))));
  };
  var _default = _exports["default"] = genInputStyle;
});