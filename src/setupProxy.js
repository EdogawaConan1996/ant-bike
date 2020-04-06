const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/telematics', {
      target: 'http://api.map.baidu.com/',
      changeOrigin: true
    }))
};
