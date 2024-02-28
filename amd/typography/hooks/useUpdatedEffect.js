define(["exports", "react"], function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  /** Similar with `useEffect` but only trigger after mounted */
  var useUpdatedEffect = function useUpdatedEffect(callback, conditions) {
    var mountRef = React.useRef(false);
    React.useEffect(function () {
      if (mountRef.current) {
        callback();
      } else {
        mountRef.current = true;
      }
    }, conditions);
  };
  var _default = _exports["default"] = useUpdatedEffect;
});