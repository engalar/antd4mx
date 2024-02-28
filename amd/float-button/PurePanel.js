define(["exports", "classnames", "react", "antd4mx/config-provider", "antd4mx/float-button/BackTop", "antd4mx/float-button/FloatButton", "antd4mx/float-button/FloatButtonGroup"], function (_exports, _classnames, React, _configProvider, _BackTop, _FloatButton, _FloatButtonGroup) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  /* eslint-disable react/no-array-index-key */

  var PureFloatButton = function PureFloatButton(_a) {
    var backTop = _a.backTop,
      props = __rest(_a, ["backTop"]);
    return backTop ? /*#__PURE__*/React.createElement(_BackTop["default"], Object.assign({}, props, {
      visibilityHeight: 0
    })) : /*#__PURE__*/React.createElement(_FloatButton["default"], Object.assign({}, props));
  };
  /** @private Internal Component. Do not use in your production. */
  var PurePanel = function PurePanel(_a) {
    var className = _a.className,
      items = _a.items,
      props = __rest(_a, ["className", "items"]);
    var customizePrefixCls = props.prefixCls;
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls(_FloatButton.floatButtonPrefixCls, customizePrefixCls);
    var pureCls = "".concat(prefixCls, "-pure");
    if (items) {
      return /*#__PURE__*/React.createElement(_FloatButtonGroup["default"], Object.assign({
        className: (0, _classnames["default"])(className, pureCls)
      }, props), items.map(function (item, index) {
        return /*#__PURE__*/React.createElement(PureFloatButton, Object.assign({
          key: index
        }, item));
      }));
    }
    return /*#__PURE__*/React.createElement(PureFloatButton, Object.assign({
      className: (0, _classnames["default"])(className, pureCls)
    }, props));
  };
  var _default = _exports["default"] = PurePanel;
});