define(["exports", "react"], function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useLazyKVMap;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function useLazyKVMap(data, childrenColumnName, getRowKey) {
    var mapCacheRef = React.useRef({});
    function getRecordByKey(key) {
      if (!mapCacheRef.current || mapCacheRef.current.data !== data || mapCacheRef.current.childrenColumnName !== childrenColumnName || mapCacheRef.current.getRowKey !== getRowKey) {
        /* eslint-disable no-inner-declarations */
        var dig = function dig(records) {
          records.forEach(function (record, index) {
            var rowKey = getRowKey(record, index);
            kvMap.set(rowKey, record);
            if (record && _typeof(record) === 'object' && childrenColumnName in record) {
              dig(record[childrenColumnName] || []);
            }
          });
        };
        /* eslint-enable */
        var kvMap = new Map();
        dig(data);
        mapCacheRef.current = {
          data: data,
          childrenColumnName: childrenColumnName,
          kvMap: kvMap,
          getRowKey: getRowKey
        };
      }
      return mapCacheRef.current.kvMap.get(key);
    }
    return [getRecordByKey];
  }
});