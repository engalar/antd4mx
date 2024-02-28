define(["exports", "react", "rc-util/es/hooks/useLayoutEffect", "antd4mx/_util/hooks/useForceUpdate", "antd4mx/_util/responsiveObserver"], function (_exports, _react, _useLayoutEffect, _useForceUpdate, _responsiveObserver) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function useBreakpoint() {
    var refreshOnChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var screensRef = (0, _react.useRef)({});
    var forceUpdate = (0, _useForceUpdate["default"])();
    var responsiveObserver = (0, _responsiveObserver["default"])();
    (0, _useLayoutEffect["default"])(function () {
      var token = responsiveObserver.subscribe(function (supportScreens) {
        screensRef.current = supportScreens;
        if (refreshOnChange) {
          forceUpdate();
        }
      });
      return function () {
        return responsiveObserver.unsubscribe(token);
      };
    }, []);
    return screensRef.current;
  }
  var _default = _exports["default"] = useBreakpoint;
});