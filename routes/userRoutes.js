
//Mounting the router 
const express = require("express")
const router = express.Router();
const userController = require('../controllers/userController')

//User
// userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)
router.route('/').get(userController.getAllUsers).post(userController.createUser)

module.exports = router