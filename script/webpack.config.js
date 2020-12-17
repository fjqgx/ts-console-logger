const path = require("path");

var config = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "ts-console-logger.js",
    path: path.resolve(__dirname, "../dist")
  }
};
console.log(path.resolve(__dirname, "../dist"));

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "inline-source-map";
  } else if (argv.mode === "production") {
    // config.output.path = path.resolve(__dirname, "../dist");
    // config.output.libraryTarget = "umd";
    // config.output.globalObject = "typeof self !== 'undefined' ? self : this";
  }

  return config;
};