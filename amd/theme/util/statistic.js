define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports._statistic_build_ = void 0;
  _exports.merge = merge;
  _exports.statistic = void 0;
  var enableStatistic = process.env.NODE_ENV !== 'production' || typeof CSSINJS_STATISTIC !== 'undefined';
  var recording = true;
  /**
   * This function will do as `Object.assign` in production. But will use Object.defineProperty:get to
   * pass all value access in development. To support statistic field usage with alias token.
   */
  function merge() {
    for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
      objs[_key] = arguments[_key];
    }
    /* istanbul ignore next */
    if (!enableStatistic) {
      return Object.assign.apply(Object, [{}].concat(objs));
    }
    recording = false;
    var ret = {};
    objs.forEach(function (obj) {
      var keys = Object.keys(obj);
      keys.forEach(function (key) {
        Object.defineProperty(ret, key, {
          configurable: true,
          enumerable: true,
          get: function get() {
            return obj[key];
          }
        });
      });
    });
    recording = true;
    return ret;
  }
  /** @internal Internal Usage. Not use in your production. */
  var statistic = _exports.statistic = {};
  /** @internal Internal Usage. Not use in your production. */
  // eslint-disable-next-line camelcase
  var _statistic_build_ = _exports._statistic_build_ = {};
  /* istanbul ignore next */
  function noop() {}
  /** Statistic token usage case. Should use `merge` function if you do not want spread record. */
  var statisticToken = function statisticToken(token) {
    var tokenKeys;
    var proxy = token;
    var flush = noop;
    if (enableStatistic && typeof Proxy !== 'undefined') {
      tokenKeys = new Set();
      proxy = new Proxy(token, {
        get: function get(obj, prop) {
          if (recording) {
            tokenKeys.add(prop);
          }
          return obj[prop];
        }
      });
      flush = function flush(componentName, componentToken) {
        var _a;
        statistic[componentName] = {
          global: Array.from(tokenKeys),
          component: Object.assign(Object.assign({}, (_a = statistic[componentName]) === null || _a === void 0 ? void 0 : _a.component), componentToken)
        };
      };
    }
    return {
      token: proxy,
      keys: tokenKeys,
      flush: flush
    };
  };
  var _default = _exports["default"] = statisticToken;
});