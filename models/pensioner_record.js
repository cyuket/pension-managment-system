const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pensionerRecordSchema = new Schema({
	name: {
		type: String,
		required: true
	},

	pension_amount: {
		type: Number,
		required: true
	},
	gratuity_amount: {
		type: Number,
		required: true
	},
	gratuity_status: {
		type: Boolean,
		default: false
	},

	date_paid: { type: Date, default: Date.now },
	retirement_date: { type: Date, required: true }
	
});
const PensionerRecord = mongoose.model(
	"PensionerRecord",
	pensionerRecordSchema
);
module.exports = PensionerRecord ;
