define(["exports", "rc-menu", "react", "antd4mx/menu/MenuDivider", "antd4mx/menu/MenuItem", "antd4mx/menu/SubMenu"], function (_exports, _rcMenu, React, _MenuDivider, _MenuItem, _SubMenu) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useItems;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  function convertItemsToNodes(list) {
    return (list || []).map(function (opt, index) {
      if (opt && _typeof(opt) === 'object') {
        var _a = opt,
          label = _a.label,
          children = _a.children,
          key = _a.key,
          type = _a.type,
          restProps = __rest(_a, ["label", "children", "key", "type"]);
        var mergedKey = key !== null && key !== void 0 ? key : "tmp-".concat(index);
        // MenuItemGroup & SubMenuItem
        if (children || type === 'group') {
          if (type === 'group') {
            // Group
            return /*#__PURE__*/React.createElement(_rcMenu.ItemGroup, Object.assign({
              key: mergedKey
            }, restProps, {
              title: label
            }), convertItemsToNodes(children));
          }
          // Sub Menu
          return /*#__PURE__*/React.createElement(_SubMenu["default"], Object.assign({
            key: mergedKey
          }, restProps, {
            title: label
          }), convertItemsToNodes(children));
        }
        // MenuItem & Divider
        if (type === 'divider') {
          return /*#__PURE__*/React.createElement(_MenuDivider["default"], Object.assign({
            key: mergedKey
          }, restProps));
        }
        return /*#__PURE__*/React.createElement(_MenuItem["default"], Object.assign({
          key: mergedKey
        }, restProps), label);
      }
      return null;
    }).filter(function (opt) {
      return opt;
    });
  }
  // FIXME: Move logic here in v5
  /**
   * We simply convert `items` to ReactNode for reuse origin component logic. But we need move all the
   * logic from component into this hooks when in v5
   */
  function useItems(items) {
    return React.useMemo(function () {
      if (!items) {
        return items;
      }
      return convertItemsToNodes(items);
    }, [items]);
  }
});