define(["exports", "react"], function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useMergedConfig;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function useMergedConfig(propConfig, templateConfig) {
    return React.useMemo(function () {
      var support = !!propConfig;
      return [support, Object.assign(Object.assign({}, templateConfig), support && _typeof(propConfig) === 'object' ? propConfig : null)];
    }, [propConfig]);
  }
});