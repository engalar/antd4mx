define(["exports", "@rc-component/color-picker", "classnames", "react", "antd4mx/color-picker/util", "antd4mx/color-picker/components/ColorClear"], function (_exports, _colorPicker, _classnames, _react, _util, _ColorClear) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
  var ColorTrigger = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    var color = props.color,
      prefixCls = props.prefixCls,
      open = props.open,
      colorCleared = props.colorCleared,
      disabled = props.disabled,
      format = props.format,
      className = props.className,
      showText = props.showText,
      rest = __rest(props, ["color", "prefixCls", "open", "colorCleared", "disabled", "format", "className", "showText"]);
    var colorTriggerPrefixCls = "".concat(prefixCls, "-trigger");
    var containerNode = (0, _react.useMemo)(function () {
      return colorCleared ? ( /*#__PURE__*/_react["default"].createElement(_ColorClear["default"], {
        prefixCls: prefixCls
      })) : ( /*#__PURE__*/_react["default"].createElement(_colorPicker.ColorBlock, {
        prefixCls: prefixCls,
        color: color.toRgbString()
      }));
    }, [color, colorCleared, prefixCls]);
    var genColorString = function genColorString() {
      var hexString = color.toHexString().toUpperCase();
      var alpha = (0, _util.getAlphaColor)(color);
      switch (format) {
        case 'rgb':
          return color.toRgbString();
        case 'hsb':
          return color.toHsbString();
        case 'hex':
        default:
          return alpha < 100 ? "".concat(hexString.slice(0, 7), ",").concat(alpha, "%") : hexString;
      }
    };
    var renderText = function renderText() {
      if (typeof showText === 'function') {
        return showText(color);
      }
      if (showText) {
        return genColorString();
      }
    };
    return /*#__PURE__*/_react["default"].createElement("div", Object.assign({
      ref: ref,
      className: (0, _classnames["default"])(colorTriggerPrefixCls, className, _defineProperty(_defineProperty({}, "".concat(colorTriggerPrefixCls, "-active"), open), "".concat(colorTriggerPrefixCls, "-disabled"), disabled))
    }, rest), containerNode, showText && /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(colorTriggerPrefixCls, "-text")
    }, renderText()));
  });
  var _default = _exports["default"] = ColorTrigger;
});