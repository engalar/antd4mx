define(["exports", "@ant-design/cssinjs", "antd4mx/date-picker/style", "antd4mx/style", "antd4mx/theme/internal"], function (_exports, _cssinjs, _style, _style2, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports.genCalendarStyles = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genCalendarStyles = _exports.genCalendarStyles = function genCalendarStyles(token) {
    var calendarCls = token.calendarCls,
      componentCls = token.componentCls,
      fullBg = token.fullBg,
      fullPanelBg = token.fullPanelBg,
      itemActiveBg = token.itemActiveBg;
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, calendarCls, Object.assign(Object.assign(Object.assign({}, (0, _style.genPanelStyle)(token)), (0, _style2.resetComponent)(token)), _defineProperty({
      background: fullBg,
      '&-rtl': {
        direction: 'rtl'
      }
    }, "".concat(calendarCls, "-header"), _defineProperty(_defineProperty(_defineProperty({
      display: 'flex',
      justifyContent: 'flex-end',
      padding: "".concat((0, _cssinjs.unit)(token.paddingSM), " 0")
    }, "".concat(calendarCls, "-year-select"), {
      minWidth: token.yearControlWidth
    }), "".concat(calendarCls, "-month-select"), {
      minWidth: token.monthControlWidth,
      marginInlineStart: token.marginXS
    }), "".concat(calendarCls, "-mode-switch"), {
      marginInlineStart: token.marginXS
    })))), "".concat(calendarCls, " ").concat(componentCls, "-panel"), _defineProperty(_defineProperty(_defineProperty({
      background: fullPanelBg,
      border: 0,
      borderTop: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit),
      borderRadius: 0
    }, "".concat(componentCls, "-month-panel, ").concat(componentCls, "-date-panel"), {
      width: 'auto'
    }), "".concat(componentCls, "-body"), {
      padding: "".concat((0, _cssinjs.unit)(token.paddingXS), " 0")
    }), "".concat(componentCls, "-content"), {
      width: '100%'
    })), "".concat(calendarCls, "-mini"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      borderRadius: token.borderRadiusLG
    }, "".concat(calendarCls, "-header"), {
      paddingInlineEnd: token.paddingXS,
      paddingInlineStart: token.paddingXS
    }), "".concat(componentCls, "-panel"), {
      borderRadius: "0 0 ".concat((0, _cssinjs.unit)(token.borderRadiusLG), " ").concat((0, _cssinjs.unit)(token.borderRadiusLG))
    }), "".concat(componentCls, "-content"), {
      height: token.miniContentHeight,
      th: {
        height: 'auto',
        padding: 0,
        lineHeight: "".concat((0, _cssinjs.unit)(token.weekHeight))
      }
    }), "".concat(componentCls, "-cell::before"), {
      pointerEvents: 'none'
    })), "".concat(calendarCls).concat(calendarCls, "-full"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-panel"), _defineProperty({
      display: 'block',
      width: '100%',
      textAlign: 'end',
      background: fullBg,
      border: 0
    }, "".concat(componentCls, "-body"), {
      'th, td': {
        padding: 0
      },
      th: {
        height: 'auto',
        paddingInlineEnd: token.paddingSM,
        paddingBottom: token.paddingXXS,
        lineHeight: "".concat((0, _cssinjs.unit)(token.weekHeight))
      }
    })), "".concat(componentCls, "-cell"), _defineProperty(_defineProperty(_defineProperty({
      '&::before': {
        display: 'none'
      },
      '&:hover': _defineProperty({}, "".concat(calendarCls, "-date"), {
        background: token.controlItemBgHover
      })
    }, "".concat(calendarCls, "-date-today::before"), {
      display: 'none'
    }), "&-in-view".concat(componentCls, "-cell-selected"), _defineProperty({}, "".concat(calendarCls, "-date, ").concat(calendarCls, "-date-today"), {
      background: itemActiveBg
    })), '&-selected, &-selected:hover', _defineProperty({}, "".concat(calendarCls, "-date, ").concat(calendarCls, "-date-today"), _defineProperty({}, "".concat(calendarCls, "-date-value"), {
      color: token.colorPrimary
    })))), "".concat(calendarCls, "-date"), {
      display: 'block',
      width: 'auto',
      height: 'auto',
      margin: "0 ".concat((0, _cssinjs.unit)(token.calc(token.marginXS).div(2).equal())),
      padding: "".concat((0, _cssinjs.unit)(token.calc(token.paddingXS).div(2).equal()), " ").concat((0, _cssinjs.unit)(token.paddingXS), " 0"),
      border: 0,
      borderTop: "".concat((0, _cssinjs.unit)(token.lineWidthBold), " ").concat(token.lineType, " ").concat(token.colorSplit),
      borderRadius: 0,
      transition: "background ".concat(token.motionDurationSlow),
      '&-value': {
        lineHeight: "".concat((0, _cssinjs.unit)(token.dateValueHeight)),
        transition: "color ".concat(token.motionDurationSlow)
      },
      '&-content': {
        position: 'static',
        width: 'auto',
        height: token.dateContentHeight,
        overflowY: 'auto',
        color: token.colorText,
        lineHeight: token.lineHeight,
        textAlign: 'start'
      },
      '&-today': _defineProperty({
        borderColor: token.colorPrimary
      }, "".concat(calendarCls, "-date-value"), {
        color: token.colorText
      })
    })), "@media only screen and (max-width: ".concat((0, _cssinjs.unit)(token.screenXS), ") "), _defineProperty({}, "".concat(calendarCls), _defineProperty({}, "".concat(calendarCls, "-header"), _defineProperty(_defineProperty(_defineProperty({
      display: 'block'
    }, "".concat(calendarCls, "-year-select"), {
      width: '50%'
    }), "".concat(calendarCls, "-month-select"), {
      width: "calc(50% - ".concat((0, _cssinjs.unit)(token.paddingXS), ")")
    }), "".concat(calendarCls, "-mode-switch"), {
      width: '100%',
      marginTop: token.marginXS,
      marginInlineStart: 0,
      '> label': {
        width: '50%',
        textAlign: 'center'
      }
    }))));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return Object.assign({
      fullBg: token.colorBgContainer,
      fullPanelBg: token.colorBgContainer,
      itemActiveBg: token.controlItemBgActive,
      yearControlWidth: 80,
      monthControlWidth: 70,
      miniContentHeight: 256
    }, (0, _style.initPanelComponentToken)(token));
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Calendar', function (token) {
    var calendarCls = "".concat(token.componentCls, "-calendar");
    var calendarToken = (0, _internal.mergeToken)(token, (0, _style.initPickerPanelToken)(token), {
      calendarCls: calendarCls,
      pickerCellInnerCls: "".concat(token.componentCls, "-cell-inner"),
      dateValueHeight: token.controlHeightSM,
      weekHeight: token.calc(token.controlHeightSM).mul(0.75).equal(),
      dateContentHeight: token.calc(token.calc(token.fontHeightSM).add(token.marginXS)).mul(3).add(token.calc(token.lineWidth).mul(2)).equal()
    });
    return [genCalendarStyles(calendarToken)];
  }, prepareComponentToken);
});