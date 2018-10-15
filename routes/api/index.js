const router = require("express").Router();
const libraryRoutes = require("./library");

// Book routes
router.use("/library", libraryRoutes);

module.exports = router;
