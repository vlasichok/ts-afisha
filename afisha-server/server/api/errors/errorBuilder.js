const config = require('../../config/config');
const errorBuilder = (internalError, error = {}) => {

    if(config.env === 'development' || config.env === 'testing'){
        internalError.cause = error.message || internalError.cause;
    }

    return internalError;
};

module.exports = errorBuilder;