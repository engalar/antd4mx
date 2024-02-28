define(["exports", "react", "antd4mx/watermark/utils"], function (_exports, React, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.FontGap = _exports.BaseSize = void 0;
  _exports["default"] = useWatermark;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  /**
   * Base size of the canvas, 1 for parallel layout and 2 for alternate layout
   * Only alternate layout is currently supported
   */
  var BaseSize = _exports.BaseSize = 2;
  var FontGap = _exports.FontGap = 3;
  // Prevent external hidden elements from adding accent styles
  var emphasizedStyle = {
    visibility: 'visible !important'
  };
  function useWatermark(markStyle) {
    var _React$useState = React.useState(function () {
        return new Map();
      }),
      _React$useState2 = _slicedToArray(_React$useState, 1),
      watermarkMap = _React$useState2[0];
    var appendWatermark = function appendWatermark(base64Url, markWidth, container) {
      if (container) {
        if (!watermarkMap.get(container)) {
          var newWatermarkEle = document.createElement('div');
          watermarkMap.set(container, newWatermarkEle);
        }
        var watermarkEle = watermarkMap.get(container);
        watermarkEle.setAttribute('style', (0, _utils.getStyleStr)(Object.assign(Object.assign(Object.assign({}, markStyle), {
          backgroundImage: "url('".concat(base64Url, "')"),
          backgroundSize: "".concat(Math.floor(markWidth), "px")
        }), emphasizedStyle)));
        // Prevents using the browser `Hide Element` to hide watermarks
        watermarkEle.removeAttribute('class');
        container.append(watermarkEle);
      }
    };
    var removeWatermark = function removeWatermark(container) {
      var watermarkEle = watermarkMap.get(container);
      if (watermarkEle && container) {
        container.removeChild(watermarkEle);
      }
      watermarkMap["delete"](container);
    };
    var isWatermarkEle = function isWatermarkEle(ele) {
      return Array.from(watermarkMap.values()).includes(ele);
    };
    return [appendWatermark, removeWatermark, isWatermarkEle];
  }
});