define(["exports", "@ant-design/colors", "@ant-design/cssinjs", "antd4mx/style"], function (_exports, _colors, _cssinjs, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getTitleStyles = _exports.getResetStyles = _exports.getLinkStyles = _exports.getEllipsisStyles = _exports.getEditableStyles = _exports.getCopyableStyles = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*
.typography-title(@fontSize; @fontWeight; @lineHeight; @headingColor; @headingMarginBottom;) {
  margin-bottom: @headingMarginBottom;
  color: @headingColor;
  font-weight: @fontWeight;
  fontSize: @fontSize;
  line-height: @lineHeight;
}
*/
  // eslint-disable-next-line import/prefer-default-export
  var getTitleStyle = function getTitleStyle(fontSize, lineHeight, color, token) {
    var titleMarginBottom = token.titleMarginBottom,
      fontWeightStrong = token.fontWeightStrong;
    return {
      marginBottom: titleMarginBottom,
      color: color,
      fontWeight: fontWeightStrong,
      fontSize: fontSize,
      lineHeight: lineHeight
    };
  };
  // eslint-disable-next-line import/prefer-default-export
  var getTitleStyles = _exports.getTitleStyles = function getTitleStyles(token) {
    var headings = [1, 2, 3, 4, 5];
    var styles = {};
    headings.forEach(function (headingLevel) {
      styles["\n      h".concat(headingLevel, "&,\n      div&-h").concat(headingLevel, ",\n      div&-h").concat(headingLevel, " > textarea,\n      h").concat(headingLevel, "\n    ")] = getTitleStyle(token["fontSizeHeading".concat(headingLevel)], token["lineHeightHeading".concat(headingLevel)], token.colorTextHeading, token);
    });
    return styles;
  };
  var getLinkStyles = _exports.getLinkStyles = function getLinkStyles(token) {
    var componentCls = token.componentCls;
    return {
      'a&, a': Object.assign(Object.assign({}, (0, _style.operationUnit)(token)), _defineProperty({
        textDecoration: token.linkDecoration,
        '&:active, &:hover': {
          textDecoration: token.linkHoverDecoration
        }
      }, "&[disabled], &".concat(componentCls, "-disabled"), {
        color: token.colorTextDisabled,
        cursor: 'not-allowed',
        '&:active, &:hover': {
          color: token.colorTextDisabled
        },
        '&:active': {
          pointerEvents: 'none'
        }
      }))
    };
  };
  var getResetStyles = _exports.getResetStyles = function getResetStyles(token) {
    return {
      code: {
        margin: '0 0.2em',
        paddingInline: '0.4em',
        paddingBlock: '0.2em 0.1em',
        fontSize: '85%',
        fontFamily: token.fontFamilyCode,
        background: 'rgba(150, 150, 150, 0.1)',
        border: '1px solid rgba(100, 100, 100, 0.2)',
        borderRadius: 3
      },
      kbd: {
        margin: '0 0.2em',
        paddingInline: '0.4em',
        paddingBlock: '0.15em 0.1em',
        fontSize: '90%',
        fontFamily: token.fontFamilyCode,
        background: 'rgba(150, 150, 150, 0.06)',
        border: '1px solid rgba(100, 100, 100, 0.2)',
        borderBottomWidth: 2,
        borderRadius: 3
      },
      mark: {
        padding: 0,
        // FIXME hardcode in v4
        backgroundColor: _colors.gold[2]
      },
      'u, ins': {
        textDecoration: 'underline',
        textDecorationSkipInk: 'auto'
      },
      's, del': {
        textDecoration: 'line-through'
      },
      strong: {
        fontWeight: 600
      },
      // list
      'ul, ol': {
        marginInline: 0,
        marginBlock: '0 1em',
        padding: 0,
        li: {
          marginInline: '20px 0',
          marginBlock: 0,
          paddingInline: '4px 0',
          paddingBlock: 0
        }
      },
      ul: {
        listStyleType: 'circle',
        ul: {
          listStyleType: 'disc'
        }
      },
      ol: {
        listStyleType: 'decimal'
      },
      // pre & block
      'pre, blockquote': {
        margin: '1em 0'
      },
      pre: {
        padding: '0.4em 0.6em',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        background: 'rgba(150, 150, 150, 0.1)',
        border: '1px solid rgba(100, 100, 100, 0.2)',
        borderRadius: 3,
        fontFamily: token.fontFamilyCode,
        // Compatible for marked
        code: {
          display: 'inline',
          margin: 0,
          padding: 0,
          fontSize: 'inherit',
          fontFamily: 'inherit',
          background: 'transparent',
          border: 0
        }
      },
      blockquote: {
        paddingInline: '0.6em 0',
        paddingBlock: 0,
        borderInlineStart: '4px solid rgba(100, 100, 100, 0.2)',
        opacity: 0.85
      }
    };
  };
  var getEditableStyles = _exports.getEditableStyles = function getEditableStyles(token) {
    var componentCls = token.componentCls,
      paddingSM = token.paddingSM;
    var inputShift = paddingSM;
    return {
      '&-edit-content': _defineProperty(_defineProperty({
        position: 'relative',
        'div&': {
          insetInlineStart: token.calc(token.paddingSM).mul(-1).equal(),
          marginTop: token.calc(inputShift).mul(-1).equal(),
          marginBottom: "calc(1em - ".concat((0, _cssinjs.unit)(inputShift), ")")
        }
      }, "".concat(componentCls, "-edit-content-confirm"), {
        position: 'absolute',
        insetInlineEnd: token.calc(token.marginXS).add(2).equal(),
        insetBlockEnd: token.marginXS,
        color: token.colorTextDescription,
        // default style
        fontWeight: 'normal',
        fontSize: token.fontSize,
        fontStyle: 'normal',
        pointerEvents: 'none'
      }), "textarea", {
        margin: '0!important',
        // Fix Editable Textarea flash in Firefox
        MozTransition: 'none',
        height: '1em'
      })
    };
  };
  var getCopyableStyles = _exports.getCopyableStyles = function getCopyableStyles(token) {
    return _defineProperty(_defineProperty({}, "".concat(token.componentCls, "-copy-success"), _defineProperty({}, "\n    &,\n    &:hover,\n    &:focus", {
      color: token.colorSuccess
    })), "".concat(token.componentCls, "-copy-icon-only"), {
      marginInlineStart: 0
    });
  };
  var getEllipsisStyles = _exports.getEllipsisStyles = function getEllipsisStyles() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "\n  a&-ellipsis,\n  span&-ellipsis\n  ", {
      display: 'inline-block',
      maxWidth: '100%'
    }), '&-single-line', {
      whiteSpace: 'nowrap'
    }), '&-ellipsis-single-line', {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      // https://blog.csdn.net/iefreer/article/details/50421025
      'a&, span&': {
        verticalAlign: 'bottom'
      },
      '> code': {
        paddingBlock: 0,
        maxWidth: 'calc(100% - 1.2em)',
        display: 'inline-block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        verticalAlign: 'bottom',
        // https://github.com/ant-design/ant-design/issues/45953
        boxSizing: 'content-box'
      }
    }), '&-ellipsis-multiple-line', {
      display: '-webkit-box',
      overflow: 'hidden',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical'
    });
  };
});