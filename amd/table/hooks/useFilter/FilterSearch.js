define(["exports", "@ant-design/icons/es/icons/SearchOutlined", "react", "antd4mx/input/index"], function (_exports, _SearchOutlined, React, _index) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function FilterSearch(_ref) {
    var value = _ref.value,
      onChange = _ref.onChange,
      filterSearch = _ref.filterSearch,
      tablePrefixCls = _ref.tablePrefixCls,
      locale = _ref.locale;
    if (!filterSearch) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(tablePrefixCls, "-filter-dropdown-search")
    }, /*#__PURE__*/React.createElement(_index["default"], {
      prefix: /*#__PURE__*/React.createElement(_SearchOutlined["default"], null),
      placeholder: locale.filterSearchPlaceholder,
      onChange: onChange,
      value: value,
      // for skip min-width of input
      htmlSize: 1,
      className: "".concat(tablePrefixCls, "-filter-dropdown-search-input")
    }));
  }
  var _default = _exports["default"] = FilterSearch;
});