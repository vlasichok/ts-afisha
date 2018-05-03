const express = require('express');
const app = express();
const api = require('./api/api');

//setup the app middleware
require('./middleware/appMiddleware')(app);
//setup the api router
app.use('/api', api);
//set up global error handling

//export the app for testing
module.exports = app;
