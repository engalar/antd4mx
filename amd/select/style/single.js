define(["exports", "antd4mx/style", "antd4mx/theme/internal", "@ant-design/cssinjs"], function (_exports, _style, _internal, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = genSingleStyle;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function genSizeStyle(token, suffix) {
    var componentCls = token.componentCls,
      inputPaddingHorizontalBase = token.inputPaddingHorizontalBase,
      borderRadius = token.borderRadius;
    var selectHeightWithoutBorder = token.calc(token.controlHeight).sub(token.calc(token.lineWidth).mul(2)).equal();
    var suffixCls = suffix ? "".concat(componentCls, "-").concat(suffix) : '';
    return _defineProperty({}, "".concat(componentCls, "-single").concat(suffixCls), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      fontSize: token.fontSize,
      height: token.controlHeight
    }, "".concat(componentCls, "-selector"), Object.assign(Object.assign({}, (0, _style.resetComponent)(token, true)), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      display: 'flex',
      borderRadius: borderRadius
    }, "".concat(componentCls, "-selection-search"), {
      position: 'absolute',
      top: 0,
      insetInlineStart: inputPaddingHorizontalBase,
      insetInlineEnd: inputPaddingHorizontalBase,
      bottom: 0,
      '&-input': {
        width: '100%',
        WebkitAppearance: 'textfield'
      }
    }), "\n          ".concat(componentCls, "-selection-item,\n          ").concat(componentCls, "-selection-placeholder\n        "), {
      padding: 0,
      lineHeight: (0, _cssinjs.unit)(selectHeightWithoutBorder),
      transition: "all ".concat(token.motionDurationSlow, ", visibility 0s"),
      alignSelf: 'center'
    }), "".concat(componentCls, "-selection-placeholder"), {
      transition: 'none',
      pointerEvents: 'none'
    }), ['&:after', /* For '' value baseline align */"".concat(componentCls, "-selection-item:empty:after"), /* For undefined value baseline align */"".concat(componentCls, "-selection-placeholder:empty:after")].join(','), {
      display: 'inline-block',
      width: 0,
      visibility: 'hidden',
      content: '"\\a0"'
    }))), "\n        &".concat(componentCls, "-show-arrow ").concat(componentCls, "-selection-item,\n        &").concat(componentCls, "-show-arrow ").concat(componentCls, "-selection-placeholder\n      "), {
      paddingInlineEnd: token.showArrowPaddingInlineEnd
    }), "&".concat(componentCls, "-open ").concat(componentCls, "-selection-item"), {
      color: token.colorTextPlaceholder
    }), "&:not(".concat(componentCls, "-customize-input)"), _defineProperty({}, "".concat(componentCls, "-selector"), _defineProperty(_defineProperty({
      width: '100%',
      height: '100%',
      padding: "0 ".concat((0, _cssinjs.unit)(inputPaddingHorizontalBase))
    }, "".concat(componentCls, "-selection-search-input"), {
      height: selectHeightWithoutBorder
    }), '&:after', {
      lineHeight: (0, _cssinjs.unit)(selectHeightWithoutBorder)
    }))), "&".concat(componentCls, "-customize-input"), _defineProperty({}, "".concat(componentCls, "-selector"), _defineProperty(_defineProperty({
      '&:after': {
        display: 'none'
      }
    }, "".concat(componentCls, "-selection-search"), {
      position: 'static',
      width: '100%'
    }), "".concat(componentCls, "-selection-placeholder"), {
      position: 'absolute',
      insetInlineStart: 0,
      insetInlineEnd: 0,
      padding: "0 ".concat((0, _cssinjs.unit)(inputPaddingHorizontalBase)),
      '&:after': {
        display: 'none'
      }
    }))));
  }
  function genSingleStyle(token) {
    var componentCls = token.componentCls;
    var inputPaddingHorizontalSM = token.calc(token.controlPaddingHorizontalSM).sub(token.lineWidth).equal();
    return [genSizeStyle(token),
    // ======================== Small ========================
    // Shared
    genSizeStyle((0, _internal.mergeToken)(token, {
      controlHeight: token.controlHeightSM,
      borderRadius: token.borderRadiusSM
    }), 'sm'), // padding
    _defineProperty({}, "".concat(componentCls, "-single").concat(componentCls, "-sm"), _defineProperty({}, "&:not(".concat(componentCls, "-customize-input)"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-selection-search"), {
      insetInlineStart: inputPaddingHorizontalSM,
      insetInlineEnd: inputPaddingHorizontalSM
    }), "".concat(componentCls, "-selector"), {
      padding: "0 ".concat((0, _cssinjs.unit)(inputPaddingHorizontalSM))
    }), "&".concat(componentCls, "-show-arrow ").concat(componentCls, "-selection-search"), {
      insetInlineEnd: token.calc(inputPaddingHorizontalSM).add(token.calc(token.fontSize).mul(1.5)).equal()
    }), "\n            &".concat(componentCls, "-show-arrow ").concat(componentCls, "-selection-item,\n            &").concat(componentCls, "-show-arrow ").concat(componentCls, "-selection-placeholder\n          "), {
      paddingInlineEnd: token.calc(token.fontSize).mul(1.5).equal()
    }))),
    // ======================== Large ========================
    // Shared
    genSizeStyle((0, _internal.mergeToken)(token, {
      controlHeight: token.singleItemHeightLG,
      fontSize: token.fontSizeLG,
      borderRadius: token.borderRadiusLG
    }), 'lg')];
  }
});