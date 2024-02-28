function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-select", "rc-util/es/omit", "antd4mx/_util/hooks/useZIndex", "antd4mx/_util/motion", "antd4mx/_util/PurePanel", "antd4mx/_util/statusUtils", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/config-provider/defaultRenderEmpty", "antd4mx/config-provider/DisabledContext", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/config-provider/hooks/useSize", "antd4mx/form/context", "antd4mx/form/hooks/useVariants", "antd4mx/space/Compact", "antd4mx/theme/internal", "antd4mx/select/mergedBuiltinPlacements", "antd4mx/select/style/index", "antd4mx/select/useIcons", "antd4mx/select/useShowArrow"], function (_exports, React, _classnames, _rcSelect, _omit, _useZIndex3, _motion, _PurePanel, _statusUtils, _warning, _index, _defaultRenderEmpty, _DisabledContext, _useCSSVarCls, _useSize, _context, _useVariants3, _Compact, _internal, _mergedBuiltinPlacements, _index2, _useIcons2, _useShowArrow) {
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
  // TODO: 4.0 - codemod should help to change `filterOption` to support node props.

  var SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
  var InternalSelect = function InternalSelect(props, ref) {
    var _a;
    var customizePrefixCls = props.prefixCls,
      bordered = props.bordered,
      className = props.className,
      rootClassName = props.rootClassName,
      getPopupContainer = props.getPopupContainer,
      popupClassName = props.popupClassName,
      dropdownClassName = props.dropdownClassName,
      _props$listHeight = props.listHeight,
      listHeight = _props$listHeight === void 0 ? 256 : _props$listHeight,
      placement = props.placement,
      customListItemHeight = props.listItemHeight,
      customizeSize = props.size,
      customDisabled = props.disabled,
      notFoundContent = props.notFoundContent,
      customStatus = props.status,
      builtinPlacements = props.builtinPlacements,
      dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
      popupMatchSelectWidth = props.popupMatchSelectWidth,
      propDirection = props.direction,
      style = props.style,
      allowClear = props.allowClear,
      customizeVariant = props.variant,
      dropdownStyle = props.dropdownStyle,
      transitionName = props.transitionName,
      tagRender = props.tagRender,
      maxCount = props.maxCount,
      rest = __rest(props, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style", "allowClear", "variant", "dropdownStyle", "transitionName", "tagRender", "maxCount"]);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      renderEmpty = _React$useContext.renderEmpty,
      contextDirection = _React$useContext.direction,
      virtual = _React$useContext.virtual,
      contextPopupMatchSelectWidth = _React$useContext.popupMatchSelectWidth,
      popupOverflow = _React$useContext.popupOverflow,
      select = _React$useContext.select;
    var _useToken = (0, _internal.useToken)(),
      _useToken2 = _slicedToArray(_useToken, 2),
      token = _useToken2[1];
    var listItemHeight = customListItemHeight !== null && customListItemHeight !== void 0 ? customListItemHeight : token === null || token === void 0 ? void 0 : token.controlHeight;
    var prefixCls = getPrefixCls('select', customizePrefixCls);
    var rootPrefixCls = getPrefixCls();
    var direction = propDirection !== null && propDirection !== void 0 ? propDirection : contextDirection;
    var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
      compactSize = _useCompactItemContex.compactSize,
      compactItemClassnames = _useCompactItemContex.compactItemClassnames;
    var _useVariants = (0, _useVariants3["default"])(customizeVariant, bordered),
      _useVariants2 = _slicedToArray(_useVariants, 2),
      variant = _useVariants2[0],
      enableVariantCls = _useVariants2[1];
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var mode = React.useMemo(function () {
      var m = props.mode;
      if (m === 'combobox') {
        return undefined;
      }
      if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
        return 'combobox';
      }
      return m;
    }, [props.mode]);
    var isMultiple = mode === 'multiple' || mode === 'tags';
    var showSuffixIcon = (0, _useShowArrow["default"])(props.suffixIcon, props.showArrow);
    var mergedPopupMatchSelectWidth = (_a = popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : contextPopupMatchSelectWidth;
    // ===================== Form Status =====================
    var _React$useContext2 = React.useContext(_context.FormItemInputContext),
      contextStatus = _React$useContext2.status,
      hasFeedback = _React$useContext2.hasFeedback,
      isFormItemInput = _React$useContext2.isFormItemInput,
      feedbackIcon = _React$useContext2.feedbackIcon;
    var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);
    // ===================== Empty =====================
    var mergedNotFound;
    if (notFoundContent !== undefined) {
      mergedNotFound = notFoundContent;
    } else if (mode === 'combobox') {
      mergedNotFound = null;
    } else {
      mergedNotFound = (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Select')) || /*#__PURE__*/React.createElement(_defaultRenderEmpty["default"], {
        componentName: "Select"
      });
    }
    // ===================== Icons =====================
    var _useIcons = (0, _useIcons2["default"])(Object.assign(Object.assign({}, rest), {
        multiple: isMultiple,
        hasFeedback: hasFeedback,
        feedbackIcon: feedbackIcon,
        showSuffixIcon: showSuffixIcon,
        prefixCls: prefixCls,
        componentName: 'Select'
      })),
      suffixIcon = _useIcons.suffixIcon,
      itemIcon = _useIcons.itemIcon,
      removeIcon = _useIcons.removeIcon,
      clearIcon = _useIcons.clearIcon;
    var mergedAllowClear = allowClear === true ? {
      clearIcon: clearIcon
    } : allowClear;
    var selectProps = (0, _omit["default"])(rest, ['suffixIcon', 'itemIcon']);
    var mergedPopupClassName = (0, _classnames["default"])(popupClassName || dropdownClassName, _defineProperty({}, "".concat(prefixCls, "-dropdown-").concat(direction), direction === 'rtl'), rootClassName, cssVarCls, rootCls, hashId);
    var mergedSize = (0, _useSize["default"])(function (ctx) {
      var _a;
      return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
    });
    // ===================== Disabled =====================
    var disabled = React.useContext(_DisabledContext["default"]);
    var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    var mergedClassName = (0, _classnames["default"])(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-lg"), mergedSize === 'large'), "".concat(prefixCls, "-sm"), mergedSize === 'small'), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-").concat(variant), enableVariantCls), "".concat(prefixCls, "-in-form-item"), isFormItemInput), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, select === null || select === void 0 ? void 0 : select.className, className, rootClassName, cssVarCls, rootCls, hashId);
    // ===================== Placement =====================
    var memoPlacement = React.useMemo(function () {
      if (placement !== undefined) {
        return placement;
      }
      return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
    }, [placement, direction]);
    // ====================== Warning ======================
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Select');
      warning.deprecated(!dropdownClassName, 'dropdownClassName', 'popupClassName');
      warning.deprecated(dropdownMatchSelectWidth === undefined, 'dropdownMatchSelectWidth', 'popupMatchSelectWidth');
      process.env.NODE_ENV !== "production" ? warning(!('showArrow' in props), 'deprecated', '`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null.') : void 0;
      warning.deprecated(!('bordered' in props), 'bordered', 'variant');
      process.env.NODE_ENV !== "production" ? warning(!(typeof maxCount !== 'undefined' && !isMultiple), 'usage', '`maxCount` only works with mode `multiple` or `tags`') : void 0;
    }
    // ====================== zIndex =========================
    var _useZIndex = (0, _useZIndex3.useZIndex)('SelectLike', dropdownStyle === null || dropdownStyle === void 0 ? void 0 : dropdownStyle.zIndex),
      _useZIndex2 = _slicedToArray(_useZIndex, 1),
      zIndex = _useZIndex2[0];
    // ====================== Render =======================
    return wrapCSSVar( /*#__PURE__*/React.createElement(_rcSelect["default"], Object.assign({
      ref: ref,
      virtual: virtual,
      showSearch: select === null || select === void 0 ? void 0 : select.showSearch
    }, selectProps, {
      style: Object.assign(Object.assign({}, select === null || select === void 0 ? void 0 : select.style), style),
      dropdownMatchSelectWidth: mergedPopupMatchSelectWidth,
      transitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'slide-up', transitionName),
      builtinPlacements: (0, _mergedBuiltinPlacements["default"])(builtinPlacements, popupOverflow),
      listHeight: listHeight,
      listItemHeight: listItemHeight,
      mode: mode,
      prefixCls: prefixCls,
      placement: memoPlacement,
      direction: direction,
      suffixIcon: suffixIcon,
      menuItemSelectedIcon: itemIcon,
      removeIcon: removeIcon,
      allowClear: mergedAllowClear,
      notFoundContent: mergedNotFound,
      className: mergedClassName,
      getPopupContainer: getPopupContainer || getContextPopupContainer,
      dropdownClassName: mergedPopupClassName,
      disabled: mergedDisabled,
      dropdownStyle: Object.assign(Object.assign({}, dropdownStyle), {
        zIndex: zIndex
      }),
      maxCount: isMultiple ? maxCount : undefined,
      tagRender: isMultiple ? tagRender : undefined
    })));
  };
  if (process.env.NODE_ENV !== 'production') {
    InternalSelect.displayName = 'Select';
  }
  var Select = /*#__PURE__*/React.forwardRef(InternalSelect);
  // We don't care debug panel
  /* istanbul ignore next */
  var PurePanel = (0, _PurePanel["default"])(Select);
  Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
  Select.Option = _rcSelect.Option;
  Select.OptGroup = _rcSelect.OptGroup;
  Select._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
  if (process.env.NODE_ENV !== 'production') {
    Select.displayName = 'Select';
  }
  var _default = _exports["default"] = Select;
});