var error = require('./error');
var usrCtlr = require('../api/controllers/userController');
var srvcCtlr = require('../api/controllers/serviceController');
var loadCtlr = require('../api/controllers/loadController');
var cstmrCtlr = require('../api/controllers/customerController');
var authCtlr = require('../api/controllers/authController');
var roleCtlr = require('../api/controllers/roleController');
var rightCtlr = require('../api/controllers/rightController');
var areaCtlr = require('../api/controllers/coveringAreaController');
var teamCtlr = require('../api/controllers/teamController');
var orderCtlr = require('../api/controllers/orderController');
var vehicleCtlr = require('../api/controllers/vehicleController');
var driverCtlr = require('../api/controllers/driverController');
var roleRightCtlr = require('../api/controllers/roleRightController');
var transporterCtlr = require('../api/controllers/transporterController');
var xlsxj = require("xlsx-to-json");

module.exports = function (app) {

    app.get('/upl',function(req, res, next) {
                res.render('chat.html');
              });

    app.get('/test',function(req,res){
        
          xlsxj({
            input: "Hardik.xlsx", 
            output: "output.json",
            sheet: "03-10-2017",
            lowerCaseHeaders:true //converts excel header rows into lowercase as json keys
          }, function(err, result) {
            if(err) {
              console.error(err);
            }else {
              res.json(result);
            }
          }); 
    })

    app.post('/authenticate', authCtlr.validateCredential);//, authCtrl.roleInjector)
    app.get('/authenticate', authCtlr.testCredential);//, authCtrl.roleInjector)


    //app.all('*',authCtlr.validateSession);
    //**************** USER BASED API
    app.get('/trk/user', usrCtlr.fetchAllUser);
    app.get('/trk/user/:user_id', usrCtlr.fetchUser);
    app.post('/trk/user', usrCtlr.createNewUser);
    app.post('/trk/user/:user_id', usrCtlr.updateUser);
    app.delete('/trk/user/:user_id',usrCtlr.deleteUser);

  //**************** SERVICE BASED API
    app.get('/trk/service', srvcCtlr.fetchAllService);
    app.get('/trk/service/:service_id', srvcCtlr.fetchService);
    app.post('/trk/service', srvcCtlr.createNewService);
    app.post('/trk/service/:service_id', srvcCtlr.updateService);
    app.delete('/trk/service/:service_id',srvcCtlr.deleteService);

    //  //**************** LOAD BASED API
    app.get('/trk/load', loadCtlr.fetchAllLoad);
    app.get('/trk/load/:load_id', loadCtlr.fetchLoad);
    app.post('/trk/load', loadCtlr.createNewLoad);
    app.post('/trk/load/:load_id', loadCtlr.updateLoad);
    app.delete('/trk/load/:load_id',loadCtlr.deleteLoad);

    //**************** CUSTOMER BASED API
     app.get('/trk/customer', cstmrCtlr.fetchAllCustomer);
     app.get('/trk/customer/:customer_id', cstmrCtlr.fetchCustomer);
     app.post('/trk/customer', cstmrCtlr.createNewCustomer);
     app.post('/trk/customer/:customer_id', cstmrCtlr.updateCustomer);
     app.delete('/trk/customer/:customer_id',cstmrCtlr.deleteCustomer);
  // app.put('/trk/service', serCtlr.createUser);
  // app.delete('/trk/service/:service_id', serCtlr.deleteUser);

  //**************** RIGHT BASED API
     app.get('/trk/right', rightCtlr.fetchAllRight);
     app.get('/trk/right/:right_id', rightCtlr.fetchRight);
     app.post('/trk/right', rightCtlr.createNewRight);
     app.post('/trk/right/:right_id', rightCtlr.updateRight);
     app.delete('/trk/right/:right_id',rightCtlr.deleteRight);


  //************* ROLE BASED API
     app.get('/trk/role', roleCtlr.fetchAllRole);
     app.get('/trk/role/:role_id', roleCtlr.fetchRole);
     app.post('/trk/role', roleCtlr.createNewRole);
     app.post('/trk/role/:role_id', roleCtlr.updateRole);
     app.delete('/trk/role/:role_id',roleCtlr.deleteRole);

  //************** ROLE-RIGHTS BASED API
     app.get('/trk/role-rights', roleRightCtlr.fetchAllRoleRight);

  //************** TEAM BASED API
     app.get('/trk/team', teamCtlr.fetchAllTeam);
     app.get('/trk/team/:team_id', teamCtlr.fetchTeam);
     app.post('/trk/team', teamCtlr.createNewTeam);
     app.post('/trk/team/:team_id', teamCtlr.updateTeam);
     app.delete('/trk/team/:team_id',teamCtlr.deleteTeam);


     //**************** COVERING AREA BASED API
     app.get('/trk/area', areaCtlr.fetchAllCoveringArea);
     app.get('/trk/area/:coveringArea_id', areaCtlr.fetchCoveringArea);
     app.post('/trk/area', areaCtlr.createNewCoveringArea);
     app.post('/trk/area/:coveringArea_id', areaCtlr.updateCoveringArea);
     app.delete('/trk/area/:coveringArea_id',areaCtlr.deleteCoveringArea);

     

    //**************** ORDER BASED API
     app.get('/trk/order', orderCtlr.fetchAllOrder);
     app.get('/trk/order/:order_id', orderCtlr.fetchOrder);
     app.post('/trk/order', orderCtlr.createNewOrder);
     app.post('/trk/order/:order_id', orderCtlr.updateOrder);
     app.delete('/trk/order/:order_id',orderCtlr.deleteOrder);



    //****************TRANSPORTER BASED API
     app.get('/trk/transporter', transporterCtlr.fetchAllTransporter);
     app.get('/trk/transporter/:transporter_id', transporterCtlr.fetchTransporter);
     app.post('/trk/transporter', transporterCtlr.createNewTransporter);
     app.post('/trk/transporter/:transporter_id', transporterCtlr.updateTransporter);
     app.delete('/trk/transporter/:transporter_id',transporterCtlr.deleteTransporter);

     //app.post('/trk/order/:order_id', orderCtlr.updateOrder);
     //app.delete('/trk/order/:order_id',orderCtlr.deleteOrder);


  //****************Vehicle BASED API
     app.post('/trk/vehicle', vehicleCtlr.createNewVehicle);
     app.get('/trk/vehicle', vehicleCtlr.fetchAllVehicle);
     app.get('/trk/vehicle/:vehicle_id', vehicleCtlr.fetchVehicle);
     app.post('/trk/vehicle/:vehicle_id', vehicleCtlr.updateVehicle);
     app.delete('/trk/vehicle/:vehicle_id',vehicleCtlr.deleteVehicle);
     

  //****************DRIVER BASED API
     app.post('/trk/driver', driverCtlr.createNewDriver);
     app.get('/trk/driver', driverCtlr.fetchAllDriver);
     app.get('/trk/driver/:driver_id', driverCtlr.fetchDriver);
     app.post('/trk/driver/:driver_id', driverCtlr.updateDriver);
     app.delete('/trk/driver/:driver_id',driverCtlr.deleteDriver);


}
