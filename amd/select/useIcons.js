define(["exports", "react", "@ant-design/icons/es/icons/CheckOutlined", "@ant-design/icons/es/icons/CloseCircleFilled", "@ant-design/icons/es/icons/CloseOutlined", "@ant-design/icons/es/icons/DownOutlined", "@ant-design/icons/es/icons/LoadingOutlined", "@ant-design/icons/es/icons/SearchOutlined", "antd4mx/_util/warning"], function (_exports, React, _CheckOutlined, _CloseCircleFilled, _CloseOutlined, _DownOutlined, _LoadingOutlined, _SearchOutlined, _warning) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useIcons;
  function useIcons(_ref) {
    var suffixIcon = _ref.suffixIcon,
      clearIcon = _ref.clearIcon,
      menuItemSelectedIcon = _ref.menuItemSelectedIcon,
      removeIcon = _ref.removeIcon,
      loading = _ref.loading,
      multiple = _ref.multiple,
      hasFeedback = _ref.hasFeedback,
      prefixCls = _ref.prefixCls,
      showSuffixIcon = _ref.showSuffixIcon,
      feedbackIcon = _ref.feedbackIcon,
      showArrow = _ref.showArrow,
      componentName = _ref.componentName;
    if (process.env.NODE_ENV !== 'production') {
      var warning = (0, _warning.devUseWarning)(componentName);
      warning.deprecated(!clearIcon, 'clearIcon', 'allowClear={{ clearIcon: React.ReactNode }}');
    }
    // Clear Icon
    var mergedClearIcon = clearIcon !== null && clearIcon !== void 0 ? clearIcon : /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null);
    // Validation Feedback Icon
    var getSuffixIconNode = function getSuffixIconNode(arrowIcon) {
      if (suffixIcon === null && !hasFeedback && !showArrow) {
        return null;
      }
      return /*#__PURE__*/React.createElement(React.Fragment, null, showSuffixIcon !== false && arrowIcon, hasFeedback && feedbackIcon);
    };
    // Arrow item icon
    var mergedSuffixIcon = null;
    if (suffixIcon !== undefined) {
      mergedSuffixIcon = getSuffixIconNode(suffixIcon);
    } else if (loading) {
      mergedSuffixIcon = getSuffixIconNode( /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
        spin: true
      }));
    } else {
      var iconCls = "".concat(prefixCls, "-suffix");
      mergedSuffixIcon = function mergedSuffixIcon(_ref2) {
        var open = _ref2.open,
          showSearch = _ref2.showSearch;
        if (open && showSearch) {
          return getSuffixIconNode( /*#__PURE__*/React.createElement(_SearchOutlined["default"], {
            className: iconCls
          }));
        }
        return getSuffixIconNode( /*#__PURE__*/React.createElement(_DownOutlined["default"], {
          className: iconCls
        }));
      };
    }
    // Checked item icon
    var mergedItemIcon = null;
    if (menuItemSelectedIcon !== undefined) {
      mergedItemIcon = menuItemSelectedIcon;
    } else if (multiple) {
      mergedItemIcon = /*#__PURE__*/React.createElement(_CheckOutlined["default"], null);
    } else {
      mergedItemIcon = null;
    }
    var mergedRemoveIcon = null;
    if (removeIcon !== undefined) {
      mergedRemoveIcon = removeIcon;
    } else {
      mergedRemoveIcon = /*#__PURE__*/React.createElement(_CloseOutlined["default"], null);
    }
    return {
      clearIcon: mergedClearIcon,
      suffixIcon: mergedSuffixIcon,
      itemIcon: mergedItemIcon,
      removeIcon: mergedRemoveIcon
    };
  }
});