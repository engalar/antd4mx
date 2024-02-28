define(["exports", "react", "classnames", "rc-menu", "rc-util/es/omit", "antd4mx/_util/hooks/useZIndex", "antd4mx/_util/reactNode", "antd4mx/menu/MenuContext"], function (_exports, React, _classnames, _rcMenu, _omit, _useZIndex3, _reactNode, _MenuContext) {
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
  var SubMenu = function SubMenu(props) {
    var _a;
    var popupClassName = props.popupClassName,
      icon = props.icon,
      title = props.title,
      customTheme = props.theme;
    var context = React.useContext(_MenuContext["default"]);
    var prefixCls = context.prefixCls,
      inlineCollapsed = context.inlineCollapsed,
      contextTheme = context.theme;
    var parentPath = (0, _rcMenu.useFullPath)();
    var titleNode;
    if (!icon) {
      titleNode = inlineCollapsed && !parentPath.length && title && typeof title === 'string' ? ( /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-inline-collapsed-noicon")
      }, title.charAt(0))) : ( /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-title-content")
      }, title));
    } else {
      // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
      // ref: https://github.com/ant-design/ant-design/pull/23456
      var titleIsSpan = (0, _reactNode.isValidElement)(title) && title.type === 'span';
      titleNode = /*#__PURE__*/React.createElement(React.Fragment, null, (0, _reactNode.cloneElement)(icon, {
        className: (0, _classnames["default"])((0, _reactNode.isValidElement)(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', "".concat(prefixCls, "-item-icon"))
      }), titleIsSpan ? title : /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-title-content")
      }, title));
    }
    var contextValue = React.useMemo(function () {
      return Object.assign(Object.assign({}, context), {
        firstLevel: false
      });
    }, [context]);
    // ============================ zIndex ============================
    var _useZIndex = (0, _useZIndex3.useZIndex)('Menu'),
      _useZIndex2 = _slicedToArray(_useZIndex, 1),
      zIndex = _useZIndex2[0];
    return /*#__PURE__*/React.createElement(_MenuContext["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/React.createElement(_rcMenu.SubMenu, Object.assign({}, (0, _omit["default"])(props, ['icon']), {
      title: titleNode,
      popupClassName: (0, _classnames["default"])(prefixCls, popupClassName, "".concat(prefixCls, "-").concat(customTheme || contextTheme)),
      popupStyle: {
        zIndex: zIndex
      }
    })));
  };
  var _default = _exports["default"] = SubMenu;
});