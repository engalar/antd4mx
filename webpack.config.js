const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

// 扫描目录下的所有ES模块文件
const scanDirectory = (dir) => {
  const files = fs.readdirSync(dir);
  return files.filter((file) => file.endsWith(".js"));
};

// 为每个ES模块文件生成对应的Webpack配置
const generateWebpackConfig = (entryFile, outputDir) => {
  const relativePath = path.relative("es", path.dirname(entryFile));
  const outputDirectory = path.join(outputDir, relativePath);
  const fileName = path.basename(entryFile, ".js");
  return {
    mode: "production", // 或者 'development'
    entry: entryFile,
    output: {
      path: outputDirectory,
      filename: fileName + ".js", // 不添加 .amd 后缀
      libraryTarget: "amd",
    },
  };
};

// 执行Webpack打包
const build = (config) => {
  webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.error(err || stats.compilation.errors);
    } else {
      console.log("Build successful");
    }
  });
};

// 主函数
const main = (inputDirectory, outputDirectory) => {
  const files = scanDirectory(inputDirectory);
  files.forEach((file) => {
    const entryFile = path.join(inputDirectory, file);
    const webpackConfig = generateWebpackConfig(entryFile, outputDirectory);
    build(webpackConfig);
  });
};

// 执行主函数，传入输入目录路径和输出目录路径
main("node_modules/antd/es", "amd");
