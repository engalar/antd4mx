define(["exports", "react", "antd4mx/_util/warning"], function (_exports, _react, _warning) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useFormWarning;
  var names = {};
  function useFormWarning(_ref) {
    var name = _ref.name;
    var warning = (0, _warning.devUseWarning)('Form');
    (0, _react.useEffect)(function () {
      if (name) {
        names[name] = (names[name] || 0) + 1;
        process.env.NODE_ENV !== "production" ? warning(names[name] <= 1, 'usage', 'There exist multiple Form with same `name`.') : void 0;
        return function () {
          names[name] -= 1;
        };
      }
    }, [name]);
  }
});