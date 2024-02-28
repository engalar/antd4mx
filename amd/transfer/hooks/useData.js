define(["exports", "react", "antd4mx/_util/transKeys"], function (_exports, React, _transKeys) {
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
  var useData = function useData(dataSource, rowKey, targetKeys) {
    var mergedDataSource = React.useMemo(function () {
      return (dataSource || []).map(function (record) {
        if (rowKey) {
          record = Object.assign(Object.assign({}, record), {
            key: rowKey(record)
          });
        }
        return record;
      });
    }, [dataSource, rowKey]);
    var _React$useMemo = React.useMemo(function () {
        var leftData = [];
        var rightData = new Array((targetKeys || []).length);
        var targetKeysMap = (0, _transKeys.groupKeysMap)(targetKeys || []);
        mergedDataSource.forEach(function (record) {
          // rightData should be ordered by targetKeys
          // leftData should be ordered by dataSource
          if (targetKeysMap.has(record.key)) {
            rightData[targetKeysMap.get(record.key)] = record;
          } else {
            leftData.push(record);
          }
        });
        return [leftData, rightData];
      }, [mergedDataSource, targetKeys, rowKey]),
      _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
      leftDataSource = _React$useMemo2[0],
      rightDataSource = _React$useMemo2[1];
    return [mergedDataSource, leftDataSource, rightDataSource];
  };
  var _default = _exports["default"] = useData;
});