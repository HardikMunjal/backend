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
  }

}
module.exports = customer;