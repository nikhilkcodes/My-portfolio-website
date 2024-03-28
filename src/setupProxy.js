// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/twitter-api',
		createProxyMiddleware({
			target: 'https://api.twitter.com',
			changeOrigin: true,
			pathRewrite: {
				'/twitter-api': '', // remove the '/twitter-api' path prefix
			},
		})
	);
};
