define(["exports", "react", "classnames", "rc-collapse", "antd4mx/_util/warning", "antd4mx/config-provider"], function (_exports, React, _classnames, _rcCollapse, _warning, _configProvider) {
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
  var CollapsePanel = /*#__PURE__*/React.forwardRef(function (props, ref) {
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Collapse.Panel');
      warning.deprecated(!('disabled' in props), 'disabled', 'collapsible="disabled"');
    }
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      _props$showArrow = props.showArrow,
      showArrow = _props$showArrow === void 0 ? true : _props$showArrow;
    var prefixCls = getPrefixCls('collapse', customizePrefixCls);
    var collapsePanelClassName = (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-no-arrow"), !showArrow), className);
    return /*#__PURE__*/React.createElement(_rcCollapse["default"].Panel, Object.assign({
      ref: ref
    }, props, {
      prefixCls: prefixCls,
      className: collapsePanelClassName
    }));
  });
  var _default = _exports["default"] = CollapsePanel;
});