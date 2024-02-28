define(["exports", "classnames", "rc-menu", "rc-util/es/Children/toArray", "rc-util/es/omit", "react", "antd4mx/layout/Sider", "antd4mx/tooltip/index", "antd4mx/_util/reactNode", "antd4mx/menu/MenuContext"], function (_exports, _classnames, _rcMenu, _toArray, _omit, React, _Sider, _index, _reactNode, _MenuContext) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var MenuItem = function MenuItem(props) {
    var _a;
    var className = props.className,
      children = props.children,
      icon = props.icon,
      title = props.title,
      danger = props.danger;
    var _React$useContext = React.useContext(_MenuContext["default"]),
      prefixCls = _React$useContext.prefixCls,
      firstLevel = _React$useContext.firstLevel,
      direction = _React$useContext.direction,
      disableMenuItemTitleTooltip = _React$useContext.disableMenuItemTitleTooltip,
      isInlineCollapsed = _React$useContext.inlineCollapsed;
    var renderItemChildren = function renderItemChildren(inlineCollapsed) {
      var wrapNode = /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-title-content")
      }, children);
      // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
      // ref: https://github.com/ant-design/ant-design/pull/23456
      if (!icon || (0, _reactNode.isValidElement)(children) && children.type === 'span') {
        if (children && inlineCollapsed && firstLevel && typeof children === 'string') {
          return /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-inline-collapsed-noicon")
          }, children.charAt(0));
        }
      }
      return wrapNode;
    };
    var _React$useContext2 = React.useContext(_Sider.SiderContext),
      siderCollapsed = _React$useContext2.siderCollapsed;
    var tooltipTitle = title;
    if (typeof title === 'undefined') {
      tooltipTitle = firstLevel ? children : '';
    } else if (title === false) {
      tooltipTitle = '';
    }
    var tooltipProps = {
      title: tooltipTitle
    };
    if (!siderCollapsed && !isInlineCollapsed) {
      tooltipProps.title = null;
      // Reset `open` to fix control mode tooltip display not correct
      // ref: https://github.com/ant-design/ant-design/issues/16742
      tooltipProps.open = false;
    }
    var childrenLength = (0, _toArray["default"])(children).length;
    var returnNode = /*#__PURE__*/React.createElement(_rcMenu.Item, Object.assign({}, (0, _omit["default"])(props, ['title', 'icon', 'danger']), {
      className: (0, _classnames["default"])(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-item-danger"), danger), "".concat(prefixCls, "-item-only-child"), (icon ? childrenLength + 1 : childrenLength) === 1), className),
      title: typeof title === 'string' ? title : undefined
    }), (0, _reactNode.cloneElement)(icon, {
      className: (0, _classnames["default"])((0, _reactNode.isValidElement)(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', "".concat(prefixCls, "-item-icon"))
    }), renderItemChildren(isInlineCollapsed));
    if (!disableMenuItemTitleTooltip) {
      returnNode = /*#__PURE__*/React.createElement(_index["default"], Object.assign({}, tooltipProps, {
        placement: direction === 'rtl' ? 'left' : 'right',
        overlayClassName: "".concat(prefixCls, "-inline-collapsed-tooltip")
      }), returnNode);
    }
    return returnNode;
  };
  var _default = _exports["default"] = MenuItem;
});