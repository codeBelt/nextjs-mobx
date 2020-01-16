// const sitemap = require('nextjs-sitemap-generator');
const withStyles = require('@webdeb/next-styles')

// sitemap({
//   baseUrl: 'https://snipcart-nextjs-seo.netlify.com',
//   pagesDirectory: __dirname + "/pages",
//   targetDirectory : 'static/'
// });

module.exports = withStyles({
    sass: true, // use .scss files
    modules: true,
    // exportPathMap: function () {
    //     return {
    //         '/': { page: '/' },
    //     }
    // }
});
