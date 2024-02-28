define(["exports", "@ant-design/cssinjs"], function (_exports, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genStepsInlineStyle = function genStepsInlineStyle(token) {
    var componentCls = token.componentCls,
      inlineDotSize = token.inlineDotSize,
      inlineTitleColor = token.inlineTitleColor,
      inlineTailColor = token.inlineTailColor;
    var containerPaddingTop = token.calc(token.paddingXS).add(token.lineWidth).equal();
    var titleStyle = _defineProperty({}, "".concat(componentCls, "-item-container ").concat(componentCls, "-item-content ").concat(componentCls, "-item-title"), {
      color: inlineTitleColor
    });
    return _defineProperty({}, "&".concat(componentCls, "-inline"), _defineProperty({
      width: 'auto',
      display: 'inline-flex'
    }, "".concat(componentCls, "-item"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      flex: 'none',
      '&-container': _defineProperty({
        padding: "".concat((0, _cssinjs.unit)(containerPaddingTop), " ").concat((0, _cssinjs.unit)(token.paddingXXS), " 0"),
        margin: "0 ".concat((0, _cssinjs.unit)(token.calc(token.marginXXS).div(2).equal())),
        borderRadius: token.borderRadiusSM,
        cursor: 'pointer',
        transition: "background-color ".concat(token.motionDurationMid),
        '&:hover': {
          background: token.controlItemBgHover
        }
      }, "&[role='button']:hover", {
        opacity: 1
      }),
      '&-icon': _defineProperty(_defineProperty({
        width: inlineDotSize,
        height: inlineDotSize,
        marginInlineStart: "calc(50% - ".concat((0, _cssinjs.unit)(token.calc(inlineDotSize).div(2).equal()), ")")
      }, "> ".concat(componentCls, "-icon"), {
        top: 0
      }), "".concat(componentCls, "-icon-dot"), {
        borderRadius: token.calc(token.fontSizeSM).div(4).equal(),
        '&::after': {
          display: 'none'
        }
      }),
      '&-content': {
        width: 'auto',
        marginTop: token.calc(token.marginXS).sub(token.lineWidth).equal()
      },
      '&-title': {
        color: inlineTitleColor,
        fontSize: token.fontSizeSM,
        lineHeight: token.lineHeightSM,
        fontWeight: 'normal',
        marginBottom: token.calc(token.marginXXS).div(2).equal()
      },
      '&-description': {
        display: 'none'
      },
      '&-tail': {
        marginInlineStart: 0,
        top: token.calc(inlineDotSize).div(2).add(containerPaddingTop).equal(),
        transform: "translateY(-50%)",
        '&:after': {
          width: '100%',
          height: token.lineWidth,
          borderRadius: 0,
          marginInlineStart: 0,
          background: inlineTailColor
        }
      }
    }, "&:first-child ".concat(componentCls, "-item-tail"), {
      width: '50%',
      marginInlineStart: '50%'
    }), "&:last-child ".concat(componentCls, "-item-tail"), {
      display: 'block',
      width: '50%'
    }), '&-wait', Object.assign(_defineProperty({}, "".concat(componentCls, "-item-icon ").concat(componentCls, "-icon ").concat(componentCls, "-icon-dot"), {
      backgroundColor: token.colorBorderBg,
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(inlineTailColor)
    }), titleStyle)), '&-finish', Object.assign(_defineProperty(_defineProperty({}, "".concat(componentCls, "-item-tail::after"), {
      backgroundColor: inlineTailColor
    }), "".concat(componentCls, "-item-icon ").concat(componentCls, "-icon ").concat(componentCls, "-icon-dot"), {
      backgroundColor: inlineTailColor,
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(inlineTailColor)
    }), titleStyle)), '&-error', titleStyle), '&-active, &-process', Object.assign(_defineProperty({}, "".concat(componentCls, "-item-icon"), {
      width: inlineDotSize,
      height: inlineDotSize,
      marginInlineStart: "calc(50% - ".concat((0, _cssinjs.unit)(token.calc(inlineDotSize).div(2).equal()), ")"),
      top: 0
    }), titleStyle)), "&:not(".concat(componentCls, "-item-active) > ").concat(componentCls, "-item-container[role='button']:hover"), _defineProperty({}, "".concat(componentCls, "-item-title"), {
      color: inlineTitleColor
    }))));
  };
  var _default = _exports["default"] = genStepsInlineStyle;
});