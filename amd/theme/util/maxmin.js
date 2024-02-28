define(["exports", "@ant-design/cssinjs"], function (_exports, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = genMaxMin;
  function genMaxMin(type) {
    if (type === 'js') {
      return {
        max: Math.max,
        min: Math.min
      };
    }
    return {
      max: function max() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return "max(".concat(args.map(function (value) {
          return (0, _cssinjs.unit)(value);
        }).join(','), ")");
      },
      min: function min() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return "min(".concat(args.map(function (value) {
          return (0, _cssinjs.unit)(value);
        }).join(','), ")");
      }
    };
  }
});