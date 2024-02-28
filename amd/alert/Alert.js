define(["exports", "react", "@ant-design/icons/es/icons/CheckCircleFilled", "@ant-design/icons/es/icons/CloseCircleFilled", "@ant-design/icons/es/icons/CloseOutlined", "@ant-design/icons/es/icons/ExclamationCircleFilled", "@ant-design/icons/es/icons/InfoCircleFilled", "classnames", "rc-motion", "rc-util/es/pickAttrs", "antd4mx/_util/reactNode", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/alert/style"], function (_exports, React, _CheckCircleFilled, _CloseCircleFilled, _CloseOutlined, _ExclamationCircleFilled, _InfoCircleFilled, _classnames, _rcMotion, _pickAttrs, _reactNode, _warning, _configProvider, _style) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
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
  var iconMapFilled = {
    success: _CheckCircleFilled["default"],
    info: _InfoCircleFilled["default"],
    error: _CloseCircleFilled["default"],
    warning: _ExclamationCircleFilled["default"]
  };
  var IconNode = function IconNode(props) {
    var icon = props.icon,
      prefixCls = props.prefixCls,
      type = props.type;
    var iconType = iconMapFilled[type] || null;
    if (icon) {
      return (0, _reactNode.replaceElement)(icon, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-icon")
      }, icon), function () {
        return {
          className: (0, _classnames["default"])("".concat(prefixCls, "-icon"), _defineProperty({}, icon.props.className, icon.props.className))
        };
      });
    }
    return /*#__PURE__*/React.createElement(iconType, {
      className: "".concat(prefixCls, "-icon")
    });
  };
  var CloseIconNode = function CloseIconNode(props) {
    var isClosable = props.isClosable,
      prefixCls = props.prefixCls,
      closeIcon = props.closeIcon,
      handleClose = props.handleClose;
    var mergedCloseIcon = closeIcon === true || closeIcon === undefined ? /*#__PURE__*/React.createElement(_CloseOutlined["default"], null) : closeIcon;
    return isClosable ? ( /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: handleClose,
      className: "".concat(prefixCls, "-close-icon"),
      tabIndex: 0
    }, mergedCloseIcon)) : null;
  };
  var Alert = function Alert(props) {
    var description = props.description,
      customizePrefixCls = props.prefixCls,
      message = props.message,
      banner = props.banner,
      className = props.className,
      rootClassName = props.rootClassName,
      style = props.style,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onClick = props.onClick,
      afterClose = props.afterClose,
      showIcon = props.showIcon,
      closable = props.closable,
      closeText = props.closeText,
      closeIcon = props.closeIcon,
      action = props.action,
      otherProps = __rest(props, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action"]);
    var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      closed = _React$useState2[0],
      setClosed = _React$useState2[1];
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Alert');
      warning.deprecated(!closeText, 'closeText', 'closeIcon');
    }
    var ref = React.useRef(null);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      alert = _React$useContext.alert;
    var prefixCls = getPrefixCls('alert', customizePrefixCls);
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var handleClose = function handleClose(e) {
      var _a;
      setClosed(true);
      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, e);
    };
    var type = React.useMemo(function () {
      if (props.type !== undefined) {
        return props.type;
      }
      // banner mode defaults to 'warning'
      return banner ? 'warning' : 'info';
    }, [props.type, banner]);
    // closeable when closeText or closeIcon is assigned
    var isClosable = React.useMemo(function () {
      if (closeText) {
        return true;
      }
      if (typeof closable === 'boolean') {
        return closable;
      }
      // should be true when closeIcon is 0 or ''
      return closeIcon !== false && closeIcon !== null && closeIcon !== undefined;
    }, [closeText, closeIcon, closable]);
    // banner mode defaults to Icon
    var isShowIcon = banner && showIcon === undefined ? true : showIcon;
    var alertCls = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(type), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-with-description"), !!description), "".concat(prefixCls, "-no-icon"), !isShowIcon), "".concat(prefixCls, "-banner"), !!banner), "".concat(prefixCls, "-rtl"), direction === 'rtl'), alert === null || alert === void 0 ? void 0 : alert.className, className, rootClassName, cssVarCls, hashId);
    var restProps = (0, _pickAttrs["default"])(otherProps, {
      aria: true,
      data: true
    });
    return wrapCSSVar( /*#__PURE__*/React.createElement(_rcMotion["default"], {
      visible: !closed,
      motionName: "".concat(prefixCls, "-motion"),
      motionAppear: false,
      motionEnter: false,
      onLeaveStart: function onLeaveStart(node) {
        return {
          maxHeight: node.offsetHeight
        };
      },
      onLeaveEnd: afterClose
    }, function (_ref) {
      var motionClassName = _ref.className,
        motionStyle = _ref.style;
      return /*#__PURE__*/React.createElement("div", Object.assign({
        ref: ref,
        "data-show": !closed,
        className: (0, _classnames["default"])(alertCls, motionClassName),
        style: Object.assign(Object.assign(Object.assign({}, alert === null || alert === void 0 ? void 0 : alert.style), style), motionStyle),
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onClick: onClick,
        role: "alert"
      }, restProps), isShowIcon ? ( /*#__PURE__*/React.createElement(IconNode, {
        description: description,
        icon: props.icon,
        prefixCls: prefixCls,
        type: type
      })) : null, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, message ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-message")
      }, message) : null, description ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-description")
      }, description) : null), action ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-action")
      }, action) : null, /*#__PURE__*/React.createElement(CloseIconNode, {
        isClosable: isClosable,
        prefixCls: prefixCls,
        closeIcon: closeText || (closeIcon !== null && closeIcon !== void 0 ? closeIcon : alert === null || alert === void 0 ? void 0 : alert.closeIcon),
        handleClose: handleClose
      }));
    }));
  };
  if (process.env.NODE_ENV !== 'production') {
    Alert.displayName = 'Alert';
  }
  var _default = _exports["default"] = Alert;
});