define(["exports", "react", "@ant-design/icons/es/icons/CloseOutlined"], function (_exports, _react, _CloseOutlined) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function useInnerClosable(closable, closeIcon, defaultClosable) {
    if (typeof closable === 'boolean') {
      return closable;
    }
    if (closeIcon === undefined) {
      return !!defaultClosable;
    }
    return closeIcon !== false && closeIcon !== null;
  }
  function useClosable(closable, closeIcon, customCloseIconRender) {
    var defaultCloseIcon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : /*#__PURE__*/_react["default"].createElement(_CloseOutlined["default"], null);
    var defaultClosable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var mergedClosable = useInnerClosable(closable, closeIcon, defaultClosable);
    if (!mergedClosable) {
      return [false, null];
    }
    var mergedCloseIcon = typeof closeIcon === 'boolean' || closeIcon === undefined || closeIcon === null ? defaultCloseIcon : closeIcon;
    return [true, customCloseIconRender ? customCloseIconRender(mergedCloseIcon) : mergedCloseIcon];
  }
  var _default = _exports["default"] = useClosable;
});