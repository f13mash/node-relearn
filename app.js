ROOT_DIR = __dirname
rootRequire = function(path) {
  return require(require('path').join(ROOT_DIR, path))
}

var app = require('./lib/server')

//Setup Middlewares
require('./lib/middlewares');


//Setup Routes
require('./lib/routes');



module.exports = app;
