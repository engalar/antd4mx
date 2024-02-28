define(["exports", "antd4mx/style", "antd4mx/theme/internal", "antd4mx/typography/style/mixins"], function (_exports, _style, _internal, _mixins) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genTypographyStyle = function genTypographyStyle(token) {
    var componentCls = token.componentCls,
      titleMarginTop = token.titleMarginTop;
    return _defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      color: token.colorText,
      wordBreak: 'break-word',
      lineHeight: token.lineHeight
    }, "&".concat(componentCls, "-secondary"), {
      color: token.colorTextDescription
    }), "&".concat(componentCls, "-success"), {
      color: token.colorSuccess
    }), "&".concat(componentCls, "-warning"), {
      color: token.colorWarning
    }), "&".concat(componentCls, "-danger"), {
      color: token.colorError,
      'a&:active, a&:focus': {
        color: token.colorErrorActive
      },
      'a&:hover': {
        color: token.colorErrorHover
      }
    }), "&".concat(componentCls, "-disabled"), {
      color: token.colorTextDisabled,
      cursor: 'not-allowed',
      userSelect: 'none'
    }), "\n        div&,\n        p\n      ", {
      marginBottom: '1em'
    }), (0, _mixins.getTitleStyles)(token)), _defineProperty(_defineProperty({}, "\n      & + h1".concat(componentCls, ",\n      & + h2").concat(componentCls, ",\n      & + h3").concat(componentCls, ",\n      & + h4").concat(componentCls, ",\n      & + h5").concat(componentCls, "\n      "), {
      marginTop: titleMarginTop
    }), "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5", _defineProperty({}, "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ", {
      marginTop: titleMarginTop
    }))), (0, _mixins.getResetStyles)(token)), (0, _mixins.getLinkStyles)(token)), _defineProperty({}, "\n        ".concat(componentCls, "-expand,\n        ").concat(componentCls, "-edit,\n        ").concat(componentCls, "-copy\n      "), Object.assign(Object.assign({}, (0, _style.operationUnit)(token)), {
      marginInlineStart: token.marginXXS
    }))), (0, _mixins.getEditableStyles)(token)), (0, _mixins.getCopyableStyles)(token)), (0, _mixins.getEllipsisStyles)()), {
      '&-rtl': {
        direction: 'rtl'
      }
    }));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken() {
    return {
      titleMarginTop: '1.2em',
      titleMarginBottom: '0.5em'
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Typography', function (token) {
    return [genTypographyStyle(token)];
  }, prepareComponentToken);
});