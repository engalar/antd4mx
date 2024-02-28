define(["exports", "react", "rc-util/es/raf", "rc-util"], function (_exports, _react, _raf, _rcUtil) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useRafDebounce;
  /**
   * Callback will only execute last one for each raf
   */
  function useRafDebounce(callback) {
    var executeRef = _react["default"].useRef(false);
    var rafRef = _react["default"].useRef();
    var wrapperCallback = (0, _rcUtil.useEvent)(callback);
    return function () {
      if (executeRef.current) {
        return;
      }
      executeRef.current = true;
      wrapperCallback();
      rafRef.current = (0, _raf["default"])(function () {
        executeRef.current = false;
      });
    };
  }
});