var connectionString = 'mongodb://127.0.0.1:27017/web-maker'; // for local


if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds119732.mlab.com:19732/heroku_hn7k15dr'; // use yours
}

var mongoose = require("mongoose");
var db = mongoose.connect(connectionString);


module.exports = db;