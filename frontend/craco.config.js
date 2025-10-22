const path = require("path");

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      // Disable ESLint plugin warnings
      const eslintPlugin = webpackConfig.plugins.find(
        plugin => plugin.constructor.name === 'ESLintWebpackPlugin'
      );
      if (eslintPlugin) {
        eslintPlugin.options.failOnError = false;
        eslintPlugin.options.failOnWarning = false;
      }
      return webpackConfig;
    },
  },
  devServer: (devServerConfig) => {
    // Fix deprecated middleware warnings
    return {
      ...devServerConfig,
      onBeforeSetupMiddleware: undefined,
      onAfterSetupMiddleware: undefined,
      setupMiddlewares: (middlewares, devServer) => {
        return middlewares;
      },
    };
  },
};
