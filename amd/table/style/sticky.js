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
  var genStickyStyle = function genStickyStyle(token) {
    var componentCls = token.componentCls,
      opacityLoading = token.opacityLoading,
      tableScrollThumbBg = token.tableScrollThumbBg,
      tableScrollThumbBgHover = token.tableScrollThumbBgHover,
      tableScrollThumbSize = token.tableScrollThumbSize,
      tableScrollBg = token.tableScrollBg,
      zIndexTableSticky = token.zIndexTableSticky,
      stickyScrollBarBorderRadius = token.stickyScrollBarBorderRadius,
      lineWidth = token.lineWidth,
      lineType = token.lineType,
      tableBorderColor = token.tableBorderColor;
    var tableBorder = "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(tableBorderColor);
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), _defineProperty({}, "".concat(componentCls, "-sticky"), {
      '&-holder': {
        position: 'sticky',
        zIndex: zIndexTableSticky,
        background: token.colorBgContainer
      },
      '&-scroll': {
        position: 'sticky',
        bottom: 0,
        height: "".concat((0, _cssinjs.unit)(tableScrollThumbSize), " !important"),
        zIndex: zIndexTableSticky,
        display: 'flex',
        alignItems: 'center',
        background: tableScrollBg,
        borderTop: tableBorder,
        opacity: opacityLoading,
        '&:hover': {
          transformOrigin: 'center bottom'
        },
        // fake scrollbar style of sticky
        '&-bar': {
          height: tableScrollThumbSize,
          backgroundColor: tableScrollThumbBg,
          borderRadius: stickyScrollBarBorderRadius,
          transition: "all ".concat(token.motionDurationSlow, ", transform none"),
          position: 'absolute',
          bottom: 0,
          '&:hover, &-active': {
            backgroundColor: tableScrollThumbBgHover
          }
        }
      }
    }));
  };
  var _default = _exports["default"] = genStickyStyle;
});