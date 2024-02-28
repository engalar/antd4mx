define(["exports", "classnames", "react", "antd4mx/config-provider"], function (_exports, _classnames, React, _configProvider) {
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
  var TimelineItem = function TimelineItem(_a) {
    var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      _a$color = _a.color,
      color = _a$color === void 0 ? 'blue' : _a$color,
      dot = _a.dot,
      _a$pending = _a.pending,
      pending = _a$pending === void 0 ? false : _a$pending,
      position = _a.position,
      label = _a.label,
      children = _a.children,
      restProps = __rest(_a, ["prefixCls", "className", "color", "dot", "pending", "position", "label", "children"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('timeline', customizePrefixCls);
    var itemClassName = (0, _classnames["default"])("".concat(prefixCls, "-item"), _defineProperty({}, "".concat(prefixCls, "-item-pending"), pending), className);
    var customColor = /blue|red|green|gray/.test(color || '') ? undefined : color;
    var dotClassName = (0, _classnames["default"])("".concat(prefixCls, "-item-head"), _defineProperty(_defineProperty({}, "".concat(prefixCls, "-item-head-custom"), !!dot), "".concat(prefixCls, "-item-head-").concat(color), !customColor));
    return /*#__PURE__*/React.createElement("li", Object.assign({}, restProps, {
      className: itemClassName
    }), label && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-item-label")
    }, label), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-item-tail")
    }), /*#__PURE__*/React.createElement("div", {
      className: dotClassName,
      style: {
        borderColor: customColor,
        color: customColor
      }
    }, dot), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-item-content")
    }, children));
  };
  var _default = _exports["default"] = TimelineItem;
});