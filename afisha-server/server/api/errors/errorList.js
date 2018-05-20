const errorList = {
    INTERNAL_SERVER_ERROR : {
        code: 1,
        name: 'INTERNAL_SERVER_ERROR',
        cause: 'The server encountered an unexpected condition which prevented it from fulfilling the request.'
    },
    UNKNOWN_ERROR : {
        code: 2,
        name: 'UNKNOWN_ERROR',
        cause: 'The error is not related to expected server behavior.'
    },
    UNAUTHORIZED : {
        code: 3,
        name: 'UNKNOWN_ERROR',
        cause: 'The request requires user authentication. The client MAY repeat the request with a suitable Authorization data.'
    },
    EVENT_NOT_FOUND : {
        code: 4,
        name: 'EVENT_NOT_FOUND',
        cause: 'The event with requested ID was not found in a data base'
    },
};

module.exports = errorList;