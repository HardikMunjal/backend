var request = require('request');
var Vehicle = require('../schemas/vehicleSchema');
var User = require('../schemas/userSchema');



var cModel = {


  
  createNewVehicle: function(data,cb){
      var json = data.vehicle;
      var vehicle = new Vehicle(json)
      vehicle.save(function(err, result){
            return cb(null,result);
      })
    }
  };



module.exports = cModel;