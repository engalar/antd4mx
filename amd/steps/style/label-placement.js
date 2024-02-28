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
  var genStepsLabelPlacementStyle = function genStepsLabelPlacementStyle(token) {
    var componentCls = token.componentCls,
      iconSize = token.iconSize,
      lineHeight = token.lineHeight,
      iconSizeSM = token.iconSizeSM;
    return _defineProperty({}, "&".concat(componentCls, "-label-vertical"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-item"), {
      overflow: 'visible',
      '&-tail': {
        marginInlineStart: token.calc(iconSize).div(2).add(token.controlHeightLG).equal(),
        padding: "".concat((0, _cssinjs.unit)(token.paddingXXS), " ").concat((0, _cssinjs.unit)(token.paddingLG))
      },
      '&-content': {
        display: 'block',
        width: token.calc(iconSize).div(2).add(token.controlHeightLG).mul(2).equal(),
        marginTop: token.marginSM,
        textAlign: 'center'
      },
      '&-icon': {
        display: 'inline-block',
        marginInlineStart: token.controlHeightLG
      },
      '&-title': {
        paddingInlineEnd: 0,
        paddingInlineStart: 0,
        '&::after': {
          display: 'none'
        }
      },
      '&-subtitle': {
        display: 'block',
        marginBottom: token.marginXXS,
        marginInlineStart: 0,
        lineHeight: lineHeight
      }
    }), "&".concat(componentCls, "-small:not(").concat(componentCls, "-dot)"), _defineProperty({}, "".concat(componentCls, "-item"), {
      '&-icon': {
        marginInlineStart: token.calc(iconSize).sub(iconSizeSM).div(2).add(token.controlHeightLG).equal()
      }
    })));
  };
  var _default = _exports["default"] = genStepsLabelPlacementStyle;
});