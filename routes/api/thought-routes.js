const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

// GET thought or POST new thought
router.route('/').get(getThoughts).post(createThought);

// GET, UPDATE, or DELETE thought by id
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// POST reaction to thought
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE reaction by id
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;