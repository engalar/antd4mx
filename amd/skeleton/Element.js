define(["exports", "classnames", "react"], function (_exports, _classnames, React) {
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
  var Element = function Element(props) {
    var prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      size = props.size,
      shape = props.shape;
    var sizeCls = (0, _classnames["default"])(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-lg"), size === 'large'), "".concat(prefixCls, "-sm"), size === 'small'));
    var shapeCls = (0, _classnames["default"])(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-circle"), shape === 'circle'), "".concat(prefixCls, "-square"), shape === 'square'), "".concat(prefixCls, "-round"), shape === 'round'));
    var sizeStyle = React.useMemo(function () {
      return typeof size === 'number' ? {
        width: size,
        height: size,
        lineHeight: "".concat(size, "px")
      } : {};
    }, [size]);
    return /*#__PURE__*/React.createElement("span", {
      className: (0, _classnames["default"])(prefixCls, sizeCls, shapeCls, className),
      style: Object.assign(Object.assign({}, sizeStyle), style)
    });
  };
  var _default = _exports["default"] = Element;
});