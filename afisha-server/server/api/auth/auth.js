const User = require('../models/userModel');
const ErrorBuilder = require('../errors/errorBuilder');
const ERROR_LIST = require('../errors/errorList');
const jwt = require('jwt-simple');
const config = require('../../config/config');
const bcrypt = require('bcrypt-nodejs');

const registerUser = (req, res) => {
    User.create(req.body)
        .then((user) => {
            const payload = { sub: user._id };
            const token = jwt.encode(payload, config.secrets.jwt);
            return res.status(201).send({ token: token });
        }, (error) => {
            return res.status(500).json(ErrorBuilder(500, ERROR_LIST.UNKNOWN_ERROR, error.message));
        });
};

const loginUser = (req, res) => {
    const userData = req.body;

    const success = (user) => {
        if(!user){
            return res.status(401).json(ErrorBuilder(401, ERROR_LIST.INVALID_CREDENTIALS));
        }

        bcrypt.compare(userData.password, user.password, (error, isMatch) =>{
            if(error){
                return res.status(500).json(ErrorBuilder(500, ERROR_LIST.UNKNOWN_ERROR, error.message));
            }
            if(!isMatch){
                return res.status(401).json(ErrorBuilder(401, ERROR_LIST.INVALID_CREDENTIALS));
            }
            const payload = { sub: user._id };
            const token = jwt.encode(payload, config.secrets.jwt);

            res.status(200).send({ token: token });
        });
    };

    User.findOne({email: userData.email})
        .then(success)
        .catch((error) => {
            return res.status(500).json(ErrorBuilder(500, ERROR_LIST.UNKNOWN_ERROR, error.message));
        });

};

const auth = {
    loginUser: loginUser,
    registerUser: registerUser
};

module.exports = auth;