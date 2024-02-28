define(["exports", "react", "antd4mx/_util/warning", "antd4mx/typography/Base"], function (_exports, React, _warning, _Base) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var Link = /*#__PURE__*/React.forwardRef(function (_a, ref) {
    var ellipsis = _a.ellipsis,
      rel = _a.rel,
      restProps = __rest(_a, ["ellipsis", "rel"]);
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Typography.Link');
      process.env.NODE_ENV !== "production" ? warning(_typeof(ellipsis) !== 'object', 'usage', '`ellipsis` only supports boolean value.') : void 0;
    }
    var mergedProps = Object.assign(Object.assign({}, restProps), {
      rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel
    });
    // @ts-expect-error: https://github.com/ant-design/ant-design/issues/26622
    delete mergedProps.navigate;
    return /*#__PURE__*/React.createElement(_Base["default"], Object.assign({}, mergedProps, {
      ref: ref,
      ellipsis: !!ellipsis,
      component: "a"
    }));
  });
  var _default = _exports["default"] = Link;
});