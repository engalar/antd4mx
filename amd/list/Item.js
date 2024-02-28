define(["exports", "classnames", "react", "antd4mx/_util/reactNode", "antd4mx/config-provider", "antd4mx/grid", "antd4mx/list/context"], function (_exports, _classnames, _react, _reactNode, _configProvider, _grid, _context) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.Meta = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var Meta = _exports.Meta = function Meta(_a) {
    var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      avatar = _a.avatar,
      title = _a.title,
      description = _a.description,
      others = __rest(_a, ["prefixCls", "className", "avatar", "title", "description"]);
    var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;
    var prefixCls = getPrefixCls('list', customizePrefixCls);
    var classString = (0, _classnames["default"])("".concat(prefixCls, "-item-meta"), className);
    var content = /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-item-meta-content")
    }, title && /*#__PURE__*/_react["default"].createElement("h4", {
      className: "".concat(prefixCls, "-item-meta-title")
    }, title), description && /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-item-meta-description")
    }, description));
    return /*#__PURE__*/_react["default"].createElement("div", Object.assign({}, others, {
      className: classString
    }), avatar && /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-item-meta-avatar")
    }, avatar), (title || description) && content);
  };
  var InternalItem = function InternalItem(_a, ref) {
    var customizePrefixCls = _a.prefixCls,
      children = _a.children,
      actions = _a.actions,
      extra = _a.extra,
      className = _a.className,
      colStyle = _a.colStyle,
      others = __rest(_a, ["prefixCls", "children", "actions", "extra", "className", "colStyle"]);
    var _useContext2 = (0, _react.useContext)(_context.ListContext),
      grid = _useContext2.grid,
      itemLayout = _useContext2.itemLayout;
    var _useContext3 = (0, _react.useContext)(_configProvider.ConfigContext),
      getPrefixCls = _useContext3.getPrefixCls;
    var isItemContainsTextNodeAndNotSingular = function isItemContainsTextNodeAndNotSingular() {
      var result;
      _react.Children.forEach(children, function (element) {
        if (typeof element === 'string') {
          result = true;
        }
      });
      return result && _react.Children.count(children) > 1;
    };
    var isFlexMode = function isFlexMode() {
      if (itemLayout === 'vertical') {
        return !!extra;
      }
      return !isItemContainsTextNodeAndNotSingular();
    };
    var prefixCls = getPrefixCls('list', customizePrefixCls);
    var actionsContent = actions && actions.length > 0 && ( /*#__PURE__*/_react["default"].createElement("ul", {
      className: "".concat(prefixCls, "-item-action"),
      key: "actions"
    }, actions.map(function (action, i) {
      return /*#__PURE__*/(
        // eslint-disable-next-line react/no-array-index-key
        _react["default"].createElement("li", {
          key: "".concat(prefixCls, "-item-action-").concat(i)
        }, action, i !== actions.length - 1 && /*#__PURE__*/_react["default"].createElement("em", {
          className: "".concat(prefixCls, "-item-action-split")
        }))
      );
    })));
    var Element = grid ? 'div' : 'li';
    var itemChildren = /*#__PURE__*/_react["default"].createElement(Element, Object.assign({}, others, !grid ? {
      ref: ref
    } : {}, {
      className: (0, _classnames["default"])("".concat(prefixCls, "-item"), _defineProperty({}, "".concat(prefixCls, "-item-no-flex"), !isFlexMode()), className)
    }), itemLayout === 'vertical' && extra ? [/*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-item-main"),
      key: "content"
    }, children, actionsContent), /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(prefixCls, "-item-extra"),
      key: "extra"
    }, extra)] : [children, actionsContent, (0, _reactNode.cloneElement)(extra, {
      key: 'extra'
    })]);
    return grid ? ( /*#__PURE__*/_react["default"].createElement(_grid.Col, {
      ref: ref,
      flex: 1,
      style: colStyle
    }, itemChildren)) : itemChildren;
  };
  var Item = /*#__PURE__*/(0, _react.forwardRef)(InternalItem);
  Item.Meta = Meta;
  var _default = _exports["default"] = Item;
});