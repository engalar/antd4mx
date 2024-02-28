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
  var genDraggerStyle = function genDraggerStyle(token) {
    var componentCls = token.componentCls,
      iconCls = token.iconCls;
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), _defineProperty({}, "".concat(componentCls, "-drag"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      position: 'relative',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      background: token.colorFillAlter,
      border: "".concat((0, _cssinjs.unit)(token.lineWidth), " dashed ").concat(token.colorBorder),
      borderRadius: token.borderRadiusLG,
      cursor: 'pointer',
      transition: "border-color ".concat(token.motionDurationSlow)
    }, componentCls, {
      padding: token.padding
    }), "".concat(componentCls, "-btn"), {
      display: 'table',
      width: '100%',
      height: '100%',
      outline: 'none',
      borderRadius: token.borderRadiusLG,
      '&:focus-visible': {
        outline: "".concat((0, _cssinjs.unit)(token.lineWidthFocus), " solid ").concat(token.colorPrimaryBorder)
      }
    }), "".concat(componentCls, "-drag-container"), {
      display: 'table-cell',
      verticalAlign: 'middle'
    }), "\n          &:not(".concat(componentCls, "-disabled):hover,\n          &-hover:not(").concat(componentCls, "-disabled)\n        "), {
      borderColor: token.colorPrimaryHover
    }), "p".concat(componentCls, "-drag-icon"), _defineProperty({
      marginBottom: token.margin
    }, iconCls, {
      color: token.colorPrimary,
      fontSize: token.uploadThumbnailSize
    })), "p".concat(componentCls, "-text"), {
      margin: "0 0 ".concat((0, _cssinjs.unit)(token.marginXXS)),
      color: token.colorTextHeading,
      fontSize: token.fontSizeLG
    }), "p".concat(componentCls, "-hint"), {
      color: token.colorTextDescription,
      fontSize: token.fontSize
    }), "&".concat(componentCls, "-disabled"), _defineProperty({}, "p".concat(componentCls, "-drag-icon ").concat(iconCls, ",\n            p").concat(componentCls, "-text,\n            p").concat(componentCls, "-hint\n          "), {
      color: token.colorTextDisabled
    }))));
  };
  var _default = _exports["default"] = genDraggerStyle;
});