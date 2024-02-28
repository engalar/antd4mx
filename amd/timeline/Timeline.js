define(["exports", "react", "classnames", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/timeline/style", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/timeline/TimelineItem", "antd4mx/timeline/TimelineItemList", "antd4mx/timeline/useItems"], function (_exports, React, _classnames, _warning, _configProvider, _style, _useCSSVarCls, _TimelineItem, _TimelineItemList, _useItems) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };

  // CSSINJS

  var Timeline = function Timeline(props) {
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      timeline = _React$useContext.timeline;
    var customizePrefixCls = props.prefixCls,
      children = props.children,
      items = props.items,
      className = props.className,
      style = props.style,
      restProps = __rest(props, ["prefixCls", "children", "items", "className", "style"]);
    var prefixCls = getPrefixCls('timeline', customizePrefixCls);
    // =================== Warning =====================
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Timeline');
      warning.deprecated(!children, 'Timeline.Item', 'items');
    }
    // Style
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _style["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var mergedItems = (0, _useItems["default"])(items, children);
    return wrapCSSVar( /*#__PURE__*/React.createElement(_TimelineItemList["default"], Object.assign({}, restProps, {
      className: (0, _classnames["default"])(timeline === null || timeline === void 0 ? void 0 : timeline.className, className, cssVarCls, rootCls),
      style: Object.assign(Object.assign({}, timeline === null || timeline === void 0 ? void 0 : timeline.style), style),
      prefixCls: prefixCls,
      direction: direction,
      items: mergedItems,
      hashId: hashId
    })));
  };
  Timeline.Item = _TimelineItem["default"];
  if (process.env.NODE_ENV !== 'production') {
    Timeline.displayName = 'Timeline';
  }
  var _default = _exports["default"] = Timeline;
});