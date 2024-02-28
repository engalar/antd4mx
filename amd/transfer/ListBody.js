define(["exports", "react", "classnames", "rc-util/es/hooks/useMergedState", "antd4mx/pagination/index", "antd4mx/transfer/ListItem"], function (_exports, React, _classnames, _useMergedState3, _index, _ListItem) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.OmitProps = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var OmitProps = _exports.OmitProps = ['handleFilter', 'handleClear', 'checkedKeys'];
  var parsePagination = function parsePagination(pagination) {
    var defaultPagination = {
      simple: true,
      showSizeChanger: false,
      showLessItems: false
    };
    return Object.assign(Object.assign({}, defaultPagination), pagination);
  };
  var TransferListBody = function TransferListBody(props, ref) {
    var prefixCls = props.prefixCls,
      filteredRenderItems = props.filteredRenderItems,
      selectedKeys = props.selectedKeys,
      globalDisabled = props.disabled,
      showRemove = props.showRemove,
      pagination = props.pagination,
      onScroll = props.onScroll,
      onItemSelect = props.onItemSelect,
      onItemRemove = props.onItemRemove;
    var _React$useState = React.useState(1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      current = _React$useState2[0],
      setCurrent = _React$useState2[1];
    var mergedPagination = React.useMemo(function () {
      if (!pagination) {
        return null;
      }
      var convertPagination = _typeof(pagination) === 'object' ? pagination : {};
      return parsePagination(convertPagination);
    }, [pagination]);
    var _useMergedState = (0, _useMergedState3["default"])(10, {
        value: mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.pageSize
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      pageSize = _useMergedState2[0],
      setPageSize = _useMergedState2[1];
    React.useEffect(function () {
      if (mergedPagination) {
        var maxPageCount = Math.ceil(filteredRenderItems.length / pageSize);
        setCurrent(Math.min(current, maxPageCount));
      }
    }, [filteredRenderItems, mergedPagination, pageSize]);
    var onInternalClick = function onInternalClick(item, e) {
      onItemSelect(item.key, !selectedKeys.includes(item.key), e);
    };
    var onRemove = function onRemove(item) {
      onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove([item.key]);
    };
    var onPageChange = function onPageChange(cur) {
      setCurrent(cur);
    };
    var onSizeChange = function onSizeChange(cur, size) {
      setCurrent(cur);
      setPageSize(size);
    };
    var memoizedItems = React.useMemo(function () {
      var displayItems = mergedPagination ? filteredRenderItems.slice((current - 1) * pageSize, current * pageSize) : filteredRenderItems;
      return displayItems;
    }, [current, filteredRenderItems, mergedPagination, pageSize]);
    React.useImperativeHandle(ref, function () {
      return {
        items: memoizedItems
      };
    });
    var paginationNode = mergedPagination ? ( /*#__PURE__*/React.createElement(_index["default"], {
      size: "small",
      disabled: globalDisabled,
      simple: mergedPagination.simple,
      pageSize: pageSize,
      showLessItems: mergedPagination.showLessItems,
      showSizeChanger: mergedPagination.showSizeChanger,
      className: "".concat(prefixCls, "-pagination"),
      total: filteredRenderItems.length,
      current: current,
      onChange: onPageChange,
      onShowSizeChange: onSizeChange
    })) : null;
    var cls = (0, _classnames["default"])("".concat(prefixCls, "-content"), _defineProperty({}, "".concat(prefixCls, "-content-show-remove"), showRemove));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
      className: cls,
      onScroll: onScroll
    }, (memoizedItems || []).map(function (_ref) {
      var renderedEl = _ref.renderedEl,
        renderedText = _ref.renderedText,
        item = _ref.item;
      return /*#__PURE__*/React.createElement(_ListItem["default"], {
        key: item.key,
        item: item,
        renderedText: renderedText,
        renderedEl: renderedEl,
        prefixCls: prefixCls,
        showRemove: showRemove,
        onClick: onInternalClick,
        onRemove: onRemove,
        checked: selectedKeys.includes(item.key),
        disabled: globalDisabled || item.disabled
      });
    })), paginationNode);
  };
  if (process.env.NODE_ENV !== 'production') {
    TransferListBody.displayName = 'TransferListBody';
  }
  var _default = _exports["default"] = /*#__PURE__*/React.forwardRef(TransferListBody);
});