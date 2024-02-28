define(["exports", "classnames", "react", "antd4mx/_util/reactNode", "antd4mx/config-provider", "antd4mx/badge/SingleNumber"], function (_exports, _classnames, React, _reactNode, _configProvider, _SingleNumber) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };
  var ScrollNumber = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var customizePrefixCls = props.prefixCls,
      count = props.count,
      className = props.className,
      motionClassName = props.motionClassName,
      style = props.style,
      title = props.title,
      show = props.show,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'sup' : _props$component,
      children = props.children,
      restProps = __rest(props, ["prefixCls", "count", "className", "motionClassName", "style", "title", "show", "component", "children"]);
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('scroll-number', customizePrefixCls);
    // ============================ Render ============================
    var newProps = Object.assign(Object.assign({}, restProps), {
      'data-show': show,
      style: style,
      className: (0, _classnames["default"])(prefixCls, className, motionClassName),
      title: title
    });
    // Only integer need motion
    var numberNodes = count;
    if (count && Number(count) % 1 === 0) {
      var numberList = String(count).split('');
      numberNodes = /*#__PURE__*/React.createElement("bdi", null, numberList.map(function (num, i) {
        return /*#__PURE__*/React.createElement(_SingleNumber["default"], {
          prefixCls: prefixCls,
          count: Number(count),
          value: num,
          // eslint-disable-next-line react/no-array-index-key
          key: numberList.length - i
        });
      }));
    }
    // allow specify the border
    // mock border-color by box-shadow for compatible with old usage:
    // <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }} />
    if (style && style.borderColor) {
      newProps.style = Object.assign(Object.assign({}, style), {
        boxShadow: "0 0 0 1px ".concat(style.borderColor, " inset")
      });
    }
    if (children) {
      return (0, _reactNode.cloneElement)(children, function (oriProps) {
        return {
          className: (0, _classnames["default"])("".concat(prefixCls, "-custom-component"), oriProps === null || oriProps === void 0 ? void 0 : oriProps.className, motionClassName)
        };
      });
    }
    return /*#__PURE__*/React.createElement(Component, Object.assign({}, newProps, {
      ref: ref
    }), numberNodes);
  });
  var _default = _exports["default"] = ScrollNumber;
});