const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.route('/').post(userController.createUser);

userRouter.use('/:id', userController.findUserById);

userRouter.route('/:id')
    .get(userController.getUser)
    .put(userController.updateUser);

module.exports = userRouter;