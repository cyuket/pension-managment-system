const express = require("express");
const router = express.Router();
const passport = require("passport");

// =====================================
// LOGIN ===============================
// =====================================
// show the login form
router.get("/admin-login", (req, res) => {
  // render the page and pass in any flash data if it exists
  res.render("admin-login", { message: req.flash("loginMessage") });
});

// process the login form
router.post(
  "/admin-login",
  passport.authenticate("admin-login", {
    successRedirect: "/admin-profile", // redirect to the secure profile section
    failureRedirect: "/admin-login", // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  })
);

module.exports = router;
