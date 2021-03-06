var request = require('request');
var Transporter = require('../schemas/transporterSchema');
var User = require('../schemas/userSchema');



var cModel = {


  
  createNewTransporter: function(data,cb){
      var json = data.transporter;
      var transporter = new Transporter(json)
      transporter.save(function(err, result){
            return cb(null,result);
      })
    },

  fetchAllTransporter: function(data,cb){
    
   Transporter.find().limit(data.limit).populate({ path: 'vehicle_ids'}).populate({ path: 'driver_ids'}).populate({ path: 'service_ids'}).lean().exec(function(err, result){

      if(err){
        return cb(err)
      }else{
        console.log(result)
        var extensibleRight = result;

        return cb(null,extensibleRight);
      }
    })
  },

  fetchTransporter: function(data,cb){
    
    //var Transporter=[];
    Transporter.find({_id:data.transporter_id}).populate({ path: 'vehicle_ids'}).populate({ path: 'driver_ids'}).populate({ path: 'service_ids'}).exec(function(err, result){

     if(err){
        return cb(err)
      }else{
        console.log(result)
        var extensibleRight = result;

        return cb(null,extensibleRight);
      }
    })
   },

   updateTransporter: function(data,cb){
      
       Transporter.update({_id: data.c_id}, data.transporter, function(err, result) {
        console.log(err,result)
        if (err) {
          return cb(err);
        }
        return cb(null,result);
      });
      
    },

   deleteTransporter: function(data,cb){
      
      Transporter.findOneAndRemove({_id: data.c_id}, function(err, result) {
        if (err) return cb(err);

        // we have deleted the user
        return cb(null,result);
      });
    }
  };



module.exports = cModel;