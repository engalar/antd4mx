function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-tree-select", "rc-util/es/omit", "antd4mx/_util/hooks/useZIndex", "antd4mx/_util/motion", "antd4mx/_util/PurePanel", "antd4mx/_util/statusUtils", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/config-provider/defaultRenderEmpty", "antd4mx/config-provider/DisabledContext", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/config-provider/hooks/useSize", "antd4mx/form/context", "antd4mx/form/hooks/useVariants", "antd4mx/select/mergedBuiltinPlacements", "antd4mx/select/style/index", "antd4mx/select/useIcons", "antd4mx/select/useShowArrow", "antd4mx/space/Compact", "antd4mx/tree/utils/iconUtil", "antd4mx/tree-select/style/index"], function (_exports, React, _classnames, _rcTreeSelect, _omit, _useZIndex3, _motion, _PurePanel, _statusUtils, _warning, _index, _defaultRenderEmpty, _DisabledContext, _useCSSVarCls, _useSize, _context, _useVariants, _mergedBuiltinPlacements, _index2, _useIcons2, _useShowArrow, _Compact, _iconUtil, _index3) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "TreeNode", {
    enumerable: true,
    get: function get() {
      return _rcTreeSelect.TreeNode;
    }
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
  var InternalTreeSelect = function InternalTreeSelect(_a, ref) {
    var _b;
    var customizePrefixCls = _a.prefixCls,
      customizeSize = _a.size,
      customDisabled = _a.disabled,
      _a$bordered = _a.bordered,
      bordered = _a$bordered === void 0 ? true : _a$bordered,
      className = _a.className,
      rootClassName = _a.rootClassName,
      treeCheckable = _a.treeCheckable,
      multiple = _a.multiple,
      _a$listHeight = _a.listHeight,
      listHeight = _a$listHeight === void 0 ? 256 : _a$listHeight,
      _a$listItemHeight = _a.listItemHeight,
      listItemHeight = _a$listItemHeight === void 0 ? 26 : _a$listItemHeight,
      placement = _a.placement,
      notFoundContent = _a.notFoundContent,
      switcherIcon = _a.switcherIcon,
      treeLine = _a.treeLine,
      getPopupContainer = _a.getPopupContainer,
      popupClassName = _a.popupClassName,
      dropdownClassName = _a.dropdownClassName,
      _a$treeIcon = _a.treeIcon,
      treeIcon = _a$treeIcon === void 0 ? false : _a$treeIcon,
      transitionName = _a.transitionName,
      _a$choiceTransitionNa = _a.choiceTransitionName,
      choiceTransitionName = _a$choiceTransitionNa === void 0 ? '' : _a$choiceTransitionNa,
      customStatus = _a.status,
      treeExpandAction = _a.treeExpandAction,
      builtinPlacements = _a.builtinPlacements,
      dropdownMatchSelectWidth = _a.dropdownMatchSelectWidth,
      popupMatchSelectWidth = _a.popupMatchSelectWidth,
      allowClear = _a.allowClear,
      customVariant = _a.variant,
      dropdownStyle = _a.dropdownStyle,
      tagRender = _a.tagRender,
      props = __rest(_a, ["prefixCls", "size", "disabled", "bordered", "className", "rootClassName", "treeCheckable", "multiple", "listHeight", "listItemHeight", "placement", "notFoundContent", "switcherIcon", "treeLine", "getPopupContainer", "popupClassName", "dropdownClassName", "treeIcon", "transitionName", "choiceTransitionName", "status", "treeExpandAction", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "allowClear", "variant", "dropdownStyle", "tagRender"]);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      renderEmpty = _React$useContext.renderEmpty,
      direction = _React$useContext.direction,
      virtual = _React$useContext.virtual,
      contextPopupMatchSelectWidth = _React$useContext.popupMatchSelectWidth,
      popupOverflow = _React$useContext.popupOverflow;
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('TreeSelect');
      process.env.NODE_ENV !== "production" ? warning(multiple !== false || !treeCheckable, 'usage', '`multiple` will always be `true` when `treeCheckable` is true') : void 0;
      warning.deprecated(!dropdownClassName, 'dropdownClassName', 'popupClassName');
      warning.deprecated(dropdownMatchSelectWidth === undefined, 'dropdownMatchSelectWidth', 'popupMatchSelectWidth');
      process.env.NODE_ENV !== "production" ? warning(!('showArrow' in props), 'deprecated', '`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null.') : void 0;
      warning.deprecated(!('bordered' in props), 'bordered', 'variant');
    }
    var rootPrefixCls = getPrefixCls();
    var prefixCls = getPrefixCls('select', customizePrefixCls);
    var treePrefixCls = getPrefixCls('select-tree', customizePrefixCls);
    var treeSelectPrefixCls = getPrefixCls('tree-select', customizePrefixCls);
    var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
      compactSize = _useCompactItemContex.compactSize,
      compactItemClassnames = _useCompactItemContex.compactItemClassnames;
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var treeSelectRootCls = (0, _useCSSVarCls["default"])(treeSelectPrefixCls);
    var _useSelectStyle = (0, _index2["default"])(prefixCls, rootCls),
      _useSelectStyle2 = _slicedToArray(_useSelectStyle, 3),
      wrapCSSVar = _useSelectStyle2[0],
      hashId = _useSelectStyle2[1],
      cssVarCls = _useSelectStyle2[2];
    var _useStyle = (0, _index3["default"])(treeSelectPrefixCls, treePrefixCls, treeSelectRootCls),
      _useStyle2 = _slicedToArray(_useStyle, 1),
      treeSelectWrapCSSVar = _useStyle2[0];
    var _useVariant = (0, _useVariants["default"])(customVariant, bordered),
      _useVariant2 = _slicedToArray(_useVariant, 2),
      variant = _useVariant2[0],
      enableVariantCls = _useVariant2[1];
    var mergedDropdownClassName = (0, _classnames["default"])(popupClassName || dropdownClassName, "".concat(treeSelectPrefixCls, "-dropdown"), _defineProperty({}, "".concat(treeSelectPrefixCls, "-dropdown-rtl"), direction === 'rtl'), rootClassName, cssVarCls, rootCls, treeSelectRootCls, hashId);
    var isMultiple = !!(treeCheckable || multiple);
    var showSuffixIcon = (0, _useShowArrow["default"])(props.suffixIcon, props.showArrow);
    var mergedPopupMatchSelectWidth = (_b = popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth) !== null && _b !== void 0 ? _b : contextPopupMatchSelectWidth;
    // ===================== Form =====================
    var _React$useContext2 = React.useContext(_context.FormItemInputContext),
      contextStatus = _React$useContext2.status,
      hasFeedback = _React$useContext2.hasFeedback,
      isFormItemInput = _React$useContext2.isFormItemInput,
      feedbackIcon = _React$useContext2.feedbackIcon;
    var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);
    // ===================== Icons =====================
    var _useIcons = (0, _useIcons2["default"])(Object.assign(Object.assign({}, props), {
        multiple: isMultiple,
        showSuffixIcon: showSuffixIcon,
        hasFeedback: hasFeedback,
        feedbackIcon: feedbackIcon,
        prefixCls: prefixCls,
        componentName: 'TreeSelect'
      })),
      suffixIcon = _useIcons.suffixIcon,
      removeIcon = _useIcons.removeIcon,
      clearIcon = _useIcons.clearIcon;
    var mergedAllowClear = allowClear === true ? {
      clearIcon: clearIcon
    } : allowClear;
    // ===================== Empty =====================
    var mergedNotFound;
    if (notFoundContent !== undefined) {
      mergedNotFound = notFoundContent;
    } else {
      mergedNotFound = (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Select')) || /*#__PURE__*/React.createElement(_defaultRenderEmpty["default"], {
        componentName: "Select"
      });
    }
    // ==================== Render =====================
    var selectProps = (0, _omit["default"])(props, ['suffixIcon', 'removeIcon', 'clearIcon', 'itemIcon', 'switcherIcon']);
    // ===================== Placement =====================
    var memoizedPlacement = React.useMemo(function () {
      if (placement !== undefined) {
        return placement;
      }
      return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
    }, [placement, direction]);
    var mergedSize = (0, _useSize["default"])(function (ctx) {
      var _a;
      return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
    });
    // ===================== Disabled =====================
    var disabled = React.useContext(_DisabledContext["default"]);
    var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    var mergedClassName = (0, _classnames["default"])(!customizePrefixCls && treeSelectPrefixCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-lg"), mergedSize === 'large'), "".concat(prefixCls, "-sm"), mergedSize === 'small'), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-").concat(variant), enableVariantCls), "".concat(prefixCls, "-in-form-item"), isFormItemInput), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, className, rootClassName, cssVarCls, rootCls, treeSelectRootCls, hashId);
    var renderSwitcherIcon = function renderSwitcherIcon(nodeProps) {
      return /*#__PURE__*/React.createElement(_iconUtil["default"], {
        prefixCls: treePrefixCls,
        switcherIcon: switcherIcon,
        treeNodeProps: nodeProps,
        showLine: treeLine
      });
    };
    // ============================ zIndex ============================
    var _useZIndex = (0, _useZIndex3.useZIndex)('SelectLike', dropdownStyle === null || dropdownStyle === void 0 ? void 0 : dropdownStyle.zIndex),
      _useZIndex2 = _slicedToArray(_useZIndex, 1),
      zIndex = _useZIndex2[0];
    var returnNode = /*#__PURE__*/React.createElement(_rcTreeSelect["default"], Object.assign({
      virtual: virtual,
      disabled: mergedDisabled
    }, selectProps, {
      dropdownMatchSelectWidth: mergedPopupMatchSelectWidth,
      builtinPlacements: (0, _mergedBuiltinPlacements["default"])(builtinPlacements, popupOverflow),
      ref: ref,
      prefixCls: prefixCls,
      className: mergedClassName,
      listHeight: listHeight,
      listItemHeight: listItemHeight,
      treeCheckable: treeCheckable ? /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-tree-checkbox-inner")
      }) : treeCheckable,
      treeLine: !!treeLine,
      suffixIcon: suffixIcon,
      multiple: isMultiple,
      placement: memoizedPlacement,
      removeIcon: removeIcon,
      allowClear: mergedAllowClear,
      switcherIcon: renderSwitcherIcon,
      showTreeIcon: treeIcon,
      notFoundContent: mergedNotFound,
      getPopupContainer: getPopupContainer || getContextPopupContainer,
      treeMotion: null,
      dropdownClassName: mergedDropdownClassName,
      dropdownStyle: Object.assign(Object.assign({}, dropdownStyle), {
        zIndex: zIndex
      }),
      choiceTransitionName: (0, _motion.getTransitionName)(rootPrefixCls, '', choiceTransitionName),
      transitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'slide-up', transitionName),
      treeExpandAction: treeExpandAction,
      tagRender: isMultiple ? tagRender : undefined
    }));
    return wrapCSSVar(treeSelectWrapCSSVar(returnNode));
  };
  var TreeSelectRef = /*#__PURE__*/React.forwardRef(InternalTreeSelect);
  var TreeSelect = TreeSelectRef;
  // We don't care debug panel
  /* istanbul ignore next */
  var PurePanel = (0, _PurePanel["default"])(TreeSelect);
  TreeSelect.TreeNode = _rcTreeSelect.TreeNode;
  TreeSelect.SHOW_ALL = _rcTreeSelect.SHOW_ALL;
  TreeSelect.SHOW_PARENT = _rcTreeSelect.SHOW_PARENT;
  TreeSelect.SHOW_CHILD = _rcTreeSelect.SHOW_CHILD;
  TreeSelect._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
  if (process.env.NODE_ENV !== 'production') {
    TreeSelect.displayName = 'TreeSelect';
  }
  var _default = _exports["default"] = TreeSelect;
});