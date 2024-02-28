define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "@ant-design/icons/es/icons/DownOutlined", "classnames", "rc-table", "rc-tree/es/util", "rc-tree/es/utils/conductUtil", "rc-tree/es/utils/treeUtil", "rc-util/es/hooks/useMergedState", "antd4mx/_util/hooks/useMultipleSelect", "antd4mx/_util/warning", "antd4mx/checkbox", "antd4mx/dropdown", "antd4mx/radio"], function (_exports, _toConsumableArray2, _react, _DownOutlined, _classnames, _rcTable, _util, _conductUtil, _treeUtil, _useMergedState3, _useMultipleSelect3, _warning, _checkbox, _dropdown, _radio) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.SELECTION_NONE = _exports.SELECTION_INVERT = _exports.SELECTION_COLUMN = _exports.SELECTION_ALL = void 0;
  var React = _react;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  // TODO: warning if use ajax!!!
  var SELECTION_COLUMN = _exports.SELECTION_COLUMN = {};
  var SELECTION_ALL = _exports.SELECTION_ALL = 'SELECT_ALL';
  var SELECTION_INVERT = _exports.SELECTION_INVERT = 'SELECT_INVERT';
  var SELECTION_NONE = _exports.SELECTION_NONE = 'SELECT_NONE';
  var EMPTY_LIST = [];
  var flattenData = function flattenData(childrenColumnName, data) {
    var list = [];
    (data || []).forEach(function (record) {
      list.push(record);
      if (record && _typeof(record) === 'object' && childrenColumnName in record) {
        list = [].concat((0, _toConsumableArray2["default"])(list), (0, _toConsumableArray2["default"])(flattenData(childrenColumnName, record[childrenColumnName])));
      }
    });
    return list;
  };
  var useSelection = function useSelection(config, rowSelection) {
    var _ref6 = rowSelection || {},
      preserveSelectedRowKeys = _ref6.preserveSelectedRowKeys,
      selectedRowKeys = _ref6.selectedRowKeys,
      defaultSelectedRowKeys = _ref6.defaultSelectedRowKeys,
      getCheckboxProps = _ref6.getCheckboxProps,
      onSelectionChange = _ref6.onChange,
      onSelect = _ref6.onSelect,
      onSelectAll = _ref6.onSelectAll,
      onSelectInvert = _ref6.onSelectInvert,
      onSelectNone = _ref6.onSelectNone,
      onSelectMultiple = _ref6.onSelectMultiple,
      selectionColWidth = _ref6.columnWidth,
      selectionType = _ref6.type,
      selections = _ref6.selections,
      fixed = _ref6.fixed,
      customizeRenderCell = _ref6.renderCell,
      hideSelectAll = _ref6.hideSelectAll,
      _ref6$checkStrictly = _ref6.checkStrictly,
      checkStrictly = _ref6$checkStrictly === void 0 ? true : _ref6$checkStrictly;
    var prefixCls = config.prefixCls,
      data = config.data,
      pageData = config.pageData,
      getRecordByKey = config.getRecordByKey,
      getRowKey = config.getRowKey,
      expandType = config.expandType,
      childrenColumnName = config.childrenColumnName,
      tableLocale = config.locale,
      getPopupContainer = config.getPopupContainer;
    var warning = (0, _warning.devUseWarning)('Table');
    // ========================= MultipleSelect =========================
    var _useMultipleSelect = (0, _useMultipleSelect3["default"])(function (item) {
        return item;
      }),
      _useMultipleSelect2 = _slicedToArray(_useMultipleSelect, 2),
      multipleSelect = _useMultipleSelect2[0],
      updatePrevSelectedIndex = _useMultipleSelect2[1];
    // ========================= Keys =========================
    var _useMergedState = (0, _useMergedState3["default"])(selectedRowKeys || defaultSelectedRowKeys || EMPTY_LIST, {
        value: selectedRowKeys
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      mergedSelectedKeys = _useMergedState2[0],
      setMergedSelectedKeys = _useMergedState2[1];
    // ======================== Caches ========================
    var preserveRecordsRef = React.useRef(new Map());
    var updatePreserveRecordsCache = (0, _react.useCallback)(function (keys) {
      if (preserveSelectedRowKeys) {
        var newCache = new Map();
        // Keep key if mark as preserveSelectedRowKeys
        keys.forEach(function (key) {
          var record = getRecordByKey(key);
          if (!record && preserveRecordsRef.current.has(key)) {
            record = preserveRecordsRef.current.get(key);
          }
          newCache.set(key, record);
        });
        // Refresh to new cache
        preserveRecordsRef.current = newCache;
      }
    }, [getRecordByKey, preserveSelectedRowKeys]);
    // Update cache with selectedKeys
    React.useEffect(function () {
      updatePreserveRecordsCache(mergedSelectedKeys);
    }, [mergedSelectedKeys]);
    var _useMemo = (0, _react.useMemo)(function () {
        if (checkStrictly) {
          return {
            keyEntities: null
          };
        }
        var convertData = data;
        if (preserveSelectedRowKeys) {
          var keysSet = new Set(data.map(function (record, index) {
            return getRowKey(record, index);
          }));
          // remove preserveRecords that duplicate data
          var preserveRecords = Array.from(preserveRecordsRef.current).reduce(function (total, _ref) {
            var _ref7 = _slicedToArray(_ref, 2),
              key = _ref7[0],
              value = _ref7[1];
            return keysSet.has(key) ? total : total.concat(value);
          }, []);
          convertData = [].concat((0, _toConsumableArray2["default"])(convertData), (0, _toConsumableArray2["default"])(preserveRecords));
        }
        return (0, _treeUtil.convertDataToEntities)(convertData, {
          externalGetKey: getRowKey,
          childrenPropName: childrenColumnName
        });
      }, [data, getRowKey, checkStrictly, childrenColumnName, preserveSelectedRowKeys]),
      keyEntities = _useMemo.keyEntities;
    // Get flatten data
    var flattedData = (0, _react.useMemo)(function () {
      return flattenData(childrenColumnName, pageData);
    }, [childrenColumnName, pageData]);
    // Get all checkbox props
    var checkboxPropsMap = (0, _react.useMemo)(function () {
      var map = new Map();
      flattedData.forEach(function (record, index) {
        var key = getRowKey(record, index);
        var checkboxProps = (getCheckboxProps ? getCheckboxProps(record) : null) || {};
        map.set(key, checkboxProps);
        process.env.NODE_ENV !== "production" ? warning(!('checked' in checkboxProps || 'defaultChecked' in checkboxProps), 'usage', 'Do not set `checked` or `defaultChecked` in `getCheckboxProps`. Please use `selectedRowKeys` instead.') : void 0;
      });
      return map;
    }, [flattedData, getRowKey, getCheckboxProps]);
    var isCheckboxDisabled = (0, _react.useCallback)(function (r) {
      var _a;
      return !!((_a = checkboxPropsMap.get(getRowKey(r))) === null || _a === void 0 ? void 0 : _a.disabled);
    }, [checkboxPropsMap, getRowKey]);
    var _useMemo2 = (0, _react.useMemo)(function () {
        if (checkStrictly) {
          return [mergedSelectedKeys || [], []];
        }
        var _conductCheck = (0, _conductUtil.conductCheck)(mergedSelectedKeys, true, keyEntities, isCheckboxDisabled),
          checkedKeys = _conductCheck.checkedKeys,
          halfCheckedKeys = _conductCheck.halfCheckedKeys;
        return [checkedKeys || [], halfCheckedKeys];
      }, [mergedSelectedKeys, checkStrictly, keyEntities, isCheckboxDisabled]),
      _useMemo3 = _slicedToArray(_useMemo2, 2),
      derivedSelectedKeys = _useMemo3[0],
      derivedHalfSelectedKeys = _useMemo3[1];
    var derivedSelectedKeySet = (0, _react.useMemo)(function () {
      var keys = selectionType === 'radio' ? derivedSelectedKeys.slice(0, 1) : derivedSelectedKeys;
      return new Set(keys);
    }, [derivedSelectedKeys, selectionType]);
    var derivedHalfSelectedKeySet = (0, _react.useMemo)(function () {
      return selectionType === 'radio' ? new Set() : new Set(derivedHalfSelectedKeys);
    }, [derivedHalfSelectedKeys, selectionType]);
    // Reset if rowSelection reset
    React.useEffect(function () {
      if (!rowSelection) {
        setMergedSelectedKeys(EMPTY_LIST);
      }
    }, [!!rowSelection]);
    var setSelectedKeys = (0, _react.useCallback)(function (keys, method) {
      var availableKeys;
      var records;
      updatePreserveRecordsCache(keys);
      if (preserveSelectedRowKeys) {
        availableKeys = keys;
        records = keys.map(function (key) {
          return preserveRecordsRef.current.get(key);
        });
      } else {
        // Filter key which not exist in the `dataSource`
        availableKeys = [];
        records = [];
        keys.forEach(function (key) {
          var record = getRecordByKey(key);
          if (record !== undefined) {
            availableKeys.push(key);
            records.push(record);
          }
        });
      }
      setMergedSelectedKeys(availableKeys);
      onSelectionChange === null || onSelectionChange === void 0 ? void 0 : onSelectionChange(availableKeys, records, {
        type: method
      });
    }, [setMergedSelectedKeys, getRecordByKey, onSelectionChange, preserveSelectedRowKeys]);
    // ====================== Selections ======================
    // Trigger single `onSelect` event
    var triggerSingleSelection = (0, _react.useCallback)(function (key, selected, keys, event) {
      if (onSelect) {
        var rows = keys.map(function (k) {
          return getRecordByKey(k);
        });
        onSelect(getRecordByKey(key), selected, rows, event);
      }
      setSelectedKeys(keys, 'single');
    }, [onSelect, getRecordByKey, setSelectedKeys]);
    var mergedSelections = (0, _react.useMemo)(function () {
      if (!selections || hideSelectAll) {
        return null;
      }
      var selectionList = selections === true ? [SELECTION_ALL, SELECTION_INVERT, SELECTION_NONE] : selections;
      return selectionList.map(function (selection) {
        if (selection === SELECTION_ALL) {
          return {
            key: 'all',
            text: tableLocale.selectionAll,
            onSelect: function onSelect() {
              setSelectedKeys(data.map(function (record, index) {
                return getRowKey(record, index);
              }).filter(function (key) {
                var checkProps = checkboxPropsMap.get(key);
                return !(checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled) || derivedSelectedKeySet.has(key);
              }), 'all');
            }
          };
        }
        if (selection === SELECTION_INVERT) {
          return {
            key: 'invert',
            text: tableLocale.selectInvert,
            onSelect: function onSelect() {
              var keySet = new Set(derivedSelectedKeySet);
              pageData.forEach(function (record, index) {
                var key = getRowKey(record, index);
                var checkProps = checkboxPropsMap.get(key);
                if (!(checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled)) {
                  if (keySet.has(key)) {
                    keySet["delete"](key);
                  } else {
                    keySet.add(key);
                  }
                }
              });
              var keys = Array.from(keySet);
              if (onSelectInvert) {
                warning.deprecated(false, 'onSelectInvert', 'onChange');
                onSelectInvert(keys);
              }
              setSelectedKeys(keys, 'invert');
            }
          };
        }
        if (selection === SELECTION_NONE) {
          return {
            key: 'none',
            text: tableLocale.selectNone,
            onSelect: function onSelect() {
              onSelectNone === null || onSelectNone === void 0 ? void 0 : onSelectNone();
              setSelectedKeys(Array.from(derivedSelectedKeySet).filter(function (key) {
                var checkProps = checkboxPropsMap.get(key);
                return checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled;
              }), 'none');
            }
          };
        }
        return selection;
      }).map(function (selection) {
        return Object.assign(Object.assign({}, selection), {
          onSelect: function onSelect() {
            var _a2;
            var _a;
            for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
              rest[_key] = arguments[_key];
            }
            (_a = selection.onSelect) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [selection].concat(rest));
            updatePrevSelectedIndex(null);
          }
        });
      });
    }, [selections, derivedSelectedKeySet, pageData, getRowKey, onSelectInvert, setSelectedKeys]);
    // ======================= Columns ========================
    var transformColumns = (0, _react.useCallback)(function (columns) {
      var _a;
      // >>>>>>>>>>> Skip if not exists `rowSelection`
      if (!rowSelection) {
        process.env.NODE_ENV !== "production" ? warning(!columns.includes(SELECTION_COLUMN), 'usage', '`rowSelection` is not config but `SELECTION_COLUMN` exists in the `columns`.') : void 0;
        return columns.filter(function (col) {
          return col !== SELECTION_COLUMN;
        });
      }
      // >>>>>>>>>>> Support selection
      var cloneColumns = (0, _toConsumableArray2["default"])(columns);
      var keySet = new Set(derivedSelectedKeySet);
      // Record key only need check with enabled
      var recordKeys = flattedData.map(getRowKey).filter(function (key) {
        return !checkboxPropsMap.get(key).disabled;
      });
      var checkedCurrentAll = recordKeys.every(function (key) {
        return keySet.has(key);
      });
      var checkedCurrentSome = recordKeys.some(function (key) {
        return keySet.has(key);
      });
      var onSelectAllChange = function onSelectAllChange() {
        var changeKeys = [];
        if (checkedCurrentAll) {
          recordKeys.forEach(function (key) {
            keySet["delete"](key);
            changeKeys.push(key);
          });
        } else {
          recordKeys.forEach(function (key) {
            if (!keySet.has(key)) {
              keySet.add(key);
              changeKeys.push(key);
            }
          });
        }
        var keys = Array.from(keySet);
        onSelectAll === null || onSelectAll === void 0 ? void 0 : onSelectAll(!checkedCurrentAll, keys.map(function (k) {
          return getRecordByKey(k);
        }), changeKeys.map(function (k) {
          return getRecordByKey(k);
        }));
        setSelectedKeys(keys, 'all');
        updatePrevSelectedIndex(null);
      };
      // ===================== Render =====================
      // Title Cell
      var title;
      var columnTitleCheckbox;
      if (selectionType !== 'radio') {
        var customizeSelections;
        if (mergedSelections) {
          var menu = {
            getPopupContainer: getPopupContainer,
            items: mergedSelections.map(function (selection, index) {
              var key = selection.key,
                text = selection.text,
                onSelectionClick = selection.onSelect;
              return {
                key: key !== null && key !== void 0 ? key : index,
                onClick: function onClick() {
                  onSelectionClick === null || onSelectionClick === void 0 ? void 0 : onSelectionClick(recordKeys);
                },
                label: text
              };
            })
          };
          customizeSelections = /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-selection-extra")
          }, /*#__PURE__*/React.createElement(_dropdown["default"], {
            menu: menu,
            getPopupContainer: getPopupContainer
          }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_DownOutlined["default"], null))));
        }
        var allDisabledData = flattedData.map(function (record, index) {
          var key = getRowKey(record, index);
          var checkboxProps = checkboxPropsMap.get(key) || {};
          return Object.assign({
            checked: keySet.has(key)
          }, checkboxProps);
        }).filter(function (_ref2) {
          var disabled = _ref2.disabled;
          return disabled;
        });
        var allDisabled = !!allDisabledData.length && allDisabledData.length === flattedData.length;
        var allDisabledAndChecked = allDisabled && allDisabledData.every(function (_ref3) {
          var checked = _ref3.checked;
          return checked;
        });
        var allDisabledSomeChecked = allDisabled && allDisabledData.some(function (_ref4) {
          var checked = _ref4.checked;
          return checked;
        });
        columnTitleCheckbox = /*#__PURE__*/React.createElement(_checkbox["default"], {
          checked: !allDisabled ? !!flattedData.length && checkedCurrentAll : allDisabledAndChecked,
          indeterminate: !allDisabled ? !checkedCurrentAll && checkedCurrentSome : !allDisabledAndChecked && allDisabledSomeChecked,
          onChange: onSelectAllChange,
          disabled: flattedData.length === 0 || allDisabled,
          "aria-label": customizeSelections ? 'Custom selection' : 'Select all',
          skipGroup: true
        });
        title = !hideSelectAll && ( /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-selection")
        }, columnTitleCheckbox, customizeSelections));
      }
      // Body Cell
      var renderCell;
      if (selectionType === 'radio') {
        renderCell = function renderCell(_, record, index) {
          var key = getRowKey(record, index);
          var checked = keySet.has(key);
          return {
            node: ( /*#__PURE__*/React.createElement(_radio["default"], Object.assign({}, checkboxPropsMap.get(key), {
              checked: checked,
              onClick: function onClick(e) {
                return e.stopPropagation();
              },
              onChange: function onChange(event) {
                if (!keySet.has(key)) {
                  triggerSingleSelection(key, true, [key], event.nativeEvent);
                }
              }
            }))),
            checked: checked
          };
        };
      } else {
        renderCell = function renderCell(_, record, index) {
          var _a;
          var key = getRowKey(record, index);
          var checked = keySet.has(key);
          var indeterminate = derivedHalfSelectedKeySet.has(key);
          var checkboxProps = checkboxPropsMap.get(key);
          var mergedIndeterminate;
          if (expandType === 'nest') {
            mergedIndeterminate = indeterminate;
            process.env.NODE_ENV !== "production" ? warning(typeof (checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.indeterminate) !== 'boolean', 'usage', 'set `indeterminate` using `rowSelection.getCheckboxProps` is not allowed with tree structured dataSource.') : void 0;
          } else {
            mergedIndeterminate = (_a = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.indeterminate) !== null && _a !== void 0 ? _a : indeterminate;
          }
          // Record checked
          return {
            node: ( /*#__PURE__*/React.createElement(_checkbox["default"], Object.assign({}, checkboxProps, {
              indeterminate: mergedIndeterminate,
              checked: checked,
              skipGroup: true,
              onClick: function onClick(e) {
                return e.stopPropagation();
              },
              onChange: function onChange(_ref5) {
                var nativeEvent = _ref5.nativeEvent;
                var shiftKey = nativeEvent.shiftKey;
                var currentSelectedIndex = recordKeys.findIndex(function (item) {
                  return item === key;
                });
                var isMultiple = derivedSelectedKeys.some(function (item) {
                  return recordKeys.includes(item);
                });
                if (shiftKey && checkStrictly && isMultiple) {
                  var changedKeys = multipleSelect(currentSelectedIndex, recordKeys, keySet);
                  var keys = Array.from(keySet);
                  onSelectMultiple === null || onSelectMultiple === void 0 ? void 0 : onSelectMultiple(!checked, keys.map(function (recordKey) {
                    return getRecordByKey(recordKey);
                  }), changedKeys.map(function (recordKey) {
                    return getRecordByKey(recordKey);
                  }));
                  setSelectedKeys(keys, 'multiple');
                } else {
                  // Single record selected
                  var originCheckedKeys = derivedSelectedKeys;
                  if (checkStrictly) {
                    var checkedKeys = checked ? (0, _util.arrDel)(originCheckedKeys, key) : (0, _util.arrAdd)(originCheckedKeys, key);
                    triggerSingleSelection(key, !checked, checkedKeys, nativeEvent);
                  } else {
                    // Always fill first
                    var result = (0, _conductUtil.conductCheck)([].concat((0, _toConsumableArray2["default"])(originCheckedKeys), [key]), true, keyEntities, isCheckboxDisabled);
                    var _checkedKeys = result.checkedKeys,
                      halfCheckedKeys = result.halfCheckedKeys;
                    var nextCheckedKeys = _checkedKeys;
                    // If remove, we do it again to correction
                    if (checked) {
                      var tempKeySet = new Set(_checkedKeys);
                      tempKeySet["delete"](key);
                      nextCheckedKeys = (0, _conductUtil.conductCheck)(Array.from(tempKeySet), {
                        checked: false,
                        halfCheckedKeys: halfCheckedKeys
                      }, keyEntities, isCheckboxDisabled).checkedKeys;
                    }
                    triggerSingleSelection(key, !checked, nextCheckedKeys, nativeEvent);
                  }
                }
                if (checked) {
                  updatePrevSelectedIndex(null);
                } else {
                  updatePrevSelectedIndex(currentSelectedIndex);
                }
              }
            }))),
            checked: checked
          };
        };
      }
      var renderSelectionCell = function renderSelectionCell(_, record, index) {
        var _renderCell = renderCell(_, record, index),
          node = _renderCell.node,
          checked = _renderCell.checked;
        if (customizeRenderCell) {
          return customizeRenderCell(checked, record, index, node);
        }
        return node;
      };
      // Insert selection column if not exist
      if (!cloneColumns.includes(SELECTION_COLUMN)) {
        // Always after expand icon
        if (cloneColumns.findIndex(function (col) {
          var _a;
          return ((_a = col[_rcTable.INTERNAL_COL_DEFINE]) === null || _a === void 0 ? void 0 : _a.columnType) === 'EXPAND_COLUMN';
        }) === 0) {
          var _cloneColumns = cloneColumns,
            _cloneColumns2 = _toArray(_cloneColumns),
            expandColumn = _cloneColumns2[0],
            restColumns = _cloneColumns2.slice(1);
          cloneColumns = [expandColumn, SELECTION_COLUMN].concat((0, _toConsumableArray2["default"])(restColumns));
        } else {
          // Normal insert at first column
          cloneColumns = [SELECTION_COLUMN].concat((0, _toConsumableArray2["default"])(cloneColumns));
        }
      }
      // Deduplicate selection column
      var selectionColumnIndex = cloneColumns.indexOf(SELECTION_COLUMN);
      process.env.NODE_ENV !== "production" ? warning(cloneColumns.filter(function (col) {
        return col === SELECTION_COLUMN;
      }).length <= 1, 'usage', 'Multiple `SELECTION_COLUMN` exist in `columns`.') : void 0;
      cloneColumns = cloneColumns.filter(function (column, index) {
        return column !== SELECTION_COLUMN || index === selectionColumnIndex;
      });
      // Fixed column logic
      var prevCol = cloneColumns[selectionColumnIndex - 1];
      var nextCol = cloneColumns[selectionColumnIndex + 1];
      var mergedFixed = fixed;
      if (mergedFixed === undefined) {
        if ((nextCol === null || nextCol === void 0 ? void 0 : nextCol.fixed) !== undefined) {
          mergedFixed = nextCol.fixed;
        } else if ((prevCol === null || prevCol === void 0 ? void 0 : prevCol.fixed) !== undefined) {
          mergedFixed = prevCol.fixed;
        }
      }
      if (mergedFixed && prevCol && ((_a = prevCol[_rcTable.INTERNAL_COL_DEFINE]) === null || _a === void 0 ? void 0 : _a.columnType) === 'EXPAND_COLUMN' && prevCol.fixed === undefined) {
        prevCol.fixed = mergedFixed;
      }
      var columnCls = (0, _classnames["default"])("".concat(prefixCls, "-selection-col"), _defineProperty({}, "".concat(prefixCls, "-selection-col-with-dropdown"), selections && selectionType === 'checkbox'));
      var renderColumnTitle = function renderColumnTitle() {
        if (!(rowSelection === null || rowSelection === void 0 ? void 0 : rowSelection.columnTitle)) {
          return title;
        }
        if (typeof rowSelection.columnTitle === 'function') {
          return rowSelection.columnTitle(columnTitleCheckbox);
        }
        return rowSelection.columnTitle;
      };
      // Replace with real selection column
      var selectionColumn = _defineProperty({
        fixed: mergedFixed,
        width: selectionColWidth,
        className: "".concat(prefixCls, "-selection-column"),
        title: renderColumnTitle(),
        render: renderSelectionCell,
        onCell: rowSelection.onCell
      }, _rcTable.INTERNAL_COL_DEFINE, {
        className: columnCls
      });
      return cloneColumns.map(function (col) {
        return col === SELECTION_COLUMN ? selectionColumn : col;
      });
    }, [getRowKey, flattedData, rowSelection, derivedSelectedKeys, derivedSelectedKeySet, derivedHalfSelectedKeySet, selectionColWidth, mergedSelections, expandType, checkboxPropsMap, onSelectMultiple, triggerSingleSelection, isCheckboxDisabled]);
    return [transformColumns, derivedSelectedKeySet];
  };
  var _default = _exports["default"] = useSelection;
});