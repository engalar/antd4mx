define(["exports", "antd4mx/style/index", "antd4mx/style/motion/index", "antd4mx/style/placementArrow", "antd4mx/theme/internal", "antd4mx/dropdown/style/status", "antd4mx/style/roundedArrow", "@ant-design/cssinjs"], function (_exports, _index, _index2, _placementArrow, _internal, _status, _roundedArrow, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // =============================== Base ===============================
  var genBaseStyle = function genBaseStyle(token) {
    var componentCls = token.componentCls,
      menuCls = token.menuCls,
      zIndexPopup = token.zIndexPopup,
      dropdownArrowDistance = token.dropdownArrowDistance,
      sizePopupArrow = token.sizePopupArrow,
      antCls = token.antCls,
      iconCls = token.iconCls,
      motionDurationMid = token.motionDurationMid,
      paddingBlock = token.paddingBlock,
      fontSize = token.fontSize,
      dropdownEdgeChildPadding = token.dropdownEdgeChildPadding,
      colorTextDisabled = token.colorTextDisabled,
      fontSizeIcon = token.fontSizeIcon,
      controlPaddingHorizontal = token.controlPaddingHorizontal,
      colorBgElevated = token.colorBgElevated;
    return [_defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'absolute',
      top: -9999,
      left: {
        _skip_check_: true,
        value: -9999
      },
      zIndex: zIndexPopup,
      display: 'block',
      // A placeholder out of dropdown visible range to avoid close when user moving
      '&::before': {
        position: 'absolute',
        insetBlock: token.calc(sizePopupArrow).div(2).sub(dropdownArrowDistance).equal(),
        // insetInlineStart: -7, // FIXME: Seems not work for hidden element
        zIndex: -9999,
        opacity: 0.0001,
        content: '""'
      }
    }, "&-trigger".concat(antCls, "-btn"), _defineProperty({}, "& > ".concat(iconCls, "-down, & > ").concat(antCls, "-btn-icon > ").concat(iconCls, "-down"), {
      fontSize: fontSizeIcon
    })), "".concat(componentCls, "-wrap"), _defineProperty(_defineProperty({
      position: 'relative'
    }, "".concat(antCls, "-btn > ").concat(iconCls, "-down"), {
      fontSize: fontSizeIcon
    }), "".concat(iconCls, "-down::before"), {
      transition: "transform ".concat(motionDurationMid)
    })), "".concat(componentCls, "-wrap-open"), _defineProperty({}, "".concat(iconCls, "-down::before"), {
      transform: "rotate(180deg)"
    })), "\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ", {
      display: 'none'
    }), "&".concat(antCls, "-slide-down-enter").concat(antCls, "-slide-down-enter-active").concat(componentCls, "-placement-bottomLeft,\n          &").concat(antCls, "-slide-down-appear").concat(antCls, "-slide-down-appear-active").concat(componentCls, "-placement-bottomLeft,\n          &").concat(antCls, "-slide-down-enter").concat(antCls, "-slide-down-enter-active").concat(componentCls, "-placement-bottom,\n          &").concat(antCls, "-slide-down-appear").concat(antCls, "-slide-down-appear-active").concat(componentCls, "-placement-bottom,\n          &").concat(antCls, "-slide-down-enter").concat(antCls, "-slide-down-enter-active").concat(componentCls, "-placement-bottomRight,\n          &").concat(antCls, "-slide-down-appear").concat(antCls, "-slide-down-appear-active").concat(componentCls, "-placement-bottomRight"), {
      animationName: _index2.slideUpIn
    }), "&".concat(antCls, "-slide-up-enter").concat(antCls, "-slide-up-enter-active").concat(componentCls, "-placement-topLeft,\n          &").concat(antCls, "-slide-up-appear").concat(antCls, "-slide-up-appear-active").concat(componentCls, "-placement-topLeft,\n          &").concat(antCls, "-slide-up-enter").concat(antCls, "-slide-up-enter-active").concat(componentCls, "-placement-top,\n          &").concat(antCls, "-slide-up-appear").concat(antCls, "-slide-up-appear-active").concat(componentCls, "-placement-top,\n          &").concat(antCls, "-slide-up-enter").concat(antCls, "-slide-up-enter-active").concat(componentCls, "-placement-topRight,\n          &").concat(antCls, "-slide-up-appear").concat(antCls, "-slide-up-appear-active").concat(componentCls, "-placement-topRight"), {
      animationName: _index2.slideDownIn
    }), "&".concat(antCls, "-slide-down-leave").concat(antCls, "-slide-down-leave-active").concat(componentCls, "-placement-bottomLeft,\n          &").concat(antCls, "-slide-down-leave").concat(antCls, "-slide-down-leave-active").concat(componentCls, "-placement-bottom,\n          &").concat(antCls, "-slide-down-leave").concat(antCls, "-slide-down-leave-active").concat(componentCls, "-placement-bottomRight"), {
      animationName: _index2.slideUpOut
    }), "&".concat(antCls, "-slide-up-leave").concat(antCls, "-slide-up-leave-active").concat(componentCls, "-placement-topLeft,\n          &").concat(antCls, "-slide-up-leave").concat(antCls, "-slide-up-leave-active").concat(componentCls, "-placement-top,\n          &").concat(antCls, "-slide-up-leave").concat(antCls, "-slide-up-leave-active").concat(componentCls, "-placement-topRight"), {
      animationName: _index2.slideDownOut
    }))),
    // =============================================================
    // ==                        Arrow style                      ==
    // =============================================================
    (0, _placementArrow["default"])(token, colorBgElevated, {
      arrowPlacement: {
        top: true,
        bottom: true
      }
    }), _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, " ").concat(menuCls), {
      position: 'relative',
      margin: 0
    }), "".concat(menuCls, "-submenu-popup"), {
      position: 'absolute',
      zIndex: zIndexPopup,
      background: 'transparent',
      boxShadow: 'none',
      transformOrigin: '0 0',
      'ul, li': {
        listStyle: 'none',
        margin: 0
      }
    }), "".concat(componentCls, ", ").concat(componentCls, "-menu-submenu"), _defineProperty({}, menuCls, Object.assign(Object.assign({
      padding: dropdownEdgeChildPadding,
      listStyleType: 'none',
      backgroundColor: colorBgElevated,
      backgroundClip: 'padding-box',
      borderRadius: token.borderRadiusLG,
      outline: 'none',
      boxShadow: token.boxShadowSecondary
    }, (0, _index.genFocusStyle)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      '&:empty': {
        padding: 0,
        boxShadow: 'none'
      }
    }, "".concat(menuCls, "-item-group-title"), {
      padding: "".concat((0, _cssinjs.unit)(paddingBlock), " ").concat((0, _cssinjs.unit)(controlPaddingHorizontal)),
      color: token.colorTextDescription,
      transition: "all ".concat(motionDurationMid)
    }), "".concat(menuCls, "-item"), {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }), "".concat(menuCls, "-item-icon"), {
      minWidth: fontSize,
      marginInlineEnd: token.marginXS,
      fontSize: token.fontSizeSM
    }), "".concat(menuCls, "-title-content"), {
      flex: 'auto',
      '> a': {
        color: 'inherit',
        transition: "all ".concat(motionDurationMid),
        '&:hover': {
          color: 'inherit'
        },
        '&::after': {
          position: 'absolute',
          inset: 0,
          content: '""'
        }
      }
    }), "".concat(menuCls, "-item, ").concat(menuCls, "-submenu-title"), Object.assign(Object.assign(_defineProperty({
      clear: 'both',
      margin: 0,
      padding: "".concat((0, _cssinjs.unit)(paddingBlock), " ").concat((0, _cssinjs.unit)(controlPaddingHorizontal)),
      color: token.colorText,
      fontWeight: 'normal',
      fontSize: fontSize,
      lineHeight: token.lineHeight,
      cursor: 'pointer',
      transition: "all ".concat(motionDurationMid),
      borderRadius: token.borderRadiusSM
    }, "&:hover, &-active", {
      backgroundColor: token.controlItemBgHover
    }), (0, _index.genFocusStyle)(token)), _defineProperty({
      '&-selected': {
        color: token.colorPrimary,
        backgroundColor: token.controlItemBgActive,
        '&:hover, &-active': {
          backgroundColor: token.controlItemBgActiveHover
        }
      },
      '&-disabled': {
        color: colorTextDisabled,
        cursor: 'not-allowed',
        '&:hover': {
          color: colorTextDisabled,
          backgroundColor: colorBgElevated,
          cursor: 'not-allowed'
        },
        a: {
          pointerEvents: 'none'
        }
      },
      '&-divider': {
        height: 1,
        // By design
        margin: "".concat((0, _cssinjs.unit)(token.marginXXS), " 0"),
        overflow: 'hidden',
        lineHeight: 0,
        backgroundColor: token.colorSplit
      }
    }, "".concat(componentCls, "-menu-submenu-expand-icon"), _defineProperty({
      position: 'absolute',
      insetInlineEnd: token.paddingXS
    }, "".concat(componentCls, "-menu-submenu-arrow-icon"), {
      marginInlineEnd: '0 !important',
      color: token.colorTextDescription,
      fontSize: fontSizeIcon,
      fontStyle: 'normal'
    })))), "".concat(menuCls, "-item-group-list"), {
      margin: "0 ".concat((0, _cssinjs.unit)(token.marginXS)),
      padding: 0,
      listStyle: 'none'
    }), "".concat(menuCls, "-submenu-title"), {
      paddingInlineEnd: token.calc(controlPaddingHorizontal).add(token.fontSizeSM).equal()
    }), "".concat(menuCls, "-submenu-vertical"), {
      position: 'relative'
    }), "".concat(menuCls, "-submenu").concat(menuCls, "-submenu-disabled ").concat(componentCls, "-menu-submenu-title"), _defineProperty({}, "&, ".concat(componentCls, "-menu-submenu-arrow-icon"), {
      color: colorTextDisabled,
      backgroundColor: colorBgElevated,
      cursor: 'not-allowed'
    })), "".concat(menuCls, "-submenu-selected ").concat(componentCls, "-menu-submenu-title"), {
      color: token.colorPrimary
    })))),
    // Follow code may reuse in other components
    [(0, _index2.initSlideMotion)(token, 'slide-up'), (0, _index2.initSlideMotion)(token, 'slide-down'), (0, _index2.initMoveMotion)(token, 'move-up'), (0, _index2.initMoveMotion)(token, 'move-down'), (0, _index2.initZoomMotion)(token, 'zoom-big')]];
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return Object.assign(Object.assign({
      zIndexPopup: token.zIndexPopupBase + 50,
      paddingBlock: (token.controlHeight - token.fontSize * token.lineHeight) / 2
    }, (0, _placementArrow.getArrowOffsetToken)({
      contentRadius: token.borderRadiusLG,
      limitVerticalRadius: true
    })), (0, _roundedArrow.getArrowToken)(token));
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Dropdown', function (token) {
    var marginXXS = token.marginXXS,
      sizePopupArrow = token.sizePopupArrow,
      paddingXXS = token.paddingXXS,
      componentCls = token.componentCls;
    var dropdownToken = (0, _internal.mergeToken)(token, {
      menuCls: "".concat(componentCls, "-menu"),
      dropdownArrowDistance: token.calc(sizePopupArrow).div(2).add(marginXXS).equal(),
      dropdownEdgeChildPadding: paddingXXS
    });
    return [genBaseStyle(dropdownToken), (0, _status["default"])(dropdownToken)];
  }, prepareComponentToken);
});