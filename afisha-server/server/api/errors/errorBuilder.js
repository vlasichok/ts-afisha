const errorBuilder = (status, errorMessage, errorDescription) => {

    return {
        status: status,
        message: errorMessage,
        description: errorDescription
    }
};

module.exports = errorBuilder;