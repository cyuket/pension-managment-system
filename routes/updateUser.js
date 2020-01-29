const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.put("/update", (req, res) => {
  User.findOneAndUpdate(
    { "local.name": "Darth Vader" },
    {
      $set: {
        "local.name": req.body.name,
        "local.email": req.body.email
      }
    },
    {
      sort: { _id: -1 },
      upsert: true
    },
    (err, result) => {
      if (err) return res.send(err);
      res.send(result);
    }
  );
});

module.exports = router;
