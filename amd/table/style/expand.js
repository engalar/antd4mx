define(["exports", "@ant-design/cssinjs", "antd4mx/style"], function (_exports, _cssinjs, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genExpandStyle = function genExpandStyle(token) {
    var componentCls = token.componentCls,
      antCls = token.antCls,
      motionDurationSlow = token.motionDurationSlow,
      lineWidth = token.lineWidth,
      paddingXS = token.paddingXS,
      lineType = token.lineType,
      tableBorderColor = token.tableBorderColor,
      tableExpandIconBg = token.tableExpandIconBg,
      tableExpandColumnWidth = token.tableExpandColumnWidth,
      borderRadius = token.borderRadius,
      tablePaddingVertical = token.tablePaddingVertical,
      tablePaddingHorizontal = token.tablePaddingHorizontal,
      tableExpandedRowBg = token.tableExpandedRowBg,
      paddingXXS = token.paddingXXS,
      expandIconMarginTop = token.expandIconMarginTop,
      expandIconSize = token.expandIconSize,
      expandIconHalfInner = token.expandIconHalfInner,
      expandIconScale = token.expandIconScale,
      calc = token.calc;
    var tableBorder = "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(tableBorderColor);
    var expandIconLineOffset = calc(paddingXXS).sub(lineWidth).equal();
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentCls, "-expand-icon-col"), {
      width: tableExpandColumnWidth
    }), "".concat(componentCls, "-row-expand-icon-cell"), _defineProperty({
      textAlign: 'center'
    }, "".concat(componentCls, "-row-expand-icon"), {
      display: 'inline-flex',
      "float": 'none',
      verticalAlign: 'sub'
    })), "".concat(componentCls, "-row-indent"), {
      height: 1,
      "float": 'left'
    }), "".concat(componentCls, "-row-expand-icon"), Object.assign(Object.assign({}, (0, _style.operationUnit)(token)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      "float": 'left',
      boxSizing: 'border-box',
      width: expandIconSize,
      height: expandIconSize,
      padding: 0,
      color: 'inherit',
      lineHeight: (0, _cssinjs.unit)(expandIconSize),
      background: tableExpandIconBg,
      border: tableBorder,
      borderRadius: borderRadius,
      transform: "scale(".concat(expandIconScale, ")"),
      transition: "all ".concat(motionDurationSlow),
      userSelect: 'none'
    }, "&:focus, &:hover, &:active", {
      borderColor: 'currentcolor'
    }), "&::before, &::after", {
      position: 'absolute',
      background: 'currentcolor',
      transition: "transform ".concat(motionDurationSlow, " ease-out"),
      content: '""'
    }), '&::before', {
      top: expandIconHalfInner,
      insetInlineEnd: expandIconLineOffset,
      insetInlineStart: expandIconLineOffset,
      height: lineWidth
    }), '&::after', {
      top: expandIconLineOffset,
      bottom: expandIconLineOffset,
      insetInlineStart: expandIconHalfInner,
      width: lineWidth,
      transform: 'rotate(90deg)'
    }), '&-collapsed::before', {
      transform: 'rotate(-180deg)'
    }), '&-collapsed::after', {
      transform: 'rotate(0deg)'
    }), '&-spaced', {
      '&::before, &::after': {
        display: 'none',
        content: 'none'
      },
      background: 'transparent',
      border: 0,
      visibility: 'hidden'
    }))), "".concat(componentCls, "-row-indent + ").concat(componentCls, "-row-expand-icon"), {
      marginTop: expandIconMarginTop,
      marginInlineEnd: paddingXS
    }), "tr".concat(componentCls, "-expanded-row"), _defineProperty({
      '&, &:hover': _defineProperty({}, "> th, > td", {
        background: tableExpandedRowBg
      })
    }, "".concat(antCls, "-descriptions-view"), {
      display: 'flex',
      table: {
        flex: 'auto',
        width: 'auto'
      }
    })), "".concat(componentCls, "-expanded-row-fixed"), {
      position: 'relative',
      margin: "".concat((0, _cssinjs.unit)(calc(tablePaddingVertical).mul(-1).equal()), " ").concat((0, _cssinjs.unit)(calc(tablePaddingHorizontal).mul(-1).equal())),
      padding: "".concat((0, _cssinjs.unit)(tablePaddingVertical), " ").concat((0, _cssinjs.unit)(tablePaddingHorizontal))
    }));
  };
  var _default = _exports["default"] = genExpandStyle;
});