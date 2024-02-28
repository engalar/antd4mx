define(["exports", "@ant-design/cssinjs"], function (_exports, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genSelectionStyle = function genSelectionStyle(token) {
    var componentCls = token.componentCls,
      antCls = token.antCls,
      iconCls = token.iconCls,
      fontSizeIcon = token.fontSizeIcon,
      padding = token.padding,
      paddingXS = token.paddingXS,
      headerIconColor = token.headerIconColor,
      headerIconHoverColor = token.headerIconHoverColor,
      tableSelectionColumnWidth = token.tableSelectionColumnWidth,
      tableSelectedRowBg = token.tableSelectedRowBg,
      tableSelectedRowHoverBg = token.tableSelectedRowHoverBg,
      tableRowHoverBg = token.tableRowHoverBg,
      tablePaddingHorizontal = token.tablePaddingHorizontal,
      calc = token.calc;
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-selection-col"), _defineProperty({
      width: tableSelectionColumnWidth
    }, "&".concat(componentCls, "-selection-col-with-dropdown"), {
      width: calc(tableSelectionColumnWidth).add(fontSizeIcon).add(calc(padding).div(4)).equal()
    })), "".concat(componentCls, "-bordered ").concat(componentCls, "-selection-col"), _defineProperty({
      width: calc(tableSelectionColumnWidth).add(calc(paddingXS).mul(2)).equal()
    }, "&".concat(componentCls, "-selection-col-with-dropdown"), {
      width: calc(tableSelectionColumnWidth).add(fontSizeIcon).add(calc(padding).div(4)).add(calc(paddingXS).mul(2)).equal()
    })), "\n        table tr th".concat(componentCls, "-selection-column,\n        table tr td").concat(componentCls, "-selection-column,\n        ").concat(componentCls, "-selection-column\n      "), _defineProperty({
      paddingInlineEnd: token.paddingXS,
      paddingInlineStart: token.paddingXS,
      textAlign: 'center'
    }, "".concat(antCls, "-radio-wrapper"), {
      marginInlineEnd: 0
    })), "table tr th".concat(componentCls, "-selection-column").concat(componentCls, "-cell-fix-left"), {
      zIndex: token.zIndexTableFixed + 1
    }), "table tr th".concat(componentCls, "-selection-column::after"), {
      backgroundColor: 'transparent !important'
    }), "".concat(componentCls, "-selection"), {
      position: 'relative',
      display: 'inline-flex',
      flexDirection: 'column'
    }), "".concat(componentCls, "-selection-extra"), _defineProperty({
      position: 'absolute',
      top: 0,
      zIndex: 1,
      cursor: 'pointer',
      transition: "all ".concat(token.motionDurationSlow),
      marginInlineStart: '100%',
      paddingInlineStart: (0, _cssinjs.unit)(calc(tablePaddingHorizontal).div(4).equal())
    }, iconCls, {
      color: headerIconColor,
      fontSize: fontSizeIcon,
      verticalAlign: 'baseline',
      '&:hover': {
        color: headerIconHoverColor
      }
    })), "".concat(componentCls, "-tbody"), _defineProperty({}, "".concat(componentCls, "-row"), _defineProperty(_defineProperty({}, "&".concat(componentCls, "-row-selected"), _defineProperty({}, "> ".concat(componentCls, "-cell"), {
      background: tableSelectedRowBg,
      '&-row-hover': {
        background: tableSelectedRowHoverBg
      }
    })), "> ".concat(componentCls, "-cell-row-hover"), {
      background: tableRowHoverBg
    }))));
  };
  var _default = _exports["default"] = genSelectionStyle;
});