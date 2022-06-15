const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts);
router.route("/:id").get(getThoughtById).post(addThought).put(updateThought);
router.route("/:thoughtId/:userId").delete(deleteThought);
router.route("/:thoughtId/reactions").post(addReaction).delete();
router.route("/:thoughtId/:reactionId/reactions").delete(deleteReaction);

module.exports = router;
