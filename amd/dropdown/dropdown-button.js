define(["exports", "classnames", "react", "@ant-design/icons/es/icons/EllipsisOutlined", "antd4mx/button", "antd4mx/config-provider", "antd4mx/space", "antd4mx/space/Compact", "antd4mx/dropdown/dropdown"], function (_exports, _classnames, React, _EllipsisOutlined, _button, _configProvider, _space, _Compact, _dropdown) {
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
  var DropdownButton = function DropdownButton(props) {
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;
    var customizePrefixCls = props.prefixCls,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      danger = props.danger,
      disabled = props.disabled,
      loading = props.loading,
      onClick = props.onClick,
      htmlType = props.htmlType,
      children = props.children,
      className = props.className,
      menu = props.menu,
      arrow = props.arrow,
      autoFocus = props.autoFocus,
      overlay = props.overlay,
      trigger = props.trigger,
      align = props.align,
      open = props.open,
      onOpenChange = props.onOpenChange,
      placement = props.placement,
      getPopupContainer = props.getPopupContainer,
      href = props.href,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? /*#__PURE__*/React.createElement(_EllipsisOutlined["default"], null) : _props$icon,
      title = props.title,
      _props$buttonsRender = props.buttonsRender,
      buttonsRender = _props$buttonsRender === void 0 ? function (buttons) {
        return buttons;
      } : _props$buttonsRender,
      mouseEnterDelay = props.mouseEnterDelay,
      mouseLeaveDelay = props.mouseLeaveDelay,
      overlayClassName = props.overlayClassName,
      overlayStyle = props.overlayStyle,
      destroyPopupOnHide = props.destroyPopupOnHide,
      dropdownRender = props.dropdownRender,
      restProps = __rest(props, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "dropdownRender"]);
    var prefixCls = getPrefixCls('dropdown', customizePrefixCls);
    var buttonPrefixCls = "".concat(prefixCls, "-button");
    var dropdownProps = {
      menu: menu,
      arrow: arrow,
      autoFocus: autoFocus,
      align: align,
      disabled: disabled,
      trigger: disabled ? [] : trigger,
      onOpenChange: onOpenChange,
      getPopupContainer: getPopupContainer || getContextPopupContainer,
      mouseEnterDelay: mouseEnterDelay,
      mouseLeaveDelay: mouseLeaveDelay,
      overlayClassName: overlayClassName,
      overlayStyle: overlayStyle,
      destroyPopupOnHide: destroyPopupOnHide,
      dropdownRender: dropdownRender
    };
    var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
      compactSize = _useCompactItemContex.compactSize,
      compactItemClassnames = _useCompactItemContex.compactItemClassnames;
    var classes = (0, _classnames["default"])(buttonPrefixCls, compactItemClassnames, className);
    if ('overlay' in props) {
      dropdownProps.overlay = overlay;
    }
    if ('open' in props) {
      dropdownProps.open = open;
    }
    if ('placement' in props) {
      dropdownProps.placement = placement;
    } else {
      dropdownProps.placement = direction === 'rtl' ? 'bottomLeft' : 'bottomRight';
    }
    var leftButton = /*#__PURE__*/React.createElement(_button["default"], {
      type: type,
      danger: danger,
      disabled: disabled,
      loading: loading,
      onClick: onClick,
      htmlType: htmlType,
      href: href,
      title: title
    }, children);
    var rightButton = /*#__PURE__*/React.createElement(_button["default"], {
      type: type,
      danger: danger,
      icon: icon
    });
    var _buttonsRender = buttonsRender([leftButton, rightButton]),
      _buttonsRender2 = _slicedToArray(_buttonsRender, 2),
      leftButtonToRender = _buttonsRender2[0],
      rightButtonToRender = _buttonsRender2[1];
    return /*#__PURE__*/React.createElement(_space["default"].Compact, Object.assign({
      className: classes,
      size: compactSize,
      block: true
    }, restProps), leftButtonToRender, /*#__PURE__*/React.createElement(_dropdown["default"], Object.assign({}, dropdownProps), rightButtonToRender));
  };
  DropdownButton.__ANT_BUTTON = true;
  var _default = _exports["default"] = DropdownButton;
});