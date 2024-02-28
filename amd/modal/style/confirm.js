define(["exports", "@ant-design/cssinjs", "antd4mx/modal/style/index", "antd4mx/style/index", "antd4mx/theme/internal"], function (_exports, _cssinjs, _index, _index2, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // Style as confirm component
  // ============================= Confirm ==============================
  var genModalConfirmStyle = function genModalConfirmStyle(token) {
    var componentCls = token.componentCls,
      titleFontSize = token.titleFontSize,
      titleLineHeight = token.titleLineHeight,
      modalConfirmIconSize = token.modalConfirmIconSize,
      fontSize = token.fontSize,
      lineHeight = token.lineHeight,
      modalTitleHeight = token.modalTitleHeight,
      fontHeight = token.fontHeight,
      confirmBodyPadding = token.confirmBodyPadding;
    var confirmComponentCls = "".concat(componentCls, "-confirm");
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, confirmComponentCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      '&-rtl': {
        direction: 'rtl'
      }
    }, "".concat(token.antCls, "-modal-header"), {
      display: 'none'
    }), "".concat(confirmComponentCls, "-body-wrapper"), Object.assign({}, (0, _index2.clearFix)())), "&".concat(componentCls, " ").concat(componentCls, "-body"), {
      padding: confirmBodyPadding
    }), "".concat(confirmComponentCls, "-body"), _defineProperty(_defineProperty({
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'start'
    }, "> ".concat(token.iconCls), {
      flex: 'none',
      fontSize: modalConfirmIconSize,
      marginInlineEnd: token.confirmIconMarginInlineEnd,
      marginTop: token.calc(token.calc(fontHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
    }), "&-has-title > ".concat(token.iconCls), {
      marginTop: token.calc(token.calc(modalTitleHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
    })), "".concat(confirmComponentCls, "-paragraph"), {
      display: 'flex',
      flexDirection: 'column',
      flex: 'auto',
      rowGap: token.marginXS,
      maxWidth: "calc(100% - ".concat((0, _cssinjs.unit)(token.calc(token.modalConfirmIconSize).add(token.marginSM).equal()), ")")
    }), "".concat(confirmComponentCls, "-title"), {
      color: token.colorTextHeading,
      fontWeight: token.fontWeightStrong,
      fontSize: titleFontSize,
      lineHeight: titleLineHeight
    }), "".concat(confirmComponentCls, "-content"), {
      color: token.colorText,
      fontSize: fontSize,
      lineHeight: lineHeight
    }), "".concat(confirmComponentCls, "-btns"), _defineProperty({
      textAlign: 'end',
      marginTop: token.confirmBtnsMarginTop
    }, "".concat(token.antCls, "-btn + ").concat(token.antCls, "-btn"), {
      marginBottom: 0,
      marginInlineStart: token.marginXS
    }))), "".concat(confirmComponentCls, "-error ").concat(confirmComponentCls, "-body > ").concat(token.iconCls), {
      color: token.colorError
    }), "".concat(confirmComponentCls, "-warning ").concat(confirmComponentCls, "-body > ").concat(token.iconCls, ",\n        ").concat(confirmComponentCls, "-confirm ").concat(confirmComponentCls, "-body > ").concat(token.iconCls), {
      color: token.colorWarning
    }), "".concat(confirmComponentCls, "-info ").concat(confirmComponentCls, "-body > ").concat(token.iconCls), {
      color: token.colorInfo
    }), "".concat(confirmComponentCls, "-success ").concat(confirmComponentCls, "-body > ").concat(token.iconCls), {
      color: token.colorSuccess
    });
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genSubStyleComponent)(['Modal', 'confirm'], function (token) {
    var modalToken = (0, _index.prepareToken)(token);
    return [genModalConfirmStyle(modalToken)];
  }, _index.prepareComponentToken, {
    // confirm is weak than modal since no conflict here
    order: -1000
  });
});