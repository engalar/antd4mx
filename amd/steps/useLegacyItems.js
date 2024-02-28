define(["exports", "react", "rc-util/es/Children/toArray", "antd4mx/_util/warning"], function (_exports, React, _toArray, _warning) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useLegacyItems;
  function filter(items) {
    return items.filter(function (item) {
      return item;
    });
  }
  function useLegacyItems(items, children) {
    if (process.env.NODE_ENV === 'test') {
      var warning = (0, _warning.devUseWarning)('Menu');
      warning.deprecated(!children, 'Step', 'items');
    }
    if (items) {
      return items;
    }
    var childrenItems = (0, _toArray["default"])(children).map(function (node) {
      if ( /*#__PURE__*/React.isValidElement(node)) {
        var props = node.props;
        var item = Object.assign({}, props);
        return item;
      }
      return null;
    });
    return filter(childrenItems);
  }
});