const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const eventModel = new Schema({
    title: {
        type: String
    },
    shortDescription: {
        type: String
    },
    description: {
        type: String
    },
    createdAt: {
        type: String
    },
    updatedAt: {
        type: String
    },
    date: {
        type: String
    },
    imageUrl: {
        type: String
    },
    location: {
        type: String
    }
});

module.exports = mongoose.model('Event', eventModel);