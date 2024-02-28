define(["exports", "react", "antd4mx/locale/context", "antd4mx/locale/en_US"], function (_exports, React, _context, _en_US) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var useLocale = function useLocale(componentName, defaultLocale) {
    var fullLocale = React.useContext(_context["default"]);
    var getLocale = React.useMemo(function () {
      var _a;
      var locale = defaultLocale || _en_US["default"][componentName];
      var localeFromContext = (_a = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale[componentName]) !== null && _a !== void 0 ? _a : {};
      return Object.assign(Object.assign({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
    }, [componentName, defaultLocale, fullLocale]);
    var getLocaleCode = React.useMemo(function () {
      var localeCode = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.locale;
      // Had use LocaleProvide but didn't set locale
      if ((fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.exist) && !localeCode) {
        return _en_US["default"].locale;
      }
      return localeCode;
    }, [fullLocale]);
    return [getLocale, getLocaleCode];
  };
  var _default = _exports["default"] = useLocale;
});