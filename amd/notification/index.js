define(["exports", "react", "rc-util/es/React/render", "antd4mx/app/context", "antd4mx/config-provider/index", "antd4mx/notification/PurePanel", "antd4mx/notification/useNotification"], function (_exports, _react, _render, _context, _index, _PurePanel, _useNotification) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.actWrapper = _exports.actDestroy = void 0;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var notification = null;
  var act = function act(callback) {
    return callback();
  };
  var taskQueue = [];
  var defaultGlobalConfig = {};
  function getGlobalContext() {
    var _defaultGlobalConfig = defaultGlobalConfig,
      getContainer = _defaultGlobalConfig.getContainer,
      rtl = _defaultGlobalConfig.rtl,
      maxCount = _defaultGlobalConfig.maxCount,
      top = _defaultGlobalConfig.top,
      bottom = _defaultGlobalConfig.bottom;
    var mergedContainer = (getContainer === null || getContainer === void 0 ? void 0 : getContainer()) || document.body;
    return {
      getContainer: function getContainer() {
        return mergedContainer;
      },
      rtl: rtl,
      maxCount: maxCount,
      top: top,
      bottom: bottom
    };
  }
  var GlobalHolder = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
    var notificationConfig = props.notificationConfig,
      sync = props.sync;
    var _useContext = (0, _react.useContext)(_index.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;
    var prefixCls = defaultGlobalConfig.prefixCls || getPrefixCls('notification');
    var appConfig = (0, _react.useContext)(_context.AppConfigContext);
    var _useInternalNotificat = (0, _useNotification.useInternalNotification)(Object.assign(Object.assign(Object.assign({}, notificationConfig), {
        prefixCls: prefixCls
      }), appConfig.notification)),
      _useInternalNotificat2 = _slicedToArray(_useInternalNotificat, 2),
      api = _useInternalNotificat2[0],
      holder = _useInternalNotificat2[1];
    _react["default"].useEffect(sync, []);
    _react["default"].useImperativeHandle(ref, function () {
      var instance = Object.assign({}, api);
      Object.keys(instance).forEach(function (method) {
        instance[method] = function () {
          sync();
          return api[method].apply(api, arguments);
        };
      });
      return {
        instance: instance,
        sync: sync
      };
    });
    return holder;
  });
  var GlobalHolderWrapper = /*#__PURE__*/_react["default"].forwardRef(function (_, ref) {
    var _React$useState = _react["default"].useState(getGlobalContext),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      notificationConfig = _React$useState2[0],
      setNotificationConfig = _React$useState2[1];
    var sync = function sync() {
      setNotificationConfig(getGlobalContext);
    };
    _react["default"].useEffect(sync, []);
    var global = (0, _index.globalConfig)();
    var rootPrefixCls = global.getRootPrefixCls();
    var rootIconPrefixCls = global.getIconPrefixCls();
    var theme = global.getTheme();
    var dom = /*#__PURE__*/_react["default"].createElement(GlobalHolder, {
      ref: ref,
      sync: sync,
      notificationConfig: notificationConfig
    });
    return /*#__PURE__*/_react["default"].createElement(_index["default"], {
      prefixCls: rootPrefixCls,
      iconPrefixCls: rootIconPrefixCls,
      theme: theme
    }, global.holderRender ? global.holderRender(dom) : dom);
  });
  function flushNotice() {
    if (!notification) {
      var holderFragment = document.createDocumentFragment();
      var newNotification = {
        fragment: holderFragment
      };
      notification = newNotification;
      // Delay render to avoid sync issue
      act(function () {
        (0, _render.render)( /*#__PURE__*/_react["default"].createElement(GlobalHolderWrapper, {
          ref: function ref(node) {
            var _ref = node || {},
              instance = _ref.instance,
              sync = _ref.sync;
            Promise.resolve().then(function () {
              if (!newNotification.instance && instance) {
                newNotification.instance = instance;
                newNotification.sync = sync;
                flushNotice();
              }
            });
          }
        }), holderFragment);
      });
      return;
    }
    // Notification not ready
    if (!notification.instance) {
      return;
    }
    // >>> Execute task
    taskQueue.forEach(function (task) {
      // eslint-disable-next-line default-case
      switch (task.type) {
        case 'open':
          {
            act(function () {
              notification.instance.open(Object.assign(Object.assign({}, defaultGlobalConfig), task.config));
            });
            break;
          }
        case 'destroy':
          act(function () {
            notification === null || notification === void 0 ? void 0 : notification.instance.destroy(task.key);
          });
          break;
      }
    });
    // Clean up
    taskQueue = [];
  }
  // ==============================================================================
  // ==                                  Export                                  ==
  // ==============================================================================
  function setNotificationGlobalConfig(config) {
    defaultGlobalConfig = Object.assign(Object.assign({}, defaultGlobalConfig), config);
    // Trigger sync for it
    act(function () {
      var _a;
      (_a = notification === null || notification === void 0 ? void 0 : notification.sync) === null || _a === void 0 ? void 0 : _a.call(notification);
    });
  }
  function open(config) {
    var global = (0, _index.globalConfig)();
    if (process.env.NODE_ENV !== 'production' && !global.holderRender) {
      (0, _index.warnContext)('notification');
    }
    taskQueue.push({
      type: 'open',
      config: config
    });
    flushNotice();
  }
  function destroy(key) {
    taskQueue.push({
      type: 'destroy',
      key: key
    });
    flushNotice();
  }
  var methods = ['success', 'info', 'warning', 'error'];
  var baseStaticMethods = {
    open: open,
    destroy: destroy,
    config: setNotificationGlobalConfig,
    useNotification: _useNotification["default"],
    _InternalPanelDoNotUseOrYouWillBeFired: _PurePanel["default"]
  };
  var staticMethods = baseStaticMethods;
  methods.forEach(function (type) {
    staticMethods[type] = function (config) {
      return open(Object.assign(Object.assign({}, config), {
        type: type
      }));
    };
  });
  // ==============================================================================
  // ==                                   Test                                   ==
  // ==============================================================================
  var noop = function noop() {};
  /** @internal Only Work in test env */
  // eslint-disable-next-line import/no-mutable-exports
  var actWrapper = _exports.actWrapper = noop;
  if (process.env.NODE_ENV === 'test') {
    _exports.actWrapper = actWrapper = function actWrapper(wrapper) {
      act = wrapper;
    };
  }
  /** @internal Only Work in test env */
  // eslint-disable-next-line import/no-mutable-exports
  var actDestroy = _exports.actDestroy = noop;
  if (process.env.NODE_ENV === 'test') {
    _exports.actDestroy = actDestroy = function actDestroy() {
      notification = null;
    };
  }
  var _default = _exports["default"] = staticMethods;
});