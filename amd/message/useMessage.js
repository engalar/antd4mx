define(["exports", "react", "@ant-design/icons/es/icons/CloseOutlined", "classnames", "rc-notification", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/message/PurePanel", "antd4mx/message/style/index", "antd4mx/message/util"], function (_exports, React, _CloseOutlined, _classnames, _rcNotification, _warning, _index, _useCSSVarCls, _PurePanel, _index2, _util) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useMessage;
  _exports.useInternalMessage = useInternalMessage;
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
  var DEFAULT_OFFSET = 8;
  var DEFAULT_DURATION = 3;
  var Wrapper = function Wrapper(_ref) {
    var children = _ref.children,
      prefixCls = _ref.prefixCls;
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    return wrapCSSVar( /*#__PURE__*/React.createElement(_rcNotification.NotificationProvider, {
      classNames: {
        list: (0, _classnames["default"])(hashId, cssVarCls, rootCls)
      }
    }, children));
  };
  var renderNotifications = function renderNotifications(node, _ref2) {
    var prefixCls = _ref2.prefixCls,
      key = _ref2.key;
    return /*#__PURE__*/React.createElement(Wrapper, {
      prefixCls: prefixCls,
      key: key
    }, node);
  };
  var Holder = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var top = props.top,
      staticPrefixCls = props.prefixCls,
      staticGetContainer = props.getContainer,
      maxCount = props.maxCount,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? DEFAULT_DURATION : _props$duration,
      rtl = props.rtl,
      transitionName = props.transitionName,
      onAllRemoved = props.onAllRemoved;
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      getPopupContainer = _React$useContext.getPopupContainer,
      message = _React$useContext.message,
      direction = _React$useContext.direction;
    var prefixCls = staticPrefixCls || getPrefixCls('message');
    // =============================== Style ===============================
    var getStyle = function getStyle() {
      return {
        left: '50%',
        transform: 'translateX(-50%)',
        top: top !== null && top !== void 0 ? top : DEFAULT_OFFSET
      };
    };
    var getClassName = function getClassName() {
      return (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-rtl"), rtl !== null && rtl !== void 0 ? rtl : direction === 'rtl'));
    };
    // ============================== Motion ===============================
    var getNotificationMotion = function getNotificationMotion() {
      return (0, _util.getMotion)(prefixCls, transitionName);
    };
    // ============================ Close Icon =============================
    var mergedCloseIcon = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-close-x")
    }, /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
      className: "".concat(prefixCls, "-close-icon")
    }));
    // ============================== Origin ===============================
    var _useRcNotification = (0, _rcNotification.useNotification)({
        prefixCls: prefixCls,
        style: getStyle,
        className: getClassName,
        motion: getNotificationMotion,
        closable: false,
        closeIcon: mergedCloseIcon,
        duration: duration,
        getContainer: function getContainer() {
          return (staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body;
        },
        maxCount: maxCount,
        onAllRemoved: onAllRemoved,
        renderNotifications: renderNotifications
      }),
      _useRcNotification2 = _slicedToArray(_useRcNotification, 2),
      api = _useRcNotification2[0],
      holder = _useRcNotification2[1];
    // ================================ Ref ================================
    React.useImperativeHandle(ref, function () {
      return Object.assign(Object.assign({}, api), {
        prefixCls: prefixCls,
        message: message
      });
    });
    return holder;
  });
  // ==============================================================================
  // ==                                   Hook                                   ==
  // ==============================================================================
  var keyIndex = 0;
  function useInternalMessage(messageConfig) {
    var holderRef = React.useRef(null);
    var warning = (0, _warning.devUseWarning)('Message');
    // ================================ API ================================
    var wrapAPI = React.useMemo(function () {
      // Wrap with notification content
      // >>> close
      var close = function close(key) {
        var _a;
        (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
      };
      // >>> Open
      var open = function open(config) {
        if (!holderRef.current) {
          process.env.NODE_ENV !== "production" ? warning(false, 'usage', 'You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.') : void 0;
          var fakeResult = function fakeResult() {};
          fakeResult.then = function () {};
          return fakeResult;
        }
        var _holderRef$current = holderRef.current,
          originOpen = _holderRef$current.open,
          prefixCls = _holderRef$current.prefixCls,
          message = _holderRef$current.message;
        var noticePrefixCls = "".concat(prefixCls, "-notice");
        var content = config.content,
          icon = config.icon,
          type = config.type,
          key = config.key,
          className = config.className,
          style = config.style,
          _onClose = config.onClose,
          restConfig = __rest(config, ["content", "icon", "type", "key", "className", "style", "onClose"]);
        var mergedKey = key;
        if (mergedKey === undefined || mergedKey === null) {
          keyIndex += 1;
          mergedKey = "antd-message-".concat(keyIndex);
        }
        return (0, _util.wrapPromiseFn)(function (resolve) {
          originOpen(Object.assign(Object.assign({}, restConfig), {
            key: mergedKey,
            content: ( /*#__PURE__*/React.createElement(_PurePanel.PureContent, {
              prefixCls: prefixCls,
              type: type,
              icon: icon
            }, content)),
            placement: 'top',
            className: (0, _classnames["default"])(type && "".concat(noticePrefixCls, "-").concat(type), className, message === null || message === void 0 ? void 0 : message.className),
            style: Object.assign(Object.assign({}, message === null || message === void 0 ? void 0 : message.style), style),
            onClose: function onClose() {
              _onClose === null || _onClose === void 0 ? void 0 : _onClose();
              resolve();
            }
          }));
          // Return close function
          return function () {
            close(mergedKey);
          };
        });
      };
      // >>> destroy
      var destroy = function destroy(key) {
        var _a;
        if (key !== undefined) {
          close(key);
        } else {
          (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
        }
      };
      var clone = {
        open: open,
        destroy: destroy
      };
      var keys = ['info', 'success', 'warning', 'error', 'loading'];
      keys.forEach(function (type) {
        var typeOpen = function typeOpen(jointContent, duration, onClose) {
          var config;
          if (jointContent && _typeof(jointContent) === 'object' && 'content' in jointContent) {
            config = jointContent;
          } else {
            config = {
              content: jointContent
            };
          }
          // Params
          var mergedDuration;
          var mergedOnClose;
          if (typeof duration === 'function') {
            mergedOnClose = duration;
          } else {
            mergedDuration = duration;
            mergedOnClose = onClose;
          }
          var mergedConfig = Object.assign(Object.assign({
            onClose: mergedOnClose,
            duration: mergedDuration
          }, config), {
            type: type
          });
          return open(mergedConfig);
        };
        clone[type] = typeOpen;
      });
      return clone;
    }, []);
    // ============================== Return ===============================
    return [wrapAPI, /*#__PURE__*/React.createElement(Holder, Object.assign({
      key: "message-holder"
    }, messageConfig, {
      ref: holderRef
    }))];
  }
  function useMessage(messageConfig) {
    return useInternalMessage(messageConfig);
  }
});