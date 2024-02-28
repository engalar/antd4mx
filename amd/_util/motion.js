define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getTransitionName = _exports["default"] = void 0;
  // ================== Collapse Motion ==================
  var getCollapsedHeight = function getCollapsedHeight() {
    return {
      height: 0,
      opacity: 0
    };
  };
  var getRealHeight = function getRealHeight(node) {
    var scrollHeight = node.scrollHeight;
    return {
      height: scrollHeight,
      opacity: 1
    };
  };
  var getCurrentHeight = function getCurrentHeight(node) {
    return {
      height: node ? node.offsetHeight : 0
    };
  };
  var skipOpacityTransition = function skipOpacityTransition(_, event) {
    return (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === 'height';
  };
  var initCollapseMotion = function initCollapseMotion() {
    var rootCls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ant';
    return {
      motionName: "".concat(rootCls, "-motion-collapse"),
      onAppearStart: getCollapsedHeight,
      onEnterStart: getCollapsedHeight,
      onAppearActive: getRealHeight,
      onEnterActive: getRealHeight,
      onLeaveStart: getCurrentHeight,
      onLeaveActive: getCollapsedHeight,
      onAppearEnd: skipOpacityTransition,
      onEnterEnd: skipOpacityTransition,
      onLeaveEnd: skipOpacityTransition,
      motionDeadline: 500
    };
  };
  var SelectPlacements = ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'];
  var getTransitionName = _exports.getTransitionName = function getTransitionName(rootPrefixCls, motion, transitionName) {
    if (transitionName !== undefined) {
      return transitionName;
    }
    return "".concat(rootPrefixCls, "-").concat(motion);
  };
  var _default = _exports["default"] = initCollapseMotion;
});