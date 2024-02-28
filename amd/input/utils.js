define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hasPrefixSuffix = hasPrefixSuffix;
  // eslint-disable-next-line import/prefer-default-export
  function hasPrefixSuffix(props) {
    return !!(props.prefix || props.suffix || props.allowClear || props.showCount);
  }
});