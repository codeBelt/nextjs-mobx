// https://storybook.js.org/addons/

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
  ]
};

// https://github.com/storybookjs/storybook/tree/master/addons/knobs
// https://github.com/storybookjs/storybook/tree/master/addons/storyshots
// https://github.com/storybookjs/storybook/tree/master/addons/viewport
