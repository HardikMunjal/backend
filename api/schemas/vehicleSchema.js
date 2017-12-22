//customerSchema
'use strict'


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./userSchema');


var vehicleSchema = new Schema({
	brand:{
		type:String,
		default:null
	},
	model:{
		type:String,
		default:null
	},
	type:{
		type:String,
		default:null
	},
	year:{
		type:String,
		default:null
	},
	driver:{
        type: String,
		default:null
	},
	transporter:{
		type:String,
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

var vehicle = mongoose.model('vehicle', vehicleSchema);

module.exports = vehicle;