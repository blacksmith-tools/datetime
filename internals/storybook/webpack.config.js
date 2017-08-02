const kadiraWebpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
const webpackConfig = require('../webpack/react/webpack.dev.config.js');

module.exports = function (config, env) {
  const newConfig = kadiraWebpackConfig(config, env);
  newConfig.module.rules = (newConfig.module.rules || []).concat(webpackConfig.module.rules);
  return newConfig;
};
