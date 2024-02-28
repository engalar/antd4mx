define(["exports", "react", "classnames", "rc-field-form", "antd4mx/config-provider/index", "antd4mx/config-provider/DisabledContext", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/config-provider/hooks/useSize", "antd4mx/config-provider/SizeContext", "antd4mx/form/context", "antd4mx/form/hooks/useForm", "antd4mx/form/hooks/useFormWarning", "antd4mx/form/style/index", "antd4mx/form/validateMessagesContext"], function (_exports, _react, _classnames, _rcFieldForm, _index, _DisabledContext, _useCSSVarCls, _useSize, _SizeContext, _context, _useForm3, _useFormWarning, _index2, _validateMessagesContext) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "List", {
    enumerable: true,
    get: function get() {
      return _rcFieldForm.List;
    }
  });
  _exports["default"] = void 0;
  Object.defineProperty(_exports, "useForm", {
    enumerable: true,
    get: function get() {
      return _useForm3["default"];
    }
  });
  Object.defineProperty(_exports, "useWatch", {
    enumerable: true,
    get: function get() {
      return _rcFieldForm.useWatch;
    }
  });
  var React = _react;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
  var InternalForm = function InternalForm(props, ref) {
    var contextDisabled = React.useContext(_DisabledContext["default"]);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      contextForm = _React$useContext.form;
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      rootClassName = props.rootClassName,
      size = props.size,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? contextDisabled : _props$disabled,
      form = props.form,
      colon = props.colon,
      labelAlign = props.labelAlign,
      labelWrap = props.labelWrap,
      labelCol = props.labelCol,
      wrapperCol = props.wrapperCol,
      hideRequiredMark = props.hideRequiredMark,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? 'horizontal' : _props$layout,
      scrollToFirstError = props.scrollToFirstError,
      requiredMark = props.requiredMark,
      onFinishFailed = props.onFinishFailed,
      name = props.name,
      style = props.style,
      feedbackIcons = props.feedbackIcons,
      variant = props.variant,
      restFormProps = __rest(props, ["prefixCls", "className", "rootClassName", "size", "disabled", "form", "colon", "labelAlign", "labelWrap", "labelCol", "wrapperCol", "hideRequiredMark", "layout", "scrollToFirstError", "requiredMark", "onFinishFailed", "name", "style", "feedbackIcons", "variant"]);
    var mergedSize = (0, _useSize["default"])(size);
    var contextValidateMessages = React.useContext(_validateMessagesContext["default"]);
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      (0, _useFormWarning["default"])(props);
    }
    var mergedRequiredMark = (0, _react.useMemo)(function () {
      if (requiredMark !== undefined) {
        return requiredMark;
      }
      if (hideRequiredMark) {
        return false;
      }
      if (contextForm && contextForm.requiredMark !== undefined) {
        return contextForm.requiredMark;
      }
      return true;
    }, [hideRequiredMark, requiredMark, contextForm]);
    var mergedColon = colon !== null && colon !== void 0 ? colon : contextForm === null || contextForm === void 0 ? void 0 : contextForm.colon;
    var prefixCls = getPrefixCls('form', customizePrefixCls);
    // Style
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    var formClassName = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(layout), _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-hide-required-mark"), mergedRequiredMark === false), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-").concat(mergedSize), mergedSize), cssVarCls, rootCls, hashId, contextForm === null || contextForm === void 0 ? void 0 : contextForm.className, className, rootClassName);
    var _useForm = (0, _useForm3["default"])(form),
      _useForm2 = _slicedToArray(_useForm, 1),
      wrapForm = _useForm2[0];
    var __INTERNAL__ = wrapForm.__INTERNAL__;
    __INTERNAL__.name = name;
    var formContextValue = (0, _react.useMemo)(function () {
      return {
        name: name,
        labelAlign: labelAlign,
        labelCol: labelCol,
        labelWrap: labelWrap,
        wrapperCol: wrapperCol,
        vertical: layout === 'vertical',
        colon: mergedColon,
        requiredMark: mergedRequiredMark,
        itemRef: __INTERNAL__.itemRef,
        form: wrapForm,
        feedbackIcons: feedbackIcons
      };
    }, [name, labelAlign, labelCol, wrapperCol, layout, mergedColon, mergedRequiredMark, wrapForm, feedbackIcons]);
    React.useImperativeHandle(ref, function () {
      return wrapForm;
    });
    var scrollToField = function scrollToField(options, fieldName) {
      if (options) {
        var defaultScrollToFirstError = {
          block: 'nearest'
        };
        if (_typeof(options) === 'object') {
          defaultScrollToFirstError = options;
        }
        wrapForm.scrollToField(fieldName, defaultScrollToFirstError);
      }
    };
    var onInternalFinishFailed = function onInternalFinishFailed(errorInfo) {
      onFinishFailed === null || onFinishFailed === void 0 ? void 0 : onFinishFailed(errorInfo);
      if (errorInfo.errorFields.length) {
        var fieldName = errorInfo.errorFields[0].name;
        if (scrollToFirstError !== undefined) {
          scrollToField(scrollToFirstError, fieldName);
          return;
        }
        if (contextForm && contextForm.scrollToFirstError !== undefined) {
          scrollToField(contextForm.scrollToFirstError, fieldName);
        }
      }
    };
    return wrapCSSVar( /*#__PURE__*/React.createElement(_context.VariantContext.Provider, {
      value: variant
    }, /*#__PURE__*/React.createElement(_DisabledContext.DisabledContextProvider, {
      disabled: disabled
    }, /*#__PURE__*/React.createElement(_SizeContext["default"].Provider, {
      value: mergedSize
    }, /*#__PURE__*/React.createElement(_context.FormProvider, {
      // This is not list in API, we pass with spread
      validateMessages: contextValidateMessages
    }, /*#__PURE__*/React.createElement(_context.FormContext.Provider, {
      value: formContextValue
    }, /*#__PURE__*/React.createElement(_rcFieldForm["default"], Object.assign({
      id: name
    }, restFormProps, {
      name: name,
      onFinishFailed: onInternalFinishFailed,
      form: wrapForm,
      style: Object.assign(Object.assign({}, contextForm === null || contextForm === void 0 ? void 0 : contextForm.style), style),
      className: formClassName
    }))))))));
  };
  var Form = /*#__PURE__*/React.forwardRef(InternalForm);
  if (process.env.NODE_ENV !== 'production') {
    Form.displayName = 'Form';
  }
  var _default = _exports["default"] = Form;
});