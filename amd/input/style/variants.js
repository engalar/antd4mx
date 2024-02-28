define(["exports", "@ant-design/cssinjs", "antd4mx/theme/internal"], function (_exports, _cssinjs, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.genOutlinedStyle = _exports.genOutlinedGroupStyle = _exports.genHoverStyle = _exports.genFilledStyle = _exports.genFilledGroupStyle = _exports.genDisabledStyle = _exports.genBorderlessStyle = _exports.genBaseOutlinedStyle = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genHoverStyle = _exports.genHoverStyle = function genHoverStyle(token) {
    return {
      borderColor: token.hoverBorderColor,
      backgroundColor: token.hoverBg
    };
  };
  var genDisabledStyle = _exports.genDisabledStyle = function genDisabledStyle(token) {
    return {
      color: token.colorTextDisabled,
      backgroundColor: token.colorBgContainerDisabled,
      borderColor: token.colorBorder,
      boxShadow: 'none',
      cursor: 'not-allowed',
      opacity: 1,
      'input[disabled]': {
        cursor: 'not-allowed'
      },
      '&:hover:not([disabled])': Object.assign({}, genHoverStyle((0, _internal.mergeToken)(token, {
        hoverBorderColor: token.colorBorder,
        hoverBg: token.colorBgContainerDisabled
      })))
    };
  };
  /* ============== Outlined ============== */
  var genBaseOutlinedStyle = _exports.genBaseOutlinedStyle = function genBaseOutlinedStyle(token, options) {
    return {
      background: token.colorBgContainer,
      borderWidth: token.lineWidth,
      borderStyle: token.lineType,
      borderColor: options.borderColor,
      '&:hover': {
        borderColor: options.hoverBorderColor,
        backgroundColor: token.hoverBg
      },
      '&:focus, &:focus-within': {
        borderColor: options.activeBorderColor,
        boxShadow: options.activeShadow,
        outline: 0,
        backgroundColor: token.activeBg
      }
    };
  };
  var genOutlinedStatusStyle = function genOutlinedStatusStyle(token, options) {
    return _defineProperty({}, "&".concat(token.componentCls, "-status-").concat(options.status, ":not(").concat(token.componentCls, "-disabled)"), Object.assign(Object.assign({}, genBaseOutlinedStyle(token, options)), _defineProperty({}, "".concat(token.componentCls, "-prefix, ").concat(token.componentCls, "-suffix"), {
      color: options.affixColor
    })));
  };
  var genOutlinedStyle = _exports.genOutlinedStyle = function genOutlinedStyle(token, extraStyles) {
    return {
      '&-outlined': Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseOutlinedStyle(token, {
        borderColor: token.colorBorder,
        hoverBorderColor: token.hoverBorderColor,
        activeBorderColor: token.activeBorderColor,
        activeShadow: token.activeShadow
      })), _defineProperty({}, "&".concat(token.componentCls, "-disabled, &[disabled]"), Object.assign({}, genDisabledStyle(token)))), genOutlinedStatusStyle(token, {
        status: 'error',
        borderColor: token.colorError,
        hoverBorderColor: token.colorErrorBorderHover,
        activeBorderColor: token.colorError,
        activeShadow: token.errorActiveShadow,
        affixColor: token.colorError
      })), genOutlinedStatusStyle(token, {
        status: 'warning',
        borderColor: token.colorWarning,
        hoverBorderColor: token.colorWarningBorderHover,
        activeBorderColor: token.colorWarning,
        activeShadow: token.warningActiveShadow,
        affixColor: token.colorWarning
      })), extraStyles)
    };
  };
  var genOutlinedGroupStatusStyle = function genOutlinedGroupStatusStyle(token, options) {
    return _defineProperty({}, "&".concat(token.componentCls, "-group-wrapper-status-").concat(options.status), _defineProperty({}, "".concat(token.componentCls, "-group-addon"), {
      borderColor: options.addonBorderColor,
      color: options.addonColor
    }));
  };
  var genOutlinedGroupStyle = _exports.genOutlinedGroupStyle = function genOutlinedGroupStyle(token) {
    return {
      '&-outlined': Object.assign(Object.assign(Object.assign(_defineProperty({}, "".concat(token.componentCls, "-group"), {
        '&-addon': {
          background: token.addonBg,
          border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder)
        },
        '&-addon:first-child': {
          borderInlineEnd: 0
        },
        '&-addon:last-child': {
          borderInlineStart: 0
        }
      }), genOutlinedGroupStatusStyle(token, {
        status: 'error',
        addonBorderColor: token.colorError,
        addonColor: token.colorErrorText
      })), genOutlinedGroupStatusStyle(token, {
        status: 'warning',
        addonBorderColor: token.colorWarning,
        addonColor: token.colorWarningText
      })), _defineProperty({}, "&".concat(token.componentCls, "-group-wrapper-disabled"), _defineProperty({}, "".concat(token.componentCls, "-group-addon"), Object.assign({}, genDisabledStyle(token)))))
    };
  };
  /* ============ Borderless ============ */
  var genBorderlessStyle = _exports.genBorderlessStyle = function genBorderlessStyle(token, extraStyles) {
    return {
      '&-borderless': Object.assign(_defineProperty({
        background: 'transparent',
        border: 'none',
        '&:focus, &:focus-within': {
          outline: 'none'
        }
      }, "&".concat(token.componentCls, "-disabled, &[disabled]"), {
        color: token.colorTextDisabled
      }), extraStyles)
    };
  };
  /* ============== Filled ============== */
  var genBaseFilledStyle = function genBaseFilledStyle(token, options) {
    return _defineProperty(_defineProperty(_defineProperty({
      background: options.bg,
      borderWidth: token.lineWidth,
      borderStyle: token.lineType,
      borderColor: 'transparent'
    }, "input&, & input, textarea&, & textarea", {
      color: options === null || options === void 0 ? void 0 : options.inputColor
    }), '&:hover', {
      background: options.hoverBg
    }), '&:focus, &:focus-within', {
      outline: 0,
      borderColor: options.activeBorderColor,
      backgroundColor: token.activeBg
    });
  };
  var genFilledStatusStyle = function genFilledStatusStyle(token, options) {
    return _defineProperty({}, "&".concat(token.componentCls, "-status-").concat(options.status, ":not(").concat(token.componentCls, "-disabled)"), Object.assign(Object.assign({}, genBaseFilledStyle(token, options)), _defineProperty({}, "".concat(token.componentCls, "-prefix, ").concat(token.componentCls, "-suffix"), {
      color: options.affixColor
    })));
  };
  var genFilledStyle = _exports.genFilledStyle = function genFilledStyle(token, extraStyles) {
    return {
      '&-filled': Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseFilledStyle(token, {
        bg: token.colorFillTertiary,
        hoverBg: token.colorFillSecondary,
        activeBorderColor: token.colorPrimary
      })), _defineProperty({}, "&".concat(token.componentCls, "-disabled, &[disabled]"), Object.assign({}, genDisabledStyle(token)))), genFilledStatusStyle(token, {
        status: 'error',
        bg: token.colorErrorBg,
        hoverBg: token.colorErrorBgHover,
        activeBorderColor: token.colorError,
        inputColor: token.colorErrorText,
        affixColor: token.colorError
      })), genFilledStatusStyle(token, {
        status: 'warning',
        bg: token.colorWarningBg,
        hoverBg: token.colorWarningBgHover,
        activeBorderColor: token.colorWarning,
        inputColor: token.colorWarningText,
        affixColor: token.colorWarning
      })), extraStyles)
    };
  };
  var genFilledGroupStatusStyle = function genFilledGroupStatusStyle(token, options) {
    return _defineProperty({}, "&".concat(token.componentCls, "-group-wrapper-status-").concat(options.status), _defineProperty({}, "".concat(token.componentCls, "-group-addon"), {
      background: options.addonBg,
      color: options.addonColor
    }));
  };
  var genFilledGroupStyle = _exports.genFilledGroupStyle = function genFilledGroupStyle(token) {
    return {
      '&-filled': Object.assign(Object.assign(Object.assign(_defineProperty({}, "".concat(token.componentCls, "-group"), _defineProperty({
        '&-addon': {
          background: token.colorFillTertiary
        }
      }, "".concat(token.componentCls, "-filled:not(:focus):not(:focus-within)"), {
        '&:not(:first-child)': {
          borderInlineStart: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit)
        },
        '&:not(:last-child)': {
          borderInlineEnd: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit)
        }
      })), genFilledGroupStatusStyle(token, {
        status: 'error',
        addonBg: token.colorErrorBg,
        addonColor: token.colorErrorText
      })), genFilledGroupStatusStyle(token, {
        status: 'warning',
        addonBg: token.colorWarningBg,
        addonColor: token.colorWarningText
      })), _defineProperty({}, "&".concat(token.componentCls, "-group-wrapper-disabled"), _defineProperty({}, "".concat(token.componentCls, "-group"), {
        '&-addon': {
          background: token.colorFillTertiary,
          color: token.colorTextDisabled
        },
        '&-addon:first-child': {
          borderInlineStart: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder),
          borderTop: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder),
          borderBottom: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder)
        },
        '&-addon:last-child': {
          borderInlineEnd: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder),
          borderTop: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder),
          borderBottom: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder)
        }
      })))
    };
  };
});