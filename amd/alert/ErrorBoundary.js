define(["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/isNativeReflectConstruct", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "react", "antd4mx/alert/Alert"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _isNativeReflectConstruct2, _getPrototypeOf2, _inherits2, React, _Alert) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _callSuper(t, o, e) {
    return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, (0, _isNativeReflectConstruct2["default"])() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e));
  }
  var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
    (0, _inherits2["default"])(ErrorBoundary, _React$Component);
    function ErrorBoundary() {
      var _this;
      (0, _classCallCheck2["default"])(this, ErrorBoundary);
      _this = _callSuper(this, ErrorBoundary, arguments);
      _this.state = {
        error: undefined,
        info: {
          componentStack: ''
        }
      };
      return _this;
    }
    (0, _createClass2["default"])(ErrorBoundary, [{
      key: "componentDidCatch",
      value: function componentDidCatch(error, info) {
        this.setState({
          error: error,
          info: info
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          message = _this$props.message,
          description = _this$props.description,
          children = _this$props.children;
        var _this$state = this.state,
          error = _this$state.error,
          info = _this$state.info;
        var componentStack = info && info.componentStack ? info.componentStack : null;
        var errorMessage = typeof message === 'undefined' ? (error || '').toString() : message;
        var errorDescription = typeof description === 'undefined' ? componentStack : description;
        if (error) {
          return /*#__PURE__*/React.createElement(_Alert["default"], {
            type: "error",
            message: errorMessage,
            description: /*#__PURE__*/React.createElement("pre", {
              style: {
                fontSize: '0.9em',
                overflowX: 'auto'
              }
            }, errorDescription)
          });
        }
        return children;
      }
    }]);
    return ErrorBoundary;
  }(React.Component);
  var _default = _exports["default"] = ErrorBoundary;
});