var history = require('connect-history-api-fallback');

var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
app = express()
//add this middleware
app.use(history());    
app.use(serveStatic(__dirname))
var port = process.env.PORT || 8000
app.listen(port, function() {
  console.log("App is running on port " + port);
});