define(["exports", "rc-tree", "antd4mx/tree/DirectoryTree", "antd4mx/tree/Tree"], function (_exports, _rcTree, _DirectoryTree, _Tree) {
  "use strict";
  "use client";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var Tree = _Tree["default"];
  Tree.DirectoryTree = _DirectoryTree["default"];
  Tree.TreeNode = _rcTree.TreeNode;
  var _default = _exports["default"] = Tree;
});