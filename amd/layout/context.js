define(["exports", "react"], function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.LayoutContext = void 0;
  var LayoutContext = _exports.LayoutContext = /*#__PURE__*/React.createContext({
    siderHook: {
      addSider: function addSider() {
        return null;
      },
      removeSider: function removeSider() {
        return null;
      }
    }
  });
});