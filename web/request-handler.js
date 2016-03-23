var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpHelper = require('./http-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  //console.log('below this line');
  console.log(__dirname);
  if (req.method === 'GET') {
    console.log('it is a get');
    var file = fs.readFile(__dirname + '/public/index.html', 'utf-8', function(err, data) {
      //console.log(data);
      
      res.writeHead(200, httpHelper.headers);
      res.end(data);

      // need writeHead
      //res thing 
      // status code
    });
  }
  
};
