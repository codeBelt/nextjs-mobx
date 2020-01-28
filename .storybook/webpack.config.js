const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  });

  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: {
            mode: 'local',
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
            // localIdentName: '[sha1:hash:hex:4]',
            context: path.resolve(__dirname, 'src'),
            hashPrefix: 'my-custom-hash',
          },
        },
      },
      require.resolve('sass-loader')
    ],
  });


  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};

// https://gist.github.com/justincy/b8805ae2b333ac98d5a3bd9f431e8f70
