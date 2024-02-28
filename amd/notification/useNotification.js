define(["exports", "react", "classnames", "rc-notification", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/theme/internal", "antd4mx/notification/PurePanel", "antd4mx/notification/style/index", "antd4mx/notification/util"], function (_exports, _react, _classnames, _rcNotification, _warning, _index, _useCSSVarCls, _internal, _PurePanel, _index2, _util) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useNotification;
  _exports.useInternalNotification = useInternalNotification;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var DEFAULT_OFFSET = 24;
  var DEFAULT_DURATION = 4.5;
  var DEFAULT_PLACEMENT = 'topRight';
  var Wrapper = function Wrapper(_ref) {
    var children = _ref.children,
      prefixCls = _ref.prefixCls;
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    return wrapCSSVar( /*#__PURE__*/_react["default"].createElement(_rcNotification.NotificationProvider, {
      classNames: {
        list: (0, _classnames["default"])(hashId, cssVarCls, rootCls)
      }
    }, children));
  };
  var renderNotifications = function renderNotifications(node, _ref2) {
    var prefixCls = _ref2.prefixCls,
      key = _ref2.key;
    return /*#__PURE__*/_react["default"].createElement(Wrapper, {
      prefixCls: prefixCls,
      key: key
    }, node);
  };
  var Holder = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
    var top = props.top,
      bottom = props.bottom,
      staticPrefixCls = props.prefixCls,
      staticGetContainer = props.getContainer,
      maxCount = props.maxCount,
      rtl = props.rtl,
      onAllRemoved = props.onAllRemoved,
      stack = props.stack,
      duration = props.duration;
    var _useContext = (0, _react.useContext)(_index.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls,
      getPopupContainer = _useContext.getPopupContainer,
      notification = _useContext.notification,
      direction = _useContext.direction;
    var _useToken = (0, _internal.useToken)(),
      _useToken2 = _slicedToArray(_useToken, 2),
      token = _useToken2[1];
    var prefixCls = staticPrefixCls || getPrefixCls('notification');
    // =============================== Style ===============================
    var getStyle = function getStyle(placement) {
      return (0, _util.getPlacementStyle)(placement, top !== null && top !== void 0 ? top : DEFAULT_OFFSET, bottom !== null && bottom !== void 0 ? bottom : DEFAULT_OFFSET);
    };
    var getClassName = function getClassName() {
      return (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-rtl"), rtl !== null && rtl !== void 0 ? rtl : direction === 'rtl'));
    };
    // ============================== Motion ===============================
    var getNotificationMotion = function getNotificationMotion() {
      return (0, _util.getMotion)(prefixCls);
    };
    // ============================== Origin ===============================
    var _useRcNotification = (0, _rcNotification.useNotification)({
        prefixCls: prefixCls,
        style: getStyle,
        className: getClassName,
        motion: getNotificationMotion,
        closable: true,
        closeIcon: (0, _PurePanel.getCloseIcon)(prefixCls),
        duration: duration !== null && duration !== void 0 ? duration : DEFAULT_DURATION,
        getContainer: function getContainer() {
          return (staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body;
        },
        maxCount: maxCount,
        onAllRemoved: onAllRemoved,
        renderNotifications: renderNotifications,
        stack: stack === false ? false : {
          threshold: _typeof(stack) === 'object' ? stack === null || stack === void 0 ? void 0 : stack.threshold : undefined,
          offset: 8,
          gap: token.margin
        }
      }),
      _useRcNotification2 = _slicedToArray(_useRcNotification, 2),
      api = _useRcNotification2[0],
      holder = _useRcNotification2[1];
    // ================================ Ref ================================
    _react["default"].useImperativeHandle(ref, function () {
      return Object.assign(Object.assign({}, api), {
        prefixCls: prefixCls,
        notification: notification
      });
    });
    return holder;
  });
  // ==============================================================================
  // ==                                   Hook                                   ==
  // ==============================================================================
  function useInternalNotification(notificationConfig) {
    var holderRef = _react["default"].useRef(null);
    var warning = (0, _warning.devUseWarning)('Notification');
    // ================================ API ================================
    var wrapAPI = _react["default"].useMemo(function () {
      // Wrap with notification content
      // >>> Open
      var open = function open(config) {
        var _a;
        if (!holderRef.current) {
          process.env.NODE_ENV !== "production" ? warning(false, 'usage', 'You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.') : void 0;
          return;
        }
        var _holderRef$current = holderRef.current,
          originOpen = _holderRef$current.open,
          prefixCls = _holderRef$current.prefixCls,
          notification = _holderRef$current.notification;
        var noticePrefixCls = "".concat(prefixCls, "-notice");
        var message = config.message,
          description = config.description,
          icon = config.icon,
          type = config.type,
          btn = config.btn,
          className = config.className,
          style = config.style,
          _config$role = config.role,
          role = _config$role === void 0 ? 'alert' : _config$role,
          closeIcon = config.closeIcon,
          restConfig = __rest(config, ["message", "description", "icon", "type", "btn", "className", "style", "role", "closeIcon"]);
        var realCloseIcon = (0, _PurePanel.getCloseIcon)(noticePrefixCls, typeof closeIcon !== 'undefined' ? closeIcon : notification === null || notification === void 0 ? void 0 : notification.closeIcon);
        return originOpen(Object.assign(Object.assign({
          // use placement from props instead of hard-coding "topRight"
          placement: (_a = notificationConfig === null || notificationConfig === void 0 ? void 0 : notificationConfig.placement) !== null && _a !== void 0 ? _a : DEFAULT_PLACEMENT
        }, restConfig), {
          content: ( /*#__PURE__*/_react["default"].createElement(_PurePanel.PureContent, {
            prefixCls: noticePrefixCls,
            icon: icon,
            type: type,
            message: message,
            description: description,
            btn: btn,
            role: role
          })),
          className: (0, _classnames["default"])(type && "".concat(noticePrefixCls, "-").concat(type), className, notification === null || notification === void 0 ? void 0 : notification.className),
          style: Object.assign(Object.assign({}, notification === null || notification === void 0 ? void 0 : notification.style), style),
          closeIcon: realCloseIcon,
          closable: !!realCloseIcon
        }));
      };
      // >>> destroy
      var destroy = function destroy(key) {
        var _a, _b;
        if (key !== undefined) {
          (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
        } else {
          (_b = holderRef.current) === null || _b === void 0 ? void 0 : _b.destroy();
        }
      };
      var clone = {
        open: open,
        destroy: destroy
      };
      var keys = ['success', 'info', 'warning', 'error'];
      keys.forEach(function (type) {
        clone[type] = function (config) {
          return open(Object.assign(Object.assign({}, config), {
            type: type
          }));
        };
      });
      return clone;
    }, []);
    // ============================== Return ===============================
    return [wrapAPI, /*#__PURE__*/_react["default"].createElement(Holder, Object.assign({
      key: "notification-holder"
    }, notificationConfig, {
      ref: holderRef
    }))];
  }
  function useNotification(notificationConfig) {
    return useInternalNotification(notificationConfig);
  }
});