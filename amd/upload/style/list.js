define(["exports", "@ant-design/cssinjs", "antd4mx/style/index"], function (_exports, _cssinjs, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genListStyle = function genListStyle(token) {
    var componentCls = token.componentCls,
      antCls = token.antCls,
      iconCls = token.iconCls,
      fontSize = token.fontSize,
      lineHeight = token.lineHeight,
      calc = token.calc;
    var itemCls = "".concat(componentCls, "-list-item");
    var actionsCls = "".concat(itemCls, "-actions");
    var actionCls = "".concat(itemCls, "-action");
    var listItemHeightSM = token.fontHeightSM;
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), _defineProperty({}, "".concat(componentCls, "-list"), Object.assign(Object.assign({}, (0, _index.clearFix)()), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      lineHeight: token.lineHeight
    }, itemCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      height: calc(token.lineHeight).mul(fontSize).equal(),
      marginTop: token.marginXS,
      fontSize: fontSize,
      display: 'flex',
      alignItems: 'center',
      transition: "background-color ".concat(token.motionDurationSlow),
      '&:hover': {
        backgroundColor: token.controlItemBgHover
      }
    }, "".concat(itemCls, "-name"), Object.assign(Object.assign({}, _index.textEllipsis), {
      padding: "0 ".concat((0, _cssinjs.unit)(token.paddingXS)),
      lineHeight: lineHeight,
      flex: 'auto',
      transition: "all ".concat(token.motionDurationSlow)
    })), actionsCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, actionCls, {
      opacity: 0
    }), iconCls, {
      color: token.actionsColor,
      transition: "all ".concat(token.motionDurationSlow)
    }), "\n              ".concat(actionCls, ":focus-visible,\n              &.picture ").concat(actionCls, "\n            "), {
      opacity: 1
    }), "".concat(actionCls).concat(antCls, "-btn"), {
      height: listItemHeightSM,
      border: 0,
      lineHeight: 1
    })), "".concat(componentCls, "-icon ").concat(iconCls), {
      color: token.colorTextDescription,
      fontSize: fontSize
    }), "".concat(itemCls, "-progress"), {
      position: 'absolute',
      bottom: token.calc(token.uploadProgressOffset).mul(-1).equal(),
      width: '100%',
      paddingInlineStart: calc(fontSize).add(token.paddingXS).equal(),
      fontSize: fontSize,
      lineHeight: 0,
      pointerEvents: 'none',
      '> div': {
        margin: 0
      }
    })), "".concat(itemCls, ":hover ").concat(actionCls), {
      opacity: 1
    }), "".concat(itemCls, "-error"), _defineProperty(_defineProperty({
      color: token.colorError
    }, "".concat(itemCls, "-name, ").concat(componentCls, "-icon ").concat(iconCls), {
      color: token.colorError
    }), actionsCls, _defineProperty(_defineProperty({}, "".concat(iconCls, ", ").concat(iconCls, ":hover"), {
      color: token.colorError
    }), actionCls, {
      opacity: 1
    }))), "".concat(componentCls, "-list-item-container"), {
      transition: "opacity ".concat(token.motionDurationSlow, ", height ").concat(token.motionDurationSlow),
      // For smooth removing animation
      '&::before': {
        display: 'table',
        width: 0,
        height: 0,
        content: '""'
      }
    }))));
  };
  var _default = _exports["default"] = genListStyle;
});