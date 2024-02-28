const path = require("path");

module.exports = {
  mode: "production", // 或者 'development'，根据需要选择
  entry: "./node_modules/antd/lib/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "antd.bundle.js",
    library: "antd",
    libraryTarget: "amd",
  },
  module: {
    rules: [
      // 添加处理antd库中可能存在的样式文件的loader规则
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // 添加处理antd库中可能存在的图片等资源的loader规则
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  // 将antd库作为外部依赖，避免它被重复打包进输出文件
  externals: {
    // 这里根据实际情况配置antd库依赖的外部模块，例如react和react-dom
    react: "amd react",
    "react-dom": "amd react-dom",
  },
};
