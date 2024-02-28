define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genLayoutLightStyle = function genLayoutLightStyle(token) {
    var componentCls = token.componentCls,
      bodyBg = token.bodyBg,
      lightSiderBg = token.lightSiderBg,
      lightTriggerBg = token.lightTriggerBg,
      lightTriggerColor = token.lightTriggerColor;
    return _defineProperty({}, "".concat(componentCls, "-sider-light"), _defineProperty(_defineProperty({
      background: lightSiderBg
    }, "".concat(componentCls, "-sider-trigger"), {
      color: lightTriggerColor,
      background: lightTriggerBg
    }), "".concat(componentCls, "-sider-zero-width-trigger"), {
      color: lightTriggerColor,
      background: lightTriggerBg,
      border: "1px solid ".concat(bodyBg),
      // Safe to modify to any other color
      borderInlineStart: 0
    }));
  };
  var _default = _exports["default"] = genLayoutLightStyle;
});