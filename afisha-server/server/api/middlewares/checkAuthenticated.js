const ErrorBuilder = require('../errors/errorBuilder');
const ERROR_LIST = require('../errors/errorList');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

const checkAuthenticated = (req, res, next) => {

    if(!req.header('authorization')) {
        return res.status(401).send(ErrorBuilder(401,ERROR_LIST.UNAUTHORIZED));
    }

    const token = req.header('authorization').split(' ')[1];
    try{
        const payload = jwt.verify(token, config.secrets.jwt);
        if(!payload){
            return res.status(401).send(ErrorBuilder(401,ERROR_LIST.UNAUTHORIZED));
        }
        //we pass the ID of the user "userId" in order to check if it authorised or not
        req.userId = payload.sub;
        next();
    } catch (error) {
        return res.status(500).send(ErrorBuilder(401,ERROR_LIST.UNKNOWN_ERROR, error.message));
    }
};

module.exports = checkAuthenticated;