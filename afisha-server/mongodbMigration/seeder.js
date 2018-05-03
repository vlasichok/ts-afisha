const seeder = require('mongoose-seed');
const dataSeed = require('./dataSeed');
const config = require('../server/config/config');
const eventModel = './server/api/models/eventModel.js';
const commentModel = './server/api/models/commentModel.js';
const authorModel = './server/api/models/authorModel.js';
const userModel = './server/api/models/userModel.js';

// Connect to MongoDB via Mongoose
seeder.connect(config.dataBaseUrl, function() {

    // Load Mongoose models
    seeder.loadModels([
        eventModel,
        authorModel,
        commentModel,
        userModel
    ]);

    // Clear specified collections
    seeder.clearModels(['Event', 'Author', 'Comment', 'User'], function() {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(dataSeed(), function() {
            seeder.disconnect();
        });

    });
});