const ErrorBuilder = require('../errors/errorBuilder');
const ERROR_LIST = require('../errors/errorList');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

const checkAuthenticated = (req, res, next) => {

    if(!req.header('authorization')) {
        return res.status(401).send(ErrorBuilder(ERROR_LIST.UNAUTHORIZED));
    }

    const token = req.header('authorization').split(' ')[1];
    if (!token){
        return res.status(401).send(ErrorBuilder(ERROR_LIST.UNAUTHORIZED));
    }
    const tokenParts = token.split('.');
    if(tokenParts.length !== 3){
        return res.status(401).send(ErrorBuilder(ERROR_LIST.UNAUTHORIZED));
    }

    try{
        const payload = jwt.verify(token, config.secrets.jwt);
        if(!payload){
            return res.status(401).send(ErrorBuilder(ERROR_LIST.UNAUTHORIZED));
        }
        //we pass the ID of the user "userId" in order to check if it authorised or not
        req.userId = payload.sub;
        next();
    } catch (error) {
        return res.status(500).send(ErrorBuilder(ERROR_LIST.UNKNOWN_ERROR, error));
    }
};

module.exports = checkAuthenticated;