define(["exports", "@ant-design/icons/es/icons/SearchOutlined", "react", "antd4mx/input"], function (_exports, _SearchOutlined, React, _input) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var Search = function Search(props) {
    var _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
      value = props.value,
      prefixCls = props.prefixCls,
      disabled = props.disabled,
      onChange = props.onChange,
      handleClear = props.handleClear;
    var handleChange = React.useCallback(function (e) {
      onChange === null || onChange === void 0 ? void 0 : onChange(e);
      if (e.target.value === '') {
        handleClear === null || handleClear === void 0 ? void 0 : handleClear();
      }
    }, [onChange]);
    return /*#__PURE__*/React.createElement(_input["default"], {
      placeholder: placeholder,
      className: prefixCls,
      value: value,
      onChange: handleChange,
      disabled: disabled,
      allowClear: true,
      prefix: /*#__PURE__*/React.createElement(_SearchOutlined["default"], null)
    });
  };
  if (process.env.NODE_ENV !== 'production') {
    Search.displayName = 'Search';
  }
  var _default = _exports["default"] = Search;
});