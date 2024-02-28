function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "@ant-design/icons/es/icons/CloseOutlined", "@ant-design/icons/es/icons/EllipsisOutlined", "@ant-design/icons/es/icons/PlusOutlined", "classnames", "rc-tabs", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/config-provider/hooks/useSize", "antd4mx/tabs/hooks/useAnimateConfig", "antd4mx/tabs/hooks/useLegacyItems", "antd4mx/tabs/style", "antd4mx/tabs/TabPane"], function (_exports, React, _CloseOutlined, _EllipsisOutlined, _PlusOutlined, _classnames, _rcTabs, _warning, _configProvider, _useCSSVarCls, _useSize, _useAnimateConfig, _useLegacyItems, _style, _TabPane) {
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
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var Tabs = function Tabs(props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var type = props.type,
      className = props.className,
      rootClassName = props.rootClassName,
      customSize = props.size,
      _onEdit = props.onEdit,
      hideAdd = props.hideAdd,
      centered = props.centered,
      addIcon = props.addIcon,
      moreIcon = props.moreIcon,
      popupClassName = props.popupClassName,
      children = props.children,
      items = props.items,
      animated = props.animated,
      style = props.style,
      indicatorSize = props.indicatorSize,
      indicator = props.indicator,
      otherProps = __rest(props, ["type", "className", "rootClassName", "size", "onEdit", "hideAdd", "centered", "addIcon", "moreIcon", "popupClassName", "children", "items", "animated", "style", "indicatorSize", "indicator"]);
    var customizePrefixCls = otherProps.prefixCls;
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      direction = _React$useContext.direction,
      tabs = _React$useContext.tabs,
      getPrefixCls = _React$useContext.getPrefixCls,
      getPopupContainer = _React$useContext.getPopupContainer;
    var prefixCls = getPrefixCls('tabs', customizePrefixCls);
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _style["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var editable;
    if (type === 'editable-card') {
      editable = {
        onEdit: function onEdit(editType, _ref) {
          var key = _ref.key,
            event = _ref.event;
          _onEdit === null || _onEdit === void 0 ? void 0 : _onEdit(editType === 'add' ? event : key, editType);
        },
        removeIcon: /*#__PURE__*/React.createElement(_CloseOutlined["default"], null),
        addIcon: (addIcon !== null && addIcon !== void 0 ? addIcon : tabs === null || tabs === void 0 ? void 0 : tabs.addIcon) || /*#__PURE__*/React.createElement(_PlusOutlined["default"], null),
        showAdd: hideAdd !== true
      };
    }
    var rootPrefixCls = getPrefixCls();
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Tabs');
      process.env.NODE_ENV !== "production" ? warning(!('onPrevClick' in props) && !('onNextClick' in props), 'breaking', '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.') : void 0;
      process.env.NODE_ENV !== "production" ? warning(!(indicatorSize || (tabs === null || tabs === void 0 ? void 0 : tabs.indicatorSize)), 'deprecated', '`indicatorSize` has been deprecated. Please use `indicator={{ size: ... }}` instead.') : void 0;
    }
    var size = (0, _useSize["default"])(customSize);
    var mergedItems = (0, _useLegacyItems["default"])(items, children);
    var mergedAnimated = (0, _useAnimateConfig["default"])(prefixCls, animated);
    var mergedStyle = Object.assign(Object.assign({}, tabs === null || tabs === void 0 ? void 0 : tabs.style), style);
    var mergedIndicator = {
      align: (_a = indicator === null || indicator === void 0 ? void 0 : indicator.align) !== null && _a !== void 0 ? _a : (_b = tabs === null || tabs === void 0 ? void 0 : tabs.indicator) === null || _b === void 0 ? void 0 : _b.align,
      size: (_f = (_d = (_c = indicator === null || indicator === void 0 ? void 0 : indicator.size) !== null && _c !== void 0 ? _c : indicatorSize) !== null && _d !== void 0 ? _d : (_e = tabs === null || tabs === void 0 ? void 0 : tabs.indicator) === null || _e === void 0 ? void 0 : _e.size) !== null && _f !== void 0 ? _f : tabs === null || tabs === void 0 ? void 0 : tabs.indicatorSize
    };
    return wrapCSSVar( /*#__PURE__*/React.createElement(_rcTabs["default"], Object.assign({
      direction: direction,
      getPopupContainer: getPopupContainer,
      moreTransitionName: "".concat(rootPrefixCls, "-slide-up")
    }, otherProps, {
      items: mergedItems,
      className: (0, _classnames["default"])(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(size), size), "".concat(prefixCls, "-card"), ['card', 'editable-card'].includes(type)), "".concat(prefixCls, "-editable-card"), type === 'editable-card'), "".concat(prefixCls, "-centered"), centered), tabs === null || tabs === void 0 ? void 0 : tabs.className, className, rootClassName, hashId, cssVarCls, rootCls),
      popupClassName: (0, _classnames["default"])(popupClassName, hashId, cssVarCls, rootCls),
      style: mergedStyle,
      editable: editable,
      moreIcon: (_g = moreIcon !== null && moreIcon !== void 0 ? moreIcon : tabs === null || tabs === void 0 ? void 0 : tabs.moreIcon) !== null && _g !== void 0 ? _g : /*#__PURE__*/React.createElement(_EllipsisOutlined["default"], null),
      prefixCls: prefixCls,
      animated: mergedAnimated,
      indicator: mergedIndicator
    })));
  };
  Tabs.TabPane = _TabPane["default"];
  if (process.env.NODE_ENV !== 'production') {
    Tabs.displayName = 'Tabs';
  }
  var _default = _exports["default"] = Tabs;
});