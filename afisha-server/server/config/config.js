//default config object for out api
const config = {
    /* here goes NODE_ENV values */
    dev: 'development',
    test: 'testing',
    prod: 'production',
    port: process.env.PORT || 8800,
    dataBaseUrl: process.env.DATABASEURL || 'mongodb://localhost/eventAPI',
    expireTime: 60*60, //1 hour
    secrets: {
        jwt: process.env.JWT || 'hooters'
    }
};

// check if the NODE_ENV was set, default is dev
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

let envConfig;
// check if the require returns an error, then just use an empty object for envConfig
//so it won't start the server
try {
    envConfig = require('./' + config.env);
    envConfig = envConfig || {};
} catch (e) {
    envConfig = {};
}

module.exports = Object.assign(config, envConfig);