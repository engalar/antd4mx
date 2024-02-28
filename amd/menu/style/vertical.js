define(["exports", "@ant-design/cssinjs", "antd4mx/style/index"], function (_exports, _cssinjs, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var getVerticalInlineStyle = function getVerticalInlineStyle(token) {
    var componentCls = token.componentCls,
      itemHeight = token.itemHeight,
      itemMarginInline = token.itemMarginInline,
      padding = token.padding,
      menuArrowSize = token.menuArrowSize,
      marginXS = token.marginXS,
      itemMarginBlock = token.itemMarginBlock,
      itemWidth = token.itemWidth;
    var paddingWithArrow = token.calc(menuArrowSize).add(padding).add(marginXS).equal();
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-item"), {
      position: 'relative',
      overflow: 'hidden'
    }), "".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title"), {
      height: itemHeight,
      lineHeight: (0, _cssinjs.unit)(itemHeight),
      paddingInline: padding,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginInline: itemMarginInline,
      marginBlock: itemMarginBlock,
      width: itemWidth
    }), "> ".concat(componentCls, "-item,\n            > ").concat(componentCls, "-submenu > ").concat(componentCls, "-submenu-title"), {
      height: itemHeight,
      lineHeight: (0, _cssinjs.unit)(itemHeight)
    }), "".concat(componentCls, "-item-group-list ").concat(componentCls, "-submenu-title,\n            ").concat(componentCls, "-submenu-title"), {
      paddingInlineEnd: paddingWithArrow
    });
  };
  var getVerticalStyle = function getVerticalStyle(token) {
    var componentCls = token.componentCls,
      iconCls = token.iconCls,
      itemHeight = token.itemHeight,
      colorTextLightSolid = token.colorTextLightSolid,
      dropdownWidth = token.dropdownWidth,
      controlHeightLG = token.controlHeightLG,
      motionDurationMid = token.motionDurationMid,
      motionEaseOut = token.motionEaseOut,
      paddingXL = token.paddingXL,
      itemMarginInline = token.itemMarginInline,
      fontSizeLG = token.fontSizeLG,
      motionDurationSlow = token.motionDurationSlow,
      paddingXS = token.paddingXS,
      boxShadowSecondary = token.boxShadowSecondary,
      collapsedWidth = token.collapsedWidth,
      collapsedIconSize = token.collapsedIconSize;
    var inlineItemStyle = {
      height: itemHeight,
      lineHeight: (0, _cssinjs.unit)(itemHeight),
      listStylePosition: 'inside',
      listStyleType: 'disc'
    };
    return [_defineProperty(_defineProperty({}, componentCls, _defineProperty({}, "&-inline, &-vertical", Object.assign(_defineProperty({}, "&".concat(componentCls, "-root"), {
      boxShadow: 'none'
    }), getVerticalInlineStyle(token)))), "".concat(componentCls, "-submenu-popup"), _defineProperty({}, "".concat(componentCls, "-vertical"), Object.assign(Object.assign({}, getVerticalInlineStyle(token)), {
      boxShadow: boxShadowSecondary
    }))), // Vertical only
    _defineProperty({}, "".concat(componentCls, "-submenu-popup ").concat(componentCls, "-vertical").concat(componentCls, "-sub"), {
      minWidth: dropdownWidth,
      maxHeight: "calc(100vh - ".concat((0, _cssinjs.unit)(token.calc(controlHeightLG).mul(2.5).equal()), ")"),
      padding: '0',
      overflow: 'hidden',
      borderInlineEnd: 0,
      // https://github.com/ant-design/ant-design/issues/22244
      // https://github.com/ant-design/ant-design/issues/26812
      "&:not([class*='-active'])": {
        overflowX: 'hidden',
        overflowY: 'auto'
      }
    }), // Inline Only
    _defineProperty({}, "".concat(componentCls, "-inline"), _defineProperty(_defineProperty(_defineProperty({
      width: '100%'
    }, "&".concat(componentCls, "-root"), _defineProperty({}, "".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title"), _defineProperty(_defineProperty({
      display: 'flex',
      alignItems: 'center',
      transition: ["border-color ".concat(motionDurationSlow), "background ".concat(motionDurationSlow), "padding ".concat(motionDurationMid, " ").concat(motionEaseOut)].join(',')
    }, "> ".concat(componentCls, "-title-content"), {
      flex: 'auto',
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }), '> *', {
      flex: 'none'
    }))), "".concat(componentCls, "-sub").concat(componentCls, "-inline"), _defineProperty(_defineProperty({
      padding: 0,
      border: 0,
      borderRadius: 0,
      boxShadow: 'none'
    }, "& > ".concat(componentCls, "-submenu > ").concat(componentCls, "-submenu-title"), inlineItemStyle), "& ".concat(componentCls, "-item-group-title"), {
      paddingInlineStart: paddingXL
    })), "".concat(componentCls, "-item"), inlineItemStyle)), // Inline Collapse Only
    _defineProperty({}, "".concat(componentCls, "-inline-collapsed"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      width: collapsedWidth
    }, "&".concat(componentCls, "-root"), _defineProperty({}, "".concat(componentCls, "-item, ").concat(componentCls, "-submenu ").concat(componentCls, "-submenu-title"), _defineProperty({}, "> ".concat(componentCls, "-inline-collapsed-noicon"), {
      fontSize: fontSizeLG,
      textAlign: 'center'
    }))), "> ".concat(componentCls, "-item,\n          > ").concat(componentCls, "-item-group > ").concat(componentCls, "-item-group-list > ").concat(componentCls, "-item,\n          > ").concat(componentCls, "-item-group > ").concat(componentCls, "-item-group-list > ").concat(componentCls, "-submenu > ").concat(componentCls, "-submenu-title,\n          > ").concat(componentCls, "-submenu > ").concat(componentCls, "-submenu-title"), _defineProperty(_defineProperty({
      insetInlineStart: 0,
      paddingInline: "calc(50% - ".concat((0, _cssinjs.unit)(token.calc(fontSizeLG).div(2).equal()), " - ").concat((0, _cssinjs.unit)(itemMarginInline), ")"),
      textOverflow: 'clip'
    }, "\n            ".concat(componentCls, "-submenu-arrow,\n            ").concat(componentCls, "-submenu-expand-icon\n          "), {
      opacity: 0
    }), "".concat(componentCls, "-item-icon, ").concat(iconCls), {
      margin: 0,
      fontSize: collapsedIconSize,
      lineHeight: (0, _cssinjs.unit)(itemHeight),
      '+ span': {
        display: 'inline-block',
        opacity: 0
      }
    })), "".concat(componentCls, "-item-icon, ").concat(iconCls), {
      display: 'inline-block'
    }), '&-tooltip', _defineProperty(_defineProperty({
      pointerEvents: 'none'
    }, "".concat(componentCls, "-item-icon, ").concat(iconCls), {
      display: 'none'
    }), 'a, a:hover', {
      color: colorTextLightSolid
    })), "".concat(componentCls, "-item-group-title"), Object.assign(Object.assign({}, _index.textEllipsis), {
      paddingInline: paddingXS
    })))];
  };
  var _default = _exports["default"] = getVerticalStyle;
});