define(["exports", "@ant-design/icons/es/icons/LeftOutlined", "@ant-design/icons/es/icons/RightOutlined", "react", "antd4mx/button/index"], function (_exports, _LeftOutlined, _RightOutlined, React, _index) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var Operation = function Operation(props) {
    var disabled = props.disabled,
      moveToLeft = props.moveToLeft,
      moveToRight = props.moveToRight,
      _props$leftArrowText = props.leftArrowText,
      leftArrowText = _props$leftArrowText === void 0 ? '' : _props$leftArrowText,
      _props$rightArrowText = props.rightArrowText,
      rightArrowText = _props$rightArrowText === void 0 ? '' : _props$rightArrowText,
      leftActive = props.leftActive,
      rightActive = props.rightActive,
      className = props.className,
      style = props.style,
      direction = props.direction,
      oneWay = props.oneWay;
    return /*#__PURE__*/React.createElement("div", {
      className: className,
      style: style
    }, /*#__PURE__*/React.createElement(_index["default"], {
      type: "primary",
      size: "small",
      disabled: disabled || !rightActive,
      onClick: moveToRight,
      icon: direction !== 'rtl' ? /*#__PURE__*/React.createElement(_RightOutlined["default"], null) : /*#__PURE__*/React.createElement(_LeftOutlined["default"], null)
    }, rightArrowText), !oneWay && ( /*#__PURE__*/React.createElement(_index["default"], {
      type: "primary",
      size: "small",
      disabled: disabled || !leftActive,
      onClick: moveToLeft,
      icon: direction !== 'rtl' ? /*#__PURE__*/React.createElement(_LeftOutlined["default"], null) : /*#__PURE__*/React.createElement(_RightOutlined["default"], null)
    }, leftArrowText)));
  };
  if (process.env.NODE_ENV !== 'production') {
    Operation.displayName = 'Operation';
  }
  var _default = _exports["default"] = Operation;
});