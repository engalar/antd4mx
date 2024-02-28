define(["exports", "@ant-design/cssinjs", "antd4mx/badge/style/index", "antd4mx/style/index", "antd4mx/theme/internal"], function (_exports, _cssinjs, _index, _index2, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // ============================== Ribbon ==============================
  var genRibbonStyle = function genRibbonStyle(token) {
    var antCls = token.antCls,
      badgeFontHeight = token.badgeFontHeight,
      marginXS = token.marginXS,
      badgeRibbonOffset = token.badgeRibbonOffset,
      calc = token.calc;
    var ribbonPrefixCls = "".concat(antCls, "-ribbon");
    var ribbonWrapperPrefixCls = "".concat(antCls, "-ribbon-wrapper");
    var statusRibbonPreset = (0, _internal.genPresetColor)(token, function (colorKey, _ref) {
      var darkColor = _ref.darkColor;
      return _defineProperty({}, "&".concat(ribbonPrefixCls, "-color-").concat(colorKey), {
        background: darkColor,
        color: darkColor
      });
    });
    return _defineProperty(_defineProperty({}, "".concat(ribbonWrapperPrefixCls), {
      position: 'relative'
    }), "".concat(ribbonPrefixCls), Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _index2.resetComponent)(token)), _defineProperty(_defineProperty({
      position: 'absolute',
      top: marginXS,
      padding: "0 ".concat((0, _cssinjs.unit)(token.paddingXS)),
      color: token.colorPrimary,
      lineHeight: (0, _cssinjs.unit)(badgeFontHeight),
      whiteSpace: 'nowrap',
      backgroundColor: token.colorPrimary,
      borderRadius: token.borderRadiusSM
    }, "".concat(ribbonPrefixCls, "-text"), {
      color: token.colorTextLightSolid
    }), "".concat(ribbonPrefixCls, "-corner"), {
      position: 'absolute',
      top: '100%',
      width: badgeRibbonOffset,
      height: badgeRibbonOffset,
      color: 'currentcolor',
      border: "".concat((0, _cssinjs.unit)(calc(badgeRibbonOffset).div(2).equal()), " solid"),
      transform: token.badgeRibbonCornerTransform,
      transformOrigin: 'top',
      filter: token.badgeRibbonCornerFilter
    })), statusRibbonPreset), _defineProperty(_defineProperty(_defineProperty({}, "&".concat(ribbonPrefixCls, "-placement-end"), _defineProperty({
      insetInlineEnd: calc(badgeRibbonOffset).mul(-1).equal(),
      borderEndEndRadius: 0
    }, "".concat(ribbonPrefixCls, "-corner"), {
      insetInlineEnd: 0,
      borderInlineEndColor: 'transparent',
      borderBlockEndColor: 'transparent'
    })), "&".concat(ribbonPrefixCls, "-placement-start"), _defineProperty({
      insetInlineStart: calc(badgeRibbonOffset).mul(-1).equal(),
      borderEndStartRadius: 0
    }, "".concat(ribbonPrefixCls, "-corner"), {
      insetInlineStart: 0,
      borderBlockEndColor: 'transparent',
      borderInlineStartColor: 'transparent'
    })), '&-rtl', {
      direction: 'rtl'
    })));
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)(['Badge', 'Ribbon'], function (token) {
    var badgeToken = (0, _index.prepareToken)(token);
    return genRibbonStyle(badgeToken);
  }, _index.prepareComponentToken);
});