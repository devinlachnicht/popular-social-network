const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// GET user or POST new user
router.route('/').get(getUsers).post(createUser);

// GET, UPDATE, or DELETE user by id
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// ADD or DELETE a friend by id
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;