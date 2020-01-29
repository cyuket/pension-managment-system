const express = require("express");
const router = express.Router();
const _ = require("lodash");
const User = require('../models/user');
const PensionerRecord = require('../models/pensioner_record')

// show the signup form
router.get("/addpension", (req, res) => {
    User.find({role: 'pensioner'}, (err, Users) => {
        if (err) return console.error(err);
        res.render("addPensionRecord.ejs", {Users });
    })
    
});


router.post("/addpension", (req, res) => {
    const form = _.pick(req.body, [
        `pension_amount`, `retirement_date`, `gratuity_amount`, `name`
    ]);
    const name = form.name;
    const pension_amount = form.pension_amount;
    const retirement_date = form.retirement_date;
    const gratuity_amount = form.gratuity_amount;
    const newRecord = {
        name,
        pension_amount,
        gratuity_amount,
        retirement_date
    }
    const pensionerRecord = new PensionerRecord(newRecord);
    pensionerRecord.save().then(record => {
        if (record) {
            res.redirect('/admin')
        }
    }).catch(e => {
        console.log(e)
    })
})
// process the signup form

module.exports = router;
