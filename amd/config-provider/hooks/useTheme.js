define(["exports", "rc-util/es/hooks/useMemo", "rc-util/es/isEqual", "antd4mx/theme/internal", "antd4mx/config-provider/hooks/useThemeKey", "antd4mx/_util/warning"], function (_exports, _useMemo, _isEqual, _internal, _useThemeKey, _warning) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useTheme;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function useTheme(theme, parentTheme) {
    var _a, _b;
    var warning = (0, _warning.devUseWarning)('ConfigProvider');
    var themeConfig = theme || {};
    var parentThemeConfig = themeConfig.inherit === false || !parentTheme ? Object.assign(Object.assign({}, _internal.defaultConfig), {
      hashed: (_a = parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.hashed) !== null && _a !== void 0 ? _a : _internal.defaultConfig.hashed,
      cssVar: parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.cssVar
    }) : parentTheme;
    var themeKey = (0, _useThemeKey["default"])();
    if (process.env.NODE_ENV !== 'production') {
      var cssVarEnabled = themeConfig.cssVar || parentThemeConfig.cssVar;
      var validKey = !!(_typeof(themeConfig.cssVar) === 'object' && ((_b = themeConfig.cssVar) === null || _b === void 0 ? void 0 : _b.key) || themeKey);
      process.env.NODE_ENV !== "production" ? warning(!cssVarEnabled || validKey, 'breaking', 'Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.') : void 0;
    }
    return (0, _useMemo["default"])(function () {
      var _a, _b;
      if (!theme) {
        return parentTheme;
      }
      // Override
      var mergedComponents = Object.assign({}, parentThemeConfig.components);
      Object.keys(theme.components || {}).forEach(function (componentName) {
        mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
      });
      var cssVarKey = "css-var-".concat(themeKey.replace(/:/g, ''));
      var mergedCssVar = ((_a = themeConfig.cssVar) !== null && _a !== void 0 ? _a : parentThemeConfig.cssVar) && Object.assign(Object.assign(Object.assign({
        prefix: 'ant'
      }, _typeof(parentThemeConfig.cssVar) === 'object' ? parentThemeConfig.cssVar : {}), _typeof(themeConfig.cssVar) === 'object' ? themeConfig.cssVar : {}), {
        key: _typeof(themeConfig.cssVar) === 'object' && ((_b = themeConfig.cssVar) === null || _b === void 0 ? void 0 : _b.key) || cssVarKey
      });
      // Base token
      return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
        token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
        components: mergedComponents,
        cssVar: mergedCssVar
      });
    }, [themeConfig, parentThemeConfig], function (prev, next) {
      return prev.some(function (prevTheme, index) {
        var nextTheme = next[index];
        return !(0, _isEqual["default"])(prevTheme, nextTheme, true);
      });
    });
  }
});