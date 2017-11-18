var request = require('request');
var Vehicle = require('../schemas/vehicleSchema');
var Driver = require('../schemas/driverSchema');
var Transporter = require('../schemas/transporterSchema');



var cModel = {


  
  createNewVehicle: function(data,cb){
      var json = data.vehicle;
      var vehicle = new Vehicle(json)
      vehicle.save(function(err, result){

      	if(result && data.vehicle.transporter_id){

          var rData={};
          rData.vehicle_id= result.id;

          Transporter.findByIdAndUpdate(
		        data.vehicle.transporter_id,
		        {$push: {"vehicle_ids": rData.vehicle_id}},
		        {safe: true, upsert: true, new : true},
		        function(err, result) {
		            console.log(err,result)
			        if (err) {
			          return cb(err);
			        }
			        return cb(null,result);
			      });
        }

        if(result && data.vehicle.transporter_id){

          var rData={};
          rData.vehicle_id= result.id;

          Driver.findByIdAndUpdate(
		        data.vehicle.driver_id,
		        {$push: {"vehicle_ids": rData.vehicle_id}},
		        {safe: true, upsert: true, new : true},
		        function(err, result) {
		            console.log(err,result)
			        if (err) {
			          return cb(err);
			        }
			        return cb(null,result);
			      });
        }
            return cb(null,result);
      })
    },


  fetchAllVehicle: function(data,cb){
    
     Vehicle.find().limit(data.limit).lean().exec(function(err, result){

      if(err){
        return cb(err)
      }else{
        console.log(result)
        var extensibleRight = result;

        return cb(null,extensibleRight);
      }
    })
  },

  fetchVehicle: function(data,cb){
    
    //var Vehicle=[];
    Vehicle.find({_id:data.vehicle_id}).exec(function(err, result){

     if(err){
        return cb(err)
      }else{
        console.log(result)
        var extensibleRight = result;

        return cb(null,extensibleRight);
      }
    })
   }
  };



module.exports = cModel;