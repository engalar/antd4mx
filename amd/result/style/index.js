define(["exports", "@ant-design/cssinjs", "antd4mx/theme/internal"], function (_exports, _cssinjs, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // ============================== Styles ==============================
  var genBaseStyle = function genBaseStyle(token) {
    var componentCls = token.componentCls,
      lineHeightHeading3 = token.lineHeightHeading3,
      iconCls = token.iconCls,
      padding = token.padding,
      paddingXL = token.paddingXL,
      paddingXS = token.paddingXS,
      paddingLG = token.paddingLG,
      marginXS = token.marginXS,
      lineHeight = token.lineHeight;
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, componentCls, {
      padding: "".concat((0, _cssinjs.unit)(token.calc(paddingLG).mul(2).equal()), " ").concat((0, _cssinjs.unit)(paddingXL)),
      // RTL
      '&-rtl': {
        direction: 'rtl'
      }
    }), "".concat(componentCls, " ").concat(componentCls, "-image"), {
      width: token.imageWidth,
      height: token.imageHeight,
      margin: 'auto'
    }), "".concat(componentCls, " ").concat(componentCls, "-icon"), _defineProperty({
      marginBottom: paddingLG,
      textAlign: 'center'
    }, "& > ".concat(iconCls), {
      fontSize: token.iconFontSize
    })), "".concat(componentCls, " ").concat(componentCls, "-title"), {
      color: token.colorTextHeading,
      fontSize: token.titleFontSize,
      lineHeight: lineHeightHeading3,
      marginBlock: marginXS,
      textAlign: 'center'
    }), "".concat(componentCls, " ").concat(componentCls, "-subtitle"), {
      color: token.colorTextDescription,
      fontSize: token.subtitleFontSize,
      lineHeight: lineHeight,
      textAlign: 'center'
    }), "".concat(componentCls, " ").concat(componentCls, "-content"), {
      marginTop: paddingLG,
      padding: "".concat((0, _cssinjs.unit)(paddingLG), " ").concat((0, _cssinjs.unit)(token.calc(padding).mul(2.5).equal())),
      backgroundColor: token.colorFillAlter
    }), "".concat(componentCls, " ").concat(componentCls, "-extra"), {
      margin: token.extraMargin,
      textAlign: 'center',
      '& > *': {
        marginInlineEnd: paddingXS,
        '&:last-child': {
          marginInlineEnd: 0
        }
      }
    });
  };
  var genStatusIconStyle = function genStatusIconStyle(token) {
    var componentCls = token.componentCls,
      iconCls = token.iconCls;
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-success ").concat(componentCls, "-icon > ").concat(iconCls), {
      color: token.resultSuccessIconColor
    }), "".concat(componentCls, "-error ").concat(componentCls, "-icon > ").concat(iconCls), {
      color: token.resultErrorIconColor
    }), "".concat(componentCls, "-info ").concat(componentCls, "-icon > ").concat(iconCls), {
      color: token.resultInfoIconColor
    }), "".concat(componentCls, "-warning ").concat(componentCls, "-icon > ").concat(iconCls), {
      color: token.resultWarningIconColor
    });
  };
  var genResultStyle = function genResultStyle(token) {
    return [genBaseStyle(token), genStatusIconStyle(token)];
  };
  var getStyle = function getStyle(token) {
    return genResultStyle(token);
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      titleFontSize: token.fontSizeHeading3,
      subtitleFontSize: token.fontSize,
      iconFontSize: token.fontSizeHeading3 * 3,
      extraMargin: "".concat(token.paddingLG, "px 0 0 0")
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Result', function (token) {
    var resultInfoIconColor = token.colorInfo;
    var resultErrorIconColor = token.colorError;
    var resultSuccessIconColor = token.colorSuccess;
    var resultWarningIconColor = token.colorWarning;
    var resultToken = (0, _internal.mergeToken)(token, {
      resultInfoIconColor: resultInfoIconColor,
      resultErrorIconColor: resultErrorIconColor,
      resultSuccessIconColor: resultSuccessIconColor,
      resultWarningIconColor: resultWarningIconColor,
      imageWidth: 250,
      imageHeight: 295
    });
    return [getStyle(resultToken)];
  }, prepareComponentToken);
});