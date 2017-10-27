// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 8000
app.listen(port, function() {
  console.log("App is running on port " + port);
});
//console.log('server started '+ port);