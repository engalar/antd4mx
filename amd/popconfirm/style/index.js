define(["exports", "antd4mx/theme/internal"], function (_exports, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  // =============================== Base ===============================
  var genBaseStyle = function genBaseStyle(token) {
    var componentCls = token.componentCls,
      iconCls = token.iconCls,
      antCls = token.antCls,
      zIndexPopup = token.zIndexPopup,
      colorText = token.colorText,
      colorWarning = token.colorWarning,
      marginXXS = token.marginXXS,
      marginXS = token.marginXS,
      fontSize = token.fontSize,
      fontWeightStrong = token.fontWeightStrong,
      colorTextHeading = token.colorTextHeading;
    return _defineProperty({}, componentCls, _defineProperty(_defineProperty(_defineProperty({
      zIndex: zIndexPopup
    }, "&".concat(antCls, "-popover"), {
      fontSize: fontSize
    }), "".concat(componentCls, "-message"), _defineProperty(_defineProperty(_defineProperty({
      marginBottom: marginXS,
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'start'
    }, "> ".concat(componentCls, "-message-icon ").concat(iconCls), {
      color: colorWarning,
      fontSize: fontSize,
      lineHeight: 1,
      marginInlineEnd: marginXS
    }), "".concat(componentCls, "-title"), {
      fontWeight: fontWeightStrong,
      color: colorTextHeading,
      '&:only-child': {
        fontWeight: 'normal'
      }
    }), "".concat(componentCls, "-description"), {
      marginTop: marginXXS,
      color: colorText
    })), "".concat(componentCls, "-buttons"), {
      textAlign: 'end',
      whiteSpace: 'nowrap',
      button: {
        marginInlineStart: marginXS
      }
    }));
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var zIndexPopupBase = token.zIndexPopupBase;
    return {
      zIndexPopup: zIndexPopupBase + 60
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Popconfirm', function (token) {
    return genBaseStyle(token);
  }, prepareComponentToken, {
    resetStyle: false
  });
});