define(["exports", "classnames", "rc-util/es/pickAttrs", "react"], function (_exports, _classnames, _pickAttrs, React) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useItemRender;
  _exports.renderItem = renderItem;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  function getBreadcrumbName(route, params) {
    if (route.title === undefined || route.title === null) {
      return null;
    }
    var paramsKeys = Object.keys(params).join('|');
    return _typeof(route.title) === 'object' ? route.title : String(route.title).replace(new RegExp(":(".concat(paramsKeys, ")"), 'g'), function (replacement, key) {
      return params[key] || replacement;
    });
  }
  function renderItem(prefixCls, item, children, href) {
    if (children === null || children === undefined) {
      return null;
    }
    var className = item.className,
      onClick = item.onClick,
      restItem = __rest(item, ["className", "onClick"]);
    var passedProps = Object.assign(Object.assign({}, (0, _pickAttrs["default"])(restItem, {
      data: true,
      aria: true
    })), {
      onClick: onClick
    });
    if (href !== undefined) {
      return /*#__PURE__*/React.createElement("a", Object.assign({}, passedProps, {
        className: (0, _classnames["default"])("".concat(prefixCls, "-link"), className),
        href: href
      }), children);
    }
    return /*#__PURE__*/React.createElement("span", Object.assign({}, passedProps, {
      className: (0, _classnames["default"])("".concat(prefixCls, "-link"), className)
    }), children);
  }
  function useItemRender(prefixCls, itemRender) {
    var mergedItemRender = function mergedItemRender(item, params, routes, path, href) {
      if (itemRender) {
        return itemRender(item, params, routes, path);
      }
      var name = getBreadcrumbName(item, params);
      return renderItem(prefixCls, item, name, href);
    };
    return mergedItemRender;
  }
});