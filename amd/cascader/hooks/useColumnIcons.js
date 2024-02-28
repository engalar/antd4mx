define(["exports", "react", "@ant-design/icons/es/icons/LeftOutlined", "@ant-design/icons/es/icons/LoadingOutlined", "@ant-design/icons/es/icons/RightOutlined"], function (_exports, React, _LeftOutlined, _LoadingOutlined, _RightOutlined) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useColumnIcons;
  function useColumnIcons(prefixCls, rtl, expandIcon) {
    var mergedExpandIcon = expandIcon;
    if (!expandIcon) {
      mergedExpandIcon = rtl ? /*#__PURE__*/React.createElement(_LeftOutlined["default"], null) : /*#__PURE__*/React.createElement(_RightOutlined["default"], null);
    }
    var loadingIcon = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-menu-item-loading-icon")
    }, /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
      spin: true
    }));
    return [mergedExpandIcon, loadingIcon];
  }
});