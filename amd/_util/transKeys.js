define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.groupKeysMap = _exports.groupDisabledKeysMap = void 0;
  var groupKeysMap = _exports.groupKeysMap = function groupKeysMap(keys) {
    var map = new Map();
    keys.forEach(function (key, index) {
      map.set(key, index);
    });
    return map;
  };
  var groupDisabledKeysMap = _exports.groupDisabledKeysMap = function groupDisabledKeysMap(dataSource) {
    var map = new Map();
    dataSource.forEach(function (_ref, index) {
      var disabled = _ref.disabled,
        key = _ref.key;
      if (disabled) {
        map.set(key, index);
      }
    });
    return map;
  };
});