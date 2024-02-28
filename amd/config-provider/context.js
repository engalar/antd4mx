define(["exports", "react"], function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.defaultIconPrefixCls = _exports.ConfigContext = _exports.ConfigConsumer = void 0;
  var defaultIconPrefixCls = _exports.defaultIconPrefixCls = 'anticon';
  var defaultGetPrefixCls = function defaultGetPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return suffixCls ? "ant-".concat(suffixCls) : 'ant';
  };
  // zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will cause circular dependency.
  var ConfigContext = _exports.ConfigContext = /*#__PURE__*/React.createContext({
    // We provide a default function for Context without provider
    getPrefixCls: defaultGetPrefixCls,
    iconPrefixCls: defaultIconPrefixCls
  });
  var ConfigConsumer = _exports.ConfigConsumer = ConfigContext.Consumer;
});