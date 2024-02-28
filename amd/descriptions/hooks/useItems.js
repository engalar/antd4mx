define(["exports", "react", "rc-util/es/Children/toArray", "antd4mx/_util/responsiveObserver"], function (_exports, React, _toArray, _responsiveObserver) {
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
  // Convert children into items
  var transChildren2Items = function transChildren2Items(childNodes) {
    return (0, _toArray["default"])(childNodes).map(function (node) {
      return Object.assign(Object.assign({}, node === null || node === void 0 ? void 0 : node.props), {
        key: node.key
      });
    });
  };
  function useItems(screens, items, children) {
    var mergedItems = React.useMemo(function () {
      return (
        // Take `items` first or convert `children` into items
        items || transChildren2Items(children)
      );
    }, [items, children]);
    var responsiveItems = React.useMemo(function () {
      return mergedItems.map(function (_a) {
        var span = _a.span,
          restItem = __rest(_a, ["span"]);
        return Object.assign(Object.assign({}, restItem), {
          span: typeof span === 'number' ? span : (0, _responsiveObserver.matchScreen)(screens, span)
        });
      });
    }, [mergedItems, screens]);
    return responsiveItems;
  }
});