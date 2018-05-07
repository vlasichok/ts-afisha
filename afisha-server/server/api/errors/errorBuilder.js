const errorBuilder = (status, errorMessage) => {

    return {
        status: status,
        message: errorMessage
    }
};

module.exports = errorBuilder;