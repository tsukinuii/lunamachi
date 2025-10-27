const config = {
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-a11y"
  ],
  docs: {
    autodocs: true
  }
};

export default config;
