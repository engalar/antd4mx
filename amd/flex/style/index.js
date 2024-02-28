define(["exports", "antd4mx/theme/internal", "antd4mx/flex/utils"], function (_exports, _internal, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.prepareComponentToken = _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var genFlexStyle = function genFlexStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, componentCls, {
      display: 'flex',
      '&-vertical': {
        flexDirection: 'column'
      },
      '&-rtl': {
        direction: 'rtl'
      },
      '&:empty': {
        display: 'none'
      }
    });
  };
  var genFlexGapStyle = function genFlexGapStyle(token) {
    var componentCls = token.componentCls;
    return _defineProperty({}, componentCls, {
      '&-gap-small': {
        gap: token.flexGapSM
      },
      '&-gap-middle': {
        gap: token.flexGap
      },
      '&-gap-large': {
        gap: token.flexGapLG
      }
    });
  };
  var genFlexWrapStyle = function genFlexWrapStyle(token) {
    var componentCls = token.componentCls;
    var wrapStyle = {};
    _utils.flexWrapValues.forEach(function (value) {
      wrapStyle["".concat(componentCls, "-wrap-").concat(value)] = {
        flexWrap: value
      };
    });
    return wrapStyle;
  };
  var genAlignItemsStyle = function genAlignItemsStyle(token) {
    var componentCls = token.componentCls;
    var alignStyle = {};
    _utils.alignItemsValues.forEach(function (value) {
      alignStyle["".concat(componentCls, "-align-").concat(value)] = {
        alignItems: value
      };
    });
    return alignStyle;
  };
  var genJustifyContentStyle = function genJustifyContentStyle(token) {
    var componentCls = token.componentCls;
    var justifyStyle = {};
    _utils.justifyContentValues.forEach(function (value) {
      justifyStyle["".concat(componentCls, "-justify-").concat(value)] = {
        justifyContent: value
      };
    });
    return justifyStyle;
  };
  var prepareComponentToken = _exports.prepareComponentToken = function prepareComponentToken() {
    return {};
  };
  var _default = _exports["default"] = (0, _internal.genStyleHooks)('Flex', function (token) {
    var paddingXS = token.paddingXS,
      padding = token.padding,
      paddingLG = token.paddingLG;
    var flexToken = (0, _internal.mergeToken)(token, {
      flexGapSM: paddingXS,
      flexGap: padding,
      flexGapLG: paddingLG
    });
    return [genFlexStyle(flexToken), genFlexGapStyle(flexToken), genFlexWrapStyle(flexToken), genAlignItemsStyle(flexToken), genJustifyContentStyle(flexToken)];
  }, prepareComponentToken, {
    // Flex component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/46403
    resetStyle: false
  });
});