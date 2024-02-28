define(["exports", "react", "antd4mx/table/util"], function (_exports, React, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = useTitleColumns;
  function fillTitle(columns, columnTitleProps) {
    return columns.map(function (column) {
      var cloneColumn = Object.assign({}, column);
      cloneColumn.title = (0, _util.renderColumnTitle)(column.title, columnTitleProps);
      if ('children' in cloneColumn) {
        cloneColumn.children = fillTitle(cloneColumn.children, columnTitleProps);
      }
      return cloneColumn;
    });
  }
  function useTitleColumns(columnTitleProps) {
    var filledColumns = React.useCallback(function (columns) {
      return fillTitle(columns, columnTitleProps);
    }, [columnTitleProps]);
    return [filledColumns];
  }
});