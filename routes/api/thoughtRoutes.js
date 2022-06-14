const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts);
router.route("/:id").get(getThoughtById).post(addThought).put(updateThought);

router.route("/:thoughtId/:userId").delete(deleteThought);

module.exports = router;
