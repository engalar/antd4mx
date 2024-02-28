define(["exports", "react", "rc-util/es/Children/toArray", "antd4mx/_util/warning"], function (_exports, React, _toArray, _warning) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useLegacyItems;
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  function filter(items) {
    return items.filter(function (item) {
      return item;
    });
  }
  function useLegacyItems(items, children) {
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Tabs');
      warning.deprecated(!children, 'Tabs.TabPane', 'items');
    }
    if (items) {
      return items;
    }
    var childrenItems = (0, _toArray["default"])(children).map(function (node) {
      if ( /*#__PURE__*/React.isValidElement(node)) {
        var key = node.key,
          props = node.props;
        var _a = props || {},
          tab = _a.tab,
          restProps = __rest(_a, ["tab"]);
        var item = Object.assign(Object.assign({
          key: String(key)
        }, restProps), {
          label: tab
        });
        return item;
      }
      return null;
    });
    return filter(childrenItems);
  }
});