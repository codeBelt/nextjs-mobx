const path = require('path');
const axios = require('axios');
const webpack = require('webpack');
const { parsed: localEnv } = require('dotenv').config();
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// const exportPathMap = async () => {
//   // we fetch our list of posts, this allow us to dynamically generate the exported pages
//   const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_page=1');
//   // transform the list of posts into a map of pages with the pathname `/post/:id`
//   const pages = response.reduce(
//     (pages, post) =>
//       Object.assign({}, pages, {
//         [`/post/${post.id}`]: { page: '/post/[id]' },
//       }),
//     {}
//   );
//
//   // combine the map of post pages with the home
//   return {
//     '/': { page: '/' },
//     ...pages,
//   };
// };

const webpackConfig = (config, options) => {
  config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

  config.resolve.alias['environment'] = path.join(__dirname, 'src', 'environments', process.env.CLIENT_ENV);

  config.module.rules.push({
    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 100000,
      },
    },
  });

  return config;
};

const nextConfig = {
  webpack: webpackConfig,
  env: {
    nextJsSecretKey: 'my-value',
  },
  // exportPathMap,
};

module.exports = withBundleAnalyzer(nextConfig);
