define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "react", "classnames", "rc-field-form", "rc-util/es/hooks/useState", "rc-util/es/ref", "antd4mx/_util/reactNode", "antd4mx/_util/warning", "antd4mx/config-provider/index", "antd4mx/config-provider/hooks/useCSSVarCls", "antd4mx/form/context", "antd4mx/form/hooks/useChildren", "antd4mx/form/hooks/useFormItemStatus", "antd4mx/form/hooks/useFrameState", "antd4mx/form/hooks/useItemRef", "antd4mx/form/style/index", "antd4mx/form/util", "antd4mx/form/FormItem/ItemHolder", "antd4mx/form/FormItem/StatusProvider"], function (_exports, _toConsumableArray2, React, _classnames, _rcFieldForm, _useState3, _ref2, _reactNode, _warning, _index, _useCSSVarCls, _context, _useChildren, _useFormItemStatus, _useFrameState3, _useItemRef, _index2, _util, _ItemHolder, _StatusProvider) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  var NAME_SPLIT = '__SPLIT__';
  var ValidateStatuses = ['success', 'warning', 'error', 'validating', ''];
  // https://github.com/ant-design/ant-design/issues/46417
  // `getValueProps` may modify the value props name,
  // we should check if the control is similar.
  function isSimilarControl(a, b) {
    var keysA = Object.keys(a);
    var keysB = Object.keys(b);
    return keysA.length === keysB.length && keysA.every(function (key) {
      var propValueA = a[key];
      var propValueB = b[key];
      return propValueA === propValueB || typeof propValueA === 'function' || typeof propValueB === 'function';
    });
  }
  var MemoInput = /*#__PURE__*/React.memo(function (_ref) {
    var children = _ref.children;
    return children;
  }, function (prev, next) {
    return isSimilarControl(prev.control, next.control) && prev.update === next.update && prev.childProps.length === next.childProps.length && prev.childProps.every(function (value, index) {
      return value === next.childProps[index];
    });
  });
  function genEmptyMeta() {
    return {
      errors: [],
      warnings: [],
      touched: false,
      validating: false,
      name: [],
      validated: false
    };
  }
  function InternalFormItem(props) {
    var name = props.name,
      noStyle = props.noStyle,
      className = props.className,
      dependencies = props.dependencies,
      customizePrefixCls = props.prefixCls,
      shouldUpdate = props.shouldUpdate,
      rules = props.rules,
      children = props.children,
      required = props.required,
      label = props.label,
      messageVariables = props.messageVariables,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? 'onChange' : _props$trigger,
      validateTrigger = props.validateTrigger,
      hidden = props.hidden,
      help = props.help;
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var _React$useContext2 = React.useContext(_context.FormContext),
      formName = _React$useContext2.name;
    var mergedChildren = (0, _useChildren["default"])(children);
    var isRenderProps = typeof mergedChildren === 'function';
    var notifyParentMetaChange = React.useContext(_context.NoStyleItemContext);
    var _React$useContext3 = React.useContext(_rcFieldForm.FieldContext),
      contextValidateTrigger = _React$useContext3.validateTrigger;
    var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : contextValidateTrigger;
    var hasName = !(name === undefined || name === null);
    var prefixCls = getPrefixCls('form', customizePrefixCls);
    // Style
    var rootCls = (0, _useCSSVarCls["default"])(prefixCls);
    var _useStyle = (0, _index2["default"])(prefixCls, rootCls),
      _useStyle2 = _slicedToArray(_useStyle, 3),
      wrapCSSVar = _useStyle2[0],
      hashId = _useStyle2[1],
      cssVarCls = _useStyle2[2];
    // ========================= Warn =========================
    var warning = (0, _warning.devUseWarning)('Form.Item');
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== "production" ? warning(name !== null, 'usage', '`null` is passed as `name` property') : void 0;
    }
    // ========================= MISC =========================
    // Get `noStyle` required info
    var listContext = React.useContext(_rcFieldForm.ListContext);
    var fieldKeyPathRef = React.useRef();
    // ======================== Errors ========================
    // >>>>> Collect sub field errors
    var _useFrameState = (0, _useFrameState3["default"])({}),
      _useFrameState2 = _slicedToArray(_useFrameState, 2),
      subFieldErrors = _useFrameState2[0],
      setSubFieldErrors = _useFrameState2[1];
    // >>>>> Current field errors
    var _useState = (0, _useState3["default"])(function () {
        return genEmptyMeta();
      }),
      _useState2 = _slicedToArray(_useState, 2),
      meta = _useState2[0],
      setMeta = _useState2[1];
    var onMetaChange = function onMetaChange(nextMeta) {
      // This keyInfo is not correct when field is removed
      // Since origin keyManager no longer keep the origin key anymore
      // Which means we need cache origin one and reuse when removed
      var keyInfo = listContext === null || listContext === void 0 ? void 0 : listContext.getKey(nextMeta.name);
      // Destroy will reset all the meta
      setMeta(nextMeta.destroy ? genEmptyMeta() : nextMeta, true);
      // Bump to parent since noStyle
      if (noStyle && help !== false && notifyParentMetaChange) {
        var namePath = nextMeta.name;
        if (!nextMeta.destroy) {
          if (keyInfo !== undefined) {
            var _keyInfo = _slicedToArray(keyInfo, 2),
              fieldKey = _keyInfo[0],
              restPath = _keyInfo[1];
            namePath = [fieldKey].concat((0, _toConsumableArray2["default"])(restPath));
            fieldKeyPathRef.current = namePath;
          }
        } else {
          // Use origin cache data
          namePath = fieldKeyPathRef.current || namePath;
        }
        notifyParentMetaChange(nextMeta, namePath);
      }
    };
    // >>>>> Collect noStyle Field error to the top FormItem
    var onSubItemMetaChange = function onSubItemMetaChange(subMeta, uniqueKeys) {
      // Only `noStyle` sub item will trigger
      setSubFieldErrors(function (prevSubFieldErrors) {
        var clone = Object.assign({}, prevSubFieldErrors);
        // name: ['user', 1] + key: [4] = ['user', 4]
        var mergedNamePath = [].concat((0, _toConsumableArray2["default"])(subMeta.name.slice(0, -1)), (0, _toConsumableArray2["default"])(uniqueKeys));
        var mergedNameKey = mergedNamePath.join(NAME_SPLIT);
        if (subMeta.destroy) {
          // Remove
          delete clone[mergedNameKey];
        } else {
          // Update
          clone[mergedNameKey] = subMeta;
        }
        return clone;
      });
    };
    // >>>>> Get merged errors
    var _React$useMemo = React.useMemo(function () {
        var errorList = (0, _toConsumableArray2["default"])(meta.errors);
        var warningList = (0, _toConsumableArray2["default"])(meta.warnings);
        Object.values(subFieldErrors).forEach(function (subFieldError) {
          errorList.push.apply(errorList, (0, _toConsumableArray2["default"])(subFieldError.errors || []));
          warningList.push.apply(warningList, (0, _toConsumableArray2["default"])(subFieldError.warnings || []));
        });
        return [errorList, warningList];
      }, [subFieldErrors, meta.errors, meta.warnings]),
      _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
      mergedErrors = _React$useMemo2[0],
      mergedWarnings = _React$useMemo2[1];
    // ===================== Children Ref =====================
    var getItemRef = (0, _useItemRef["default"])();
    // ======================== Render ========================
    function renderLayout(baseChildren, fieldId, isRequired) {
      if (noStyle && !hidden) {
        return /*#__PURE__*/React.createElement(_StatusProvider["default"], {
          prefixCls: prefixCls,
          hasFeedback: props.hasFeedback,
          validateStatus: props.validateStatus,
          meta: meta,
          errors: mergedErrors,
          warnings: mergedWarnings,
          noStyle: true
        }, baseChildren);
      }
      return /*#__PURE__*/React.createElement(_ItemHolder["default"], Object.assign({
        key: "row"
      }, props, {
        className: (0, _classnames["default"])(className, cssVarCls, rootCls, hashId),
        prefixCls: prefixCls,
        fieldId: fieldId,
        isRequired: isRequired,
        errors: mergedErrors,
        warnings: mergedWarnings,
        meta: meta,
        onSubItemMetaChange: onSubItemMetaChange
      }), baseChildren);
    }
    if (!hasName && !isRenderProps && !dependencies) {
      return wrapCSSVar(renderLayout(mergedChildren));
    }
    var variables = {};
    if (typeof label === 'string') {
      variables.label = label;
    } else if (name) {
      variables.label = String(name);
    }
    if (messageVariables) {
      variables = Object.assign(Object.assign({}, variables), messageVariables);
    }
    // >>>>> With Field
    return wrapCSSVar( /*#__PURE__*/React.createElement(_rcFieldForm.Field, Object.assign({}, props, {
      messageVariables: variables,
      trigger: trigger,
      validateTrigger: mergedValidateTrigger,
      onMetaChange: onMetaChange
    }), function (control, renderMeta, context) {
      var mergedName = (0, _util.toArray)(name).length && renderMeta ? renderMeta.name : [];
      var fieldId = (0, _util.getFieldId)(mergedName, formName);
      var isRequired = required !== undefined ? required : !!(rules && rules.some(function (rule) {
        if (rule && _typeof(rule) === 'object' && rule.required && !rule.warningOnly) {
          return true;
        }
        if (typeof rule === 'function') {
          var ruleEntity = rule(context);
          return ruleEntity && ruleEntity.required && !ruleEntity.warningOnly;
        }
        return false;
      }));
      // ======================= Children =======================
      var mergedControl = Object.assign({}, control);
      var childNode = null;
      process.env.NODE_ENV !== "production" ? warning(!(shouldUpdate && dependencies), 'usage', "`shouldUpdate` and `dependencies` shouldn't be used together. See https://u.ant.design/form-deps.") : void 0;
      if (Array.isArray(mergedChildren) && hasName) {
        process.env.NODE_ENV !== "production" ? warning(false, 'usage', 'A `Form.Item` with a `name` prop must have a single child element. For information on how to render more complex form items, see https://u.ant.design/complex-form-item.') : void 0;
        childNode = mergedChildren;
      } else if (isRenderProps && (!(shouldUpdate || dependencies) || hasName)) {
        process.env.NODE_ENV !== "production" ? warning(!!(shouldUpdate || dependencies), 'usage', 'A `Form.Item` with a render function must have either `shouldUpdate` or `dependencies`.') : void 0;
        process.env.NODE_ENV !== "production" ? warning(!hasName, 'usage', 'A `Form.Item` with a render function cannot be a field, and thus cannot have a `name` prop.') : void 0;
      } else if (dependencies && !isRenderProps && !hasName) {
        process.env.NODE_ENV !== "production" ? warning(false, 'usage', 'Must set `name` or use a render function when `dependencies` is set.') : void 0;
      } else if ((0, _reactNode.isValidElement)(mergedChildren)) {
        process.env.NODE_ENV !== "production" ? warning(mergedChildren.props.defaultValue === undefined, 'usage', '`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.') : void 0;
        var childProps = Object.assign(Object.assign({}, mergedChildren.props), mergedControl);
        if (!childProps.id) {
          childProps.id = fieldId;
        }
        if (help || mergedErrors.length > 0 || mergedWarnings.length > 0 || props.extra) {
          var describedbyArr = [];
          if (help || mergedErrors.length > 0) {
            describedbyArr.push("".concat(fieldId, "_help"));
          }
          if (props.extra) {
            describedbyArr.push("".concat(fieldId, "_extra"));
          }
          childProps['aria-describedby'] = describedbyArr.join(' ');
        }
        if (mergedErrors.length > 0) {
          childProps['aria-invalid'] = 'true';
        }
        if (isRequired) {
          childProps['aria-required'] = 'true';
        }
        if ((0, _ref2.supportRef)(mergedChildren)) {
          childProps.ref = getItemRef(mergedName, mergedChildren);
        }
        // We should keep user origin event handler
        var triggers = new Set([].concat((0, _toConsumableArray2["default"])((0, _util.toArray)(trigger)), (0, _toConsumableArray2["default"])((0, _util.toArray)(mergedValidateTrigger))));
        triggers.forEach(function (eventName) {
          childProps[eventName] = function () {
            var _a2, _c2;
            var _a, _b, _c;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            (_a = mergedControl[eventName]) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [mergedControl].concat(args));
            (_c = (_b = mergedChildren.props)[eventName]) === null || _c === void 0 ? void 0 : (_c2 = _c).call.apply(_c2, [_b].concat(args));
          };
        });
        // List of props that need to be watched for changes -> if changes are detected in MemoInput -> rerender
        var watchingChildProps = [childProps['aria-required'], childProps['aria-invalid'], childProps['aria-describedby']];
        childNode = /*#__PURE__*/React.createElement(MemoInput, {
          control: mergedControl,
          update: mergedChildren,
          childProps: watchingChildProps
        }, (0, _reactNode.cloneElement)(mergedChildren, childProps));
      } else if (isRenderProps && (shouldUpdate || dependencies) && !hasName) {
        childNode = mergedChildren(context);
      } else {
        process.env.NODE_ENV !== "production" ? warning(!mergedName.length, 'usage', '`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead.') : void 0;
        childNode = mergedChildren;
      }
      return renderLayout(childNode, fieldId, isRequired);
    }));
  }
  var FormItem = InternalFormItem;
  FormItem.useStatus = _useFormItemStatus["default"];
  var _default = _exports["default"] = FormItem;
});