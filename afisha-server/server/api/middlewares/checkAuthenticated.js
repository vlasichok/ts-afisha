const ErrorBuilder = require('../errors/errorBuilder');
const ERROR_LIST = require('../errors/errorList');
const jwt = require('jwt-simple');
const config = require('../../config/config');

const checkAuthenticated = (req, res, next) => {

    if(!!req.header('authorization')) {
        return res.status(401).send(ErrorBuilder(401,ERROR_LIST.UNAUTHORIZED));
    }

    const token = req.header('authorization').split(' ')[1];
    const payload = jwt.decode(token, config.secrets.jwt);

    if(!payload){
        return res.status(401).send(ErrorBuilder(404,ERROR_LIST.UNAUTHORIZED));
    }
    req.userId = payload.sub;
    next();
};

module.exports = checkAuthenticated;