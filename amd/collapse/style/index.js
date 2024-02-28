define(["exports", "@ant-design/cssinjs", "antd4mx/style/index", "antd4mx/style/motion/index", "antd4mx/theme/internal"], function (_exports, _cssinjs, _index, _index2, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports.genBaseStyle = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genBaseStyle = _exports.genBaseStyle = function genBaseStyle(token) {
    var componentCls = token.componentCls,
      contentBg = token.contentBg,
      padding = token.padding,
      headerBg = token.headerBg,
      headerPadding = token.headerPadding,
      collapseHeaderPaddingSM = token.collapseHeaderPaddingSM,
      collapseHeaderPaddingLG = token.collapseHeaderPaddingLG,
      collapsePanelBorderRadius = token.collapsePanelBorderRadius,
      lineWidth = token.lineWidth,
      lineType = token.lineType,
      colorBorder = token.colorBorder,
      colorText = token.colorText,
      colorTextHeading = token.colorTextHeading,
      colorTextDisabled = token.colorTextDisabled,
      fontSizeLG = token.fontSizeLG,
      lineHeight = token.lineHeight,
      lineHeightLG = token.lineHeightLG,
      marginSM = token.marginSM,
      paddingSM = token.paddingSM,
      paddingLG = token.paddingLG,
      paddingXS = token.paddingXS,
      motionDurationSlow = token.motionDurationSlow,
      fontSizeIcon = token.fontSizeIcon,
      contentPadding = token.contentPadding,
      fontHeight = token.fontHeight,
      fontHeightLG = token.fontHeightLG;
    var borderBase = "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorBorder);
    return _defineProperty({}, componentCls, Object.assign(Object.assign({}, (0, _index.resetComponent)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      backgroundColor: headerBg,
      border: borderBase,
      borderBottom: 0,
      borderRadius: collapsePanelBorderRadius
    }, "&-rtl", {
      direction: 'rtl'
    }), "& > ".concat(componentCls, "-item"), _defineProperty(_defineProperty(_defineProperty({
      borderBottom: borderBase
    }, "&:last-child", _defineProperty({}, "\n            &,\n            & > ".concat(componentCls, "-header"), {
      borderRadius: "0 0 ".concat((0, _cssinjs.unit)(collapsePanelBorderRadius), " ").concat((0, _cssinjs.unit)(collapsePanelBorderRadius))
    })), "> ".concat(componentCls, "-header"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      // Compatible with old version of antd, should remove in next version
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'flex-start',
      padding: headerPadding,
      color: colorTextHeading,
      lineHeight: lineHeight,
      cursor: 'pointer',
      transition: "all ".concat(motionDurationSlow, ", visibility 0s")
    }, "> ".concat(componentCls, "-header-text"), {
      flex: 'auto'
    }), '&:focus', {
      outline: 'none'
    }), "".concat(componentCls, "-expand-icon"), {
      height: fontHeight,
      display: 'flex',
      alignItems: 'center',
      paddingInlineEnd: marginSM
    }), "".concat(componentCls, "-arrow"), Object.assign(Object.assign({}, (0, _index.resetIcon)()), {
      fontSize: fontSizeIcon,
      svg: {
        transition: "transform ".concat(motionDurationSlow)
      }
    })), "".concat(componentCls, "-header-text"), {
      marginInlineEnd: 'auto'
    })), "".concat(componentCls, "-icon-collapsible-only"), _defineProperty({
      cursor: 'unset'
    }, "".concat(componentCls, "-expand-icon"), {
      cursor: 'pointer'
    }))), "".concat(componentCls, "-content"), _defineProperty(_defineProperty({
      color: colorText,
      backgroundColor: contentBg,
      borderTop: borderBase
    }, "& > ".concat(componentCls, "-content-box"), {
      padding: contentPadding
    }), "&-hidden", {
      display: 'none'
    })), "&-small", _defineProperty({}, "> ".concat(componentCls, "-item"), _defineProperty(_defineProperty({}, "> ".concat(componentCls, "-header"), _defineProperty({
      padding: collapseHeaderPaddingSM,
      paddingInlineStart: paddingXS
    }, "> ".concat(componentCls, "-expand-icon"), {
      // Arrow offset
      marginInlineStart: token.calc(paddingSM).sub(paddingXS).equal()
    })), "> ".concat(componentCls, "-content > ").concat(componentCls, "-content-box"), {
      padding: paddingSM
    }))), "&-large", _defineProperty({}, "> ".concat(componentCls, "-item"), _defineProperty(_defineProperty({
      fontSize: fontSizeLG,
      lineHeight: lineHeightLG
    }, "> ".concat(componentCls, "-header"), _defineProperty({
      padding: collapseHeaderPaddingLG,
      paddingInlineStart: padding
    }, "> ".concat(componentCls, "-expand-icon"), {
      height: fontHeightLG,
      // Arrow offset
      marginInlineStart: token.calc(paddingLG).sub(padding).equal()
    })), "> ".concat(componentCls, "-content > ").concat(componentCls, "-content-box"), {
      padding: paddingLG
    }))), "".concat(componentCls, "-item:last-child"), _defineProperty({}, "> ".concat(componentCls, "-content"), {
      borderRadius: "0 0 ".concat((0, _cssinjs.unit)(collapsePanelBorderRadius), " ").concat((0, _cssinjs.unit)(collapsePanelBorderRadius))
    })), "& ".concat(componentCls, "-item-disabled > ").concat(componentCls, "-header"), _defineProperty({}, "\n          &,\n          & > .arrow\n        ", {
      color: colorTextDisabled,
      cursor: 'not-allowed'
    })), "&".concat(componentCls, "-icon-position-end"), _defineProperty({}, "& > ".concat(componentCls, "-item"), _defineProperty({}, "> ".concat(componentCls, "-header"), _defineProperty({}, "".concat(componentCls, "-expand-icon"), {
      order: 1,
      paddingInlineEnd: 0,
      paddingInlineStart: marginSM
    }))))));
  };
  var genArrowStyle = function genArrowStyle(token) {
    var componentCls = token.componentCls;
    var fixedSelector = "> ".concat(componentCls, "-item > ").concat(componentCls, "-header ").concat(componentCls, "-arrow svg");
    return _defineProperty({}, "".concat(componentCls, "-rtl"), _defineProperty({}, fixedSelector, {
      transform: "rotate(180deg)"
    }));
  };
  var genBorderlessStyle = function genBorderlessStyle(token) {
    var componentCls = token.componentCls,
      headerBg = token.headerBg,
      paddingXXS = token.paddingXXS,
      colorBorder = token.colorBorder;
    return _defineProperty({}, "".concat(componentCls, "-borderless"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      backgroundColor: headerBg,
      border: 0
    }, "> ".concat(componentCls, "-item"), {
      borderBottom: "1px solid ".concat(colorBorder)
    }), "\n        > ".concat(componentCls, "-item:last-child,\n        > ").concat(componentCls, "-item:last-child ").concat(componentCls, "-header\n      "), {
      borderRadius: 0
    }), "> ".concat(componentCls, "-item:last-child"), {
      borderBottom: 0
    }), "> ".concat(componentCls, "-item > ").concat(componentCls, "-content"), {
      backgroundColor: 'transparent',
      borderTop: 0
    }), "> ".concat(componentCls, "-item > ").concat(componentCls, "-content > ").concat(componentCls, "-content-box"), {
      paddingTop: paddingXXS
    }));
  };
  var genGhostStyle = function genGhostStyle(token) {
    var componentCls = token.componentCls,
      paddingSM = token.paddingSM;
    return _defineProperty({}, "".concat(componentCls, "-ghost"), _defineProperty({
      backgroundColor: 'transparent',
      border: 0
    }, "> ".concat(componentCls, "-item"), _defineProperty({
      borderBottom: 0
    }, "> ".concat(componentCls, "-content"), _defineProperty({
      backgroundColor: 'transparent',
      border: 0
    }, "> ".concat(componentCls, "-content-box"), {
      paddingBlock: paddingSM
    }))));
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      headerPadding: "".concat(token.paddingSM, "px ").concat(token.padding, "px"),
      headerBg: token.colorFillAlter,
      contentPadding: "".concat(token.padding, "px 16px"),
      // Fixed Value
      contentBg: token.colorBgContainer
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Collapse', function (token) {
    var collapseToken = (0, _internal.mergeToken)(token, {
      collapseHeaderPaddingSM: "".concat((0, _cssinjs.unit)(token.paddingXS), " ").concat((0, _cssinjs.unit)(token.paddingSM)),
      collapseHeaderPaddingLG: "".concat((0, _cssinjs.unit)(token.padding), " ").concat((0, _cssinjs.unit)(token.paddingLG)),
      collapsePanelBorderRadius: token.borderRadiusLG
    });
    return [genBaseStyle(collapseToken), genBorderlessStyle(collapseToken), genGhostStyle(collapseToken), genArrowStyle(collapseToken), (0, _index2.genCollapseMotion)(collapseToken)];
  }, prepareComponentToken);
});