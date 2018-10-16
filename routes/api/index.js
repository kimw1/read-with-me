const router = require("express").Router();
const libraryRoutes = require("./library");

// item routes
router.use("/library", libraryRoutes);

module.exports = router;
