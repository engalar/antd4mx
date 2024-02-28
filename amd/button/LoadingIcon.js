define(["exports", "@ant-design/icons/es/icons/LoadingOutlined", "classnames", "rc-motion", "react", "antd4mx/button/IconWrapper"], function (_exports, _LoadingOutlined, _classnames, _rcMotion, _react, _IconWrapper) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var InnerLoadingIcon = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
    var prefixCls = _ref.prefixCls,
      className = _ref.className,
      style = _ref.style,
      iconClassName = _ref.iconClassName;
    var mergedIconCls = (0, _classnames["default"])("".concat(prefixCls, "-loading-icon"), className);
    return /*#__PURE__*/_react["default"].createElement(_IconWrapper["default"], {
      prefixCls: prefixCls,
      className: mergedIconCls,
      style: style,
      ref: ref
    }, /*#__PURE__*/_react["default"].createElement(_LoadingOutlined["default"], {
      className: iconClassName
    }));
  });
  var getCollapsedWidth = function getCollapsedWidth() {
    return {
      width: 0,
      opacity: 0,
      transform: 'scale(0)'
    };
  };
  var getRealWidth = function getRealWidth(node) {
    return {
      width: node.scrollWidth,
      opacity: 1,
      transform: 'scale(1)'
    };
  };
  var LoadingIcon = function LoadingIcon(props) {
    var prefixCls = props.prefixCls,
      loading = props.loading,
      existIcon = props.existIcon,
      className = props.className,
      style = props.style;
    var visible = !!loading;
    if (existIcon) {
      return /*#__PURE__*/_react["default"].createElement(InnerLoadingIcon, {
        prefixCls: prefixCls,
        className: className,
        style: style
      });
    }
    return /*#__PURE__*/_react["default"].createElement(_rcMotion["default"], {
      visible: visible,
      // We do not really use this motionName
      motionName: "".concat(prefixCls, "-loading-icon-motion"),
      motionLeave: visible,
      removeOnLeave: true,
      onAppearStart: getCollapsedWidth,
      onAppearActive: getRealWidth,
      onEnterStart: getCollapsedWidth,
      onEnterActive: getRealWidth,
      onLeaveStart: getRealWidth,
      onLeaveActive: getCollapsedWidth
    }, function (_ref2, ref) {
      var motionCls = _ref2.className,
        motionStyle = _ref2.style;
      return /*#__PURE__*/_react["default"].createElement(InnerLoadingIcon, {
        prefixCls: prefixCls,
        className: className,
        style: Object.assign(Object.assign({}, style), motionStyle),
        ref: ref,
        iconClassName: motionCls
      });
    });
  };
  var _default = _exports["default"] = LoadingIcon;
});