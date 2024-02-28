const path = require("path");
const fs = require("fs");

module.exports = function ({ types: t }) {
  function fixPrefix(e, state) {
    const { node } = e;
    const source = node.source.value;
    if (source.startsWith(".")) {
      // 解析相对路径到绝对路径
      let absolutePath = path.resolve(state.file.opts.filename, "..", source);
      if (!fs.existsSync(absolutePath + ".js")) {
        absolutePath = absolutePath + "/index";
      }
      // 添加特定前缀
      const prefix = state.opts.prefix || "";
      // 更新导入路径为带有前缀的绝对路径
      node.source = t.stringLiteral(
        (prefix + path.relative(state.opts.root, absolutePath)).replace(
          /\\/g,
          "/"
        )
      );
    }
  }

  return {
    visitor: {
      ImportDeclaration: fixPrefix,
      ExportDeclaration(e, state) {
        const { node } = e;
        if (
          node.type == "ExportNamedDeclaration" &&
          node.source &&
          node.source.value &&
          node.source.value.startsWith(".")
        ) {
          // 解析相对路径到绝对路径
          let absolutePath = path.resolve(
            state.file.opts.filename,
            "..",
            node.source.value
          );
          if (!fs.existsSync(absolutePath + ".js")) {
            absolutePath = absolutePath + "/index";
          }
          // 添加特定前缀
          const prefix = state.opts.prefix || "";
          // 更新导入路径为带有前缀的绝对路径
          node.source = t.stringLiteral(
            (prefix + path.relative(state.opts.root, absolutePath)).replace(
              /\\/g,
              "/"
            )
          );
        }
      },
    },
  };
};
