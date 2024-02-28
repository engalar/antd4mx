define(["exports", "react", "antd4mx/descriptions/Cell", "antd4mx/descriptions/DescriptionsContext"], function (_exports, React, _Cell, _DescriptionsContext) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function renderCells(items, _ref, _ref2) {
    var colon = _ref.colon,
      prefixCls = _ref.prefixCls,
      bordered = _ref.bordered;
    var component = _ref2.component,
      type = _ref2.type,
      showLabel = _ref2.showLabel,
      showContent = _ref2.showContent,
      rootLabelStyle = _ref2.labelStyle,
      rootContentStyle = _ref2.contentStyle;
    return items.map(function (_ref3, index) {
      var label = _ref3.label,
        children = _ref3.children,
        _ref3$prefixCls = _ref3.prefixCls,
        itemPrefixCls = _ref3$prefixCls === void 0 ? prefixCls : _ref3$prefixCls,
        className = _ref3.className,
        style = _ref3.style,
        labelStyle = _ref3.labelStyle,
        contentStyle = _ref3.contentStyle,
        _ref3$span = _ref3.span,
        span = _ref3$span === void 0 ? 1 : _ref3$span,
        key = _ref3.key;
      if (typeof component === 'string') {
        return /*#__PURE__*/React.createElement(_Cell["default"], {
          key: "".concat(type, "-").concat(key || index),
          className: className,
          style: style,
          labelStyle: Object.assign(Object.assign({}, rootLabelStyle), labelStyle),
          contentStyle: Object.assign(Object.assign({}, rootContentStyle), contentStyle),
          span: span,
          colon: colon,
          component: component,
          itemPrefixCls: itemPrefixCls,
          bordered: bordered,
          label: showLabel ? label : null,
          content: showContent ? children : null,
          type: type
        });
      }
      return [/*#__PURE__*/React.createElement(_Cell["default"], {
        key: "label-".concat(key || index),
        className: className,
        style: Object.assign(Object.assign(Object.assign({}, rootLabelStyle), style), labelStyle),
        span: 1,
        colon: colon,
        component: component[0],
        itemPrefixCls: itemPrefixCls,
        bordered: bordered,
        label: label,
        type: "label"
      }), /*#__PURE__*/React.createElement(_Cell["default"], {
        key: "content-".concat(key || index),
        className: className,
        style: Object.assign(Object.assign(Object.assign({}, rootContentStyle), style), contentStyle),
        span: span * 2 - 1,
        component: component[1],
        itemPrefixCls: itemPrefixCls,
        bordered: bordered,
        content: children,
        type: "content"
      })];
    });
  }
  var Row = function Row(props) {
    var descContext = React.useContext(_DescriptionsContext["default"]);
    var prefixCls = props.prefixCls,
      vertical = props.vertical,
      row = props.row,
      index = props.index,
      bordered = props.bordered;
    if (vertical) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", {
        key: "label-".concat(index),
        className: "".concat(prefixCls, "-row")
      }, renderCells(row, props, Object.assign({
        component: 'th',
        type: 'label',
        showLabel: true
      }, descContext))), /*#__PURE__*/React.createElement("tr", {
        key: "content-".concat(index),
        className: "".concat(prefixCls, "-row")
      }, renderCells(row, props, Object.assign({
        component: 'td',
        type: 'content',
        showContent: true
      }, descContext))));
    }
    return /*#__PURE__*/React.createElement("tr", {
      key: index,
      className: "".concat(prefixCls, "-row")
    }, renderCells(row, props, Object.assign({
      component: bordered ? ['th', 'td'] : 'td',
      type: 'item',
      showLabel: true,
      showContent: true
    }, descContext)));
  };
  var _default = _exports["default"] = Row;
});