const errorBuilder = (error, cause) => {

    error.cause = cause.message || error.cause;

    return error;
};

module.exports = errorBuilder;