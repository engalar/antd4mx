define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "@ant-design/icons/es/icons/CaretDownOutlined", "@ant-design/icons/es/icons/CaretUpOutlined", "classnames", "rc-util/es/KeyCode", "react", "antd4mx/tooltip/index", "antd4mx/table/util"], function (_exports, _toConsumableArray2, _CaretDownOutlined, _CaretUpOutlined, _classnames, _KeyCode, React, _index, _util) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useFilterSorter;
  _exports.getSortData = getSortData;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var ASCEND = 'ascend';
  var DESCEND = 'descend';
  function getMultiplePriority(column) {
    if (_typeof(column.sorter) === 'object' && typeof column.sorter.multiple === 'number') {
      return column.sorter.multiple;
    }
    return false;
  }
  function getSortFunction(sorter) {
    if (typeof sorter === 'function') {
      return sorter;
    }
    if (sorter && _typeof(sorter) === 'object' && sorter.compare) {
      return sorter.compare;
    }
    return false;
  }
  function nextSortDirection(sortDirections, current) {
    if (!current) {
      return sortDirections[0];
    }
    return sortDirections[sortDirections.indexOf(current) + 1];
  }
  function collectSortStates(columns, init, pos) {
    var sortStates = [];
    function pushState(column, columnPos) {
      sortStates.push({
        column: column,
        key: (0, _util.getColumnKey)(column, columnPos),
        multiplePriority: getMultiplePriority(column),
        sortOrder: column.sortOrder
      });
    }
    (columns || []).forEach(function (column, index) {
      var columnPos = (0, _util.getColumnPos)(index, pos);
      if (column.children) {
        if ('sortOrder' in column) {
          // Controlled
          pushState(column, columnPos);
        }
        sortStates = [].concat((0, _toConsumableArray2["default"])(sortStates), (0, _toConsumableArray2["default"])(collectSortStates(column.children, init, columnPos)));
      } else if (column.sorter) {
        if ('sortOrder' in column) {
          // Controlled
          pushState(column, columnPos);
        } else if (init && column.defaultSortOrder) {
          // Default sorter
          sortStates.push({
            column: column,
            key: (0, _util.getColumnKey)(column, columnPos),
            multiplePriority: getMultiplePriority(column),
            sortOrder: column.defaultSortOrder
          });
        }
      }
    });
    return sortStates;
  }
  function injectSorter(prefixCls, columns, sorterStates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, pos) {
    return (columns || []).map(function (column, index) {
      var columnPos = (0, _util.getColumnPos)(index, pos);
      var newColumn = column;
      if (newColumn.sorter) {
        var sortDirections = newColumn.sortDirections || defaultSortDirections;
        var showSorterTooltip = newColumn.showSorterTooltip === undefined ? tableShowSorterTooltip : newColumn.showSorterTooltip;
        var columnKey = (0, _util.getColumnKey)(newColumn, columnPos);
        var sorterState = sorterStates.find(function (_ref) {
          var key = _ref.key;
          return key === columnKey;
        });
        var sortOrder = sorterState ? sorterState.sortOrder : null;
        var nextSortOrder = nextSortDirection(sortDirections, sortOrder);
        var sorter;
        if (column.sortIcon) {
          sorter = column.sortIcon({
            sortOrder: sortOrder
          });
        } else {
          var upNode = sortDirections.includes(ASCEND) && ( /*#__PURE__*/React.createElement(_CaretUpOutlined["default"], {
            className: (0, _classnames["default"])("".concat(prefixCls, "-column-sorter-up"), {
              active: sortOrder === ASCEND
            })
          }));
          var downNode = sortDirections.includes(DESCEND) && ( /*#__PURE__*/React.createElement(_CaretDownOutlined["default"], {
            className: (0, _classnames["default"])("".concat(prefixCls, "-column-sorter-down"), {
              active: sortOrder === DESCEND
            })
          }));
          sorter = /*#__PURE__*/React.createElement("span", {
            className: (0, _classnames["default"])("".concat(prefixCls, "-column-sorter"), _defineProperty({}, "".concat(prefixCls, "-column-sorter-full"), !!(upNode && downNode)))
          }, /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-column-sorter-inner"),
            "aria-hidden": "true"
          }, upNode, downNode));
        }
        var _ref7 = tableLocale || {},
          cancelSort = _ref7.cancelSort,
          triggerAsc = _ref7.triggerAsc,
          triggerDesc = _ref7.triggerDesc;
        var sortTip = cancelSort;
        if (nextSortOrder === DESCEND) {
          sortTip = triggerDesc;
        } else if (nextSortOrder === ASCEND) {
          sortTip = triggerAsc;
        }
        var tooltipProps = _typeof(showSorterTooltip) === 'object' ? Object.assign({
          title: sortTip
        }, showSorterTooltip) : {
          title: sortTip
        };
        newColumn = Object.assign(Object.assign({}, newColumn), {
          className: (0, _classnames["default"])(newColumn.className, _defineProperty({}, "".concat(prefixCls, "-column-sort"), sortOrder)),
          title: function title(renderProps) {
            var renderSortTitle = /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-column-sorters")
            }, /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-column-title")
            }, (0, _util.renderColumnTitle)(column.title, renderProps)), sorter);
            return showSorterTooltip ? ( /*#__PURE__*/React.createElement(_index["default"], Object.assign({}, tooltipProps), renderSortTitle)) : renderSortTitle;
          },
          onHeaderCell: function onHeaderCell(col) {
            var cell = column.onHeaderCell && column.onHeaderCell(col) || {};
            var originOnClick = cell.onClick;
            var originOKeyDown = cell.onKeyDown;
            cell.onClick = function (event) {
              triggerSorter({
                column: column,
                key: columnKey,
                sortOrder: nextSortOrder,
                multiplePriority: getMultiplePriority(column)
              });
              originOnClick === null || originOnClick === void 0 ? void 0 : originOnClick(event);
            };
            cell.onKeyDown = function (event) {
              if (event.keyCode === _KeyCode["default"].ENTER) {
                triggerSorter({
                  column: column,
                  key: columnKey,
                  sortOrder: nextSortOrder,
                  multiplePriority: getMultiplePriority(column)
                });
                originOKeyDown === null || originOKeyDown === void 0 ? void 0 : originOKeyDown(event);
              }
            };
            var renderTitle = (0, _util.safeColumnTitle)(column.title, {});
            var displayTitle = renderTitle === null || renderTitle === void 0 ? void 0 : renderTitle.toString();
            // Inform the screen-reader so it can tell the visually impaired user which column is sorted
            if (sortOrder) {
              cell['aria-sort'] = sortOrder === 'ascend' ? 'ascending' : 'descending';
            } else {
              cell['aria-label'] = displayTitle || '';
            }
            cell.className = (0, _classnames["default"])(cell.className, "".concat(prefixCls, "-column-has-sorters"));
            cell.tabIndex = 0;
            if (column.ellipsis) {
              cell.title = (renderTitle !== null && renderTitle !== void 0 ? renderTitle : '').toString();
            }
            return cell;
          }
        });
      }
      if ('children' in newColumn) {
        newColumn = Object.assign(Object.assign({}, newColumn), {
          children: injectSorter(prefixCls, newColumn.children, sorterStates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, columnPos)
        });
      }
      return newColumn;
    });
  }
  function stateToInfo(sorterStates) {
    var column = sorterStates.column,
      sortOrder = sorterStates.sortOrder;
    return {
      column: column,
      order: sortOrder,
      field: column.dataIndex,
      columnKey: column.key
    };
  }
  function generateSorterInfo(sorterStates) {
    var list = sorterStates.filter(function (_ref2) {
      var sortOrder = _ref2.sortOrder;
      return sortOrder;
    }).map(stateToInfo);
    // =========== Legacy compatible support ===========
    // https://github.com/ant-design/ant-design/pull/19226
    if (list.length === 0 && sorterStates.length) {
      return Object.assign(Object.assign({}, stateToInfo(sorterStates[sorterStates.length - 1])), {
        column: undefined
      });
    }
    if (list.length <= 1) {
      return list[0] || {};
    }
    return list;
  }
  function getSortData(data, sortStates, childrenColumnName) {
    var innerSorterStates = sortStates.slice().sort(function (a, b) {
      return b.multiplePriority - a.multiplePriority;
    });
    var cloneData = data.slice();
    var runningSorters = innerSorterStates.filter(function (_ref3) {
      var sorter = _ref3.column.sorter,
        sortOrder = _ref3.sortOrder;
      return getSortFunction(sorter) && sortOrder;
    });
    // Skip if no sorter needed
    if (!runningSorters.length) {
      return cloneData;
    }
    return cloneData.sort(function (record1, record2) {
      for (var i = 0; i < runningSorters.length; i += 1) {
        var sorterState = runningSorters[i];
        var sorter = sorterState.column.sorter,
          sortOrder = sorterState.sortOrder;
        var compareFn = getSortFunction(sorter);
        if (compareFn && sortOrder) {
          var compareResult = compareFn(record1, record2, sortOrder);
          if (compareResult !== 0) {
            return sortOrder === ASCEND ? compareResult : -compareResult;
          }
        }
      }
      return 0;
    }).map(function (record) {
      var subRecords = record[childrenColumnName];
      if (subRecords) {
        return Object.assign(Object.assign({}, record), _defineProperty({}, childrenColumnName, getSortData(subRecords, sortStates, childrenColumnName)));
      }
      return record;
    });
  }
  function useFilterSorter(_ref4) {
    var prefixCls = _ref4.prefixCls,
      mergedColumns = _ref4.mergedColumns,
      onSorterChange = _ref4.onSorterChange,
      sortDirections = _ref4.sortDirections,
      tableLocale = _ref4.tableLocale,
      showSorterTooltip = _ref4.showSorterTooltip;
    var _React$useState = React.useState(collectSortStates(mergedColumns, true)),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      sortStates = _React$useState2[0],
      setSortStates = _React$useState2[1];
    var mergedSorterStates = React.useMemo(function () {
      var validate = true;
      var collectedStates = collectSortStates(mergedColumns, false);
      // Return if not controlled
      if (!collectedStates.length) {
        return sortStates;
      }
      var validateStates = [];
      function patchStates(state) {
        if (validate) {
          validateStates.push(state);
        } else {
          validateStates.push(Object.assign(Object.assign({}, state), {
            sortOrder: null
          }));
        }
      }
      var multipleMode = null;
      collectedStates.forEach(function (state) {
        if (multipleMode === null) {
          patchStates(state);
          if (state.sortOrder) {
            if (state.multiplePriority === false) {
              validate = false;
            } else {
              multipleMode = true;
            }
          }
        } else if (multipleMode && state.multiplePriority !== false) {
          patchStates(state);
        } else {
          validate = false;
          patchStates(state);
        }
      });
      return validateStates;
    }, [mergedColumns, sortStates]);
    // Get render columns title required props
    var columnTitleSorterProps = React.useMemo(function () {
      var sortColumns = mergedSorterStates.map(function (_ref5) {
        var column = _ref5.column,
          sortOrder = _ref5.sortOrder;
        return {
          column: column,
          order: sortOrder
        };
      });
      return {
        sortColumns: sortColumns,
        // Legacy
        sortColumn: sortColumns[0] && sortColumns[0].column,
        sortOrder: sortColumns[0] && sortColumns[0].order
      };
    }, [mergedSorterStates]);
    function triggerSorter(sortState) {
      var newSorterStates;
      if (sortState.multiplePriority === false || !mergedSorterStates.length || mergedSorterStates[0].multiplePriority === false) {
        newSorterStates = [sortState];
      } else {
        newSorterStates = [].concat((0, _toConsumableArray2["default"])(mergedSorterStates.filter(function (_ref6) {
          var key = _ref6.key;
          return key !== sortState.key;
        })), [sortState]);
      }
      setSortStates(newSorterStates);
      onSorterChange(generateSorterInfo(newSorterStates), newSorterStates);
    }
    var transformColumns = function transformColumns(innerColumns) {
      return injectSorter(prefixCls, innerColumns, mergedSorterStates, triggerSorter, sortDirections, tableLocale, showSorterTooltip);
    };
    var getSorters = function getSorters() {
      return generateSorterInfo(mergedSorterStates);
    };
    return [transformColumns, mergedSorterStates, columnTitleSorterProps, getSorters];
  }
});