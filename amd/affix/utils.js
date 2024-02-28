define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getFixedBottom = getFixedBottom;
  _exports.getFixedTop = getFixedTop;
  _exports.getTargetRect = getTargetRect;
  function getTargetRect(target) {
    return target !== window ? target.getBoundingClientRect() : {
      top: 0,
      bottom: window.innerHeight
    };
  }
  function getFixedTop(placeholderRect, targetRect, offsetTop) {
    if (offsetTop !== undefined && Math.round(targetRect.top) > Math.round(placeholderRect.top) - offsetTop) {
      return offsetTop + targetRect.top;
    }
    return undefined;
  }
  function getFixedBottom(placeholderRect, targetRect, offsetBottom) {
    if (offsetBottom !== undefined && Math.round(targetRect.bottom) < Math.round(placeholderRect.bottom) + offsetBottom) {
      var targetBottomOffset = window.innerHeight - targetRect.bottom;
      return offsetBottom + targetBottomOffset;
    }
    return undefined;
  }
});