define(["exports", "react", "rc-util/es/Children/toArray", "rc-util/es/hooks/useLayoutEffect"], function (_exports, React, _toArray, _useLayoutEffect) {
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
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function cuttable(node) {
    var type = _typeof(node);
    return type === 'string' || type === 'number';
  }
  function getNodesLen(nodeList) {
    var totalLen = 0;
    nodeList.forEach(function (node) {
      if (cuttable(node)) {
        totalLen += String(node).length;
      } else {
        totalLen += 1;
      }
    });
    return totalLen;
  }
  function sliceNodes(nodeList, len) {
    var currLen = 0;
    var currentNodeList = [];
    for (var i = 0; i < nodeList.length; i += 1) {
      // Match to return
      if (currLen === len) {
        return currentNodeList;
      }
      var node = nodeList[i];
      var canCut = cuttable(node);
      var nodeLen = canCut ? String(node).length : 1;
      var nextLen = currLen + nodeLen;
      // Exceed but current not which means we need cut this
      // This will not happen on validate ReactElement
      if (nextLen > len) {
        var restLen = len - currLen;
        currentNodeList.push(String(node).slice(0, restLen));
        return currentNodeList;
      }
      currentNodeList.push(node);
      currLen = nextLen;
    }
    return nodeList;
  }
  var NONE = 0;
  var PREPARE = 1;
  var WALKING = 2;
  var DONE_WITH_ELLIPSIS = 3;
  var DONE_WITHOUT_ELLIPSIS = 4;
  var Ellipsis = function Ellipsis(_ref) {
    var enabledMeasure = _ref.enabledMeasure,
      children = _ref.children,
      text = _ref.text,
      width = _ref.width,
      fontSize = _ref.fontSize,
      rows = _ref.rows,
      onEllipsis = _ref.onEllipsis;
    var _React$useState = React.useState([0, 0, 0]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      _React$useState2$ = _slicedToArray(_React$useState2[0], 3),
      startLen = _React$useState2$[0],
      midLen = _React$useState2$[1],
      endLen = _React$useState2$[2],
      setCutLength = _React$useState2[1];
    // record last done with ellipsis width
    var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      lastLen = _React$useState4[0],
      setLastLen = _React$useState4[1];
    var _React$useState5 = React.useState(NONE),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      walkingState = _React$useState6[0],
      setWalkingState = _React$useState6[1];
    var _React$useState7 = React.useState(0),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      singleRowHeight = _React$useState8[0],
      setSingleRowHeight = _React$useState8[1];
    var singleRowRef = React.useRef(null);
    var midRowRef = React.useRef(null);
    var nodeList = React.useMemo(function () {
      return (0, _toArray["default"])(text);
    }, [text]);
    var totalLen = React.useMemo(function () {
      return getNodesLen(nodeList);
    }, [nodeList]);
    var mergedChildren = React.useMemo(function () {
      if (!enabledMeasure || walkingState !== DONE_WITH_ELLIPSIS) {
        // if has lastLen, use it as temporary width to avoid lots of text to squeeze space.
        if (lastLen && walkingState !== DONE_WITHOUT_ELLIPSIS && enabledMeasure) return children(sliceNodes(nodeList, lastLen), lastLen < totalLen);
        return children(nodeList, false);
      }
      return children(sliceNodes(nodeList, midLen), midLen < totalLen);
    }, [enabledMeasure, walkingState, children, nodeList, midLen, totalLen]);
    // ======================== Walk ========================
    (0, _useLayoutEffect["default"])(function () {
      if (enabledMeasure && width && fontSize && totalLen) {
        setWalkingState(PREPARE);
        setCutLength([0, Math.ceil(totalLen / 2), totalLen]);
      }
    }, [enabledMeasure, width, fontSize, text, totalLen, rows]);
    (0, _useLayoutEffect["default"])(function () {
      var _a;
      if (walkingState === PREPARE) {
        setSingleRowHeight(((_a = singleRowRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0);
      }
    }, [walkingState]);
    (0, _useLayoutEffect["default"])(function () {
      var _a, _b;
      if (singleRowHeight) {
        if (walkingState === PREPARE) {
          // Ignore if position is enough
          var midHeight = ((_a = midRowRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
          var maxHeight = rows * singleRowHeight;
          if (midHeight <= maxHeight) {
            setWalkingState(DONE_WITHOUT_ELLIPSIS);
            onEllipsis(false);
          } else {
            setWalkingState(WALKING);
          }
        } else if (walkingState === WALKING) {
          if (startLen !== endLen) {
            var _midHeight = ((_b = midRowRef.current) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 0;
            var _maxHeight = rows * singleRowHeight;
            var nextStartLen = startLen;
            var nextEndLen = endLen;
            // We reach the last round
            if (startLen === endLen - 1) {
              nextEndLen = startLen;
            } else if (_midHeight <= _maxHeight) {
              nextStartLen = midLen;
            } else {
              nextEndLen = midLen;
            }
            var nextMidLen = Math.ceil((nextStartLen + nextEndLen) / 2);
            setCutLength([nextStartLen, nextMidLen, nextEndLen]);
          } else {
            setWalkingState(DONE_WITH_ELLIPSIS);
            setLastLen(midLen);
            onEllipsis(true);
          }
        }
      }
    }, [walkingState, startLen, endLen, rows, singleRowHeight]);
    // ======================= Render =======================
    var measureStyle = {
      width: width,
      whiteSpace: 'normal',
      margin: 0,
      padding: 0
    };
    var renderMeasure = function renderMeasure(content, ref, style) {
      return /*#__PURE__*/React.createElement("span", {
        "aria-hidden": true,
        ref: ref,
        style: Object.assign({
          position: 'fixed',
          display: 'block',
          left: 0,
          top: 0,
          zIndex: -9999,
          visibility: 'hidden',
          pointerEvents: 'none',
          fontSize: Math.ceil(fontSize / 2) * 2
        }, style)
      }, content);
    };
    var renderMeasureSlice = function renderMeasureSlice(len, ref) {
      var sliceNodeList = sliceNodes(nodeList, len);
      return renderMeasure(children(sliceNodeList, true), ref, measureStyle);
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, mergedChildren, enabledMeasure && walkingState !== DONE_WITH_ELLIPSIS && walkingState !== DONE_WITHOUT_ELLIPSIS && ( /*#__PURE__*/React.createElement(React.Fragment, null, renderMeasure('lg', singleRowRef, {
      wordBreak: 'keep-all',
      whiteSpace: 'nowrap'
    }), walkingState === PREPARE ? renderMeasure(children(nodeList, false), midRowRef, measureStyle) : renderMeasureSlice(midLen, midRowRef))));
  };
  if (process.env.NODE_ENV !== 'production') {
    Ellipsis.displayName = 'Ellipsis';
  }
  var _default = _exports["default"] = Ellipsis;
});