//console.info(process.env.NODE_ENV);

var loopback = require('loopback');
var boot = require('loopback-boot');
// console.info(loopback);
var app = module.exports = loopback();

app.use(loopback.favicon());
// it is a simple call to the loopback logger
app.use(loopback.logger('dev'));

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
