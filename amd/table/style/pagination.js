define(["exports", "@ant-design/cssinjs"], function (_exports, _cssinjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genPaginationStyle = function genPaginationStyle(token) {
    var componentCls = token.componentCls,
      antCls = token.antCls,
      margin = token.margin;
    return _defineProperty({}, "".concat(componentCls, "-wrapper"), _defineProperty(_defineProperty({}, "".concat(componentCls, "-pagination").concat(antCls, "-pagination"), {
      margin: "".concat((0, _cssinjs.unit)(margin), " 0")
    }), "".concat(componentCls, "-pagination"), {
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: token.paddingXS,
      '> *': {
        flex: 'none'
      },
      '&-left': {
        justifyContent: 'flex-start'
      },
      '&-center': {
        justifyContent: 'center'
      },
      '&-right': {
        justifyContent: 'flex-end'
      }
    }));
  };
  var _default = _exports["default"] = genPaginationStyle;
});