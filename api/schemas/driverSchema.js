//customerSchema
'use strict'


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./userSchema');
var Vehicle = require('./vehicleSchema');



var driverSchema = new Schema({
	first_name:{
		type:String,
		default:null
	},
	last_name:{
		type:String,
		default:null
	},
	document_id:{
		type:String,
		default:null
	},
	city:{
		type:String,
		default:null
	},
	telephone:{
        type: String,
		default:null
	},
	email:{
		type:String,
		default:null
	},
	city:{
		type:String,
		default:null
	},
	vehicle_ids: [{
					 type: Schema.Types.ObjectId,
					  ref: 'vehicle' 
					}],
	license_no:{
		type:String,
		default:null
	},
	licence_validity:{
		type:String,
		default:null
	},
	licence_photo:{
		type:String,
		default:null
	},
	rntt_id:{
		type:String,
		default:null
	},
	rntt_validity:{
       type:String,
		default:null
	},
	rntt_photo:{
		type: String,
		default:null
	},
	createdAt:{
		type:Date,
		default:Date.now
	},
	created_by:{
		type:String,
		default:null
	}
});

var driver = mongoose.model('driver', driverSchema);

module.exports = driver;