define(["exports", "react", "antd4mx/_util/warning"], function (_exports, _react, _warning) {
  "use strict";

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
  function getFilledItem(rowItem, rowRestCol, span) {
    var clone = rowItem;
    var exceed = false;
    if (span === undefined || span > rowRestCol) {
      clone = Object.assign(Object.assign({}, rowItem), {
        span: rowRestCol
      });
      exceed = span !== undefined;
    }
    return [clone, exceed];
  }
  // Calculate the sum of span in a row
  function getCalcRows(rowItems, mergedColumn) {
    var rows = [];
    var tmpRow = [];
    var rowRestCol = mergedColumn;
    var exceed = false;
    rowItems.filter(function (n) {
      return n;
    }).forEach(function (rowItem, index) {
      var span = rowItem === null || rowItem === void 0 ? void 0 : rowItem.span;
      var mergedSpan = span || 1;
      // Additional handle last one
      if (index === rowItems.length - 1) {
        var _getFilledItem = getFilledItem(rowItem, rowRestCol, span),
          _getFilledItem2 = _slicedToArray(_getFilledItem, 2),
          item = _getFilledItem2[0],
          itemExceed = _getFilledItem2[1];
        exceed = exceed || itemExceed;
        tmpRow.push(item);
        rows.push(tmpRow);
        return;
      }
      if (mergedSpan < rowRestCol) {
        rowRestCol -= mergedSpan;
        tmpRow.push(rowItem);
      } else {
        var _getFilledItem3 = getFilledItem(rowItem, rowRestCol, mergedSpan),
          _getFilledItem4 = _slicedToArray(_getFilledItem3, 2),
          _item = _getFilledItem4[0],
          _itemExceed = _getFilledItem4[1];
        exceed = exceed || _itemExceed;
        tmpRow.push(_item);
        rows.push(tmpRow);
        rowRestCol = mergedColumn;
        tmpRow = [];
      }
    });
    return [rows, exceed];
  }
  var useRow = function useRow(mergedColumn, items) {
    var _useMemo = (0, _react.useMemo)(function () {
        return getCalcRows(items, mergedColumn);
      }, [items, mergedColumn]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      rows = _useMemo2[0],
      exceed = _useMemo2[1];
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Descriptions');
      process.env.NODE_ENV !== "production" ? warning(!exceed, 'usage', 'Sum of column `span` in a line not match `column` of Descriptions.') : void 0;
    }
    return rows;
  };
  var _default = _exports["default"] = useRow;
});