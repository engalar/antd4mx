const path = require("path");

module.exports = {
  // mode: "production", // 或者 'development'，根据需要选择
  // mode: "development", // 或者 'development'，根据需要选择
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "antd.umd.js",
    library: "antd",
    libraryTarget: "umd",
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
  externals: ['react', 'react-dom'],
};
