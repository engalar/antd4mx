define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getPixelRatio = getPixelRatio;
  _exports.getStyleStr = getStyleStr;
  _exports.reRendering = void 0;
  _exports.toLowercaseSeparator = toLowercaseSeparator;
  /** converting camel-cased strings to be lowercase and link it with Separato */
  function toLowercaseSeparator(key) {
    return key.replace(/([A-Z])/g, '-$1').toLowerCase();
  }
  function getStyleStr(style) {
    return Object.keys(style).map(function (key) {
      return "".concat(toLowercaseSeparator(key), ": ").concat(style[key], ";");
    }).join(' ');
  }
  /** Returns the ratio of the device's physical pixel resolution to the css pixel resolution */
  function getPixelRatio() {
    return window.devicePixelRatio || 1;
  }
  /** Whether to re-render the watermark */
  var reRendering = _exports.reRendering = function reRendering(mutation, isWatermarkEle) {
    var flag = false;
    // Whether to delete the watermark node
    if (mutation.removedNodes.length) {
      flag = Array.from(mutation.removedNodes).some(function (node) {
        return isWatermarkEle(node);
      });
    }
    // Whether the watermark dom property value has been modified
    if (mutation.type === 'attributes' && isWatermarkEle(mutation.target)) {
      flag = true;
    }
    return flag;
  };
});