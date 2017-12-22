var transporterModel = require('../models/transporterModel');
var async = require('async');

var customer = {


  createNewTransporter: function(req, res, next) {
   
    var data = {};
    
  
    data.transporter = req.body;
   
    transporterModel.createNewTransporter(data,function(err, result){
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

  fetchAllTransporter: function(req, res, next) {
   
    var data = {};
    data.limit=100;
    transporterModel.fetchAllTransporter(data,function(err, result){
      if(err){
        return res.status(410).send(err.message);
      }
      console.log('resrsrsr',result)
      return res.json(result)
      })
  },

  fetchTransporter: function(req, res, next) {
   
    var data = {};
    data.transporter_id = req.params.transporter_id ? req.params.transporter_id : null;

    transporterModel.fetchTransporter(data,function(err, result){
        if(err && err==='Not Found'){
          var message = "Transporter Id Not Found"
         return res.status(410).send(message);
         }
        
        else if(err){
          return res.status(410).send(err.message);
        }
         
         return res.json(result);
      })

  },

   updateTransporter: function(req, res, next) {
      
   var data={};
   data.c_id = req.params.transporter_id ? req.params.transporter_id : null;
   data.transporter=req.body;
    transporterModel.updateTransporter(data,function(err, result){
      if(err){
        return res.status(410).send(err.message);
      }

        console.log(result)
         return res.json("Transporter updated successfully");
    })

  },

  deleteTransporter: function(req, res, next) {
      
   var data={};
   data.c_id = req.params.transporter_id ? req.params.transporter_id : null;
   transporterModel.deleteTransporter(data,function(err, result){
        if(err){
          return res.status(410).send(err.message);
        }
        console.log(result)
        return res.json("Transporter deleted successfully");
    })

  }


}
module.exports = customer;