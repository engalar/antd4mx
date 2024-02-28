define(["exports", "antd4mx/style", "antd4mx/style/motion"], function (_exports, _style, _motion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genItemStyle = function genItemStyle(token) {
    var optionHeight = token.optionHeight,
      optionFontSize = token.optionFontSize,
      optionLineHeight = token.optionLineHeight,
      optionPadding = token.optionPadding;
    return {
      position: 'relative',
      display: 'block',
      minHeight: optionHeight,
      padding: optionPadding,
      color: token.colorText,
      fontWeight: 'normal',
      fontSize: optionFontSize,
      lineHeight: optionLineHeight,
      boxSizing: 'border-box'
    };
  };
  var genSingleStyle = function genSingleStyle(token) {
    var antCls = token.antCls,
      componentCls = token.componentCls;
    var selectItemCls = "".concat(componentCls, "-item");
    var slideUpEnterActive = "&".concat(antCls, "-slide-up-enter").concat(antCls, "-slide-up-enter-active");
    var slideUpAppearActive = "&".concat(antCls, "-slide-up-appear").concat(antCls, "-slide-up-appear-active");
    var slideUpLeaveActive = "&".concat(antCls, "-slide-up-leave").concat(antCls, "-slide-up-leave-active");
    var dropdownPlacementCls = "".concat(componentCls, "-dropdown-placement-");
    return [_defineProperty({}, "".concat(componentCls, "-dropdown"), Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'absolute',
      top: -9999,
      zIndex: token.zIndexPopup,
      boxSizing: 'border-box',
      padding: token.paddingXXS,
      overflow: 'hidden',
      fontSize: token.fontSize,
      // Fix select render lag of long text in chrome
      // https://github.com/ant-design/ant-design/issues/11456
      // https://github.com/ant-design/ant-design/issues/11843
      fontVariant: 'initial',
      backgroundColor: token.colorBgElevated,
      borderRadius: token.borderRadiusLG,
      outline: 'none',
      boxShadow: token.boxShadowSecondary
    }, "\n          ".concat(slideUpEnterActive).concat(dropdownPlacementCls, "bottomLeft,\n          ").concat(slideUpAppearActive).concat(dropdownPlacementCls, "bottomLeft\n        "), {
      animationName: _motion.slideUpIn
    }), "\n          ".concat(slideUpEnterActive).concat(dropdownPlacementCls, "topLeft,\n          ").concat(slideUpAppearActive).concat(dropdownPlacementCls, "topLeft,\n          ").concat(slideUpEnterActive).concat(dropdownPlacementCls, "topRight,\n          ").concat(slideUpAppearActive).concat(dropdownPlacementCls, "topRight\n        "), {
      animationName: _motion.slideDownIn
    }), "".concat(slideUpLeaveActive).concat(dropdownPlacementCls, "bottomLeft"), {
      animationName: _motion.slideUpOut
    }), "\n          ".concat(slideUpLeaveActive).concat(dropdownPlacementCls, "topLeft,\n          ").concat(slideUpLeaveActive).concat(dropdownPlacementCls, "topRight\n        "), {
      animationName: _motion.slideDownOut
    }), '&-hidden', {
      display: 'none'
    }), "".concat(selectItemCls), Object.assign(Object.assign({}, genItemStyle(token)), {
      cursor: 'pointer',
      transition: "background ".concat(token.motionDurationSlow, " ease"),
      borderRadius: token.borderRadiusSM,
      // =========== Group ============
      '&-group': {
        color: token.colorTextDescription,
        fontSize: token.fontSizeSM,
        cursor: 'default'
      },
      // =========== Option ===========
      '&-option': _defineProperty(_defineProperty(_defineProperty(_defineProperty({
        display: 'flex',
        '&-content': Object.assign({
          flex: 'auto'
        }, _style.textEllipsis),
        '&-state': {
          flex: 'none',
          display: 'flex',
          alignItems: 'center'
        }
      }, "&-active:not(".concat(selectItemCls, "-option-disabled)"), {
        backgroundColor: token.optionActiveBg
      }), "&-selected:not(".concat(selectItemCls, "-option-disabled)"), _defineProperty(_defineProperty({
        color: token.optionSelectedColor,
        fontWeight: token.optionSelectedFontWeight,
        backgroundColor: token.optionSelectedBg
      }, "".concat(selectItemCls, "-option-state"), {
        color: token.colorPrimary
      }), "&:has(+ ".concat(selectItemCls, "-option-selected:not(").concat(selectItemCls, "-option-disabled))"), _defineProperty({
        borderEndStartRadius: 0,
        borderEndEndRadius: 0
      }, "& + ".concat(selectItemCls, "-option-selected:not(").concat(selectItemCls, "-option-disabled)"), {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }))), '&-disabled', _defineProperty(_defineProperty(_defineProperty({}, "&".concat(selectItemCls, "-option-selected"), {
        backgroundColor: token.colorBgContainerDisabled
      }), "color", token.colorTextDisabled), "cursor", 'not-allowed')), '&-grouped', {
        paddingInlineStart: token.calc(token.controlPaddingHorizontal).mul(2).equal()
      }),
      '&-empty': Object.assign(Object.assign({}, genItemStyle(token)), {
        color: token.colorTextDisabled
      })
    })), '&-rtl', {
      direction: 'rtl'
    }))),
    // Follow code may reuse in other components
    (0, _motion.initSlideMotion)(token, 'slide-up'), (0, _motion.initSlideMotion)(token, 'slide-down'), (0, _motion.initMoveMotion)(token, 'move-up'), (0, _motion.initMoveMotion)(token, 'move-down')];
  };
  var _default = _exports["default"] = genSingleStyle;
});