define(["exports", "react", "antd4mx/_util/hooks/useForceUpdate"], function (_exports, React, _useForceUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useSyncState;
  function useSyncState(initialValue) {
    var ref = React.useRef(initialValue);
    var forceUpdate = (0, _useForceUpdate["default"])();
    return [function () {
      return ref.current;
    }, function (newValue) {
      ref.current = newValue;
      // re-render
      forceUpdate();
    }];
  }
});