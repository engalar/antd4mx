define(["exports", "react", "rc-util/es/warning"], function (_exports, React, _warning) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.devUseWarning = _exports["default"] = _exports.WarningContext = void 0;
  _exports.noop = noop;
  _exports.resetWarned = resetWarned;
  function noop() {}
  var deprecatedWarnList = null;
  function resetWarned() {
    deprecatedWarnList = null;
    (0, _warning.resetWarned)();
  }
  // eslint-disable-next-line import/no-mutable-exports
  var warning = noop;
  if (process.env.NODE_ENV !== 'production') {
    warning = function warning(valid, component, message) {
      (0, _warning["default"])(valid, "[antd: ".concat(component, "] ").concat(message));
      // StrictMode will inject console which will not throw warning in React 17.
      if (process.env.NODE_ENV === 'test') {
        resetWarned();
      }
    };
  }
  var WarningContext = _exports.WarningContext = /*#__PURE__*/React.createContext({});
  /**
   * This is a hook but we not named as `useWarning`
   * since this is only used in development.
   * We should always wrap this in `if (process.env.NODE_ENV !== 'production')` condition
   */
  var devUseWarning = _exports.devUseWarning = process.env.NODE_ENV !== 'production' ? function (component) {
    var _React$useContext = React.useContext(WarningContext),
      strict = _React$useContext.strict;
    var typeWarning = function typeWarning(valid, type, message) {
      if (!valid) {
        if (strict === false && type === 'deprecated') {
          var existWarning = deprecatedWarnList;
          if (!deprecatedWarnList) {
            deprecatedWarnList = {};
          }
          deprecatedWarnList[component] = deprecatedWarnList[component] || [];
          if (!deprecatedWarnList[component].includes(message || '')) {
            deprecatedWarnList[component].push(message || '');
          }
          // Warning for the first time
          if (!existWarning) {
            // eslint-disable-next-line no-console
            console.warn('[antd] There exists deprecated usage in your code:', deprecatedWarnList);
          }
        } else {
          process.env.NODE_ENV !== "production" ? warning(valid, component, message) : void 0;
        }
      }
    };
    typeWarning.deprecated = function (valid, oldProp, newProp, message) {
      typeWarning(valid, 'deprecated', "`".concat(oldProp, "` is deprecated. Please use `").concat(newProp, "` instead.").concat(message ? " ".concat(message) : ''));
    };
    return typeWarning;
  } : function () {
    var noopWarning = function noopWarning() {};
    noopWarning.deprecated = noop;
    return noopWarning;
  };
  var _default = _exports["default"] = warning;
});