const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gratuityRecordSchema = new Schema({
	name: {
		type: String,
		required: true
	},

	pensiner_id: {
		type: String,
		required: true
	},

	amount_paid: {
		type: Number,
		required: true
	},

	date_paid: { type: Date, default: Date.now }
});
const Graduity = mongoose.model("Graduity", gratuityRecordSchema);
module.exports = { Graduity };
