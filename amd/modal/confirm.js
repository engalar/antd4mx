define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "rc-util/es/React/render", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/modal/ConfirmDialog", "antd4mx/modal/destroyFns", "antd4mx/modal/locale"], function (_exports, _toConsumableArray2, _react, _render, _warning, _index, _ConfirmDialog, _destroyFns, _locale) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = confirm;
  _exports.modalGlobalConfig = modalGlobalConfig;
  _exports.withConfirm = withConfirm;
  _exports.withError = withError;
  _exports.withInfo = withInfo;
  _exports.withSuccess = withSuccess;
  _exports.withWarn = withWarn;
  var defaultRootPrefixCls = '';
  function getRootPrefixCls() {
    return defaultRootPrefixCls;
  }
  var ConfirmDialogWrapper = function ConfirmDialogWrapper(props) {
    var _a, _b;
    var customizePrefixCls = props.prefixCls,
      getContainer = props.getContainer,
      direction = props.direction;
    var runtimeLocale = (0, _locale.getConfirmLocale)();
    var config = (0, _react.useContext)(_index.ConfigContext);
    var rootPrefixCls = getRootPrefixCls() || config.getPrefixCls();
    // because Modal.config set rootPrefixCls, which is different from other components
    var prefixCls = customizePrefixCls || "".concat(rootPrefixCls, "-modal");
    var mergedGetContainer = getContainer;
    if (mergedGetContainer === false) {
      mergedGetContainer = undefined;
      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'Modal', 'Static method not support `getContainer` to be `false` since it do not have context env.') : void 0;
      }
    }
    return /*#__PURE__*/_react["default"].createElement(_ConfirmDialog["default"], Object.assign({}, props, {
      rootPrefixCls: rootPrefixCls,
      prefixCls: prefixCls,
      iconPrefixCls: config.iconPrefixCls,
      theme: config.theme,
      direction: direction !== null && direction !== void 0 ? direction : config.direction,
      locale: (_b = (_a = config.locale) === null || _a === void 0 ? void 0 : _a.Modal) !== null && _b !== void 0 ? _b : runtimeLocale,
      getContainer: mergedGetContainer
    }));
  };
  function confirm(config) {
    var global = (0, _index.globalConfig)();
    if (process.env.NODE_ENV !== 'production' && !global.holderRender) {
      (0, _index.warnContext)('Modal');
    }
    var container = document.createDocumentFragment();
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    var currentConfig = Object.assign(Object.assign({}, config), {
      close: close,
      open: true
    });
    var timeoutId;
    function destroy() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var triggerCancel = args.some(function (param) {
        return param && param.triggerCancel;
      });
      if (config.onCancel && triggerCancel) {
        config.onCancel.apply(config, [function () {}].concat((0, _toConsumableArray2["default"])(args.slice(1))));
      }
      for (var i = 0; i < _destroyFns["default"].length; i++) {
        var fn = _destroyFns["default"][i];
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        if (fn === close) {
          _destroyFns["default"].splice(i, 1);
          break;
        }
      }
      (0, _render.unmount)(container);
    }
    function render(props) {
      clearTimeout(timeoutId);
      /**
       * https://github.com/ant-design/ant-design/issues/23623
       *
       * Sync render blocks React event. Let's make this async.
       */
      timeoutId = setTimeout(function () {
        var rootPrefixCls = global.getPrefixCls(undefined, getRootPrefixCls());
        var iconPrefixCls = global.getIconPrefixCls();
        var theme = global.getTheme();
        var dom = /*#__PURE__*/_react["default"].createElement(ConfirmDialogWrapper, Object.assign({}, props));
        (0, _render.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
          prefixCls: rootPrefixCls,
          iconPrefixCls: iconPrefixCls,
          theme: theme
        }, global.holderRender ? global.holderRender(dom) : dom), container);
      });
    }
    function close() {
      var _this = this;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      currentConfig = Object.assign(Object.assign({}, currentConfig), {
        open: false,
        afterClose: function afterClose() {
          if (typeof config.afterClose === 'function') {
            config.afterClose();
          }
          destroy.apply(_this, args);
        }
      });
      // Legacy support
      if (currentConfig.visible) {
        delete currentConfig.visible;
      }
      render(currentConfig);
    }
    function update(configUpdate) {
      if (typeof configUpdate === 'function') {
        currentConfig = configUpdate(currentConfig);
      } else {
        currentConfig = Object.assign(Object.assign({}, currentConfig), configUpdate);
      }
      render(currentConfig);
    }
    render(currentConfig);
    _destroyFns["default"].push(close);
    return {
      destroy: close,
      update: update
    };
  }
  function withWarn(props) {
    return Object.assign(Object.assign({}, props), {
      type: 'warning'
    });
  }
  function withInfo(props) {
    return Object.assign(Object.assign({}, props), {
      type: 'info'
    });
  }
  function withSuccess(props) {
    return Object.assign(Object.assign({}, props), {
      type: 'success'
    });
  }
  function withError(props) {
    return Object.assign(Object.assign({}, props), {
      type: 'error'
    });
  }
  function withConfirm(props) {
    return Object.assign(Object.assign({}, props), {
      type: 'confirm'
    });
  }
  function modalGlobalConfig(_ref) {
    var rootPrefixCls = _ref.rootPrefixCls;
    process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'Modal', 'Modal.config is deprecated. Please use ConfigProvider.config instead.') : void 0;
    defaultRootPrefixCls = rootPrefixCls;
  }
});