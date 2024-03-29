define(["exports", "react"], function (_exports, React) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var StatisticNumber = function StatisticNumber(props) {
    var value = props.value,
      formatter = props.formatter,
      precision = props.precision,
      decimalSeparator = props.decimalSeparator,
      _props$groupSeparator = props.groupSeparator,
      groupSeparator = _props$groupSeparator === void 0 ? '' : _props$groupSeparator,
      prefixCls = props.prefixCls;
    var valueNode;
    if (typeof formatter === 'function') {
      // Customize formatter
      valueNode = formatter(value);
    } else {
      // Internal formatter
      var val = String(value);
      var cells = val.match(/^(-?)(\d*)(\.(\d+))?$/);
      // Process if illegal number
      if (!cells || val === '-') {
        valueNode = val;
      } else {
        var negative = cells[1];
        var _int = cells[2] || '0';
        var decimal = cells[4] || '';
        _int = _int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);
        if (typeof precision === 'number') {
          decimal = decimal.padEnd(precision, '0').slice(0, precision > 0 ? precision : 0);
        }
        if (decimal) {
          decimal = "".concat(decimalSeparator).concat(decimal);
        }
        valueNode = [/*#__PURE__*/React.createElement("span", {
          key: "int",
          className: "".concat(prefixCls, "-content-value-int")
        }, negative, _int), decimal && ( /*#__PURE__*/React.createElement("span", {
          key: "decimal",
          className: "".concat(prefixCls, "-content-value-decimal")
        }, decimal))];
      }
    }
    return /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-content-value")
    }, valueNode);
  };
  var _default = _exports["default"] = StatisticNumber;
});