//customerSchema
'use strict'


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Service = require('./serviceSchema');
var Driver = require('./driverSchema');
var Vehicle = require('./vehicleSchema');


var transporterSchema = new Schema({
	company_name:{
		type:String,
		default:null
	},
	city:{
		type:String,
		default:null
	},
	rnc:{
		type:String,
		default:null
	},
	address:{
        type: String,
		default:null
	},
	zipcode:{
		type:String,
		default:null
	},
	phone1:{
		type:String,
		default:null
	},
	phone2:{
		type:String,
		default:null
	},
	contract_type:{
		type:String,
		default:null
	},
	effective_date:{
		type:String,
		default:null
	},
	service_ids:[{
					 type: Schema.Types.ObjectId,
					  ref: 'service' 
					}],
	fullname:{
       type:String,
		default:null
	},
	position:{
		type: String,
		default:null
	},
	email:{
		type:String,
		default:null
	},
	telephone:{
       type: Array,
		default:null
	},
	driver_ids: [{
					 type: Schema.Types.ObjectId,
					  ref: 'driver' 
					}],
	vehicle_ids: [{
					 type: Schema.Types.ObjectId,
					  ref: 'vehicle' 
					}],
	createdAt:{
		type:Date,
		default:Date.now
	},
	created_by:{
		type:String,
		default:null
	}
});

var transporter = mongoose.model('transporter', transporterSchema);

module.exports = transporter;