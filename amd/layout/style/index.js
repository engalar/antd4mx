define(["exports", "@ant-design/cssinjs", "antd4mx/theme/internal", "antd4mx/layout/style/light"], function (_exports, _cssinjs, _internal, _light) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genLayoutStyle = function genLayoutStyle(token) {
    var antCls = token.antCls,
      componentCls = token.componentCls,
      colorText = token.colorText,
      triggerColor = token.triggerColor,
      footerBg = token.footerBg,
      triggerBg = token.triggerBg,
      headerHeight = token.headerHeight,
      headerPadding = token.headerPadding,
      headerColor = token.headerColor,
      footerPadding = token.footerPadding,
      triggerHeight = token.triggerHeight,
      zeroTriggerHeight = token.zeroTriggerHeight,
      zeroTriggerWidth = token.zeroTriggerWidth,
      motionDurationMid = token.motionDurationMid,
      motionDurationSlow = token.motionDurationSlow,
      fontSize = token.fontSize,
      borderRadius = token.borderRadius,
      bodyBg = token.bodyBg,
      headerBg = token.headerBg,
      siderBg = token.siderBg;
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, componentCls, Object.assign(Object.assign(_defineProperty(_defineProperty(_defineProperty({
      display: 'flex',
      flex: 'auto',
      flexDirection: 'column',
      /* fix firefox can't set height smaller than content on flex item */
      minHeight: 0,
      background: bodyBg,
      '&, *': {
        boxSizing: 'border-box'
      }
    }, "&".concat(componentCls, "-has-sider"), _defineProperty({
      flexDirection: 'row'
    }, "> ".concat(componentCls, ", > ").concat(componentCls, "-content"), {
      // https://segmentfault.com/a/1190000019498300
      width: 0
    })), "".concat(componentCls, "-header, &").concat(componentCls, "-footer"), {
      flex: '0 0 auto'
    }), "".concat(componentCls, "-sider"), {
      position: 'relative',
      // fix firefox can't set width smaller than content on flex item
      minWidth: 0,
      background: siderBg,
      transition: "all ".concat(motionDurationMid, ", background 0s"),
      '&-children': _defineProperty({
        height: '100%',
        // Hack for fixing margin collapse bug
        // https://github.com/ant-design/ant-design/issues/7967
        // solution from https://stackoverflow.com/a/33132624/3040605
        marginTop: -0.1,
        paddingTop: 0.1
      }, "".concat(antCls, "-menu").concat(antCls, "-menu-inline-collapsed"), {
        width: 'auto'
      }),
      '&-has-trigger': {
        paddingBottom: triggerHeight
      },
      '&-right': {
        order: 1
      },
      '&-trigger': {
        position: 'fixed',
        bottom: 0,
        zIndex: 1,
        height: triggerHeight,
        color: triggerColor,
        lineHeight: (0, _cssinjs.unit)(triggerHeight),
        textAlign: 'center',
        background: triggerBg,
        cursor: 'pointer',
        transition: "all ".concat(motionDurationMid)
      },
      '&-zero-width': {
        '> *': {
          overflow: 'hidden'
        },
        '&-trigger': {
          position: 'absolute',
          top: headerHeight,
          insetInlineEnd: token.calc(zeroTriggerWidth).mul(-1).equal(),
          zIndex: 1,
          width: zeroTriggerWidth,
          height: zeroTriggerHeight,
          color: triggerColor,
          fontSize: token.fontSizeXL,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: siderBg,
          borderStartStartRadius: 0,
          borderStartEndRadius: borderRadius,
          borderEndEndRadius: borderRadius,
          borderEndStartRadius: 0,
          cursor: 'pointer',
          transition: "background ".concat(motionDurationSlow, " ease"),
          '&::after': {
            position: 'absolute',
            inset: 0,
            background: 'transparent',
            transition: "all ".concat(motionDurationSlow),
            content: '""'
          },
          '&:hover::after': {
            background: "rgba(255, 255, 255, 0.2)"
          },
          '&-right': {
            insetInlineStart: token.calc(zeroTriggerWidth).mul(-1).equal(),
            borderStartStartRadius: borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: borderRadius
          }
        }
      }
    }), (0, _light["default"])(token)), {
      // RTL
      '&-rtl': {
        direction: 'rtl'
      }
    })), "".concat(componentCls, "-header"), _defineProperty({
      height: headerHeight,
      padding: headerPadding,
      color: headerColor,
      lineHeight: (0, _cssinjs.unit)(headerHeight),
      background: headerBg
    }, "".concat(antCls, "-menu"), {
      lineHeight: 'inherit'
    })), "".concat(componentCls, "-footer"), {
      padding: footerPadding,
      color: colorText,
      fontSize: fontSize,
      background: footerBg
    }), "".concat(componentCls, "-content"), {
      flex: 'auto',
      color: colorText,
      // fix firefox can't set height smaller than content on flex item
      minHeight: 0
    });
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    var colorBgLayout = token.colorBgLayout,
      controlHeight = token.controlHeight,
      controlHeightLG = token.controlHeightLG,
      colorText = token.colorText,
      controlHeightSM = token.controlHeightSM,
      marginXXS = token.marginXXS,
      colorTextLightSolid = token.colorTextLightSolid,
      colorBgContainer = token.colorBgContainer;
    var paddingInline = controlHeightLG * 1.25;
    return {
      // Deprecated
      colorBgHeader: '#001529',
      colorBgBody: colorBgLayout,
      colorBgTrigger: '#002140',
      bodyBg: colorBgLayout,
      headerBg: '#001529',
      headerHeight: controlHeight * 2,
      headerPadding: "0 ".concat(paddingInline, "px"),
      headerColor: colorText,
      footerPadding: "".concat(controlHeightSM, "px ").concat(paddingInline, "px"),
      footerBg: colorBgLayout,
      siderBg: '#001529',
      triggerHeight: controlHeightLG + marginXXS * 2,
      triggerBg: '#002140',
      triggerColor: colorTextLightSolid,
      zeroTriggerWidth: controlHeightLG,
      zeroTriggerHeight: controlHeightLG,
      lightSiderBg: colorBgContainer,
      lightTriggerBg: colorBgContainer,
      lightTriggerColor: colorText
    };
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Layout', function (token) {
    return [genLayoutStyle(token)];
  }, prepareComponentToken, {
    deprecatedTokens: [['colorBgBody', 'bodyBg'], ['colorBgHeader', 'headerBg'], ['colorBgTrigger', 'triggerBg']]
  });
});