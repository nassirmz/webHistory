var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpHelper = require('./http-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  //console.log('below this line');
  console.log(__dirname);
  var file;
  
  if (req.method === 'GET') {    
    if (req.url === '/') {
      file = fs.readFile(__dirname + '/public/index.html', 'utf-8', function(err, data) {
        res.writeHead(200, httpHelper.headers);
        res.end(data);
      });   
    } else if(req.url === "/www.google.com") {
      file = fs.readFile(archive.paths.archivedSites + req.url, 'utf-8', function(err, data) {
        res.writeHead(200, httpHelper.headers);
        res.end(data);
      });

    } else {
      res.writeHead(404, httpHelper.headers);
      res.end();
    }
    
  }

  
};
