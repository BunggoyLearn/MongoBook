const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:userId/friends/:friendId')
  .put(addFriend)
  .delete(removeFriend);
module.exports = router;

//66fa7648a3677bffc528f491 66fa7300f597a27b8b41bee8