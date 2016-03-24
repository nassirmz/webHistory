var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  
  fs.readFile(exports.paths.list, 'utf-8', function(err, data) {
    if(err) {
      console.log("error");
    } else {
      // data.split('\n') is an array
      // the callback takes in an array
      return callback(data.split("\n"));
    }
    
  });
};

exports.isUrlInList = function(url, callback) {
  // read file
  // make soemthing = data 
  

  exports.readListOfUrls(function(urlsArray) {
    // urls is an array
    console.log(urlsArray);
    if(urlsArray.indexOf(url) > -1) {
      return callback(true);
      //urlsArray.push(url);
    } else {
      return callback(false);
    }
  });
  
};

exports.addUrlToList = function(url, callback) {

  fs.readFile(exports.paths.list, 'utf-8', function(err, data) {
    if(err) {
      console.log("error");
    } else {
      data.split("\n").push(url);
      return callback(data.split("\n"));
    }   
  });

};

exports.isUrlArchived = function(url, callback) {
  // if it is archived then return content
  console.log('line 75');
  fs.readdir(exports.paths.archivedSites, function(err, data) {
    if(err) {
      console.log(err);
    } else {
      if(data.indexOf(url) > -1) {
        callback(true);
      } else {
        callback(false);
      }
      //var urls = data.split("\n");

    }
  });
  // else put it in and return content

  
};

exports.downloadUrls = function() {
};
