const mongoose = require("mongoose");

// define the schema for our user model
const adSchema = mongoose.Schema({
  personalInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
  },
  advertInfo: {
    companyName: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String },
    adDescription: { type: String, required: true }
  },
  pricingPlans: {
    basic: { type: String, required: true },
    standard: { type: String, required: true },
    premium: { type: String, required: true }
  }
});

// create the model for users and expose it to our app
module.exports = mongoose.model("Advert", adSchema);
