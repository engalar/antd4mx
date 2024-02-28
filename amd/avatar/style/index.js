define(["exports", "@ant-design/cssinjs", "antd4mx/style/index", "antd4mx/theme/internal"], function (_exports, _cssinjs, _index, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genBaseStyle = function genBaseStyle(token) {
    var antCls = token.antCls,
      componentCls = token.componentCls,
      iconCls = token.iconCls,
      avatarBg = token.avatarBg,
      avatarColor = token.avatarColor,
      containerSize = token.containerSize,
      containerSizeLG = token.containerSizeLG,
      containerSizeSM = token.containerSizeSM,
      textFontSize = token.textFontSize,
      textFontSizeLG = token.textFontSizeLG,
      textFontSizeSM = token.textFontSizeSM,
      borderRadius = token.borderRadius,
      borderRadiusLG = token.borderRadiusLG,
      borderRadiusSM = token.borderRadiusSM,
      lineWidth = token.lineWidth,
      lineType = token.lineType;
    // Avatar size style
    var avatarSizeStyle = function avatarSizeStyle(size, fontSize, radius) {
      return _defineProperty(_defineProperty({
        width: size,
        height: size,
        borderRadius: '50%'
      }, "&".concat(componentCls, "-square"), {
        borderRadius: radius
      }), "&".concat(componentCls, "-icon"), _defineProperty({
        fontSize: fontSize
      }, "> ".concat(iconCls), {
        margin: 0
      }));
    };
    return _defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty({
      position: 'relative',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      color: avatarColor,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      verticalAlign: 'middle',
      background: avatarBg,
      border: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " transparent")
    }, "&-image", {
      background: 'transparent'
    }), "".concat(antCls, "-image-img"), {
      display: 'block'
    })), avatarSizeStyle(containerSize, textFontSize, borderRadius)), _defineProperty(_defineProperty(_defineProperty({}, "&-lg", Object.assign({}, avatarSizeStyle(containerSizeLG, textFontSizeLG, borderRadiusLG))), "&-sm", Object.assign({}, avatarSizeStyle(containerSizeSM, textFontSizeSM, borderRadiusSM))), '> img', {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    })));
  };
  var genGroupStyle = function genGroupStyle(token) {
    var componentCls = token.componentCls,
      groupBorderColor = token.groupBorderColor,
      groupOverlapping = token.groupOverlapping,
      groupSpace = token.groupSpace;
    return _defineProperty(_defineProperty({}, "".concat(componentCls, "-group"), _defineProperty(_defineProperty({
      display: 'inline-flex'
    }, "".concat(componentCls), {
      borderColor: groupBorderColor
    }), "> *:not(:first-child)", {
      marginInlineStart: groupOverlapping
    })), "".concat(componentCls, "-group-popover"), _defineProperty({}, "".concat(componentCls, " + ").concat(componentCls), {
      marginInlineStart: groupSpace
    }));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var controlHeight = token.controlHeight,
      controlHeightLG = token.controlHeightLG,
      controlHeightSM = token.controlHeightSM,
      fontSize = token.fontSize,
      fontSizeLG = token.fontSizeLG,
      fontSizeXL = token.fontSizeXL,
      fontSizeHeading3 = token.fontSizeHeading3,
      marginXS = token.marginXS,
      marginXXS = token.marginXXS,
      colorBorderBg = token.colorBorderBg;
    return {
      containerSize: controlHeight,
      containerSizeLG: controlHeightLG,
      containerSizeSM: controlHeightSM,
      textFontSize: Math.round((fontSizeLG + fontSizeXL) / 2),
      textFontSizeLG: fontSizeHeading3,
      textFontSizeSM: fontSize,
      groupSpace: marginXXS,
      groupOverlapping: -marginXS,
      groupBorderColor: colorBorderBg
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Avatar', function (token) {
    var colorTextLightSolid = token.colorTextLightSolid,
      colorTextPlaceholder = token.colorTextPlaceholder;
    var avatarToken = (0, _internal.mergeToken)(token, {
      avatarBg: colorTextPlaceholder,
      avatarColor: colorTextLightSolid
    });
    return [genBaseStyle(avatarToken), genGroupStyle(avatarToken)];
  }, prepareComponentToken);
});