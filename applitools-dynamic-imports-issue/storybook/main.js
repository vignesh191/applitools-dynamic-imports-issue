module.exports = {
  // Load custom logic for stories
  framework: "@storybook/web-components",
  stories: ["../src/stories"],
  staticDirs: ["../src/staticDir"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
  ],
};
