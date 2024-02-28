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
  function renderExpandIcon(locale) {
    return function expandIcon(_ref) {
      var prefixCls = _ref.prefixCls,
        onExpand = _ref.onExpand,
        record = _ref.record,
        expanded = _ref.expanded,
        expandable = _ref.expandable;
      var iconPrefix = "".concat(prefixCls, "-row-expand-icon");
      return /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: function onClick(e) {
          onExpand(record, e);
          e.stopPropagation();
        },
        className: (0, _classnames["default"])(iconPrefix, _defineProperty(_defineProperty(_defineProperty({}, "".concat(iconPrefix, "-spaced"), !expandable), "".concat(iconPrefix, "-expanded"), expandable && expanded), "".concat(iconPrefix, "-collapsed"), expandable && !expanded)),
        "aria-label": expanded ? locale.collapse : locale.expand,
        "aria-expanded": expanded
      });
    };
  }
  var _default = _exports["default"] = renderExpandIcon;
});