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
  var getHorizontalStyle = function getHorizontalStyle(token) {
    var componentCls = token.componentCls,
      motionDurationSlow = token.motionDurationSlow,
      horizontalLineHeight = token.horizontalLineHeight,
      colorSplit = token.colorSplit,
      lineWidth = token.lineWidth,
      lineType = token.lineType,
      itemPaddingInline = token.itemPaddingInline;
    return _defineProperty({}, "".concat(componentCls, "-horizontal"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      lineHeight: horizontalLineHeight,
      border: 0,
      borderBottom: "".concat((0, _cssinjs.unit)(lineWidth), " ").concat(lineType, " ").concat(colorSplit),
      boxShadow: 'none',
      '&::after': {
        display: 'block',
        clear: 'both',
        height: 0,
        content: '"\\20"'
      }
    }, "".concat(componentCls, "-item, ").concat(componentCls, "-submenu"), {
      position: 'relative',
      display: 'inline-block',
      verticalAlign: 'bottom',
      paddingInline: itemPaddingInline
    }), "> ".concat(componentCls, "-item:hover,\n        > ").concat(componentCls, "-item-active,\n        > ").concat(componentCls, "-submenu ").concat(componentCls, "-submenu-title:hover"), {
      backgroundColor: 'transparent'
    }), "".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title"), {
      transition: ["border-color ".concat(motionDurationSlow), "background ".concat(motionDurationSlow)].join(',')
    }), "".concat(componentCls, "-submenu-arrow"), {
      display: 'none'
    }));
  };
  var _default = _exports["default"] = getHorizontalStyle;
});