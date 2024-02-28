define(["exports", "react", "rc-util/es/omit", "antd4mx/_util/warning", "antd4mx/typography/Base/index"], function (_exports, React, _omit, _warning, _index) {
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
  var Text = function Text(_a, ref) {
    var ellipsis = _a.ellipsis,
      restProps = __rest(_a, ["ellipsis"]);
    var mergedEllipsis = React.useMemo(function () {
      if (ellipsis && _typeof(ellipsis) === 'object') {
        return (0, _omit["default"])(ellipsis, ['expandable', 'rows']);
      }
      return ellipsis;
    }, [ellipsis]);
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)('Typography.Text');
      process.env.NODE_ENV !== "production" ? warning(_typeof(ellipsis) !== 'object' || !ellipsis || !('expandable' in ellipsis) && !('rows' in ellipsis), 'usage', '`ellipsis` do not support `expandable` or `rows` props.') : void 0;
    }
    return /*#__PURE__*/React.createElement(_index["default"], Object.assign({
      ref: ref
    }, restProps, {
      ellipsis: mergedEllipsis,
      component: "span"
    }));
  };
  var _default = _exports["default"] = /*#__PURE__*/React.forwardRef(Text);
});