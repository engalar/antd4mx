define(["exports", "antd4mx/select/style/multiple", "antd4mx/theme/internal"], function (_exports, _multiple, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genSize = function genSize(token, suffix) {
    var componentCls = token.componentCls,
      selectHeight = token.selectHeight,
      fontHeight = token.fontHeight,
      lineWidth = token.lineWidth,
      calc = token.calc;
    var suffixCls = suffix ? "".concat(componentCls, "-").concat(suffix) : '';
    var height = token.calc(fontHeight).add(2).equal();
    var restHeight = function restHeight() {
      return calc(selectHeight).sub(height).sub(calc(lineWidth).mul(2));
    };
    var paddingTop = token.max(restHeight().div(2).equal(), 0);
    var paddingBottom = token.max(restHeight().sub(paddingTop).equal(), 0);
    return [(0, _multiple.genSelectionStyle)(token, suffix), _defineProperty({}, "".concat(componentCls, "-multiple").concat(suffixCls), {
      paddingTop: paddingTop,
      paddingBottom: paddingBottom,
      paddingInlineStart: paddingTop
    })];
  };
  var genPickerMultipleStyle = function genPickerMultipleStyle(token) {
    var componentCls = token.componentCls,
      calc = token.calc,
      lineWidth = token.lineWidth;
    var smallToken = (0, _internal.mergeToken)(token, {
      fontHeight: token.fontSize,
      selectHeight: token.controlHeightSM,
      multipleSelectItemHeight: token.controlHeightXS,
      borderRadius: token.borderRadiusSM,
      borderRadiusSM: token.borderRadiusXS
    });
    var largeToken = (0, _internal.mergeToken)(token, {
      fontHeight: calc(token.multipleItemHeightLG).sub(calc(lineWidth).mul(2).equal()).equal(),
      fontSize: token.fontSizeLG,
      selectHeight: token.controlHeightLG,
      multipleSelectItemHeight: token.multipleItemHeightLG,
      borderRadius: token.borderRadiusLG,
      borderRadiusSM: token.borderRadius
    });
    return [
    // ======================== Size ========================
    genSize(smallToken, 'small'), genSize(token), genSize(largeToken, 'large'),
    // ====================== Selection ======================
    (0, _multiple.genSelectionStyle)(token), _defineProperty({}, "".concat(componentCls).concat(componentCls, "-multiple"), _defineProperty(_defineProperty(_defineProperty({
      width: '100%'
    }, "".concat(componentCls, "-selector"), {
      flex: 'auto',
      padding: 0,
      '&:after': {
        margin: 0
      }
    }), "".concat(componentCls, "-selection-item"), {
      marginBlock: 0
    }), "".concat(componentCls, "-multiple-input"), {
      width: 0,
      height: 0,
      border: 0,
      visibility: 'hidden',
      position: 'absolute',
      zIndex: -1
    }))];
  };
  var _default = _exports["default"] = genPickerMultipleStyle;
});