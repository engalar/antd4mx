define(["exports", "react", "classnames", "antd4mx/config-provider/index", "antd4mx/message/useMessage", "antd4mx/modal/useModal/index", "antd4mx/notification/useNotification", "antd4mx/app/context", "antd4mx/app/style/index"], function (_exports, _react, _classnames, _index, _useMessage3, _index2, _useNotification3, _context, _index3) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var useApp = function useApp() {
    return _react["default"].useContext(_context["default"]);
  };
  var App = function App(props) {
    var customizePrefixCls = props.prefixCls,
      children = props.children,
      className = props.className,
      rootClassName = props.rootClassName,
      message = props.message,
      notification = props.notification,
      style = props.style,
      _props$component = props.component,
      component = _props$component === void 0 ? 'div' : _props$component;
    var _useContext = (0, _react.useContext)(_index.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;
    var prefixCls = getPrefixCls('app', customizePrefixCls);
    var _useStyle = (0, _index3["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var customClassName = (0, _classnames["default"])(hashId, prefixCls, className, rootClassName, cssVarCls);
    var appConfig = (0, _react.useContext)(_context.AppConfigContext);
    var mergedAppConfig = _react["default"].useMemo(function () {
      return {
        message: Object.assign(Object.assign({}, appConfig.message), message),
        notification: Object.assign(Object.assign({}, appConfig.notification), notification)
      };
    }, [message, notification, appConfig.message, appConfig.notification]);
    var _useMessage = (0, _useMessage3["default"])(mergedAppConfig.message),
      _useMessage2 = _slicedToArray(_useMessage, 2),
      messageApi = _useMessage2[0],
      messageContextHolder = _useMessage2[1];
    var _useNotification = (0, _useNotification3["default"])(mergedAppConfig.notification),
      _useNotification2 = _slicedToArray(_useNotification, 2),
      notificationApi = _useNotification2[0],
      notificationContextHolder = _useNotification2[1];
    var _useModal = (0, _index2["default"])(),
      _useModal2 = _slicedToArray(_useModal, 2),
      ModalApi = _useModal2[0],
      ModalContextHolder = _useModal2[1];
    var memoizedContextValue = _react["default"].useMemo(function () {
      return {
        message: messageApi,
        notification: notificationApi,
        modal: ModalApi
      };
    }, [messageApi, notificationApi, ModalApi]);
    // ============================ Render ============================
    var Component = component === false ? _react["default"].Fragment : component;
    var rootProps = {
      className: customClassName,
      style: style
    };
    return wrapCSSVar( /*#__PURE__*/_react["default"].createElement(_context["default"].Provider, {
      value: memoizedContextValue
    }, /*#__PURE__*/_react["default"].createElement(_context.AppConfigContext.Provider, {
      value: mergedAppConfig
    }, /*#__PURE__*/_react["default"].createElement(Component, Object.assign({}, component === false ? undefined : rootProps), ModalContextHolder, messageContextHolder, notificationContextHolder, children))));
  };
  if (process.env.NODE_ENV !== 'production') {
    App.displayName = 'App';
  }
  App.useApp = useApp;
  var _default = _exports["default"] = App;
});