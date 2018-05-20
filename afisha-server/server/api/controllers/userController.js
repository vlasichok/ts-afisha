const User = require('../models/userModel');
const ErrorBuilder = require('../errors/errorBuilder');
const ERROR_LIST = require('../errors/errorList');

const userController = {
    findUserById: (req, res, next) => {
        User.findById(req.params.id, '-__v -password')
            .then((user) => {
                if(!user) {
                    return res.status(404).json(ErrorBuilder(ERROR_LIST.NOT_FOUND))
                } else {
                    //pass the user data to other methods
                    req.user = user;
                    next();
                }
            }, (error) => {
                return res.status(500).json(ErrorBuilder(ERROR_LIST.UNKNOWN_ERROR, error.message));
            });
    },
    getUser: (req, res) => {
        return res.status(200).json(req.user);
    },
    updateUser: (req, res) => {
        const user = req.user;
        Object.assign(user, req.body);

        user.save((error, updatedUser) => {
            if(error){
                return res.status(500).json(ErrorBuilder(ERROR_LIST.UNKNOWN_ERROR, error.message));
            } else {
                return res.status(200).send(updatedUser.toJSON());
            }
        });
    }
};

module.exports = userController;
