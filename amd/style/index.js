define(["exports", "@ant-design/cssinjs", "./operationUnit"], function (_exports, _cssinjs, _operationUnit) {
  "use strict";
  "use client";

  /* eslint-disable import/prefer-default-export */
  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.genLinkStyle = _exports.genFocusStyle = _exports.genFocusOutline = _exports.genCommonStyle = _exports.clearFix = void 0;
  Object.defineProperty(_exports, "operationUnit", {
    enumerable: true,
    get: function get() {
      return _operationUnit.operationUnit;
    }
  });
  _exports.textEllipsis = _exports.resetIcon = _exports.resetComponent = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var textEllipsis = _exports.textEllipsis = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  };
  var resetComponent = _exports.resetComponent = function resetComponent(token) {
    var needInheritFontFamily = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: token.colorText,
      fontSize: token.fontSize,
      // font-variant: @font-variant-base;
      lineHeight: token.lineHeight,
      listStyle: 'none',
      // font-feature-settings: @font-feature-settings-base;
      fontFamily: needInheritFontFamily ? 'inherit' : token.fontFamily
    };
  };
  var resetIcon = _exports.resetIcon = function resetIcon() {
    return {
      display: 'inline-flex',
      alignItems: 'center',
      color: 'inherit',
      fontStyle: 'normal',
      lineHeight: 0,
      textAlign: 'center',
      textTransform: 'none',
      // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
      verticalAlign: '-0.125em',
      textRendering: 'optimizeLegibility',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      '> *': {
        lineHeight: 1
      },
      svg: {
        display: 'inline-block'
      }
    };
  };
  var clearFix = _exports.clearFix = function clearFix() {
    return {
      // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
      '&::before': {
        display: 'table',
        content: '""'
      },
      '&::after': {
        // https://github.com/ant-design/ant-design/issues/21864
        display: 'table',
        clear: 'both',
        content: '""'
      }
    };
  };
  var genLinkStyle = _exports.genLinkStyle = function genLinkStyle(token) {
    return {
      a: _defineProperty(_defineProperty(_defineProperty({
        color: token.colorLink,
        textDecoration: token.linkDecoration,
        backgroundColor: 'transparent',
        // remove the gray background on active links in IE 10.
        outline: 'none',
        cursor: 'pointer',
        transition: "color ".concat(token.motionDurationSlow),
        '-webkit-text-decoration-skip': 'objects',
        // remove gaps in links underline in iOS 8+ and Safari 8+.
        '&:hover': {
          color: token.colorLinkHover
        },
        '&:active': {
          color: token.colorLinkActive
        }
      }, "&:active,\n  &:hover", {
        textDecoration: token.linkHoverDecoration,
        outline: 0
      }), '&:focus', {
        textDecoration: token.linkFocusDecoration,
        outline: 0
      }), '&[disabled]', {
        color: token.colorTextDisabled,
        cursor: 'not-allowed'
      })
    };
  };
  var genCommonStyle = _exports.genCommonStyle = function genCommonStyle(token, componentPrefixCls, rootCls) {
    var fontFamily = token.fontFamily,
      fontSize = token.fontSize;
    var prefixSelector = "[class^=\"".concat(componentPrefixCls, "\"], [class*=\" ").concat(componentPrefixCls, "\"]");
    var rootPrefixSelector = rootCls ? ".".concat(rootCls) : prefixSelector;
    return _defineProperty({}, rootPrefixSelector, _defineProperty({
      fontFamily: fontFamily,
      fontSize: fontSize,
      boxSizing: 'border-box',
      '&::before, &::after': {
        boxSizing: 'border-box'
      }
    }, prefixSelector, {
      boxSizing: 'border-box',
      '&::before, &::after': {
        boxSizing: 'border-box'
      }
    }));
  };
  var genFocusOutline = _exports.genFocusOutline = function genFocusOutline(token) {
    return {
      outline: "".concat((0, _cssinjs.unit)(token.lineWidthFocus), " solid ").concat(token.colorPrimaryBorder),
      outlineOffset: 1,
      transition: 'outline-offset 0s, outline 0s'
    };
  };
  var genFocusStyle = _exports.genFocusStyle = function genFocusStyle(token) {
    return {
      '&:focus-visible': Object.assign({}, genFocusOutline(token))
    };
  };
});