define(["exports", "@ant-design/cssinjs", "antd4mx/style/index", "antd4mx/theme/internal", "antd4mx/steps/style/custom-icon", "antd4mx/steps/style/inline", "antd4mx/steps/style/label-placement", "antd4mx/steps/style/nav", "antd4mx/steps/style/progress", "antd4mx/steps/style/progress-dot", "antd4mx/steps/style/rtl", "antd4mx/steps/style/small", "antd4mx/steps/style/vertical"], function (_exports, _cssinjs, _index, _internal, _customIcon, _inline, _labelPlacement, _nav, _progress, _progressDot, _rtl, _small, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var StepItemStatusEnum;
  (function (StepItemStatusEnum) {
    StepItemStatusEnum["wait"] = "wait";
    StepItemStatusEnum["process"] = "process";
    StepItemStatusEnum["finish"] = "finish";
    StepItemStatusEnum["error"] = "error";
  })(StepItemStatusEnum || (StepItemStatusEnum = {}));
  var genStepsItemStatusStyle = function genStepsItemStatusStyle(status, token) {
    var prefix = "".concat(token.componentCls, "-item");
    var iconColorKey = "".concat(status, "IconColor");
    var titleColorKey = "".concat(status, "TitleColor");
    var descriptionColorKey = "".concat(status, "DescriptionColor");
    var tailColorKey = "".concat(status, "TailColor");
    var iconBgColorKey = "".concat(status, "IconBgColor");
    var iconBorderColorKey = "".concat(status, "IconBorderColor");
    var dotColorKey = "".concat(status, "DotColor");
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefix, "-").concat(status, " ").concat(prefix, "-icon"), _defineProperty({
      backgroundColor: token[iconBgColorKey],
      borderColor: token[iconBorderColorKey]
    }, "> ".concat(token.componentCls, "-icon"), _defineProperty({
      color: token[iconColorKey]
    }, "".concat(token.componentCls, "-icon-dot"), {
      background: token[dotColorKey]
    }))), "".concat(prefix, "-").concat(status).concat(prefix, "-custom ").concat(prefix, "-icon"), _defineProperty({}, "> ".concat(token.componentCls, "-icon"), {
      color: token[dotColorKey]
    })), "".concat(prefix, "-").concat(status, " > ").concat(prefix, "-container > ").concat(prefix, "-content > ").concat(prefix, "-title"), {
      color: token[titleColorKey],
      '&::after': {
        backgroundColor: token[tailColorKey]
      }
    }), "".concat(prefix, "-").concat(status, " > ").concat(prefix, "-container > ").concat(prefix, "-content > ").concat(prefix, "-description"), {
      color: token[descriptionColorKey]
    }), "".concat(prefix, "-").concat(status, " > ").concat(prefix, "-container > ").concat(prefix, "-tail::after"), {
      backgroundColor: token[tailColorKey]
    });
  };
  var genStepsItemStyle = function genStepsItemStyle(token) {
    var componentCls = token.componentCls,
      motionDurationSlow = token.motionDurationSlow;
    var stepsItemCls = "".concat(componentCls, "-item"); // .ant-steps-item
    var stepItemIconCls = "".concat(stepsItemCls, "-icon");
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, stepsItemCls, {
      position: 'relative',
      display: 'inline-block',
      flex: 1,
      overflow: 'hidden',
      verticalAlign: 'top',
      '&:last-child': _defineProperty({
        flex: 'none'
      }, "> ".concat(stepsItemCls, "-container > ").concat(stepsItemCls, "-tail, > ").concat(stepsItemCls, "-container >  ").concat(stepsItemCls, "-content > ").concat(stepsItemCls, "-title::after"), {
        display: 'none'
      })
    }), "".concat(stepsItemCls, "-container"), _defineProperty({
      outline: 'none'
    }, "&:focus-visible", _defineProperty({}, stepItemIconCls, Object.assign({}, (0, _index.genFocusOutline)(token))))), "".concat(stepItemIconCls, ", ").concat(stepsItemCls, "-content"), {
      display: 'inline-block',
      verticalAlign: 'top'
    }), stepItemIconCls, _defineProperty({
      width: token.iconSize,
      height: token.iconSize,
      marginTop: 0,
      marginBottom: 0,
      marginInlineStart: 0,
      marginInlineEnd: token.marginXS,
      fontSize: token.iconFontSize,
      fontFamily: token.fontFamily,
      lineHeight: "".concat((0, _cssinjs.unit)(token.iconSize)),
      textAlign: 'center',
      borderRadius: token.iconSize,
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " transparent"),
      transition: "background-color ".concat(motionDurationSlow, ", border-color ").concat(motionDurationSlow)
    }, "".concat(componentCls, "-icon"), {
      position: 'relative',
      top: token.iconTop,
      color: token.colorPrimary,
      lineHeight: 1
    })), "".concat(stepsItemCls, "-tail"), {
      position: 'absolute',
      top: token.calc(token.iconSize).div(2).sub(token.paddingXXS).equal(),
      insetInlineStart: 0,
      width: '100%',
      '&::after': {
        display: 'inline-block',
        width: '100%',
        height: token.lineWidth,
        background: token.colorSplit,
        borderRadius: token.lineWidth,
        transition: "background ".concat(motionDurationSlow),
        content: '""'
      }
    }), "".concat(stepsItemCls, "-title"), {
      position: 'relative',
      display: 'inline-block',
      paddingInlineEnd: token.padding,
      color: token.colorText,
      fontSize: token.fontSizeLG,
      lineHeight: "".concat((0, _cssinjs.unit)(token.titleLineHeight)),
      '&::after': {
        position: 'absolute',
        top: token.calc(token.titleLineHeight).div(2).equal(),
        insetInlineStart: '100%',
        display: 'block',
        width: 9999,
        height: token.lineWidth,
        background: token.processTailColor,
        content: '""'
      }
    }), "".concat(stepsItemCls, "-subtitle"), {
      display: 'inline',
      marginInlineStart: token.marginXS,
      color: token.colorTextDescription,
      fontWeight: 'normal',
      fontSize: token.fontSize
    }), "".concat(stepsItemCls, "-description"), {
      color: token.colorTextDescription,
      fontSize: token.fontSize
    }), genStepsItemStatusStyle(StepItemStatusEnum.wait, token)), genStepsItemStatusStyle(StepItemStatusEnum.process, token)), _defineProperty({}, "".concat(stepsItemCls, "-process > ").concat(stepsItemCls, "-container > ").concat(stepsItemCls, "-title"), {
      fontWeight: token.fontWeightStrong
    })), genStepsItemStatusStyle(StepItemStatusEnum.finish, token)), genStepsItemStatusStyle(StepItemStatusEnum.error, token)), _defineProperty(_defineProperty({}, "".concat(stepsItemCls).concat(componentCls, "-next-error > ").concat(componentCls, "-item-title::after"), {
      background: token.colorError
    }), "".concat(stepsItemCls, "-disabled"), {
      cursor: 'not-allowed'
    }));
  };
  // ============================= Clickable ===========================
  var genStepsClickableStyle = function genStepsClickableStyle(token) {
    var componentCls = token.componentCls,
      motionDurationSlow = token.motionDurationSlow;
    return _defineProperty(_defineProperty({}, "& ".concat(componentCls, "-item"), _defineProperty({}, "&:not(".concat(componentCls, "-item-active)"), _defineProperty(_defineProperty({}, "& > ".concat(componentCls, "-item-container[role='button']"), _defineProperty(_defineProperty({
      cursor: 'pointer'
    }, "".concat(componentCls, "-item"), _defineProperty({}, "&-title, &-subtitle, &-description, &-icon ".concat(componentCls, "-icon"), {
      transition: "color ".concat(motionDurationSlow)
    })), '&:hover', _defineProperty({}, "".concat(componentCls, "-item"), _defineProperty({}, "&-title, &-subtitle, &-description", {
      color: token.colorPrimary
    })))), "&:not(".concat(componentCls, "-item-process)"), _defineProperty({}, "& > ".concat(componentCls, "-item-container[role='button']:hover"), _defineProperty({}, "".concat(componentCls, "-item"), {
      '&-icon': _defineProperty({
        borderColor: token.colorPrimary
      }, "".concat(componentCls, "-icon"), {
        color: token.colorPrimary
      })
    }))))), "&".concat(componentCls, "-horizontal:not(").concat(componentCls, "-label-vertical)"), _defineProperty({}, "".concat(componentCls, "-item"), _defineProperty(_defineProperty(_defineProperty({
      paddingInlineStart: token.padding,
      whiteSpace: 'nowrap',
      '&:first-child': {
        paddingInlineStart: 0
      }
    }, "&:last-child ".concat(componentCls, "-item-title"), {
      paddingInlineEnd: 0
    }), '&-tail', {
      display: 'none'
    }), '&-description', {
      maxWidth: token.descriptionMaxWidth,
      whiteSpace: 'normal'
    })));
  };
  var genStepsStyle = function genStepsStyle(token) {
    var componentCls = token.componentCls; // .ant-steps
    return _defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), {
      display: 'flex',
      width: '100%',
      fontSize: 0,
      textAlign: 'initial'
    }), genStepsItemStyle(token)), genStepsClickableStyle(token)), (0, _customIcon["default"])(token)), (0, _small["default"])(token)), (0, _vertical["default"])(token)), (0, _labelPlacement["default"])(token)), (0, _progressDot["default"])(token)), (0, _nav["default"])(token)), (0, _rtl["default"])(token)), (0, _progress["default"])(token)), (0, _inline["default"])(token)));
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      titleLineHeight: token.controlHeight,
      customIconSize: token.controlHeight,
      customIconTop: 0,
      customIconFontSize: token.controlHeightSM,
      iconSize: token.controlHeight,
      iconTop: -0.5,
      // magic for ui experience
      iconFontSize: token.fontSize,
      iconSizeSM: token.fontSizeHeading3,
      dotSize: token.controlHeight / 4,
      dotCurrentSize: token.controlHeightLG / 4,
      navArrowColor: token.colorTextDisabled,
      navContentMaxWidth: 'auto',
      descriptionMaxWidth: 140,
      waitIconColor: token.wireframe ? token.colorTextDisabled : token.colorTextLabel,
      waitIconBgColor: token.wireframe ? token.colorBgContainer : token.colorFillContent,
      waitIconBorderColor: token.wireframe ? token.colorTextDisabled : 'transparent',
      finishIconBgColor: token.wireframe ? token.colorBgContainer : token.controlItemBgActive,
      finishIconBorderColor: token.wireframe ? token.colorPrimary : token.controlItemBgActive
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Steps', function (token) {
    var colorTextDisabled = token.colorTextDisabled,
      controlHeightLG = token.controlHeightLG,
      colorTextLightSolid = token.colorTextLightSolid,
      colorText = token.colorText,
      colorPrimary = token.colorPrimary,
      colorTextDescription = token.colorTextDescription,
      colorTextQuaternary = token.colorTextQuaternary,
      colorError = token.colorError,
      colorBorderSecondary = token.colorBorderSecondary,
      colorSplit = token.colorSplit;
    var stepsToken = (0, _internal.mergeToken)(token, {
      // Steps component less variable
      processIconColor: colorTextLightSolid,
      processTitleColor: colorText,
      processDescriptionColor: colorText,
      processIconBgColor: colorPrimary,
      processIconBorderColor: colorPrimary,
      processDotColor: colorPrimary,
      processTailColor: colorSplit,
      waitTitleColor: colorTextDescription,
      waitDescriptionColor: colorTextDescription,
      waitTailColor: colorSplit,
      waitDotColor: colorTextDisabled,
      finishIconColor: colorPrimary,
      finishTitleColor: colorText,
      finishDescriptionColor: colorTextDescription,
      finishTailColor: colorPrimary,
      finishDotColor: colorPrimary,
      errorIconColor: colorTextLightSolid,
      errorTitleColor: colorError,
      errorDescriptionColor: colorError,
      errorTailColor: colorSplit,
      errorIconBgColor: colorError,
      errorIconBorderColor: colorError,
      errorDotColor: colorError,
      stepsNavActiveColor: colorPrimary,
      stepsProgressSize: controlHeightLG,
      // Steps inline variable
      inlineDotSize: 6,
      inlineTitleColor: colorTextQuaternary,
      inlineTailColor: colorBorderSecondary
    });
    return [genStepsStyle(stepsToken)];
  }, prepareComponentToken);
});