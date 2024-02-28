define(["exports", "@ant-design/cssinjs", "antd4mx/style"], function (_exports, _cssinjs, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var accessibilityFocus = function accessibilityFocus(token) {
    return Object.assign({}, (0, _style.genFocusOutline)(token));
  };
  var getThemeStyle = function getThemeStyle(token, themeSuffix) {
    var _$concat$concat$conca2;
    var componentCls = token.componentCls,
      itemColor = token.itemColor,
      itemSelectedColor = token.itemSelectedColor,
      groupTitleColor = token.groupTitleColor,
      itemBg = token.itemBg,
      subMenuItemBg = token.subMenuItemBg,
      itemSelectedBg = token.itemSelectedBg,
      activeBarHeight = token.activeBarHeight,
      activeBarWidth = token.activeBarWidth,
      activeBarBorderWidth = token.activeBarBorderWidth,
      motionDurationSlow = token.motionDurationSlow,
      motionEaseInOut = token.motionEaseInOut,
      motionEaseOut = token.motionEaseOut,
      itemPaddingInline = token.itemPaddingInline,
      motionDurationMid = token.motionDurationMid,
      itemHoverColor = token.itemHoverColor,
      lineType = token.lineType,
      colorSplit = token.colorSplit,
      itemDisabledColor = token.itemDisabledColor,
      dangerItemColor = token.dangerItemColor,
      dangerItemHoverColor = token.dangerItemHoverColor,
      dangerItemSelectedColor = token.dangerItemSelectedColor,
      dangerItemActiveBg = token.dangerItemActiveBg,
      dangerItemSelectedBg = token.dangerItemSelectedBg,
      popupBg = token.popupBg,
      itemHoverBg = token.itemHoverBg,
      itemActiveBg = token.itemActiveBg,
      menuSubMenuBg = token.menuSubMenuBg,
      horizontalItemSelectedColor = token.horizontalItemSelectedColor,
      horizontalItemSelectedBg = token.horizontalItemSelectedBg,
      horizontalItemBorderRadius = token.horizontalItemBorderRadius,
      horizontalItemHoverBg = token.horizontalItemHoverBg;
    return _defineProperty({}, "".concat(componentCls, "-").concat(themeSuffix, ", ").concat(componentCls, "-").concat(themeSuffix, " > ").concat(componentCls), (_$concat$concat$conca2 = {
      color: itemColor,
      background: itemBg
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_$concat$concat$conca2, "&".concat(componentCls, "-root:focus-visible"), Object.assign({}, accessibilityFocus(token))), "".concat(componentCls, "-item-group-title"), {
      color: groupTitleColor
    }), "".concat(componentCls, "-submenu-selected"), _defineProperty({}, "> ".concat(componentCls, "-submenu-title"), {
      color: itemSelectedColor
    })), "".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title"), _defineProperty({
      color: itemColor
    }, "&:not(".concat(componentCls, "-item-disabled):focus-visible"), Object.assign({}, accessibilityFocus(token)))), "".concat(componentCls, "-item-disabled, ").concat(componentCls, "-submenu-disabled"), {
      color: "".concat(itemDisabledColor, " !important")
    }), "".concat(componentCls, "-item:not(").concat(componentCls, "-item-selected):not(").concat(componentCls, "-submenu-selected)"), _defineProperty({}, "&:hover, > ".concat(componentCls, "-submenu-title:hover"), {
      color: itemHoverColor
    })), "&:not(".concat(componentCls, "-horizontal)"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-item:not(").concat(componentCls, "-item-selected)"), {
      '&:hover': {
        backgroundColor: itemHoverBg
      },
      '&:active': {
        backgroundColor: itemActiveBg
      }
    }), "".concat(componentCls, "-submenu-title"), {
      '&:hover': {
        backgroundColor: itemHoverBg
      },
      '&:active': {
        backgroundColor: itemActiveBg
      }
    })), "".concat(componentCls, "-item-danger"), _defineProperty(_defineProperty({
      color: dangerItemColor
    }, "&".concat(componentCls, "-item:hover"), _defineProperty({}, "&:not(".concat(componentCls, "-item-selected):not(").concat(componentCls, "-submenu-selected)"), {
      color: dangerItemHoverColor
    })), "&".concat(componentCls, "-item:active"), {
      background: dangerItemActiveBg
    })), "".concat(componentCls, "-item a"), {
      '&, &:hover': {
        color: 'inherit'
      }
    }), "".concat(componentCls, "-item-selected"), _defineProperty(_defineProperty({
      color: itemSelectedColor
    }, "&".concat(componentCls, "-item-danger"), {
      color: dangerItemSelectedColor
    }), "a, a:hover", {
      color: 'inherit'
    })), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_$concat$concat$conca2, "& ".concat(componentCls, "-item-selected"), _defineProperty({
      backgroundColor: itemSelectedBg
    }, "&".concat(componentCls, "-item-danger"), {
      backgroundColor: dangerItemSelectedBg
    })), "&".concat(componentCls, "-submenu > ").concat(componentCls), {
      backgroundColor: menuSubMenuBg
    }), "&".concat(componentCls, "-popup > ").concat(componentCls), {
      backgroundColor: popupBg
    }), "&".concat(componentCls, "-submenu-popup > ").concat(componentCls), {
      backgroundColor: popupBg
    }), "&".concat(componentCls, "-horizontal"), Object.assign(Object.assign({}, themeSuffix === 'dark' ? {
      borderBottom: 0
    } : {}), _defineProperty({}, "> ".concat(componentCls, "-item, > ").concat(componentCls, "-submenu"), _defineProperty(_defineProperty({
      top: activeBarBorderWidth,
      marginTop: token.calc(activeBarBorderWidth).mul(-1).equal(),
      marginBottom: 0,
      borderRadius: horizontalItemBorderRadius,
      '&::after': {
        position: 'absolute',
        insetInline: itemPaddingInline,
        bottom: 0,
        borderBottom: "".concat((0, _cssinjs.unit)(activeBarHeight), " solid transparent"),
        transition: "border-color ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
        content: '""'
      }
    }, "&:hover, &-active, &-open", {
      background: horizontalItemHoverBg,
      '&::after': {
        borderBottomWidth: activeBarHeight,
        borderBottomColor: horizontalItemSelectedColor
      }
    }), "&-selected", {
      color: horizontalItemSelectedColor,
      backgroundColor: horizontalItemSelectedBg,
      '&:hover': {
        backgroundColor: horizontalItemSelectedBg
      },
      '&::after': {
        borderBottomWidth: activeBarHeight,
        borderBottomColor: horizontalItemSelectedColor
      }
    })))), "&".concat(componentCls, "-root"), _defineProperty({}, "&".concat(componentCls, "-inline, &").concat(componentCls, "-vertical"), {
      borderInlineEnd: "".concat((0, _cssinjs.unit)(activeBarBorderWidth), " ").concat(lineType, " ").concat(colorSplit)
    })), "&".concat(componentCls, "-inline"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-sub").concat(componentCls, "-inline"), {
      background: subMenuItemBg
    }), "".concat(componentCls, "-item"), _defineProperty({
      position: 'relative',
      '&::after': {
        position: 'absolute',
        insetBlock: 0,
        insetInlineEnd: 0,
        borderInlineEnd: "".concat((0, _cssinjs.unit)(activeBarWidth), " solid ").concat(itemSelectedColor),
        transform: 'scaleY(0.0001)',
        opacity: 0,
        transition: ["transform ".concat(motionDurationMid, " ").concat(motionEaseOut), "opacity ".concat(motionDurationMid, " ").concat(motionEaseOut)].join(','),
        content: '""'
      }
    }, "&".concat(componentCls, "-item-danger"), {
      '&::after': {
        borderInlineEndColor: dangerItemSelectedColor
      }
    })), "".concat(componentCls, "-selected, ").concat(componentCls, "-item-selected"), {
      '&::after': {
        transform: 'scaleY(1)',
        opacity: 1,
        transition: ["transform ".concat(motionDurationMid, " ").concat(motionEaseInOut), "opacity ".concat(motionDurationMid, " ").concat(motionEaseInOut)].join(',')
      }
    }))));
  };
  var _default = _exports["default"] = getThemeStyle;
});