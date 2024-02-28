define(["exports", "react", "antd4mx/_util/warning", "antd4mx/modal/locale", "antd4mx/locale/context", "./useLocale"], function (_exports, React, _warning, _locale, _context, _useLocale) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.ANT_MARK = void 0;
  Object.defineProperty(_exports, "useLocale", {
    enumerable: true,
    get: function get() {
      return _useLocale["default"];
    }
  });
  var ANT_MARK = _exports.ANT_MARK = 'internalMark';
  var LocaleProvider = function LocaleProvider(props) {
    var _props$locale = props.locale,
      locale = _props$locale === void 0 ? {} : _props$locale,
      children = props.children,
      _ANT_MARK__ = props._ANT_MARK__;
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('LocaleProvider');
      process.env.NODE_ENV !== "production" ? warning(_ANT_MARK__ === ANT_MARK, 'deprecated', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale') : void 0;
    }
    React.useEffect(function () {
      var clearLocale = (0, _locale.changeConfirmLocale)(locale && locale.Modal);
      return clearLocale;
    }, [locale]);
    var getMemoizedContextValue = React.useMemo(function () {
      return Object.assign(Object.assign({}, locale), {
        exist: true
      });
    }, [locale]);
    return /*#__PURE__*/React.createElement(_context["default"].Provider, {
      value: getMemoizedContextValue
    }, children);
  };
  if (process.env.NODE_ENV !== 'production') {
    LocaleProvider.displayName = 'LocaleProvider';
  }
  var _default = _exports["default"] = LocaleProvider;
});