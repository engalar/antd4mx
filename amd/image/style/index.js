define(["exports", "@ant-design/cssinjs", "@ctrl/tinycolor", "antd4mx/modal/style/index", "antd4mx/style/index", "antd4mx/style/motion/index", "antd4mx/theme/internal"], function (_exports, _cssinjs, _tinycolor, _index, _index2, _index3, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports.genPreviewSwitchStyle = _exports.genPreviewOperationsStyle = _exports.genImagePreviewStyle = _exports.genImageMaskStyle = _exports.genBoxStyle = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genBoxStyle = _exports.genBoxStyle = function genBoxStyle(position) {
    return {
      position: position || 'absolute',
      inset: 0
    };
  };
  var genImageMaskStyle = _exports.genImageMaskStyle = function genImageMaskStyle(token) {
    var iconCls = token.iconCls,
      motionDurationSlow = token.motionDurationSlow,
      paddingXXS = token.paddingXXS,
      marginXXS = token.marginXXS,
      prefixCls = token.prefixCls,
      colorTextLightSolid = token.colorTextLightSolid;
    return _defineProperty({
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colorTextLightSolid,
      background: new _tinycolor.TinyColor('#000').setAlpha(0.5).toRgbString(),
      cursor: 'pointer',
      opacity: 0,
      transition: "opacity ".concat(motionDurationSlow)
    }, ".".concat(prefixCls, "-mask-info"), Object.assign(Object.assign({}, _index2.textEllipsis), _defineProperty({
      padding: "0 ".concat((0, _cssinjs.unit)(paddingXXS))
    }, iconCls, {
      marginInlineEnd: marginXXS,
      svg: {
        verticalAlign: 'baseline'
      }
    })));
  };
  var genPreviewOperationsStyle = _exports.genPreviewOperationsStyle = function genPreviewOperationsStyle(token) {
    var previewCls = token.previewCls,
      modalMaskBg = token.modalMaskBg,
      paddingSM = token.paddingSM,
      marginXL = token.marginXL,
      margin = token.margin,
      paddingLG = token.paddingLG,
      previewOperationColorDisabled = token.previewOperationColorDisabled,
      previewOperationHoverColor = token.previewOperationHoverColor,
      motionDurationSlow = token.motionDurationSlow,
      iconCls = token.iconCls,
      colorTextLightSolid = token.colorTextLightSolid;
    var operationBg = new _tinycolor.TinyColor(modalMaskBg).setAlpha(0.1);
    var operationBgHover = operationBg.clone().setAlpha(0.2);
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(previewCls, "-footer"), {
      position: 'fixed',
      bottom: marginXL,
      left: {
        _skip_check_: true,
        value: 0
      },
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: token.previewOperationColor
    }), "".concat(previewCls, "-progress"), {
      marginBottom: margin
    }), "".concat(previewCls, "-close"), _defineProperty({
      position: 'fixed',
      top: marginXL,
      right: {
        _skip_check_: true,
        value: marginXL
      },
      display: 'flex',
      color: colorTextLightSolid,
      backgroundColor: operationBg.toRgbString(),
      borderRadius: '50%',
      padding: paddingSM,
      outline: 0,
      border: 0,
      cursor: 'pointer',
      transition: "all ".concat(motionDurationSlow),
      '&:hover': {
        backgroundColor: operationBgHover.toRgbString()
      }
    }, "& > ".concat(iconCls), {
      fontSize: token.previewOperationSize
    })), "".concat(previewCls, "-operations"), {
      display: 'flex',
      alignItems: 'center',
      padding: "0 ".concat((0, _cssinjs.unit)(paddingLG)),
      backgroundColor: operationBg.toRgbString(),
      borderRadius: 100,
      '&-operation': _defineProperty(_defineProperty(_defineProperty(_defineProperty({
        marginInlineStart: paddingSM,
        padding: paddingSM,
        cursor: 'pointer',
        transition: "all ".concat(motionDurationSlow),
        userSelect: 'none'
      }, "&:not(".concat(previewCls, "-operations-operation-disabled):hover > ").concat(iconCls), {
        color: previewOperationHoverColor
      }), '&-disabled', {
        color: previewOperationColorDisabled,
        cursor: 'not-allowed'
      }), '&:first-of-type', {
        marginInlineStart: 0
      }), "& > ".concat(iconCls), {
        fontSize: token.previewOperationSize
      })
    });
  };
  var genPreviewSwitchStyle = _exports.genPreviewSwitchStyle = function genPreviewSwitchStyle(token) {
    var modalMaskBg = token.modalMaskBg,
      iconCls = token.iconCls,
      previewOperationColorDisabled = token.previewOperationColorDisabled,
      previewCls = token.previewCls,
      zIndexPopup = token.zIndexPopup,
      motionDurationSlow = token.motionDurationSlow;
    var operationBg = new _tinycolor.TinyColor(modalMaskBg).setAlpha(0.1);
    var operationBgHover = operationBg.clone().setAlpha(0.2);
    return _defineProperty(_defineProperty(_defineProperty({}, "".concat(previewCls, "-switch-left, ").concat(previewCls, "-switch-right"), _defineProperty(_defineProperty({
      position: 'fixed',
      insetBlockStart: '50%',
      zIndex: token.calc(zIndexPopup).add(1).equal({
        unit: false
      }),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: token.imagePreviewSwitchSize,
      height: token.imagePreviewSwitchSize,
      marginTop: token.calc(token.imagePreviewSwitchSize).mul(-1).div(2).equal(),
      color: token.previewOperationColor,
      background: operationBg.toRgbString(),
      borderRadius: '50%',
      transform: "translateY(-50%)",
      cursor: 'pointer',
      transition: "all ".concat(motionDurationSlow),
      userSelect: 'none',
      '&:hover': {
        background: operationBgHover.toRgbString()
      }
    }, "&-disabled", {
      '&, &:hover': _defineProperty({
        color: previewOperationColorDisabled,
        background: 'transparent',
        cursor: 'not-allowed'
      }, "> ".concat(iconCls), {
        cursor: 'not-allowed'
      })
    }), "> ".concat(iconCls), {
      fontSize: token.previewOperationSize
    })), "".concat(previewCls, "-switch-left"), {
      insetInlineStart: token.marginSM
    }), "".concat(previewCls, "-switch-right"), {
      insetInlineEnd: token.marginSM
    });
  };
  var genImagePreviewStyle = _exports.genImagePreviewStyle = function genImagePreviewStyle(token) {
    var motionEaseOut = token.motionEaseOut,
      previewCls = token.previewCls,
      motionDurationSlow = token.motionDurationSlow,
      componentCls = token.componentCls;
    return [_defineProperty({}, "".concat(componentCls, "-preview-root"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, previewCls, {
      height: '100%',
      textAlign: 'center',
      pointerEvents: 'none'
    }), "".concat(previewCls, "-body"), Object.assign(Object.assign({}, genBoxStyle()), {
      overflow: 'hidden'
    })), "".concat(previewCls, "-img"), {
      maxWidth: '100%',
      maxHeight: '70%',
      verticalAlign: 'middle',
      transform: 'scale3d(1, 1, 1)',
      cursor: 'grab',
      transition: "transform ".concat(motionDurationSlow, " ").concat(motionEaseOut, " 0s"),
      userSelect: 'none',
      '&-wrapper': Object.assign(Object.assign({}, genBoxStyle()), {
        transition: "transform ".concat(motionDurationSlow, " ").concat(motionEaseOut, " 0s"),
        // https://github.com/ant-design/ant-design/issues/39913
        // TailwindCSS will reset img default style.
        // Let's set back.
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& > *': {
          pointerEvents: 'auto'
        },
        '&::before': {
          display: 'inline-block',
          width: 1,
          height: '50%',
          marginInlineEnd: -1,
          content: '""'
        }
      })
    }), "".concat(previewCls, "-moving"), _defineProperty({}, "".concat(previewCls, "-preview-img"), {
      cursor: 'grabbing',
      '&-wrapper': {
        transitionDuration: '0s'
      }
    }))), // Override
    _defineProperty({}, "".concat(componentCls, "-preview-root"), _defineProperty({}, "".concat(previewCls, "-wrap"), {
      zIndex: token.zIndexPopup
    })), // Preview operations & switch
    _defineProperty(_defineProperty({}, "".concat(componentCls, "-preview-operations-wrapper"), {
      position: 'fixed',
      zIndex: token.calc(token.zIndexPopup).add(1).equal({
        unit: false
      })
    }), '&', [genPreviewOperationsStyle(token), genPreviewSwitchStyle(token)])];
  };
  var genImageStyle = function genImageStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, componentCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      display: 'inline-block'
    }, "".concat(componentCls, "-img"), {
      width: '100%',
      height: 'auto',
      verticalAlign: 'middle'
    }), "".concat(componentCls, "-img-placeholder"), {
      backgroundColor: token.colorBgContainerDisabled,
      backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: '30%'
    }), "".concat(componentCls, "-mask"), Object.assign({}, genImageMaskStyle(token))), "".concat(componentCls, "-mask:hover"), {
      opacity: 1
    }), "".concat(componentCls, "-placeholder"), Object.assign({}, genBoxStyle())));
  };
  var genPreviewMotion = function genPreviewMotion(token) {
    var previewCls = token.previewCls;
    return _defineProperty(_defineProperty({}, "".concat(previewCls, "-root"), (0, _index3.initZoomMotion)(token, 'zoom')), "&", (0, _index3.initFadeMotion)(token, true));
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      zIndexPopup: token.zIndexPopupBase + 80,
      previewOperationColor: new _tinycolor.TinyColor(token.colorTextLightSolid).setAlpha(0.65).toRgbString(),
      previewOperationHoverColor: new _tinycolor.TinyColor(token.colorTextLightSolid).setAlpha(0.85).toRgbString(),
      previewOperationColorDisabled: new _tinycolor.TinyColor(token.colorTextLightSolid).setAlpha(0.25).toRgbString(),
      previewOperationSize: token.fontSizeIcon * 1.5 // FIXME: fontSizeIconLG
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Image', function (token) {
    var previewCls = "".concat(token.componentCls, "-preview");
    var imageToken = (0, _internal.mergeToken)(token, {
      previewCls: previewCls,
      modalMaskBg: new _tinycolor.TinyColor('#000').setAlpha(0.45).toRgbString(),
      // FIXME: Shared Token
      imagePreviewSwitchSize: token.controlHeightLG
    });
    return [genImageStyle(imageToken), genImagePreviewStyle(imageToken), (0, _index.genModalMaskStyle)((0, _internal.mergeToken)(imageToken, {
      componentCls: previewCls
    })), genPreviewMotion(imageToken)];
  }, prepareComponentToken);
});