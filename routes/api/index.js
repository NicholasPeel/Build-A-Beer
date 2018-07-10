const router = require("express").Router();
const appRoutes = require("./appRoutes");

// Book routes
router.use("/customTap", appRoutes);

module.exports = router;
