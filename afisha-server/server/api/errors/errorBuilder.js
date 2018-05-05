/**
 * This function build an Error message fo an API
 * @param status
 * @param errorMessage
 * @param errorDescription
 * @returns {{status: *, message: *, description: *}}
 */
const errorBuilder = (status, errorMessage, errorDescription) => {

    return {
        status: status,
        message: errorMessage,
        description: errorDescription
    }
};

module.exports = errorBuilder;