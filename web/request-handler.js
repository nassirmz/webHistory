var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpHelper = require('./http-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  //console.log('below this line');
  console.log(req.method);
  console.log(req.url);
  var file;
  var data = '';
  if (req.method === 'GET') {    
    if (req.url === '/') {
      file = fs.readFile(__dirname + '/public/index.html', 'utf-8', function(err, data) {
        res.writeHead(200, httpHelper.headers);
        res.end(data);
      });   
    } else if(req.url === "/www.google.com") {
      file = fs.readFile(archive.paths.archivedSites + req.url, 'utf-8', function(err, data) {
        res.writeHead(200, httpHelper.headers);
        console.log(data + ' is the data');
        res.end(data);
      });

    } else {
      res.writeHead(404, httpHelper.headers);
      res.end();
    } 
  }
  else if (req.method === 'POST') {
    req.on('data', function(chunk) {
      data+=chunk;
    });
    req.on("end", function(chunk) {
      console.log(data);
      var dataSlice = data.slice(4);
      fs.appendFile(archive.paths.list, dataSlice + '\n', function(err) {
        if (err) {
          console.log('there is an error');
        }
        else {
          console.log('it is saved');
        }
      });
      fs.readFile(archive.paths.list, 'utf-8', function(err, data) {
        res.writeHead(302, httpHelper.headers);
        res.end(data);
      });
    });
  }

  
};
