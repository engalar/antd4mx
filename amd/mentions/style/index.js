define(["exports", "antd4mx/input/style", "antd4mx/style", "antd4mx/theme/internal", "@ant-design/cssinjs", "antd4mx/input/style/variants"], function (_exports, _style, _style2, _internal, _cssinjs, _variants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genMentionsStyle = function genMentionsStyle(token) {
    var componentCls = token.componentCls,
      colorTextDisabled = token.colorTextDisabled,
      controlItemBgHover = token.controlItemBgHover,
      controlPaddingHorizontal = token.controlPaddingHorizontal,
      colorText = token.colorText,
      motionDurationSlow = token.motionDurationSlow,
      lineHeight = token.lineHeight,
      controlHeight = token.controlHeight,
      paddingInline = token.paddingInline,
      paddingBlock = token.paddingBlock,
      fontSize = token.fontSize,
      fontSizeIcon = token.fontSizeIcon,
      colorTextTertiary = token.colorTextTertiary,
      colorTextQuaternary = token.colorTextQuaternary,
      colorBgElevated = token.colorBgElevated,
      paddingXXS = token.paddingXXS,
      paddingLG = token.paddingLG,
      borderRadius = token.borderRadius,
      borderRadiusLG = token.borderRadiusLG,
      boxShadowSecondary = token.boxShadowSecondary,
      itemPaddingVertical = token.itemPaddingVertical,
      calc = token.calc;
    return _defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _style2.resetComponent)(token)), (0, _style.genBasicInputStyle)(token)), {
      position: 'relative',
      display: 'inline-block',
      height: 'auto',
      padding: 0,
      overflow: 'hidden',
      lineHeight: lineHeight,
      whiteSpace: 'pre-wrap',
      verticalAlign: 'bottom'
    }), (0, _variants.genOutlinedStyle)(token)), (0, _variants.genFilledStyle)(token)), (0, _variants.genBorderlessStyle)(token)), _defineProperty(_defineProperty({
      '&-affix-wrapper': Object.assign(Object.assign({}, (0, _style.genBasicInputStyle)(token)), _defineProperty(_defineProperty(_defineProperty({
        display: 'inline-flex',
        padding: 0,
        '&::before': {
          display: 'inline-block',
          width: 0,
          visibility: 'hidden',
          content: '"\\a0"'
        }
      }, "".concat(componentCls, "-suffix"), {
        position: 'absolute',
        top: 0,
        insetInlineEnd: paddingInline,
        bottom: 0,
        zIndex: 1,
        display: 'inline-flex',
        alignItems: 'center',
        margin: 'auto'
      }), "&:has(".concat(componentCls, "-suffix) > ").concat(componentCls, " > textarea"), {
        paddingInlineEnd: paddingLG
      }), "".concat(componentCls, "-clear-icon"), {
        position: 'absolute',
        insetInlineEnd: 0,
        insetBlockStart: calc(fontSize).mul(lineHeight).mul(0.5).add(paddingBlock).equal(),
        transform: "translateY(-50%)",
        margin: 0,
        color: colorTextQuaternary,
        fontSize: fontSizeIcon,
        verticalAlign: -1,
        // https://github.com/ant-design/ant-design/pull/18151
        // https://codesandbox.io/s/wizardly-sun-u10br
        cursor: 'pointer',
        transition: "color ".concat(motionDurationSlow),
        '&:hover': {
          color: colorTextTertiary
        },
        '&:active': {
          color: colorText
        },
        '&-hidden': {
          visibility: 'hidden'
        }
      })),
      '&-disabled': {
        '> textarea': Object.assign({}, (0, _variants.genDisabledStyle)(token))
      }
    }, "&, &-affix-wrapper > ".concat(componentCls), _defineProperty(_defineProperty(_defineProperty({}, "> textarea, ".concat(componentCls, "-measure"), {
      color: colorText,
      boxSizing: 'border-box',
      minHeight: token.calc(controlHeight).sub(2),
      margin: 0,
      padding: "".concat((0, _cssinjs.unit)(paddingBlock), " ").concat((0, _cssinjs.unit)(paddingInline)),
      overflow: 'inherit',
      overflowX: 'hidden',
      overflowY: 'auto',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontVariant: 'inherit',
      fontSizeAdjust: 'inherit',
      fontStretch: 'inherit',
      lineHeight: 'inherit',
      direction: 'inherit',
      letterSpacing: 'inherit',
      whiteSpace: 'inherit',
      textAlign: 'inherit',
      verticalAlign: 'top',
      wordWrap: 'break-word',
      wordBreak: 'inherit',
      tabSize: 'inherit'
    }), '> textarea', Object.assign({
      width: '100%',
      border: 'none',
      outline: 'none',
      resize: 'none',
      backgroundColor: 'transparent'
    }, (0, _style.genPlaceholderStyle)(token.colorTextPlaceholder))), "".concat(componentCls, "-measure"), {
      position: 'absolute',
      top: 0,
      insetInlineEnd: 0,
      bottom: 0,
      insetInlineStart: 0,
      zIndex: -1,
      color: 'transparent',
      pointerEvents: 'none',
      '> span': {
        display: 'inline-block',
        minHeight: '1em'
      }
    })), '&-dropdown', Object.assign(Object.assign({}, (0, _style2.resetComponent)(token)), _defineProperty({
      position: 'absolute',
      top: -9999,
      insetInlineStart: -9999,
      zIndex: token.zIndexPopup,
      boxSizing: 'border-box',
      fontSize: fontSize,
      fontVariant: 'initial',
      padding: paddingXXS,
      backgroundColor: colorBgElevated,
      borderRadius: borderRadiusLG,
      outline: 'none',
      boxShadow: boxShadowSecondary,
      '&-hidden': {
        display: 'none'
      }
    }, "".concat(componentCls, "-dropdown-menu"), {
      maxHeight: token.dropdownHeight,
      margin: 0,
      paddingInlineStart: 0,
      // Override default ul/ol
      overflow: 'auto',
      listStyle: 'none',
      outline: 'none',
      '&-item': Object.assign(Object.assign({}, _style2.textEllipsis), {
        position: 'relative',
        display: 'block',
        minWidth: token.controlItemWidth,
        padding: "".concat((0, _cssinjs.unit)(itemPaddingVertical), " ").concat((0, _cssinjs.unit)(controlPaddingHorizontal)),
        color: colorText,
        borderRadius: borderRadius,
        fontWeight: 'normal',
        lineHeight: lineHeight,
        cursor: 'pointer',
        transition: "background ".concat(motionDurationSlow, " ease"),
        '&:hover': {
          backgroundColor: controlItemBgHover
        },
        '&-disabled': {
          color: colorTextDisabled,
          cursor: 'not-allowed',
          '&:hover': {
            color: colorTextDisabled,
            backgroundColor: controlItemBgHover,
            cursor: 'not-allowed'
          }
        },
        '&-selected': {
          color: colorText,
          fontWeight: token.fontWeightStrong,
          backgroundColor: controlItemBgHover
        },
        '&-active': {
          backgroundColor: controlItemBgHover
        }
      })
    })))));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return Object.assign(Object.assign({}, (0, _style.initComponentToken)(token)), {
      dropdownHeight: 250,
      controlItemWidth: 100,
      zIndexPopup: token.zIndexPopupBase + 50,
      itemPaddingVertical: (token.controlHeight - token.fontHeight) / 2
    });
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Mentions', function (token) {
    var mentionsToken = (0, _internal.mergeToken)(token, (0, _style.initInputToken)(token));
    return [genMentionsStyle(mentionsToken)];
  }, prepareComponentToken);
});