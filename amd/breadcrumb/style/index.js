define(["exports", "@ant-design/cssinjs", "antd4mx/style", "antd4mx/theme/internal"], function (_exports, _cssinjs, _style, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genBreadcrumbStyle = function genBreadcrumbStyle(token) {
    var componentCls = token.componentCls,
      iconCls = token.iconCls,
      calc = token.calc;
    return _defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      color: token.itemColor,
      fontSize: token.fontSize
    }, iconCls, {
      fontSize: token.iconFontSize
    }), "ol", {
      display: 'flex',
      flexWrap: 'wrap',
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }), "a", Object.assign({
      color: token.linkColor,
      transition: "color ".concat(token.motionDurationMid),
      padding: "0 ".concat((0, _cssinjs.unit)(token.paddingXXS)),
      borderRadius: token.borderRadiusSM,
      height: token.fontHeight,
      display: 'inline-block',
      marginInline: calc(token.marginXXS).mul(-1).equal(),
      '&:hover': {
        color: token.linkHoverColor,
        backgroundColor: token.colorBgTextHover
      }
    }, (0, _style.genFocusStyle)(token))), "li:last-child", {
      color: token.lastItemColor
    }), "".concat(componentCls, "-separator"), {
      marginInline: token.separatorMargin,
      color: token.separatorColor
    }), "".concat(componentCls, "-link"), _defineProperty({}, "\n          > ".concat(iconCls, " + span,\n          > ").concat(iconCls, " + a\n        "), {
      marginInlineStart: token.marginXXS
    })), "".concat(componentCls, "-overlay-link"), _defineProperty(_defineProperty(_defineProperty({
      borderRadius: token.borderRadiusSM,
      height: token.fontHeight,
      display: 'inline-block',
      padding: "0 ".concat((0, _cssinjs.unit)(token.paddingXXS)),
      marginInline: calc(token.marginXXS).mul(-1).equal()
    }, "> ".concat(iconCls), {
      marginInlineStart: token.marginXXS,
      fontSize: token.fontSizeIcon
    }), '&:hover', {
      color: token.linkHoverColor,
      backgroundColor: token.colorBgTextHover,
      a: {
        color: token.linkHoverColor
      }
    }), "a", {
      '&:hover': {
        backgroundColor: 'transparent'
      }
    })), "&".concat(token.componentCls, "-rtl"), {
      direction: 'rtl'
    })));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      itemColor: token.colorTextDescription,
      lastItemColor: token.colorText,
      iconFontSize: token.fontSize,
      linkColor: token.colorTextDescription,
      linkHoverColor: token.colorText,
      separatorColor: token.colorTextDescription,
      separatorMargin: token.marginXS
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Breadcrumb', function (token) {
    var breadcrumbToken = (0, _internal.mergeToken)(token, {});
    return genBreadcrumbStyle(breadcrumbToken);
  }, prepareComponentToken);
});