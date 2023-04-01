const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'https://api.football-data.org',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/v4'
        },
        headers: {
          'X-Auth-Token': '6943fb2bcd6d400e99265ab22169d431'
        }
      })
    );
  };
  