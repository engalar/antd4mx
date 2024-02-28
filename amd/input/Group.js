function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/form/context", "antd4mx/input/style"], function (_exports, _react, _classnames, _warning, _configProvider, _context, _style) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var React = _react;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var Group = function Group(props) {
    var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls,
      direction = _useContext.direction;
    var customizePrefixCls = props.prefixCls,
      className = props.className;
    var prefixCls = getPrefixCls('input-group', customizePrefixCls);
    var inputPrefixCls = getPrefixCls('input');
    var _useStyle = (0, _style["default"])(inputPrefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 2),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1];
    var cls = (0, _classnames["default"])(prefixCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-lg"), props.size === 'large'), "".concat(prefixCls, "-sm"), props.size === 'small'), "".concat(prefixCls, "-compact"), props.compact), "".concat(prefixCls, "-rtl"), direction === 'rtl'), hashId, className);
    var formItemContext = (0, _react.useContext)(_context.FormItemInputContext);
    var groupFormItemContext = (0, _react.useMemo)(function () {
      return Object.assign(Object.assign({}, formItemContext), {
        isFormItemInput: false
      });
    }, [formItemContext]);
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Input.Group');
      warning.deprecated(false, 'Input.Group', 'Space.Compact');
    }
    return wrapCSSVar( /*#__PURE__*/React.createElement("span", {
      className: cls,
      style: props.style,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      onFocus: props.onFocus,
      onBlur: props.onBlur
    }, /*#__PURE__*/React.createElement(_context.FormItemInputContext.Provider, {
      value: groupFormItemContext
    }, props.children)));
  };
  var _default = _exports["default"] = Group;
});