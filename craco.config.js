const CracoAlias = require("craco-alias");
const webpack = require("webpack");

// module.exports = function override(config) {
//   const fallback = config.resolve?.fallback || {};
//   Object.assign(fallback, {
//     crypto: require.resolve("crypto-browserify"),
//     stream: require.resolve("stream-browserify"),
//     assert: require.resolve("assert"),
//     http: require.resolve("stream-http"),
//     https: require.resolve("https-browserify"),
//     os: require.resolve("os-browserify"),
//     url: require.resolve("url"),
//     fs: false,
//   });
//   config.resolve.fallback = fallback;
//   config.ignoreWarnings = [/Failed to parse source map/];
//   config.plugins = (config.plugins || []).concat([
//     new webpack.ProvidePlugin({
//       process: "process/browser",
//       Buffer: ["buffer", "Buffer"],
//     }),
//   ]);
//   return config;
// };

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          crypto: require.resolve("crypto-browserify"),
          stream: require.resolve("stream-browserify"),
          assert: require.resolve("assert"),
          http: require.resolve("stream-http"),
          https: require.resolve("https-browserify"),
          os: require.resolve("os-browserify"),
          url: require.resolve("url"),
          fs: false,
        },
      },
      ignoreWarnings: [/Failed to parse source map/],
      plugins: [
        new webpack.ProvidePlugin({
          process: "process/browser",
          Buffer: ["buffer", "Buffer"],
        }),
      ],
    },
  },
};

// module.exports = {
//   plugins: [
//     // {
//     //   plugin: CracoAlias,
//     //   options: {
//     //     source: "tsconfig",
//     //     baseUrl: "./src",
//     //     tsConfigPath: "./tsconfig.paths.json",
//     //   },
//     // },
//   ],
// };
