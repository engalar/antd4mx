define(["exports", "react", "rc-table", "antd4mx/table/Column", "antd4mx/table/ColumnGroup", "antd4mx/table/hooks/useSelection", "antd4mx/table/InternalTable"], function (_exports, React, _rcTable, _Column, _ColumnGroup, _useSelection, _InternalTable) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var Table = function Table(props, ref) {
    var renderTimesRef = React.useRef(0);
    renderTimesRef.current += 1;
    return /*#__PURE__*/React.createElement(_InternalTable["default"], Object.assign({}, props, {
      ref: ref,
      _renderTimes: renderTimesRef.current
    }));
  };
  var ForwardTable = /*#__PURE__*/React.forwardRef(Table);
  ForwardTable.SELECTION_COLUMN = _useSelection.SELECTION_COLUMN;
  ForwardTable.EXPAND_COLUMN = _rcTable.EXPAND_COLUMN;
  ForwardTable.SELECTION_ALL = _useSelection.SELECTION_ALL;
  ForwardTable.SELECTION_INVERT = _useSelection.SELECTION_INVERT;
  ForwardTable.SELECTION_NONE = _useSelection.SELECTION_NONE;
  ForwardTable.Column = _Column["default"];
  ForwardTable.ColumnGroup = _ColumnGroup["default"];
  ForwardTable.Summary = _rcTable.Summary;
  if (process.env.NODE_ENV !== 'production') {
    ForwardTable.displayName = 'Table';
  }
  var _default = _exports["default"] = ForwardTable;
});