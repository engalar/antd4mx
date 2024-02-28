define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getMotion = getMotion;
  _exports.wrapPromiseFn = wrapPromiseFn;
  function getMotion(prefixCls, transitionName) {
    return {
      motionName: transitionName !== null && transitionName !== void 0 ? transitionName : "".concat(prefixCls, "-move-up")
    };
  }
  /** Wrap message open with promise like function */
  function wrapPromiseFn(openFn) {
    var closeFn;
    var closePromise = new Promise(function (resolve) {
      closeFn = openFn(function () {
        resolve(true);
      });
    });
    var result = function result() {
      closeFn === null || closeFn === void 0 ? void 0 : closeFn();
    };
    result.then = function (filled, rejected) {
      return closePromise.then(filled, rejected);
    };
    result.promise = closePromise;
    return result;
  }
});