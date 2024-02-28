function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "classnames", "rc-progress", "react", "antd4mx/tooltip/index", "antd4mx/progress/utils"], function (_exports, _classnames, _rcProgress, React, _index, _utils) {
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
  var CIRCLE_MIN_STROKE_WIDTH = 3;
  var getMinPercent = function getMinPercent(width) {
    return CIRCLE_MIN_STROKE_WIDTH / width * 100;
  };
  var Circle = function Circle(props) {
    var prefixCls = props.prefixCls,
      _props$trailColor = props.trailColor,
      trailColor = _props$trailColor === void 0 ? null : _props$trailColor,
      _props$strokeLinecap = props.strokeLinecap,
      strokeLinecap = _props$strokeLinecap === void 0 ? 'round' : _props$strokeLinecap,
      gapPosition = props.gapPosition,
      gapDegree = props.gapDegree,
      _props$width = props.width,
      originWidth = _props$width === void 0 ? 120 : _props$width,
      type = props.type,
      children = props.children,
      success = props.success,
      _props$size = props.size,
      size = _props$size === void 0 ? originWidth : _props$size;
    var _getSize = (0, _utils.getSize)(size, 'circle'),
      _getSize2 = _slicedToArray(_getSize, 2),
      width = _getSize2[0],
      height = _getSize2[1];
    var strokeWidth = props.strokeWidth;
    if (strokeWidth === undefined) {
      strokeWidth = Math.max(getMinPercent(width), 6);
    }
    var circleStyle = {
      width: width,
      height: height,
      fontSize: width * 0.15 + 6
    };
    var realGapDegree = React.useMemo(function () {
      // Support gapDeg = 0 when type = 'dashboard'
      if (gapDegree || gapDegree === 0) {
        return gapDegree;
      }
      if (type === 'dashboard') {
        return 75;
      }
      return undefined;
    }, [gapDegree, type]);
    var gapPos = gapPosition || type === 'dashboard' && 'bottom' || undefined;
    // using className to style stroke color
    var isGradient = Object.prototype.toString.call(props.strokeColor) === '[object Object]';
    var strokeColor = (0, _utils.getStrokeColor)({
      success: success,
      strokeColor: props.strokeColor
    });
    var wrapperClassName = (0, _classnames["default"])("".concat(prefixCls, "-inner"), _defineProperty({}, "".concat(prefixCls, "-circle-gradient"), isGradient));
    var circleContent = /*#__PURE__*/React.createElement(_rcProgress.Circle, {
      percent: (0, _utils.getPercentage)(props),
      strokeWidth: strokeWidth,
      trailWidth: strokeWidth,
      strokeColor: strokeColor,
      strokeLinecap: strokeLinecap,
      trailColor: trailColor,
      prefixCls: prefixCls,
      gapDegree: realGapDegree,
      gapPosition: gapPos
    });
    return /*#__PURE__*/React.createElement("div", {
      className: wrapperClassName,
      style: circleStyle
    }, width <= 20 ? ( /*#__PURE__*/React.createElement(_index["default"], {
      title: children
    }, /*#__PURE__*/React.createElement("span", null, circleContent))) : ( /*#__PURE__*/React.createElement(React.Fragment, null, circleContent, children)));
  };
  var _default = _exports["default"] = Circle;
});