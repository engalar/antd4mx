define(["exports", "@ant-design/cssinjs", "antd4mx/style/index", "antd4mx/style/motion/index", "antd4mx/theme/internal", "antd4mx/form/style/explain"], function (_exports, _cssinjs, _index, _index2, _internal, _explain) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareToken = _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var resetForm = function resetForm(token) {
    return _defineProperty(_defineProperty({
      legend: {
        display: 'block',
        width: '100%',
        marginBottom: token.marginLG,
        padding: 0,
        color: token.colorTextDescription,
        fontSize: token.fontSizeLG,
        lineHeight: 'inherit',
        border: 0,
        borderBottom: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder)
      },
      'input[type="search"]': {
        boxSizing: 'border-box'
      },
      // Position radios and checkboxes better
      'input[type="radio"], input[type="checkbox"]': {
        lineHeight: 'normal'
      },
      'input[type="file"]': {
        display: 'block'
      },
      // Make range inputs behave like textual form controls
      'input[type="range"]': {
        display: 'block',
        width: '100%'
      },
      // Make multiple select elements height not fixed
      'select[multiple], select[size]': {
        height: 'auto'
      }
    }, "input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus", {
      outline: 0,
      boxShadow: "0 0 0 ".concat((0, _cssinjs.unit)(token.controlOutlineWidth), " ").concat(token.controlOutline)
    }), "output", {
      display: 'block',
      paddingTop: 15,
      color: token.colorText,
      fontSize: token.fontSize,
      lineHeight: token.lineHeight
    });
  };
  var genFormSize = function genFormSize(token, height) {
    var formItemCls = token.formItemCls;
    return _defineProperty({}, formItemCls, _defineProperty(_defineProperty({}, "".concat(formItemCls, "-label > label"), {
      height: height
    }), "".concat(formItemCls, "-control-input"), {
      minHeight: height
    }));
  };
  var genFormStyle = function genFormStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, token.componentCls, Object.assign(Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), resetForm(token)), _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-text"), {
      display: 'inline-block',
      paddingInlineEnd: token.paddingSM
    }), '&-small', Object.assign({}, genFormSize(token, token.controlHeightSM))), '&-large', Object.assign({}, genFormSize(token, token.controlHeightLG)))));
  };
  var genFormItemStyle = function genFormItemStyle(token) {
    var formItemCls = token.formItemCls,
      iconCls = token.iconCls,
      componentCls = token.componentCls,
      rootPrefixCls = token.rootPrefixCls,
      labelRequiredMarkColor = token.labelRequiredMarkColor,
      labelColor = token.labelColor,
      labelFontSize = token.labelFontSize,
      labelHeight = token.labelHeight,
      labelColonMarginInlineStart = token.labelColonMarginInlineStart,
      labelColonMarginInlineEnd = token.labelColonMarginInlineEnd,
      itemMarginBottom = token.itemMarginBottom;
    return _defineProperty({}, formItemCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      marginBottom: itemMarginBottom,
      verticalAlign: 'top',
      '&-with-help': {
        transition: 'none'
      }
    }, "&-hidden,\n        &-hidden.".concat(rootPrefixCls, "-row"), {
      // https://github.com/ant-design/ant-design/issues/26141
      display: 'none'
    }), '&-has-warning', _defineProperty({}, "".concat(formItemCls, "-split"), {
      color: token.colorError
    })), '&-has-error', _defineProperty({}, "".concat(formItemCls, "-split"), {
      color: token.colorWarning
    })), "".concat(formItemCls, "-label"), {
      flexGrow: 0,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textAlign: 'end',
      verticalAlign: 'middle',
      '&-left': {
        textAlign: 'start'
      },
      '&-wrap': {
        overflow: 'unset',
        lineHeight: token.lineHeight,
        whiteSpace: 'unset'
      },
      '> label': _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        maxWidth: '100%',
        height: labelHeight,
        color: labelColor,
        fontSize: labelFontSize
      }, "> ".concat(iconCls), {
        fontSize: token.fontSize,
        verticalAlign: 'top'
      }), "&".concat(formItemCls, "-required:not(").concat(formItemCls, "-required-mark-optional)::before"), _defineProperty({
        display: 'inline-block',
        marginInlineEnd: token.marginXXS,
        color: labelRequiredMarkColor,
        fontSize: token.fontSize,
        fontFamily: 'SimSun, sans-serif',
        lineHeight: 1,
        content: '"*"'
      }, "".concat(componentCls, "-hide-required-mark &"), {
        display: 'none'
      })), "".concat(formItemCls, "-optional"), _defineProperty({
        display: 'inline-block',
        marginInlineStart: token.marginXXS,
        color: token.colorTextDescription
      }, "".concat(componentCls, "-hide-required-mark &"), {
        display: 'none'
      })), "".concat(formItemCls, "-tooltip"), {
        color: token.colorTextDescription,
        cursor: 'help',
        writingMode: 'horizontal-tb',
        marginInlineStart: token.marginXXS
      }), '&::after', {
        content: '":"',
        position: 'relative',
        marginBlock: 0,
        marginInlineStart: labelColonMarginInlineStart,
        marginInlineEnd: labelColonMarginInlineEnd
      }), "&".concat(formItemCls, "-no-colon::after"), {
        content: '"\\a0"'
      })
    }), "".concat(formItemCls, "-control"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, '--ant-display', 'flex'), "flexDirection", 'column'), "flexGrow", 1), "&:first-child:not([class^=\"'".concat(rootPrefixCls, "-col-'\"]):not([class*=\"' ").concat(rootPrefixCls, "-col-'\"])"), {
      width: '100%'
    }), '&-input', {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      minHeight: token.controlHeight,
      '&-content': {
        flex: 'auto',
        maxWidth: '100%'
      }
    })), formItemCls, {
      '&-explain, &-extra': {
        clear: 'both',
        color: token.colorTextDescription,
        fontSize: token.fontSize,
        lineHeight: token.lineHeight
      },
      '&-explain-connected': {
        width: '100%'
      },
      '&-extra': {
        minHeight: token.controlHeightSM,
        transition: "color ".concat(token.motionDurationMid, " ").concat(token.motionEaseOut) // sync input color transition
      },
      '&-explain': {
        '&-error': {
          color: token.colorError
        },
        '&-warning': {
          color: token.colorWarning
        }
      }
    }), "&-with-help ".concat(formItemCls, "-explain"), {
      height: 'auto',
      opacity: 1
    }), "".concat(formItemCls, "-feedback-icon"), {
      fontSize: token.fontSize,
      textAlign: 'center',
      visibility: 'visible',
      animationName: _index2.zoomIn,
      animationDuration: token.motionDurationMid,
      animationTimingFunction: token.motionEaseOutBack,
      pointerEvents: 'none',
      '&-success': {
        color: token.colorSuccess
      },
      '&-error': {
        color: token.colorError
      },
      '&-warning': {
        color: token.colorWarning
      },
      '&-validating': {
        color: token.colorPrimary
      }
    })));
  };
  var genHorizontalStyle = function genHorizontalStyle(token) {
    var componentCls = token.componentCls,
      formItemCls = token.formItemCls;
    return _defineProperty({}, "".concat(componentCls, "-horizontal"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(formItemCls, "-label"), {
      flexGrow: 0
    }), "".concat(formItemCls, "-control"), {
      flex: '1 1 0',
      // https://github.com/ant-design/ant-design/issues/32777
      // https://github.com/ant-design/ant-design/issues/33773
      minWidth: 0
    }), "".concat(formItemCls, "-label[class$='-24'], ").concat(formItemCls, "-label[class*='-24 ']"), _defineProperty({}, "& + ".concat(formItemCls, "-control"), {
      minWidth: 'unset'
    })));
  };
  var genInlineStyle = function genInlineStyle(token) {
    var componentCls = token.componentCls,
      formItemCls = token.formItemCls;
    return _defineProperty({}, "".concat(componentCls, "-inline"), _defineProperty({
      display: 'flex',
      flexWrap: 'wrap'
    }, formItemCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      flex: 'none',
      marginInlineEnd: token.margin,
      marginBottom: 0,
      '&-row': {
        flexWrap: 'nowrap'
      }
    }, "> ".concat(formItemCls, "-label,\n        > ").concat(formItemCls, "-control"), {
      display: 'inline-block',
      verticalAlign: 'top'
    }), "> ".concat(formItemCls, "-label"), {
      flex: 'none'
    }), "".concat(componentCls, "-text"), {
      display: 'inline-block'
    }), "".concat(formItemCls, "-has-feedback"), {
      display: 'inline-block'
    })));
  };
  var makeVerticalLayoutLabel = function makeVerticalLayoutLabel(token) {
    return {
      padding: token.verticalLabelPadding,
      margin: token.verticalLabelMargin,
      whiteSpace: 'initial',
      textAlign: 'start',
      '> label': {
        margin: 0,
        '&::after': {
          // https://github.com/ant-design/ant-design/issues/43538
          visibility: 'hidden'
        }
      }
    };
  };
  var makeVerticalLayout = function makeVerticalLayout(token) {
    var componentCls = token.componentCls,
      formItemCls = token.formItemCls,
      rootPrefixCls = token.rootPrefixCls;
    return _defineProperty(_defineProperty({}, "".concat(formItemCls, " ").concat(formItemCls, "-label"), makeVerticalLayoutLabel(token)), "".concat(componentCls, ":not(").concat(componentCls, "-inline)"), _defineProperty({}, formItemCls, _defineProperty({
      flexWrap: 'wrap'
    }, "".concat(formItemCls, "-label, ").concat(formItemCls, "-control"), _defineProperty({}, "&:not([class*=\" ".concat(rootPrefixCls, "-col-xs\"])"), {
      flex: '0 0 100%',
      maxWidth: '100%'
    }))));
  };
  var genVerticalStyle = function genVerticalStyle(token) {
    var componentCls = token.componentCls,
      formItemCls = token.formItemCls,
      rootPrefixCls = token.rootPrefixCls;
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-vertical"), _defineProperty({}, formItemCls, _defineProperty({
      '&-row': {
        flexDirection: 'column'
      },
      '&-label > label': {
        height: 'auto'
      }
    }, "".concat(componentCls, "-item-control"), {
      width: '100%'
    }))), "".concat(componentCls, "-vertical ").concat(formItemCls, "-label,\n      .").concat(rootPrefixCls, "-col-24").concat(formItemCls, "-label,\n      .").concat(rootPrefixCls, "-col-xl-24").concat(formItemCls, "-label"), makeVerticalLayoutLabel(token)), "@media (max-width: ".concat((0, _cssinjs.unit)(token.screenXSMax), ")"), [makeVerticalLayout(token), _defineProperty({}, componentCls, _defineProperty({}, ".".concat(rootPrefixCls, "-col-xs-24").concat(formItemCls, "-label"), makeVerticalLayoutLabel(token)))]), "@media (max-width: ".concat((0, _cssinjs.unit)(token.screenSMMax), ")"), _defineProperty({}, componentCls, _defineProperty({}, ".".concat(rootPrefixCls, "-col-sm-24").concat(formItemCls, "-label"), makeVerticalLayoutLabel(token)))), "@media (max-width: ".concat((0, _cssinjs.unit)(token.screenMDMax), ")"), _defineProperty({}, componentCls, _defineProperty({}, ".".concat(rootPrefixCls, "-col-md-24").concat(formItemCls, "-label"), makeVerticalLayoutLabel(token)))), "@media (max-width: ".concat((0, _cssinjs.unit)(token.screenLGMax), ")"), _defineProperty({}, componentCls, _defineProperty({}, ".".concat(rootPrefixCls, "-col-lg-24").concat(formItemCls, "-label"), makeVerticalLayoutLabel(token))));
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      labelRequiredMarkColor: token.colorError,
      labelColor: token.colorTextHeading,
      labelFontSize: token.fontSize,
      labelHeight: token.controlHeight,
      labelColonMarginInlineStart: token.marginXXS / 2,
      labelColonMarginInlineEnd: token.marginXS,
      itemMarginBottom: token.marginLG,
      verticalLabelPadding: "0 0 ".concat(token.paddingXS, "px"),
      verticalLabelMargin: 0
    };
  };
  var prepareToken = _exports.prepareToken = function prepareToken(token, rootPrefixCls) {
    var formToken = (0, _internal.mergeToken)(token, {
      formItemCls: "".concat(token.componentCls, "-item"),
      rootPrefixCls: rootPrefixCls
    });
    return formToken;
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Form', function (token, _ref) {
    var rootPrefixCls = _ref.rootPrefixCls;
    var formToken = prepareToken(token, rootPrefixCls);
    return [genFormStyle(formToken), genFormItemStyle(formToken), (0, _explain["default"])(formToken), genHorizontalStyle(formToken), genInlineStyle(formToken), genVerticalStyle(formToken), (0, _index2.genCollapseMotion)(formToken), _index2.zoomIn];
  }, prepareComponentToken, {
    // Let From style before the Grid
    // ref https://github.com/ant-design/ant-design/issues/44386
    order: -1000
  });
});