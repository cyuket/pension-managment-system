const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pensionerRecordSchema = new Schema({
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
	}

	// time: { type: Date, default: Date.now }
});
const Donor = mongoose.model("Donor", pensionerRecordSchema);
module.exports = { Donor };
