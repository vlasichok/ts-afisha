const express = require('express');
const app = express();
const api = require('./api/api');
const error = require('./middleware/errorMiddleware');

//setup the app middleware
require('./middleware/appMiddleware')(app);
//setup the api router
app.use('/api', api);
//set up global error handling
app.use(error());
//export the app for testing
module.exports = app;
