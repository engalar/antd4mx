function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@ant-design/icons/es/icons/DownOutlined", "classnames", "rc-util/es/omit", "antd4mx/_util/reactNode", "antd4mx/_util/transKeys", "antd4mx/checkbox/index", "antd4mx/dropdown/index", "antd4mx/transfer/ListBody", "antd4mx/transfer/search"], function (_exports, _react, _DownOutlined, _classnames, _omit, _reactNode, _transKeys, _index, _index2, _ListBody, _search) {
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
  var defaultRender = function defaultRender() {
    return null;
  };
  function isRenderResultPlainObject(result) {
    return !!(result && !(0, _reactNode.isValidElement)(result) && Object.prototype.toString.call(result) === '[object Object]');
  }
  function getEnabledItemKeys(items) {
    return items.filter(function (data) {
      return !data.disabled;
    }).map(function (data) {
      return data.key;
    });
  }
  var isValidIcon = function isValidIcon(icon) {
    return icon !== undefined;
  };
  var TransferList = function TransferList(props) {
    var prefixCls = props.prefixCls,
      _props$dataSource = props.dataSource,
      dataSource = _props$dataSource === void 0 ? [] : _props$dataSource,
      _props$titleText = props.titleText,
      titleText = _props$titleText === void 0 ? '' : _props$titleText,
      checkedKeys = props.checkedKeys,
      disabled = props.disabled,
      _props$showSearch = props.showSearch,
      showSearch = _props$showSearch === void 0 ? false : _props$showSearch,
      style = props.style,
      searchPlaceholder = props.searchPlaceholder,
      notFoundContent = props.notFoundContent,
      selectAll = props.selectAll,
      selectCurrent = props.selectCurrent,
      selectInvert = props.selectInvert,
      removeAll = props.removeAll,
      removeCurrent = props.removeCurrent,
      _props$showSelectAll = props.showSelectAll,
      showSelectAll = _props$showSelectAll === void 0 ? true : _props$showSelectAll,
      showRemove = props.showRemove,
      pagination = props.pagination,
      direction = props.direction,
      itemsUnit = props.itemsUnit,
      itemUnit = props.itemUnit,
      selectAllLabel = props.selectAllLabel,
      selectionsIcon = props.selectionsIcon,
      footer = props.footer,
      renderList = props.renderList,
      onItemSelectAll = props.onItemSelectAll,
      onItemRemove = props.onItemRemove,
      handleFilter = props.handleFilter,
      handleClear = props.handleClear,
      filterOption = props.filterOption,
      _props$render = props.render,
      render = _props$render === void 0 ? defaultRender : _props$render;
    var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      filterValue = _useState2[0],
      setFilterValue = _useState2[1];
    var listBodyRef = (0, _react.useRef)({});
    var internalHandleFilter = function internalHandleFilter(e) {
      setFilterValue(e.target.value);
      handleFilter(e);
    };
    var internalHandleClear = function internalHandleClear() {
      setFilterValue('');
      handleClear();
    };
    var matchFilter = function matchFilter(text, item) {
      if (filterOption) {
        return filterOption(filterValue, item, direction);
      }
      return text.includes(filterValue);
    };
    var renderListBody = function renderListBody(listProps) {
      var bodyContent = renderList ? renderList(Object.assign(Object.assign({}, listProps), {
        onItemSelect: function onItemSelect(key, check) {
          return listProps.onItemSelect(key, check);
        }
      })) : null;
      var customize = !!bodyContent;
      if (!customize) {
        bodyContent = /*#__PURE__*/_react["default"].createElement(_ListBody["default"], Object.assign({
          ref: listBodyRef
        }, listProps));
      }
      return {
        customize: customize,
        bodyContent: bodyContent
      };
    };
    var renderItem = function renderItem(item) {
      var renderResult = render(item);
      var isRenderResultPlain = isRenderResultPlainObject(renderResult);
      return {
        item: item,
        renderedEl: isRenderResultPlain ? renderResult.label : renderResult,
        renderedText: isRenderResultPlain ? renderResult.value : renderResult
      };
    };
    var notFoundContentEle = (0, _react.useMemo)(function () {
      return Array.isArray(notFoundContent) ? notFoundContent[direction === 'left' ? 0 : 1] : notFoundContent;
    }, [notFoundContent, direction]);
    var _useMemo = (0, _react.useMemo)(function () {
        var filterItems = [];
        var filterRenderItems = [];
        dataSource.forEach(function (item) {
          var renderedItem = renderItem(item);
          if (filterValue && !matchFilter(renderedItem.renderedText, item)) {
            return;
          }
          filterItems.push(item);
          filterRenderItems.push(renderedItem);
        });
        return [filterItems, filterRenderItems];
      }, [dataSource, filterValue]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      filteredItems = _useMemo2[0],
      filteredRenderItems = _useMemo2[1];
    var checkStatus = (0, _react.useMemo)(function () {
      if (checkedKeys.length === 0) {
        return 'none';
      }
      var checkedKeysMap = (0, _transKeys.groupKeysMap)(checkedKeys);
      if (filteredItems.every(function (item) {
        return checkedKeysMap.has(item.key) || !!item.disabled;
      })) {
        return 'all';
      }
      return 'part';
    }, [checkedKeys, filteredItems]);
    var listBody = (0, _react.useMemo)(function () {
      var search = showSearch ? ( /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-body-search-wrapper")
      }, /*#__PURE__*/_react["default"].createElement(_search["default"], {
        prefixCls: "".concat(prefixCls, "-search"),
        onChange: internalHandleFilter,
        handleClear: internalHandleClear,
        placeholder: searchPlaceholder,
        value: filterValue,
        disabled: disabled
      }))) : null;
      var _renderListBody = renderListBody(Object.assign(Object.assign({}, (0, _omit["default"])(props, _ListBody.OmitProps)), {
          filteredItems: filteredItems,
          filteredRenderItems: filteredRenderItems,
          selectedKeys: checkedKeys
        })),
        customize = _renderListBody.customize,
        bodyContent = _renderListBody.bodyContent;
      var bodyNode;
      // We should wrap customize list body in a classNamed div to use flex layout.
      if (customize) {
        bodyNode = /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-body-customize-wrapper")
        }, bodyContent);
      } else {
        bodyNode = filteredItems.length ? bodyContent : ( /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-body-not-found")
        }, notFoundContentEle));
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(showSearch ? "".concat(prefixCls, "-body ").concat(prefixCls, "-body-with-search") : "".concat(prefixCls, "-body"))
      }, search, bodyNode);
    }, [showSearch, prefixCls, searchPlaceholder, filterValue, disabled, checkedKeys, filteredItems, filteredRenderItems, notFoundContentEle]);
    var checkBox = /*#__PURE__*/_react["default"].createElement(_index["default"], {
      disabled: dataSource.length === 0 || disabled,
      checked: checkStatus === 'all',
      indeterminate: checkStatus === 'part',
      className: "".concat(prefixCls, "-checkbox"),
      onChange: function onChange() {
        // Only select enabled items
        onItemSelectAll === null || onItemSelectAll === void 0 ? void 0 : onItemSelectAll(filteredItems.filter(function (item) {
          return !item.disabled;
        }).map(function (_ref) {
          var key = _ref.key;
          return key;
        }), checkStatus !== 'all');
      }
    });
    var getSelectAllLabel = function getSelectAllLabel(selectedCount, totalCount) {
      if (selectAllLabel) {
        return typeof selectAllLabel === 'function' ? selectAllLabel({
          selectedCount: selectedCount,
          totalCount: totalCount
        }) : selectAllLabel;
      }
      var unit = totalCount > 1 ? itemsUnit : itemUnit;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (selectedCount > 0 ? "".concat(selectedCount, "/") : '') + totalCount, " ", unit);
    };
    // Custom Layout
    var footerDom = footer && (footer.length < 2 ? footer(props) : footer(props, {
      direction: direction
    }));
    var listCls = (0, _classnames["default"])(prefixCls, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-with-pagination"), !!pagination), "".concat(prefixCls, "-with-footer"), !!footerDom));
    // ====================== Get filtered, checked item list ======================
    var listFooter = footerDom ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, footerDom) : null;
    var checkAllCheckbox = !showRemove && !pagination && checkBox;
    var items;
    if (showRemove) {
      items = [/* Remove Current Page */
      pagination ? {
        key: 'removeCurrent',
        label: removeCurrent,
        onClick: function onClick() {
          var _a;
          var pageKeys = getEnabledItemKeys((((_a = listBodyRef.current) === null || _a === void 0 ? void 0 : _a.items) || []).map(function (entity) {
            return entity.item;
          }));
          onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(pageKeys);
        }
      } : null, /* Remove All */
      {
        key: 'removeAll',
        label: removeAll,
        onClick: function onClick() {
          onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(getEnabledItemKeys(filteredItems));
        }
      }].filter(Boolean);
    } else {
      items = [{
        key: 'selectAll',
        label: selectAll,
        onClick: function onClick() {
          var keys = getEnabledItemKeys(filteredItems);
          onItemSelectAll === null || onItemSelectAll === void 0 ? void 0 : onItemSelectAll(keys, keys.length !== checkedKeys.length);
        }
      }, pagination ? {
        key: 'selectCurrent',
        label: selectCurrent,
        onClick: function onClick() {
          var _a;
          var pageItems = ((_a = listBodyRef.current) === null || _a === void 0 ? void 0 : _a.items) || [];
          onItemSelectAll === null || onItemSelectAll === void 0 ? void 0 : onItemSelectAll(getEnabledItemKeys(pageItems.map(function (entity) {
            return entity.item;
          })), true);
        }
      } : null, {
        key: 'selectInvert',
        label: selectInvert,
        onClick: function onClick() {
          var _a;
          var availablePageItemKeys = getEnabledItemKeys((((_a = listBodyRef.current) === null || _a === void 0 ? void 0 : _a.items) || []).map(function (entity) {
            return entity.item;
          }));
          var checkedKeySet = new Set(checkedKeys);
          var newCheckedKeysSet = new Set(checkedKeySet);
          availablePageItemKeys.forEach(function (key) {
            if (checkedKeySet.has(key)) {
              newCheckedKeysSet["delete"](key);
            } else {
              newCheckedKeysSet.add(key);
            }
          });
          onItemSelectAll === null || onItemSelectAll === void 0 ? void 0 : onItemSelectAll(Array.from(newCheckedKeysSet), 'replace');
        }
      }];
    }
    var dropdown = /*#__PURE__*/_react["default"].createElement(_index2["default"], {
      className: "".concat(prefixCls, "-header-dropdown"),
      menu: {
        items: items
      },
      disabled: disabled
    }, isValidIcon(selectionsIcon) ? selectionsIcon : /*#__PURE__*/_react["default"].createElement(_DownOutlined["default"], null));
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: listCls,
      style: style
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-header")
    }, showSelectAll ? ( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, checkAllCheckbox, dropdown)) : null, /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(prefixCls, "-header-selected")
    }, getSelectAllLabel(checkedKeys.length, filteredItems.length)), /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(prefixCls, "-header-title")
    }, titleText)), listBody, listFooter);
  };
  if (process.env.NODE_ENV !== 'production') {
    TransferList.displayName = 'TransferList';
  }
  var _default = _exports["default"] = TransferList;
});