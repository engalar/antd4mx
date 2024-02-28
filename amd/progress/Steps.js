function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "classnames", "react", "antd4mx/progress/utils"], function (_exports, _classnames, React, _utils) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var Steps = function Steps(props) {
    var size = props.size,
      steps = props.steps,
      _props$percent = props.percent,
      percent = _props$percent === void 0 ? 0 : _props$percent,
      _props$strokeWidth = props.strokeWidth,
      strokeWidth = _props$strokeWidth === void 0 ? 8 : _props$strokeWidth,
      strokeColor = props.strokeColor,
      _props$trailColor = props.trailColor,
      trailColor = _props$trailColor === void 0 ? null : _props$trailColor,
      prefixCls = props.prefixCls,
      children = props.children;
    var current = Math.round(steps * (percent / 100));
    var stepWidth = size === 'small' ? 2 : 14;
    var mergedSize = size !== null && size !== void 0 ? size : [stepWidth, strokeWidth];
    var _getSize = (0, _utils.getSize)(mergedSize, 'step', {
        steps: steps,
        strokeWidth: strokeWidth
      }),
      _getSize2 = _slicedToArray(_getSize, 2),
      width = _getSize2[0],
      height = _getSize2[1];
    var unitWidth = width / steps;
    var styledSteps = new Array(steps);
    for (var i = 0; i < steps; i++) {
      var color = Array.isArray(strokeColor) ? strokeColor[i] : strokeColor;
      styledSteps[i] = /*#__PURE__*/React.createElement("div", {
        key: i,
        className: (0, _classnames["default"])("".concat(prefixCls, "-steps-item"), _defineProperty({}, "".concat(prefixCls, "-steps-item-active"), i <= current - 1)),
        style: {
          backgroundColor: i <= current - 1 ? color : trailColor,
          width: unitWidth,
          height: height
        }
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-steps-outer")
    }, styledSteps, children);
  };
  var _default = _exports["default"] = Steps;
});