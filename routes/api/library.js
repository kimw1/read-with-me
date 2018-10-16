const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// Matches with "/api/library"
router.route("/")
  .get(itemController.findAll)
  .post(itemController.create);

// Matches with "/api/library/:id"
router.route("/:id")
  .get(itemController.findById)
  .delete(itemController.remove);

module.exports = router;

