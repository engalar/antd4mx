define(["exports", "react", "antd4mx/config-provider/index", "antd4mx/radio/context", "antd4mx/radio/radio"], function (_exports, React, _index, _context, _radio) {
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
  var RadioButton = function RadioButton(props, ref) {
    var _React$useContext = React.useContext(_index.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
      radioProps = __rest(props, ["prefixCls"]);
    var prefixCls = getPrefixCls('radio', customizePrefixCls);
    return /*#__PURE__*/React.createElement(_context.RadioOptionTypeContextProvider, {
      value: "button"
    }, /*#__PURE__*/React.createElement(_radio["default"], Object.assign({
      prefixCls: prefixCls
    }, radioProps, {
      type: "radio",
      ref: ref
    })));
  };
  var _default = _exports["default"] = /*#__PURE__*/React.forwardRef(RadioButton);
});