const config = require('../../config/config');
const errorBuilder = (error, internalError) => {

    if(config.env === 'development' || config.env === 'testing'){
        error.description = internalError.name || error.description;
        error.cause = internalError.message || error.cause;
    }

    return error;
};

module.exports = errorBuilder;