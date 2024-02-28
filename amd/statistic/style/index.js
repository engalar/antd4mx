define(["exports", "antd4mx/style", "antd4mx/theme/internal"], function (_exports, _style, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genStatisticStyle = function genStatisticStyle(token) {
    var componentCls = token.componentCls,
      marginXXS = token.marginXXS,
      padding = token.padding,
      colorTextDescription = token.colorTextDescription,
      titleFontSize = token.titleFontSize,
      colorTextHeading = token.colorTextHeading,
      contentFontSize = token.contentFontSize,
      fontFamily = token.fontFamily;
    return _defineProperty({}, "".concat(componentCls), Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-title"), {
      marginBottom: marginXXS,
      color: colorTextDescription,
      fontSize: titleFontSize
    }), "".concat(componentCls, "-skeleton"), {
      paddingTop: padding
    }), "".concat(componentCls, "-content"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      color: colorTextHeading,
      fontSize: contentFontSize,
      fontFamily: fontFamily
    }, "".concat(componentCls, "-content-value"), {
      display: 'inline-block',
      direction: 'ltr'
    }), "".concat(componentCls, "-content-prefix, ").concat(componentCls, "-content-suffix"), {
      display: 'inline-block'
    }), "".concat(componentCls, "-content-prefix"), {
      marginInlineEnd: marginXXS
    }), "".concat(componentCls, "-content-suffix"), {
      marginInlineStart: marginXXS
    }))));
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var fontSizeHeading3 = token.fontSizeHeading3,
      fontSize = token.fontSize;
    return {
      titleFontSize: fontSize,
      contentFontSize: fontSizeHeading3
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Statistic', function (token) {
    var statisticToken = (0, _internal.mergeToken)(token, {});
    return [genStatisticStyle(statisticToken)];
  }, prepareComponentToken);
});