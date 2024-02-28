function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
define(["exports", "react", "classnames", "rc-util/es/Dom/isVisible", "rc-util/es/hooks/useLayoutEffect", "rc-util/es/omit", "antd4mx/grid", "antd4mx/form/context", "antd4mx/form/FormItemInput", "antd4mx/form/FormItemLabel", "antd4mx/form/hooks/useDebounce", "antd4mx/form/util", "antd4mx/form/FormItem/StatusProvider"], function (_exports, React, _classnames, _isVisible, _useLayoutEffect, _omit, _grid, _context, _FormItemInput, _FormItemLabel, _useDebounce, _util, _StatusProvider) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = ItemHolder;
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
  function ItemHolder(props) {
    var prefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      style = props.style,
      help = props.help,
      errors = props.errors,
      warnings = props.warnings,
      validateStatus = props.validateStatus,
      meta = props.meta,
      hasFeedback = props.hasFeedback,
      hidden = props.hidden,
      children = props.children,
      fieldId = props.fieldId,
      required = props.required,
      isRequired = props.isRequired,
      onSubItemMetaChange = props.onSubItemMetaChange,
      restProps = __rest(props, ["prefixCls", "className", "rootClassName", "style", "help", "errors", "warnings", "validateStatus", "meta", "hasFeedback", "hidden", "children", "fieldId", "required", "isRequired", "onSubItemMetaChange"]);
    var itemPrefixCls = "".concat(prefixCls, "-item");
    var _React$useContext = React.useContext(_context.FormContext),
      requiredMark = _React$useContext.requiredMark;
    // ======================== Margin ========================
    var itemRef = React.useRef(null);
    var debounceErrors = (0, _useDebounce["default"])(errors);
    var debounceWarnings = (0, _useDebounce["default"])(warnings);
    var hasHelp = help !== undefined && help !== null;
    var hasError = !!(hasHelp || errors.length || warnings.length);
    var isOnScreen = !!itemRef.current && (0, _isVisible["default"])(itemRef.current);
    var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      marginBottom = _React$useState2[0],
      setMarginBottom = _React$useState2[1];
    (0, _useLayoutEffect["default"])(function () {
      if (hasError && itemRef.current) {
        // The element must be part of the DOMTree to use getComputedStyle
        // https://stackoverflow.com/questions/35360711/getcomputedstyle-returns-a-cssstyledeclaration-but-all-properties-are-empty-on-a
        var itemStyle = getComputedStyle(itemRef.current);
        setMarginBottom(parseInt(itemStyle.marginBottom, 10));
      }
    }, [hasError, isOnScreen]);
    var onErrorVisibleChanged = function onErrorVisibleChanged(nextVisible) {
      if (!nextVisible) {
        setMarginBottom(null);
      }
    };
    // ======================== Status ========================
    var getValidateState = function getValidateState() {
      var isDebounce = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _errors = isDebounce ? debounceErrors : meta.errors;
      var _warnings = isDebounce ? debounceWarnings : meta.warnings;
      return (0, _util.getStatus)(_errors, _warnings, meta, '', !!hasFeedback, validateStatus);
    };
    var mergedValidateStatus = getValidateState();
    // ======================== Render ========================
    var itemClassName = (0, _classnames["default"])(itemPrefixCls, className, rootClassName, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(itemPrefixCls, "-with-help"), hasHelp || debounceErrors.length || debounceWarnings.length), "".concat(itemPrefixCls, "-has-feedback"), mergedValidateStatus && hasFeedback), "".concat(itemPrefixCls, "-has-success"), mergedValidateStatus === 'success'), "".concat(itemPrefixCls, "-has-warning"), mergedValidateStatus === 'warning'), "".concat(itemPrefixCls, "-has-error"), mergedValidateStatus === 'error'), "".concat(itemPrefixCls, "-is-validating"), mergedValidateStatus === 'validating'), "".concat(itemPrefixCls, "-hidden"), hidden));
    return /*#__PURE__*/React.createElement("div", {
      className: itemClassName,
      style: style,
      ref: itemRef
    }, /*#__PURE__*/React.createElement(_grid.Row, Object.assign({
      className: "".concat(itemPrefixCls, "-row")
    }, (0, _omit["default"])(restProps, ['_internalItemRender', 'colon', 'dependencies', 'extra', 'fieldKey', 'getValueFromEvent', 'getValueProps', 'htmlFor', 'id',
    // It is deprecated because `htmlFor` is its replacement.
    'initialValue', 'isListField', 'label', 'labelAlign', 'labelCol', 'labelWrap', 'messageVariables', 'name', 'normalize', 'noStyle', 'preserve', 'requiredMark', 'rules', 'shouldUpdate', 'trigger', 'tooltip', 'validateFirst', 'validateTrigger', 'valuePropName', 'wrapperCol', 'validateDebounce'])), /*#__PURE__*/React.createElement(_FormItemLabel["default"], Object.assign({
      htmlFor: fieldId
    }, props, {
      requiredMark: requiredMark,
      required: required !== null && required !== void 0 ? required : isRequired,
      prefixCls: prefixCls
    })), /*#__PURE__*/React.createElement(_FormItemInput["default"], Object.assign({}, props, meta, {
      errors: debounceErrors,
      warnings: debounceWarnings,
      prefixCls: prefixCls,
      status: mergedValidateStatus,
      help: help,
      marginBottom: marginBottom,
      onErrorVisibleChanged: onErrorVisibleChanged
    }), /*#__PURE__*/React.createElement(_context.NoStyleItemContext.Provider, {
      value: onSubItemMetaChange
    }, /*#__PURE__*/React.createElement(_StatusProvider["default"], {
      prefixCls: prefixCls,
      meta: meta,
      errors: meta.errors,
      warnings: meta.warnings,
      hasFeedback: hasFeedback,
      // Already calculated
      validateStatus: mergedValidateStatus
    }, children)))), !!marginBottom && ( /*#__PURE__*/React.createElement("div", {
      className: "".concat(itemPrefixCls, "-margin-offset"),
      style: {
        marginBottom: -marginBottom
      }
    })));
  }
});