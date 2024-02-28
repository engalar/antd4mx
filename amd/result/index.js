function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@ant-design/icons/es/icons/CheckCircleFilled", "@ant-design/icons/es/icons/CloseCircleFilled", "@ant-design/icons/es/icons/ExclamationCircleFilled", "@ant-design/icons/es/icons/WarningFilled", "classnames", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/result/noFound", "antd4mx/result/serverError", "antd4mx/result/style/index", "antd4mx/result/unauthorized"], function (_exports, React, _CheckCircleFilled, _CloseCircleFilled, _ExclamationCircleFilled, _WarningFilled, _classnames, _warning, _index, _noFound, _serverError, _index2, _unauthorized) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.IconMap = _exports.ExceptionMap = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var IconMap = _exports.IconMap = {
    success: _CheckCircleFilled["default"],
    error: _CloseCircleFilled["default"],
    info: _ExclamationCircleFilled["default"],
    warning: _WarningFilled["default"]
  };
  var ExceptionMap = _exports.ExceptionMap = {
    '404': _noFound["default"],
    '500': _serverError["default"],
    '403': _unauthorized["default"]
  };
  // ExceptionImageMap keys
  var ExceptionStatus = Object.keys(ExceptionMap);
  var Icon = function Icon(_ref) {
    var prefixCls = _ref.prefixCls,
      icon = _ref.icon,
      status = _ref.status;
    var className = (0, _classnames["default"])("".concat(prefixCls, "-icon"));
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Result');
      process.env.NODE_ENV !== "production" ? warning(!(typeof icon === 'string' && icon.length > 2), 'breaking', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon")) : void 0;
    }
    if (ExceptionStatus.includes("".concat(status))) {
      var SVGComponent = ExceptionMap[status];
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(className, " ").concat(prefixCls, "-image")
      }, /*#__PURE__*/React.createElement(SVGComponent, null));
    }
    var iconNode = /*#__PURE__*/React.createElement(IconMap[status]);
    if (icon === null || icon === false) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: className
    }, icon || iconNode);
  };
  var Extra = function Extra(_ref2) {
    var prefixCls = _ref2.prefixCls,
      extra = _ref2.extra;
    if (!extra) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-extra")
    }, extra);
  };
  var Result = function Result(_ref3) {
    var customizePrefixCls = _ref3.prefixCls,
      customizeClassName = _ref3.className,
      rootClassName = _ref3.rootClassName,
      subTitle = _ref3.subTitle,
      title = _ref3.title,
      style = _ref3.style,
      children = _ref3.children,
      _ref3$status = _ref3.status,
      status = _ref3$status === void 0 ? 'info' : _ref3$status,
      icon = _ref3.icon,
      extra = _ref3.extra;
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      result = _React$useContext.result;
    var prefixCls = getPrefixCls('result', customizePrefixCls);
    // Style
    var _useStyle = (0, _index2["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var className = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(status), customizeClassName, result === null || result === void 0 ? void 0 : result.className, rootClassName, _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), hashId, cssVarCls);
    var mergedStyle = Object.assign(Object.assign({}, result === null || result === void 0 ? void 0 : result.style), style);
    return wrapCSSVar( /*#__PURE__*/React.createElement("div", {
      className: className,
      style: mergedStyle
    }, /*#__PURE__*/React.createElement(Icon, {
      prefixCls: prefixCls,
      status: status,
      icon: icon
    }), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-title")
    }, title), subTitle && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-subtitle")
    }, subTitle), /*#__PURE__*/React.createElement(Extra, {
      prefixCls: prefixCls,
      extra: extra
    }), children && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children)));
  };
  Result.PRESENTED_IMAGE_403 = ExceptionMap['403'];
  Result.PRESENTED_IMAGE_404 = ExceptionMap['404'];
  Result.PRESENTED_IMAGE_500 = ExceptionMap['500'];
  if (process.env.NODE_ENV !== 'production') {
    Result.displayName = 'Result';
  }
  var _default = _exports["default"] = Result;
});