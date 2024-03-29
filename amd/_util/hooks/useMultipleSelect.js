define(["exports", "react"], function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useMultipleSelect;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  /**
   * @title multipleSelect hooks
   * @description multipleSelect by hold down shift key
   */
  function useMultipleSelect(getKey) {
    var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      prevSelectedIndex = _useState2[0],
      setPrevSelectedIndex = _useState2[1];
    var multipleSelect = (0, _react.useCallback)(function (currentSelectedIndex, data, selectedKeys) {
      var configPrevSelectedIndex = prevSelectedIndex !== null && prevSelectedIndex !== void 0 ? prevSelectedIndex : currentSelectedIndex;
      // add/delete the selected range
      var startIndex = Math.min(configPrevSelectedIndex || 0, currentSelectedIndex);
      var endIndex = Math.max(configPrevSelectedIndex || 0, currentSelectedIndex);
      var rangeKeys = data.slice(startIndex, endIndex + 1).map(function (item) {
        return getKey(item);
      });
      var shouldSelected = rangeKeys.some(function (rangeKey) {
        return !selectedKeys.has(rangeKey);
      });
      var changedKeys = [];
      rangeKeys.forEach(function (item) {
        if (shouldSelected) {
          if (!selectedKeys.has(item)) {
            changedKeys.push(item);
          }
          selectedKeys.add(item);
        } else {
          selectedKeys["delete"](item);
          changedKeys.push(item);
        }
      });
      setPrevSelectedIndex(shouldSelected ? endIndex : null);
      return changedKeys;
    }, [prevSelectedIndex]);
    var updatePrevSelectedIndex = function updatePrevSelectedIndex(val) {
      setPrevSelectedIndex(val);
    };
    return [multipleSelect, updatePrevSelectedIndex];
  }
});