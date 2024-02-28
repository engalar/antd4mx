define(["exports", "react", "rc-util", "antd4mx/space/Compact"], function (_exports, React, _rcUtil, _Compact) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.OverrideProvider = void 0;
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var OverrideContext = /*#__PURE__*/React.createContext(null);
  /** @internal Only used for Dropdown component. Do not use this in your production. */
  var OverrideProvider = _exports.OverrideProvider = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var children = props.children,
      restProps = __rest(props, ["children"]);
    var override = React.useContext(OverrideContext);
    var context = React.useMemo(function () {
      return Object.assign(Object.assign({}, override), restProps);
    }, [override, restProps.prefixCls,
    // restProps.expandIcon, Not mark as deps since this is a ReactNode
    restProps.mode, restProps.selectable, restProps.rootClassName
    // restProps.validator, Not mark as deps since this is a function
    ]);
    var canRef = (0, _rcUtil.supportNodeRef)(children);
    var mergedRef = (0, _rcUtil.useComposeRef)(ref, canRef ? children.ref : null);
    return /*#__PURE__*/React.createElement(OverrideContext.Provider, {
      value: context
    }, /*#__PURE__*/React.createElement(_Compact.NoCompactStyle, null, canRef ? /*#__PURE__*/React.cloneElement(children, {
      ref: mergedRef
    }) : children));
  });
  /** @internal Only used for Dropdown component. Do not use this in your production. */
  var _default = _exports["default"] = OverrideContext;
});