define(["exports", "@ant-design/cssinjs", "@ctrl/tinycolor", "antd4mx/style/index", "antd4mx/style/motion/index", "antd4mx/theme/internal", "antd4mx/menu/style/horizontal", "antd4mx/menu/style/rtl", "antd4mx/menu/style/theme", "antd4mx/menu/style/vertical"], function (_exports, _cssinjs, _tinycolor, _index, _index2, _internal, _horizontal, _rtl, _theme, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genMenuItemStyle = function genMenuItemStyle(token) {
    var componentCls = token.componentCls,
      motionDurationSlow = token.motionDurationSlow,
      motionDurationMid = token.motionDurationMid,
      motionEaseInOut = token.motionEaseInOut,
      motionEaseOut = token.motionEaseOut,
      iconCls = token.iconCls,
      iconSize = token.iconSize,
      iconMarginInlineEnd = token.iconMarginInlineEnd;
    return _defineProperty(_defineProperty({}, "".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title"), _defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      display: 'block',
      margin: 0,
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      transition: ["border-color ".concat(motionDurationSlow), "background ".concat(motionDurationSlow), "padding ".concat(motionDurationSlow, " ").concat(motionEaseInOut)].join(',')
    }, "".concat(componentCls, "-item-icon, ").concat(iconCls), {
      minWidth: iconSize,
      fontSize: iconSize,
      transition: ["font-size ".concat(motionDurationMid, " ").concat(motionEaseOut), "margin ".concat(motionDurationSlow, " ").concat(motionEaseInOut), "color ".concat(motionDurationSlow)].join(','),
      '+ span': {
        marginInlineStart: iconMarginInlineEnd,
        opacity: 1,
        transition: ["opacity ".concat(motionDurationSlow, " ").concat(motionEaseInOut), "margin ".concat(motionDurationSlow), "color ".concat(motionDurationSlow)].join(',')
      }
    }), "".concat(componentCls, "-item-icon"), Object.assign({}, (0, _index.resetIcon)())), "&".concat(componentCls, "-item-only-child"), _defineProperty({}, "> ".concat(iconCls, ", > ").concat(componentCls, "-item-icon"), {
      marginInlineEnd: 0
    }))), "".concat(componentCls, "-item-disabled, ").concat(componentCls, "-submenu-disabled"), _defineProperty({
      background: 'none !important',
      cursor: 'not-allowed',
      '&::after': {
        borderColor: 'transparent !important'
      },
      a: {
        color: 'inherit !important'
      }
    }, "> ".concat(componentCls, "-submenu-title"), {
      color: 'inherit !important',
      cursor: 'not-allowed'
    }));
  };
  var genSubMenuArrowStyle = function genSubMenuArrowStyle(token) {
    var componentCls = token.componentCls,
      motionDurationSlow = token.motionDurationSlow,
      motionEaseInOut = token.motionEaseInOut,
      borderRadius = token.borderRadius,
      menuArrowSize = token.menuArrowSize,
      menuArrowOffset = token.menuArrowOffset;
    return _defineProperty({}, "".concat(componentCls, "-submenu"), _defineProperty(_defineProperty({}, "&-expand-icon, &-arrow", {
      position: 'absolute',
      top: '50%',
      insetInlineEnd: token.margin,
      width: menuArrowSize,
      color: 'currentcolor',
      transform: 'translateY(-50%)',
      transition: "transform ".concat(motionDurationSlow, " ").concat(motionEaseInOut, ", opacity ").concat(motionDurationSlow)
    }), '&-arrow', {
      // →
      '&::before, &::after': {
        position: 'absolute',
        width: token.calc(menuArrowSize).mul(0.6).equal(),
        height: token.calc(menuArrowSize).mul(0.15).equal(),
        backgroundColor: 'currentcolor',
        borderRadius: borderRadius,
        transition: ["background ".concat(motionDurationSlow, " ").concat(motionEaseInOut), "transform ".concat(motionDurationSlow, " ").concat(motionEaseInOut), "top ".concat(motionDurationSlow, " ").concat(motionEaseInOut), "color ".concat(motionDurationSlow, " ").concat(motionEaseInOut)].join(','),
        content: '""'
      },
      '&::before': {
        transform: "rotate(45deg) translateY(".concat((0, _cssinjs.unit)(token.calc(menuArrowOffset).mul(-1).equal()), ")")
      },
      '&::after': {
        transform: "rotate(-45deg) translateY(".concat((0, _cssinjs.unit)(menuArrowOffset), ")")
      }
    }));
  };
  // =============================== Base ===============================
  var getBaseStyle = function getBaseStyle(token) {
    var antCls = token.antCls,
      componentCls = token.componentCls,
      fontSize = token.fontSize,
      motionDurationSlow = token.motionDurationSlow,
      motionDurationMid = token.motionDurationMid,
      motionEaseInOut = token.motionEaseInOut,
      paddingXS = token.paddingXS,
      padding = token.padding,
      colorSplit = token.colorSplit,
      lineWidth = token.lineWidth,
      zIndexPopup = token.zIndexPopup,
      borderRadiusLG = token.borderRadiusLG,
      subMenuItemBorderRadius = token.subMenuItemBorderRadius,
      menuArrowSize = token.menuArrowSize,
      menuArrowOffset = token.menuArrowOffset,
      lineType = token.lineType,
      groupTitleLineHeight = token.groupTitleLineHeight,
      groupTitleFontSize = token.groupTitleFontSize;
    return [// Misc
    _defineProperty({
      '': _defineProperty({}, "".concat(componentCls), Object.assign(Object.assign({}, (0, _index.clearFix)()), _defineProperty({}, "&-hidden", {
        display: 'none'
      })))
    }, "".concat(componentCls, "-submenu-hidden"), {
      display: 'none'
    }), _defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), (0, _index.clearFix)()), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      marginBottom: 0,
      paddingInlineStart: 0,
      // Override default ul/ol
      fontSize: fontSize,
      lineHeight: 0,
      listStyle: 'none',
      outline: 'none',
      // Magic cubic here but smooth transition
      transition: "width ".concat(motionDurationSlow, " cubic-bezier(0.2, 0, 0, 1) 0s")
    }, "ul, ol", {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }), "&-overflow", _defineProperty({
      display: 'flex'
    }, "".concat(componentCls, "-item"), {
      flex: 'none'
    })), "".concat(componentCls, "-item, ").concat(componentCls, "-submenu, ").concat(componentCls, "-submenu-title"), {
      borderRadius: token.itemBorderRadius
    }), "".concat(componentCls, "-item-group-title"), {
      padding: "".concat((0, _cssinjs.unit)(paddingXS), " ").concat((0, _cssinjs.unit)(padding)),
      fontSize: groupTitleFontSize,
      lineHeight: groupTitleLineHeight,
      transition: "all ".concat(motionDurationSlow)
    }), "&-horizontal ".concat(componentCls, "-submenu"), {
      transition: ["border-color ".concat(motionDurationSlow, " ").concat(motionEaseInOut), "background ".concat(motionDurationSlow, " ").concat(motionEaseInOut)].join(',')
    }), "".concat(componentCls, "-submenu, ").concat(componentCls, "-submenu-inline"), {
      transition: ["border-color ".concat(motionDurationSlow, " ").concat(motionEaseInOut), "background ".concat(motionDurationSlow, " ").concat(motionEaseInOut), "padding ".concat(motionDurationMid, " ").concat(motionEaseInOut)].join(',')
    }), "".concat(componentCls, "-submenu ").concat(componentCls, "-sub"), {
      cursor: 'initial',
      transition: ["background ".concat(motionDurationSlow, " ").concat(motionEaseInOut), "padding ".concat(motionDurationSlow, " ").concat(motionEaseInOut)].join(',')
    }), "".concat(componentCls, "-title-content"), _defineProperty({
      transition: "color ".concat(motionDurationSlow)
    }, "> ".concat(antCls, "-typography-ellipsis-single-line"), {
      display: 'inline',
      verticalAlign: 'unset'
    })), "".concat(componentCls, "-item a"), {
      '&::before': {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'transparent',
        content: '""'
      }
    }), "".concat(componentCls, "-item-divider"), {
      overflow: 'hidden',
      lineHeight: 0,
      borderColor: colorSplit,
      borderStyle: lineType,
      borderWidth: 0,
      borderTopWidth: lineWidth,
      marginBlock: lineWidth,
      padding: 0,
      '&-dashed': {
        borderStyle: 'dashed'
      }
    })), genMenuItemStyle(token)), _defineProperty(_defineProperty({}, "".concat(componentCls, "-item-group"), _defineProperty({}, "".concat(componentCls, "-item-group-list"), _defineProperty({
      margin: 0,
      padding: 0
    }, "".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title"), {
      paddingInline: "".concat((0, _cssinjs.unit)(token.calc(fontSize).mul(2).equal()), " ").concat((0, _cssinjs.unit)(padding))
    }))), '&-submenu', _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      '&-popup': _defineProperty(_defineProperty(_defineProperty({
        position: 'absolute',
        zIndex: zIndexPopup,
        borderRadius: borderRadiusLG,
        boxShadow: 'none',
        transformOrigin: '0 0'
      }, "&".concat(componentCls, "-submenu"), {
        background: 'transparent'
      }), '&::before', {
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        opacity: 0,
        content: '""'
      }), "> ".concat(componentCls), Object.assign(Object.assign(Object.assign({
        borderRadius: borderRadiusLG
      }, genMenuItemStyle(token)), genSubMenuArrowStyle(token)), _defineProperty(_defineProperty({}, "".concat(componentCls, "-item, ").concat(componentCls, "-submenu > ").concat(componentCls, "-submenu-title"), {
        borderRadius: subMenuItemBorderRadius
      }), "".concat(componentCls, "-submenu-title::after"), {
        transition: "transform ".concat(motionDurationSlow, " ").concat(motionEaseInOut)
      })))
    }, "\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ", {
      transformOrigin: '100% 0'
    }), "\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ", {
      transformOrigin: '100% 100%'
    }), "\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ", {
      transformOrigin: '0 100%'
    }), "\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ", {
      transformOrigin: '0 0'
    }), "\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ", {
      paddingInlineEnd: token.paddingXS
    }), "\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ", {
      paddingInlineStart: token.paddingXS
    }), "\n          &-placement-topRight,\n          &-placement-topLeft\n          ", {
      paddingBottom: token.paddingXS
    }), "\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ", {
      paddingTop: token.paddingXS
    }))), genSubMenuArrowStyle(token)), _defineProperty(_defineProperty({}, "&-inline-collapsed ".concat(componentCls, "-submenu-arrow,\n        &-inline ").concat(componentCls, "-submenu-arrow"), {
      // ↓
      '&::before': {
        transform: "rotate(-45deg) translateX(".concat((0, _cssinjs.unit)(menuArrowOffset), ")")
      },
      '&::after': {
        transform: "rotate(45deg) translateX(".concat((0, _cssinjs.unit)(token.calc(menuArrowOffset).mul(-1).equal()), ")")
      }
    }), "".concat(componentCls, "-submenu-open").concat(componentCls, "-submenu-inline > ").concat(componentCls, "-submenu-title > ").concat(componentCls, "-submenu-arrow"), {
      // ↑
      transform: "translateY(".concat((0, _cssinjs.unit)(token.calc(menuArrowSize).mul(0.2).mul(-1).equal()), ")"),
      '&::after': {
        transform: "rotate(-45deg) translateX(".concat((0, _cssinjs.unit)(token.calc(menuArrowOffset).mul(-1).equal()), ")")
      },
      '&::before': {
        transform: "rotate(45deg) translateX(".concat((0, _cssinjs.unit)(menuArrowOffset), ")")
      }
    }))), // Integration with header element so menu items have the same height
    _defineProperty({}, "".concat(antCls, "-layout-header"), _defineProperty({}, componentCls, {
      lineHeight: 'inherit'
    }))];
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var _a, _b, _c;
    var colorPrimary = token.colorPrimary,
      colorError = token.colorError,
      colorTextDisabled = token.colorTextDisabled,
      colorErrorBg = token.colorErrorBg,
      colorText = token.colorText,
      colorTextDescription = token.colorTextDescription,
      colorBgContainer = token.colorBgContainer,
      colorFillAlter = token.colorFillAlter,
      colorFillContent = token.colorFillContent,
      lineWidth = token.lineWidth,
      lineWidthBold = token.lineWidthBold,
      controlItemBgActive = token.controlItemBgActive,
      colorBgTextHover = token.colorBgTextHover,
      controlHeightLG = token.controlHeightLG,
      lineHeight = token.lineHeight,
      colorBgElevated = token.colorBgElevated,
      marginXXS = token.marginXXS,
      padding = token.padding,
      fontSize = token.fontSize,
      controlHeightSM = token.controlHeightSM,
      fontSizeLG = token.fontSizeLG,
      colorTextLightSolid = token.colorTextLightSolid,
      colorErrorHover = token.colorErrorHover;
    var activeBarWidth = (_a = token.activeBarWidth) !== null && _a !== void 0 ? _a : 0;
    var activeBarBorderWidth = (_b = token.activeBarBorderWidth) !== null && _b !== void 0 ? _b : lineWidth;
    var itemMarginInline = (_c = token.itemMarginInline) !== null && _c !== void 0 ? _c : token.marginXXS;
    var colorTextDark = new _tinycolor.TinyColor(colorTextLightSolid).setAlpha(0.65).toRgbString();
    return {
      dropdownWidth: 160,
      zIndexPopup: token.zIndexPopupBase + 50,
      radiusItem: token.borderRadiusLG,
      itemBorderRadius: token.borderRadiusLG,
      radiusSubMenuItem: token.borderRadiusSM,
      subMenuItemBorderRadius: token.borderRadiusSM,
      colorItemText: colorText,
      itemColor: colorText,
      colorItemTextHover: colorText,
      itemHoverColor: colorText,
      colorItemTextHoverHorizontal: colorPrimary,
      horizontalItemHoverColor: colorPrimary,
      colorGroupTitle: colorTextDescription,
      groupTitleColor: colorTextDescription,
      colorItemTextSelected: colorPrimary,
      itemSelectedColor: colorPrimary,
      colorItemTextSelectedHorizontal: colorPrimary,
      horizontalItemSelectedColor: colorPrimary,
      colorItemBg: colorBgContainer,
      itemBg: colorBgContainer,
      colorItemBgHover: colorBgTextHover,
      itemHoverBg: colorBgTextHover,
      colorItemBgActive: colorFillContent,
      itemActiveBg: controlItemBgActive,
      colorSubItemBg: colorFillAlter,
      subMenuItemBg: colorFillAlter,
      colorItemBgSelected: controlItemBgActive,
      itemSelectedBg: controlItemBgActive,
      colorItemBgSelectedHorizontal: 'transparent',
      horizontalItemSelectedBg: 'transparent',
      colorActiveBarWidth: 0,
      activeBarWidth: activeBarWidth,
      colorActiveBarHeight: lineWidthBold,
      activeBarHeight: lineWidthBold,
      colorActiveBarBorderSize: lineWidth,
      activeBarBorderWidth: activeBarBorderWidth,
      // Disabled
      colorItemTextDisabled: colorTextDisabled,
      itemDisabledColor: colorTextDisabled,
      // Danger
      colorDangerItemText: colorError,
      dangerItemColor: colorError,
      colorDangerItemTextHover: colorError,
      dangerItemHoverColor: colorError,
      colorDangerItemTextSelected: colorError,
      dangerItemSelectedColor: colorError,
      colorDangerItemBgActive: colorErrorBg,
      dangerItemActiveBg: colorErrorBg,
      colorDangerItemBgSelected: colorErrorBg,
      dangerItemSelectedBg: colorErrorBg,
      itemMarginInline: itemMarginInline,
      horizontalItemBorderRadius: 0,
      horizontalItemHoverBg: 'transparent',
      itemHeight: controlHeightLG,
      groupTitleLineHeight: lineHeight,
      collapsedWidth: controlHeightLG * 2,
      popupBg: colorBgElevated,
      itemMarginBlock: marginXXS,
      itemPaddingInline: padding,
      horizontalLineHeight: "".concat(controlHeightLG * 1.15, "px"),
      iconSize: fontSize,
      iconMarginInlineEnd: controlHeightSM - fontSize,
      collapsedIconSize: fontSizeLG,
      groupTitleFontSize: fontSize,
      // Disabled
      darkItemDisabledColor: new _tinycolor.TinyColor(colorTextLightSolid).setAlpha(0.25).toRgbString(),
      // Dark
      darkItemColor: colorTextDark,
      darkDangerItemColor: colorError,
      darkItemBg: '#001529',
      darkPopupBg: '#001529',
      darkSubMenuItemBg: '#000c17',
      darkItemSelectedColor: colorTextLightSolid,
      darkItemSelectedBg: colorPrimary,
      darkDangerItemSelectedBg: colorError,
      darkItemHoverBg: 'transparent',
      darkGroupTitleColor: colorTextDark,
      darkItemHoverColor: colorTextLightSolid,
      darkDangerItemHoverColor: colorErrorHover,
      darkDangerItemSelectedColor: colorTextLightSolid,
      darkDangerItemActiveBg: colorError,
      // internal
      itemWidth: activeBarWidth ? "calc(100% + ".concat(activeBarBorderWidth, "px)") : "calc(100% - ".concat(itemMarginInline * 2, "px)")
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = function _default(prefixCls) {
    var rootCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prefixCls;
    var injectStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var useStyle = (0, _internal.genStyleHooks)('Menu', function (token) {
      var colorBgElevated = token.colorBgElevated,
        controlHeightLG = token.controlHeightLG,
        fontSize = token.fontSize,
        darkItemColor = token.darkItemColor,
        darkDangerItemColor = token.darkDangerItemColor,
        darkItemBg = token.darkItemBg,
        darkSubMenuItemBg = token.darkSubMenuItemBg,
        darkItemSelectedColor = token.darkItemSelectedColor,
        darkItemSelectedBg = token.darkItemSelectedBg,
        darkDangerItemSelectedBg = token.darkDangerItemSelectedBg,
        darkItemHoverBg = token.darkItemHoverBg,
        darkGroupTitleColor = token.darkGroupTitleColor,
        darkItemHoverColor = token.darkItemHoverColor,
        darkItemDisabledColor = token.darkItemDisabledColor,
        darkDangerItemHoverColor = token.darkDangerItemHoverColor,
        darkDangerItemSelectedColor = token.darkDangerItemSelectedColor,
        darkDangerItemActiveBg = token.darkDangerItemActiveBg,
        popupBg = token.popupBg,
        darkPopupBg = token.darkPopupBg;
      var menuArrowSize = token.calc(fontSize).div(7).mul(5).equal();
      // Menu Token
      var menuToken = (0, _internal.mergeToken)(token, {
        menuArrowSize: menuArrowSize,
        menuHorizontalHeight: token.calc(controlHeightLG).mul(1.15).equal(),
        menuArrowOffset: token.calc(menuArrowSize).mul(0.25).equal(),
        menuSubMenuBg: colorBgElevated,
        calc: token.calc,
        popupBg: popupBg
      });
      var menuDarkToken = (0, _internal.mergeToken)(menuToken, {
        itemColor: darkItemColor,
        itemHoverColor: darkItemHoverColor,
        groupTitleColor: darkGroupTitleColor,
        itemSelectedColor: darkItemSelectedColor,
        itemBg: darkItemBg,
        popupBg: darkPopupBg,
        subMenuItemBg: darkSubMenuItemBg,
        itemActiveBg: 'transparent',
        itemSelectedBg: darkItemSelectedBg,
        activeBarHeight: 0,
        activeBarBorderWidth: 0,
        itemHoverBg: darkItemHoverBg,
        // Disabled
        itemDisabledColor: darkItemDisabledColor,
        // Danger
        dangerItemColor: darkDangerItemColor,
        dangerItemHoverColor: darkDangerItemHoverColor,
        dangerItemSelectedColor: darkDangerItemSelectedColor,
        dangerItemActiveBg: darkDangerItemActiveBg,
        dangerItemSelectedBg: darkDangerItemSelectedBg,
        menuSubMenuBg: darkSubMenuItemBg,
        // Horizontal
        horizontalItemSelectedColor: darkItemSelectedColor,
        horizontalItemSelectedBg: darkItemSelectedBg
      });
      return [
      // Basic
      getBaseStyle(menuToken),
      // Horizontal
      (0, _horizontal["default"])(menuToken),
      // Hard code for some light style
      // Vertical
      (0, _vertical["default"])(menuToken),
      // Hard code for some light style
      // Theme
      (0, _theme["default"])(menuToken, 'light'), (0, _theme["default"])(menuDarkToken, 'dark'),
      // RTL
      (0, _rtl["default"])(menuToken),
      // Motion
      (0, _index2.genCollapseMotion)(menuToken), (0, _index2.initSlideMotion)(menuToken, 'slide-up'), (0, _index2.initSlideMotion)(menuToken, 'slide-down'), (0, _index2.initZoomMotion)(menuToken, 'zoom-big')];
    }, prepareComponentToken, {
      deprecatedTokens: [['colorGroupTitle', 'groupTitleColor'], ['radiusItem', 'itemBorderRadius'], ['radiusSubMenuItem', 'subMenuItemBorderRadius'], ['colorItemText', 'itemColor'], ['colorItemTextHover', 'itemHoverColor'], ['colorItemTextHoverHorizontal', 'horizontalItemHoverColor'], ['colorItemTextSelected', 'itemSelectedColor'], ['colorItemTextSelectedHorizontal', 'horizontalItemSelectedColor'], ['colorItemTextDisabled', 'itemDisabledColor'], ['colorDangerItemText', 'dangerItemColor'], ['colorDangerItemTextHover', 'dangerItemHoverColor'], ['colorDangerItemTextSelected', 'dangerItemSelectedColor'], ['colorDangerItemBgActive', 'dangerItemActiveBg'], ['colorDangerItemBgSelected', 'dangerItemSelectedBg'], ['colorItemBg', 'itemBg'], ['colorItemBgHover', 'itemHoverBg'], ['colorSubItemBg', 'subMenuItemBg'], ['colorItemBgActive', 'itemActiveBg'], ['colorItemBgSelectedHorizontal', 'horizontalItemSelectedBg'], ['colorActiveBarWidth', 'activeBarWidth'], ['colorActiveBarHeight', 'activeBarHeight'], ['colorActiveBarBorderSize', 'activeBarBorderWidth'], ['colorItemBgSelected', 'itemSelectedBg']],
      // Dropdown will handle menu style self. We do not need to handle this.
      injectStyle: injectStyle,
      unitless: {
        groupTitleLineHeight: true
      }
    });
    return useStyle(prefixCls, rootCls);
  };
});