/**
 * Created by mahesh on 28/12/15.
 */
var app = require('express')(),
    path = require('path');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(ROOT_DIR, 'views'));
app.set('view engine', 'jade');

module.exports = app;