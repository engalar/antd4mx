function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "@ant-design/icons/es/icons/FilterFilled", "classnames", "rc-util/es/isEqual", "antd4mx/_util/hooks/useSyncState", "antd4mx/_util/warning", "antd4mx/button/index", "antd4mx/checkbox/index", "antd4mx/config-provider/context", "antd4mx/dropdown/index", "antd4mx/empty/index", "antd4mx/menu/index", "antd4mx/menu/OverrideContext", "antd4mx/radio/index", "antd4mx/tree/index", "antd4mx/table/hooks/useFilter/FilterSearch", "antd4mx/table/hooks/useFilter/FilterWrapper"], function (_exports, _toConsumableArray2, React, _FilterFilled, _classnames, _isEqual, _useSyncState3, _warning, _index, _index2, _context, _index3, _index4, _index5, _OverrideContext, _index6, _index7, _FilterSearch, _FilterWrapper) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _exports.flattenKeys = flattenKeys;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function flattenKeys(filters) {
    var keys = [];
    (filters || []).forEach(function (_ref) {
      var value = _ref.value,
        children = _ref.children;
      keys.push(value);
      if (children) {
        keys = [].concat((0, _toConsumableArray2["default"])(keys), (0, _toConsumableArray2["default"])(flattenKeys(children)));
      }
    });
    return keys;
  }
  function hasSubMenu(filters) {
    return filters.some(function (_ref2) {
      var children = _ref2.children;
      return children;
    });
  }
  function searchValueMatched(searchValue, text) {
    if (typeof text === 'string' || typeof text === 'number') {
      return text === null || text === void 0 ? void 0 : text.toString().toLowerCase().includes(searchValue.trim().toLowerCase());
    }
    return false;
  }
  function renderFilterItems(_ref3) {
    var filters = _ref3.filters,
      prefixCls = _ref3.prefixCls,
      filteredKeys = _ref3.filteredKeys,
      filterMultiple = _ref3.filterMultiple,
      searchValue = _ref3.searchValue,
      filterSearch = _ref3.filterSearch;
    return filters.map(function (filter, index) {
      var key = String(filter.value);
      if (filter.children) {
        return {
          key: key || index,
          label: filter.text,
          popupClassName: "".concat(prefixCls, "-dropdown-submenu"),
          children: renderFilterItems({
            filters: filter.children,
            prefixCls: prefixCls,
            filteredKeys: filteredKeys,
            filterMultiple: filterMultiple,
            searchValue: searchValue,
            filterSearch: filterSearch
          })
        };
      }
      var Component = filterMultiple ? _index2["default"] : _index6["default"];
      var item = {
        key: filter.value !== undefined ? key : index,
        label: ( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Component, {
          checked: filteredKeys.includes(key)
        }), /*#__PURE__*/React.createElement("span", null, filter.text)))
      };
      if (searchValue.trim()) {
        if (typeof filterSearch === 'function') {
          return filterSearch(searchValue, filter) ? item : null;
        }
        return searchValueMatched(searchValue, filter.text) ? item : null;
      }
      return item;
    });
  }
  function wrapStringListType(keys) {
    return keys || [];
  }
  function FilterDropdown(props) {
    var _a, _b;
    var tablePrefixCls = props.tablePrefixCls,
      prefixCls = props.prefixCls,
      column = props.column,
      dropdownPrefixCls = props.dropdownPrefixCls,
      columnKey = props.columnKey,
      filterMultiple = props.filterMultiple,
      _props$filterMode = props.filterMode,
      filterMode = _props$filterMode === void 0 ? 'menu' : _props$filterMode,
      _props$filterSearch = props.filterSearch,
      filterSearch = _props$filterSearch === void 0 ? false : _props$filterSearch,
      filterState = props.filterState,
      triggerFilter = props.triggerFilter,
      locale = props.locale,
      children = props.children,
      getPopupContainer = props.getPopupContainer,
      rootClassName = props.rootClassName;
    var filterDropdownOpen = column.filterDropdownOpen,
      onFilterDropdownOpenChange = column.onFilterDropdownOpenChange,
      filterResetToDefaultFilteredValue = column.filterResetToDefaultFilteredValue,
      defaultFilteredValue = column.defaultFilteredValue,
      filterDropdownVisible = column.filterDropdownVisible,
      onFilterDropdownVisibleChange = column.onFilterDropdownVisibleChange;
    var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];
    var filtered = !!(filterState && (((_a = filterState.filteredKeys) === null || _a === void 0 ? void 0 : _a.length) || filterState.forceFiltered));
    var triggerVisible = function triggerVisible(newVisible) {
      setVisible(newVisible);
      onFilterDropdownOpenChange === null || onFilterDropdownOpenChange === void 0 ? void 0 : onFilterDropdownOpenChange(newVisible);
      onFilterDropdownVisibleChange === null || onFilterDropdownVisibleChange === void 0 ? void 0 : onFilterDropdownVisibleChange(newVisible);
    };
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Table');
      [['filterDropdownVisible', 'filterDropdownOpen', filterDropdownVisible], ['onFilterDropdownVisibleChange', 'onFilterDropdownOpenChange', onFilterDropdownVisibleChange]].forEach(function (_ref4) {
        var _ref8 = _slicedToArray(_ref4, 3),
          deprecatedName = _ref8[0],
          newName = _ref8[1],
          prop = _ref8[2];
        warning.deprecated(prop === undefined || prop === null, deprecatedName, newName);
      });
    }
    var mergedVisible = (_b = filterDropdownOpen !== null && filterDropdownOpen !== void 0 ? filterDropdownOpen : filterDropdownVisible) !== null && _b !== void 0 ? _b : visible;
    // ===================== Select Keys =====================
    var propFilteredKeys = filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys;
    var _useSyncState = (0, _useSyncState3["default"])(wrapStringListType(propFilteredKeys)),
      _useSyncState2 = _slicedToArray(_useSyncState, 2),
      getFilteredKeysSync = _useSyncState2[0],
      setFilteredKeysSync = _useSyncState2[1];
    var onSelectKeys = function onSelectKeys(_ref5) {
      var selectedKeys = _ref5.selectedKeys;
      setFilteredKeysSync(selectedKeys);
    };
    var onCheck = function onCheck(keys, _ref6) {
      var node = _ref6.node,
        checked = _ref6.checked;
      if (!filterMultiple) {
        onSelectKeys({
          selectedKeys: checked && node.key ? [node.key] : []
        });
      } else {
        onSelectKeys({
          selectedKeys: keys
        });
      }
    };
    React.useEffect(function () {
      if (!visible) {
        return;
      }
      onSelectKeys({
        selectedKeys: wrapStringListType(propFilteredKeys)
      });
    }, [propFilteredKeys]);
    // ====================== Open Keys ======================
    var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      openKeys = _React$useState4[0],
      setOpenKeys = _React$useState4[1];
    var onOpenChange = function onOpenChange(keys) {
      setOpenKeys(keys);
    };
    // search in tree mode column filter
    var _React$useState5 = React.useState(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      searchValue = _React$useState6[0],
      setSearchValue = _React$useState6[1];
    var onSearch = function onSearch(e) {
      var value = e.target.value;
      setSearchValue(value);
    };
    // clear search value after close filter dropdown
    React.useEffect(function () {
      if (!visible) {
        setSearchValue('');
      }
    }, [visible]);
    // ======================= Submit ========================
    var internalTriggerFilter = function internalTriggerFilter(keys) {
      var mergedKeys = keys && keys.length ? keys : null;
      if (mergedKeys === null && (!filterState || !filterState.filteredKeys)) {
        return null;
      }
      if ((0, _isEqual["default"])(mergedKeys, filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys, true)) {
        return null;
      }
      triggerFilter({
        column: column,
        key: columnKey,
        filteredKeys: mergedKeys
      });
    };
    var onConfirm = function onConfirm() {
      triggerVisible(false);
      internalTriggerFilter(getFilteredKeysSync());
    };
    var onReset = function onReset() {
      var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          confirm: false,
          closeDropdown: false
        },
        confirm = _ref9.confirm,
        closeDropdown = _ref9.closeDropdown;
      if (confirm) {
        internalTriggerFilter([]);
      }
      if (closeDropdown) {
        triggerVisible(false);
      }
      setSearchValue('');
      if (filterResetToDefaultFilteredValue) {
        setFilteredKeysSync((defaultFilteredValue || []).map(function (key) {
          return String(key);
        }));
      } else {
        setFilteredKeysSync([]);
      }
    };
    var doFilter = function doFilter() {
      var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          closeDropdown: true
        },
        closeDropdown = _ref10.closeDropdown;
      if (closeDropdown) {
        triggerVisible(false);
      }
      internalTriggerFilter(getFilteredKeysSync());
    };
    var onVisibleChange = function onVisibleChange(newVisible, info) {
      if (info.source === 'trigger') {
        if (newVisible && propFilteredKeys !== undefined) {
          // Sync filteredKeys on appear in controlled mode (propFilteredKeys !== undefined)
          setFilteredKeysSync(wrapStringListType(propFilteredKeys));
        }
        triggerVisible(newVisible);
        // Default will filter when closed
        if (!newVisible && !column.filterDropdown) {
          onConfirm();
        }
      }
    };
    // ======================== Style ========================
    var dropdownMenuClass = (0, _classnames["default"])(_defineProperty({}, "".concat(dropdownPrefixCls, "-menu-without-submenu"), !hasSubMenu(column.filters || [])));
    var onCheckAll = function onCheckAll(e) {
      if (e.target.checked) {
        var allFilterKeys = flattenKeys(column === null || column === void 0 ? void 0 : column.filters).map(function (key) {
          return String(key);
        });
        setFilteredKeysSync(allFilterKeys);
      } else {
        setFilteredKeysSync([]);
      }
    };
    var getTreeData = function getTreeData(_ref7) {
      var filters = _ref7.filters;
      return (filters || []).map(function (filter, index) {
        var key = String(filter.value);
        var item = {
          title: filter.text,
          key: filter.value !== undefined ? key : String(index)
        };
        if (filter.children) {
          item.children = getTreeData({
            filters: filter.children
          });
        }
        return item;
      });
    };
    var getFilterData = function getFilterData(node) {
      var _a;
      return Object.assign(Object.assign({}, node), {
        text: node.title,
        value: node.key,
        children: ((_a = node.children) === null || _a === void 0 ? void 0 : _a.map(function (item) {
          return getFilterData(item);
        })) || []
      });
    };
    var dropdownContent;
    if (typeof column.filterDropdown === 'function') {
      dropdownContent = column.filterDropdown({
        prefixCls: "".concat(dropdownPrefixCls, "-custom"),
        setSelectedKeys: function setSelectedKeys(selectedKeys) {
          return onSelectKeys({
            selectedKeys: selectedKeys
          });
        },
        selectedKeys: getFilteredKeysSync(),
        confirm: doFilter,
        clearFilters: onReset,
        filters: column.filters,
        visible: mergedVisible,
        close: function close() {
          triggerVisible(false);
        }
      });
    } else if (column.filterDropdown) {
      dropdownContent = column.filterDropdown;
    } else {
      var selectedKeys = getFilteredKeysSync() || [];
      var getFilterComponent = function getFilterComponent() {
        if ((column.filters || []).length === 0) {
          return /*#__PURE__*/React.createElement(_index4["default"], {
            image: _index4["default"].PRESENTED_IMAGE_SIMPLE,
            description: locale.filterEmptyText,
            imageStyle: {
              height: 24
            },
            style: {
              margin: 0,
              padding: '16px 0'
            }
          });
        }
        if (filterMode === 'tree') {
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_FilterSearch["default"], {
            filterSearch: filterSearch,
            value: searchValue,
            onChange: onSearch,
            tablePrefixCls: tablePrefixCls,
            locale: locale
          }), /*#__PURE__*/React.createElement("div", {
            className: "".concat(tablePrefixCls, "-filter-dropdown-tree")
          }, filterMultiple ? ( /*#__PURE__*/React.createElement(_index2["default"], {
            checked: selectedKeys.length === flattenKeys(column.filters).length,
            indeterminate: selectedKeys.length > 0 && selectedKeys.length < flattenKeys(column.filters).length,
            className: "".concat(tablePrefixCls, "-filter-dropdown-checkall"),
            onChange: onCheckAll
          }, locale.filterCheckall)) : null, /*#__PURE__*/React.createElement(_index7["default"], {
            checkable: true,
            selectable: false,
            blockNode: true,
            multiple: filterMultiple,
            checkStrictly: !filterMultiple,
            className: "".concat(dropdownPrefixCls, "-menu"),
            onCheck: onCheck,
            checkedKeys: selectedKeys,
            selectedKeys: selectedKeys,
            showIcon: false,
            treeData: getTreeData({
              filters: column.filters
            }),
            autoExpandParent: true,
            defaultExpandAll: true,
            filterTreeNode: searchValue.trim() ? function (node) {
              if (typeof filterSearch === 'function') {
                return filterSearch(searchValue, getFilterData(node));
              }
              return searchValueMatched(searchValue, node.title);
            } : undefined
          })));
        }
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_FilterSearch["default"], {
          filterSearch: filterSearch,
          value: searchValue,
          onChange: onSearch,
          tablePrefixCls: tablePrefixCls,
          locale: locale
        }), /*#__PURE__*/React.createElement(_index5["default"], {
          selectable: true,
          multiple: filterMultiple,
          prefixCls: "".concat(dropdownPrefixCls, "-menu"),
          className: dropdownMenuClass,
          onSelect: onSelectKeys,
          onDeselect: onSelectKeys,
          selectedKeys: selectedKeys,
          getPopupContainer: getPopupContainer,
          openKeys: openKeys,
          onOpenChange: onOpenChange,
          items: renderFilterItems({
            filters: column.filters || [],
            filterSearch: filterSearch,
            prefixCls: prefixCls,
            filteredKeys: getFilteredKeysSync(),
            filterMultiple: filterMultiple,
            searchValue: searchValue
          })
        }));
      };
      var getResetDisabled = function getResetDisabled() {
        if (filterResetToDefaultFilteredValue) {
          return (0, _isEqual["default"])((defaultFilteredValue || []).map(function (key) {
            return String(key);
          }), selectedKeys, true);
        }
        return selectedKeys.length === 0;
      };
      dropdownContent = /*#__PURE__*/React.createElement(React.Fragment, null, getFilterComponent(), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-dropdown-btns")
      }, /*#__PURE__*/React.createElement(_index["default"], {
        type: "link",
        size: "small",
        disabled: getResetDisabled(),
        onClick: function onClick() {
          return onReset();
        }
      }, locale.filterReset), /*#__PURE__*/React.createElement(_index["default"], {
        type: "primary",
        size: "small",
        onClick: onConfirm
      }, locale.filterConfirm)));
    }
    // We should not block customize Menu with additional props
    if (column.filterDropdown) {
      dropdownContent = /*#__PURE__*/React.createElement(_OverrideContext.OverrideProvider, {
        selectable: undefined
      }, dropdownContent);
    }
    var menu = function menu() {
      return /*#__PURE__*/React.createElement(_FilterWrapper["default"], {
        className: "".concat(prefixCls, "-dropdown")
      }, dropdownContent);
    };
    var filterIcon;
    if (typeof column.filterIcon === 'function') {
      filterIcon = column.filterIcon(filtered);
    } else if (column.filterIcon) {
      filterIcon = column.filterIcon;
    } else {
      filterIcon = /*#__PURE__*/React.createElement(_FilterFilled["default"], null);
    }
    var _React$useContext = React.useContext(_context.ConfigContext),
      direction = _React$useContext.direction;
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-column")
    }, /*#__PURE__*/React.createElement("span", {
      className: "".concat(tablePrefixCls, "-column-title")
    }, children), /*#__PURE__*/React.createElement(_index3["default"], {
      dropdownRender: menu,
      trigger: ['click'],
      open: mergedVisible,
      onOpenChange: onVisibleChange,
      getPopupContainer: getPopupContainer,
      placement: direction === 'rtl' ? 'bottomLeft' : 'bottomRight',
      rootClassName: rootClassName
    }, /*#__PURE__*/React.createElement("span", {
      role: "button",
      tabIndex: -1,
      className: (0, _classnames["default"])("".concat(prefixCls, "-trigger"), {
        active: filtered
      }),
      onClick: function onClick(e) {
        e.stopPropagation();
      }
    }, filterIcon)));
  }
  var _default = _exports["default"] = FilterDropdown;
});