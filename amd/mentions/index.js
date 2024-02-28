function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-mentions", "rc-util/es/ref", "antd4mx/_util/PurePanel", "antd4mx/_util/statusUtils", "antd4mx/_util/warning", "antd4mx/config-provider", "antd4mx/config-provider/defaultRenderEmpty", "antd4mx/form/context", "antd4mx/spin", "antd4mx/mentions/style", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/form/hooks/useVariants", "antd4mx/_util/getAllowClear"], function (_exports, React, _classnames, _rcMentions, _ref, _PurePanel, _statusUtils, _warning, _configProvider, _defaultRenderEmpty, _context, _spin, _style, _useCSSVarCls, _useVariants, _getAllowClear) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.Option = void 0;
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
  // eslint-disable-next-line import/no-named-as-default

  var Option = _exports.Option = _rcMentions["default"].Option;
  function loadingFilterOption() {
    return true;
  }
  var InternalMentions = function InternalMentions(props, ref) {
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      disabled = props.disabled,
      loading = props.loading,
      filterOption = props.filterOption,
      children = props.children,
      notFoundContent = props.notFoundContent,
      options = props.options,
      customStatus = props.status,
      _props$allowClear = props.allowClear,
      allowClear = _props$allowClear === void 0 ? false : _props$allowClear,
      popupClassName = props.popupClassName,
      style = props.style,
      customVariant = props.variant,
      restProps = __rest(props, ["prefixCls", "className", "rootClassName", "disabled", "loading", "filterOption", "children", "notFoundContent", "options", "status", "allowClear", "popupClassName", "style", "variant"]);
    var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      focused = _React$useState2[0],
      setFocused = _React$useState2[1];
    var innerRef = React.useRef(null);
    var mergedRef = (0, _ref.composeRef)(ref, innerRef);
    // =================== Warning =====================
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Mentions');
      warning.deprecated(!children, 'Mentions.Option', 'options');
    }
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      renderEmpty = _React$useContext.renderEmpty,
      direction = _React$useContext.direction,
      contextMentions = _React$useContext.mentions;
    var _React$useContext2 = React.useContext(_context.FormItemInputContext),
      contextStatus = _React$useContext2.status,
      hasFeedback = _React$useContext2.hasFeedback,
      feedbackIcon = _React$useContext2.feedbackIcon;
    var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);
    var onFocus = function onFocus() {
      if (restProps.onFocus) {
        restProps.onFocus.apply(restProps, arguments);
      }
      setFocused(true);
    };
    var onBlur = function onBlur() {
      if (restProps.onBlur) {
        restProps.onBlur.apply(restProps, arguments);
      }
      setFocused(false);
    };
    var notFoundContentEle = React.useMemo(function () {
      if (notFoundContent !== undefined) {
        return notFoundContent;
      }
      return (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Select')) || /*#__PURE__*/React.createElement(_defaultRenderEmpty["default"], {
        componentName: "Select"
      });
    }, [notFoundContent, renderEmpty]);
    var mentionOptions = React.useMemo(function () {
      if (loading) {
        return /*#__PURE__*/React.createElement(Option, {
          value: "ANTD_SEARCHING",
          disabled: true
        }, /*#__PURE__*/React.createElement(_spin["default"], {
          size: "small"
        }));
      }
      return children;
    }, [loading, children]);
    var mergedOptions = loading ? [{
      value: 'ANTD_SEARCHING',
      disabled: true,
      label: /*#__PURE__*/React.createElement(_spin["default"], {
        size: "small"
      })
    }] : options;
    var mentionsfilterOption = loading ? loadingFilterOption : filterOption;
    var prefixCls = getPrefixCls('mentions', customizePrefixCls);
    var mergedAllowClear = (0, _getAllowClear["default"])(allowClear);
    // Style
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _style["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var _useVariant = (0, _useVariants["default"])(customVariant),
      _useVariant2 = _slicedToArray(_useVariant, 2),
      variant = _useVariant2[0],
      enableVariantCls = _useVariant2[1];
    // eslint-disable-next-line react/jsx-no-useless-fragment
    var suffixNode = hasFeedback && /*#__PURE__*/React.createElement(React.Fragment, null, feedbackIcon);
    var mergedClassName = (0, _classnames["default"])(contextMentions === null || contextMentions === void 0 ? void 0 : contextMentions.className, className, rootClassName, cssVarCls, rootCls);
    var mentions = /*#__PURE__*/React.createElement(_rcMentions["default"], Object.assign({
      prefixCls: prefixCls,
      notFoundContent: notFoundContentEle,
      className: mergedClassName,
      disabled: disabled,
      allowClear: mergedAllowClear,
      direction: direction,
      style: Object.assign(Object.assign({}, contextMentions === null || contextMentions === void 0 ? void 0 : contextMentions.style), style)
    }, restProps, {
      filterOption: mentionsfilterOption,
      onFocus: onFocus,
      onBlur: onBlur,
      dropdownClassName: (0, _classnames["default"])(popupClassName, rootClassName, hashId, cssVarCls, rootCls),
      ref: mergedRef,
      options: mergedOptions,
      suffix: suffixNode,
      classNames: {
        mentions: (0, _classnames["default"])(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-disabled"), disabled), "".concat(prefixCls, "-focused"), focused), "".concat(prefixCls, "-rtl"), direction === 'rtl'), hashId),
        variant: (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-").concat(variant), enableVariantCls), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus)),
        affixWrapper: hashId
      }
    }), mentionOptions);
    return wrapCSSVar(mentions);
  };
  var Mentions = /*#__PURE__*/React.forwardRef(InternalMentions);
  if (process.env.NODE_ENV !== 'production') {
    Mentions.displayName = 'Mentions';
  }
  Mentions.Option = Option;
  // We don't care debug panel
  /* istanbul ignore next */
  var PurePanel = (0, _PurePanel["default"])(Mentions, 'mentions');
  Mentions._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
  Mentions.getMentions = function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _config$prefix = config.prefix,
      prefix = _config$prefix === void 0 ? '@' : _config$prefix,
      _config$split = config.split,
      split = _config$split === void 0 ? ' ' : _config$split;
    var prefixList = Array.isArray(prefix) ? prefix : [prefix];
    return value.split(split).map(function () {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var hitPrefix = null;
      prefixList.some(function (prefixStr) {
        var startStr = str.slice(0, prefixStr.length);
        if (startStr === prefixStr) {
          hitPrefix = prefixStr;
          return true;
        }
        return false;
      });
      if (hitPrefix !== null) {
        return {
          prefix: hitPrefix,
          value: str.slice(hitPrefix.length)
        };
      }
      return null;
    }).filter(function (entity) {
      return !!entity && !!entity.value;
    });
  };
  var _default = _exports["default"] = Mentions;
});