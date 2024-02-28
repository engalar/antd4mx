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
  var genStepsNavStyle = function genStepsNavStyle(token) {
    var componentCls = token.componentCls,
      navContentMaxWidth = token.navContentMaxWidth,
      navArrowColor = token.navArrowColor,
      stepsNavActiveColor = token.stepsNavActiveColor,
      motionDurationSlow = token.motionDurationSlow;
    return _defineProperty(_defineProperty(_defineProperty({}, "&".concat(componentCls, "-navigation"), _defineProperty(_defineProperty(_defineProperty({
      paddingTop: token.paddingSM
    }, "&".concat(componentCls, "-small"), _defineProperty({}, "".concat(componentCls, "-item"), {
      '&-container': {
        marginInlineStart: token.calc(token.marginSM).mul(-1).equal()
      }
    })), "".concat(componentCls, "-item"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      overflow: 'visible',
      textAlign: 'center',
      '&-container': _defineProperty(_defineProperty({
        display: 'inline-block',
        height: '100%',
        marginInlineStart: token.calc(token.margin).mul(-1).equal(),
        paddingBottom: token.paddingSM,
        textAlign: 'start',
        transition: "opacity ".concat(motionDurationSlow)
      }, "".concat(componentCls, "-item-content"), {
        maxWidth: navContentMaxWidth
      }), "".concat(componentCls, "-item-title"), Object.assign(Object.assign({
        maxWidth: '100%',
        paddingInlineEnd: 0
      }, _style.textEllipsis), {
        '&::after': {
          display: 'none'
        }
      }))
    }, "&:not(".concat(componentCls, "-item-active)"), _defineProperty({}, "".concat(componentCls, "-item-container[role='button']"), {
      cursor: 'pointer',
      '&:hover': {
        opacity: 0.85
      }
    })), '&:last-child', {
      flex: 1,
      '&::after': {
        display: 'none'
      }
    }), '&::after', {
      position: 'absolute',
      top: "calc(50% - ".concat((0, _cssinjs.unit)(token.calc(token.paddingSM).div(2).equal()), ")"),
      insetInlineStart: '100%',
      display: 'inline-block',
      width: token.fontSizeIcon,
      height: token.fontSizeIcon,
      borderTop: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(navArrowColor),
      borderBottom: 'none',
      borderInlineStart: 'none',
      borderInlineEnd: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(navArrowColor),
      transform: 'translateY(-50%) translateX(-50%) rotate(45deg)',
      content: '""'
    }), '&::before', {
      position: 'absolute',
      bottom: 0,
      insetInlineStart: '50%',
      display: 'inline-block',
      width: 0,
      height: token.lineWidthBold,
      backgroundColor: stepsNavActiveColor,
      transition: "width ".concat(motionDurationSlow, ", inset-inline-start ").concat(motionDurationSlow),
      transitionTimingFunction: 'ease-out',
      content: '""'
    })), "".concat(componentCls, "-item").concat(componentCls, "-item-active::before"), {
      insetInlineStart: 0,
      width: '100%'
    })), "&".concat(componentCls, "-navigation").concat(componentCls, "-vertical"), _defineProperty({}, "> ".concat(componentCls, "-item"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      marginInlineEnd: 0,
      '&::before': {
        display: 'none'
      }
    }, "&".concat(componentCls, "-item-active::before"), {
      top: 0,
      insetInlineEnd: 0,
      insetInlineStart: 'unset',
      display: 'block',
      width: token.calc(token.lineWidth).mul(3).equal(),
      height: "calc(100% - ".concat((0, _cssinjs.unit)(token.marginLG), ")")
    }), '&::after', {
      position: 'relative',
      insetInlineStart: '50%',
      display: 'block',
      width: token.calc(token.controlHeight).mul(0.25).equal(),
      height: token.calc(token.controlHeight).mul(0.25).equal(),
      marginBottom: token.marginXS,
      textAlign: 'center',
      transform: 'translateY(-50%) translateX(-50%) rotate(135deg)'
    }), '&:last-child', {
      '&::after': {
        display: 'none'
      }
    }), "> ".concat(componentCls, "-item-container > ").concat(componentCls, "-item-tail"), {
      visibility: 'hidden'
    }))), "&".concat(componentCls, "-navigation").concat(componentCls, "-horizontal"), _defineProperty({}, "> ".concat(componentCls, "-item > ").concat(componentCls, "-item-container > ").concat(componentCls, "-item-tail"), {
      visibility: 'hidden'
    }));
  };
  var _default = _exports["default"] = genStepsNavStyle;
});