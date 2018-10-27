const router = require("express").Router();
const libraryRoutes = require("./library");
const userRoutes = require("./users");

// item routes
router.use("/library", libraryRoutes);
router.use("/users", userRoutes);


module.exports = router;
