define(["exports", "rc-table"], function (_exports, _rcTable) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  /**
   * Same as `rc-table` but we modify trigger children update logic instead.
   */
  var _default = _exports["default"] = (0, _rcTable.genTable)(function (prev, next) {
    var prevRenderTimes = prev._renderTimes;
    var nextRenderTimes = next._renderTimes;
    return prevRenderTimes !== nextRenderTimes;
  });
});