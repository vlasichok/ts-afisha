//intro point for our server
const config = require('./server/config/config');
const app = require('./server/server');
const mongoose = require('mongoose');

mongoose.connect(config.dataBaseUrl);

app.listen(config.port, () => {
    console.log('Running on http://localhost:' + config.port);
});