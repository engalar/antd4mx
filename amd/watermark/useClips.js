define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.FontGap = void 0;
  _exports["default"] = useClips;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var FontGap = _exports.FontGap = 3;
  function prepareCanvas(width, height) {
    var ratio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var realWidth = width * ratio;
    var realHeight = height * ratio;
    canvas.setAttribute('width', "".concat(realWidth, "px"));
    canvas.setAttribute('height', "".concat(realHeight, "px"));
    ctx.save();
    return [ctx, canvas, realWidth, realHeight];
  }
  /**
   * Get the clips of text content.
   * This is a lazy hook function since SSR no need this
   */
  function useClips() {
    // Get single clips
    function getClips(content, rotate, ratio, width, height, font, gapX, gapY) {
      // ================= Text / Image =================
      var _prepareCanvas = prepareCanvas(width, height, ratio),
        _prepareCanvas2 = _slicedToArray(_prepareCanvas, 4),
        ctx = _prepareCanvas2[0],
        canvas = _prepareCanvas2[1],
        contentWidth = _prepareCanvas2[2],
        contentHeight = _prepareCanvas2[3];
      if (content instanceof HTMLImageElement) {
        // Image
        ctx.drawImage(content, 0, 0, contentWidth, contentHeight);
      } else {
        // Text
        var color = font.color,
          fontSize = font.fontSize,
          fontStyle = font.fontStyle,
          fontWeight = font.fontWeight,
          fontFamily = font.fontFamily,
          textAlign = font.textAlign;
        var mergedFontSize = Number(fontSize) * ratio;
        ctx.font = "".concat(fontStyle, " normal ").concat(fontWeight, " ").concat(mergedFontSize, "px/").concat(height, "px ").concat(fontFamily);
        ctx.fillStyle = color;
        ctx.textAlign = textAlign;
        ctx.textBaseline = 'top';
        var contents = Array.isArray(content) ? content : [content];
        contents === null || contents === void 0 ? void 0 : contents.forEach(function (item, index) {
          ctx.fillText(item !== null && item !== void 0 ? item : '', contentWidth / 2, index * (mergedFontSize + FontGap * ratio));
        });
      }
      // ==================== Rotate ====================
      var angle = Math.PI / 180 * Number(rotate);
      var maxSize = Math.max(width, height);
      var _prepareCanvas3 = prepareCanvas(maxSize, maxSize, ratio),
        _prepareCanvas4 = _slicedToArray(_prepareCanvas3, 3),
        rCtx = _prepareCanvas4[0],
        rCanvas = _prepareCanvas4[1],
        realMaxSize = _prepareCanvas4[2];
      // Copy from `ctx` and rotate
      rCtx.translate(realMaxSize / 2, realMaxSize / 2);
      rCtx.rotate(angle);
      if (contentWidth > 0 && contentHeight > 0) {
        rCtx.drawImage(canvas, -contentWidth / 2, -contentHeight / 2);
      }
      // Get boundary of rotated text
      function getRotatePos(x, y) {
        var targetX = x * Math.cos(angle) - y * Math.sin(angle);
        var targetY = x * Math.sin(angle) + y * Math.cos(angle);
        return [targetX, targetY];
      }
      var left = 0;
      var right = 0;
      var top = 0;
      var bottom = 0;
      var halfWidth = contentWidth / 2;
      var halfHeight = contentHeight / 2;
      var points = [[0 - halfWidth, 0 - halfHeight], [0 + halfWidth, 0 - halfHeight], [0 + halfWidth, 0 + halfHeight], [0 - halfWidth, 0 + halfHeight]];
      points.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          x = _ref2[0],
          y = _ref2[1];
        var _getRotatePos = getRotatePos(x, y),
          _getRotatePos2 = _slicedToArray(_getRotatePos, 2),
          targetX = _getRotatePos2[0],
          targetY = _getRotatePos2[1];
        left = Math.min(left, targetX);
        right = Math.max(right, targetX);
        top = Math.min(top, targetY);
        bottom = Math.max(bottom, targetY);
      });
      var cutLeft = left + realMaxSize / 2;
      var cutTop = top + realMaxSize / 2;
      var cutWidth = right - left;
      var cutHeight = bottom - top;
      // ================ Fill Alternate ================
      var realGapX = gapX * ratio;
      var realGapY = gapY * ratio;
      var filledWidth = (cutWidth + realGapX) * 2;
      var filledHeight = cutHeight + realGapY;
      var _prepareCanvas5 = prepareCanvas(filledWidth, filledHeight),
        _prepareCanvas6 = _slicedToArray(_prepareCanvas5, 2),
        fCtx = _prepareCanvas6[0],
        fCanvas = _prepareCanvas6[1];
      function drawImg() {
        var targetX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var targetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        fCtx.drawImage(rCanvas, cutLeft, cutTop, cutWidth, cutHeight, targetX, targetY, cutWidth, cutHeight);
      }
      drawImg();
      drawImg(cutWidth + realGapX, -cutHeight / 2 - realGapY / 2);
      drawImg(cutWidth + realGapX, +cutHeight / 2 + realGapY / 2);
      return [fCanvas.toDataURL(), filledWidth / ratio, filledHeight / ratio];
    }
    return getClips;
  }
});