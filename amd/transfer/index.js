function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "classnames", "antd4mx/_util/hooks/useMultipleSelect", "antd4mx/_util/statusUtils", "antd4mx/_util/transKeys", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/config-provider/defaultRenderEmpty", "antd4mx/form/context", "antd4mx/locale/index", "antd4mx/locale/en_US", "antd4mx/transfer/hooks/useData", "antd4mx/transfer/hooks/useSelection", "antd4mx/transfer/list", "antd4mx/transfer/operation", "antd4mx/transfer/search", "antd4mx/transfer/style/index"], function (_exports, _toConsumableArray2, _react, _classnames, _useMultipleSelect5, _statusUtils, _transKeys, _warning, _index, _defaultRenderEmpty, _context, _index2, _en_US, _useData3, _useSelection3, _list, _operation, _search, _index3) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var Transfer = function Transfer(props) {
    var dataSource = props.dataSource,
      _props$targetKeys = props.targetKeys,
      targetKeys = _props$targetKeys === void 0 ? [] : _props$targetKeys,
      selectedKeys = props.selectedKeys,
      _props$selectAllLabel = props.selectAllLabels,
      selectAllLabels = _props$selectAllLabel === void 0 ? [] : _props$selectAllLabel,
      _props$operations = props.operations,
      operations = _props$operations === void 0 ? [] : _props$operations,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      _props$listStyle = props.listStyle,
      listStyle = _props$listStyle === void 0 ? {} : _props$listStyle,
      _props$locale = props.locale,
      locale = _props$locale === void 0 ? {} : _props$locale,
      titles = props.titles,
      disabled = props.disabled,
      _props$showSearch = props.showSearch,
      showSearch = _props$showSearch === void 0 ? false : _props$showSearch,
      operationStyle = props.operationStyle,
      showSelectAll = props.showSelectAll,
      oneWay = props.oneWay,
      pagination = props.pagination,
      customStatus = props.status,
      customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      selectionsIcon = props.selectionsIcon,
      filterOption = props.filterOption,
      render = props.render,
      footer = props.footer,
      children = props.children,
      rowKey = props.rowKey,
      onScroll = props.onScroll,
      onChange = props.onChange,
      onSearch = props.onSearch,
      onSelectChange = props.onSelectChange;
    var _useContext = (0, _react.useContext)(_index.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls,
      renderEmpty = _useContext.renderEmpty,
      dir = _useContext.direction,
      transfer = _useContext.transfer;
    var prefixCls = getPrefixCls('transfer', customizePrefixCls);
    var _useStyle = (0, _index3["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    // Fill record with `key`
    var _useData = (0, _useData3["default"])(dataSource, rowKey, targetKeys),
      _useData2 = _slicedToArray(_useData, 3),
      mergedDataSource = _useData2[0],
      leftDataSource = _useData2[1],
      rightDataSource = _useData2[2];
    // Get direction selected keys
    var _useSelection = (0, _useSelection3["default"])(leftDataSource, rightDataSource, selectedKeys),
      _useSelection2 = _slicedToArray(_useSelection, 4),
      // Keys
      sourceSelectedKeys = _useSelection2[0],
      targetSelectedKeys = _useSelection2[1],
      // Setters
      setSourceSelectedKeys = _useSelection2[2],
      setTargetSelectedKeys = _useSelection2[3];
    var _useMultipleSelect = (0, _useMultipleSelect5["default"])(function (item) {
        return item.key;
      }),
      _useMultipleSelect2 = _slicedToArray(_useMultipleSelect, 2),
      leftMultipleSelect = _useMultipleSelect2[0],
      updateLeftPrevSelectedIndex = _useMultipleSelect2[1];
    var _useMultipleSelect3 = (0, _useMultipleSelect5["default"])(function (item) {
        return item.key;
      }),
      _useMultipleSelect4 = _slicedToArray(_useMultipleSelect3, 2),
      rightMultipleSelect = _useMultipleSelect4[0],
      updateRightPrevSelectedIndex = _useMultipleSelect4[1];
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Transfer');
      process.env.NODE_ENV !== "production" ? warning(!pagination || !children, 'usage', '`pagination` not support customize render list.') : void 0;
    }
    var setStateKeys = (0, _react.useCallback)(function (direction, keys) {
      if (direction === 'left') {
        var nextKeys = typeof keys === 'function' ? keys(sourceSelectedKeys || []) : keys;
        setSourceSelectedKeys(nextKeys);
      } else {
        var _nextKeys = typeof keys === 'function' ? keys(targetSelectedKeys || []) : keys;
        setTargetSelectedKeys(_nextKeys);
      }
    }, [sourceSelectedKeys, targetSelectedKeys]);
    var setPrevSelectedIndex = function setPrevSelectedIndex(direction, value) {
      var isLeftDirection = direction === 'left';
      var updatePrevSelectedIndex = isLeftDirection ? updateLeftPrevSelectedIndex : updateRightPrevSelectedIndex;
      updatePrevSelectedIndex(value);
    };
    var handleSelectChange = (0, _react.useCallback)(function (direction, holder) {
      if (direction === 'left') {
        onSelectChange === null || onSelectChange === void 0 ? void 0 : onSelectChange(holder, targetSelectedKeys);
      } else {
        onSelectChange === null || onSelectChange === void 0 ? void 0 : onSelectChange(sourceSelectedKeys, holder);
      }
    }, [sourceSelectedKeys, targetSelectedKeys]);
    var getTitles = function getTitles(transferLocale) {
      var _a;
      return (_a = titles !== null && titles !== void 0 ? titles : transferLocale.titles) !== null && _a !== void 0 ? _a : [];
    };
    var handleLeftScroll = function handleLeftScroll(e) {
      onScroll === null || onScroll === void 0 ? void 0 : onScroll('left', e);
    };
    var handleRightScroll = function handleRightScroll(e) {
      onScroll === null || onScroll === void 0 ? void 0 : onScroll('right', e);
    };
    var moveTo = function moveTo(direction) {
      var moveKeys = direction === 'right' ? sourceSelectedKeys : targetSelectedKeys;
      var dataSourceDisabledKeysMap = (0, _transKeys.groupDisabledKeysMap)(mergedDataSource);
      // filter the disabled options
      var newMoveKeys = moveKeys.filter(function (key) {
        return !dataSourceDisabledKeysMap.has(key);
      });
      var newMoveKeysMap = (0, _transKeys.groupKeysMap)(newMoveKeys);
      // move items to target box
      var newTargetKeys = direction === 'right' ? newMoveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
        return !newMoveKeysMap.has(targetKey);
      });
      // empty checked keys
      var oppositeDirection = direction === 'right' ? 'left' : 'right';
      setStateKeys(oppositeDirection, []);
      handleSelectChange(oppositeDirection, []);
      onChange === null || onChange === void 0 ? void 0 : onChange(newTargetKeys, direction, newMoveKeys);
    };
    var moveToLeft = function moveToLeft() {
      moveTo('left');
      setPrevSelectedIndex('left', null);
    };
    var moveToRight = function moveToRight() {
      moveTo('right');
      setPrevSelectedIndex('right', null);
    };
    var onItemSelectAll = function onItemSelectAll(direction, keys, checkAll) {
      setStateKeys(direction, function (prevKeys) {
        var mergedCheckedKeys = [];
        if (checkAll === 'replace') {
          mergedCheckedKeys = keys;
        } else if (checkAll) {
          // Merge current keys with origin key
          mergedCheckedKeys = Array.from(new Set([].concat((0, _toConsumableArray2["default"])(prevKeys), (0, _toConsumableArray2["default"])(keys))));
        } else {
          var selectedKeysMap = (0, _transKeys.groupKeysMap)(keys);
          // Remove current keys from origin keys
          mergedCheckedKeys = prevKeys.filter(function (key) {
            return !selectedKeysMap.has(key);
          });
        }
        handleSelectChange(direction, mergedCheckedKeys);
        return mergedCheckedKeys;
      });
      setPrevSelectedIndex(direction, null);
    };
    var onLeftItemSelectAll = function onLeftItemSelectAll(keys, checkAll) {
      onItemSelectAll('left', keys, checkAll);
    };
    var onRightItemSelectAll = function onRightItemSelectAll(keys, checkAll) {
      onItemSelectAll('right', keys, checkAll);
    };
    var leftFilter = function leftFilter(e) {
      return onSearch === null || onSearch === void 0 ? void 0 : onSearch('left', e.target.value);
    };
    var rightFilter = function rightFilter(e) {
      return onSearch === null || onSearch === void 0 ? void 0 : onSearch('right', e.target.value);
    };
    var handleLeftClear = function handleLeftClear() {
      return onSearch === null || onSearch === void 0 ? void 0 : onSearch('left', '');
    };
    var handleRightClear = function handleRightClear() {
      return onSearch === null || onSearch === void 0 ? void 0 : onSearch('right', '');
    };
    var handleSingleSelect = function handleSingleSelect(direction, holder, selectedKey, checked, currentSelectedIndex) {
      var isSelected = holder.has(selectedKey);
      if (isSelected) {
        holder["delete"](selectedKey);
        setPrevSelectedIndex(direction, null);
      }
      if (checked) {
        holder.add(selectedKey);
        setPrevSelectedIndex(direction, currentSelectedIndex);
      }
    };
    var handleMultipleSelect = function handleMultipleSelect(direction, data, holder, currentSelectedIndex) {
      var isLeftDirection = direction === 'left';
      var multipleSelect = isLeftDirection ? leftMultipleSelect : rightMultipleSelect;
      multipleSelect(currentSelectedIndex, data, holder);
    };
    var onItemSelect = function onItemSelect(direction, selectedKey, checked, multiple) {
      var isLeftDirection = direction === 'left';
      var holder = (0, _toConsumableArray2["default"])(isLeftDirection ? sourceSelectedKeys : targetSelectedKeys);
      var holderSet = new Set(holder);
      var data = (0, _toConsumableArray2["default"])(isLeftDirection ? leftDataSource : rightDataSource).filter(function (item) {
        return !item.disabled;
      });
      var currentSelectedIndex = data.findIndex(function (item) {
        return item.key === selectedKey;
      });
      // multiple select by hold down the shift key
      if (multiple && holder.length > 0) {
        handleMultipleSelect(direction, data, holderSet, currentSelectedIndex);
      } else {
        handleSingleSelect(direction, holderSet, selectedKey, checked, currentSelectedIndex);
      }
      var holderArr = Array.from(holderSet);
      handleSelectChange(direction, holderArr);
      if (!props.selectedKeys) {
        setStateKeys(direction, holderArr);
      }
    };
    var onLeftItemSelect = function onLeftItemSelect(selectedKey, checked, e) {
      onItemSelect('left', selectedKey, checked, e === null || e === void 0 ? void 0 : e.shiftKey);
    };
    var onRightItemSelect = function onRightItemSelect(selectedKey, checked, e) {
      onItemSelect('right', selectedKey, checked, e === null || e === void 0 ? void 0 : e.shiftKey);
    };
    var onRightItemRemove = function onRightItemRemove(keys) {
      setStateKeys('right', []);
      onChange === null || onChange === void 0 ? void 0 : onChange(targetKeys.filter(function (key) {
        return !keys.includes(key);
      }), 'left', (0, _toConsumableArray2["default"])(keys));
    };
    var handleListStyle = function handleListStyle(direction) {
      if (typeof listStyle === 'function') {
        return listStyle({
          direction: direction
        });
      }
      return listStyle || {};
    };
    var formItemContext = (0, _react.useContext)(_context.FormItemInputContext);
    var hasFeedback = formItemContext.hasFeedback,
      status = formItemContext.status;
    var getLocale = function getLocale(transferLocale) {
      return Object.assign(Object.assign(Object.assign({}, transferLocale), {
        notFoundContent: (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Transfer')) || /*#__PURE__*/_react["default"].createElement(_defaultRenderEmpty["default"], {
          componentName: "Transfer"
        })
      }), locale);
    };
    var mergedStatus = (0, _statusUtils.getMergedStatus)(status, customStatus);
    var mergedPagination = !children && pagination;
    var leftActive = targetSelectedKeys.length > 0;
    var rightActive = sourceSelectedKeys.length > 0;
    var cls = (0, _classnames["default"])(prefixCls, _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-disabled"), disabled), "".concat(prefixCls, "-customize-list"), !!children), "".concat(prefixCls, "-rtl"), dir === 'rtl'), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus, hasFeedback), transfer === null || transfer === void 0 ? void 0 : transfer.className, className, rootClassName, hashId, cssVarCls);
    var _useLocale = (0, _index2.useLocale)('Transfer', _en_US["default"].Transfer),
      _useLocale2 = _slicedToArray(_useLocale, 1),
      contextLocale = _useLocale2[0];
    var listLocale = getLocale(contextLocale);
    var _getTitles = getTitles(listLocale),
      _getTitles2 = _slicedToArray(_getTitles, 2),
      leftTitle = _getTitles2[0],
      rightTitle = _getTitles2[1];
    var mergedSelectionsIcon = selectionsIcon !== null && selectionsIcon !== void 0 ? selectionsIcon : transfer === null || transfer === void 0 ? void 0 : transfer.selectionsIcon;
    return wrapCSSVar( /*#__PURE__*/_react["default"].createElement("div", {
      className: cls,
      style: Object.assign(Object.assign({}, transfer === null || transfer === void 0 ? void 0 : transfer.style), style)
    }, /*#__PURE__*/_react["default"].createElement(_list["default"], Object.assign({
      prefixCls: "".concat(prefixCls, "-list"),
      titleText: leftTitle,
      dataSource: leftDataSource,
      filterOption: filterOption,
      style: handleListStyle('left'),
      checkedKeys: sourceSelectedKeys,
      handleFilter: leftFilter,
      handleClear: handleLeftClear,
      onItemSelect: onLeftItemSelect,
      onItemSelectAll: onLeftItemSelectAll,
      render: render,
      showSearch: showSearch,
      renderList: children,
      footer: footer,
      onScroll: handleLeftScroll,
      disabled: disabled,
      direction: dir === 'rtl' ? 'right' : 'left',
      showSelectAll: showSelectAll,
      selectAllLabel: selectAllLabels[0],
      pagination: mergedPagination,
      selectionsIcon: mergedSelectionsIcon
    }, listLocale)), /*#__PURE__*/_react["default"].createElement(_operation["default"], {
      className: "".concat(prefixCls, "-operation"),
      rightActive: rightActive,
      rightArrowText: operations[0],
      moveToRight: moveToRight,
      leftActive: leftActive,
      leftArrowText: operations[1],
      moveToLeft: moveToLeft,
      style: operationStyle,
      disabled: disabled,
      direction: dir,
      oneWay: oneWay
    }), /*#__PURE__*/_react["default"].createElement(_list["default"], Object.assign({
      prefixCls: "".concat(prefixCls, "-list"),
      titleText: rightTitle,
      dataSource: rightDataSource,
      filterOption: filterOption,
      style: handleListStyle('right'),
      checkedKeys: targetSelectedKeys,
      handleFilter: rightFilter,
      handleClear: handleRightClear,
      onItemSelect: onRightItemSelect,
      onItemSelectAll: onRightItemSelectAll,
      onItemRemove: onRightItemRemove,
      render: render,
      showSearch: showSearch,
      renderList: children,
      footer: footer,
      onScroll: handleRightScroll,
      disabled: disabled,
      direction: dir === 'rtl' ? 'left' : 'right',
      showSelectAll: showSelectAll,
      selectAllLabel: selectAllLabels[1],
      showRemove: oneWay,
      pagination: mergedPagination,
      selectionsIcon: mergedSelectionsIcon
    }, listLocale))));
  };
  if (process.env.NODE_ENV !== 'production') {
    Transfer.displayName = 'Transfer';
  }
  Transfer.List = _list["default"];
  Transfer.Search = _search["default"];
  Transfer.Operation = _operation["default"];
  var _default = _exports["default"] = Transfer;
});