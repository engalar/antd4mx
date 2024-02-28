define(["exports", "@ant-design/cssinjs", "antd4mx/theme/internal"], function (_exports, _cssinjs, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var skeletonClsLoading = new _cssinjs.Keyframes("ant-skeleton-loading", {
    '0%': {
      backgroundPosition: '100% 50%'
    },
    '100%': {
      backgroundPosition: '0 50%'
    }
  });
  var genSkeletonElementCommonSize = function genSkeletonElementCommonSize(size) {
    return {
      height: size,
      lineHeight: (0, _cssinjs.unit)(size)
    };
  };
  var genSkeletonElementAvatarSize = function genSkeletonElementAvatarSize(size) {
    return Object.assign({
      width: size
    }, genSkeletonElementCommonSize(size));
  };
  var genSkeletonColor = function genSkeletonColor(token) {
    return {
      background: token.skeletonLoadingBackground,
      backgroundSize: '400% 100%',
      animationName: skeletonClsLoading,
      animationDuration: token.skeletonLoadingMotionDuration,
      animationTimingFunction: 'ease',
      animationIterationCount: 'infinite'
    };
  };
  var genSkeletonElementInputSize = function genSkeletonElementInputSize(size, calc) {
    return Object.assign({
      width: calc(size).mul(5).equal(),
      minWidth: calc(size).mul(5).equal()
    }, genSkeletonElementCommonSize(size));
  };
  var genSkeletonElementAvatar = function genSkeletonElementAvatar(token) {
    var skeletonAvatarCls = token.skeletonAvatarCls,
      gradientFromColor = token.gradientFromColor,
      controlHeight = token.controlHeight,
      controlHeightLG = token.controlHeightLG,
      controlHeightSM = token.controlHeightSM;
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(skeletonAvatarCls), Object.assign({
      display: 'inline-block',
      verticalAlign: 'top',
      background: gradientFromColor
    }, genSkeletonElementAvatarSize(controlHeight))), "".concat(skeletonAvatarCls).concat(skeletonAvatarCls, "-circle"), {
      borderRadius: '50%'
    }), "".concat(skeletonAvatarCls).concat(skeletonAvatarCls, "-lg"), Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG))), "".concat(skeletonAvatarCls).concat(skeletonAvatarCls, "-sm"), Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM)));
  };
  var genSkeletonElementInput = function genSkeletonElementInput(token) {
    var controlHeight = token.controlHeight,
      borderRadiusSM = token.borderRadiusSM,
      skeletonInputCls = token.skeletonInputCls,
      controlHeightLG = token.controlHeightLG,
      controlHeightSM = token.controlHeightSM,
      gradientFromColor = token.gradientFromColor,
      calc = token.calc;
    return _defineProperty(_defineProperty(_defineProperty({}, "".concat(skeletonInputCls), Object.assign({
      display: 'inline-block',
      verticalAlign: 'top',
      background: gradientFromColor,
      borderRadius: borderRadiusSM
    }, genSkeletonElementInputSize(controlHeight, calc))), "".concat(skeletonInputCls, "-lg"), Object.assign({}, genSkeletonElementInputSize(controlHeightLG, calc))), "".concat(skeletonInputCls, "-sm"), Object.assign({}, genSkeletonElementInputSize(controlHeightSM, calc)));
  };
  var genSkeletonElementImageSize = function genSkeletonElementImageSize(size) {
    return Object.assign({
      width: size
    }, genSkeletonElementCommonSize(size));
  };
  var genSkeletonElementImage = function genSkeletonElementImage(token) {
    var skeletonImageCls = token.skeletonImageCls,
      imageSizeBase = token.imageSizeBase,
      gradientFromColor = token.gradientFromColor,
      borderRadiusSM = token.borderRadiusSM,
      calc = token.calc;
    return _defineProperty(_defineProperty({}, "".concat(skeletonImageCls), Object.assign(Object.assign({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'top',
      background: gradientFromColor,
      borderRadius: borderRadiusSM
    }, genSkeletonElementImageSize(calc(imageSizeBase).mul(2).equal())), _defineProperty(_defineProperty(_defineProperty({}, "".concat(skeletonImageCls, "-path"), {
      fill: '#bfbfbf'
    }), "".concat(skeletonImageCls, "-svg"), Object.assign(Object.assign({}, genSkeletonElementImageSize(imageSizeBase)), {
      maxWidth: calc(imageSizeBase).mul(4).equal(),
      maxHeight: calc(imageSizeBase).mul(4).equal()
    })), "".concat(skeletonImageCls, "-svg").concat(skeletonImageCls, "-svg-circle"), {
      borderRadius: '50%'
    }))), "".concat(skeletonImageCls).concat(skeletonImageCls, "-circle"), {
      borderRadius: '50%'
    });
  };
  var genSkeletonElementButtonShape = function genSkeletonElementButtonShape(token, size, buttonCls) {
    var skeletonButtonCls = token.skeletonButtonCls;
    return _defineProperty(_defineProperty({}, "".concat(buttonCls).concat(skeletonButtonCls, "-circle"), {
      width: size,
      minWidth: size,
      borderRadius: '50%'
    }), "".concat(buttonCls).concat(skeletonButtonCls, "-round"), {
      borderRadius: size
    });
  };
  var genSkeletonElementButtonSize = function genSkeletonElementButtonSize(size, calc) {
    return Object.assign({
      width: calc(size).mul(2).equal(),
      minWidth: calc(size).mul(2).equal()
    }, genSkeletonElementCommonSize(size));
  };
  var genSkeletonElementButton = function genSkeletonElementButton(token) {
    var borderRadiusSM = token.borderRadiusSM,
      skeletonButtonCls = token.skeletonButtonCls,
      controlHeight = token.controlHeight,
      controlHeightLG = token.controlHeightLG,
      controlHeightSM = token.controlHeightSM,
      gradientFromColor = token.gradientFromColor,
      calc = token.calc;
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(_defineProperty({}, "".concat(skeletonButtonCls), Object.assign({
      display: 'inline-block',
      verticalAlign: 'top',
      background: gradientFromColor,
      borderRadius: borderRadiusSM,
      width: calc(controlHeight).mul(2).equal(),
      minWidth: calc(controlHeight).mul(2).equal()
    }, genSkeletonElementButtonSize(controlHeight, calc))), genSkeletonElementButtonShape(token, controlHeight, skeletonButtonCls)), _defineProperty({}, "".concat(skeletonButtonCls, "-lg"), Object.assign({}, genSkeletonElementButtonSize(controlHeightLG, calc)))), genSkeletonElementButtonShape(token, controlHeightLG, "".concat(skeletonButtonCls, "-lg"))), _defineProperty({}, "".concat(skeletonButtonCls, "-sm"), Object.assign({}, genSkeletonElementButtonSize(controlHeightSM, calc)))), genSkeletonElementButtonShape(token, controlHeightSM, "".concat(skeletonButtonCls, "-sm")));
  };
  // =============================== Base ===============================
  var genBaseStyle = function genBaseStyle(token) {
    var componentCls = token.componentCls,
      skeletonAvatarCls = token.skeletonAvatarCls,
      skeletonTitleCls = token.skeletonTitleCls,
      skeletonParagraphCls = token.skeletonParagraphCls,
      skeletonButtonCls = token.skeletonButtonCls,
      skeletonInputCls = token.skeletonInputCls,
      skeletonImageCls = token.skeletonImageCls,
      controlHeight = token.controlHeight,
      controlHeightLG = token.controlHeightLG,
      controlHeightSM = token.controlHeightSM,
      gradientFromColor = token.gradientFromColor,
      padding = token.padding,
      marginSM = token.marginSM,
      borderRadius = token.borderRadius,
      titleHeight = token.titleHeight,
      blockRadius = token.blockRadius,
      paragraphLiHeight = token.paragraphLiHeight,
      controlHeightXS = token.controlHeightXS,
      paragraphMarginTop = token.paragraphMarginTop;
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls), _defineProperty(_defineProperty(_defineProperty({
      display: 'table',
      width: '100%'
    }, "".concat(componentCls, "-header"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      display: 'table-cell',
      paddingInlineEnd: padding,
      verticalAlign: 'top'
    }, "".concat(skeletonAvatarCls), Object.assign({
      display: 'inline-block',
      verticalAlign: 'top',
      background: gradientFromColor
    }, genSkeletonElementAvatarSize(controlHeight))), "".concat(skeletonAvatarCls, "-circle"), {
      borderRadius: '50%'
    }), "".concat(skeletonAvatarCls, "-lg"), Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG))), "".concat(skeletonAvatarCls, "-sm"), Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM)))), "".concat(componentCls, "-content"), _defineProperty(_defineProperty(_defineProperty({
      display: 'table-cell',
      width: '100%',
      verticalAlign: 'top'
    }, "".concat(skeletonTitleCls), _defineProperty({
      width: '100%',
      height: titleHeight,
      background: gradientFromColor,
      borderRadius: blockRadius
    }, "+ ".concat(skeletonParagraphCls), {
      marginBlockStart: controlHeightSM
    })), "".concat(skeletonParagraphCls), {
      padding: 0,
      '> li': {
        width: '100%',
        height: paragraphLiHeight,
        listStyle: 'none',
        background: gradientFromColor,
        borderRadius: blockRadius,
        '+ li': {
          marginBlockStart: controlHeightXS
        }
      }
    }), "".concat(skeletonParagraphCls, "> li:last-child:not(:first-child):not(:nth-child(2))"), {
      width: '61%'
    })), "&-round ".concat(componentCls, "-content"), _defineProperty({}, "".concat(skeletonTitleCls, ", ").concat(skeletonParagraphCls, " > li"), {
      borderRadius: borderRadius
    }))), "".concat(componentCls, "-with-avatar ").concat(componentCls, "-content"), _defineProperty({}, "".concat(skeletonTitleCls), _defineProperty({
      marginBlockStart: marginSM
    }, "+ ".concat(skeletonParagraphCls), {
      marginBlockStart: paragraphMarginTop
    }))), "".concat(componentCls).concat(componentCls, "-element"), Object.assign(Object.assign(Object.assign(Object.assign({
      display: 'inline-block',
      width: 'auto'
    }, genSkeletonElementButton(token)), genSkeletonElementAvatar(token)), genSkeletonElementInput(token)), genSkeletonElementImage(token))), "".concat(componentCls).concat(componentCls, "-block"), _defineProperty(_defineProperty({
      width: '100%'
    }, "".concat(skeletonButtonCls), {
      width: '100%'
    }), "".concat(skeletonInputCls), {
      width: '100%'
    })), "".concat(componentCls).concat(componentCls, "-active"), _defineProperty({}, "\n        ".concat(skeletonTitleCls, ",\n        ").concat(skeletonParagraphCls, " > li,\n        ").concat(skeletonAvatarCls, ",\n        ").concat(skeletonButtonCls, ",\n        ").concat(skeletonInputCls, ",\n        ").concat(skeletonImageCls, "\n      "), Object.assign({}, genSkeletonColor(token))));
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var colorFillContent = token.colorFillContent,
      colorFill = token.colorFill;
    var gradientFromColor = colorFillContent;
    var gradientToColor = colorFill;
    return {
      color: gradientFromColor,
      colorGradientEnd: gradientToColor,
      gradientFromColor: gradientFromColor,
      gradientToColor: gradientToColor,
      titleHeight: token.controlHeight / 2,
      blockRadius: token.borderRadiusSM,
      paragraphMarginTop: token.marginLG + token.marginXXS,
      paragraphLiHeight: token.controlHeight / 2
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Skeleton', function (token) {
    var componentCls = token.componentCls,
      calc = token.calc;
    var skeletonToken = (0, _internal.mergeToken)(token, {
      skeletonAvatarCls: "".concat(componentCls, "-avatar"),
      skeletonTitleCls: "".concat(componentCls, "-title"),
      skeletonParagraphCls: "".concat(componentCls, "-paragraph"),
      skeletonButtonCls: "".concat(componentCls, "-button"),
      skeletonInputCls: "".concat(componentCls, "-input"),
      skeletonImageCls: "".concat(componentCls, "-image"),
      imageSizeBase: calc(token.controlHeight).mul(1.5).equal(),
      borderRadius: 100,
      // Large number to make capsule shape
      skeletonLoadingBackground: "linear-gradient(90deg, ".concat(token.gradientFromColor, " 25%, ").concat(token.gradientToColor, " 37%, ").concat(token.gradientFromColor, " 63%)"),
      skeletonLoadingMotionDuration: '1.4s'
    });
    return [genBaseStyle(skeletonToken)];
  }, prepareComponentToken, {
    deprecatedTokens: [['color', 'gradientFromColor'], ['colorGradientEnd', 'gradientToColor']]
  });
});