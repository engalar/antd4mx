define(["exports", "react", "@ant-design/icons/es/icons/ExclamationCircleFilled", "classnames", "rc-util/es/hooks/useMergedState", "rc-util/es/KeyCode", "rc-util/es/omit", "antd4mx/_util/reactNode", "antd4mx/config-provider/index", "antd4mx/popover/index", "antd4mx/popconfirm/PurePanel", "antd4mx/popconfirm/style/index"], function (_exports, React, _ExclamationCircleFilled, _classnames, _useMergedState3, _KeyCode, _omit, _reactNode, _index, _index2, _PurePanel, _index3) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var _this = void 0;
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
  var Popconfirm = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _a, _b;
    var customizePrefixCls = props.prefixCls,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'top' : _props$placement,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? 'click' : _props$trigger,
      _props$okType = props.okType,
      okType = _props$okType === void 0 ? 'primary' : _props$okType,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? /*#__PURE__*/React.createElement(_ExclamationCircleFilled["default"], null) : _props$icon,
      children = props.children,
      overlayClassName = props.overlayClassName,
      onOpenChange = props.onOpenChange,
      onVisibleChange = props.onVisibleChange,
      restProps = __rest(props, ["prefixCls", "placement", "trigger", "okType", "icon", "children", "overlayClassName", "onOpenChange", "onVisibleChange"]);
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var _useMergedState = (0, _useMergedState3["default"])(false, {
        value: (_a = props.open) !== null && _a !== void 0 ? _a : props.visible,
        defaultValue: (_b = props.defaultOpen) !== null && _b !== void 0 ? _b : props.defaultVisible
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      open = _useMergedState2[0],
      setOpen = _useMergedState2[1];
    var settingOpen = function settingOpen(value, e) {
      setOpen(value, true);
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(value);
      onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(value, e);
    };
    var close = function close(e) {
      settingOpen(false, e);
    };
    var onConfirm = function onConfirm(e) {
      var _a;
      return (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(_this, e);
    };
    var onCancel = function onCancel(e) {
      var _a;
      settingOpen(false, e);
      (_a = props.onCancel) === null || _a === void 0 ? void 0 : _a.call(_this, e);
    };
    var _onKeyDown = function onKeyDown(e) {
      if (e.keyCode === _KeyCode["default"].ESC && open) {
        settingOpen(false, e);
      }
    };
    var onInternalOpenChange = function onInternalOpenChange(value) {
      var _props$disabled = props.disabled,
        disabled = _props$disabled === void 0 ? false : _props$disabled;
      if (disabled) {
        return;
      }
      settingOpen(value);
    };
    var prefixCls = getPrefixCls('popconfirm', customizePrefixCls);
    var overlayClassNames = (0, _classnames["default"])(prefixCls, overlayClassName);
    var _useStyle = (0, _index3["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 1),
      wrapCSSVar = _useStyle2[0];
    return wrapCSSVar( /*#__PURE__*/React.createElement(_index2["default"], Object.assign({}, (0, _omit["default"])(restProps, ['title']), {
      trigger: trigger,
      placement: placement,
      onOpenChange: onInternalOpenChange,
      open: open,
      ref: ref,
      overlayClassName: overlayClassNames,
      content: /*#__PURE__*/React.createElement(_PurePanel.Overlay, Object.assign({
        okType: okType,
        icon: icon
      }, props, {
        prefixCls: prefixCls,
        close: close,
        onConfirm: onConfirm,
        onCancel: onCancel
      })),
      "data-popover-inject": true
    }), (0, _reactNode.cloneElement)(children, {
      onKeyDown: function onKeyDown(e) {
        var _a, _b;
        if ( /*#__PURE__*/React.isValidElement(children)) {
          (_b = children === null || children === void 0 ? void 0 : (_a = children.props).onKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        }
        _onKeyDown(e);
      }
    })));
  });
  // We don't care debug panel
  /* istanbul ignore next */
  Popconfirm._InternalPanelDoNotUseOrYouWillBeFired = _PurePanel["default"];
  if (process.env.NODE_ENV !== 'production') {
    Popconfirm.displayName = 'Popconfirm';
  }
  var _default = _exports["default"] = Popconfirm;
});