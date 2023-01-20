const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/place',
    createProxyMiddleware({
      target: 'https://api.geoapify.com/v2/places',
      changeOrigin: true,
    })
  );
};