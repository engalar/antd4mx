define(["exports", "@ant-design/cssinjs", "antd4mx/style/index", "antd4mx/theme/internal"], function (_exports, _cssinjs, _index, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.genCheckboxStyle = _exports["default"] = void 0;
  _exports.getStyle = getStyle;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // ============================== Styles ==============================
  var genCheckboxStyle = _exports.genCheckboxStyle = function genCheckboxStyle(token) {
    var checkboxCls = token.checkboxCls;
    var wrapperCls = "".concat(checkboxCls, "-wrapper");
    return [// ===================== Basic =====================
    _defineProperty(_defineProperty(_defineProperty({}, "".concat(checkboxCls, "-group"), Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty({
      display: 'inline-flex',
      flexWrap: 'wrap',
      columnGap: token.marginXS
    }, "> ".concat(token.antCls, "-row"), {
      flex: 1
    }))), wrapperCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty({
      display: 'inline-flex',
      alignItems: 'baseline',
      cursor: 'pointer',
      // Fix checkbox & radio in flex align #30260
      '&:after': {
        display: 'inline-block',
        width: 0,
        overflow: 'hidden',
        content: "'\\a0'"
      }
    }, "& + ".concat(wrapperCls), {
      marginInlineStart: 0
    }), "&".concat(wrapperCls, "-in-form-item"), {
      'input[type="checkbox"]': {
        width: 14,
        // FIXME: magic
        height: 14 // FIXME: magic
      }
    }))), checkboxCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      whiteSpace: 'nowrap',
      lineHeight: 1,
      cursor: 'pointer',
      borderRadius: token.borderRadiusSM,
      // To make alignment right when `controlHeight` is changed
      // Ref: https://github.com/ant-design/ant-design/issues/41564
      alignSelf: 'center'
    }, "".concat(checkboxCls, "-input"), _defineProperty({
      position: 'absolute',
      // Since baseline align will get additional space offset,
      // we need to move input to top to make it align with text.
      // Ref: https://github.com/ant-design/ant-design/issues/38926#issuecomment-1486137799
      inset: 0,
      zIndex: 1,
      cursor: 'pointer',
      opacity: 0,
      margin: 0
    }, "&:focus-visible + ".concat(checkboxCls, "-inner"), Object.assign({}, (0, _index.genFocusOutline)(token)))), "".concat(checkboxCls, "-inner"), {
      boxSizing: 'border-box',
      display: 'block',
      width: token.checkboxSize,
      height: token.checkboxSize,
      direction: 'ltr',
      backgroundColor: token.colorBgContainer,
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder),
      borderRadius: token.borderRadiusSM,
      borderCollapse: 'separate',
      transition: "all ".concat(token.motionDurationSlow),
      '&:after': {
        boxSizing: 'border-box',
        position: 'absolute',
        top: '50%',
        insetInlineStart: '25%',
        display: 'table',
        width: token.calc(token.checkboxSize).div(14).mul(5).equal(),
        height: token.calc(token.checkboxSize).div(14).mul(8).equal(),
        border: "".concat((0, _cssinjs.unit)(token.lineWidthBold), " solid ").concat(token.colorWhite),
        borderTop: 0,
        borderInlineStart: 0,
        transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
        opacity: 0,
        content: '""',
        transition: "all ".concat(token.motionDurationFast, " ").concat(token.motionEaseInBack, ", opacity ").concat(token.motionDurationFast)
      }
    }), '& + span', {
      paddingInlineStart: token.paddingXS,
      paddingInlineEnd: token.paddingXS
    }))), // ===================== Hover =====================
    _defineProperty(_defineProperty({}, "\n        ".concat(wrapperCls, ":not(").concat(wrapperCls, "-disabled),\n        ").concat(checkboxCls, ":not(").concat(checkboxCls, "-disabled)\n      "), _defineProperty({}, "&:hover ".concat(checkboxCls, "-inner"), {
      borderColor: token.colorPrimary
    })), "".concat(wrapperCls, ":not(").concat(wrapperCls, "-disabled)"), _defineProperty(_defineProperty({}, "&:hover ".concat(checkboxCls, "-checked:not(").concat(checkboxCls, "-disabled) ").concat(checkboxCls, "-inner"), {
      backgroundColor: token.colorPrimaryHover,
      borderColor: 'transparent'
    }), "&:hover ".concat(checkboxCls, "-checked:not(").concat(checkboxCls, "-disabled):after"), {
      borderColor: token.colorPrimaryHover
    })), // ==================== Checked ====================
    _defineProperty(_defineProperty({}, "".concat(checkboxCls, "-checked"), _defineProperty({}, "".concat(checkboxCls, "-inner"), {
      backgroundColor: token.colorPrimary,
      borderColor: token.colorPrimary,
      '&:after': {
        opacity: 1,
        transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
        transition: "all ".concat(token.motionDurationMid, " ").concat(token.motionEaseOutBack, " ").concat(token.motionDurationFast)
      }
    })), "\n        ".concat(wrapperCls, "-checked:not(").concat(wrapperCls, "-disabled),\n        ").concat(checkboxCls, "-checked:not(").concat(checkboxCls, "-disabled)\n      "), _defineProperty({}, "&:hover ".concat(checkboxCls, "-inner"), {
      backgroundColor: token.colorPrimaryHover,
      borderColor: 'transparent'
    })), // ================= Indeterminate =================
    _defineProperty({}, checkboxCls, {
      '&-indeterminate': _defineProperty({}, "".concat(checkboxCls, "-inner"), {
        backgroundColor: token.colorBgContainer,
        borderColor: token.colorBorder,
        '&:after': {
          top: '50%',
          insetInlineStart: '50%',
          width: token.calc(token.fontSizeLG).div(2).equal(),
          height: token.calc(token.fontSizeLG).div(2).equal(),
          backgroundColor: token.colorPrimary,
          border: 0,
          transform: 'translate(-50%, -50%) scale(1)',
          opacity: 1,
          content: '""'
        }
      })
    }), // ==================== Disable ====================
    _defineProperty(_defineProperty({}, "".concat(wrapperCls, "-disabled"), {
      cursor: 'not-allowed'
    }), "".concat(checkboxCls, "-disabled"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "&, ".concat(checkboxCls, "-input"), {
      cursor: 'not-allowed',
      // Disabled for native input to enable Tooltip event handler
      // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-1365075901
      pointerEvents: 'none'
    }), "".concat(checkboxCls, "-inner"), {
      background: token.colorBgContainerDisabled,
      borderColor: token.colorBorder,
      '&:after': {
        borderColor: token.colorTextDisabled
      }
    }), '&:after', {
      display: 'none'
    }), '& + span', {
      color: token.colorTextDisabled
    }), "&".concat(checkboxCls, "-indeterminate ").concat(checkboxCls, "-inner::after"), {
      background: token.colorTextDisabled
    }))];
  };
  // ============================== Export ==============================
  function getStyle(prefixCls, token) {
    var checkboxToken = (0, _internal.mergeToken)(token, {
      checkboxCls: ".".concat(prefixCls),
      checkboxSize: token.controlInteractiveSize
    });
    return [genCheckboxStyle(checkboxToken)];
  }
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Checkbox', function (token, _ref) {
    var prefixCls = _ref.prefixCls;
    return [getStyle(prefixCls, token)];
  });
});