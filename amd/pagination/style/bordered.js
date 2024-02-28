define(["exports", "antd4mx/theme/util/genComponentStyleHook", "antd4mx/pagination/style", "@ant-design/cssinjs"], function (_exports, _genComponentStyleHook, _style, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genBorderedStyle = function genBorderedStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty(_defineProperty({}, "".concat(componentCls).concat(componentCls, "-bordered").concat(componentCls, "-disabled:not(").concat(componentCls, "-mini)"), _defineProperty(_defineProperty({
      '&, &:hover': _defineProperty({}, "".concat(componentCls, "-item-link"), {
        borderColor: token.colorBorder
      }),
      '&:focus-visible': _defineProperty({}, "".concat(componentCls, "-item-link"), {
        borderColor: token.colorBorder
      })
    }, "".concat(componentCls, "-item, ").concat(componentCls, "-item-link"), _defineProperty(_defineProperty({
      backgroundColor: token.colorBgContainerDisabled,
      borderColor: token.colorBorder
    }, "&:hover:not(".concat(componentCls, "-item-active)"), {
      backgroundColor: token.colorBgContainerDisabled,
      borderColor: token.colorBorder,
      a: {
        color: token.colorTextDisabled
      }
    }), "&".concat(componentCls, "-item-active"), {
      backgroundColor: token.itemActiveBgDisabled
    })), "".concat(componentCls, "-prev, ").concat(componentCls, "-next"), _defineProperty({
      '&:hover button': {
        backgroundColor: token.colorBgContainerDisabled,
        borderColor: token.colorBorder,
        color: token.colorTextDisabled
      }
    }, "".concat(componentCls, "-item-link"), {
      backgroundColor: token.colorBgContainerDisabled,
      borderColor: token.colorBorder
    }))), "".concat(componentCls).concat(componentCls, "-bordered:not(").concat(componentCls, "-mini)"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-prev, ").concat(componentCls, "-next"), _defineProperty(_defineProperty(_defineProperty({
      '&:hover button': {
        borderColor: token.colorPrimaryHover,
        backgroundColor: token.itemBg
      }
    }, "".concat(componentCls, "-item-link"), {
      backgroundColor: token.itemLinkBg,
      borderColor: token.colorBorder
    }), "&:hover ".concat(componentCls, "-item-link"), {
      borderColor: token.colorPrimary,
      backgroundColor: token.itemBg,
      color: token.colorPrimary
    }), "&".concat(componentCls, "-disabled"), _defineProperty({}, "".concat(componentCls, "-item-link"), {
      borderColor: token.colorBorder,
      color: token.colorTextDisabled
    }))), "".concat(componentCls, "-item"), _defineProperty(_defineProperty({
      backgroundColor: token.itemBg,
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder)
    }, "&:hover:not(".concat(componentCls, "-item-active)"), {
      borderColor: token.colorPrimary,
      backgroundColor: token.itemBg,
      a: {
        color: token.colorPrimary
      }
    }), '&-active', {
      borderColor: token.colorPrimary
    })));
  };
  var _default = _exports["default"] = (0, _genComponentStyleHook.genSubStyleComponent)(['Pagination', 'bordered'], function (token) {
    var paginationToken = (0, _style.prepareToken)(token);
    return [genBorderedStyle(paginationToken)];
  }, _style.prepareComponentToken);
});