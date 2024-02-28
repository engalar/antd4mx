define(["exports", "antd4mx/theme/internal", "antd4mx/space/style/compact"], function (_exports, _internal, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genSpaceStyle = function genSpaceStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, componentCls, _defineProperty({
      display: 'inline-flex',
      '&-rtl': {
        direction: 'rtl'
      },
      '&-vertical': {
        flexDirection: 'column'
      },
      '&-align': {
        flexDirection: 'column',
        '&-center': {
          alignItems: 'center'
        },
        '&-start': {
          alignItems: 'flex-start'
        },
        '&-end': {
          alignItems: 'flex-end'
        },
        '&-baseline': {
          alignItems: 'baseline'
        }
      }
    }, "".concat(componentCls, "-item:empty"), {
      display: 'none'
    }));
  };
  var genSpaceGapStyle = function genSpaceGapStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, componentCls, {
      '&-gap-row-small': {
        rowGap: token.spaceGapSmallSize
      },
      '&-gap-row-middle': {
        rowGap: token.spaceGapMiddleSize
      },
      '&-gap-row-large': {
        rowGap: token.spaceGapLargeSize
      },
      '&-gap-col-small': {
        columnGap: token.spaceGapSmallSize
      },
      '&-gap-col-middle': {
        columnGap: token.spaceGapMiddleSize
      },
      '&-gap-col-large': {
        columnGap: token.spaceGapLargeSize
      }
    });
  };
  // ============================== Export ==============================
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken() {
    return {};
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Space', function (token) {
    var spaceToken = (0, _internal.mergeToken)(token, {
      spaceGapSmallSize: token.paddingXS,
      spaceGapMiddleSize: token.padding,
      spaceGapLargeSize: token.paddingLG
    });
    return [genSpaceStyle(spaceToken), genSpaceGapStyle(spaceToken), (0, _compact["default"])(spaceToken)];
  }, function () {
    return {};
  }, {
    // Space component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/40315
    resetStyle: false
  });
});