var vehicleModel = require('../models/vehicleModel');
var async = require('async');

var customer = {


 createNewVehicle: function(req, res, next) {
   
    var data = {};
    
  
    data.vehicle = req.body;
   
    vehicleModel.createNewVehicle(data,function(err, result){
      if(err){
        return res.status(410).send(err.message);
      }
        console.log(result)
        if(!result){
          var message = "Some Error Occurred";
    
          return res.status(400).send(message);
        }
        return res.json("Customer added successfully");
    })
  },

  fetchAllVehicle: function(req, res, next) {
   
    var data = {};
    data.limit=100;
    vehicleModel.fetchAllVehicle(data,function(err, result){
      if(err){
        return res.status(410).send(err.message);
      }
      console.log('resrsrsr',result)
      return res.json(result)
      })
  },

  fetchVehicle: function(req, res, next) {
   
    var data = {};
    data.vehicle_id = req.params.vehicle_id ? req.params.vehicle_id : null;

    vehicleModel.fetchVehicle(data,function(err, result){
        if(err && err==='Not Found'){
          var message = "Vehicle Id Not Found"
         return res.status(410).send(message);
         }
        
        else if(err){
          return res.status(410).send(err.message);
        }
         
         return res.json(result);
      })

  },

  updateVehicle: function(req, res, next) {
      
   var data={};
   data.c_id = req.params.vehicle_id ? req.params.vehicle_id : null;
   data.vehicle=req.body;
    vehicleModel.updateVehicle(data,function(err, result){
      if(err){
        return res.status(410).send(err.message);
      }

        console.log(result)
         return res.json("Vehicle updated successfully");
    })

  },

  deleteVehicle: function(req, res, next) {
      
   var data={};
   data.c_id = req.params.vehicle_id ? req.params.vehicle_id : null;
   vehicleModel.deleteVehicle(data,function(err, result){
        if(err){
          return res.status(410).send(err.message);
        }
        console.log(result)
        return res.json("Vehicle deleted successfully");
    })

  }

}
module.exports = customer;