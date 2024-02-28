define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "classnames", "react", "antd4mx/_util/extendsObject", "antd4mx/_util/responsiveObserver", "antd4mx/config-provider", "antd4mx/config-provider/defaultRenderEmpty", "antd4mx/grid", "antd4mx/grid/hooks/useBreakpoint", "antd4mx/pagination", "antd4mx/spin", "antd4mx/list/Item", "antd4mx/list/context", "antd4mx/list/style", "antd4mx/config-provider/hooks/useSize"], function (_exports, _toConsumableArray2, _classnames, React, _extendsObject, _responsiveObserver, _configProvider, _defaultRenderEmpty, _grid, _useBreakpoint, _pagination, _spin, _Item, _context, _style, _useSize) {
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
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  function List(_a) {
    var _b;
    var _a$pagination = _a.pagination,
      pagination = _a$pagination === void 0 ? false : _a$pagination,
      customizePrefixCls = _a.prefixCls,
      _a$bordered = _a.bordered,
      bordered = _a$bordered === void 0 ? false : _a$bordered,
      _a$split = _a.split,
      split = _a$split === void 0 ? true : _a$split,
      className = _a.className,
      rootClassName = _a.rootClassName,
      style = _a.style,
      children = _a.children,
      itemLayout = _a.itemLayout,
      loadMore = _a.loadMore,
      grid = _a.grid,
      _a$dataSource = _a.dataSource,
      dataSource = _a$dataSource === void 0 ? [] : _a$dataSource,
      customizeSize = _a.size,
      header = _a.header,
      footer = _a.footer,
      _a$loading = _a.loading,
      loading = _a$loading === void 0 ? false : _a$loading,
      rowKey = _a.rowKey,
      renderItem = _a.renderItem,
      locale = _a.locale,
      rest = __rest(_a, ["pagination", "prefixCls", "bordered", "split", "className", "rootClassName", "style", "children", "itemLayout", "loadMore", "grid", "dataSource", "size", "header", "footer", "loading", "rowKey", "renderItem", "locale"]);
    var paginationObj = pagination && _typeof(pagination) === 'object' ? pagination : {};
    var _React$useState = React.useState(paginationObj.defaultCurrent || 1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      paginationCurrent = _React$useState2[0],
      setPaginationCurrent = _React$useState2[1];
    var _React$useState3 = React.useState(paginationObj.defaultPageSize || 10),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      paginationSize = _React$useState4[0],
      setPaginationSize = _React$useState4[1];
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      renderEmpty = _React$useContext.renderEmpty,
      direction = _React$useContext.direction,
      list = _React$useContext.list;
    var defaultPaginationProps = {
      current: 1,
      total: 0
    };
    var triggerPaginationEvent = function triggerPaginationEvent(eventName) {
      return function (page, pageSize) {
        var _a;
        setPaginationCurrent(page);
        setPaginationSize(pageSize);
        if (pagination && pagination[eventName]) {
          (_a = pagination === null || pagination === void 0 ? void 0 : pagination[eventName]) === null || _a === void 0 ? void 0 : _a.call(pagination, page, pageSize);
        }
      };
    };
    var onPaginationChange = triggerPaginationEvent('onChange');
    var onPaginationShowSizeChange = triggerPaginationEvent('onShowSizeChange');
    var renderInnerItem = function renderInnerItem(item, index) {
      if (!renderItem) return null;
      var key;
      if (typeof rowKey === 'function') {
        key = rowKey(item);
      } else if (rowKey) {
        key = item[rowKey];
      } else {
        key = item.key;
      }
      if (!key) {
        key = "list-item-".concat(index);
      }
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: key
      }, renderItem(item, index));
    };
    var isSomethingAfterLastItem = function isSomethingAfterLastItem() {
      return !!(loadMore || pagination || footer);
    };
    var prefixCls = getPrefixCls('list', customizePrefixCls);
    // Style
    var _useStyle = (0, _style["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var loadingProp = loading;
    if (typeof loadingProp === 'boolean') {
      loadingProp = {
        spinning: loadingProp
      };
    }
    var isLoading = loadingProp && loadingProp.spinning;
    var mergedSize = (0, _useSize["default"])(customizeSize);
    // large => lg
    // small => sm
    var sizeCls = '';
    switch (mergedSize) {
      case 'large':
        sizeCls = 'lg';
        break;
      case 'small':
        sizeCls = 'sm';
        break;
      default:
        break;
    }
    var classString = (0, _classnames["default"])(prefixCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-vertical"), itemLayout === 'vertical'), "".concat(prefixCls, "-").concat(sizeCls), sizeCls), "".concat(prefixCls, "-split"), split), "".concat(prefixCls, "-bordered"), bordered), "".concat(prefixCls, "-loading"), isLoading), "".concat(prefixCls, "-grid"), !!grid), "".concat(prefixCls, "-something-after-last-item"), isSomethingAfterLastItem()), "".concat(prefixCls, "-rtl"), direction === 'rtl'), list === null || list === void 0 ? void 0 : list.className, className, rootClassName, hashId, cssVarCls);
    var paginationProps = (0, _extendsObject["default"])(defaultPaginationProps, {
      total: dataSource.length,
      current: paginationCurrent,
      pageSize: paginationSize
    }, pagination || {});
    var largestPage = Math.ceil(paginationProps.total / paginationProps.pageSize);
    if (paginationProps.current > largestPage) {
      paginationProps.current = largestPage;
    }
    var paginationContent = pagination ? ( /*#__PURE__*/React.createElement("div", {
      className: (0, _classnames["default"])("".concat(prefixCls, "-pagination"), "".concat(prefixCls, "-pagination-align-").concat((_b = paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.align) !== null && _b !== void 0 ? _b : 'end'))
    }, /*#__PURE__*/React.createElement(_pagination["default"], Object.assign({}, paginationProps, {
      onChange: onPaginationChange,
      onShowSizeChange: onPaginationShowSizeChange
    })))) : null;
    var splitDataSource = (0, _toConsumableArray2["default"])(dataSource);
    if (pagination) {
      if (dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize) {
        splitDataSource = (0, _toConsumableArray2["default"])(dataSource).splice((paginationProps.current - 1) * paginationProps.pageSize, paginationProps.pageSize);
      }
    }
    var needResponsive = Object.keys(grid || {}).some(function (key) {
      return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(key);
    });
    var screens = (0, _useBreakpoint["default"])(needResponsive);
    var currentBreakpoint = React.useMemo(function () {
      for (var i = 0; i < _responsiveObserver.responsiveArray.length; i += 1) {
        var breakpoint = _responsiveObserver.responsiveArray[i];
        if (screens[breakpoint]) {
          return breakpoint;
        }
      }
      return undefined;
    }, [screens]);
    var colStyle = React.useMemo(function () {
      if (!grid) {
        return undefined;
      }
      var columnCount = currentBreakpoint && grid[currentBreakpoint] ? grid[currentBreakpoint] : grid.column;
      if (columnCount) {
        return {
          width: "".concat(100 / columnCount, "%"),
          maxWidth: "".concat(100 / columnCount, "%")
        };
      }
    }, [grid === null || grid === void 0 ? void 0 : grid.column, currentBreakpoint]);
    var childrenContent = isLoading && /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: 53
      }
    });
    if (splitDataSource.length > 0) {
      var items = splitDataSource.map(function (item, index) {
        return renderInnerItem(item, index);
      });
      childrenContent = grid ? ( /*#__PURE__*/React.createElement(_grid.Row, {
        gutter: grid.gutter
      }, React.Children.map(items, function (child) {
        return /*#__PURE__*/React.createElement("div", {
          key: child === null || child === void 0 ? void 0 : child.key,
          style: colStyle
        }, child);
      }))) : ( /*#__PURE__*/React.createElement("ul", {
        className: "".concat(prefixCls, "-items")
      }, items));
    } else if (!children && !isLoading) {
      childrenContent = /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-empty-text")
      }, locale && locale.emptyText || (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('List')) || ( /*#__PURE__*/React.createElement(_defaultRenderEmpty["default"], {
        componentName: "List"
      })));
    }
    var paginationPosition = paginationProps.position || 'bottom';
    var contextValue = React.useMemo(function () {
      return {
        grid: grid,
        itemLayout: itemLayout
      };
    }, [JSON.stringify(grid), itemLayout]);
    return wrapCSSVar( /*#__PURE__*/React.createElement(_context.ListContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React.createElement("div", Object.assign({
      style: Object.assign(Object.assign({}, list === null || list === void 0 ? void 0 : list.style), style),
      className: classString
    }, rest), (paginationPosition === 'top' || paginationPosition === 'both') && paginationContent, header && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-header")
    }, header), /*#__PURE__*/React.createElement(_spin["default"], Object.assign({}, loadingProp), childrenContent, children), footer && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, footer), loadMore || (paginationPosition === 'bottom' || paginationPosition === 'both') && paginationContent)));
  }
  if (process.env.NODE_ENV !== 'production') {
    List.displayName = 'List';
  }
  List.Item = _Item["default"];
  var _default = _exports["default"] = List;
});