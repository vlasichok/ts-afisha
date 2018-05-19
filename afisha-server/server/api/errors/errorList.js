const errorList = {
    1 : {
        code: 1,
        description: 'EVENT_NOT_FOUND',
        cause: 'The event with requested ID was not found in a data base'
    },
    2 : {
        code: 1,
        description: 'INTERNAL_SERVER_ERROR',
        cause: ''
    },
    3 : {
        code: 2,
        description: 'UNKNOWN_ERROR',
        cause: ''
    }
};

module.exports = errorList;