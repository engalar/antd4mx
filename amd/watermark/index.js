define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "@rc-component/mutate-observer", "classnames", "antd4mx/theme/internal", "antd4mx/watermark/context", "antd4mx/watermark/useClips", "antd4mx/watermark/useRafDebounce", "antd4mx/watermark/useWatermark", "antd4mx/watermark/utils"], function (_exports, _toConsumableArray2, _react, _mutateObserver, _classnames, _internal, _context, _useClips, _useRafDebounce, _useWatermark3, _utils) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  /**
   * Only return `next` when size changed.
   * This is only used for elements compare, not a shallow equal!
   */
  function getSizeDiff(prev, next) {
    return prev.size === next.size ? prev : next;
  }
  var DEFAULT_GAP_X = 100;
  var DEFAULT_GAP_Y = 100;
  var Watermark = function Watermark(props) {
    var _a, _b;
    var _props$zIndex = props.zIndex,
      zIndex = _props$zIndex === void 0 ? 9 : _props$zIndex,
      _props$rotate = props.rotate,
      rotate = _props$rotate === void 0 ? -22 : _props$rotate,
      width = props.width,
      height = props.height,
      image = props.image,
      content = props.content,
      _props$font = props.font,
      font = _props$font === void 0 ? {} : _props$font,
      style = props.style,
      className = props.className,
      rootClassName = props.rootClassName,
      _props$gap = props.gap,
      gap = _props$gap === void 0 ? [DEFAULT_GAP_X, DEFAULT_GAP_Y] : _props$gap,
      offset = props.offset,
      children = props.children,
      _props$inherit = props.inherit,
      inherit = _props$inherit === void 0 ? true : _props$inherit;
    var _useToken = (0, _internal.useToken)(),
      _useToken2 = _slicedToArray(_useToken, 2),
      token = _useToken2[1];
    var _font$color = font.color,
      color = _font$color === void 0 ? token.colorFill : _font$color,
      _font$fontSize = font.fontSize,
      fontSize = _font$fontSize === void 0 ? token.fontSizeLG : _font$fontSize,
      _font$fontWeight = font.fontWeight,
      fontWeight = _font$fontWeight === void 0 ? 'normal' : _font$fontWeight,
      _font$fontStyle = font.fontStyle,
      fontStyle = _font$fontStyle === void 0 ? 'normal' : _font$fontStyle,
      _font$fontFamily = font.fontFamily,
      fontFamily = _font$fontFamily === void 0 ? 'sans-serif' : _font$fontFamily,
      _font$textAlign = font.textAlign,
      textAlign = _font$textAlign === void 0 ? 'center' : _font$textAlign;
    var _gap = _slicedToArray(gap, 2),
      _gap$ = _gap[0],
      gapX = _gap$ === void 0 ? DEFAULT_GAP_X : _gap$,
      _gap$2 = _gap[1],
      gapY = _gap$2 === void 0 ? DEFAULT_GAP_Y : _gap$2;
    var gapXCenter = gapX / 2;
    var gapYCenter = gapY / 2;
    var offsetLeft = (_a = offset === null || offset === void 0 ? void 0 : offset[0]) !== null && _a !== void 0 ? _a : gapXCenter;
    var offsetTop = (_b = offset === null || offset === void 0 ? void 0 : offset[1]) !== null && _b !== void 0 ? _b : gapYCenter;
    var markStyle = _react["default"].useMemo(function () {
      var mergedStyle = {
        zIndex: zIndex,
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        backgroundRepeat: 'repeat'
      };
      /** Calculate the style of the offset */
      var positionLeft = offsetLeft - gapXCenter;
      var positionTop = offsetTop - gapYCenter;
      if (positionLeft > 0) {
        mergedStyle.left = "".concat(positionLeft, "px");
        mergedStyle.width = "calc(100% - ".concat(positionLeft, "px)");
        positionLeft = 0;
      }
      if (positionTop > 0) {
        mergedStyle.top = "".concat(positionTop, "px");
        mergedStyle.height = "calc(100% - ".concat(positionTop, "px)");
        positionTop = 0;
      }
      mergedStyle.backgroundPosition = "".concat(positionLeft, "px ").concat(positionTop, "px");
      return mergedStyle;
    }, [zIndex, offsetLeft, gapXCenter, offsetTop, gapYCenter]);
    var _React$useState = _react["default"].useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      container = _React$useState2[0],
      setContainer = _React$useState2[1];
    // Used for nest case like Modal, Drawer
    var _React$useState3 = _react["default"].useState(new Set()),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      subElements = _React$useState4[0],
      setSubElements = _React$useState4[1];
    // Nest elements should also support watermark
    var targetElements = _react["default"].useMemo(function () {
      var list = container ? [container] : [];
      return [].concat(list, (0, _toConsumableArray2["default"])(Array.from(subElements)));
    }, [container, subElements]);
    // ============================ Content =============================
    /**
     * Get the width and height of the watermark. The default values are as follows
     * Image: [120, 64]; Content: It's calculated by content;
     */
    var getMarkSize = function getMarkSize(ctx) {
      var defaultWidth = 120;
      var defaultHeight = 64;
      if (!image && ctx.measureText) {
        ctx.font = "".concat(Number(fontSize), "px ").concat(fontFamily);
        var contents = Array.isArray(content) ? content : [content];
        var sizes = contents.map(function (item) {
          var metrics = ctx.measureText(item);
          return [metrics.width, metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent];
        });
        defaultWidth = Math.ceil(Math.max.apply(Math, (0, _toConsumableArray2["default"])(sizes.map(function (size) {
          return size[0];
        }))));
        defaultHeight = Math.ceil(Math.max.apply(Math, (0, _toConsumableArray2["default"])(sizes.map(function (size) {
          return size[1];
        })))) * contents.length + (contents.length - 1) * _useClips.FontGap;
      }
      return [width !== null && width !== void 0 ? width : defaultWidth, height !== null && height !== void 0 ? height : defaultHeight];
    };
    var getClips = (0, _useClips["default"])();
    var _React$useState5 = _react["default"].useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      watermarkInfo = _React$useState6[0],
      setWatermarkInfo = _React$useState6[1];
    // Generate new Watermark content
    var renderWatermark = function renderWatermark() {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      if (ctx) {
        var ratio = (0, _utils.getPixelRatio)();
        var _getMarkSize = getMarkSize(ctx),
          _getMarkSize2 = _slicedToArray(_getMarkSize, 2),
          markWidth = _getMarkSize2[0],
          markHeight = _getMarkSize2[1];
        var drawCanvas = function drawCanvas(drawContent) {
          var _getClips = getClips(drawContent || '', rotate, ratio, markWidth, markHeight, {
              color: color,
              fontSize: fontSize,
              fontStyle: fontStyle,
              fontWeight: fontWeight,
              fontFamily: fontFamily,
              textAlign: textAlign
            }, gapX, gapY),
            _getClips2 = _slicedToArray(_getClips, 2),
            nextClips = _getClips2[0],
            clipWidth = _getClips2[1];
          setWatermarkInfo([nextClips, clipWidth]);
        };
        if (image) {
          var img = new Image();
          img.onload = function () {
            drawCanvas(img);
          };
          img.onerror = function () {
            drawCanvas(content);
          };
          img.crossOrigin = 'anonymous';
          img.referrerPolicy = 'no-referrer';
          img.src = image;
        } else {
          drawCanvas(content);
        }
      }
    };
    var syncWatermark = (0, _useRafDebounce["default"])(renderWatermark);
    // ============================= Effect =============================
    // Append watermark to the container
    var _useWatermark = (0, _useWatermark3["default"])(markStyle),
      _useWatermark2 = _slicedToArray(_useWatermark, 3),
      appendWatermark = _useWatermark2[0],
      removeWatermark = _useWatermark2[1],
      isWatermarkEle = _useWatermark2[2];
    (0, _react.useEffect)(function () {
      if (watermarkInfo) {
        targetElements.forEach(function (holder) {
          appendWatermark(watermarkInfo[0], watermarkInfo[1], holder);
        });
      }
    }, [watermarkInfo, targetElements]);
    // ============================ Observe =============================
    var onMutate = function onMutate(mutations) {
      mutations.forEach(function (mutation) {
        if ((0, _utils.reRendering)(mutation, isWatermarkEle)) {
          syncWatermark();
        }
      });
    };
    (0, _mutateObserver.useMutateObserver)(targetElements, onMutate);
    (0, _react.useEffect)(syncWatermark, [rotate, zIndex, width, height, image, content, color, fontSize, fontWeight, fontStyle, fontFamily, textAlign, gapX, gapY, offsetLeft, offsetTop]);
    // ============================ Context =============================
    var watermarkContext = _react["default"].useMemo(function () {
      return {
        add: function add(ele) {
          setSubElements(function (prev) {
            var clone = new Set(prev);
            clone.add(ele);
            return getSizeDiff(prev, clone);
          });
        },
        remove: function remove(ele) {
          removeWatermark(ele);
          setSubElements(function (prev) {
            var clone = new Set(prev);
            clone["delete"](ele);
            return getSizeDiff(prev, clone);
          });
        }
      };
    }, []);
    // ============================= Render =============================
    var childNode = inherit ? ( /*#__PURE__*/_react["default"].createElement(_context["default"].Provider, {
      value: watermarkContext
    }, children)) : children;
    return /*#__PURE__*/_react["default"].createElement("div", {
      ref: setContainer,
      className: (0, _classnames["default"])(className, rootClassName),
      style: Object.assign({
        position: 'relative'
      }, style)
    }, childNode);
  };
  if (process.env.NODE_ENV !== 'production') {
    Watermark.displayName = 'Watermark';
  }
  var _default = _exports["default"] = Watermark;
});