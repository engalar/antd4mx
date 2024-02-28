define(["exports", "antd4mx/tag/style/index", "antd4mx/theme/internal"], function (_exports, _index, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // Style as status component
  // ============================== Preset ==============================
  var genPresetStyle = function genPresetStyle(token) {
    return (0, _internal.genPresetColor)(token, function (colorKey, _ref) {
      var textColor = _ref.textColor,
        lightBorderColor = _ref.lightBorderColor,
        lightColor = _ref.lightColor,
        darkColor = _ref.darkColor;
      return _defineProperty({}, "".concat(token.componentCls).concat(token.componentCls, "-").concat(colorKey), _defineProperty({
        color: textColor,
        background: lightColor,
        borderColor: lightBorderColor,
        // Inverse color
        '&-inverse': {
          color: token.colorTextLightSolid,
          background: darkColor,
          borderColor: darkColor
        }
      }, "&".concat(token.componentCls, "-borderless"), {
        borderColor: 'transparent'
      }));
    });
  };
  // ============================== Export ==============================
  var _default = _exports["default"] = (0, _internal.genSubStyleComponent)(['Tag', 'preset'], function (token) {
    var tagToken = (0, _index.prepareToken)(token);
    return genPresetStyle(tagToken);
  }, _index.prepareComponentToken);
});