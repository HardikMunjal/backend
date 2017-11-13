var request = require('request');
var Driver = require('../schemas/driverSchema');
var User = require('../schemas/userSchema');



var cModel = {


  
  createNewDriver: function(data,cb){
      var json = data.driver;
      var driver = new Driver(json)
      driver.save(function(err, result){
            return cb(null,result);
      })
    }
  };



module.exports = cModel;