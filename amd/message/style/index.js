define(["exports", "@ant-design/cssinjs", "antd4mx/_util/hooks/useZIndex", "antd4mx/style/index", "antd4mx/theme/internal"], function (_exports, _cssinjs, _useZIndex, _index, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genMessageStyle = function genMessageStyle(token) {
    var componentCls = token.componentCls,
      iconCls = token.iconCls,
      boxShadow = token.boxShadow,
      colorText = token.colorText,
      colorSuccess = token.colorSuccess,
      colorError = token.colorError,
      colorWarning = token.colorWarning,
      colorInfo = token.colorInfo,
      fontSizeLG = token.fontSizeLG,
      motionEaseInOutCirc = token.motionEaseInOutCirc,
      motionDurationSlow = token.motionDurationSlow,
      marginXS = token.marginXS,
      paddingXS = token.paddingXS,
      borderRadiusLG = token.borderRadiusLG,
      zIndexPopup = token.zIndexPopup,
      contentPadding = token.contentPadding,
      contentBg = token.contentBg;
    var noticeCls = "".concat(componentCls, "-notice");
    var messageMoveIn = new _cssinjs.Keyframes('MessageMoveIn', {
      '0%': {
        padding: 0,
        transform: 'translateY(-100%)',
        opacity: 0
      },
      '100%': {
        padding: paddingXS,
        transform: 'translateY(0)',
        opacity: 1
      }
    });
    var messageMoveOut = new _cssinjs.Keyframes('MessageMoveOut', {
      '0%': {
        maxHeight: token.height,
        padding: paddingXS,
        opacity: 1
      },
      '100%': {
        maxHeight: 0,
        padding: 0,
        opacity: 0
      }
    });
    var noticeStyle = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      padding: paddingXS,
      textAlign: 'center'
    }, "".concat(componentCls, "-custom-content > ").concat(iconCls), {
      verticalAlign: 'text-bottom',
      marginInlineEnd: marginXS,
      // affected by ltr or rtl
      fontSize: fontSizeLG
    }), "".concat(noticeCls, "-content"), {
      display: 'inline-block',
      padding: contentPadding,
      background: contentBg,
      borderRadius: borderRadiusLG,
      boxShadow: boxShadow,
      pointerEvents: 'all'
    }), "".concat(componentCls, "-success > ").concat(iconCls), {
      color: colorSuccess
    }), "".concat(componentCls, "-error > ").concat(iconCls), {
      color: colorError
    }), "".concat(componentCls, "-warning > ").concat(iconCls), {
      color: colorWarning
    }), "".concat(componentCls, "-info > ").concat(iconCls, ",\n      ").concat(componentCls, "-loading > ").concat(iconCls), {
      color: colorInfo
    });
    return [// ============================ Holder ============================
    _defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      color: colorText,
      position: 'fixed',
      top: marginXS,
      width: '100%',
      pointerEvents: 'none',
      zIndex: zIndexPopup
    }, "".concat(componentCls, "-move-up"), {
      animationFillMode: 'forwards'
    }), "\n        ".concat(componentCls, "-move-up-appear,\n        ").concat(componentCls, "-move-up-enter\n      "), {
      animationName: messageMoveIn,
      animationDuration: motionDurationSlow,
      animationPlayState: 'paused',
      animationTimingFunction: motionEaseInOutCirc
    }), "\n        ".concat(componentCls, "-move-up-appear").concat(componentCls, "-move-up-appear-active,\n        ").concat(componentCls, "-move-up-enter").concat(componentCls, "-move-up-enter-active\n      "), {
      animationPlayState: 'running'
    }), "".concat(componentCls, "-move-up-leave"), {
      animationName: messageMoveOut,
      animationDuration: motionDurationSlow,
      animationPlayState: 'paused',
      animationTimingFunction: motionEaseInOutCirc
    }), "".concat(componentCls, "-move-up-leave").concat(componentCls, "-move-up-leave-active"), {
      animationPlayState: 'running'
    }), '&-rtl', {
      direction: 'rtl',
      span: {
        direction: 'rtl'
      }
    }))), // ============================ Notice ============================
    _defineProperty({}, componentCls, _defineProperty({}, "".concat(noticeCls, "-wrapper"), Object.assign({}, noticeStyle))), // ============================= Pure =============================
    _defineProperty({}, "".concat(componentCls, "-notice-pure-panel"), Object.assign(Object.assign({}, noticeStyle), {
      padding: 0,
      textAlign: 'start'
    }))];
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      zIndexPopup: token.zIndexPopupBase + _useZIndex.CONTAINER_MAX_OFFSET + 10,
      contentBg: token.colorBgElevated,
      contentPadding: "".concat((token.controlHeightLG - token.fontSize * token.lineHeight) / 2, "px ").concat(token.paddingSM, "px")
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Message', function (token) {
    // Gen-style functions here
    var combinedToken = (0, _internal.mergeToken)(token, {
      height: 150
    });
    return [genMessageStyle(combinedToken)];
  }, prepareComponentToken);
});