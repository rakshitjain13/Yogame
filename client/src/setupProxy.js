const createProxyMiddleware = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
		"/google",
		createProxyMiddleware({
			target: "https://yogaml.herokuapp.com/",
			changeOrigin: true,
		})
	);
};
