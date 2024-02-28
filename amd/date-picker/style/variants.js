define(["exports", "@ant-design/cssinjs", "antd4mx/input/style/variants"], function (_exports, _cssinjs, _variants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genVariantsStyle = function genVariantsStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, componentCls, [Object.assign(Object.assign(Object.assign({}, (0, _variants.genOutlinedStyle)(token)), (0, _variants.genFilledStyle)(token)), (0, _variants.genBorderlessStyle)(token)),
    // ========================= Multiple =========================
    {
      '&-outlined': _defineProperty({}, "&".concat(componentCls, "-multiple ").concat(componentCls, "-selection-item"), {
        background: token.multipleItemBg,
        border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.multipleItemBorderColor)
      }),
      '&-filled': _defineProperty({}, "&".concat(componentCls, "-multiple ").concat(componentCls, "-selection-item"), {
        background: token.colorBgContainer,
        border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorSplit)
      }),
      '&-borderless': _defineProperty({}, "&".concat(componentCls, "-multiple ").concat(componentCls, "-selection-item"), {
        background: token.multipleItemBg,
        border: "".concat((0, _cssinjs.unit)(token.lineWidth), " ").concat(token.lineType, " ").concat(token.multipleItemBorderColor)
      })
    }]);
  };
  var _default = _exports["default"] = genVariantsStyle;
});