define(["exports", "react", "@ant-design/colors", "antd4mx/_util/warning", "antd4mx/progress/utils", "antd4mx/progress/style/index"], function (_exports, React, _colors, _warning, _utils, _index) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.sortGradient = _exports.handleGradient = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  /**
   * @example
   *   {
   *     "0%": "#afc163",
   *     "75%": "#009900",
   *     "50%": "green", // ====> '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
   *     "25%": "#66FF00",
   *     "100%": "#ffffff"
   *   }
   */
  var sortGradient = _exports.sortGradient = function sortGradient(gradients) {
    var tempArr = [];
    Object.keys(gradients).forEach(function (key) {
      var formattedKey = parseFloat(key.replace(/%/g, ''));
      if (!isNaN(formattedKey)) {
        tempArr.push({
          key: formattedKey,
          value: gradients[key]
        });
      }
    });
    tempArr = tempArr.sort(function (a, b) {
      return a.key - b.key;
    });
    return tempArr.map(function (_ref) {
      var key = _ref.key,
        value = _ref.value;
      return "".concat(value, " ").concat(key, "%");
    }).join(', ');
  };
  /**
   * Then this man came to realize the truth: Besides six pence, there is the moon. Besides bread and
   * butter, there is the bug. And... Besides women, there is the code.
   *
   * @example
   *   {
   *     "0%": "#afc163",
   *     "25%": "#66FF00",
   *     "50%": "#00CC00", // ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
   *     "75%": "#009900", //        #00CC00 50%, #009900 75%, #ffffff 100%)
   *     "100%": "#ffffff"
   *   }
   */
  var handleGradient = _exports.handleGradient = function handleGradient(strokeColor, directionConfig) {
    var _strokeColor$from = strokeColor.from,
      from = _strokeColor$from === void 0 ? _colors.presetPrimaryColors.blue : _strokeColor$from,
      _strokeColor$to = strokeColor.to,
      to = _strokeColor$to === void 0 ? _colors.presetPrimaryColors.blue : _strokeColor$to,
      _strokeColor$directio = strokeColor.direction,
      direction = _strokeColor$directio === void 0 ? directionConfig === 'rtl' ? 'to left' : 'to right' : _strokeColor$directio,
      rest = __rest(strokeColor, ["from", "to", "direction"]);
    if (Object.keys(rest).length !== 0) {
      var sortedGradients = sortGradient(rest);
      var _background = "linear-gradient(".concat(direction, ", ").concat(sortedGradients, ")");
      return _defineProperty({
        background: _background
      }, _index.LineStrokeColorVar, _background);
    }
    var background = "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")");
    return _defineProperty({
      background: background
    }, _index.LineStrokeColorVar, background);
  };
  var Line = function Line(props) {
    var prefixCls = props.prefixCls,
      directionConfig = props.direction,
      percent = props.percent,
      size = props.size,
      strokeWidth = props.strokeWidth,
      strokeColor = props.strokeColor,
      _props$strokeLinecap = props.strokeLinecap,
      strokeLinecap = _props$strokeLinecap === void 0 ? 'round' : _props$strokeLinecap,
      children = props.children,
      _props$trailColor = props.trailColor,
      trailColor = _props$trailColor === void 0 ? null : _props$trailColor,
      success = props.success;
    var backgroundProps = strokeColor && typeof strokeColor !== 'string' ? handleGradient(strokeColor, directionConfig) : _defineProperty(_defineProperty({}, _index.LineStrokeColorVar, strokeColor), "background", strokeColor);
    var borderRadius = strokeLinecap === 'square' || strokeLinecap === 'butt' ? 0 : undefined;
    var mergedSize = size !== null && size !== void 0 ? size : [-1, strokeWidth || (size === 'small' ? 6 : 8)];
    var _getSize = (0, _utils.getSize)(mergedSize, 'line', {
        strokeWidth: strokeWidth
      }),
      _getSize2 = _slicedToArray(_getSize, 2),
      width = _getSize2[0],
      height = _getSize2[1];
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Progress');
      warning.deprecated(!('strokeWidth' in props), 'strokeWidth', 'size');
    }
    var trailStyle = {
      backgroundColor: trailColor || undefined,
      borderRadius: borderRadius
    };
    var percentStyle = Object.assign(Object.assign({
      width: "".concat((0, _utils.validProgress)(percent), "%"),
      height: height,
      borderRadius: borderRadius
    }, backgroundProps), _defineProperty({}, _index.Percent, (0, _utils.validProgress)(percent) / 100));
    var successPercent = (0, _utils.getSuccessPercent)(props);
    var successPercentStyle = {
      width: "".concat((0, _utils.validProgress)(successPercent), "%"),
      height: height,
      borderRadius: borderRadius,
      backgroundColor: success === null || success === void 0 ? void 0 : success.strokeColor
    };
    var outerStyle = {
      width: width < 0 ? '100%' : width,
      height: height
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-outer"),
      style: outerStyle
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-inner"),
      style: trailStyle
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-bg"),
      style: percentStyle
    }), successPercent !== undefined ? ( /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-success-bg"),
      style: successPercentStyle
    })) : null)), children);
  };
  var _default = _exports["default"] = Line;
});