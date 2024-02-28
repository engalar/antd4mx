define(["exports", "react"], function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useItems;
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  function route2item(route) {
    var breadcrumbName = route.breadcrumbName,
      children = route.children,
      rest = __rest(route, ["breadcrumbName", "children"]);
    var clone = Object.assign({
      title: breadcrumbName
    }, rest);
    if (children) {
      clone.menu = {
        items: children.map(function (_a) {
          var itemBreadcrumbName = _a.breadcrumbName,
            itemProps = __rest(_a, ["breadcrumbName"]);
          return Object.assign(Object.assign({}, itemProps), {
            title: itemBreadcrumbName
          });
        })
      };
    }
    return clone;
  }
  function useItems(items, routes) {
    return (0, _react.useMemo)(function () {
      if (items) {
        return items;
      }
      if (routes) {
        return routes.map(route2item);
      }
      return null;
    }, [items, routes]);
  }
});