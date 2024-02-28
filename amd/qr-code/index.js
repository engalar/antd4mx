function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@ant-design/icons/es/icons/ReloadOutlined", "classnames", "qrcode.react", "antd4mx/_util/warning", "antd4mx/button/index", "antd4mx/config-provider/index", "antd4mx/locale/index", "antd4mx/spin/index", "antd4mx/theme/internal", "antd4mx/qr-code/style/index"], function (_exports, _react, _ReloadOutlined, _classnames, _qrcode, _warning, _index, _index2, _index3, _index4, _internal, _index5) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var QRCode = function QRCode(props) {
    var _useToken = (0, _internal.useToken)(),
      _useToken2 = _slicedToArray(_useToken, 2),
      token = _useToken2[1];
    var value = props.value,
      _props$type = props.type,
      type = _props$type === void 0 ? 'canvas' : _props$type,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? '' : _props$icon,
      _props$size = props.size,
      size = _props$size === void 0 ? 160 : _props$size,
      _props$iconSize = props.iconSize,
      iconSize = _props$iconSize === void 0 ? 40 : _props$iconSize,
      _props$color = props.color,
      color = _props$color === void 0 ? token.colorText : _props$color,
      _props$errorLevel = props.errorLevel,
      errorLevel = _props$errorLevel === void 0 ? 'M' : _props$errorLevel,
      _props$status = props.status,
      status = _props$status === void 0 ? 'active' : _props$status,
      _props$bordered = props.bordered,
      bordered = _props$bordered === void 0 ? true : _props$bordered,
      onRefresh = props.onRefresh,
      style = props.style,
      className = props.className,
      rootClassName = props.rootClassName,
      customizePrefixCls = props.prefixCls,
      _props$bgColor = props.bgColor,
      bgColor = _props$bgColor === void 0 ? 'transparent' : _props$bgColor;
    var _useContext = (0, _react.useContext)(_index2.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;
    var prefixCls = getPrefixCls('qrcode', customizePrefixCls);
    var _useStyle = (0, _index5["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var imageSettings = {
      src: icon,
      x: undefined,
      y: undefined,
      height: iconSize,
      width: iconSize,
      excavate: true
    };
    var qrCodeProps = {
      value: value,
      size: size,
      level: errorLevel,
      bgColor: bgColor,
      fgColor: color,
      style: {
        width: undefined,
        height: undefined
      },
      imageSettings: icon ? imageSettings : undefined
    };
    var _useLocale = (0, _index3.useLocale)('QRCode'),
      _useLocale2 = _slicedToArray(_useLocale, 1),
      locale = _useLocale2[0];
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('QRCode');
      process.env.NODE_ENV !== "production" ? warning(!!value, 'usage', 'need to receive `value` props') : void 0;
      process.env.NODE_ENV !== "production" ? warning(!(icon && errorLevel === 'L'), 'usage', 'ErrorLevel `L` is not recommended to be used with `icon`, for scanning result would be affected by low level.') : void 0;
    }
    if (!value) {
      return null;
    }
    var mergedCls = (0, _classnames["default"])(prefixCls, className, rootClassName, hashId, cssVarCls, _defineProperty({}, "".concat(prefixCls, "-borderless"), !bordered));
    return wrapCSSVar( /*#__PURE__*/_react["default"].createElement("div", {
      className: mergedCls,
      style: Object.assign(Object.assign({}, style), {
        width: size,
        height: size,
        backgroundColor: bgColor
      })
    }, status !== 'active' && ( /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-mask")
    }, status === 'loading' && /*#__PURE__*/_react["default"].createElement(_index4["default"], null), status === 'expired' && ( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("p", {
      className: "".concat(prefixCls, "-expired")
    }, locale === null || locale === void 0 ? void 0 : locale.expired), onRefresh && ( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      type: "link",
      icon: /*#__PURE__*/_react["default"].createElement(_ReloadOutlined["default"], null),
      onClick: onRefresh
    }, locale === null || locale === void 0 ? void 0 : locale.refresh)))), status === 'scanned' && /*#__PURE__*/_react["default"].createElement("p", {
      className: "".concat(prefixCls, "-scanned")
    }, locale === null || locale === void 0 ? void 0 : locale.scanned))), type === 'canvas' ? /*#__PURE__*/_react["default"].createElement(_qrcode.QRCodeCanvas, Object.assign({}, qrCodeProps)) : /*#__PURE__*/_react["default"].createElement(_qrcode.QRCodeSVG, Object.assign({}, qrCodeProps))));
  };
  if (process.env.NODE_ENV !== 'production') {
    QRCode.displayName = 'QRCode';
  }
  var _default = _exports["default"] = QRCode;
});