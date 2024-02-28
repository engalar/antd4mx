define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var extendsObject = function extendsObject() {
    var _arguments = arguments;
    var result = Object.assign({}, arguments.length <= 0 ? undefined : arguments[0]);
    var _loop = function _loop() {
      var obj = i < 0 || _arguments.length <= i ? undefined : _arguments[i];
      if (obj) {
        Object.keys(obj).forEach(function (key) {
          var val = obj[key];
          if (val !== undefined) {
            result[key] = val;
          }
        });
      }
    };
    for (var i = 1; i < arguments.length; i++) {
      _loop();
    }
    return result;
  };
  var _default = _exports["default"] = extendsObject;
});