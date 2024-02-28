define(["exports", "react"], function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useSelection;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var EMPTY_KEYS = [];
  function filterKeys(keys, dataKeys) {
    var filteredKeys = keys.filter(function (key) {
      return dataKeys.has(key);
    });
    return keys.length === filteredKeys.length ? keys : filteredKeys;
  }
  function flattenKeys(keys) {
    return Array.from(keys).join(';');
  }
  function useSelection(leftDataSource, rightDataSource) {
    var selectedKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_KEYS;
    // Prepare `dataSource` keys
    var _React$useMemo = React.useMemo(function () {
        return [new Set(leftDataSource.map(function (src) {
          return src.key;
        })), new Set(rightDataSource.map(function (src) {
          return src.key;
        }))];
      }, [leftDataSource, rightDataSource]),
      _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
      leftKeys = _React$useMemo2[0],
      rightKeys = _React$useMemo2[1];
    // Selected Keys
    var _React$useState = React.useState(function () {
        return filterKeys(selectedKeys, leftKeys);
      }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      sourceSelectedKeys = _React$useState2[0],
      setSourceSelectedKeys = _React$useState2[1];
    var _React$useState3 = React.useState(function () {
        return filterKeys(selectedKeys, rightKeys);
      }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      targetSelectedKeys = _React$useState4[0],
      setTargetSelectedKeys = _React$useState4[1];
    // Fill selected keys
    React.useEffect(function () {
      setSourceSelectedKeys(filterKeys(selectedKeys, leftKeys));
      setTargetSelectedKeys(filterKeys(selectedKeys, rightKeys));
    }, [selectedKeys]);
    // Reset when data changed
    React.useEffect(function () {
      setSourceSelectedKeys(filterKeys(sourceSelectedKeys, leftKeys));
      setTargetSelectedKeys(filterKeys(targetSelectedKeys, rightKeys));
    }, [flattenKeys(leftKeys), flattenKeys(rightKeys)]);
    return [
    // Keys
    sourceSelectedKeys, targetSelectedKeys,
    // Updater
    setSourceSelectedKeys, setTargetSelectedKeys];
  }
});