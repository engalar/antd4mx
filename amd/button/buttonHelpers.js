define(["exports", "react", "antd4mx/_util/reactNode"], function (_exports, _react, _reactNode) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.convertLegacyProps = convertLegacyProps;
  _exports.isString = isString;
  _exports.isTwoCNChar = void 0;
  _exports.isUnBorderedButtonType = isUnBorderedButtonType;
  _exports.spaceChildren = spaceChildren;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
  var isTwoCNChar = _exports.isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
  function convertLegacyProps(type) {
    if (type === 'danger') {
      return {
        danger: true
      };
    }
    return {
      type: type
    };
  }
  function isString(str) {
    return typeof str === 'string';
  }
  function isUnBorderedButtonType(type) {
    return type === 'text' || type === 'link';
  }
  function splitCNCharsBySpace(child, needInserted) {
    if (child === null || child === undefined) {
      return;
    }
    var SPACE = needInserted ? ' ' : '';
    if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
      return (0, _reactNode.cloneElement)(child, {
        children: child.props.children.split('').join(SPACE)
      });
    }
    if (isString(child)) {
      return isTwoCNChar(child) ? /*#__PURE__*/_react["default"].createElement("span", null, child.split('').join(SPACE)) : /*#__PURE__*/_react["default"].createElement("span", null, child);
    }
    if ((0, _reactNode.isFragment)(child)) {
      return /*#__PURE__*/_react["default"].createElement("span", null, child);
    }
    return child;
  }
  function spaceChildren(children, needInserted) {
    var isPrevChildPure = false;
    var childList = [];
    _react["default"].Children.forEach(children, function (child) {
      var type = _typeof(child);
      var isCurrentChildPure = type === 'string' || type === 'number';
      if (isPrevChildPure && isCurrentChildPure) {
        var lastIndex = childList.length - 1;
        var lastChild = childList[lastIndex];
        childList[lastIndex] = "".concat(lastChild).concat(child);
      } else {
        childList.push(child);
      }
      isPrevChildPure = isCurrentChildPure;
    });
    return _react["default"].Children.map(childList, function (child) {
      return splitCNCharsBySpace(child, needInserted);
    });
  }
  var ButtonTypes = ['default', 'primary', 'dashed', 'link', 'text'];
  var ButtonShapes = ['default', 'circle', 'round'];
  var ButtonHTMLTypes = ['submit', 'button', 'reset'];
});