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
  function notEmpty(val) {
    return val !== undefined && val !== null;
  }
  var Cell = function Cell(props) {
    var itemPrefixCls = props.itemPrefixCls,
      component = props.component,
      span = props.span,
      className = props.className,
      style = props.style,
      labelStyle = props.labelStyle,
      contentStyle = props.contentStyle,
      bordered = props.bordered,
      label = props.label,
      content = props.content,
      colon = props.colon,
      type = props.type;
    var Component = component;
    if (bordered) {
      return /*#__PURE__*/React.createElement(Component, {
        className: (0, _classnames["default"])(_defineProperty(_defineProperty({}, "".concat(itemPrefixCls, "-item-label"), type === 'label'), "".concat(itemPrefixCls, "-item-content"), type === 'content'), className),
        style: style,
        colSpan: span
      }, notEmpty(label) && /*#__PURE__*/React.createElement("span", {
        style: labelStyle
      }, label), notEmpty(content) && /*#__PURE__*/React.createElement("span", {
        style: contentStyle
      }, content));
    }
    return /*#__PURE__*/React.createElement(Component, {
      className: (0, _classnames["default"])("".concat(itemPrefixCls, "-item"), className),
      style: style,
      colSpan: span
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(itemPrefixCls, "-item-container")
    }, (label || label === 0) && ( /*#__PURE__*/React.createElement("span", {
      className: (0, _classnames["default"])("".concat(itemPrefixCls, "-item-label"), _defineProperty({}, "".concat(itemPrefixCls, "-item-no-colon"), !colon)),
      style: labelStyle
    }, label)), (content || content === 0) && ( /*#__PURE__*/React.createElement("span", {
      className: (0, _classnames["default"])("".concat(itemPrefixCls, "-item-content")),
      style: contentStyle
    }, content))));
  };
  var _default = _exports["default"] = Cell;
});