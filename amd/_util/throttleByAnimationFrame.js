define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "rc-util/es/raf"], function (_exports, _toConsumableArray2, _raf) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function throttleByAnimationFrame(fn) {
    var requestId;
    var later = function later(args) {
      return function () {
        requestId = null;
        fn.apply(void 0, (0, _toConsumableArray2["default"])(args));
      };
    };
    var throttled = function throttled() {
      if (requestId == null) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        requestId = (0, _raf["default"])(later(args));
      }
    };
    throttled.cancel = function () {
      _raf["default"].cancel(requestId);
      requestId = null;
    };
    return throttled;
  }
  var _default = _exports["default"] = throttleByAnimationFrame;
});