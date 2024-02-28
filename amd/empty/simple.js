define(["exports", "@ctrl/tinycolor", "react", "antd4mx/theme/internal"], function (_exports, _tinycolor, _react, _internal) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var React = _react;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var Simple = function Simple() {
    var _useToken = (0, _internal.useToken)(),
      _useToken2 = _slicedToArray(_useToken, 2),
      token = _useToken2[1];
    var colorFill = token.colorFill,
      colorFillTertiary = token.colorFillTertiary,
      colorFillQuaternary = token.colorFillQuaternary,
      colorBgContainer = token.colorBgContainer;
    var _useMemo = (0, _react.useMemo)(function () {
        return {
          borderColor: new _tinycolor.TinyColor(colorFill).onBackground(colorBgContainer).toHexShortString(),
          shadowColor: new _tinycolor.TinyColor(colorFillTertiary).onBackground(colorBgContainer).toHexShortString(),
          contentColor: new _tinycolor.TinyColor(colorFillQuaternary).onBackground(colorBgContainer).toHexShortString()
        };
      }, [colorFill, colorFillTertiary, colorFillQuaternary, colorBgContainer]),
      borderColor = _useMemo.borderColor,
      shadowColor = _useMemo.shadowColor,
      contentColor = _useMemo.contentColor;
    return /*#__PURE__*/React.createElement("svg", {
      width: "64",
      height: "41",
      viewBox: "0 0 64 41",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(0 1)",
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("ellipse", {
      fill: shadowColor,
      cx: "32",
      cy: "33",
      rx: "32",
      ry: "7"
    }), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero",
      stroke: borderColor
    }, /*#__PURE__*/React.createElement("path", {
      d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      fill: contentColor
    }))));
  };
  if (process.env.NODE_ENV !== 'production') {
    Simple.displayName = 'SimpleImage';
  }
  var _default = _exports["default"] = Simple;
});