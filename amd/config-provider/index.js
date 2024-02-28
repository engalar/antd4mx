define(["exports", "react", "@ant-design/cssinjs", "@ant-design/icons/es/components/Context", "rc-util/es/hooks/useMemo", "rc-util/es/utils/set", "antd4mx/_util/warning", "antd4mx/form/validateMessagesContext", "antd4mx/locale", "antd4mx/locale/context", "antd4mx/locale/en_US", "antd4mx/theme/context", "antd4mx/theme/themes/seed", "antd4mx/config-provider/context", "antd4mx/config-provider/cssVariables", "antd4mx/config-provider/DisabledContext", "antd4mx/config-provider/hooks/useConfig", "antd4mx/config-provider/hooks/useTheme", "antd4mx/config-provider/MotionWrapper", "antd4mx/config-provider/PropWarning", "antd4mx/config-provider/SizeContext", "antd4mx/config-provider/style"], function (_exports, React, _cssinjs, _Context, _useMemo, _set, _warning, _validateMessagesContext, _locale, _context, _en_US, _context2, _seed, _context3, _cssVariables, _DisabledContext, _useConfig, _useTheme, _MotionWrapper, _PropWarning, _SizeContext, _style) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "ConfigConsumer", {
    enumerable: true,
    get: function get() {
      return _context3.ConfigConsumer;
    }
  });
  Object.defineProperty(_exports, "ConfigContext", {
    enumerable: true,
    get: function get() {
      return _context3.ConfigContext;
    }
  });
  _exports["default"] = _exports.configConsumerProps = void 0;
  Object.defineProperty(_exports, "defaultIconPrefixCls", {
    enumerable: true,
    get: function get() {
      return _context3.defaultIconPrefixCls;
    }
  });
  _exports.warnContext = _exports.globalConfig = _exports.defaultPrefixCls = void 0;
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
  /**
   * Since too many feedback using static method like `Modal.confirm` not getting theme, we record the
   * theme register info here to help developer get warning info.
   */
  var existThemeConfig = false;
  var warnContext = _exports.warnContext = process.env.NODE_ENV !== 'production' ? function (componentName) {
    process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!existThemeConfig, componentName, "Static function can not consume context like dynamic theme. Please use 'App' component instead.") : void 0;
  } : /* istanbul ignore next */
  null;
  var configConsumerProps = _exports.configConsumerProps = ['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale'];
  // These props is used by `useContext` directly in sub component
  var PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'input', 'pagination', 'form', 'select', 'button'];
  var defaultPrefixCls = _exports.defaultPrefixCls = 'ant';
  var globalPrefixCls;
  var globalIconPrefixCls;
  var globalTheme;
  var globalHolderRender;
  function getGlobalPrefixCls() {
    return globalPrefixCls || defaultPrefixCls;
  }
  function getGlobalIconPrefixCls() {
    return globalIconPrefixCls || _context3.defaultIconPrefixCls;
  }
  function isLegacyTheme(theme) {
    return Object.keys(theme).some(function (key) {
      return key.endsWith('Color');
    });
  }
  var setGlobalConfig = function setGlobalConfig(props) {
    var prefixCls = props.prefixCls,
      iconPrefixCls = props.iconPrefixCls,
      theme = props.theme,
      holderRender = props.holderRender;
    if (prefixCls !== undefined) {
      globalPrefixCls = prefixCls;
    }
    if (iconPrefixCls !== undefined) {
      globalIconPrefixCls = iconPrefixCls;
    }
    if ('holderRender' in props) {
      globalHolderRender = holderRender;
    }
    if (theme) {
      if (isLegacyTheme(theme)) {
        process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'ConfigProvider', '`config` of css variable theme is not work in v5. Please use new `theme` config instead.') : void 0;
        (0, _cssVariables.registerTheme)(getGlobalPrefixCls(), theme);
      } else {
        globalTheme = theme;
      }
    }
  };
  var globalConfig = _exports.globalConfig = function globalConfig() {
    return {
      getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
        if (customizePrefixCls) {
          return customizePrefixCls;
        }
        return suffixCls ? "".concat(getGlobalPrefixCls(), "-").concat(suffixCls) : getGlobalPrefixCls();
      },
      getIconPrefixCls: getGlobalIconPrefixCls,
      getRootPrefixCls: function getRootPrefixCls() {
        // If Global prefixCls provided, use this
        if (globalPrefixCls) {
          return globalPrefixCls;
        }
        // Fallback to default prefixCls
        return getGlobalPrefixCls();
      },
      getTheme: function getTheme() {
        return globalTheme;
      },
      holderRender: globalHolderRender
    };
  };
  var ProviderChildren = function ProviderChildren(props) {
    var children = props.children,
      customCsp = props.csp,
      autoInsertSpaceInButton = props.autoInsertSpaceInButton,
      alert = props.alert,
      anchor = props.anchor,
      form = props.form,
      locale = props.locale,
      componentSize = props.componentSize,
      direction = props.direction,
      space = props.space,
      virtual = props.virtual,
      dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
      popupMatchSelectWidth = props.popupMatchSelectWidth,
      popupOverflow = props.popupOverflow,
      legacyLocale = props.legacyLocale,
      parentContext = props.parentContext,
      customIconPrefixCls = props.iconPrefixCls,
      theme = props.theme,
      componentDisabled = props.componentDisabled,
      segmented = props.segmented,
      statistic = props.statistic,
      spin = props.spin,
      calendar = props.calendar,
      carousel = props.carousel,
      cascader = props.cascader,
      collapse = props.collapse,
      typography = props.typography,
      checkbox = props.checkbox,
      descriptions = props.descriptions,
      divider = props.divider,
      drawer = props.drawer,
      skeleton = props.skeleton,
      steps = props.steps,
      image = props.image,
      layout = props.layout,
      list = props.list,
      mentions = props.mentions,
      modal = props.modal,
      progress = props.progress,
      result = props.result,
      slider = props.slider,
      breadcrumb = props.breadcrumb,
      menu = props.menu,
      pagination = props.pagination,
      input = props.input,
      empty = props.empty,
      badge = props.badge,
      radio = props.radio,
      rate = props.rate,
      SWITCH = props["switch"],
      transfer = props.transfer,
      avatar = props.avatar,
      message = props.message,
      tag = props.tag,
      table = props.table,
      card = props.card,
      tabs = props.tabs,
      timeline = props.timeline,
      timePicker = props.timePicker,
      upload = props.upload,
      notification = props.notification,
      tree = props.tree,
      colorPicker = props.colorPicker,
      datePicker = props.datePicker,
      rangePicker = props.rangePicker,
      flex = props.flex,
      wave = props.wave,
      dropdown = props.dropdown,
      warningConfig = props.warning,
      tour = props.tour;
    // =================================== Context ===================================
    var getPrefixCls = React.useCallback(function (suffixCls, customizePrefixCls) {
      var prefixCls = props.prefixCls;
      if (customizePrefixCls) {
        return customizePrefixCls;
      }
      var mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
      return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
    }, [parentContext.getPrefixCls, props.prefixCls]);
    var iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || _context3.defaultIconPrefixCls;
    var csp = customCsp || parentContext.csp;
    (0, _style["default"])(iconPrefixCls, csp);
    var mergedTheme = (0, _useTheme["default"])(theme, parentContext.theme);
    if (process.env.NODE_ENV !== 'production') {
      existThemeConfig = existThemeConfig || !!mergedTheme;
    }
    var baseConfig = {
      csp: csp,
      autoInsertSpaceInButton: autoInsertSpaceInButton,
      alert: alert,
      anchor: anchor,
      locale: locale || legacyLocale,
      direction: direction,
      space: space,
      virtual: virtual,
      popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
      popupOverflow: popupOverflow,
      getPrefixCls: getPrefixCls,
      iconPrefixCls: iconPrefixCls,
      theme: mergedTheme,
      segmented: segmented,
      statistic: statistic,
      spin: spin,
      calendar: calendar,
      carousel: carousel,
      cascader: cascader,
      collapse: collapse,
      typography: typography,
      checkbox: checkbox,
      descriptions: descriptions,
      divider: divider,
      drawer: drawer,
      skeleton: skeleton,
      steps: steps,
      image: image,
      input: input,
      layout: layout,
      list: list,
      mentions: mentions,
      modal: modal,
      progress: progress,
      result: result,
      slider: slider,
      breadcrumb: breadcrumb,
      menu: menu,
      pagination: pagination,
      empty: empty,
      badge: badge,
      radio: radio,
      rate: rate,
      "switch": SWITCH,
      transfer: transfer,
      avatar: avatar,
      message: message,
      tag: tag,
      table: table,
      card: card,
      tabs: tabs,
      timeline: timeline,
      timePicker: timePicker,
      upload: upload,
      notification: notification,
      tree: tree,
      colorPicker: colorPicker,
      datePicker: datePicker,
      rangePicker: rangePicker,
      flex: flex,
      wave: wave,
      dropdown: dropdown,
      warning: warningConfig,
      tour: tour
    };
    var config = Object.assign({}, parentContext);
    Object.keys(baseConfig).forEach(function (key) {
      if (baseConfig[key] !== undefined) {
        config[key] = baseConfig[key];
      }
    });
    // Pass the props used by `useContext` directly with child component.
    // These props should merged into `config`.
    PASSED_PROPS.forEach(function (propName) {
      var propValue = props[propName];
      if (propValue) {
        config[propName] = propValue;
      }
    });
    // https://github.com/ant-design/ant-design/issues/27617
    var memoedConfig = (0, _useMemo["default"])(function () {
      return config;
    }, config, function (prevConfig, currentConfig) {
      var prevKeys = Object.keys(prevConfig);
      var currentKeys = Object.keys(currentConfig);
      return prevKeys.length !== currentKeys.length || prevKeys.some(function (key) {
        return prevConfig[key] !== currentConfig[key];
      });
    });
    var memoIconContextValue = React.useMemo(function () {
      return {
        prefixCls: iconPrefixCls,
        csp: csp
      };
    }, [iconPrefixCls, csp]);
    var childNode = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_PropWarning["default"], {
      dropdownMatchSelectWidth: dropdownMatchSelectWidth
    }), children);
    var validateMessages = React.useMemo(function () {
      var _a, _b, _c, _d;
      return (0, _set.merge)(((_a = _en_US["default"].Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) === null || _b === void 0 ? void 0 : _b.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, ((_d = memoedConfig.form) === null || _d === void 0 ? void 0 : _d.validateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
    }, [memoedConfig, form === null || form === void 0 ? void 0 : form.validateMessages]);
    if (Object.keys(validateMessages).length > 0) {
      childNode = /*#__PURE__*/React.createElement(_validateMessagesContext["default"].Provider, {
        value: validateMessages
      }, childNode);
    }
    if (locale) {
      childNode = /*#__PURE__*/React.createElement(_locale["default"], {
        locale: locale,
        _ANT_MARK__: _locale.ANT_MARK
      }, childNode);
    }
    if (iconPrefixCls || csp) {
      childNode = /*#__PURE__*/React.createElement(_Context["default"].Provider, {
        value: memoIconContextValue
      }, childNode);
    }
    if (componentSize) {
      childNode = /*#__PURE__*/React.createElement(_SizeContext.SizeContextProvider, {
        size: componentSize
      }, childNode);
    }
    // =================================== Motion ===================================
    childNode = /*#__PURE__*/React.createElement(_MotionWrapper["default"], null, childNode);
    // ================================ Dynamic theme ================================
    var memoTheme = React.useMemo(function () {
      var _a = mergedTheme || {},
        algorithm = _a.algorithm,
        token = _a.token,
        components = _a.components,
        cssVar = _a.cssVar,
        rest = __rest(_a, ["algorithm", "token", "components", "cssVar"]);
      var themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? (0, _cssinjs.createTheme)(algorithm) : _context2.defaultTheme;
      var parsedComponents = {};
      Object.entries(components || {}).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          componentName = _ref2[0],
          componentToken = _ref2[1];
        var parsedToken = Object.assign({}, componentToken);
        if ('algorithm' in parsedToken) {
          if (parsedToken.algorithm === true) {
            parsedToken.theme = themeObj;
          } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === 'function') {
            parsedToken.theme = (0, _cssinjs.createTheme)(parsedToken.algorithm);
          }
          delete parsedToken.algorithm;
        }
        parsedComponents[componentName] = parsedToken;
      });
      var mergedToken = Object.assign(Object.assign({}, _seed["default"]), token);
      return Object.assign(Object.assign({}, rest), {
        theme: themeObj,
        token: mergedToken,
        components: parsedComponents,
        override: Object.assign({
          override: mergedToken
        }, parsedComponents),
        cssVar: cssVar
      });
    }, [mergedTheme]);
    if (theme) {
      childNode = /*#__PURE__*/React.createElement(_context2.DesignTokenContext.Provider, {
        value: memoTheme
      }, childNode);
    }
    // ================================== Warning ===================================
    if (memoedConfig.warning) {
      childNode = /*#__PURE__*/React.createElement(_warning.WarningContext.Provider, {
        value: memoedConfig.warning
      }, childNode);
    }
    // =================================== Render ===================================
    if (componentDisabled !== undefined) {
      childNode = /*#__PURE__*/React.createElement(_DisabledContext.DisabledContextProvider, {
        disabled: componentDisabled
      }, childNode);
    }
    return /*#__PURE__*/React.createElement(_context3.ConfigContext.Provider, {
      value: memoedConfig
    }, childNode);
  };
  var ConfigProvider = function ConfigProvider(props) {
    var context = React.useContext(_context3.ConfigContext);
    var antLocale = React.useContext(_context["default"]);
    return /*#__PURE__*/React.createElement(ProviderChildren, Object.assign({
      parentContext: context,
      legacyLocale: antLocale
    }, props));
  };
  ConfigProvider.ConfigContext = _context3.ConfigContext;
  ConfigProvider.SizeContext = _SizeContext["default"];
  ConfigProvider.config = setGlobalConfig;
  ConfigProvider.useConfig = _useConfig["default"];
  Object.defineProperty(ConfigProvider, 'SizeContext', {
    get: function get() {
      process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'ConfigProvider', 'ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead.') : void 0;
      return _SizeContext["default"];
    }
  });
  if (process.env.NODE_ENV !== 'production') {
    ConfigProvider.displayName = 'ConfigProvider';
  }
  var _default = _exports["default"] = ConfigProvider;
});