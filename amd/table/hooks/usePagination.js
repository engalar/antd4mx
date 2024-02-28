define(["exports", "react", "antd4mx/_util/extendsObject"], function (_exports, _react, _extendsObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.DEFAULT_PAGE_SIZE = void 0;
  _exports.getPaginationParam = getPaginationParam;
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
  var DEFAULT_PAGE_SIZE = _exports.DEFAULT_PAGE_SIZE = 10;
  function getPaginationParam(mergedPagination, pagination) {
    var param = {
      current: mergedPagination.current,
      pageSize: mergedPagination.pageSize
    };
    var paginationObj = pagination && _typeof(pagination) === 'object' ? pagination : {};
    Object.keys(paginationObj).forEach(function (pageProp) {
      var value = mergedPagination[pageProp];
      if (typeof value !== 'function') {
        param[pageProp] = value;
      }
    });
    return param;
  }
  function usePagination(total, onChange, pagination) {
    var _a = pagination && _typeof(pagination) === 'object' ? pagination : {},
      _a$total = _a.total,
      paginationTotal = _a$total === void 0 ? 0 : _a$total,
      paginationObj = __rest(_a, ["total"]);
    var _useState = (0, _react.useState)(function () {
        return {
          current: 'defaultCurrent' in paginationObj ? paginationObj.defaultCurrent : 1,
          pageSize: 'defaultPageSize' in paginationObj ? paginationObj.defaultPageSize : DEFAULT_PAGE_SIZE
        };
      }),
      _useState2 = _slicedToArray(_useState, 2),
      innerPagination = _useState2[0],
      setInnerPagination = _useState2[1];
    // ============ Basic Pagination Config ============
    var mergedPagination = (0, _extendsObject["default"])(innerPagination, paginationObj, {
      total: paginationTotal > 0 ? paginationTotal : total
    });
    // Reset `current` if data length or pageSize changed
    var maxPage = Math.ceil((paginationTotal || total) / mergedPagination.pageSize);
    if (mergedPagination.current > maxPage) {
      // Prevent a maximum page count of 0
      mergedPagination.current = maxPage || 1;
    }
    var refreshPagination = function refreshPagination(current, pageSize) {
      setInnerPagination({
        current: current !== null && current !== void 0 ? current : 1,
        pageSize: pageSize || mergedPagination.pageSize
      });
    };
    var onInternalChange = function onInternalChange(current, pageSize) {
      var _a;
      if (pagination) {
        (_a = pagination.onChange) === null || _a === void 0 ? void 0 : _a.call(pagination, current, pageSize);
      }
      refreshPagination(current, pageSize);
      onChange(current, pageSize || (mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.pageSize));
    };
    if (pagination === false) {
      return [{}, function () {}];
    }
    return [Object.assign(Object.assign({}, mergedPagination), {
      onChange: onInternalChange
    }), refreshPagination];
  }
  var _default = _exports["default"] = usePagination;
});