define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "antd4mx/_util/warning", "antd4mx/table/util", "antd4mx/table/hooks/useFilter/FilterDropdown"], function (_exports, _toConsumableArray2, React, _warning, _util, _FilterDropdown) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  Object.defineProperty(_exports, "flattenKeys", {
    enumerable: true,
    get: function get() {
      return _FilterDropdown.flattenKeys;
    }
  });
  _exports.getFilterData = getFilterData;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function collectFilterStates(columns, init, pos) {
    var filterStates = [];
    (columns || []).forEach(function (column, index) {
      var _a;
      var columnPos = (0, _util.getColumnPos)(index, pos);
      if (column.filters || 'filterDropdown' in column || 'onFilter' in column) {
        if ('filteredValue' in column) {
          // Controlled
          var filteredValues = column.filteredValue;
          if (!('filterDropdown' in column)) {
            filteredValues = (_a = filteredValues === null || filteredValues === void 0 ? void 0 : filteredValues.map(String)) !== null && _a !== void 0 ? _a : filteredValues;
          }
          filterStates.push({
            column: column,
            key: (0, _util.getColumnKey)(column, columnPos),
            filteredKeys: filteredValues,
            forceFiltered: column.filtered
          });
        } else {
          // Uncontrolled
          filterStates.push({
            column: column,
            key: (0, _util.getColumnKey)(column, columnPos),
            filteredKeys: init && column.defaultFilteredValue ? column.defaultFilteredValue : undefined,
            forceFiltered: column.filtered
          });
        }
      }
      if ('children' in column) {
        filterStates = [].concat((0, _toConsumableArray2["default"])(filterStates), (0, _toConsumableArray2["default"])(collectFilterStates(column.children, init, columnPos)));
      }
    });
    return filterStates;
  }
  function injectFilter(prefixCls, dropdownPrefixCls, columns, filterStates, locale, triggerFilter, getPopupContainer, pos, rootClassName) {
    return columns.map(function (column, index) {
      var columnPos = (0, _util.getColumnPos)(index, pos);
      var _column$filterMultipl = column.filterMultiple,
        filterMultiple = _column$filterMultipl === void 0 ? true : _column$filterMultipl,
        filterMode = column.filterMode,
        filterSearch = column.filterSearch;
      var newColumn = column;
      if (newColumn.filters || newColumn.filterDropdown) {
        var columnKey = (0, _util.getColumnKey)(newColumn, columnPos);
        var filterState = filterStates.find(function (_ref) {
          var key = _ref.key;
          return columnKey === key;
        });
        newColumn = Object.assign(Object.assign({}, newColumn), {
          title: function title(renderProps) {
            return /*#__PURE__*/React.createElement(_FilterDropdown["default"], {
              tablePrefixCls: prefixCls,
              prefixCls: "".concat(prefixCls, "-filter"),
              dropdownPrefixCls: dropdownPrefixCls,
              column: newColumn,
              columnKey: columnKey,
              filterState: filterState,
              filterMultiple: filterMultiple,
              filterMode: filterMode,
              filterSearch: filterSearch,
              triggerFilter: triggerFilter,
              locale: locale,
              getPopupContainer: getPopupContainer,
              rootClassName: rootClassName
            }, (0, _util.renderColumnTitle)(column.title, renderProps));
          }
        });
      }
      if ('children' in newColumn) {
        newColumn = Object.assign(Object.assign({}, newColumn), {
          children: injectFilter(prefixCls, dropdownPrefixCls, newColumn.children, filterStates, locale, triggerFilter, getPopupContainer, columnPos, rootClassName)
        });
      }
      return newColumn;
    });
  }
  function generateFilterInfo(filterStates) {
    var currentFilters = {};
    filterStates.forEach(function (_ref2) {
      var key = _ref2.key,
        filteredKeys = _ref2.filteredKeys,
        column = _ref2.column;
      var keyAsString = key;
      var filters = column.filters,
        filterDropdown = column.filterDropdown;
      if (filterDropdown) {
        currentFilters[keyAsString] = filteredKeys || null;
      } else if (Array.isArray(filteredKeys)) {
        var keys = (0, _FilterDropdown.flattenKeys)(filters);
        currentFilters[keyAsString] = keys.filter(function (originKey) {
          return filteredKeys.includes(String(originKey));
        });
      } else {
        currentFilters[keyAsString] = null;
      }
    });
    return currentFilters;
  }
  function getFilterData(data, filterStates, childrenColumnName) {
    return filterStates.reduce(function (currentData, filterState) {
      var _filterState$column = filterState.column,
        onFilter = _filterState$column.onFilter,
        filters = _filterState$column.filters,
        filteredKeys = filterState.filteredKeys;
      if (onFilter && filteredKeys && filteredKeys.length) {
        return currentData
        // shallow copy
        .map(function (record) {
          return Object.assign({}, record);
        }).filter(function (record) {
          return filteredKeys.some(function (key) {
            var keys = (0, _FilterDropdown.flattenKeys)(filters);
            var keyIndex = keys.findIndex(function (k) {
              return String(k) === String(key);
            });
            var realKey = keyIndex !== -1 ? keys[keyIndex] : key;
            // filter children
            if (record[childrenColumnName]) {
              record[childrenColumnName] = getFilterData(record[childrenColumnName], filterStates, childrenColumnName);
            }
            return onFilter(realKey, record);
          });
        });
      }
      return currentData;
    }, data);
  }
  var getMergedColumns = function getMergedColumns(rawMergedColumns) {
    return rawMergedColumns.flatMap(function (column) {
      if ('children' in column) {
        return [column].concat((0, _toConsumableArray2["default"])(getMergedColumns(column.children || [])));
      }
      return [column];
    });
  };
  function useFilter(_ref3) {
    var prefixCls = _ref3.prefixCls,
      dropdownPrefixCls = _ref3.dropdownPrefixCls,
      rawMergedColumns = _ref3.mergedColumns,
      onFilterChange = _ref3.onFilterChange,
      getPopupContainer = _ref3.getPopupContainer,
      tableLocale = _ref3.locale,
      rootClassName = _ref3.rootClassName;
    var warning = (0, _warning.devUseWarning)('Table');
    var mergedColumns = React.useMemo(function () {
      return getMergedColumns(rawMergedColumns || []);
    }, [rawMergedColumns]);
    var _React$useState = React.useState(function () {
        return collectFilterStates(mergedColumns, true);
      }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      filterStates = _React$useState2[0],
      setFilterStates = _React$useState2[1];
    var mergedFilterStates = React.useMemo(function () {
      var collectedStates = collectFilterStates(mergedColumns, false);
      if (collectedStates.length === 0) {
        return collectedStates;
      }
      var filteredKeysIsAllNotControlled = true;
      var filteredKeysIsAllControlled = true;
      collectedStates.forEach(function (_ref4) {
        var filteredKeys = _ref4.filteredKeys;
        if (filteredKeys !== undefined) {
          filteredKeysIsAllNotControlled = false;
        } else {
          filteredKeysIsAllControlled = false;
        }
      });
      // Return if not controlled
      if (filteredKeysIsAllNotControlled) {
        // Filter column may have been removed
        var keyList = (mergedColumns || []).map(function (column, index) {
          return (0, _util.getColumnKey)(column, (0, _util.getColumnPos)(index));
        });
        return filterStates.filter(function (_ref5) {
          var key = _ref5.key;
          return keyList.includes(key);
        }).map(function (item) {
          var col = mergedColumns[keyList.findIndex(function (key) {
            return key === item.key;
          })];
          return Object.assign(Object.assign({}, item), {
            column: Object.assign(Object.assign({}, item.column), col),
            forceFiltered: col.filtered
          });
        });
      }
      process.env.NODE_ENV !== "production" ? warning(filteredKeysIsAllControlled, 'usage', 'Columns should all contain `filteredValue` or not contain `filteredValue`.') : void 0;
      return collectedStates;
    }, [mergedColumns, filterStates]);
    var filters = React.useMemo(function () {
      return generateFilterInfo(mergedFilterStates);
    }, [mergedFilterStates]);
    var triggerFilter = function triggerFilter(filterState) {
      var newFilterStates = mergedFilterStates.filter(function (_ref6) {
        var key = _ref6.key;
        return key !== filterState.key;
      });
      newFilterStates.push(filterState);
      setFilterStates(newFilterStates);
      onFilterChange(generateFilterInfo(newFilterStates), newFilterStates);
    };
    var transformColumns = function transformColumns(innerColumns) {
      return injectFilter(prefixCls, dropdownPrefixCls, innerColumns, mergedFilterStates, tableLocale, triggerFilter, getPopupContainer, undefined, rootClassName);
    };
    return [transformColumns, mergedFilterStates, filters];
  }
  var _default = _exports["default"] = useFilter;
});