define(["exports", "rc-util", "react"], function (_exports, _rcUtil, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _exports.usePanelRef = usePanelRef;
  function voidFunc() {}
  var WatermarkContext = /*#__PURE__*/React.createContext({
    add: voidFunc,
    remove: voidFunc
  });
  function usePanelRef(panelSelector) {
    var watermark = React.useContext(WatermarkContext);
    var panelEleRef = React.useRef();
    var panelRef = (0, _rcUtil.useEvent)(function (ele) {
      if (ele) {
        var innerContentEle = panelSelector ? ele.querySelector(panelSelector) : ele;
        watermark.add(innerContentEle);
        panelEleRef.current = innerContentEle;
      } else {
        watermark.remove(panelEleRef.current);
      }
    });
    return panelRef;
  }
  var _default = _exports["default"] = WatermarkContext;
});