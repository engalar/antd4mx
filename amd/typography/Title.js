define(["exports", "react", "antd4mx/_util/warning", "antd4mx/typography/Base"], function (_exports, React, _warning, _Base) {
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
  var TITLE_ELE_LIST = [1, 2, 3, 4, 5];
  var Title = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _props$level = props.level,
      level = _props$level === void 0 ? 1 : _props$level,
      restProps = __rest(props, ["level"]);
    var component;
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Typography.Title');
      process.env.NODE_ENV !== "production" ? warning(TITLE_ELE_LIST.includes(level), 'usage', 'Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.') : void 0;
    }
    if (TITLE_ELE_LIST.includes(level)) {
      component = "h".concat(level);
    } else {
      component = 'h1';
    }
    return /*#__PURE__*/React.createElement(_Base["default"], Object.assign({
      ref: ref
    }, restProps, {
      component: component
    }));
  });
  var _default = _exports["default"] = Title;
});