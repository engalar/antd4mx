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
  // =====================================================
  // ==                  Outlined                       ==
  // =====================================================
  var genBaseOutlinedStyle = function genBaseOutlinedStyle(token, options) {
    var componentCls = token.componentCls,
      antCls = token.antCls,
      controlOutlineWidth = token.controlOutlineWidth;
    return _defineProperty(_defineProperty({}, "&:not(".concat(componentCls, "-customize-input) ").concat(componentCls, "-selector"), {
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(options.borderColor),
      background: token.selectorBg
    }), "&:not(".concat(componentCls, "-disabled):not(").concat(componentCls, "-customize-input):not(").concat(antCls, "-pagination-size-changer)"), _defineProperty(_defineProperty({}, "&:hover ".concat(componentCls, "-selector"), {
      borderColor: options.hoverBorderHover
    }), "".concat(componentCls, "-focused& ").concat(componentCls, "-selector"), {
      borderColor: options.activeBorderColor,
      boxShadow: "0 0 0 ".concat((0, _cssinjs.unit)(controlOutlineWidth), " ").concat(options.activeShadowColor),
      outline: 0
    }));
  };
  var genOutlinedStatusStyle = function genOutlinedStatusStyle(token, options) {
    return _defineProperty({}, "&".concat(token.componentCls, "-status-").concat(options.status), Object.assign({}, genBaseOutlinedStyle(token, options)));
  };
  var genOutlinedStyle = function genOutlinedStyle(token) {
    return {
      '&-outlined': Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseOutlinedStyle(token, {
        borderColor: token.colorBorder,
        hoverBorderHover: token.colorPrimaryHover,
        activeBorderColor: token.colorPrimary,
        activeShadowColor: token.controlOutline
      })), genOutlinedStatusStyle(token, {
        status: 'error',
        borderColor: token.colorError,
        hoverBorderHover: token.colorErrorHover,
        activeBorderColor: token.colorError,
        activeShadowColor: token.colorErrorOutline
      })), genOutlinedStatusStyle(token, {
        status: 'warning',
        borderColor: token.colorWarning,
        hoverBorderHover: token.colorWarningHover,
        activeBorderColor: token.colorWarning,
        activeShadowColor: token.colorWarningOutline
      })), _defineProperty(_defineProperty({}, "&".concat(token.componentCls, "-disabled"), _defineProperty({}, "&:not(".concat(token.componentCls, "-customize-input) ").concat(token.componentCls, "-selector"), {
        background: token.colorBgContainerDisabled,
        color: token.colorTextDisabled
      })), "&".concat(token.componentCls, "-multiple ").concat(token.componentCls, "-selection-item"), {
        background: token.multipleItemBg,
        border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.multipleItemBorderColor)
      }))
    };
  };
  // =====================================================
  // ==                   Filled                        ==
  // =====================================================
  var genBaseFilledStyle = function genBaseFilledStyle(token, options) {
    var componentCls = token.componentCls,
      antCls = token.antCls;
    return _defineProperty(_defineProperty({}, "&:not(".concat(componentCls, "-customize-input) ").concat(componentCls, "-selector"), {
      background: options.bg,
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " transparent"),
      color: options.color
    }), "&:not(".concat(componentCls, "-disabled):not(").concat(componentCls, "-customize-input):not(").concat(antCls, "-pagination-size-changer)"), _defineProperty(_defineProperty({}, "&:hover ".concat(componentCls, "-selector"), {
      background: options.hoverBg
    }), "".concat(componentCls, "-focused& ").concat(componentCls, "-selector"), {
      background: token.selectorBg,
      borderColor: options.activeBorderColor,
      outline: 0
    }));
  };
  var genFilledStatusStyle = function genFilledStatusStyle(token, options) {
    return _defineProperty({}, "&".concat(token.componentCls, "-status-").concat(options.status), Object.assign({}, genBaseFilledStyle(token, options)));
  };
  var genFilledStyle = function genFilledStyle(token) {
    return {
      '&-filled': Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseFilledStyle(token, {
        bg: token.colorFillTertiary,
        hoverBg: token.colorFillSecondary,
        activeBorderColor: token.colorPrimary,
        color: token.colorText
      })), genFilledStatusStyle(token, {
        status: 'error',
        bg: token.colorErrorBg,
        hoverBg: token.colorErrorBgHover,
        activeBorderColor: token.colorError,
        color: token.colorError
      })), genFilledStatusStyle(token, {
        status: 'warning',
        bg: token.colorWarningBg,
        hoverBg: token.colorWarningBgHover,
        activeBorderColor: token.colorWarning,
        color: token.colorWarning
      })), _defineProperty(_defineProperty({}, "&".concat(token.componentCls, "-disabled"), _defineProperty({}, "&:not(".concat(token.componentCls, "-customize-input) ").concat(token.componentCls, "-selector"), {
        borderColor: token.colorBorder,
        background: token.colorBgContainerDisabled,
        color: token.colorTextDisabled
      })), "&".concat(token.componentCls, "-multiple ").concat(token.componentCls, "-selection-item"), {
        background: token.colorBgContainer,
        border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit)
      }))
    };
  };
  // =====================================================
  // ==                 Borderless                      ==
  // =====================================================
  var genBorderlessStyle = function genBorderlessStyle(token) {
    return {
      '&-borderless': _defineProperty(_defineProperty(_defineProperty({}, "".concat(token.componentCls, "-selector"), {
        background: 'transparent',
        borderColor: 'transparent'
      }), "&".concat(token.componentCls, "-disabled"), _defineProperty({}, "&:not(".concat(token.componentCls, "-customize-input) ").concat(token.componentCls, "-selector"), {
        color: token.colorTextDisabled
      })), "&".concat(token.componentCls, "-multiple ").concat(token.componentCls, "-selection-item"), {
        background: token.multipleItemBg,
        border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.multipleItemBorderColor)
      })
    };
  };
  var genVariantsStyle = function genVariantsStyle(token) {
    return _defineProperty({}, token.componentCls, Object.assign(Object.assign(Object.assign({}, genOutlinedStyle(token)), genFilledStyle(token)), genBorderlessStyle(token)));
  };
  var _default = _exports["default"] = genVariantsStyle;
});