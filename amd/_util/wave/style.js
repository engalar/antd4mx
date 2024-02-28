define(["exports", "antd4mx/theme/internal"], function (_exports, _internal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genWaveStyle = function genWaveStyle(token) {
    var componentCls = token.componentCls,
      colorPrimary = token.colorPrimary;
    return _defineProperty({}, componentCls, {
      position: 'absolute',
      background: 'transparent',
      pointerEvents: 'none',
      boxSizing: 'border-box',
      color: "var(--wave-color, ".concat(colorPrimary, ")"),
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      '&.wave-motion-appear': {
        transition: ["box-shadow 0.4s ".concat(token.motionEaseOutCirc), "opacity 2s ".concat(token.motionEaseOutCirc)].join(','),
        '&-active': {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        '&.wave-quick': {
          transition: ["box-shadow 0.3s ".concat(token.motionEaseInOut), "opacity 0.35s ".concat(token.motionEaseInOut)].join(',')
        }
      }
    });
  };
  var _default = _exports["default"] = (0, _internal.genComponentStyleHook)('Wave', function (token) {
    return [genWaveStyle(token)];
  });
});