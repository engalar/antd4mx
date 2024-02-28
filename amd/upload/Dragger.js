define(["exports", "react", "antd4mx/upload/Upload"], function (_exports, React, _Upload) {
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
  var Dragger = /*#__PURE__*/React.forwardRef(function (_a, ref) {
    var style = _a.style,
      height = _a.height,
      _a$hasControlInside = _a.hasControlInside,
      hasControlInside = _a$hasControlInside === void 0 ? false : _a$hasControlInside,
      restProps = __rest(_a, ["style", "height", "hasControlInside"]);
    return /*#__PURE__*/React.createElement(_Upload["default"], Object.assign({
      ref: ref,
      hasControlInside: hasControlInside
    }, restProps, {
      type: "drag",
      style: Object.assign(Object.assign({}, style), {
        height: height
      })
    }));
  });
  if (process.env.NODE_ENV !== 'production') {
    Dragger.displayName = 'Dragger';
  }
  var _default = _exports["default"] = Dragger;
});