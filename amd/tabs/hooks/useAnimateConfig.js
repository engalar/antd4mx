define(["exports", "antd4mx/_util/motion"], function (_exports, _motion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useAnimateConfig;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var motion = {
    motionAppear: false,
    motionEnter: true,
    motionLeave: true
  };
  function useAnimateConfig(prefixCls) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      inkBar: true,
      tabPane: false
    };
    var mergedAnimated;
    if (animated === false) {
      mergedAnimated = {
        inkBar: false,
        tabPane: false
      };
    } else if (animated === true) {
      mergedAnimated = {
        inkBar: true,
        tabPane: true
      };
    } else {
      mergedAnimated = Object.assign({
        inkBar: true
      }, _typeof(animated) === 'object' ? animated : {});
    }
    if (mergedAnimated.tabPane) {
      mergedAnimated.tabPaneMotion = Object.assign(Object.assign({}, motion), {
        motionName: (0, _motion.getTransitionName)(prefixCls, 'switch')
      });
    }
    return mergedAnimated;
  }
});