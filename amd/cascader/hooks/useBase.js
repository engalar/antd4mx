define(["exports", "react", "antd4mx/config-provider/index"], function (_exports, React, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useBase;
  function useBase(customizePrefixCls, direction) {
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      rootDirection = _React$useContext.direction,
      renderEmpty = _React$useContext.renderEmpty;
    var mergedDirection = direction || rootDirection;
    var prefixCls = getPrefixCls('select', customizePrefixCls);
    var cascaderPrefixCls = getPrefixCls('cascader', customizePrefixCls);
    return [prefixCls, cascaderPrefixCls, mergedDirection, renderEmpty];
  }
});