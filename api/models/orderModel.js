var request = require('request');
var Order = require('../schemas/orderSchema');


var oModel = {


  fetchAllOrder: function(data,cb){
    
     Order.find({isactive:1}).limit(data.limit).lean().exec(function(err, result){

      if(err){
        return cb(err)
      }else{
        console.log(result)
        

        return cb(null,result);
      }
    })
  },
  fetchOrder: function(data,cb){
    
    //var Right=[];
    Order.find({_id:data.o_id,isactive:1}).exec(function(err, result){

     if(err){
        return cb(err)
      }else{
        console.log(result)
        var extensibleOrder = result;

        return cb(null,extensibleOrder);
      }
    })
  },
  
  createNewOrder: function(data,cb){
      var json = data.order;
      var order = new Order(json)
      order.save(function(err, result){
            return cb(null,result);
        //}
      })
    },
 
  updateOrder: function(data,cb){
    // data.order
    var json = data.order;
    var order = new Order(json)
    
       Order.update({_id: data.o_id,isactive:1}, {isactive:0}, function(err, result) {
        console.log(err,result)
        if (err) {
          return cb(err);
        }
        order.save(function(err, result){
          return cb(null,result);
         //}
         })
        // return cb(null,result);
      });
      
    },

   deleteOrder: function(data,cb){
      
      // Order.findOneAndRemove({_id: data.o_id}, function(err, result) {
      //   if (err) return cb(err);

      //   // we have deleted the user
      //   return cb(null,result);
      // });
      
      Order.update({_id: data.o_id,isactive:1}, {isactive:0}, function(err, result) {
        console.log(err,result)
        if (err) {
          return cb(err);
        }
         return cb(null,result);
      });
    },

  
  
  createNewBulkOrders: function(data,cb){

      var rawDocuments = data.raw;

      Order.insertMany(rawDocuments)
          .then(function(mongooseDocuments) {
               return cb(null,mongooseDocuments);
          })
          .catch(function(err) {

              return cb(err);


          });
    
    }
  };



module.exports = oModel;