define(["exports", "antd4mx/avatar/avatar", "antd4mx/avatar/group"], function (_exports, _avatar, _group) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Group", {
    enumerable: true,
    get: function get() {
      return _group["default"];
    }
  });
  _exports["default"] = void 0;
  var Avatar = _avatar["default"];
  Avatar.Group = _group["default"];
  var _default = _exports["default"] = Avatar;
});