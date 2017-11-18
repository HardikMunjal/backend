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
  },

  fetchAllDriver: function(req, res, next) {
   
    var data = {};
    data.limit=100;
    driverModel.fetchAllDriver(data,function(err, result){
      if(err){
        return res.status(410).send(err.message);
      }
      console.log('resrsrsr',result)
      return res.json(result)
      })
  },

  fetchDriver: function(req, res, next) {
   
    var data = {};
    data.driver_id = req.params.driver_id ? req.params.driver_id : null;

    driverModel.fetchDriver(data,function(err, result){
        if(err && err==='Not Found'){
          var message = "Driver Id Not Found"
         return res.status(410).send(message);
         }
        
        else if(err){
          return res.status(410).send(err.message);
        }
         
         return res.json(result);
      })

  }


}
module.exports = customer;