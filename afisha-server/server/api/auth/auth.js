const User = require('../models/userModel');
const ErrorBuilder = require('../errors/errorBuilder');
const ERROR_LIST = require('../errors/errorList');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const bcrypt = require('bcrypt-nodejs');

const createAndSendToken = (user, res) =>{
    const payload = { sub: user._id };
    const token = jwt.sign(payload, config.secrets.jwt, { expiresIn: config.expireTime });
    return res.status(201).send({ token: token });
};

const registerUser = (req, res) => {
    User.create(req.body)
        .then((user) => {
            createAndSendToken(user, res);
        }, (error) => {
            return res.status(500).json(ErrorBuilder(ERROR_LIST.UNKNOWN_ERROR, error));
        });
};

const loginUser = (req, res) => {
    const userData = req.body;

    const success = (user) => {
        if(!user){
            return res.status(401).json(ErrorBuilder(ERROR_LIST.INVALID_CREDENTIALS));
        }

        bcrypt.compare(userData.password, user.password, (error, isMatch) =>{
            if(error){
                return res.status(500).json(ErrorBuilder(ERROR_LIST.UNKNOWN_ERROR, error));
            }
            if(!isMatch){
                return res.status(401).json(ErrorBuilder(ERROR_LIST.INVALID_CREDENTIALS));
            }
            createAndSendToken(user, res);
        });
    };

    User.findOne({email: userData.email})
        .then(success)
        .catch((error) => {
            return res.status(500).json(ErrorBuilder(ERROR_LIST.USER_NOT_FOUND, error));
        });

};

const auth = {
    loginUser: loginUser,
    registerUser: registerUser
};

module.exports = auth;