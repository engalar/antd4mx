define(["exports", "react", "@ant-design/icons/es/icons/CheckCircleFilled", "@ant-design/icons/es/icons/CloseCircleFilled", "@ant-design/icons/es/icons/CloseOutlined", "@ant-design/icons/es/icons/ExclamationCircleFilled", "@ant-design/icons/es/icons/InfoCircleFilled", "@ant-design/icons/es/icons/LoadingOutlined", "classnames", "rc-notification", "antd4mx/config-provider/index", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/notification/style/index", "antd4mx/notification/style/pure-panel"], function (_exports, React, _CheckCircleFilled, _CloseCircleFilled, _CloseOutlined, _ExclamationCircleFilled, _InfoCircleFilled, _LoadingOutlined, _classnames, _rcNotification, _index, _useCSSVarCls, _index2, _purePanel) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.TypeIcon = _exports.PureContent = void 0;
  _exports.getCloseIcon = getCloseIcon;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
  var TypeIcon = _exports.TypeIcon = {
    info: /*#__PURE__*/React.createElement(_InfoCircleFilled["default"], null),
    success: /*#__PURE__*/React.createElement(_CheckCircleFilled["default"], null),
    error: /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null),
    warning: /*#__PURE__*/React.createElement(_ExclamationCircleFilled["default"], null),
    loading: /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null)
  };
  function getCloseIcon(prefixCls, closeIcon) {
    if (closeIcon === null || closeIcon === false) {
      return null;
    }
    return closeIcon || ( /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-close-x")
    }, /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
      className: "".concat(prefixCls, "-close-icon")
    })));
  }
  var typeToIcon = {
    success: _CheckCircleFilled["default"],
    info: _InfoCircleFilled["default"],
    error: _CloseCircleFilled["default"],
    warning: _ExclamationCircleFilled["default"]
  };
  var PureContent = _exports.PureContent = function PureContent(props) {
    var prefixCls = props.prefixCls,
      icon = props.icon,
      type = props.type,
      message = props.message,
      description = props.description,
      btn = props.btn,
      _props$role = props.role,
      role = _props$role === void 0 ? 'alert' : _props$role;
    var iconNode = null;
    if (icon) {
      iconNode = /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-icon")
      }, icon);
    } else if (type) {
      iconNode = /*#__PURE__*/React.createElement(typeToIcon[type] || null, {
        className: (0, _classnames["default"])("".concat(prefixCls, "-icon"), "".concat(prefixCls, "-icon-").concat(type))
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      className: (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-with-icon"), iconNode)),
      role: role
    }, iconNode, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-message")
    }, message), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, description), btn && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-btn")
    }, btn));
  };
  /** @private Internal Component. Do not use in your production. */
  var PurePanel = function PurePanel(props) {
    var staticPrefixCls = props.prefixCls,
      className = props.className,
      icon = props.icon,
      type = props.type,
      message = props.message,
      description = props.description,
      btn = props.btn,
      _props$closable = props.closable,
      closable = _props$closable === void 0 ? true : _props$closable,
      closeIcon = props.closeIcon,
      notificationClassName = props.className,
      restProps = __rest(props, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "closable", "closeIcon", "className"]);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = staticPrefixCls || getPrefixCls('notification');
    var noticePrefixCls = "".concat(prefixCls, "-notice");
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    return wrapCSSVar( /*#__PURE__*/React.createElement("div", {
      className: (0, _classnames["default"])("".concat(noticePrefixCls, "-pure-panel"), hashId, className, cssVarCls, rootCls)
    }, /*#__PURE__*/React.createElement(_purePanel["default"], {
      prefixCls: prefixCls
    }), /*#__PURE__*/React.createElement(_rcNotification.Notice, Object.assign({}, restProps, {
      prefixCls: prefixCls,
      eventKey: "pure",
      duration: null,
      closable: closable,
      className: (0, _classnames["default"])({
        notificationClassName: notificationClassName
      }),
      closeIcon: getCloseIcon(prefixCls, closeIcon),
      content: /*#__PURE__*/React.createElement(PureContent, {
        prefixCls: noticePrefixCls,
        icon: icon,
        type: type,
        message: message,
        description: description,
        btn: btn
      })
    }))));
  };
  var _default = _exports["default"] = PurePanel;
});