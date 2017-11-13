var driverModel = require('../models/driverModel');
var async = require('async');

var customer = {


  createNewDriver: function(req, res, next) {
   
    var data = {};
    
  
    data.driver = req.body;
   
    driverModel.createNewDriver(data,function(err, result){
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