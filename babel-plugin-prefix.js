const path = require("path");

module.exports = function ({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(e, state) {
        const { node } = e;
        const source = node.source.value;
        if (source.startsWith(".")) {
          // 解析相对路径到绝对路径
          const absolutePath = path.resolve(
            state.file.opts.filename,
            "..",
            source
          );
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
