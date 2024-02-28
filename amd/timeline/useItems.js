define(["exports", "rc-util/es/Children/toArray"], function (_exports, _toArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function useItems(items, children) {
    if (items && Array.isArray(items)) {
      return items;
    }
    return (0, _toArray["default"])(children).map(function (ele) {
      var _a, _b;
      return Object.assign({
        children: (_b = (_a = ele === null || ele === void 0 ? void 0 : ele.props) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : ''
      }, ele.props);
    });
  }
  var _default = _exports["default"] = useItems;
});