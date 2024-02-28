define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "classnames", "rc-cascader", "rc-util/es/omit", "antd4mx/_util/hooks/useZIndex", "antd4mx/_util/motion", "antd4mx/_util/PurePanel", "antd4mx/_util/statusUtils", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/config-provider/defaultRenderEmpty", "antd4mx/config-provider/DisabledContext", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/config-provider/hooks/useSize", "antd4mx/form/context", "antd4mx/form/hooks/useVariants", "antd4mx/select/mergedBuiltinPlacements", "antd4mx/select/style/index", "antd4mx/select/useIcons", "antd4mx/select/useShowArrow", "antd4mx/space/Compact", "antd4mx/cascader/hooks/useBase", "antd4mx/cascader/hooks/useCheckable", "antd4mx/cascader/hooks/useColumnIcons", "antd4mx/cascader/Panel", "antd4mx/cascader/style/index"], function (_exports, _toConsumableArray2, React, _classnames, _rcCascader, _omit, _useZIndex3, _motion, _PurePanel, _statusUtils, _warning, _index, _defaultRenderEmpty, _DisabledContext, _useCSSVarCls, _useSize, _context, _useVariants, _mergedBuiltinPlacements, _index2, _useIcons2, _useShowArrow, _Compact, _useBase3, _useCheckable, _useColumnIcons3, _Panel, _index3) {
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
  var SHOW_CHILD = _rcCascader["default"].SHOW_CHILD,
    SHOW_PARENT = _rcCascader["default"].SHOW_PARENT;
  function highlightKeyword(str, lowerKeyword, prefixCls) {
    var cells = str.toLowerCase().split(lowerKeyword).reduce(function (list, cur, index) {
      return index === 0 ? [cur] : [].concat((0, _toConsumableArray2["default"])(list), [lowerKeyword, cur]);
    }, []);
    var fillCells = [];
    var start = 0;
    cells.forEach(function (cell, index) {
      var end = start + cell.length;
      var originWorld = str.slice(start, end);
      start = end;
      if (index % 2 === 1) {
        originWorld = /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        React.createElement("span", {
          className: "".concat(prefixCls, "-menu-item-keyword"),
          key: "separator-".concat(index)
        }, originWorld);
      }
      fillCells.push(originWorld);
    });
    return fillCells;
  }
  var defaultSearchRender = function defaultSearchRender(inputValue, path, prefixCls, fieldNames) {
    var optionList = [];
    // We do lower here to save perf
    var lower = inputValue.toLowerCase();
    path.forEach(function (node, index) {
      if (index !== 0) {
        optionList.push(' / ');
      }
      var label = node[fieldNames.label];
      var type = _typeof(label);
      if (type === 'string' || type === 'number') {
        label = highlightKeyword(String(label), lower, prefixCls);
      }
      optionList.push(label);
    });
    return optionList;
  };
  var Cascader = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _a;
    var customizePrefixCls = props.prefixCls,
      customizeSize = props.size,
      customDisabled = props.disabled,
      className = props.className,
      rootClassName = props.rootClassName,
      multiple = props.multiple,
      _props$bordered = props.bordered,
      bordered = _props$bordered === void 0 ? true : _props$bordered,
      transitionName = props.transitionName,
      _props$choiceTransiti = props.choiceTransitionName,
      choiceTransitionName = _props$choiceTransiti === void 0 ? '' : _props$choiceTransiti,
      popupClassName = props.popupClassName,
      dropdownClassName = props.dropdownClassName,
      expandIcon = props.expandIcon,
      placement = props.placement,
      showSearch = props.showSearch,
      _props$allowClear = props.allowClear,
      allowClear = _props$allowClear === void 0 ? true : _props$allowClear,
      notFoundContent = props.notFoundContent,
      direction = props.direction,
      getPopupContainer = props.getPopupContainer,
      customStatus = props.status,
      showArrow = props.showArrow,
      builtinPlacements = props.builtinPlacements,
      style = props.style,
      customVariant = props.variant,
      rest = __rest(props, ["prefixCls", "size", "disabled", "className", "rootClassName", "multiple", "bordered", "transitionName", "choiceTransitionName", "popupClassName", "dropdownClassName", "expandIcon", "placement", "showSearch", "allowClear", "notFoundContent", "direction", "getPopupContainer", "status", "showArrow", "builtinPlacements", "style", "variant"]);
    var restProps = (0, _omit["default"])(rest, ['suffixIcon']);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      popupOverflow = _React$useContext.popupOverflow,
      cascader = _React$useContext.cascader;
    // =================== Form =====================
    var _React$useContext2 = React.useContext(_context.FormItemInputContext),
      contextStatus = _React$useContext2.status,
      hasFeedback = _React$useContext2.hasFeedback,
      isFormItemInput = _React$useContext2.isFormItemInput,
      feedbackIcon = _React$useContext2.feedbackIcon;
    var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);
    // =================== Warning =====================
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Cascader');
      warning.deprecated(!dropdownClassName, 'dropdownClassName', 'popupClassName');
      process.env.NODE_ENV !== "production" ? warning(!('showArrow' in props), 'deprecated', '`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null.') : void 0;
      warning.deprecated(!('bordered' in props), 'bordered', 'variant');
    }
    // ==================== Prefix =====================
    var _useBase = (0, _useBase3["default"])(customizePrefixCls, direction),
      _useBase2 = _slicedToArray(_useBase, 4),
      prefixCls = _useBase2[0],
      cascaderPrefixCls = _useBase2[1],
      mergedDirection = _useBase2[2],
      renderEmpty = _useBase2[3];
    var isRtl = mergedDirection === 'rtl';
    var rootPrefixCls = getPrefixCls();
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useSelectStyle = (0, _index2["default"])(prefixCls, rootCls),
      _useSelectStyle2 = _slicedToArray(_useSelectStyle, 3),
      wrapSelectCSSVar = _useSelectStyle2[0],
      hashId = _useSelectStyle2[1],
      cssVarCls = _useSelectStyle2[2];
    var cascaderRootCls = (0, _useCSSVarCls["default"])(cascaderPrefixCls);
    var _useStyle = (0, _index3["default"])(cascaderPrefixCls, cascaderRootCls),
      _useStyle2 = _slicedToArray(_useStyle, 1),
      wrapCascaderCSSVar = _useStyle2[0];
    var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
      compactSize = _useCompactItemContex.compactSize,
      compactItemClassnames = _useCompactItemContex.compactItemClassnames;
    var _useVariant = (0, _useVariants["default"])(customVariant, bordered),
      _useVariant2 = _slicedToArray(_useVariant, 2),
      variant = _useVariant2[0],
      enableVariantCls = _useVariant2[1];
    // =================== No Found ====================
    var mergedNotFoundContent = notFoundContent || (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Cascader')) || ( /*#__PURE__*/React.createElement(_defaultRenderEmpty["default"], {
      componentName: "Cascader"
    }));
    // =================== Dropdown ====================
    var mergedDropdownClassName = (0, _classnames["default"])(popupClassName || dropdownClassName, "".concat(cascaderPrefixCls, "-dropdown"), _defineProperty({}, "".concat(cascaderPrefixCls, "-dropdown-rtl"), mergedDirection === 'rtl'), rootClassName, rootCls, cascaderRootCls, hashId, cssVarCls);
    // ==================== Search =====================
    var mergedShowSearch = React.useMemo(function () {
      if (!showSearch) {
        return showSearch;
      }
      var searchConfig = {
        render: defaultSearchRender
      };
      if (_typeof(showSearch) === 'object') {
        searchConfig = Object.assign(Object.assign({}, searchConfig), showSearch);
      }
      return searchConfig;
    }, [showSearch]);
    // ===================== Size ======================
    var mergedSize = (0, _useSize["default"])(function (ctx) {
      var _a;
      return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
    });
    // ===================== Disabled =====================
    var disabled = React.useContext(_DisabledContext["default"]);
    var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    // ===================== Icon ======================
    var _useColumnIcons = (0, _useColumnIcons3["default"])(prefixCls, isRtl, expandIcon),
      _useColumnIcons2 = _slicedToArray(_useColumnIcons, 2),
      mergedExpandIcon = _useColumnIcons2[0],
      loadingIcon = _useColumnIcons2[1];
    // =================== Multiple ====================
    var checkable = (0, _useCheckable["default"])(cascaderPrefixCls, multiple);
    // ===================== Icons =====================
    var showSuffixIcon = (0, _useShowArrow["default"])(props.suffixIcon, showArrow);
    var _useIcons = (0, _useIcons2["default"])(Object.assign(Object.assign({}, props), {
        hasFeedback: hasFeedback,
        feedbackIcon: feedbackIcon,
        showSuffixIcon: showSuffixIcon,
        multiple: multiple,
        prefixCls: prefixCls,
        componentName: 'Cascader'
      })),
      suffixIcon = _useIcons.suffixIcon,
      removeIcon = _useIcons.removeIcon,
      clearIcon = _useIcons.clearIcon;
    // ===================== Placement =====================
    var memoPlacement = React.useMemo(function () {
      if (placement !== undefined) {
        return placement;
      }
      return isRtl ? 'bottomRight' : 'bottomLeft';
    }, [placement, isRtl]);
    var mergedAllowClear = allowClear === true ? {
      clearIcon: clearIcon
    } : allowClear;
    // ============================ zIndex ============================
    var _useZIndex = (0, _useZIndex3.useZIndex)('SelectLike', (_a = restProps.dropdownStyle) === null || _a === void 0 ? void 0 : _a.zIndex),
      _useZIndex2 = _slicedToArray(_useZIndex, 1),
      zIndex = _useZIndex2[0];
    // ==================== Render =====================
    var renderNode = /*#__PURE__*/React.createElement(_rcCascader["default"], Object.assign({
      prefixCls: prefixCls,
      className: (0, _classnames["default"])(!customizePrefixCls && cascaderPrefixCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-lg"), mergedSize === 'large'), "".concat(prefixCls, "-sm"), mergedSize === 'small'), "".concat(prefixCls, "-rtl"), isRtl), "".concat(prefixCls, "-").concat(variant), enableVariantCls), "".concat(prefixCls, "-in-form-item"), isFormItemInput), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, cascader === null || cascader === void 0 ? void 0 : cascader.className, className, rootClassName, rootCls, cascaderRootCls, hashId, cssVarCls),
      disabled: mergedDisabled,
      style: Object.assign(Object.assign({}, cascader === null || cascader === void 0 ? void 0 : cascader.style), style)
    }, restProps, {
      builtinPlacements: (0, _mergedBuiltinPlacements["default"])(builtinPlacements, popupOverflow),
      direction: mergedDirection,
      placement: memoPlacement,
      notFoundContent: mergedNotFoundContent,
      allowClear: mergedAllowClear,
      showSearch: mergedShowSearch,
      expandIcon: mergedExpandIcon,
      suffixIcon: suffixIcon,
      removeIcon: removeIcon,
      loadingIcon: loadingIcon,
      checkable: checkable,
      dropdownClassName: mergedDropdownClassName,
      dropdownPrefixCls: customizePrefixCls || cascaderPrefixCls,
      dropdownStyle: Object.assign(Object.assign({}, restProps.dropdownStyle), {
        zIndex: zIndex
      }),
      choiceTransitionName: (0, _motion.getTransitionName)(rootPrefixCls, '', choiceTransitionName),
      transitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'slide-up', transitionName),
      getPopupContainer: getPopupContainer || getContextPopupContainer,
      ref: ref
    }));
    return wrapCascaderCSSVar(wrapSelectCSSVar(renderNode));
  });
  if (process.env.NODE_ENV !== 'production') {
    Cascader.displayName = 'Cascader';
  }
  // We don't care debug panel
  /* istanbul ignore next */
  var PurePanel = (0, _PurePanel["default"])(Cascader);
  Cascader.SHOW_PARENT = SHOW_PARENT;
  Cascader.SHOW_CHILD = SHOW_CHILD;
  Cascader.Panel = _Panel["default"];
  Cascader._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
  var _default = _exports["default"] = Cascader;
});