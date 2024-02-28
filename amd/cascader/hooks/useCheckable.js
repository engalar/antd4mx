define(["exports", "react"], function (_exports, React) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useCheckable;
  function useCheckable(cascaderPrefixCls, multiple) {
    return React.useMemo(function () {
      return multiple ? /*#__PURE__*/React.createElement("span", {
        className: "".concat(cascaderPrefixCls, "-checkbox-inner")
      }) : false;
    }, [multiple]);
  }
});