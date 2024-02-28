define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "classnames", "react", "@ant-design/icons/es/icons/LoadingOutlined", "antd4mx/timeline/TimelineItem"], function (_exports, _toConsumableArray2, _classnames, React, _LoadingOutlined, _TimelineItem) {
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
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var TimelineItemList = function TimelineItemList(_a) {
    var prefixCls = _a.prefixCls,
      className = _a.className,
      _a$pending = _a.pending,
      pending = _a$pending === void 0 ? false : _a$pending,
      children = _a.children,
      items = _a.items,
      rootClassName = _a.rootClassName,
      _a$reverse = _a.reverse,
      reverse = _a$reverse === void 0 ? false : _a$reverse,
      direction = _a.direction,
      hashId = _a.hashId,
      pendingDot = _a.pendingDot,
      _a$mode = _a.mode,
      mode = _a$mode === void 0 ? '' : _a$mode,
      restProps = __rest(_a, ["prefixCls", "className", "pending", "children", "items", "rootClassName", "reverse", "direction", "hashId", "pendingDot", "mode"]);
    var getPositionCls = function getPositionCls(position, idx) {
      if (mode === 'alternate') {
        if (position === 'right') return "".concat(prefixCls, "-item-right");
        if (position === 'left') return "".concat(prefixCls, "-item-left");
        return idx % 2 === 0 ? "".concat(prefixCls, "-item-left") : "".concat(prefixCls, "-item-right");
      }
      if (mode === 'left') return "".concat(prefixCls, "-item-left");
      if (mode === 'right') return "".concat(prefixCls, "-item-right");
      if (position === 'right') return "".concat(prefixCls, "-item-right");
      return '';
    };
    var mergedItems = (0, _toConsumableArray2["default"])(items || []);
    var pendingNode = typeof pending === 'boolean' ? null : pending;
    if (pending) {
      mergedItems.push({
        pending: !!pending,
        dot: pendingDot || /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null),
        children: pendingNode
      });
    }
    if (reverse) {
      mergedItems.reverse();
    }
    var itemsCount = mergedItems.length;
    var lastCls = "".concat(prefixCls, "-item-last");
    var itemsList = mergedItems.filter(function (item) {
      return !!item;
    }).map(function (item, idx) {
      var _a;
      var pendingClass = idx === itemsCount - 2 ? lastCls : '';
      var readyClass = idx === itemsCount - 1 ? lastCls : '';
      var itemClassName = item.className,
        itemProps = __rest(item, ["className"]);
      return /*#__PURE__*/React.createElement(_TimelineItem["default"], Object.assign({}, itemProps, {
        className: (0, _classnames["default"])([itemClassName, !reverse && !!pending ? pendingClass : readyClass, getPositionCls((_a = item === null || item === void 0 ? void 0 : item.position) !== null && _a !== void 0 ? _a : '', idx)]),
        /* eslint-disable-next-line react/no-array-index-key */
        key: (item === null || item === void 0 ? void 0 : item.key) || idx
      }));
    });
    var hasLabelItem = mergedItems.some(function (item) {
      return !!(item === null || item === void 0 ? void 0 : item.label);
    });
    var classString = (0, _classnames["default"])(prefixCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-pending"), !!pending), "".concat(prefixCls, "-reverse"), !!reverse), "".concat(prefixCls, "-").concat(mode), !!mode && !hasLabelItem), "".concat(prefixCls, "-label"), hasLabelItem), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className, rootClassName, hashId);
    return /*#__PURE__*/React.createElement("ul", Object.assign({}, restProps, {
      className: classString
    }), itemsList);
  };
  var _default = _exports["default"] = TimelineItemList;
});