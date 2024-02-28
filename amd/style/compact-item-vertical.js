define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.genCompactItemVerticalStyle = genCompactItemVerticalStyle;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function compactItemVerticalBorder(token, parentCls) {
    return _defineProperty(_defineProperty({}, "&-item:not(".concat(parentCls, "-last-item)"), {
      marginBottom: token.calc(token.lineWidth).mul(-1).equal()
    }), '&-item', {
      '&:hover,&:focus,&:active': {
        zIndex: 2
      },
      '&[disabled]': {
        zIndex: 0
      }
    });
  }
  function compactItemBorderVerticalRadius(prefixCls, parentCls) {
    return _defineProperty(_defineProperty(_defineProperty({}, "&-item:not(".concat(parentCls, "-first-item):not(").concat(parentCls, "-last-item)"), {
      borderRadius: 0
    }), "&-item".concat(parentCls, "-first-item:not(").concat(parentCls, "-last-item)"), _defineProperty({}, "&, &".concat(prefixCls, "-sm, &").concat(prefixCls, "-lg"), {
      borderEndEndRadius: 0,
      borderEndStartRadius: 0
    })), "&-item".concat(parentCls, "-last-item:not(").concat(parentCls, "-first-item)"), _defineProperty({}, "&, &".concat(prefixCls, "-sm, &").concat(prefixCls, "-lg"), {
      borderStartStartRadius: 0,
      borderStartEndRadius: 0
    }));
  }
  function genCompactItemVerticalStyle(token) {
    var compactCls = "".concat(token.componentCls, "-compact-vertical");
    return _defineProperty({}, compactCls, Object.assign(Object.assign({}, compactItemVerticalBorder(token, compactCls)), compactItemBorderVerticalRadius(token.componentCls, compactCls)));
  }
});