const path = require('path');
// const sitemap = require('nextjs-sitemap-generator');
const withStyles = require('@webdeb/next-styles');

// sitemap({
//   baseUrl: 'https://snipcart-nextjs-seo.netlify.com',
//   pagesDirectory: __dirname + "/pages",
//   targetDirectory : 'static/'
// });

// exportPathMap = () => {
//     return {
//         '/': { page: '/' },
//     }
// }

const webpack = (config, options) => {
  config.resolve.alias['environment'] = path.join(__dirname, 'src', 'environments', process.env.CLIENT_ENV);

  config.module.rules.push({
    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 100000
      }
    }
  });

  return config;
};

module.exports = withStyles({
  sass: true, // use .scss files
  modules: true,
  webpack,
});
