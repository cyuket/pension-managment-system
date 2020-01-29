const passport = require("passport");
const userController = require("../controllers/userController");

module.exports = app => {
	// HOME PAGE (with login links)
	app.get("/", (req, res) => {
		res.render("index", { user: req.user });
	});

	app.get("/register", (req, res) => {
		res.render("register")
	});

	// // LOGIN ===============================
	app.use(require("./login"));
	app.post("/login", userController.login);
	
	// SIGNUP =============================
	app.use(require("./dashboards"));

	app.post("/signup", userController.signup);

	// Update User ==============================
	app.use(require("./updateUser"));
	
	// add record
	app.use(require("./addPensionRecord"));	
};
