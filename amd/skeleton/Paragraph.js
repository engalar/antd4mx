define(["exports", "@babel/runtime/helpers/esm/toConsumableArray", "classnames", "react"], function (_exports, _toConsumableArray2, _classnames, React) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var Paragraph = function Paragraph(props) {
    var getWidth = function getWidth(index) {
      var width = props.width,
        _props$rows = props.rows,
        rows = _props$rows === void 0 ? 2 : _props$rows;
      if (Array.isArray(width)) {
        return width[index];
      }
      // last paragraph
      if (rows - 1 === index) {
        return width;
      }
      return undefined;
    };
    var prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      rows = props.rows;
    var rowList = (0, _toConsumableArray2["default"])(Array(rows)).map(function (_, index) {
      return /*#__PURE__*/(
        // eslint-disable-next-line react/no-array-index-key
        React.createElement("li", {
          key: index,
          style: {
            width: getWidth(index)
          }
        })
      );
    });
    return /*#__PURE__*/React.createElement("ul", {
      className: (0, _classnames["default"])(prefixCls, className),
      style: style
    }, rowList);
  };
  var _default = _exports["default"] = Paragraph;
});