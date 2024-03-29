define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getTargetWaveColor = getTargetWaveColor;
  _exports.isNotGrey = isNotGrey;
  _exports.isValidWaveColor = isValidWaveColor;
  function isNotGrey(color) {
    // eslint-disable-next-line no-useless-escape
    var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
    if (match && match[1] && match[2] && match[3]) {
      return !(match[1] === match[2] && match[2] === match[3]);
    }
    return true;
  }
  function isValidWaveColor(color) {
    return color && color !== '#fff' && color !== '#ffffff' && color !== 'rgb(255, 255, 255)' && color !== 'rgba(255, 255, 255, 1)' && isNotGrey(color) && !/rgba\((?:\d*, ){3}0\)/.test(color) &&
    // any transparent rgba color
    color !== 'transparent';
  }
  function getTargetWaveColor(node) {
    var _getComputedStyle = getComputedStyle(node),
      borderTopColor = _getComputedStyle.borderTopColor,
      borderColor = _getComputedStyle.borderColor,
      backgroundColor = _getComputedStyle.backgroundColor;
    if (isValidWaveColor(borderTopColor)) {
      return borderTopColor;
    }
    if (isValidWaveColor(borderColor)) {
      return borderColor;
    }
    if (isValidWaveColor(backgroundColor)) {
      return backgroundColor;
    }
    return null;
  }
});