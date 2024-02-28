define(["exports", "react", "classnames", "rc-table", "rc-table/es/hooks/useColumns", "rc-util/es/omit", "antd4mx/_util/hooks/useProxyImperativeHandle", "antd4mx/_util/scrollTo", "antd4mx/_util/warning", "antd4mx/config-provider/context", "antd4mx/config-provider/defaultRenderEmpty", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/config-provider/hooks/useSize", "antd4mx/grid/hooks/useBreakpoint", "antd4mx/locale/en_US", "antd4mx/pagination/index", "antd4mx/spin/index", "antd4mx/theme/internal", "antd4mx/table/ExpandIcon", "antd4mx/table/hooks/useContainerWidth", "antd4mx/table/hooks/useFilter/index", "antd4mx/table/hooks/useLazyKVMap", "antd4mx/table/hooks/usePagination", "antd4mx/table/hooks/useSelection", "antd4mx/table/hooks/useSorter", "antd4mx/table/hooks/useTitleColumns", "antd4mx/table/RcTable/index", "antd4mx/table/RcTable/VirtualTable", "antd4mx/table/style/index"], function (_exports, React, _classnames, _rcTable, _useColumns, _omit, _useProxyImperativeHandle, _scrollTo, _warning, _context, _defaultRenderEmpty, _useCSSVarCls, _useSize, _useBreakpoint, _en_US, _index, _index2, _internal, _ExpandIcon, _useContainerWidth, _index3, _useLazyKVMap3, _usePagination3, _useSelection3, _useSorter3, _useTitleColumns3, _index4, _VirtualTable, _index5) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var EMPTY_LIST = [];
  var InternalTable = function InternalTable(props, ref) {
    var _a, _b;
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      style = props.style,
      customizeSize = props.size,
      bordered = props.bordered,
      customizeDropdownPrefixCls = props.dropdownPrefixCls,
      dataSource = props.dataSource,
      pagination = props.pagination,
      rowSelection = props.rowSelection,
      _props$rowKey = props.rowKey,
      rowKey = _props$rowKey === void 0 ? 'key' : _props$rowKey,
      rowClassName = props.rowClassName,
      columns = props.columns,
      children = props.children,
      legacyChildrenColumnName = props.childrenColumnName,
      onChange = props.onChange,
      getPopupContainer = props.getPopupContainer,
      loading = props.loading,
      expandIcon = props.expandIcon,
      expandable = props.expandable,
      expandedRowRender = props.expandedRowRender,
      expandIconColumnIndex = props.expandIconColumnIndex,
      indentSize = props.indentSize,
      scroll = props.scroll,
      sortDirections = props.sortDirections,
      locale = props.locale,
      _props$showSorterTool = props.showSorterTooltip,
      showSorterTooltip = _props$showSorterTool === void 0 ? true : _props$showSorterTool,
      virtual = props.virtual;
    var warning = (0, _warning.devUseWarning)('Table');
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== "production" ? warning(!(typeof rowKey === 'function' && rowKey.length > 1), 'usage', '`index` parameter of `rowKey` function is deprecated. There is no guarantee that it will work as expected.') : void 0;
    }
    var baseColumns = React.useMemo(function () {
      return columns || (0, _useColumns.convertChildrenToColumns)(children);
    }, [columns, children]);
    var needResponsive = React.useMemo(function () {
      return baseColumns.some(function (col) {
        return col.responsive;
      });
    }, [baseColumns]);
    var screens = (0, _useBreakpoint["default"])(needResponsive);
    var mergedColumns = React.useMemo(function () {
      var matched = new Set(Object.keys(screens).filter(function (m) {
        return screens[m];
      }));
      return baseColumns.filter(function (c) {
        return !c.responsive || c.responsive.some(function (r) {
          return matched.has(r);
        });
      });
    }, [baseColumns, screens]);
    var tableProps = (0, _omit["default"])(props, ['className', 'style', 'columns']);
    var _React$useContext = React.useContext(_context.ConfigContext),
      _React$useContext$loc = _React$useContext.locale,
      contextLocale = _React$useContext$loc === void 0 ? _en_US["default"] : _React$useContext$loc,
      direction = _React$useContext.direction,
      table = _React$useContext.table,
      renderEmpty = _React$useContext.renderEmpty,
      getPrefixCls = _React$useContext.getPrefixCls,
      getContextPopupContainer = _React$useContext.getPopupContainer;
    var mergedSize = (0, _useSize["default"])(customizeSize);
    var tableLocale = Object.assign(Object.assign({}, contextLocale.Table), locale);
    var rawData = dataSource || EMPTY_LIST;
    var prefixCls = getPrefixCls('table', customizePrefixCls);
    var dropdownPrefixCls = getPrefixCls('dropdown', customizeDropdownPrefixCls);
    var _useToken = (0, _internal.useToken)(),
      _useToken2 = _slicedToArray(_useToken, 2),
      token = _useToken2[1];
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _index5["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var mergedExpandable = Object.assign(Object.assign({
      childrenColumnName: legacyChildrenColumnName,
      expandIconColumnIndex: expandIconColumnIndex
    }, expandable), {
      expandIcon: (_a = expandable === null || expandable === void 0 ? void 0 : expandable.expandIcon) !== null && _a !== void 0 ? _a : (_b = table === null || table === void 0 ? void 0 : table.expandable) === null || _b === void 0 ? void 0 : _b.expandIcon
    });
    var _mergedExpandable$chi = mergedExpandable.childrenColumnName,
      childrenColumnName = _mergedExpandable$chi === void 0 ? 'children' : _mergedExpandable$chi;
    var expandType = React.useMemo(function () {
      if (rawData.some(function (item) {
        return item === null || item === void 0 ? void 0 : item[childrenColumnName];
      })) {
        return 'nest';
      }
      if (expandedRowRender || expandable && expandable.expandedRowRender) {
        return 'row';
      }
      return null;
    }, [rawData]);
    var internalRefs = {
      body: React.useRef()
    };
    // ============================ Width =============================
    var getContainerWidth = (0, _useContainerWidth["default"])(prefixCls);
    // ============================= Refs =============================
    var rootRef = React.useRef(null);
    var tblRef = React.useRef(null);
    (0, _useProxyImperativeHandle["default"])(ref, function () {
      return Object.assign(Object.assign({}, tblRef.current), {
        nativeElement: rootRef.current
      });
    });
    // ============================ RowKey ============================
    var getRowKey = React.useMemo(function () {
      if (typeof rowKey === 'function') {
        return rowKey;
      }
      return function (record) {
        return record === null || record === void 0 ? void 0 : record[rowKey];
      };
    }, [rowKey]);
    var _useLazyKVMap = (0, _useLazyKVMap3["default"])(rawData, childrenColumnName, getRowKey),
      _useLazyKVMap2 = _slicedToArray(_useLazyKVMap, 1),
      getRecordByKey = _useLazyKVMap2[0];
    // ============================ Events =============================
    var changeEventInfo = {};
    var triggerOnChange = function triggerOnChange(info, action) {
      var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _a, _b, _c;
      var changeInfo = Object.assign(Object.assign({}, changeEventInfo), info);
      if (reset) {
        (_a = changeEventInfo.resetPagination) === null || _a === void 0 ? void 0 : _a.call(changeEventInfo);
        // Reset event param
        if ((_b = changeInfo.pagination) === null || _b === void 0 ? void 0 : _b.current) {
          changeInfo.pagination.current = 1;
        }
        // Trigger pagination events
        if (pagination && pagination.onChange) {
          pagination.onChange(1, (_c = changeInfo.pagination) === null || _c === void 0 ? void 0 : _c.pageSize);
        }
      }
      if (scroll && scroll.scrollToFirstRowOnChange !== false && internalRefs.body.current) {
        (0, _scrollTo["default"])(0, {
          getContainer: function getContainer() {
            return internalRefs.body.current;
          }
        });
      }
      onChange === null || onChange === void 0 ? void 0 : onChange(changeInfo.pagination, changeInfo.filters, changeInfo.sorter, {
        currentDataSource: (0, _index3.getFilterData)((0, _useSorter3.getSortData)(rawData, changeInfo.sorterStates, childrenColumnName), changeInfo.filterStates, childrenColumnName),
        action: action
      });
    };
    /**
     * Controlled state in `columns` is not a good idea that makes too many code (1000+ line?) to read
     * state out and then put it back to title render. Move these code into `hooks` but still too
     * complex. We should provides Table props like `sorter` & `filter` to handle control in next big
     * version.
     */
    // ============================ Sorter =============================
    var onSorterChange = function onSorterChange(sorter, sorterStates) {
      triggerOnChange({
        sorter: sorter,
        sorterStates: sorterStates
      }, 'sort', false);
    };
    var _useSorter = (0, _useSorter3["default"])({
        prefixCls: prefixCls,
        mergedColumns: mergedColumns,
        onSorterChange: onSorterChange,
        sortDirections: sortDirections || ['ascend', 'descend'],
        tableLocale: tableLocale,
        showSorterTooltip: showSorterTooltip
      }),
      _useSorter2 = _slicedToArray(_useSorter, 4),
      transformSorterColumns = _useSorter2[0],
      sortStates = _useSorter2[1],
      sorterTitleProps = _useSorter2[2],
      getSorters = _useSorter2[3];
    var sortedData = React.useMemo(function () {
      return (0, _useSorter3.getSortData)(rawData, sortStates, childrenColumnName);
    }, [rawData, sortStates]);
    changeEventInfo.sorter = getSorters();
    changeEventInfo.sorterStates = sortStates;
    // ============================ Filter ============================
    var onFilterChange = function onFilterChange(filters, filterStates) {
      triggerOnChange({
        filters: filters,
        filterStates: filterStates
      }, 'filter', true);
    };
    var _useFilter = (0, _index3["default"])({
        prefixCls: prefixCls,
        locale: tableLocale,
        dropdownPrefixCls: dropdownPrefixCls,
        mergedColumns: mergedColumns,
        onFilterChange: onFilterChange,
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        rootClassName: (0, _classnames["default"])(rootClassName, rootCls)
      }),
      _useFilter2 = _slicedToArray(_useFilter, 3),
      transformFilterColumns = _useFilter2[0],
      filterStates = _useFilter2[1],
      filters = _useFilter2[2];
    var mergedData = (0, _index3.getFilterData)(sortedData, filterStates, childrenColumnName);
    changeEventInfo.filters = filters;
    changeEventInfo.filterStates = filterStates;
    // ============================ Column ============================
    var columnTitleProps = React.useMemo(function () {
      var mergedFilters = {};
      Object.keys(filters).forEach(function (filterKey) {
        if (filters[filterKey] !== null) {
          mergedFilters[filterKey] = filters[filterKey];
        }
      });
      return Object.assign(Object.assign({}, sorterTitleProps), {
        filters: mergedFilters
      });
    }, [sorterTitleProps, filters]);
    var _useTitleColumns = (0, _useTitleColumns3["default"])(columnTitleProps),
      _useTitleColumns2 = _slicedToArray(_useTitleColumns, 1),
      transformTitleColumns = _useTitleColumns2[0];
    // ========================== Pagination ==========================
    var onPaginationChange = function onPaginationChange(current, pageSize) {
      triggerOnChange({
        pagination: Object.assign(Object.assign({}, changeEventInfo.pagination), {
          current: current,
          pageSize: pageSize
        })
      }, 'paginate');
    };
    var _usePagination = (0, _usePagination3["default"])(mergedData.length, onPaginationChange, pagination),
      _usePagination2 = _slicedToArray(_usePagination, 2),
      mergedPagination = _usePagination2[0],
      resetPagination = _usePagination2[1];
    changeEventInfo.pagination = pagination === false ? {} : (0, _usePagination3.getPaginationParam)(mergedPagination, pagination);
    changeEventInfo.resetPagination = resetPagination;
    // ============================= Data =============================
    var pageData = React.useMemo(function () {
      if (pagination === false || !mergedPagination.pageSize) {
        return mergedData;
      }
      var _mergedPagination$cur = mergedPagination.current,
        current = _mergedPagination$cur === void 0 ? 1 : _mergedPagination$cur,
        total = mergedPagination.total,
        _mergedPagination$pag = mergedPagination.pageSize,
        pageSize = _mergedPagination$pag === void 0 ? _usePagination3.DEFAULT_PAGE_SIZE : _mergedPagination$pag;
      process.env.NODE_ENV !== "production" ? warning(current > 0, 'usage', '`current` should be positive number.') : void 0;
      // Dynamic table data
      if (mergedData.length < total) {
        if (mergedData.length > pageSize) {
          process.env.NODE_ENV !== "production" ? warning(false, 'usage', '`dataSource` length is less than `pagination.total` but large than `pagination.pageSize`. Please make sure your config correct data with async mode.') : void 0;
          return mergedData.slice((current - 1) * pageSize, current * pageSize);
        }
        return mergedData;
      }
      return mergedData.slice((current - 1) * pageSize, current * pageSize);
    }, [!!pagination, mergedData, mergedPagination && mergedPagination.current, mergedPagination && mergedPagination.pageSize, mergedPagination && mergedPagination.total]);
    // ========================== Selections ==========================
    var _useSelection = (0, _useSelection3["default"])({
        prefixCls: prefixCls,
        data: mergedData,
        pageData: pageData,
        getRowKey: getRowKey,
        getRecordByKey: getRecordByKey,
        expandType: expandType,
        childrenColumnName: childrenColumnName,
        locale: tableLocale,
        getPopupContainer: getPopupContainer || getContextPopupContainer
      }, rowSelection),
      _useSelection2 = _slicedToArray(_useSelection, 2),
      transformSelectionColumns = _useSelection2[0],
      selectedKeySet = _useSelection2[1];
    var internalRowClassName = function internalRowClassName(record, index, indent) {
      var mergedRowClassName;
      if (typeof rowClassName === 'function') {
        mergedRowClassName = (0, _classnames["default"])(rowClassName(record, index, indent));
      } else {
        mergedRowClassName = (0, _classnames["default"])(rowClassName);
      }
      return (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-row-selected"), selectedKeySet.has(getRowKey(record, index))), mergedRowClassName);
    };
    // ========================== Expandable ==========================
    // Pass origin render status into `rc-table`, this can be removed when refactor with `rc-table`
    mergedExpandable.__PARENT_RENDER_ICON__ = mergedExpandable.expandIcon;
    // Customize expandable icon
    mergedExpandable.expandIcon = mergedExpandable.expandIcon || expandIcon || (0, _ExpandIcon["default"])(tableLocale);
    // Adjust expand icon index, no overwrite expandIconColumnIndex if set.
    if (expandType === 'nest' && mergedExpandable.expandIconColumnIndex === undefined) {
      mergedExpandable.expandIconColumnIndex = rowSelection ? 1 : 0;
    } else if (mergedExpandable.expandIconColumnIndex > 0 && rowSelection) {
      mergedExpandable.expandIconColumnIndex -= 1;
    }
    // Indent size
    if (typeof mergedExpandable.indentSize !== 'number') {
      mergedExpandable.indentSize = typeof indentSize === 'number' ? indentSize : 15;
    }
    // ============================ Render ============================
    var transformColumns = React.useCallback(function (innerColumns) {
      return transformTitleColumns(transformSelectionColumns(transformFilterColumns(transformSorterColumns(innerColumns))));
    }, [transformSorterColumns, transformFilterColumns, transformSelectionColumns]);
    var topPaginationNode;
    var bottomPaginationNode;
    if (pagination !== false && (mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.total)) {
      var paginationSize;
      if (mergedPagination.size) {
        paginationSize = mergedPagination.size;
      } else {
        paginationSize = mergedSize === 'small' || mergedSize === 'middle' ? 'small' : undefined;
      }
      var renderPagination = function renderPagination(position) {
        return /*#__PURE__*/React.createElement(_index["default"], Object.assign({}, mergedPagination, {
          className: (0, _classnames["default"])("".concat(prefixCls, "-pagination ").concat(prefixCls, "-pagination-").concat(position), mergedPagination.className),
          size: paginationSize
        }));
      };
      var defaultPosition = direction === 'rtl' ? 'left' : 'right';
      var position = mergedPagination.position;
      if (position !== null && Array.isArray(position)) {
        var topPos = position.find(function (p) {
          return p.includes('top');
        });
        var bottomPos = position.find(function (p) {
          return p.includes('bottom');
        });
        var isDisable = position.every(function (p) {
          return "".concat(p) === 'none';
        });
        if (!topPos && !bottomPos && !isDisable) {
          bottomPaginationNode = renderPagination(defaultPosition);
        }
        if (topPos) {
          topPaginationNode = renderPagination(topPos.toLowerCase().replace('top', ''));
        }
        if (bottomPos) {
          bottomPaginationNode = renderPagination(bottomPos.toLowerCase().replace('bottom', ''));
        }
      } else {
        bottomPaginationNode = renderPagination(defaultPosition);
      }
    }
    // >>>>>>>>> Spinning
    var spinProps;
    if (typeof loading === 'boolean') {
      spinProps = {
        spinning: loading
      };
    } else if (_typeof(loading) === 'object') {
      spinProps = Object.assign({
        spinning: true
      }, loading);
    }
    var wrapperClassNames = (0, _classnames["default"])(cssVarCls, rootCls, "".concat(prefixCls, "-wrapper"), table === null || table === void 0 ? void 0 : table.className, _defineProperty({}, "".concat(prefixCls, "-wrapper-rtl"), direction === 'rtl'), className, rootClassName, hashId);
    var mergedStyle = Object.assign(Object.assign({}, table === null || table === void 0 ? void 0 : table.style), style);
    var emptyText = locale && locale.emptyText || (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Table')) || ( /*#__PURE__*/React.createElement(_defaultRenderEmpty["default"], {
      componentName: "Table"
    }));
    // ========================== Render ==========================
    var TableComponent = virtual ? _VirtualTable["default"] : _index4["default"];
    // >>> Virtual Table props. We set height here since it will affect height collection
    var virtualProps = {};
    var listItemHeight = React.useMemo(function () {
      var fontSize = token.fontSize,
        lineHeight = token.lineHeight,
        padding = token.padding,
        paddingXS = token.paddingXS,
        paddingSM = token.paddingSM;
      var fontHeight = Math.floor(fontSize * lineHeight);
      switch (mergedSize) {
        case 'large':
          return padding * 2 + fontHeight;
        case 'small':
          return paddingXS * 2 + fontHeight;
        default:
          return paddingSM * 2 + fontHeight;
      }
    }, [token, mergedSize]);
    if (virtual) {
      virtualProps.listItemHeight = listItemHeight;
    }
    return wrapCSSVar( /*#__PURE__*/React.createElement("div", {
      ref: rootRef,
      className: wrapperClassNames,
      style: mergedStyle
    }, /*#__PURE__*/React.createElement(_index2["default"], Object.assign({
      spinning: false
    }, spinProps), topPaginationNode, /*#__PURE__*/React.createElement(TableComponent, Object.assign({}, virtualProps, tableProps, {
      ref: tblRef,
      columns: mergedColumns,
      direction: direction,
      expandable: mergedExpandable,
      prefixCls: prefixCls,
      className: (0, _classnames["default"])(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-middle"), mergedSize === 'middle'), "".concat(prefixCls, "-small"), mergedSize === 'small'), "".concat(prefixCls, "-bordered"), bordered), "".concat(prefixCls, "-empty"), rawData.length === 0), cssVarCls, rootCls, hashId),
      data: pageData,
      rowKey: getRowKey,
      rowClassName: internalRowClassName,
      emptyText: emptyText,
      // Internal
      internalHooks: _rcTable.INTERNAL_HOOKS,
      internalRefs: internalRefs,
      transformColumns: transformColumns,
      getContainerWidth: getContainerWidth
    })), bottomPaginationNode)));
  };
  var _default = _exports["default"] = /*#__PURE__*/React.forwardRef(InternalTable);
});