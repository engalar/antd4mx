define(["exports", "@ant-design/icons/es/icons/CaretDownFilled", "@ant-design/icons/es/icons/FileOutlined", "@ant-design/icons/es/icons/LoadingOutlined", "@ant-design/icons/es/icons/MinusSquareOutlined", "@ant-design/icons/es/icons/PlusSquareOutlined", "classnames", "react", "antd4mx/_util/reactNode"], function (_exports, _CaretDownFilled, _FileOutlined, _LoadingOutlined, _MinusSquareOutlined, _PlusSquareOutlined, _classnames, React, _reactNode) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  var SwitcherIconCom = function SwitcherIconCom(props) {
    var prefixCls = props.prefixCls,
      switcherIcon = props.switcherIcon,
      treeNodeProps = props.treeNodeProps,
      showLine = props.showLine;
    var isLeaf = treeNodeProps.isLeaf,
      expanded = treeNodeProps.expanded,
      loading = treeNodeProps.loading;
    if (loading) {
      return /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
        className: "".concat(prefixCls, "-switcher-loading-icon")
      });
    }
    var showLeafIcon;
    if (showLine && _typeof(showLine) === 'object') {
      showLeafIcon = showLine.showLeafIcon;
    }
    if (isLeaf) {
      if (!showLine) {
        return null;
      }
      if (typeof showLeafIcon !== 'boolean' && !!showLeafIcon) {
        var leafIcon = typeof showLeafIcon === 'function' ? showLeafIcon(treeNodeProps) : showLeafIcon;
        var leafCls = "".concat(prefixCls, "-switcher-line-custom-icon");
        if ((0, _reactNode.isValidElement)(leafIcon)) {
          return (0, _reactNode.cloneElement)(leafIcon, {
            className: (0, _classnames["default"])(leafIcon.props.className || '', leafCls)
          });
        }
        return leafIcon;
      }
      return showLeafIcon ? ( /*#__PURE__*/React.createElement(_FileOutlined["default"], {
        className: "".concat(prefixCls, "-switcher-line-icon")
      })) : ( /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-switcher-leaf-line")
      }));
    }
    var switcherCls = "".concat(prefixCls, "-switcher-icon");
    var switcher = typeof switcherIcon === 'function' ? switcherIcon(treeNodeProps) : switcherIcon;
    if ((0, _reactNode.isValidElement)(switcher)) {
      return (0, _reactNode.cloneElement)(switcher, {
        className: (0, _classnames["default"])(switcher.props.className || '', switcherCls)
      });
    }
    if (switcher !== undefined) {
      return switcher;
    }
    if (showLine) {
      return expanded ? ( /*#__PURE__*/React.createElement(_MinusSquareOutlined["default"], {
        className: "".concat(prefixCls, "-switcher-line-icon")
      })) : ( /*#__PURE__*/React.createElement(_PlusSquareOutlined["default"], {
        className: "".concat(prefixCls, "-switcher-line-icon")
      }));
    }
    return /*#__PURE__*/React.createElement(_CaretDownFilled["default"], {
      className: switcherCls
    });
  };
  var _default = _exports["default"] = SwitcherIconCom;
});