const path = require('path');
// const sitemap = require('nextjs-sitemap-generator');
const withStyles = require('@webdeb/next-styles');

// sitemap({
//   baseUrl: 'https://snipcart-nextjs-seo.netlify.com',
//   pagesDirectory: __dirname + "/pages",
//   targetDirectory : 'static/'
// });

module.exports = withStyles({
  sass: true, // use .scss files
  modules: true,
  webpack: function(config, options) {
    config.resolve.alias['environment'] = path.join(__dirname, 'src', 'environments', process.env.CLIENT_ENV);

    return config;
  },
  // exportPathMap: function () {
  //     return {
  //         '/': { page: '/' },
  //     }
  // }
});
