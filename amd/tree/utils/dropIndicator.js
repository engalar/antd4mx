define(["exports", "react"], function (_exports, _react) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = dropIndicatorRender;
  _exports.offset = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var offset = _exports.offset = 4;
  function dropIndicatorRender(props) {
    var dropPosition = props.dropPosition,
      dropLevelOffset = props.dropLevelOffset,
      prefixCls = props.prefixCls,
      indent = props.indent,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'ltr' : _props$direction;
    var startPosition = direction === 'ltr' ? 'left' : 'right';
    var endPosition = direction === 'ltr' ? 'right' : 'left';
    var style = _defineProperty(_defineProperty({}, startPosition, -dropLevelOffset * indent + offset), endPosition, 0);
    switch (dropPosition) {
      case -1:
        style.top = -3;
        break;
      case 1:
        style.bottom = -3;
        break;
      default:
        // dropPosition === 0
        style.bottom = -3;
        style[startPosition] = indent + offset;
        break;
    }
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: style,
      className: "".concat(prefixCls, "-drop-indicator")
    });
  }
});