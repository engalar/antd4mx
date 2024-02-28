define(["exports", "classnames", "react"], function (_exports, _classnames, React) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = SingleNumber;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function UnitNumber(_ref) {
    var prefixCls = _ref.prefixCls,
      value = _ref.value,
      current = _ref.current,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 0 : _ref$offset;
    var style;
    if (offset) {
      style = {
        position: 'absolute',
        top: "".concat(offset, "00%"),
        left: 0
      };
    }
    return /*#__PURE__*/React.createElement("span", {
      style: style,
      className: (0, _classnames["default"])("".concat(prefixCls, "-only-unit"), {
        current: current
      })
    }, value);
  }
  function getOffset(start, end, unit) {
    var index = start;
    var offset = 0;
    while ((index + 10) % 10 !== end) {
      index += unit;
      offset += unit;
    }
    return offset;
  }
  function SingleNumber(props) {
    var prefixCls = props.prefixCls,
      originCount = props.count,
      originValue = props.value;
    var value = Number(originValue);
    var count = Math.abs(originCount);
    var _React$useState = React.useState(value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      prevValue = _React$useState2[0],
      setPrevValue = _React$useState2[1];
    var _React$useState3 = React.useState(count),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      prevCount = _React$useState4[0],
      setPrevCount = _React$useState4[1];
    // ============================= Events =============================
    var onTransitionEnd = function onTransitionEnd() {
      setPrevValue(value);
      setPrevCount(count);
    };
    // Fallback if transition events are not supported
    React.useEffect(function () {
      var timeout = setTimeout(function () {
        onTransitionEnd();
      }, 1000);
      return function () {
        clearTimeout(timeout);
      };
    }, [value]);
    // ============================= Render =============================
    // Render unit list
    var unitNodes;
    var offsetStyle;
    if (prevValue === value || Number.isNaN(value) || Number.isNaN(prevValue)) {
      // Nothing to change
      unitNodes = [/*#__PURE__*/React.createElement(UnitNumber, Object.assign({}, props, {
        key: value,
        current: true
      }))];
      offsetStyle = {
        transition: 'none'
      };
    } else {
      unitNodes = [];
      // Fill basic number units
      var end = value + 10;
      var unitNumberList = [];
      for (var index = value; index <= end; index += 1) {
        unitNumberList.push(index);
      }
      // Fill with number unit nodes
      var prevIndex = unitNumberList.findIndex(function (n) {
        return n % 10 === prevValue;
      });
      unitNodes = unitNumberList.map(function (n, index) {
        var singleUnit = n % 10;
        return /*#__PURE__*/React.createElement(UnitNumber, Object.assign({}, props, {
          key: n,
          value: singleUnit,
          offset: index - prevIndex,
          current: index === prevIndex
        }));
      });
      // Calculate container offset value
      var unit = prevCount < count ? 1 : -1;
      offsetStyle = {
        transform: "translateY(".concat(-getOffset(prevValue, value, unit), "00%)")
      };
    }
    return /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-only"),
      style: offsetStyle,
      onTransitionEnd: onTransitionEnd
    }, unitNodes);
  }
});