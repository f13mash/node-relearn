/**
 * Created by mahesh on 28/12/15.
 */
var app = rootRequire('lib/server');

var routes = require('./handlers/index');
var users = require('./handlers/users');
app.use('/', routes);
app.use('/users', users);