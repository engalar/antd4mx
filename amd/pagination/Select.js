define(["exports", "react", "antd4mx/select/index"], function (_exports, React, _index) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.MiniSelect = _exports.MiddleSelect = void 0;
  var MiniSelect = _exports.MiniSelect = function MiniSelect(props) {
    return /*#__PURE__*/React.createElement(_index["default"], Object.assign({}, props, {
      showSearch: true,
      size: "small"
    }));
  };
  var MiddleSelect = _exports.MiddleSelect = function MiddleSelect(props) {
    return /*#__PURE__*/React.createElement(_index["default"], Object.assign({}, props, {
      showSearch: true,
      size: "middle"
    }));
  };
  MiniSelect.Option = _index["default"].Option;
  MiddleSelect.Option = _index["default"].Option;
});