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
    }
  };



module.exports = cModel;