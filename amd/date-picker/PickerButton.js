define(["exports", "react", "antd4mx/button"], function (_exports, React, _button) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = PickerButton;
  function PickerButton(props) {
    return /*#__PURE__*/React.createElement(_button["default"], Object.assign({
      size: "small",
      type: "primary"
    }, props));
  }
});