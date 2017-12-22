var request = require('request');
var Driver = require('../schemas/driverSchema');
var Transporter = require('../schemas/transporterSchema');



var cModel = {


  
  createNewDriver: function(data,cb){
      var json = data.driver;
      var driver = new Driver(json)
      driver.save(function(err, result){

        if(result && data.driver.transporter_id){

          var rData={};
          rData.driver_id= result.id;

          Transporter.findByIdAndUpdate(
		        data.driver.transporter_id,
		        {$push: {"driver_ids": rData.driver_id}},
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

  fetchAllDriver: function(data,cb){
    
   Driver.find().limit(data.limit).populate({ path: 'vehicle_ids'}).lean().exec(function(err, result){

      if(err){
        return cb(err)
      }else{
        console.log(result)
        var extensibleRight = result;

        return cb(null,extensibleRight);
      }
    })
  },

  fetchDriver: function(data,cb){
    
    //var Driver=[];
    console.log(data.driver_id);
    Driver.find({_id:data.driver_id}).exec(function(err, result){

     if(err){
        return cb(err)
      }else{
        console.log(result)
        var extensibleRight = result;

        return cb(null,extensibleRight);
      }
    })
   },
   updateDriver: function(data,cb){
      
       Driver.update({_id: data.c_id}, data.driver, function(err, result) {
        console.log(err,result)
        if (err) {
          return cb(err);
        }
        return cb(null,result);
      });
      
    },

   deleteDriver: function(data,cb){
      
      Driver.findOneAndRemove({_id: data.c_id}, function(err, result) {
        if (err) return cb(err);

        // we have deleted the user
        return cb(null,result);
      });
    }
  };



module.exports = cModel;