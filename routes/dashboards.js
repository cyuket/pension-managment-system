const express = require("express");
const router = express.Router();
const User = require("../models/user")
const userController = require("../controllers/userController");
const PensionerRecord = require('../models/pensioner_record')
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
// show the signup form
router.get("/admin", (req, res) => {
	// render the page and pass in any flash data if it exists
	PensionerRecord.find({}, (err, PensionRecords) => {
		if (err) return console.log(err);
		res.render("adminDashboard.ejs", {PensionRecords});
	})
	
});
router.get("/accountant", (req, res) => {
	PensionerRecord.find({}, (err, PensionRecords) => {
		if (err) return console.log(err);
		res.render("accountDashboard.ejs", { PensionRecords });
	})
});
router.get("/accountant-pensioner", (req, res) => {
	PensionerRecord.find({}, (err, PensionRecords) => {
		if (err) return console.log(err);
		if (PensionRecords) {
			for (let index = 0; index < PensionRecords.length; index++) {
		
				var n = month[new Date(PensionRecords[index].retirement_date).getMonth()];
				
				PensionRecords[index].months = n;
				console.log(PensionRecords[index].months)
				
			}
			

			res.render("accountPensioner.ejs", { PensionRecords });
		}
		
	})
});
router.get("/pensioner/?:id", async(req, res) => {
	
	const id = req.params.id;
	console.log(id)

	User.findById(id, (err, user) => {
		if (err) return console.error(err);
		
		PensionerRecord.find({ name: user.name }, (err, PensionRecords) => {

			if (err) return console.error(err);
			for (let index = 0; index < PensionRecords.length; index++) {

				var n = month[new Date(PensionRecords[index].retirement_date).getMonth()];

				PensionRecords[index].months = n;
				console.log(PensionRecords[index].months)

			}
			res.render("pensionerDashboard.ejs", { user,PensionRecords });
		})
		
		
	})

;	
});

// process the signup form

module.exports = router;
