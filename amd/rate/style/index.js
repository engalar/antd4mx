define(["exports", "antd4mx/style", "antd4mx/theme/internal", "@ant-design/cssinjs"], function (_exports, _style, _internal, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genRateStarStyle = function genRateStarStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, "".concat(componentCls, "-star"), _defineProperty(_defineProperty({
      position: 'relative',
      display: 'inline-block',
      color: 'inherit',
      cursor: 'pointer',
      '&:not(:last-child)': {
        marginInlineEnd: token.marginXS
      },
      '> div': {
        transition: "all ".concat(token.motionDurationMid, ", outline 0s"),
        '&:hover': {
          transform: token.starHoverScale
        },
        '&:focus': {
          outline: 0
        },
        '&:focus-visible': {
          outline: "".concat((0, _cssinjs.unit)(token.lineWidth), " dashed ").concat(token.starColor),
          transform: token.starHoverScale
        }
      },
      '&-first, &-second': {
        color: token.starBg,
        transition: "all ".concat(token.motionDurationMid),
        userSelect: 'none'
      },
      '&-first': {
        position: 'absolute',
        top: 0,
        insetInlineStart: 0,
        width: '50%',
        height: '100%',
        overflow: 'hidden',
        opacity: 0
      }
    }, "&-half ".concat(componentCls, "-star-first, &-half ").concat(componentCls, "-star-second"), {
      opacity: 1
    }), "&-half ".concat(componentCls, "-star-first, &-full ").concat(componentCls, "-star-second"), {
      color: 'inherit'
    }));
  };
  var genRateRtlStyle = function genRateRtlStyle(token) {
    return _defineProperty({}, "&-rtl".concat(token.componentCls), {
      direction: 'rtl'
    });
  };
  var genRateStyle = function genRateStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, componentCls, Object.assign(Object.assign(Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), _defineProperty({
      display: 'inline-block',
      margin: 0,
      padding: 0,
      color: token.starColor,
      fontSize: token.starSize,
      lineHeight: 1,
      listStyle: 'none',
      outline: 'none'
    }, "&-disabled".concat(componentCls, " ").concat(componentCls, "-star"), {
      cursor: 'default',
      '> div:hover': {
        transform: 'scale(1)'
      }
    })), genRateStarStyle(token)), genRateRtlStyle(token)));
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken(token) {
    return {
      starColor: token.yellow6,
      starSize: token.controlHeightLG * 0.5,
      starHoverScale: 'scale(1.1)',
      starBg: token.colorFillContent
    };
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Rate', function (token) {
    var rateToken = (0, _internal.mergeToken)(token, {});
    return [genRateStyle(rateToken)];
  }, prepareComponentToken);
});