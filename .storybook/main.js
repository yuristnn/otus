const custom = require('../webpack.config.js');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
    "@storybook/addon-actions"
  ],
  webpack: (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
  babel: async (options) => ({ ...options }),
}
